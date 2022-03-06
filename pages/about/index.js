import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Navbar from '../../components/Navbar'
import AboutTopInfo from '../../components/AboutTopInfo'
import AboutRealDeal from '../../components/AboutRealDeal'
import CallToAction from '../../components/CallToAction'
import Footer from '../../components/Footer'
import AboutTalent from '../../components/AboutTalent'
import AboutCountries from '../../components/AboutCountries'
import { devices } from '../../styles/media_queries'

const Container = styled.main`
  min-height: 100vh;
  padding: 20px 70px;

  @media ${devices.tablet} {
    padding: 20px 40px;
  };
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Designo - About Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Container>
        <Navbar />
        <AboutTopInfo />
        <AboutTalent />
        <AboutCountries />
        <AboutRealDeal />
        
        <CallToAction />
      </Container>

      <Footer />
    </div>
  )
}
