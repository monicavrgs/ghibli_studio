import styled from "styled-components"
import React, { useEffect } from 'react'
import  { useRouter } from 'next/router'
import Container from "./Container"
import Card from "./Card"

const Title = styled.h1`
font-size: 24px;
color: #24262E;
`

export function CharacterCards (){
    const router = useRouter()
    const [data, setData] = React.useState([])

    useEffect(() =>{
        fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        })
    }, [])

    return(
        <Container>{data.map(character =>(
            <Card key={data.id}>
                <Title>{character.name}</Title>
                <p>Age: {character.age == "NA" ? `Not informed` : character.age}</p>
            </Card>
        ))}
        </Container>

    )
}

export default CharacterCards