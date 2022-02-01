import Head from '../Components/Headm';
import PostBlog from '../Components/Post_Blog';
import {useState} from 'react';
import Router from 'next/router';
import Loader from '../Components/Loader';

export default function PostBlogs() {
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
      <PostBlog/>
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
    <Head tittle="Post Blog | Add Blog" />
    <Loding/>
    </>
      );
}
