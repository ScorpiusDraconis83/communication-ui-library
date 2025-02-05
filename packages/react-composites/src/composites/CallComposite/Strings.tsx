// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/* @conditional-compile-remove(close-captions) */
import { SpokenLanguageStrings, CaptionLanguageStrings } from '@internal/react-components';
/* @conditional-compile-remove(end-of-call-survey) */
import { SurveyIssues, SurveyIssuesHeadingStrings } from '@internal/react-components';
/* @conditional-compile-remove(capabilities) */
import { CapabilityChangedNotificationStrings } from './components/CapabilitiesChangedNotificationBar';

/**
 * Strings used by the {@link CallComposite} directly.
 *
 * This strings are in addition to those used by the components from the component library.
 *
 * @public
 */
export interface CallCompositeStrings {
  /**
   * Title of configuration page.
   */
  configurationPageTitle: string;
  /**
   * Optional 1-2 lines on the call details used on the configuration page.
   */
  configurationPageCallDetails?: string;
  /**
   * Text in button to start call in configuration page.
   */
  startCallButtonLabel: string;
  /**
   * Text in button to rejoin an ended call.
   */
  rejoinCallButtonLabel: string;
  /**
   * Placeholder text for local device settings dropdowns.
   */
  defaultPlaceHolder: string;
  /**
   * Label for camera dropdown.
   */
  cameraLabel: string;
  /**
   * Label for when there are no cameras present on configuration screen.
   */
  noCamerasLabel: string;
  /**
   * Label for sound dropdown.
   */
  soundLabel: string;
  /**
   * Label for when no microphones were found on the configuration screen
   */
  noMicrophonesLabel: string;
  /**
   * Label for when no speakers were found on the configuration screen.
   */
  noSpeakersLabel: string;
  /**
   * Error shown when camera access is blocked by the browser.
   */
  cameraPermissionDenied: string;
  /**
   * Error shown when the camera is turned off.
   */
  cameraTurnedOff: string;
  /**
   * Error shown when microphone access is blocked by the browser.
   */
  microphonePermissionDenied: string;
  /**
   * Title text of the page shown to the user when joining a Teams meeting fails because meeting owner denied access.
   */
  failedToJoinTeamsMeetingReasonAccessDeniedTitle: string;
  /**
   * More details text of the page shown to the user when joining a Teams meeting fails because meeting owner denied access.
   */
  failedToJoinTeamsMeetingReasonAccessDeniedMoreDetails?: string;
  /**
   * Title text of the page shown to the user when joining a call fails due to a network problem.
   */
  failedToJoinCallDueToNoNetworkTitle: string;
  /**
   * More details text of the page shown to the user when joining a call fails due to a network problem.
   */
  failedToJoinCallDueToNoNetworkMoreDetails?: string;
  /**
   * Text to display on a leaving page.
   */
  leavingCallTitle?: string;
  /**
   * Title text of the page shown to the user when they leave a call in the call composite.
   */
  leftCallTitle: string;
  /**
   * More details text of the page shown to the user when they leave a call in the call composite.
   */
  leftCallMoreDetails?: string;
  /**
   * Title text of the page shown to the user when they are removed from a call in the call composite.
   */
  removedFromCallTitle: string;
  /**
   * More details text of the page shown to the user when they are removed from a call in the call composite.
   */
  removedFromCallMoreDetails?: string;
  /**
   * Text shown to the user on the lobby screen when connecting to a call.
   */
  lobbyScreenConnectingToCallTitle: string;
  /**
   * Optional addition details shown to the user on the lobby screen when connection to a call.
   */
  lobbyScreenConnectingToCallMoreDetails?: string;
  /**
   * Text shown to the user on the lobby screen when waiting to be admitted to a call.
   */
  lobbyScreenWaitingToBeAdmittedTitle: string;
  /**
   * Optional additional details shown to the user on the lobby screen when waiting to be admitted to a call.
   */
  lobbyScreenWaitingToBeAdmittedMoreDetails?: string;
  /**
   * Message shown to the user when they are speaking while muted.
   */
  mutedMessage: string;
  /**
   * Text for link to MS privacy policy in Compliance Banner.
   */
  privacyPolicy: string;
  /**
   * Text for link to learn more about a specific subject.
   */
  learnMore: string;
  /**
   * Message to let user know the meeting is only being recorded (no transcription) in ComplianceBanner.
   */
  complianceBannerNowOnlyRecording: string;
  /**
   * Message to let user know the meeting is only being transcripted (no recording) in ComplianceBanner.
   */
  complianceBannerNowOnlyTranscription: string;
  /**
   * Message to let user know recording and transcription of the meeting are saved in ComplianceBanner.
   */
  complianceBannerRecordingAndTranscriptionSaved: string;
  /**
   * Message to let user know recording and transcription of the meeting have started in ComplianceBanner.
   */
  complianceBannerRecordingAndTranscriptionStarted: string;
  /**
   * Message to let user know recording and transcription of the meeting have stopped in ComplianceBanner.
   */
  complianceBannerRecordingAndTranscriptionStopped: string;
  /**
   * Message to let user know recording of the meeting is being saved in ComplianceBanner.
   */
  complianceBannerRecordingSaving: string;
  /**
   * Message to let user know recording of the meeting has started in ComplianceBanner.
   */
  complianceBannerRecordingStarted: string;
  /**
   * Message to let user know recording of the meeting has stopped in ComplianceBanner.
   */
  complianceBannerRecordingStopped: string;
  /**
   * Message to let user know they are giving consent to meeting being transcripted in ComplianceBanner.
   */
  complianceBannerTranscriptionConsent: string;
  /**
   * Message to let user know transcription of the meeting is being saved in ComplianceBanner.
   */
  complianceBannerTranscriptionSaving: string;
  /**
   * Message to let user know transcription of the meeting has started in ComplianceBanner.
   */
  complianceBannerTranscriptionStarted: string;
  /**
   * Message to let user know the transcription of the meeting has stopped in ComplianceBanner.
   */
  complianceBannerTranscriptionStopped: string;
  /**
   * Text for close button.
   */
  close: string;
  /**
   * Title text of the page shown to the user when there is intermittent network failure during a call.
   */
  networkReconnectTitle: string;
  /**
   * More details text of the page shown to the user when there is intermittent network failure during a call.
   */
  networkReconnectMoreDetails: string;
  /**
   * Tooltip text used to inform a user that toggling microphone in lobby is not supported.
   */
  microphoneToggleInLobbyNotAllowed: string;
  /**
   * Side pane People section Title.
   */
  peoplePaneTitle: string;
  /**
   * Aria label string for return to call back button
   */
  returnToCallButtonAriaLabel?: string;
  /**
   * Aria Description string for return to call button
   */
  returnToCallButtonAriaDescription?: string;
  /**
   * control bar People button label
   */
  peopleButtonLabel: string;
  /**
   * control bar People button label when checked
   */
  selectedPeopleButtonLabel: string;
  /**
   * control bar Chat button label.
   */
  chatButtonLabel: string;
  /**
   * Label for SidePaneHeader dismiss button
   */
  dismissSidePaneButtonLabel?: string;
  /* @conditional-compile-remove(one-to-n-calling) @conditional-compile-remove(PSTN-calls) */
  /**
   * Side pane People section subheader.
   */
  peoplePaneSubTitle: string;
  /* @conditional-compile-remove(one-to-n-calling) @conditional-compile-remove(PSTN-calls) */
  /**
   * Label for button to copy invite link
   */
  copyInviteLinkButtonLabel: string;
  /* @conditional-compile-remove(PSTN-calls) */
  /**
   * Label for button to open dialpad
   */
  openDialpadButtonLabel: string;
  /* @conditional-compile-remove(one-to-n-calling) @conditional-compile-remove(PSTN-calls) */
  /**
   * Label for menu item to remove participant
   */
  removeMenuLabel: string;
  /* @conditional-compile-remove(PSTN-calls) */
  /**
   * Label for add people dropdown
   */
  peoplePaneAddPeopleButtonLabel: string;
  /* @conditional-compile-remove(PSTN-calls) */
  /**
   * Label for button to start a call
   */
  dialpadStartCallButtonLabel: string;
  /* @conditional-compile-remove(PSTN-calls) */
  /**
   * Title for dialpad Modal
   */
  dialpadModalTitle: string;
  /* @conditional-compile-remove(PSTN-calls) */
  /**
   * Aria Label for dialpad Modal
   */
  dialpadModalAriaLabel: string;
  /* @conditional-compile-remove(PSTN-calls) */
  /**
   * Aria Label for dialpad Modal close button
   */
  dialpadCloseModalButtonAriaLabel: string;
  /**
   * label for more button in the Calling composite
   */
  moreButtonCallingLabel: string;
  /* @conditional-compile-remove(PSTN-calls) */ /* @conditional-compile-remove(one-to-n-calling) */
  /**
   * Label for the resume call button on the hold pane
   */
  resumeCallButtonLabel: string;
  /* @conditional-compile-remove(PSTN-calls) */ /* @conditional-compile-remove(one-to-n-calling) */
  /**
   * Label for the resume call button on the hold pane when call is resuming
   */
  resumingCallButtonLabel: string;
  /* @conditional-compile-remove(PSTN-calls) */ /* @conditional-compile-remove(one-to-n-calling) */
  /**
   * Aria label for the resume call button on the hold pane
   */
  resumeCallButtonAriaLabel: string;
  /* @conditional-compile-remove(PSTN-calls) */ /* @conditional-compile-remove(one-to-n-calling) */
  /**
   * Aria label for the resume call button on the hold pane when call is resuming
   */
  resumingCallButtonAriaLabel: string;
  /* @conditional-compile-remove(PSTN-calls) */ /* @conditional-compile-remove(one-to-n-calling) */
  /**
   * Label for the hold pane
   */
  holdScreenLabel: string;
  /* @conditional-compile-remove(PSTN-calls) */
  /**
   * Placeholder text for dtmf dialpad
   */
  dtmfDialpadPlaceholderText: string;
  /* @conditional-compile-remove(PSTN-calls) */
  /**
   * Label for the button to open dtmf dialpad
   */
  openDtmfDialpadLabel: string;
  /**
   * aria label for when the invite link has been actioned
   */
  copyInviteLinkActionedAriaLabel: string;
  /* @conditional-compile-remove(rooms) */
  /**
   * Title text of the page shown to the user when the user attempts to join a room that cannot be found.
   */
  roomNotFoundTitle: string;
  /* @conditional-compile-remove(rooms) */
  /**
   * More details text of the page shown to the user when the user attempts to join a room that cannot be found.
   */
  roomNotFoundDetails?: string;
  /* @conditional-compile-remove(rooms) */
  /**
   * Title text of the page shown to the user when the user attempts to join a room that is not valid.
   */
  roomNotValidTitle: string;
  /* @conditional-compile-remove(rooms) */
  /**
   * More details text of the page shown to the user when the user attempts to join a room that is not valid.
   */
  roomNotValidDetails?: string;
  /* @conditional-compile-remove(rooms) */
  /**
   * Title text of the page shown to the user when the user's permission to join the room is removed.
   */
  inviteToRoomRemovedTitle: string;
  /* @conditional-compile-remove(rooms) */
  /**
   * More details text of the page shown to the user when the user's permission to join the room is removed.
   */
  inviteToRoomRemovedDetails?: string;
  /* @conditional-compile-remove(video-background-effects) */
  /**
   * Video Effects pane title.
   */
  videoEffectsPaneTitle: string;
  /* @conditional-compile-remove(video-background-effects) */
  /**
   * Video Effects pane sub section title for choosing background.
   */
  videoEffectsPaneBackgroundSelectionTitle: string;
  /* @conditional-compile-remove(video-background-effects) */
  /**
   * Label for the button to open effects
   */
  configurationPageVideoEffectsButtonLabel?: string;
  /* @conditional-compile-remove(video-background-effects) */
  /**
   * Error message for video effect failure
   */
  unableToStartVideoEffect?: string;
  /* @conditional-compile-remove(video-background-effects) */
  /**
   * Label for the blur video background effect item
   */
  blurBackgroundEffectButtonLabel?: string;
  /* @conditional-compile-remove(video-background-effects) */
  /**
   * Tooltip text for the blur video background effect item
   */
  blurBackgroundTooltip?: string;
  /* @conditional-compile-remove(video-background-effects) */
  /**
   * Label for the remove video background effect item
   */
  removeBackgroundEffectButtonLabel?: string;
  /* @conditional-compile-remove(video-background-effects) */
  /**
   * Tooltip text for the blur video background effect item
   */
  removeBackgroundTooltip?: string;
  /* @conditional-compile-remove(video-background-effects) */
  /**
   * Text to show when warning the user the camera is off and inform the user to turn the camera on to see the selected video background effect.
   */
  cameraOffBackgroundEffectWarningText?: string;
  /* @conditional-compile-remove(rooms) */
  /**
   * Title text of the page shown to the user when the user attempts to join a room they are not invited to.
   */
  notInvitedToRoomTitle: string;
  /* @conditional-compile-remove(rooms) */
  /**
   * More details text of the page shown to the user when the user attempts to join a room they are not invited to.
   */
  notInvitedToRoomDetails?: string;
  /* @conditional-compile-remove(one-to-n-calling) @conditional-compile-remove(PSTN-calls) */
  /**
   * Control bar People button ToolTipContent
   */
  peopleButtonTooltipOpen: string;
  /* @conditional-compile-remove(one-to-n-calling) @conditional-compile-remove(PSTN-calls) */
  /**
   * Control bar People button ToolTipContent
   */
  peopleButtonTooltipClose: string;
  /* @conditional-compile-remove(PSTN-calls) */ /* @conditional-compile-remove(one-to-n-calling) */
  /**
   * Label disaplayed on the lobby screen during a 1:1 outbound call.
   */
  outboundCallingNoticeString: string;
  /**
   * Notice to be announced by narrator when a participant joins a call
   */
  participantJoinedNoticeString: string;
  /**
   * Notice to be announced by narrator when a participant joins a call
   */
  twoParticipantJoinedNoticeString: string;
  /**
   * Notice to be announced by narrator when a participant joins a call
   */
  threeParticipantJoinedNoticeString: string;
  /**
   * Notice to be announced by narrator when a participant leaves a call
   */
  participantLeftNoticeString: string;
  /**
   * Notice to be announced by narrator when 2 participants leave a call
   */
  twoParticipantLeftNoticeString: string;
  /**
   * Notice to be announced by narrator when 3 participants leave a call
   */
  threeParticipantLeftNoticeString: string;
  /**
   * string to be used to announce a change in participant if they have no displayName
   */
  unnamedParticipantString: string;
  /**
   * string to be used to announce when more than 3 participants have joined at the same time.
   */
  manyParticipantsJoined: string;
  /**
   * string to be used to announce when more than 3 participants have left at the same time.
   */
  manyParticipantsLeft: string;
  /**
   * string to be used to announce when multiple unnamed participants have joined at the same time.
   */
  manyUnnamedParticipantsJoined: string;
  /**
   * string to be used to announce when multiple unnamed participants have left at the same time.
   */
  manyUnnamedParticipantsLeft: string;
  /* @conditional-compile-remove(close-captions) */
  /**
   * string to be used to open live captions contextual menu
   */
  liveCaptionsLabel?: string;
  /* @conditional-compile-remove(close-captions) */
  /**
   * label for opening captions setting modal
   */
  captionsSettingsLabel?: string;
  /* @conditional-compile-remove(close-captions) */
  /**
   * string to be used to start captions
   */
  startCaptionsButtonOnLabel?: string;
  /* @conditional-compile-remove(close-captions) */
  /**
   * string to be used to stop captions
   */
  startCaptionsButtonOffLabel?: string;
  /* @conditional-compile-remove(close-captions) */
  /**
   * tooltip string to be used to show captions is on
   */
  startCaptionsButtonTooltipOnContent?: string;
  /* @conditional-compile-remove(close-captions) */
  /**
   *tooltip string to be used to show captions is off
   */
  startCaptionsButtonTooltipOffContent?: string;
  /* @conditional-compile-remove(close-captions) */
  /**
   * captions setting modal title
   */
  captionsSettingsModalTitle?: string;
  /* @conditional-compile-remove(close-captions) */
  /**
   * label for spoken language dropdown inside captions setting modal
   */
  captionsSettingsSpokenLanguageDropdownLabel?: string;
  /* @conditional-compile-remove(close-captions) */
  /**
   * label for captions language inside captions setting modal
   */
  captionsSettingsCaptionLanguageDropdownLabel?: string;
  /* @conditional-compile-remove(close-captions) */
  /**
   * text under captions setting dropdown indicating what the dropdown is for
   */
  captionsSettingsSpokenLanguageDropdownInfoText?: string;
  /* @conditional-compile-remove(close-captions) */
  /**
   * text under captions setting dropdown indicating what the dropdown is for
   */
  captionsSettingsCaptionLanguageDropdownInfoText?: string;
  /* @conditional-compile-remove(close-captions) */
  /**
   * confirm button label in captions setting modal
   */
  captionsSettingsConfirmButtonLabel?: string;
  /* @conditional-compile-remove(close-captions) */
  /**
   * cancel button label in captions setting modal
   */
  captionsSettingsCancelButtonLabel?: string;
  /* @conditional-compile-remove(close-captions) */
  /**
   * arial label for captions setting modal
   */
  captionsSettingsModalAriaLabel?: string;
  /* @conditional-compile-remove(close-captions) */
  /**
   * arial label for captions setting modal close button
   */
  captionsSettingsCloseModalButtonAriaLabel?: string;
  /* @conditional-compile-remove(close-captions) */
  /**
   * label for more button inside captions banner
   */
  captionsBannerMoreButtonCallingLabel?: string;
  /* @conditional-compile-remove(close-captions) */
  /**
   * arial label for more button inside captions banner
   */
  captionsBannerMoreButtonTooltip?: string;
  /* @conditional-compile-remove(close-captions) */
  /**
   * list of key value pairs that pairs spoken language code to language names
   */
  spokenLanguageStrings?: SpokenLanguageStrings;
  /* @conditional-compile-remove(close-captions) */
  /**
   * list of key value pairs that pairs caption language code to language names
   */
  captionLanguageStrings?: CaptionLanguageStrings;
  /* @conditional-compile-remove(close-captions) */
  /**
   * captions banner loading spinner label
   */
  captionsBannerSpinnerText?: string;
  /* @conditional-compile-remove(call-transfer) */
  /**
   * transfer page text when showing the transferor who initiated the transfer
   */
  transferPageTransferorText: string;
  /* @conditional-compile-remove(call-transfer) */
  /**
   * transfer page text when showing the transfer target
   */
  transferPageTransferTargetText: string;
  /* @conditional-compile-remove(call-transfer) */
  /**
   * transfer page display name for unknown participant
   */
  transferPageUnknownTransferorDisplayName: string;
  /* @conditional-compile-remove(call-transfer) */
  /**
   * transfer page display name for unknown participant
   */
  transferPageUnknownTransferTargetDisplayName: string;
  /* @conditional-compile-remove(call-transfer) */
  /**
   * notice to be announced by narrator the transfer page is showing
   */
  transferPageNoticeString: string;
  /* @conditional-compile-remove(teams-adhoc-call) */
  /**
   * Title text of the page shown to the user when target participant could not be reached
   */
  participantCouldNotBeReachedTitle?: string;
  /* @conditional-compile-remove(teams-adhoc-call) */
  /**
   * More details text of the page shown to the user when target participant could not be reached
   */
  participantCouldNotBeReachedMoreDetails?: string;
  /* @conditional-compile-remove(teams-adhoc-call) */
  /**
   * Title text of the page shown to the user when permission to reach participant is not allowed
   */
  permissionToReachTargetParticipantNotAllowedTitle?: string;
  /* @conditional-compile-remove(teams-adhoc-call) */
  /**
   * More details text of the page shown to the user when permission to reach participant is not allowed
   */
  permissionToReachTargetParticipantNotAllowedMoreDetails?: string;
  /* @conditional-compile-remove(teams-adhoc-call) */
  /**
   * Title text of the page shown to the user when tenant id for the target participant could not be resolved
   */
  unableToResolveTenantTitle?: string;
  /* @conditional-compile-remove(teams-adhoc-call) */
  /**
   * More details text of the page shown to the user when tenant id for the target participant could not be resolved
   */
  unableToResolveTenantMoreDetails?: string;
  /* @conditional-compile-remove(teams-adhoc-call) */
  /**
   * Title text of the page shown to the user when target participant id is malformed
   */
  participantIdIsMalformedTitle?: string;
  /* @conditional-compile-remove(teams-adhoc-call) */
  /**
   * More details text of the page shown to the user when target participant id is malformed
   */
  participantIdIsMalformedMoreDetails?: string;
  /* @conditional-compile-remove(gallery-layouts) */
  /**
   * Controls label to move the overflow gallery around
   */
  moreButtonGalleryControlLabel?: string;
  /* @conditional-compile-remove(gallery-layouts) */
  /**
   * Label for the toggle to move the overflow gallery to the top
   */
  moreButtonGalleryPositionToggleLabel?: string;
  /* @conditional-compile-remove(gallery-layouts) */
  /**
   * Label for the selection of the speaker layout
   */
  moreButtonGallerySpeakerLayoutLabel?: string;
  /* @conditional-compile-remove(gallery-layouts) */
  /**
   * Label for the selection of the default (Gallery) layout
   */
  moreButtonGalleryDefaultLayoutLabel?: string;
  /* @conditional-compile-remove(gallery-layouts) */
  /**
   * Label for the selection of the default (Gallery) layout
   */
  moreButtonLargeGalleryDefaultLayoutLabel?: string;
  /* @conditional-compile-remove(gallery-layouts) */
  /**
   * Label for the selection of the floatingLocalVideo (Dynamic) layout
   */
  moreButtonGalleryFloatingLocalLayoutLabel?: string;
  /* @conditional-compile-remove(gallery-layouts) */
  /**
   * Label for the selection of the focusedContentLayout (Focused content) layout
   */
  moreButtonGalleryFocusedContentLayoutLabel?: string;
  /* @conditional-compile-remove(capabilities) */
  /**
   * All strings for capability changed notification
   */
  capabilityChangedNotification?: CapabilityChangedNotificationStrings;
  /* @conditional-compile-remove(end-of-call-survey) */
  /**
   * Question for the survey
   */
  surveyQuestion: string;
  /* @conditional-compile-remove(end-of-call-survey) */
  /**
   * Helper text to explain what the survey is for
   */
  starSurveyHelperText: string;
  /* @conditional-compile-remove(end-of-call-survey) */
  /**
   * Helper text displayed below survey question after user select one star
   */
  starSurveyOneStarText: string;
  /* @conditional-compile-remove(end-of-call-survey) */
  /**
   * Helper text displayed below survey question after user select two star
   */
  starSurveyTwoStarText: string;
  /* @conditional-compile-remove(end-of-call-survey) */
  /**
   * Helper text displayed below survey question after user select three star
   */
  starSurveyThreeStarText: string;
  /* @conditional-compile-remove(end-of-call-survey) */
  /**
   * Helper text displayed below survey question after user select four star
   */
  starSurveyFourStarText: string;
  /* @conditional-compile-remove(end-of-call-survey) */
  /**
   * Helper text displayed below survey question after user select five star
   */
  starSurveyFiveStarText: string;
  /* @conditional-compile-remove(end-of-call-survey) */
  /**
   * Aria Label for each individual star rating
   */
  starRatingAriaLabel: string;
  /* @conditional-compile-remove(end-of-call-survey) */
  /**
   * Tags Survey Question
   */
  tagsSurveyQuestion: string;
  /* @conditional-compile-remove(end-of-call-survey) */
  /**
   * Default text for free form text field inside tags survey
   */
  tagsSurveyTextFieldDefaultText: string;
  /* @conditional-compile-remove(end-of-call-survey) */
  /**
   * Tags Survey helper text
   */
  tagsSurveyHelperText: string;
  /* @conditional-compile-remove(end-of-call-survey) */
  /**
   * Confirm button label for survey
   */
  surveyConfirmButtonLabel: string;
  /* @conditional-compile-remove(end-of-call-survey) */
  /**
   * Aria Label for cancel button
   */
  surveyCancelButtonAriaLabel: string;
  /* @conditional-compile-remove(end-of-call-survey) */
  /**
   * Default text for free form text box
   */
  surveyTextboxDefaultText: string;
  /* @conditional-compile-remove(end-of-call-survey) */
  /**
   * Corresponding texts to each call issue
   */
  surveyIssues: SurveyIssues;
  /* @conditional-compile-remove(end-of-call-survey) */
  /**
   * Corresponding texts to each call category
   */
  SurveyIssuesHeadingStrings: SurveyIssuesHeadingStrings;
  /**
   * String for the dismiss control on the local and remote PIP on mobile
   */
  dismissModalAriaLabel?: string;
  /* @conditional-compile-remove(calling-sounds) */
  /**
   * String for title when the call is rejected by the callee
   */
  callRejectedTitle?: string;
  /* @conditional-compile-remove(calling-sounds) */
  /**
   * String for more details when the call is rejected by the callee
   */
  callRejectedMoreDetails?: string;
  /**
   * String for title when the call times out because the remote user does not answer
   */
  callTimeoutTitle?: string;
  /**
   * String for more details when the call times out because the remote user does not answer
   */
  callTimeoutDetails?: string;
}
