import { Router } from 'express';
import { asyncHandler } from '../../../shared/lib/asyncHandler';
import { storyController } from '../controller/stories.controller';

const storiesRouter = Router();
storiesRouter.post('/', asyncHandler(storyController.createStory));
storiesRouter.get('/', asyncHandler(storyController.getAllStories));
storiesRouter.get('/:id', asyncHandler(storyController.getStoryById));

storiesRouter.get('/', (req, res) => {
  res.status(405).json({ message: 'Use POST method to create stories' });
});

storiesRouter.post('/debug', (req, res) => {
  res.json({ ok: true, body: req.body });
});

export default storiesRouter;
