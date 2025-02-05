// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { TypingIndicator } from './TypingIndicator';
export type { TypingIndicatorProps, TypingIndicatorStrings, TypingIndicatorStylesProps } from './TypingIndicator';

export { ErrorBar } from './ErrorBar';
export type { ActiveErrorMessage, ErrorBarProps, ErrorBarStrings, ErrorType } from './ErrorBar';

export { GridLayout } from './GridLayout';
export type { GridLayoutProps, GridLayoutStyles } from './GridLayout';

export { SendBox } from './SendBox';
/* @conditional-compile-remove(mention) */
export { _MentionPopover } from './MentionPopover';

export { ImageGallery } from './ImageGallery';
export type { ImageGalleryStrings } from './ImageGallery';

export type { SendBoxProps, SendBoxStrings, SendBoxStylesProps } from './SendBox';

/* @conditional-compile-remove(rich-text-editor) */
export { RTESendBox } from './RTE/RTESendBox';
/* @conditional-compile-remove(rich-text-editor) */
export type { RTESendBoxProps } from './RTE/RTESendBox';

/* @conditional-compile-remove(mention) */
export type {
  _MentionPopoverProps,
  MentionLookupOptions,
  MentionDisplayOptions,
  MentionOptions,
  Mention,
  MentionPopoverStrings
} from './MentionPopover';

export type { ImageGalleryProps, ImageGalleryImageProps } from './ImageGallery';

/* @conditional-compile-remove(file-sharing) */
export type { ActiveFileUpload } from './SendBox';

export { MessageStatusIndicator } from './MessageStatusIndicator';
export type { MessageStatusIndicatorProps, MessageStatusIndicatorStrings } from './MessageStatusIndicator';

export { MessageThread } from './MessageThread';
export type {
  MessageProps,
  MessageThreadProps,
  MessageThreadStrings,
  MessageThreadStyles,
  JumpToNewMessageButtonProps,
  MessageRenderer,
  UpdateMessageCallback,
  CancelEditCallback
} from './MessageThread';

export { StreamMedia } from './StreamMedia';
export type { StreamMediaProps } from './StreamMedia';
export type { LoadingState } from './StreamMedia';

export { ParticipantItem } from './ParticipantItem';
export type { ParticipantItemProps, ParticipantItemStrings, ParticipantItemStyles } from './ParticipantItem';

export { ParticipantList } from './ParticipantList';
export type {
  ParticipantListItemStyles,
  ParticipantListProps,
  ParticipantListStyles,
  ParticipantMenuItemsCallback
} from './ParticipantList';

/* @conditional-compile-remove(total-participant-count) */
export type { ParticipantListStrings } from './ParticipantList';

export { Announcer } from './Announcer';
export type { AnnouncerProps } from './Announcer';

export { VideoGallery } from './VideoGallery';
export type { VideoGalleryProps, VideoGalleryStrings, VideoGalleryStyles, VideoGalleryLayout } from './VideoGallery';
/* @conditional-compile-remove(pinned-participants) */
export type { VideoTileContextualMenuProps, VideoTileDrawerMenuProps } from './VideoGallery';
/* @conditional-compile-remove(vertical-gallery) */
export type { OverflowGalleryPosition } from './VideoGallery';
/* @conditional-compile-remove(click-to-call) */ /* @conditional-compile-remove(rooms) */
export type { LocalVideoTileSize } from './VideoGallery';
export type { HorizontalGalleryStyles } from './HorizontalGallery';

export { LocalVideoCameraCycleButton } from './LocalVideoCameraButton';
export type { LocalVideoCameraCycleButtonProps } from './LocalVideoCameraButton';

export { CameraButton } from './CameraButton';
export type {
  CameraButtonContextualMenuStyles,
  CameraButtonProps,
  CameraButtonStrings,
  CameraButtonStyles
} from './CameraButton';

export { ControlBar } from './ControlBar';
export type { ControlBarProps, ControlBarLayout } from './ControlBar';

export { ControlBarButton } from './ControlBarButton';
export type { ControlBarButtonProps, ControlBarButtonStrings, ControlBarButtonStyles } from './ControlBarButton';

export { EndCallButton } from './EndCallButton';
export type { EndCallButtonProps, EndCallButtonStrings } from './EndCallButton';

