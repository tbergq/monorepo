// @flow

import Dataloader from 'dataloader';
import { FavoritesRepository, type FavoriteType } from '@tbergq/tvhelper-persistence';

const fetchFavorites = async (userIds: $ReadOnlyArray<string>, repository: FavoritesRepository) => {
  const responses = await repository.getFavorites(userIds);
  return userIds.map(userId => responses.filter(response => response.userId === userId));
};

const FavoritesLoader = (repository: FavoritesRepository) =>
  new Dataloader<string, FavoriteType[]>((userIds: $ReadOnlyArray<string>) =>
    fetchFavorites(userIds, repository),
  );

export default FavoritesLoader;