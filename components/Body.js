import styled from 'styled-components'

const Container = styled.body`
    display: block;
`

export default function Body(props){
    return(
        <Container> 
            {props.children}
        </Container>
    )
}