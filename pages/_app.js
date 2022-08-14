import '../styles/globals.css'
import MainLayout from '../layout/MainLayout';
import { ChakraProvider } from '@chakra-ui/react'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MainLayout>
        <Component {...pageProps} />
        <h1 className='fixed  text-slate-600 font-bold bottom-8'>Thanks to @skprogrammer</h1>
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp
