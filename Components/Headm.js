import Head from "next/head";
import { useRouter } from "next/router";

export default function Headm(props) {
  const { asPath } = useRouter();
  return (
    <>
      <Head>
        <title>{props.tittle}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <link
          rel="sitemap"
          href="https://technicalknowledge.vercel.app//sitemap.xml"
          type="application/xml"
        />
        <link
          rel="canonical"
          href={"https://technicalknowledge.vercel.app/" + asPath}
        />
        <meta property="article:tag" content={props.keywords} />
        <meta property="og:title" content={props.tittle} />
        <meta property="og:description" content={props.description} />
        <meta
          property="og:url"
          content={"https://technicalknowledge.vercel.app/" + asPath}
        />
        <meta property="og:site_name" content="Technical Knowledge" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Mo-Ahsan-Khan/100043795833453/"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article"></meta>
        <meta property="og:image" content={props.imgurl} />
        <meta property="og:image:secure_url" content={props.imgurl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:title" content={props.tittle} />
        <meta name="twitter:site" content="@MoAhsanKhan5" />
        <meta name="twitter:image" content={props.imgurl} />
        <meta name="twitter:creator" content="@MoAhsanKhan5" />
        <meta name="author" content="Mohd Ahasan Khan" />
        <meta
          name="google-site-verification"
          content="qdtQbk2SFCSNiz3XDJw1dAD4Cy4hWXUTuFiYKh-yir0"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://technicalknowledge.vercel.app//Icon.png"
        ></link>
      </Head>
    </>
  );
}
