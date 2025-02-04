// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/* @conditional-compile-remove(breakout-rooms) */
import {
  BreakoutRoom,
  BreakoutRoomsCallFeature,
  BreakoutRoomsEventData,
  BreakoutRoomsSettings,
  Call,
  TeamsCall
} from '@azure/communication-calling';
/* @conditional-compile-remove(breakout-rooms) */
import { CallContext } from './CallContext';
/* @conditional-compile-remove(breakout-rooms) */
import { CallIdRef } from './CallIdRef';
/* @conditional-compile-remove(breakout-rooms) */
import { NotificationTarget } from './CallClientState';

/* @conditional-compile-remove(breakout-rooms) */
const MILLSECONDS_BEFORE_END_TIME_TO_SHOW_CLOSING_NOTIFICATION = 30000;

/* @conditional-compile-remove(breakout-rooms) */
/**
 * @private
 */
export class BreakoutRoomsSubscriber {
  private _callIdRef: CallIdRef;
  private _context: CallContext;
  private _breakoutRoomsFeature: BreakoutRoomsCallFeature;
  private _breakoutRoomClosingSoonTimeoutId: ReturnType<typeof setTimeout> | undefined;

  constructor(callIdRef: CallIdRef, context: CallContext, breakoutRoomsFeature: BreakoutRoomsCallFeature) {
    this._callIdRef = callIdRef;
    this._context = context;
    this._breakoutRoomsFeature = breakoutRoomsFeature;

    this.subscribe();
  }

  public unsubscribe = (): void => {
    this._breakoutRoomsFeature.off('breakoutRoomsUpdated', this.onBreakoutRoomsUpdated);
    // Clear breakout room joined notification for this call.
    this._context.deleteLatestNotification(this._callIdRef.callId, 'breakoutRoomJoined');
    // Clear breakout room closing soon notification for this call.
    this._context.deleteLatestNotification(this._callIdRef.callId, 'breakoutRoomClosingSoon');
    clearTimeout(this._breakoutRoomClosingSoonTimeoutId);
  };

  private subscribe(): void {
    this._breakoutRoomsFeature.on('breakoutRoomsUpdated', this.onBreakoutRoomsUpdated);
  }

  private onBreakoutRoomsUpdated = (eventData: BreakoutRoomsEventData): void => {
    if (eventData.type === 'assignedBreakoutRooms') {
      this.onAssignedBreakoutRoomUpdated(eventData.data);
    } else if (eventData.type === 'join') {
      this.onBreakoutRoomsJoined(eventData.data);
    } else if (eventData.type === 'breakoutRoomsSettings' && eventData.data) {
      this.onBreakoutRoomSettingsUpdated(eventData.data);
    }
  };

