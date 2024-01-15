import express from 'express';
import {MovieController} from '../controllers/movies.controller'

const router = express.Router();

router.get('/', MovieController.getAllMovies);
router.get('/:id', MovieController.getSpecificMovie);
router.post('/', MovieController.postNewMovie);
router.put('/:id', MovieController.updateMovie);
router.delete('/:id',MovieController.deleteMovie);

export default router;
