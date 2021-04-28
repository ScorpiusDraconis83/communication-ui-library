// © Microsoft Corporation. All rights reserved.

import { Call, CallClientState, DeviceManagerState, IncomingCall } from '@azure/acs-calling-declarative';

/**
 * Common props used to reference declarative client state.
 */
export type BaseSelectorProps = {
  callId: string;
};

export const getCalls = (state: CallClientState): Map<string, Call> => state.calls;

export const getCallsEnded = (state: CallClientState): Call[] => state.callsEnded;

export const getIncomingCalls = (state: CallClientState): Map<string, IncomingCall> => state.incomingCalls;

export const getIncomingCallsEnded = (state: CallClientState): IncomingCall[] => state.incomingCallsEnded;

export const getDeviceManager = (state: CallClientState): DeviceManagerState => state.deviceManagerState;
