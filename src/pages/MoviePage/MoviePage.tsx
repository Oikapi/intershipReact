import React from 'react'
import MovieTitle from '../../components/MovieTitle/MovieTitle'
import Container from '../../components/Container/Container'
import MovieInfo from '../../components/MovieInfo/MovieInfo'

function MoviePage() {
    return (
        <Container>
            <MovieTitle />
            <MovieInfo />
        </Container >
    )
}

export default MoviePage