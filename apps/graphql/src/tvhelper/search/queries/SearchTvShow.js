// @flow

/* eslint-disable flowtype/use-read-only-spread */

import { GraphQLString, GraphQLNonNull, GraphQLScalarType } from 'graphql';
import { connectionArgs, type ConnectionArguments } from '@adeira/graphql-relay';
import { connectionFromArray, type Connection } from '@tbergq/graphql-services';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import type { TvShow as TvShowType } from '../../tvshow/TvShow';
import TvShowConnection from '../../tvshow/types/output/TvShowConnection';

type Args = {
  +query: string,
  ...$Exact<ConnectionArguments>,
  ...
};

export default {
  description: 'Search for tv shows by name',
  type: TvShowConnection,
  args: {
    ...connectionArgs,
    query: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<GraphQLScalarType>),
    },
  },
  resolve: async (
    _: mixed,
    args: Args,
    { dataLoader }: GraphqlContextType,
  ): Promise<Connection<TvShowType>> => {
    const tvShows = await dataLoader.tvhelper.searchTvShow.load(args.query);

    return connectionFromArray<TvShowType>(tvShows, args);
  },
};
