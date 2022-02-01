import axios from "axios";
import SingleBlogPostDetails from '../../Components/Single_Blog_Post_Details';
import BlogBase from '../../Components/BlogBase';
import Head from '../../Components/Headm';

export default function SingleBlog({Recent, Populer, Post}) {

const Heads = () => {
  if (Post !== null) {
    return(
      <>
      <Head 
          tittle={Post.tittle}
          description={ Post.tittle + " " + Post.shortdescription}
          keywords={Post.keywords}
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
        <BlogBase Populer={Populer} Recent={Recent} Component={SingleBlogPostDetails} Detailes={Post} />
        </>
    );
}

export async function getServerSideProps(context){
  const Populer = await 
        axios.get("https://technicalknowledge-backends.herokuapp.com/Blogs/Read/Populer");
  const Recent = await 
        axios.get("https://technicalknowledge-backends.herokuapp.com/Blogs/Read/Recent");
  const pathname = context.params.Singleblog;
  const pdata = {
  pathname: pathname
  }
  const Post = await 
        axios.post("https://technicalknowledge-backends.herokuapp.com/Blogs/Read/Single", pdata);
  return{
    props: {
      Recent: Recent.data.Blogs,
      Populer: Populer.data.Blogs,
      Post: Post.data.info || null
    }
  }
}