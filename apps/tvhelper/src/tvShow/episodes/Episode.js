// @flow

import * as React from 'react';
import { graphql, createFragmentContainer, type RelayProp } from '@tbergq/relay';
import { ListItem } from '@tbergq/components';
import format from 'date-fns/format';
import { isLoggedIn } from '@tbergq/utils';

import type { Episode_episode as EpisodeType } from './__generated__/Episode_episode.graphql';
import markAsWatchedMutation from './mutation/MarkAsWatched';
import deleteAsWatchedMutation from './mutation/DeleteAsWatched';

type Props = {|
  +episode: ?EpisodeType,
  +relay: RelayProp,
|};

const markAsWatched = (props: Props) => {
  const episodeId = props.episode?.id;
  if (episodeId) {
    markAsWatchedMutation(props.relay.environment, {
      episodeId,
    });
  }
};

const unMarkAsWatched = (props: Props) => {
  const episodeId = props.episode?.id;
  if (episodeId) {
    deleteAsWatchedMutation(props.relay.environment, {
      episodeId,
    });
  }
};

const Episode = (props: Props) => {
  const name = props.episode?.name ?? '';
  const date = format(props.episode?.airdate ?? '', 'Do MMM YYYY');
  const seasonAndNumber = props.episode?.seasonAndNumber ?? '';
  const summary = props.episode?.summary ?? '';
  const watched = props.episode?.watched === true;

  function toggleWatched() {
    if (!watched) {
      markAsWatched(props);
    } else {
      unMarkAsWatched(props);
    }
  }

  const listProps = {
    title: `${seasonAndNumber} - ${name} - ${date}`,
    description: summary,
    icon: null,
    selectable: isLoggedIn(),
    selected: watched,
    onClick: toggleWatched,
  };

  return <ListItem {...listProps} />;
};

export default createFragmentContainer(Episode, {
  episode: graphql`
    fragment Episode_episode on Episode {
      id
      name
      seasonAndNumber
      airdate
      summary
      watched
    }
  `,
});
