import styled from 'styled-components'

const Paragraph = styled.p`
    color: #24262E;
    margin: 6px 0;
    line-height: 20px;
`

export default function Text(props){
    return(
        <Paragraph>{props.children}</Paragraph>
    )
}