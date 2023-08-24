import '@/styles/globals.css'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Layout from 'components/Layout/Layout'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import { RecoilRoot } from 'recoil'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function App({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <Head>Home</Head>
        <ToastContainer hideProgressBar={false} progressStyle={false} />
        <Layout>
          <Elements stripe={stripePromise}>
            <Component {...pageProps} />
          </Elements>
        </Layout>
      </RecoilRoot>
    </>
  )
}
