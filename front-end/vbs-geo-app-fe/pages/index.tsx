import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Footer from '../components/footer/footer'
import GeoDashboard from '../components/geo-dashboard/geo-dashboard'

import Header from '../components/header/header'

const Home: NextPage = () => {
  return (
    <>
    <Header/>
    <GeoDashboard />
    <Footer />
    </>
  )
}

export default Home
