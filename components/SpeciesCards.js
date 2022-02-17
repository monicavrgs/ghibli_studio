import styled from "styled-components"
import React, { useEffect } from 'react'
import  { useRouter } from 'next/router'
import Container from "./Container"
import Card from "./Card"

const Title = styled.h1`
font-size: 24px;
color: #24262E;
`

export function SpeciesCards (){
    const router = useRouter()
    const [data, setData] = React.useState([])

    useEffect(() =>{
        fetch("https://ghibliapi.herokuapp.com/species")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        })
    }, [])

    return(
        <Container>{data.map(species =>(
            <Card key={data.id}>
                <Title>{species.name}</Title>
                <p>Classification: {species.classification}</p>
            </Card>
        ))}
        </Container>

    )
}

export default SpeciesCards