export { MicrophoneButton } from './MicrophoneButton';
export type {
  MicrophoneButtonStyles,
  MicrophoneButtonContextualMenuStyles,
  MicrophoneButtonProps,
  MicrophoneButtonStrings
} from './MicrophoneButton';

export { DevicesButton, generateDefaultDeviceMenuProps as _generateDefaultDeviceMenuProps } from './DevicesButton';
export type {
  OptionsDevice,
  DevicesButtonProps,
  DevicesButtonStrings,
  DevicesButtonStyles,
  DevicesButtonContextualMenuStyles,
  DeviceMenuProps as _DeviceMenuProps,
  DeviceMenuStrings as _DeviceMenuStrings,
  DeviceMenuStyles as _DeviceMenuStyles
} from './DevicesButton';

/* @conditional-compile-remove(call-readiness) */
export {
  CameraAndMicrophoneSitePermissions,
  MicrophoneSitePermissions,
  CameraSitePermissions
} from './DevicePermissions/SitePermissions';
/* @conditional-compile-remove(call-readiness) */
export type { SitePermissionsStrings, SitePermissionsStyles } from './DevicePermissions/SitePermissionsScaffolding';
/* @conditional-compile-remove(call-readiness) */
export type {
  CameraAndMicrophoneSitePermissionsStrings,
  CameraAndMicrophoneSitePermissionsProps,
  CameraSitePermissionsStrings,
  CameraSitePermissionsProps,
  CommonSitePermissionsProps,
  MicrophoneSitePermissionsStrings,
  MicrophoneSitePermissionsProps
} from './DevicePermissions/SitePermissions';
/* @conditional-compile-remove(call-readiness) */
export { BrowserPermissionDenied } from './DevicePermissions/BrowserPermissionDenied';
/* @conditional-compile-remove(call-readiness) */
export type {
  BrowserPermissionDeniedStrings,
  BrowserPermissionDeniedStyles,
  BrowserPermissionDeniedProps
} from './DevicePermissions/BrowserPermissionDenied';
/* @conditional-compile-remove(call-readiness) */
export { BrowserPermissionDeniedIOS } from './DevicePermissions/BrowserPermissionDeniedIOS';
/* @conditional-compile-remove(call-readiness) */
export type {
  BrowserPermissionDeniedIOSStrings,
  BrowserPermissionDeniedIOSProps
} from './DevicePermissions/BrowserPermissionDeniedIOS';

export { ParticipantsButton } from './ParticipantsButton';
export type {
  ParticipantsButtonContextualMenuStyles,
  ParticipantsButtonProps,
  ParticipantsButtonStrings,
  ParticipantsButtonStyles
} from './ParticipantsButton';

export { ScreenShareButton } from './ScreenShareButton';
export type { ScreenShareButtonProps, ScreenShareButtonStrings } from './ScreenShareButton';

/* @conditional-compile-remove(raise-hand) */
export { RaiseHandButton } from './RaiseHandButton';
/* @conditional-compile-remove(raise-hand) */
export type { RaiseHandButtonProps, RaiseHandButtonStrings } from './RaiseHandButton';
/* @conditional-compile-remove(reaction) */
export { ReactionButton } from './ReactionButton';
/* @conditional-compile-remove(reaction) */
export type { ReactionButtonProps, ReactionButtonStrings } from './ReactionButton';
export { VideoTile } from './VideoTile';
export type { VideoTileProps, VideoTileStylesProps } from './VideoTile';
/* @conditional-compile-remove(PSTN-calls) */
export type { VideoTileStrings } from './VideoTile';

export { _PictureInPictureInPicture } from './PictureInPictureInPicture/PictureInPictureInPicture';
export type {
  _PictureInPictureInPictureProps,
  _PictureInPictureInPictureStrings
} from './PictureInPictureInPicture/PictureInPictureInPicture';
export type {
  _PictureInPictureInPictureTileProps,
  _TileOrientation
} from './PictureInPictureInPicture/PictureInPictureInPictureTile';

export * from './Drawer';
/* @conditional-compile-remove(file-sharing) */
export type { SendBoxErrorBarError } from './SendBoxErrorBar';
export * from './FileCard';
export * from './FileCardGroup';
export * from './ModalClone/ModalClone';
export * from './FileDownloadCards';
export type { _FileUploadCardsStrings } from './FileUploadCards';

