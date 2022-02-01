import axios from 'axios';
import Head from '../Components/Headm';
import ContactMessages from '../Components/Contact_Messages';
import {useState} from 'react';
import Router from 'next/router';
import Loader from '../Components/Loader';

export default function ContactMessage({Contact}) {
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
      <ContactMessages data={Contact} />
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
    <Head tittle="Contact Messages" />
    <Loding/>
    </>
      );
}

export async function getServerSideProps(context){
  const Contact = await 
        axios.get("https://technicalknowledge-backends.herokuapp.com/Contactus/Read")
  
  return{
    props: {
      Contact: Contact.data.user
    }
  }
}
