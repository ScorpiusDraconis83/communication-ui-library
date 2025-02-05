// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CommunicationParticipant } from './CommunicationParticipant';

/**
 * Calling participant's state, as reflected in the UI components.
 *
 * @public
 */
export type CallParticipantListParticipant = ParticipantListParticipant & {
  /** State of calling participant */
  state: ParticipantState;
  /** Whether calling participant is screen sharing */
  isScreenSharing?: boolean;
  /** Whether calling participant is muted */
  isMuted?: boolean;
  /** Whether calling participant is speaking */
  isSpeaking?: boolean;
  /* @conditional-compile-remove(raise-hand) */
  /** Whether calling participant is raised hand */
  raisedHand?: RaisedHand;
  /* @conditional-compile-remove(reaction) */
  /**
   * Whether calling participant has reacted
   *
   * @beta
   * */
  reaction?: Reaction;
};

/* @conditional-compile-remove(raise-hand) */
/**
 * Raised hand state with order
 *
 * @public
 */
export type RaisedHand = {
  raisedHandOrderPosition: number;
};

/* @conditional-compile-remove(reaction) */
/**
 * Reaction state with reaction type to render
 *
 * @beta
 */
export type Reaction = {
  /**
   * Specifies the type of reaction videoTile should render i.e. like, heart etc.
   */
  reactionType: string;
  /**
   * Received timestamp for the message as default Date format.
   */
  receivedAt: Date;
};

/**
 * Participants displayed in a {@link ParticipantList}.
 *
 * @public
 */
export type ParticipantListParticipant = CommunicationParticipant & {
  /**
   * If true, local participant can remove this participant from the roster.
   */
  isRemovable: boolean;
};

/**
 * @public
 * The connection state of a call participant.
 */
export type ParticipantState =
  | 'Idle'
  | 'Connecting'
  | 'Ringing'
  | 'Connected'
  | 'Hold'
  | 'InLobby'
  | 'EarlyMedia'
  | 'Disconnected';
