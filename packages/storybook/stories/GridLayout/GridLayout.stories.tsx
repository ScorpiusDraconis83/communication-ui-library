// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { GridLayout as GridLayoutComponent, VideoTile, StreamMedia } from '@azure/communication-react';
import { Title, Description, Props, Heading, Source, Canvas } from '@storybook/addon-docs/blocks';
import { number, object } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import {
  mediaGalleryWidthDefault,
  mediaGalleryWidthOptions,
  mediaGalleryHeightDefault,
  mediaGalleryHeightOptions,
  COMPONENT_FOLDER_PREFIX
} from '../constants';
import { renderVideoStream } from '../utils';
import { GridLayoutExample } from './snippets/GridLayout.snippet';

const GridLayoutExampleText = require('!!raw-loader!./snippets/GridLayout.snippet').default;

const importStatement = `
import { GridLayout, VideoTile } from '@azure/communication-react';
`;

const getDocs: () => JSX.Element = () => {
  return (
    <>
      <Title>GridLayout</Title>
      <Description>
        The `GridLayout` organizes components passed to it as children in a grid layout. It can display a grid of call
        participants through the use of `VideoTile` component.
      </Description>

      <Heading>Importing</Heading>
      <Source code={importStatement} />

      <Heading>Example</Heading>
      <Description>
        The following example shows how you can render `VideoTile` components inside a grid layout. For styling the
        children video tiles, please read the [VideoTile component
        docs](./?path=/docs/ui-components-videotile--video-tile-component).
      </Description>
      <Canvas mdxSource={GridLayoutExampleText}>
        <GridLayoutExample />
      </Canvas>

      <Heading>Props</Heading>
      <Props of={GridLayoutComponent} />
    </>
  );
};

// This must be the only named export from this module, and must be named to match the storybook path suffix.
// This ensures that storybook hoists the story instead of creating a folder with a single entry.
export const GridLayout: () => JSX.Element = () => {
  const width = number('Width', mediaGalleryWidthDefault, mediaGalleryWidthOptions);
  const height = number('Height', mediaGalleryHeightDefault, mediaGalleryHeightOptions);

  const defaultParticipants = [
    {
      displayName: 'Michael',
      isVideoReady: false
    },
    {
      displayName: 'Jim',
      isVideoReady: false
    },
    {
      displayName: 'Pam',
      isVideoReady: false
    },
    {
      displayName: 'Dwight',
      isVideoReady: false
    }
  ];

  const participants = object('Participants', defaultParticipants);

  const participantsComponents = participants.map((participant, index) => {
    return (
      <VideoTile
        isVideoReady={participant.isVideoReady}
        videoProvider={<StreamMedia videoStreamElement={participant.isVideoReady ? renderVideoStream() : null} />}
        avatarName={participant.displayName}
        key={index}
      >
        <label>{participant.displayName}</label>
      </VideoTile>
    );
  });

  return (
    <div
      style={{
        height: `${height}px`,
        width: `${width}px`
      }}
    >
      <GridLayoutComponent>{participantsComponents}</GridLayoutComponent>
    </div>
  );
};

export default {
  title: `${COMPONENT_FOLDER_PREFIX}/Grid Layout`,
  component: GridLayoutComponent,
  parameters: {
    docs: {
      page: () => getDocs()
    }
  }
} as Meta;
