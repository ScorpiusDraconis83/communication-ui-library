// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DiagnosticQuality } from '@azure/communication-calling';
import { useId } from '@fluentui/react-hooks';
import { _isInCall } from '@internal/calling-component-bindings';
import { ActiveErrorMessage, ErrorBar, ParticipantMenuItemsCallback } from '@internal/react-components';
/* @conditional-compile-remove(gallery-layouts) */
import { VideoGalleryLayout } from '@internal/react-components';
import React from 'react';
/* @conditional-compile-remove(dtmf-dialer) */
import { useState } from 'react';
import { AvatarPersonaDataCallback } from '../../common/AvatarPersona';
import { useLocale } from '../../localization';
import { CallCompositeOptions } from '../CallComposite';
import { CallArrangement } from '../components/CallArrangement';
import { MediaGallery } from '../components/MediaGallery';
import { NetworkReconnectTile } from '../components/NetworkReconnectTile';
import { useHandlers } from '../hooks/useHandlers';
import { usePropsFor } from '../hooks/usePropsFor';
import { useSelector } from '../hooks/useSelector';
import { callStatusSelector } from '../selectors/callStatusSelector';
import { complianceBannerSelector } from '../selectors/complianceBannerSelector';
import { mediaGallerySelector } from '../selectors/mediaGallerySelector';
import { mutedNotificationSelector } from '../selectors/mutedNotificationSelector';
import { networkReconnectTileSelector } from '../selectors/networkReconnectTileSelector';
import { reduceCallControlsForMobile } from '../utils';
import { MobileChatSidePaneTabHeaderProps } from '../../common/TabHeader';
import { SidePaneRenderer } from '../components/SidePane/SidePaneProvider';
/* @conditional-compile-remove(capabilities) */
import { CapabilitiesChangeNotificationBarProps } from '../components/CapabilitiesChangedNotificationBar';
/* @conditional-compile-remove(dtmf-dialer) */
import { DtmfDialpadPage } from './DtmfDialpadPage';

/**
 * @private
 */
export interface CallPageProps {
  mobileView: boolean;
  modalLayerHostId: string;
  callInvitationURL?: string;
  onFetchAvatarPersonaData?: AvatarPersonaDataCallback;
  onFetchParticipantMenuItems?: ParticipantMenuItemsCallback;
  updateSidePaneRenderer: (renderer: SidePaneRenderer | undefined) => void;
  mobileChatTabHeader?: MobileChatSidePaneTabHeaderProps;
  options?: CallCompositeOptions;
  latestErrors: ActiveErrorMessage[];
  onDismissError: (error: ActiveErrorMessage) => void;
  /* @conditional-compile-remove(gallery-layouts) */
  galleryLayout: VideoGalleryLayout;
  /* @conditional-compile-remove(capabilities) */
  capabilitiesChangedNotificationBarProps?: CapabilitiesChangeNotificationBarProps;
  /* @conditional-compile-remove(gallery-layouts) */
  onUserSetGalleryLayoutChange?: (layout: VideoGalleryLayout) => void;
  /* @conditional-compile-remove(gallery-layouts) */
  userSetOverflowGalleryPosition?: 'Responsive' | 'horizontalTop';
  /* @conditional-compile-remove(gallery-layouts) */
  onSetUserSetOverflowGalleryPosition?: (position: 'Responsive' | 'horizontalTop') => void;
  onCloseChatPane?: () => void;
}

/**
 * @private
 */
