import styled from "styled-components"
import React, { useEffect } from 'react'
import  { useRouter } from 'next/router'
import Container from "./Container"
import Card from "./Card"

const Title = styled.h1`
font-size: 18px;
color: #24262E;
`

export function LocationCards (){
    const router = useRouter()
    const [data, setData] = React.useState([])

    useEffect(() =>{
        fetch("https://ghibliapi.herokuapp.com/locations")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        })
    }, [])

    return(
        <Container>{data.map(location =>(
            <Card key={data.id}>
                <Title>{location.name}</Title>
                <p>Climate: {location.climate}</p>
            </Card>
        ))}
        </Container>

    )
}

export default LocationCards