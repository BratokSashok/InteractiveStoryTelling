import { Request, Response } from 'express';
import { Tags } from '../model/Tags';

export const tagController = {
  getTags: async (req: Request, res: Response) => {
    try {
      const tags = await Tags.findAll();
      res.status(200).json(tags);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: 'Error fetching tags', error: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error occurred', error: String(error) });
      }
    }
  }
};
