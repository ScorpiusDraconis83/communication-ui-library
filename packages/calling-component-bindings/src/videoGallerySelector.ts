// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { toFlatCommunicationIdentifier } from '@internal/acs-ui-common';
import { CallClientState, RemoteParticipantState } from '@internal/calling-stateful-client';
import { VideoGalleryRemoteParticipant, VideoGalleryLocalParticipant } from '@internal/react-components';
import { createSelector } from 'reselect';
import {
  CallingBaseSelectorProps,
  getDisplayName,
  getDominantSpeakers,
  getIdentifier,
  getIsMuted,
  getIsScreenSharingOn,
  getLocalVideoStreams,
  getScreenShareRemoteParticipant
} from './baseSelectors';
/* @conditional-compile-remove(rooms) */
import { getRole } from './baseSelectors';
/* @conditional-compile-remove(hide-attendee-name) */
import { isHideAttendeeNamesEnabled } from './baseSelectors';
/* @conditional-compile-remove(optimal-video-count) */
import { getOptimalVideoCount } from './baseSelectors';
import { _updateUserDisplayNames } from './utils/callUtils';
import { checkIsSpeaking } from './utils/SelectorUtils';
import {
  _videoGalleryRemoteParticipantsMemo,
  _dominantSpeakersWithFlatId,
  convertRemoteParticipantToVideoGalleryRemoteParticipant,
  memoizeLocalParticipant
} from './utils/videoGalleryUtils';
/* @conditional-compile-remove(spotlight) */
import { memoizeSpotlightedParticipantIds } from './utils/videoGalleryUtils';
/* @conditional-compile-remove(raise-hand) */
import { getLocalParticipantRaisedHand } from './baseSelectors';
/* @conditional-compile-remove(reaction) */
import { getLocalParticipantReactionState } from './baseSelectors';
/* @conditional-compile-remove(reaction) */
import { memoizedConvertToVideoTileReaction } from './utils/participantListSelectorUtils';
import { getRemoteParticipantsExcludingConsumers } from './getRemoteParticipantsExcludingConsumers';
/* @conditional-compile-remove(spotlight) */
import { getSpotlightedParticipants } from './baseSelectors';

/**
 * Selector type for {@link VideoGallery} component.
 *
 * @public
 */
export type VideoGallerySelector = (
  state: CallClientState,
  props: CallingBaseSelectorProps
) => {
  screenShareParticipant: VideoGalleryRemoteParticipant | undefined;
  localParticipant: VideoGalleryLocalParticipant;
  remoteParticipants: VideoGalleryRemoteParticipant[];
  dominantSpeakers?: string[];
  /* @conditional-compile-remove(optimal-video-count) */
  optimalVideoCount?: number;
  /* @conditional-compile-remove(spotlight) */
  spotlightedParticipants?: string[];
};

/**
 * Provides data attributes to {@link VideoGallery} component.
 * @public
 */
export const videoGallerySelector: VideoGallerySelector = createSelector(
  [
    getScreenShareRemoteParticipant,
    getRemoteParticipantsExcludingConsumers,
    getLocalVideoStreams,
    getIsMuted,
    getIsScreenSharingOn,
    getDisplayName,
    getIdentifier,
    getDominantSpeakers,
    /* @conditional-compile-remove(optimal-video-count) */
    getOptimalVideoCount,
    /* @conditional-compile-remove(rooms) */
    getRole,
    /* @conditional-compile-remove(raise-hand) */
    getLocalParticipantRaisedHand,
    /* @conditional-compile-remove(hide-attendee-name) */
    isHideAttendeeNamesEnabled,
    /* @conditional-compile-remove(reaction) */
    getLocalParticipantReactionState,
    /* @conditional-compile-remove(spotlight) */
    getSpotlightedParticipants
  ],
  (
    screenShareRemoteParticipantId,
    remoteParticipants,
    localVideoStreams,
    isMuted,
    isScreenSharingOn,
    displayName: string | undefined,
    identifier: string,
    dominantSpeakers,
    /* @conditional-compile-remove(optimal-video-count) */
    optimalVideoCount,
    /* @conditional-compile-remove(rooms) */
    role,
    /* @conditional-compile-remove(raise-hand) */
    raisedHand,
    /* @conditional-compile-remove(hide-attendee-name) */
    isHideAttendeeNamesEnabled,
    /* @conditional-compile-remove(reaction) */
    localParticipantReaction,
    /* @conditional-compile-remove(spotlight) */
    spotlightedParticipants
  ) => {
    const screenShareRemoteParticipant =
      screenShareRemoteParticipantId && remoteParticipants
        ? remoteParticipants[screenShareRemoteParticipantId]
        : undefined;
    const localVideoStream = localVideoStreams?.find((i) => i.mediaStreamType === 'Video');

    const dominantSpeakerIds = _dominantSpeakersWithFlatId(dominantSpeakers);
    const dominantSpeakersMap: Record<string, number> = {};
    dominantSpeakerIds?.forEach((speaker, idx) => (dominantSpeakersMap[speaker] = idx));
    const noRemoteParticipants: RemoteParticipantState[] = [];
    /* @conditional-compile-remove(reaction) */
    const localParticipantReactionState = memoizedConvertToVideoTileReaction(localParticipantReaction);
    /* @conditional-compile-remove(spotlight) */
    const spotlightedParticipantIds = memoizeSpotlightedParticipantIds(spotlightedParticipants);

    return {
      screenShareParticipant: screenShareRemoteParticipant
        ? convertRemoteParticipantToVideoGalleryRemoteParticipant(
            toFlatCommunicationIdentifier(screenShareRemoteParticipant.identifier),
            screenShareRemoteParticipant.isMuted,
            checkIsSpeaking(screenShareRemoteParticipant),
            screenShareRemoteParticipant.videoStreams,
            screenShareRemoteParticipant.state,
            screenShareRemoteParticipant.displayName,
            /* @conditional-compile-remove(raise-hand) */
            screenShareRemoteParticipant.raisedHand
          )
        : undefined,
      localParticipant: memoizeLocalParticipant(
        identifier,
        displayName,
        isMuted,
        isScreenSharingOn,
        localVideoStream,
        /* @conditional-compile-remove(rooms) */
        role,
        /* @conditional-compile-remove(raise-hand) */
        raisedHand,
        /* @conditional-compile-remove(reaction) */
        localParticipantReactionState
      ),
      remoteParticipants: _videoGalleryRemoteParticipantsMemo(
        updateUserDisplayNamesTrampoline(remoteParticipants ? Object.values(remoteParticipants) : noRemoteParticipants),
        /* @conditional-compile-remove(hide-attendee-name) */
        isHideAttendeeNamesEnabled,
        /* @conditional-compile-remove(hide-attendee-name) */
        role
      ),
      dominantSpeakers: dominantSpeakerIds,
      /* @conditional-compile-remove(optimal-video-count) */
      maxRemoteVideoStreams: optimalVideoCount,
      /* @conditional-compile-remove(spotlight) */
      spotlightedParticipants: spotlightedParticipantIds
    };
  }
);

const updateUserDisplayNamesTrampoline = (remoteParticipants: RemoteParticipantState[]): RemoteParticipantState[] => {
  /* @conditional-compile-remove(PSTN-calls) */
  return _updateUserDisplayNames(remoteParticipants);
  return remoteParticipants;
};
