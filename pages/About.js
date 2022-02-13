import Head from '../Components/Headm';
import Crousel from '../Components/Crousel';
import About from '../Components/About';
import { useState } from 'react';
import Router from 'next/router';
import Loader from '../Components/Loader';

export default function Aboutus() {
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
          <About />
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
        tittle="About Of Technical Knowledge Bloging | Mohd Ahasan Khan"
        description="TechnicalKnowledge Blog is a website where you can learn about Technology, bussiness, culture, designing, word, politics, health, style, travel, and also about programming langueges its tutorial and related so on."
        keywords="About Of Technical Knowledge Bloging | Mohd Ahasan Khan, About Of Technical Knowledge By Mohd Ahasan Khan, Technical Knowledge By Mohd Ahasan Khan, Technical Knowledge, Technical Knowledge Bloging Website, Tips And Tricks, Tips And Tricks By Technical Knowledge, Coding By Technical Knowledge, Programming By Technical Knowledge, Technology By Technical Knowledge, Bussiness By Technical Knowledge, Culture By Technical Knowledge, Designing By Technical Knowledge, World By Technical Knowledge, Politics By Technical Knowledge, Health By Technical Knowledge, Style By Technical Knowledge, Travel By Technical Knowledge, Coding, Programming, Technology, Bussiness, Culture, Designing, World, Politics, Health, Style, Travel"
        imgurl="https://technicalknowledge.herokuapp.com/know1.jpg"
      />
      <Loding />
    </>
  );
}