export { _useContainerHeight, _useContainerWidth } from './utils/responsive';

export { _ComplianceBanner } from './ComplianceBanner';
export type { _ComplianceBannerProps, _ComplianceBannerStrings } from './ComplianceBanner';
export { Dialpad } from './Dialpad/Dialpad';
export type { DialpadProps, DialpadStrings, DialpadStyles, DtmfTone } from './Dialpad/Dialpad';
/* @conditional-compile-remove(end-of-call-survey) */
export { _StarSurvey } from './Survey/StarSurvey/StarSurvey';
/* @conditional-compile-remove(end-of-call-survey) */
export type { _StarSurveyProps, _StarSurveyStrings } from './Survey/StarSurvey/StarSurvey';
/* @conditional-compile-remove(end-of-call-survey) */
export * from './Survey/SurveyTypes';
/* @conditional-compile-remove(end-of-call-survey) */
export { _TagsSurvey } from './Survey/TagsSurvey/TagsSurvey';
/* @conditional-compile-remove(end-of-call-survey) */
export type { _TagsSurveyProps, _TagsSurveyStrings, _IssueCategory, _SurveyTag } from './Survey/TagsSurvey/TagsSurvey';
/* @conditional-compile-remove(PSTN-calls) */
export { HoldButton } from './HoldButton';
/* @conditional-compile-remove(PSTN-calls) */
export type { HoldButtonProps, HoldButtonStrings } from './HoldButton';

export { _LocalVideoTile } from './LocalVideoTile';
export { _RemoteVideoTile } from './RemoteVideoTile';
export { _HighContrastAwareIcon } from './HighContrastAwareIcon';
export type { _HighContrastAwareIconProps } from './HighContrastAwareIcon';

export { UnsupportedBrowser } from './UnsupportedBrowser';
export type { UnsupportedBrowserStrings, UnsupportedBrowserProps } from './UnsupportedBrowser';
export { UnsupportedBrowserVersion } from './UnsupportedBrowserVersion';
export type { UnsupportedBrowserVersionStrings, UnsupportedBrowserVersionProps } from './UnsupportedBrowserVersion';
export { UnsupportedOperatingSystem } from './UnsupportedOperatingSystem';
export type { UnsupportedOperatingSystemStrings, UnsupportedOperatingSystemProps } from './UnsupportedOperatingSystem';

export { _TroubleshootingGuideErrorBar } from './TroubleshootingGuideErrorBar';
export type {
  _TroubleshootingGuideErrorBarStrings,
  _TroubleshootingGuideErrorBarProps
} from './TroubleshootingGuideErrorBar';

export { _DevicePermissionDropdown } from './DevicePermissions/DevicePermissionDropdown';
export type {
  _DevicePermissionDropdownStrings,
  _DevicePermissionDropdownProps,
  _PermissionConstraints
} from './DevicePermissions/DevicePermissionDropdown';

export { _VideoEffectsItem } from './VideoEffects/VideoEffectsItem';
export type { _VideoEffectsItemProps, _VideoEffectsItemStyles } from './VideoEffects/VideoEffectsItem';
export {
  _VideoEffectsItemNoBackground,
  _VideoEffectsItemBlur,
  _VideoEffectsItemAddImage
} from './VideoEffects/PresetVideoEffectsItems';

export { _VideoBackgroundEffectsPicker } from './VideoEffects/VideoBackgroundEffectsPicker';
export type {
  _VideoBackgroundEffectsPickerProps,
  _VideoBackgroundEffectChoiceOption,
  _VideoBackgroundEffectsPickerStyles
} from './VideoEffects/VideoBackgroundEffectsPicker';

export type { VerticalGalleryStyles, VerticalGalleryStrings, VerticalGalleryControlBarStyles } from './VerticalGallery';
/* @conditional-compile-remove(close-captions) */
export * from './CaptionsBanner';
/* @conditional-compile-remove(close-captions) */
export * from './Caption';
/* @conditional-compile-remove(close-captions) */
export * from './StartCaptionsButton';
/* @conditional-compile-remove(close-captions) */
export * from './CaptionsSettingsModal';