export const CallPage = (props: CallPageProps): JSX.Element => {
  const {
    callInvitationURL,
    onFetchAvatarPersonaData,
    onFetchParticipantMenuItems,
    options,
    mobileView,
    /* @conditional-compile-remove(gallery-layouts) */
    galleryLayout = 'floatingLocalVideo',
    /* @conditional-compile-remove(gallery-layouts) */
    onUserSetGalleryLayoutChange,
    /* @conditional-compile-remove(gallery-layouts) */
    userSetOverflowGalleryPosition = 'Responsive',
    /* @conditional-compile-remove(gallery-layouts) */
    onSetUserSetOverflowGalleryPosition,
    onCloseChatPane
  } = props;

  // To use useProps to get these states, we need to create another file wrapping Call,
  // It seems unnecessary in this case, so we get the updated states using this approach.
  const { callStatus } = useSelector(callStatusSelector);
  const mediaGalleryProps = useSelector(mediaGallerySelector);
  const mediaGalleryHandlers = useHandlers(MediaGallery);
  const complianceBannerProps = useSelector(complianceBannerSelector);
  const errorBarProps = usePropsFor(ErrorBar);
  const mutedNotificationProps = useSelector(mutedNotificationSelector);
  const networkReconnectTileProps = useSelector(networkReconnectTileSelector);

  /* @conditional-compile-remove(dtmf-dialer) */
  const [dtmfDialerPresent, setDtmfDialerPresent] = useState<boolean>(false);

  const strings = useLocale().strings.call;

  // Reduce the controls shown when mobile view is enabled.
  const callControlOptions = mobileView ? reduceCallControlsForMobile(options?.callControls) : options?.callControls;

  const drawerMenuHostId = useId('drawerMenuHost');

  const onRenderGalleryContentTrampoline = (): JSX.Element => {
    /* @conditional-compile-remove(dtmf-dialer) */
    if (dtmfDialerPresent) {
      return (
        <DtmfDialpadPage
          mobileView={props.mobileView}
          modalLayerHostId={props.modalLayerHostId}
          options={props.options}
          updateSidePaneRenderer={props.updateSidePaneRenderer}
          mobileChatTabHeader={props.mobileChatTabHeader}
          latestErrors={props.latestErrors}
          onDismissError={props.onDismissError}
          /* @conditional-compile-remove(capabilities) */
          capabilitiesChangedNotificationBarProps={props.capabilitiesChangedNotificationBarProps}
          onSetDialpadPage={() => setDtmfDialerPresent(!dtmfDialerPresent)}
          dtmfDialerPresent={dtmfDialerPresent}
        />
      );
    } else {
      return (
        <MediaGallery
          isMobile={mobileView}
          {...mediaGalleryProps}
          {...mediaGalleryHandlers}
          onFetchAvatarPersonaData={onFetchAvatarPersonaData}
          /* @conditional-compile-remove(pinned-participants) */
          remoteVideoTileMenuOptions={options?.remoteVideoTileMenuOptions}
          drawerMenuHostId={drawerMenuHostId}
          /* @conditional-compile-remove(click-to-call) */
          localVideoTileOptions={options?.localVideoTile}
          /* @conditional-compile-remove(gallery-layouts) */
          userSetOverflowGalleryPosition={userSetOverflowGalleryPosition}
          /* @conditional-compile-remove(gallery-layouts) */
          userSetGalleryLayout={galleryLayout}
        />
      );
    }
    return (
      <MediaGallery
        isMobile={mobileView}
        {...mediaGalleryProps}
        {...mediaGalleryHandlers}
        onFetchAvatarPersonaData={onFetchAvatarPersonaData}
        /* @conditional-compile-remove(pinned-participants) */
        remoteVideoTileMenuOptions={options?.remoteVideoTileMenuOptions}
        drawerMenuHostId={drawerMenuHostId}
        /* @conditional-compile-remove(click-to-call) */
        localVideoTileOptions={options?.localVideoTile}
        /* @conditional-compile-remove(gallery-layouts) */
        userSetOverflowGalleryPosition={userSetOverflowGalleryPosition}
        /* @conditional-compile-remove(gallery-layouts) */
        userSetGalleryLayout={galleryLayout}
      />
    );
  };

  return (
    <CallArrangement
      id={drawerMenuHostId}
      complianceBannerProps={{ ...complianceBannerProps, strings }}
      errorBarProps={options?.errorBar !== false && errorBarProps}
      mutedNotificationProps={mutedNotificationProps}
      callControlProps={{
        callInvitationURL: callInvitationURL,
        onFetchParticipantMenuItems: onFetchParticipantMenuItems,
        options: callControlOptions,
        increaseFlyoutItemSize: mobileView
      }}
      /* @conditional-compile-remove(one-to-n-calling) */ /* @conditional-compile-remove(close-captions) */
      onFetchAvatarPersonaData={onFetchAvatarPersonaData}
      mobileView={mobileView}
      modalLayerHostId={props.modalLayerHostId}
      onRenderGalleryContent={() =>
        _isInCall(callStatus) ? (
          isNetworkHealthy(networkReconnectTileProps.networkReconnectValue) ? (
            onRenderGalleryContentTrampoline()
          ) : (
            <NetworkReconnectTile {...networkReconnectTileProps} />
          )
        ) : (
          <></>
        )
      }
      updateSidePaneRenderer={props.updateSidePaneRenderer}
      mobileChatTabHeader={props.mobileChatTabHeader}
      onCloseChatPane={onCloseChatPane}
      dataUiId={'call-page'}
      latestErrors={props.latestErrors}
      onDismissError={props.onDismissError}
      /* @conditional-compile-remove(gallery-layouts) */
      onUserSetOverflowGalleryPositionChange={onSetUserSetOverflowGalleryPosition}
      /* @conditional-compile-remove(gallery-layouts) */
      onUserSetGalleryLayoutChange={onUserSetGalleryLayoutChange}
      /* @conditional-compile-remove(gallery-layouts) */
      userSetGalleryLayout={galleryLayout}
      /* @conditional-compile-remove(capabilities) */
      capabilitiesChangedNotificationBarProps={props.capabilitiesChangedNotificationBarProps}
      /* @conditional-compile-remove(dtmf-dialer) */
      onSetDialpadPage={() => setDtmfDialerPresent(!dtmfDialerPresent)}
    />
  );
};

/**
 * @private
 */
export const isNetworkHealthy = (value: DiagnosticQuality | boolean | undefined): boolean => {
  // We know that the value is actually of type DiagnosticQuality for this diagnostic.
  // We ignore any boolen values, considering the network to still be healthy.
  // Thus, only DiagnosticQuality.Poor or .Bad indicate network problems.
  return value === true || value === false || value === undefined || value === DiagnosticQuality.Good;
};
