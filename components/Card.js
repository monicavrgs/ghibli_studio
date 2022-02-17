import styled from "styled-components";

const Cards = styled.div`
    width: 30%;   
    margin: 10px 15px;
    border-radius: 5px;

    @media (max-width: 700px){
        width: 90%;
        display: flex;
        flex-direction: column;
    }
`

export default function Card(props){
    return(
        <Cards>{props.children}</Cards>
    )
}