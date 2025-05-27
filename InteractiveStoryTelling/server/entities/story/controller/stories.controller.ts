import { Request, Response } from 'express';
import { storyService } from '../service/stories.service';

export const storyController = {
  createStory: async (req: Request, res: Response) => {
    try {
      const newStory = await storyService.createStory(req.body);
      res.status(201).json({
        id: newStory.id,
        message: 'Story created successfully!',
      });
    } catch (error: any) {
      res.status(500).json({
        message: error.message || 'Story creation failed',
      });
    }
  },
  getAllStories: async (req: Request, res: Response) => {
    const stories = await storyService.getAllStories();
    res.json(stories);
  },  
  getStoryById: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: 'Invalid story ID' });
  
    const story = await storyService.getStoryById(id);
    if (!story) return res.status(404).json({ message: 'Story not found' });
  
    res.json(story);
  }  
};
