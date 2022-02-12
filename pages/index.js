import Head from '../Components/Headm';
import Crousel from '../Components/Crousel';
import Explore from '../Components/Explore';
import RecentlyPublisheds from '../Components/Recently_Publisheds';
import FeaturedArticles from '../Components/Featured_Articles';
import Loader from '../Components/Loader';
import Router from 'next/router';
import { useState } from 'react';

export default function Home({ Recent, Featured, All }) {

  const Loding = () => {
    const [loading, setLoading] = useState(true);

    Router.onRouteChangeStart = url => {
      setLoading(false);
    }
    Router.onRouteChangeComplete = url => {
      setLoading(true);
    }
    if (loading) {
      return (
        <>
          <Crousel />
          <FeaturedArticles />
          <Explore />
          <RecentlyPublisheds />
        </>
      );
    } else {
      return (
        <>
          <Loader />
        </>
      );
    }
  }

  return (
    <>
      <Head
        tittle="Welcome To Technical Knowledge Bloging | Mohd Ahasan Khan "
        description="The articles you’ll find on TechnicalKnowledge.com are authoritative and comprehensive. Our topic experts research and write up content to help you make the best decisions for your life, whether about your finances, health, home, work, and more."
        keywords="Welcome To Technical Knowledge Bloging | Mohd Ahasan Khan, Technical Knowledge By Mohd Ahasan Khan, Technical Knowledge, Technical Knowledge Bloging Website, Tips And Tricks, Tips And Tricks By Technical Knowledge, Coding By Technical Knowledge, Programming By Technical Knowledge, Technology By Technical Knowledge, Bussiness By Technical Knowledge, Culture By Technical Knowledge, Designing By Technical Knowledge, World By Technical Knowledge, Politics By Technical Knowledge, Health By Technical Knowledge, Style By Technical Knowledge, Travel By Technical Knowledge, Coding, Programming, Technology, Bussiness, Culture, Designing, World, Politics, Health, Style, Travel"
      />
      <Loding />
    </>
  );
}
