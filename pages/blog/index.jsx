import Hero from 'components/Hero/Hero.jsx'
import Container from 'components/Container/Container'
import Meta from 'components/Meta'

export default function Blog() {
  return (
    <Container>
      <Meta pageTitle='ブログ' pageDesc='ブログの記事一覧' />
      <Hero 
        title='Blog'
        subtitle='Recent Posts'
      />
    </Container>
  )
}