  private onAssignedBreakoutRoomUpdated = (breakoutRoom?: BreakoutRoom): void => {
    const callState = this._context.getState().calls[this._callIdRef.callId];
    const currentAssignedBreakoutRoom = callState?.breakoutRooms?.assignedBreakoutRoom;

    // This call won't exist in the calls array in state if this call is a breakout room that was re-assigned.
    // If so, do nothing.
    if (callState === undefined) {
      return;
    }

    if (!breakoutRoom) {
      // This scenario covers the case where the user is unassigned from a breakout room.
      if (currentAssignedBreakoutRoom?.call?.id) {
        this._context.deleteLatestNotification(currentAssignedBreakoutRoom.call.id, 'breakoutRoomJoined');
        this._context.deleteLatestNotification(currentAssignedBreakoutRoom.call.id, 'breakoutRoomClosingSoon');
        clearTimeout(this._breakoutRoomClosingSoonTimeoutId);
      }
      this._context.setAssignedBreakoutRoom(this._callIdRef.callId, breakoutRoom);
      return;
    }

    // TODO: Fix the condition in this if statement to check for different breakout room ID instead of the display name
    // when Calling SDK fixes the breakout room call id to be correct
    if (
      breakoutRoom.state === 'open' &&
      callState.breakoutRooms?.breakoutRoomDisplayName &&
      callState.breakoutRooms.breakoutRoomDisplayName !== breakoutRoom.displayName
    ) {
      this._context.setLatestNotification(this._callIdRef.callId, {
        target: 'assignedBreakoutRoomChanged',
        timestamp: new Date(Date.now())
      });
    } else if (
      breakoutRoom.state === 'open' &&
      !callState?.breakoutRooms?.breakoutRoomSettings &&
      this._context.getOpenBreakoutRoom() === undefined
    ) {
      const target: NotificationTarget =
        breakoutRoom.autoMoveParticipantToBreakoutRoom === false
          ? 'assignedBreakoutRoomOpenedPromptJoin'
          : 'assignedBreakoutRoomOpened';
      this._context.setLatestNotification(this._callIdRef.callId, { target, timestamp: new Date(Date.now()) });
    } else if (breakoutRoom.state === 'closed' && currentAssignedBreakoutRoom?.state === 'open') {
      // This scenario covers the case where the breakout room is opened but then closed before the user joins.
      this._context.deleteLatestNotification(this._callIdRef.callId, 'assignedBreakoutRoomOpened');
      this._context.deleteLatestNotification(this._callIdRef.callId, 'assignedBreakoutRoomOpenedPromptJoin');
      this._context.deleteLatestNotification(this._callIdRef.callId, 'assignedBreakoutRoomChanged');
      this._context.deleteLatestNotification(this._callIdRef.callId, 'breakoutRoomJoined');
    } else if (breakoutRoom.state === 'closed') {
      // This scenario covers the case where the breakout room is closed
      this._context.deleteLatestNotification(this._callIdRef.callId, 'assignedBreakoutRoomOpened');
      this._context.deleteLatestNotification(this._callIdRef.callId, 'assignedBreakoutRoomOpenedPromptJoin');
      this._context.deleteLatestNotification(this._callIdRef.callId, 'assignedBreakoutRoomChanged');
      this._context.deleteLatestNotification(this._callIdRef.callId, 'breakoutRoomJoined');
      this._context.deleteLatestNotification(this._callIdRef.callId, 'breakoutRoomClosingSoon');
      clearTimeout(this._breakoutRoomClosingSoonTimeoutId);
      const openBreakoutRoomId = this._context.getOpenBreakoutRoom();
      if (openBreakoutRoomId && this._context.getState().calls[openBreakoutRoomId]) {
        // Show notification that the assigned breakout room was closed if the user is in that breakout room.
        this._context.setLatestNotification(this._callIdRef.callId, {
          target: 'assignedBreakoutRoomClosed',
          timestamp: new Date(Date.now())
        });
      }
      this._context.deleteOpenBreakoutRoom();
    }

    this._context.setAssignedBreakoutRoom(this._callIdRef.callId, breakoutRoom);
  };

  private onBreakoutRoomsJoined = (call: Call | TeamsCall): void => {
    this._context.setBreakoutRoomOriginCallId(this._callIdRef.callId, call.id);
    this._context.deleteLatestNotification(this._callIdRef.callId, 'assignedBreakoutRoomOpened');
    this._context.deleteLatestNotification(this._callIdRef.callId, 'assignedBreakoutRoomOpenedPromptJoin');
    this._context.deleteLatestNotification(this._callIdRef.callId, 'assignedBreakoutRoomChanged');

    // Send latest notification for breakoutRoomJoined on behalf of the call that was joined.
    this._context.setLatestNotification(call.id, {
      target: 'breakoutRoomJoined',
      timestamp: new Date(Date.now())
    });

    this._context.setOpenBreakoutRoom(call.id);

    // If assigned breakout room has a display name, set the display name for its call state.
    const assignedBreakoutRoomDisplayName =
      this._context.getState().calls[this._callIdRef.callId]?.breakoutRooms?.assignedBreakoutRoom?.displayName;
    if (assignedBreakoutRoomDisplayName) {
      this._context.setBreakoutRoomDisplayName(call.id, assignedBreakoutRoomDisplayName);
    }
  };

  private onBreakoutRoomSettingsUpdated = (breakoutRoomSettings: BreakoutRoomsSettings): void => {
    // If the roomEndTime is available, set a timeout to show a notification before the room closes.
    if (
      typeof breakoutRoomSettings.roomEndTime === 'string' &&
      !Number.isNaN(Date.parse(breakoutRoomSettings.roomEndTime))
    ) {
      const now = new Date(Date.now());
      const roomClosingTime = new Date(breakoutRoomSettings.roomEndTime).getTime();
      const timeBeforeClosing = roomClosingTime - now.getTime();
      const timeBeforeSendingClosingSoonNotification = Math.max(
        timeBeforeClosing - MILLSECONDS_BEFORE_END_TIME_TO_SHOW_CLOSING_NOTIFICATION,
        0
      );
      if (!this._breakoutRoomClosingSoonTimeoutId) {
        this._breakoutRoomClosingSoonTimeoutId = setTimeout(
          () =>
            this._context.setLatestNotification(this._callIdRef.callId, {
              target: 'breakoutRoomClosingSoon',
              timestamp: now
            }),
          timeBeforeSendingClosingSoonNotification
        );
      }
    }
    this._context.setBreakoutRoomSettings(this._callIdRef.callId, breakoutRoomSettings);
  };
}
