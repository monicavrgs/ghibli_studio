import styled from "styled-components"

const Box = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    flex-wrap: wrap;
    width: ${props => props.width};
    margin: 0 auto;

    @media (max-width: 700px){
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        width: 90%;
    }
`

export default function Container(props){
    return(
        <Box direction={props.direction} width={props.width}>{props.children}</Box>
    )
}