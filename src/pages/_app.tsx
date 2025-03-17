import '../styles/global.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChallengesProvider>
    <Component {...pageProps} />
  </ChallengesProvider>
    );
}

export default MyApp
