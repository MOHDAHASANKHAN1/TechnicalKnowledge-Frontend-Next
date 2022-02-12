import Head from '../../Components/Headm';
import AllBlogPostListMain from '../../Components/All_Blog_Post_List_Main';
import BlogBase from '../../Components/BlogBase';
import { useRouter } from 'next/router';

export default function All_Blog_With_Category() {

  const router = useRouter()
  const categoryname = router.query.Allblog;

  const pdata = {
    category: categoryname
  }

  return (
    <>
      <Head
        tittle="Blogs With Category Wise | Technical Knowledge"
        description="The articles you’ll find on TechnicalKnowledge.com are authoritative and comprehensive. Our topic experts research and write up content to help you make the best decisions for your life, whether about your finances, health, home, work, and more."
        keywords="Blogs With Category Wise | Technical Knowledge, Technical Knowledge By Mohd Ahasan Khan, Technical Knowledge, Technical Knowledge Bloging Website, Tips And Tricks, Tips And Tricks By Technical Knowledge, Coding By Technical Knowledge, Programming By Technical Knowledge, Technology By Technical Knowledge, Bussiness By Technical Knowledge, Culture By Technical Knowledge, Designing By Technical Knowledge, World By Technical Knowledge, Politics By Technical Knowledge, Health By Technical Knowledge, Style By Technical Knowledge, Travel By Technical Knowledge, Coding, Programming, Technology, Bussiness, Culture, Designing, World, Politics, Health, Style, Travel"
      />
      <BlogBase Component={AllBlogPostListMain} Detailes={pdata} />
    </>
  );
}
