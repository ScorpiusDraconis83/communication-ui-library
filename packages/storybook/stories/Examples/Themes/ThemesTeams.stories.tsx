// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CameraButton,
  ControlBar,
  EndCallButton,
  FluentThemeProvider,
  GridLayout,
  MicrophoneButton,
  ScreenShareButton,
  VideoTile
} from '@azure/communication-react';
import { Description, Heading, Source, Title } from '@storybook/addon-docs/blocks';
import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { EXAMPLES_FOLDER_PREFIX } from '../../constants';

const exampleTeamsTheme = require('!!raw-loader!./snippets/ThemesTeams.snippet.tsx').default;

const getDocs: () => JSX.Element = () => {
  return (
    <>
      <Title>Themes</Title>
      <Description>
        Example Themes that can be leveraged by developers to provide color schemes to UI Components
      </Description>
      <Heading>Teams-Like Theme</Heading>
      <Source code={exampleTeamsTheme} />
    </>
  );
};

const TeamsTheme = {
  palette: {
    themePrimary: '#4b53bc',
    themeLighterAlt: '#f6f7fc',
    themeLighter: '#dddef4',
    themeLight: '#c1c4eb',
    themeTertiary: '#8a8fd7',
    themeSecondary: '#5d64c5',
    themeDarkAlt: '#444baa',
    themeDark: '#393f8f',
    themeDarker: '#2a2e6a',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff'
  }
};

export const TeamsThemeComponent: () => JSX.Element = () => {
  return (
    <div>
      <FluentThemeProvider fluentTheme={TeamsTheme}>
        <div
          style={{
            height: '530px',
            width: '830px'
          }}
        >
          <GridLayout>
            <VideoTile isVideoReady={false} videoProvider={null} avatarName={'Michael'}>
              {/*Control Bar with default set up*/}
              <ControlBar layout={'dockedTop'}>
                <CameraButton
                  onClick={() => {
                    /*handle onClick*/
                  }}
                />
                <MicrophoneButton
                  onClick={() => {
                    /*handle onClick*/
                  }}
                />
                <ScreenShareButton
                  onClick={() => {
                    /*handle onClick*/
                  }}
                />
                <EndCallButton
                  onClick={() => {
                    /*handle onClick*/
                  }}
                />
              </ControlBar>
              {/*Control Bar with default set up*/}
              <label>Michael</label>
            </VideoTile>
          </GridLayout>
        </div>
      </FluentThemeProvider>
    </div>
  );
};

export default {
  title: `${EXAMPLES_FOLDER_PREFIX}/Themes`,
  parameters: {
    docs: {
      page: () => getDocs()
    }
  }
} as Meta;
