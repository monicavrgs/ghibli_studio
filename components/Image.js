import styled from "styled-components";


const Img = styled.img`
    width: 100%;
    height: 70%;
`

export default function Image(props){
    return(
        <Img src={props.src} />
    )
}