// @flow

import { GraphQLNonNull, GraphQLID } from 'graphql';
import { ExerciseRepository } from '@tbergq/trainingjournal-persistence';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import CreateExerciseOutput from '../types/output/CreateExercise';
import CreateExerciseInput, {
  type CreateExerciseType as CreateExerciseInputArgs,
} from '../types/input/CreateExerciseInput';

type Args = {
  +exercise: CreateExerciseInputArgs,
  +exerciseId: string,
  ...
};

export default {
  name: 'EditExercise',
  description: 'Edits an Exercise',
  type: CreateExerciseOutput,
  args: {
    exerciseId: {
      type: GraphQLNonNull(GraphQLID),
    },
    exercise: {
      type: GraphQLNonNull(CreateExerciseInput),
    },
  },
  resolve: async (_: mixed, { exercise, exerciseId }: Args, { user }: GraphqlContextType) => {
    const userId = user?.id;
    if (userId == null) {
      return null;
    }

    return {
      exerciseEdge: {
        node: await ExerciseRepository.editExercise(userId, exerciseId, {
          ...exercise,
          user: userId,
        }),
      },
    };
  },
};
