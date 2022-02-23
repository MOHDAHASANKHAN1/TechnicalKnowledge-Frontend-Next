import Headl from './Headl';
import Scriptm from './Script';
import Navbar from "./Navbar";
import LearnMoreAboutTechnology from "./Learn_more_about_technology";
import Newsletter from './Newsletter';
import Banner from './Banner';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Headl />
      <Navbar />
      {children},
      <LearnMoreAboutTechnology />
      <Newsletter />
      <Banner />
      <Footer />
      <Scriptm />
    </>
  );
}
export default Layout;