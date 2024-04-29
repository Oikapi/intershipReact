import React from 'react'
import BigSlider from '../../components/BigSlider/BigSlider'
import GenresMenu from '../../components/GenresMenu/GenresMenu'
import Container from '../../components/Container/Container'
import PopularNow from '../../components/PopularNow/PopularNow'

function MainPage() {
    return (
        <Container>
            <BigSlider />
            <GenresMenu />
            <PopularNow />
        </Container>
    )
}

export default MainPage