import styled from "styled-components";
import { useRouter }from 'next/router'
import React from "react";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 15px;
    background-color: #F6F4F4;
    position: sticky;
    top: 0;

    @media(max-width: 700px){
        flex-direction: column;
    }

`

const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media(max-width: 700px){
        flex-direction: column;
        display: ${props => props.display == 'none' ? 'none' : 'flex'}
    }
`

const Title = styled.h1`
    font-size: 28px;
    color: #24262E;

    :hover{
        cursor: pointer;
    }`

const Link = styled.a`
    color: #24262E;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    margin: 0 5px;

    :hover {
        color: #6A718A;
        border-bottom: 1px solid #6A718A;
    }
`

export function PageHeader(){
    const router = useRouter()
    return(
        <Header>
            <Title onClick={() => {
                router.push(`/`)
            }}>Studio Ghibli</Title>
            <Container>
                <Link href='/'>Home</Link>
                <Link href='/films'>Films</Link>
                <Link href='/characters'>Characters</Link>
                <Link href='/locations'>Locations</Link>
                <Link href='/species'>Species</Link>
            </Container>
        </Header>
    )
}

export default PageHeader