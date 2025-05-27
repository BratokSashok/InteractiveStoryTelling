import { Stories, StoriesCreationAttributes } from '../model/stories.model';

export const storyService = {
  async createStory(data: StoriesCreationAttributes) {
    const newStory = await Stories.create(data);
    return newStory.toJSON();
  },

  async getAllStories() {
    const stories = await Stories.findAll();
    return stories.map(s => s.toJSON());
  },

  async getStoryById(id: number) {
    const story = await Stories.findByPk(id);
    return story?.toJSON();
  },

  async deleteStory(id: number) {
    return Stories.destroy({ where: { id } });
  },

  async updateStory(id: number, data: Partial<StoriesCreationAttributes>) {
    await Stories.update(data, { where: { id } });
    const updated = await Stories.findByPk(id);
    return updated?.toJSON();
  },
};