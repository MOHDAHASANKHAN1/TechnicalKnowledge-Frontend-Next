import axios from "axios";
import SingleBlogPostDetails from '../../Components/Single_Blog_Post_Details';
import BlogBase from '../../Components/BlogBase';
import Head from '../../Components/Headm';

export default function SingleBlog({ Post }) {

  const Heads = () => {
    if (Post !== null) {
      return (
        <>
          <Head
            tittle={Post.tittle}
            description={Post.shortdescription + " " + Post.tittle}
            keywords={Post.keywords}
          />
        </>
      );
    } else {
      return (
        <>
        </>
      );
    }
  }
  return (
    <>
      <Heads />
      <BlogBase Component={SingleBlogPostDetails} Detailes={Post} />
    </>
  );
}

export async function getServerSideProps(context) {

  const pathname = context.params.Singleblog;
  const pdata = {
    pathname: pathname
  }
  const Post = await
    axios.post("https://technicalknowledge-backends.herokuapp.com/Blogs/Read/Single", pdata);
  return {
    props: {
      Post: Post.data.info || null
    }
  }
}