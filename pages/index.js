import Head from 'next/head'
import Main from '../components/Main';
import About from "../components/About";
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Emmanuel Kaome | Full Stack Web Developer</title>
        <meta name="Emmanuel Kaome" content="Portfolio website created by Emmanuel Kaome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
