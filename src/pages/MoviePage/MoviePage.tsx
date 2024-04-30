import React, { useEffect } from 'react'
import MovieTitle from '../../components/MovieTitle/MovieTitle'
import Container from '../../components/Container/Container'
import MovieInfo from '../../components/MovieInfo/MovieInfo'
import { useAppDispatch, useAppSelector } from '../../hooks/StateHooks';
import { fetchMovieDetails } from '../../store/movieDetailsSlice';
import { useParams } from 'react-router-dom';

function MoviePage() {
    const movie = useAppSelector(state => state.movieDetails.movie);
    // const { loading, error } = useAppSelector(state => state.movieDetails);
    const dispatch = useAppDispatch();
    const { id } = useParams();
    console.log(movie)
    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, []);

    return (
        <Container>
            <MovieTitle title={movie?.name} typeOfFilm={movie?.type} backdrop={movie?.backdrop.previewUrl} />
            <MovieInfo description={movie?.description} rating={movie?.rating.imdb} countries={movie?.countries} genres={movie?.genres} movieLength={movie?.movieLength} />
        </Container >
    )
}

export default MoviePage