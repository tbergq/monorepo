// @flow

import WatchedEpisodeModel from '../models/WatchedEpisode';
import WatchedEpisode from '../dataObjects/WatchedEpisode';

export default class WatchedEpisodeRepository {
  static async markAsWatched(userId: string, episodeId: number): Promise<WatchedEpisode> {
    const episode = await WatchedEpisodeModel.create({ userId, episodeId });
    return new WatchedEpisode(episode);
  }

  static async deleteWatchedEpisode(userId: ?string, episodeId: number): Promise<boolean> {
    const response = await WatchedEpisodeModel.deleteOne({ userId, episodeId });
    return response.ok && response.deletedCount > 0;
  }

  static async findEpisodes(
    userId: ?string,
    episodeIds: $ReadOnlyArray<number>,
  ): Promise<$ReadOnlyArray<WatchedEpisode | null>> {
    const episodes = await WatchedEpisodeModel.find({ userId, episodeId: { $in: episodeIds } });

    return episodes.map(episode => (episode == null ? null : new WatchedEpisode(episode)));
  }
}
