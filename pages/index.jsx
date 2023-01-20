import Hero from 'components/Hero/Hero.jsx'
import Container from 'components/Container/Container'
import Meta from 'components/Meta'


export default function Blog() {
  return (
    <Container>
      <Meta />
      <Hero 
      title='CUBE'
      subtitle='アウトプットしていくサイト'
      imageOn
      />
    </Container>
  )
}
