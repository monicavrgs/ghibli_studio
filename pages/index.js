import styled from 'styled-components'
import Body from '../components/Body'
import { PageHeader } from '../components/PageHeader'
import Container from '../components/Container'
import Image from 'next/image'
import Text from '../components/Text'
import logo from '../public/logo.png'

const Title = styled.h1`
  font-size: 28px;
  color: #24262E;
  text-align: center;
  margin: 10px 0;
`

const Link = styled.a`
  text-decoration: none;
  color: #24262E;
  font-weight: bold;

  :hover{
    color: #6A718A;
    border-bottom: 1px solid #6A718A;
  }
`

export default function Home() {

  return(
    <Body>
      <PageHeader />
      <Container direction='column' width='65%'>
        <Title>About</Title>
        <Image src={logo} alt='logo' width='525' height='252'/>
        <Text>This project was designed and developed by <Link href='https://github.com/monicavrgs'>Mônica Vargas.</Link></Text>
        <Text>This is the first project I developed by myself using React and actually put into practice what I've learned from courses. Since I'm not a designer, the design is very simple as the focus of this project was to practice React and it's purpose is to only organize the website.</Text>
        <Text>I also used styled-components to develop the project and it's content it's from the <Link href='https://ghibliapi.herokuapp.com/?ref=public-apis#section/Studio-Ghibli-API'>Studio Ghibli API</Link>.</Text>
      </Container>
    </Body>
  )
}
