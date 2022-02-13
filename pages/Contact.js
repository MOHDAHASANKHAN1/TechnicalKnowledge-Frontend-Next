import Head from '../Components/Headm';
import Crousel from '../Components/Crousel';
import Contact from '../Components/Contact';
import { useState } from 'react';
import Router from 'next/router';
import Loader from '../Components/Loader';

export default function Contactus() {
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
          <Contact />
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
        tittle="Contact To Technical Knowledge Bloging | Mohd Ahasan Khan"
        description="We love hearing from you! Have questions? Please ask them! Concerns? We learn and grow through your feedback. Do you just want to tell us how awesome we are? Naturally, we’ll accept those messages as well. 
        Location: Mohanlalganj, Lucknow
        Email: aimtahsankhan@gmail.com
        Phone: +91-9918423716"
        keywords="Contact To Technical Knowledge Bloging | Mohd Ahasan Khan, Contact To Technical Knowledge By Mohd Ahasan Khan, Technical Knowledge By Mohd Ahasan Khan, Technical Knowledge, Technical Knowledge Bloging Website, Tips And Tricks, Tips And Tricks By Technical Knowledge, Coding By Technical Knowledge, Programming By Technical Knowledge, Technology By Technical Knowledge, Bussiness By Technical Knowledge, Culture By Technical Knowledge, Designing By Technical Knowledge, World By Technical Knowledge, Politics By Technical Knowledge, Health By Technical Knowledge, Style By Technical Knowledge, Travel By Technical Knowledge, Coding, Programming, Technology, Bussiness, Culture, Designing, World, Politics, Health, Style, Travel"
        imgurl="https://technicalknowledge.herokuapp.com/know1.jpg"
      />
      <Loding />
    </>
  );
}
