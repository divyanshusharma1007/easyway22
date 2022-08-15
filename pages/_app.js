import '../styles/globals.css'
import MainLayout from '../layout/MainLayout';
import { ChakraProvider } from '@chakra-ui/react'
import AdminLayout from '../layout/AdminLayout';
import { useRouter } from 'next/router';
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const value = router.asPath.includes('/admin')
  return (
    <>
      {
        !(value) ? (
          <MainLayout>
            <Component {...pageProps} />
            <h1 className='fixed  text-slate-600 font-bold bottom-8'>Thanks to @skprogrammer</h1>
          </MainLayout>)
          :
          (
            <AdminLayout>
              {console.log("hello admin")}
              <Component {...pageProps} />
              <h1 className='fixed  text-slate-600 font-bold bottom-8'>Thanks to @skprogrammer</h1>
            </AdminLayout>
          )
      }
    </>
  );
}

export default MyApp
