import '../styles/globals.css'
import Layout from '../Components/Layout';
import { wrapper } from '../Redux/store';

function MyApp({ Component, pageProps }) {
  return(
    <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
    );
}

export default wrapper.withRedux(MyApp);
