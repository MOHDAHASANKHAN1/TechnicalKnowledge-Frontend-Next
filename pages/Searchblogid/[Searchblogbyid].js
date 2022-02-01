import axios from "axios";
import Searchblogid from '../../Components/Searchblogid';
import BlogBase from '../../Components/BlogBase';
import Head from '../../Components/Headm';

export default function SingleBlog({Recent, Populer, Searchbyid}) {
  
const Heads = () => {
  if (Searchbyid !== null) {
    return(
      <>
      <Head 
          tittle={Searchbyid.tittle}
          description={ Searchbyid.tittle + " " + Searchbyid.shortdescription}
          keywords={Searchbyid.keywords}
      />
      </>
      );
  } else {
    return(
      <>
      </>
      );
  }
}
    return (
        <>
        <Heads/>
        <BlogBase Populer={Populer} Recent={Recent} Component={Searchblogid} Detailes={Searchbyid} />
        </>
    );
}


export async function getServerSideProps(context){
  const Populer = await 
        axios.get("https://technicalknowledge-backends.herokuapp.com/Blogs/Read/Populer");
  const Recent = await 
        axios.get("https://technicalknowledge-backends.herokuapp.com/Blogs/Read/Recent");
  const pathname = context.params.Searchblogbyid;
  const pdata = {
  pathname: pathname
  }
  const Searchbyid = await 
        axios.post("https://technicalknowledge-backends.herokuapp.com/Blogs/Read/Single/Id", pdata);
  return{
    props: {
      Recent: Recent.data.Blogs,
      Populer: Populer.data.Blogs,
      Searchbyid: Searchbyid.data.info || null
    }
  }
}