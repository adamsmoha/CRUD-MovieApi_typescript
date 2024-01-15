import { Request, Response } from 'express';
import { Movie, movies } from '../data/movies';

class movieController{
    getAllMovies =async (req: Request, res: Response) => {
        res.json(movies);
    }

    getSpecificMovie = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        const movie = movies.find((m) => m.id === id);
      
        if (movie) {
          res.json(movie);
        } else {
          res.status(404).json({ message: 'Movie not found' });
        }
    }

    postNewMovie = async (req: Request, res: Response) => {
        const newMovie: Movie = {
          id: movies.length + 1,
          title: req.body.title,
          genre: req.body.genre,
        };
      
        movies.push(newMovie);
        res.status(200).json(newMovie);
    }

    updateMovie =async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        const movieIndex = movies.findIndex((m) => m.id === id);
      
        if (movieIndex !== -1) {
          movies[movieIndex] = {
            id,
            title: req.body.title,
            genre: req.body.genre,
          };
      
          res.json(movies[movieIndex]);
        } else {
          res.status(404).json({ message: 'Movie not found' });
        }
    }

    deleteMovie = async  (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        const movieIndex = movies.findIndex((m) => m.id === id);
      
        if (movieIndex !== -1) {
          const deletedMovie = movies.splice(movieIndex, 1);
          res.json(deletedMovie[0]);
        } else {
          res.status(404).json({ message: 'Movie not found' });
        }
    }

}

export const MovieController = new movieController