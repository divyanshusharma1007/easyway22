import Head from 'next/head'
import Features from '../components/home/Features'
import ServiceContainer from '../components/home/ServiceContainer'
import Slider from '../components/home/Slider'
import TopBar from '../components/home/TopBar'
import Category from '../components/home/Category'
import HomeFooter from '../components/home/HomeFooter'
import Offer from '../components/home/Offer'
import Cookies from 'js-cookie'
export default function Home() {
  Cookies.set("cartData", '[]');
  return (
    <div>
      <Head style={{background:"red"}}>
        <title>easy-way</title>
        <link rel="icon" href="/Images/logo.webp" />
        <meta name="description" content="Easy Way is the platform from which you can easily purchase your desired fruits and vegitables ." />
        <meta name="keywords" content="fruits,vegitables,mango,banana,papaya,ladyfinger,dhamnod,sabhi,fal,easyway,easy-way,easyway22,bananan,cabage,vegies,fruits,fruity,vegeas,bigbasket,flipkart,homedelivery,doorstep servie,door,door to door service, dhamnodspecial,dhar,mpvegies,farmhouse,farmvegies" />
        <meta name="author" content="skprogrammer,skprogrammer1007,skspecial,rahulpatidar" />
      </Head>
      <main >
        <TopBar />
        <hr className='my-2' />
        <Slider />
        <hr className='my-2' />
        <Category />
        <hr className='my-2' />
        <Features />
        <Offer />
        <HomeFooter />
      </main>
    </div>
  )
}
