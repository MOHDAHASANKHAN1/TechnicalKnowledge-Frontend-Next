import axios from 'axios';
import Head from '../Components/Headm';
import NewslaterMessages from '../Components/Newslater_Messages';
import {useState} from 'react';
import Router from 'next/router';
import Loader from '../Components/Loader';

export default function NewsletterMessages({News}) {
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
      <NewslaterMessages data={News}/>
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
    <Head tittle="Newsletter Messages" />
    <Loding/>
    </>
      );
}
export async function getServerSideProps(context){
  const News = await 
        axios.get("https://technicalknowledge-backends.herokuapp.com/Newslater/Read")
  
  return{
    props: {
      News: News.data.user
    }
  }
}