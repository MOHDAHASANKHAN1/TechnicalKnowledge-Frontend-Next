import Head from '../Components/Headm';
import Profile from '../Components/Profile';
import {useState} from 'react';
import Router from 'next/router';
import Loader from '../Components/Loader';

export default function Profiles() {
const Loding = () => {
  const [loading, setLoading] = useState(true);
  
  Router.onRouteChangeStart = url => {
    setLoading(false);
  }
  Router.onRouteChangeComplete = url => {
    setLoading(true);
  }
if (loading) {
    return(
      <>
      <Profile/>
      </>
      );
  } else {
    return(
      <>
      <Loader/>
      </>
      );
  }
}

  return (
    <>
    <Head tittle="Profile Page" />
    
    <Loding/>
    </>
      );
}
