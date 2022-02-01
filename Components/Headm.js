import Head from 'next/head';

export default function Headm(props){
  return(
    <>
    <Head>
      <title>{props.tittle}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <meta name="author" content="Mohd Ahasan Khan"/>
      <meta name="google-site-verification" content="qdtQbk2SFCSNiz3XDJw1dAD4Cy4hWXUTuFiYKh-yir0" />
    </Head>
    </>
    );
}