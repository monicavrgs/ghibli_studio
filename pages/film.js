import styled from "styled-components";
import {useRouter } from 'next/router'
import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import Image from "../components/Image";
import Body from "../components/Body";
import Text from "../components/Text";

export default function Film(){
    const router = useRouter()
    const filmID = router.query.id
    const [data, setData] = React.useState([])
    const [film, setFilm] = React.useState([])

    const Title = styled.h1`
    font-size: 36px;
    color: #24262E;
    text-align: center;
    margin: 0 auto;
    `

    async function fetchData(){
        fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        getFilm(data)
        })
    }

    async function getFilm(data){
        data.forEach(film =>{
            if(filmID == film.id){
                setFilm(film)
            }
        })
    }
    useEffect(() =>{
        fetchData()
    }, [data])

        return(
            <Body>
                <PageHeader />
                <Container direction='column' width='70%'>
                    <Title>{film.title}</Title>
                    <Image src={film.movie_banner} alt='film banner' />
                    <Text>Original Title: {film.original_title}</Text>
                    <Text>Description: {film.description}</Text>
                    <Text>Release Date: {film.release_date}</Text>
                    <Text>Running time: {film.running_time} minutes</Text>
                    <Text>Rotten Tomatoes Score: {film.rt_score}</Text>
                </Container>
            </Body>
        )
    
}