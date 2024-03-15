// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { createStatefulCallClient } from './StatefulCallClient';
export type { StatefulCallClient, StatefulCallClientArgs, StatefulCallClientOptions } from './StatefulCallClient';
export type { StatefulDeviceManager } from './DeviceManagerDeclarative';
export type {
  CallAgentState,
  CallClientState,
  CallError,
  CallErrors,
  CallErrorTarget,
  CallState,
  DeviceManagerState,
  DiagnosticsCallFeatureState,
  IncomingCallState,
  LocalVideoStreamState,
  MediaDiagnosticsState,
  NetworkDiagnosticsState,
  RecordingCallFeatureState as RecordingCallFeature,
  RemoteParticipantState,
  RemoteVideoStreamState,
  TranscriptionCallFeatureState as TranscriptionCallFeature,
  VideoStreamRendererViewState
} from './CallClientState';
export type { CreateViewResult } from './StreamUtils';
/* @conditional-compile-remove(raise-hand) */
export type { RaiseHandCallFeatureState as RaiseHandCallFeature } from './CallClientState';
/* @conditional-compile-remove(raise-hand) */
export type { RaisedHandState } from './CallClientState';
/* @conditional-compile-remove(one-to-n-calling) */
export type { DeclarativeCallAgent, IncomingCallManagement } from './CallAgentDeclarative';
/* @conditional-compile-remove(one-to-n-calling) */
export type { DeclarativeIncomingCall } from './IncomingCallDeclarative';
/* @conditional-compile-remove(video-background-effects) */
export type { LocalVideoStreamVideoEffectsState } from './CallClientState';
/* @conditional-compile-remove(capabilities) */
export type { CapabilitiesFeatureState } from './CallClientState';
/* @conditional-compile-remove(close-captions) */
export type { CaptionsCallFeatureState, CaptionsInfo } from './CallClientState';
/* @conditional-compile-remove(call-transfer) */
export type { AcceptedTransfer, TransferFeatureState as TransferFeature } from './CallClientState';
export type { OptimalVideoCountFeatureState } from './CallClientState';
/* @conditional-compile-remove(ppt-live) */
export type { PPTLiveCallFeatureState } from './CallClientState';
/* @conditional-compile-remove(reaction) */
export type { ReactionState } from './CallClientState';
/* @conditional-compile-remove(spotlight) */
export type { SpotlightCallFeatureState, SpotlightState } from './CallClientState';
