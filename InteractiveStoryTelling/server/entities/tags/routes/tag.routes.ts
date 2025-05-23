import { Router } from 'express';
import { asyncHandler } from '../../../shared/lib/asyncHandler';
import { tagController } from '../controllers/tag.controller';

const tagsRouter = Router();

tagsRouter.get('/tags', asyncHandler(tagController.getTags));

export default tagsRouter;
