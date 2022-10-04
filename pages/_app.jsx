import { Fragment, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 1900);
  }, []);

  return (
    <>
      {loading ? (
        <Fragment>
          <Component {...pageProps} />
        </Fragment>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MyApp;
