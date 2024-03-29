import Hero from "components/Hero/Hero"
import Container from 'components/Container/Container'
import PostBody from "components/Post-Body/Post-Body"
import Contact from "components/Contact/Contact"
import {TwoColumn, TwoColumnMain, TwoColumnSidebar} from 'components/Two-Column/Two-Column'
import Image  from "next/legacy/image"
import eyecatch from 'images/about.jpg'
import Meta from 'components/Meta'

export default function About() {
  return (
    <Container>
      <Meta 
        pageTitle='アバウト'
        pageDesc='About development activities'
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

      <Hero 
      title='About'
      subtitle='About development activities'
      />

      <figure>
        <Image
          src={eyecatch}
          alt=''
          layout='responsive'
          sizes='(min-width: 1152px, 100vw'
          priority
          placeholder="blur"
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
            Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、
            プログラミングやデザインなど、さまざまな技術を組み合わせる
            ことによって社会や環境と結びつけるクリエイティブを提案し続けています。
            </p>
            <h2>
              モノづくりで目指していること
            </h2>
            <p>
            モノづくりではデータの解析からクリエイティブまで幅広いことを担当
            しています。新しいことを取り入れながら、ユーザーにマッチした提案を
            実現するのが目標です。たくさんの開発・提供が数多くありますが、
            特にそこを磨く作業に力を入れています。
            </p>
            <p>
            単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事に
            しながらものづくりをしています。毎回課題解決テーマをもって「モノ」と
            向き合い制作をし、フィードバックしてもらうことで自分の中にあるモヤモヤを
            言葉にして「問い」への答えを出しています。
            </p>
            <h3>
            新しいことへのチャレンジ
            </h3>
            <p>
            今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは
            小さなことでもいいから取り入れて、良いものを作れるようにしています。
            小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けて
            いきたいです。
            </p>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}