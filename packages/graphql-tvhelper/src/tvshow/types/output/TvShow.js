// @flow

import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat } from 'graphql';
import { toGlobalId } from 'graphql-relay';
import { GraphQLDate } from 'graphql-iso-date';
import type { TvShow } from '@tbergq/graphql-services';

export default new GraphQLObjectType({
  name: 'TvShow',
  fields: {
    id: {
      type: GraphQLID,
      resolve: ({ id }: TvShow) => toGlobalId('tvShow', id.toString()),
    },
    name: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
    premiered: {
      type: GraphQLDate,
    },
    rating: {
      type: GraphQLFloat,
      resolve: ({ rating }: TvShow) => rating.average,
    },
  },
});
