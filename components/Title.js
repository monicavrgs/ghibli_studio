import styled from "styled-components";

const Titles = styled.h1`
    font-size: 28px;
    color: #24262E;
`

function onClick(url){
    console.log('oi')
}

export default function Title(props){
    return(
        <Titles>{props.children}</Titles>
    )
}