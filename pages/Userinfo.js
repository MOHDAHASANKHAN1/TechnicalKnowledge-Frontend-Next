import Head from "../Components/Headm";
import Blogsusersinfo from "../Components/Blogs_Users_Info";
import axios from "axios";
import { useState } from "react";
import Router from "next/router";
import Loader from "../Components/Loader";

export default function Userinfo({ Userinfos }) {
  const Loding = () => {
    const [loading, setLoading] = useState(true);

    Router.onRouteChangeStart = (url) => {
      setLoading(false);
    };
    Router.onRouteChangeComplete = (url) => {
      setLoading(true);
    };
    if (loading) {
      return (
        <>
          <Blogsusersinfo data={Userinfos} />
        </>
      );
    } else {
      return (
        <>
          <Loader />
        </>
      );
    }
  };

  return (
    <>
      <Head tittle="User Information" />
      <Loding />
    </>
  );
}

export async function getServerSideProps(context) {
  const Userinfos = await axios.get(
    "https://technical-knowledge-backend-node-rest.vercel.app/Blogsusers"
  );
  return {
    props: {
      Userinfos: Userinfos.data.user,
    },
  };
}
