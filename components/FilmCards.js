import styled from "styled-components"
import React, { useEffect } from 'react'
import  { useRouter } from 'next/router'
import Card from "./Card"
import Image from  './Image'
import Container from './Container'

const Title = styled.h1`
font-size: 28px;
color: #24262E;

:hover{
    cursor: pointer;
    color: #6A718A;
}
`

export function FilmCards (){
    const router = useRouter()
    const [data, setData] = React.useState([])

    useEffect(() =>{
        fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        })
    }, [])

    return(
        <Container display='flex'>{data.map(film =>(
            <Card key={data.id}>
                <Image src={film.image} />
                <Title onClick={() => {
                router.push(`/film?id=${film.id}`)
            }}>{film.title}</Title>
                <p>Director: {film.director}</p>
                <p>Release: {film.release_date}</p>
            </Card>
        ))}
        </Container>
    )
}

export default FilmCards