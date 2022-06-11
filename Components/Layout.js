import Headl from './Headl';
import Scriptm from './Script';
import Navbar from "./Navbar";
import LearnMoreAboutTechnology from "./Learn_more_about_technology";
import Newsletter from './Newsletter';
import Banner from './Banner';
import Footer from './Footer';
import Link from 'next/link';

function Layout({ children }) {
  return (
    <>

      <Navbar />
      <div className="bottom bg-light">
        <div className="d-flex justify-content-around">
          <div>
            <span className="text-primary"><Link href="/privacy-policy">Privacy Policy</Link></span>
          </div>
          <div>
            <span className="text-primary"><Link href="/terms-and-conditions">Terms And Conditions</Link></span>
          </div>
          <div>
            <span className="text-primary"><Link href="/disclaimer">Disclaimer</Link></span>
          </div>
        </div>
      </div>
      {children}
      <Headl />
      <LearnMoreAboutTechnology />
      <Newsletter />
      <Banner />
      <Footer />
      <Scriptm />
    </>
  );
}
export default Layout;