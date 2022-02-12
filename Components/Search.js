import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { Search_Blogs, Search_Blogs_Back } from "../Redux/Action/Fech_Api.js";
import { useEffect } from "react";
import Loader from './Loader';

const Blog_Main = (props) => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.Category_Blogs_Details
    .CategoryBlogs);

  useEffect(() => {
    dispatch(Search_Blogs(props.Detailes));
    return () => {
      dispatch(Search_Blogs_Back());
    };

  }, []);

  if (data) {
    if (data.length !== 0) {
      return (
        <>
          {
            data.map((data) =>
              <div className='row g-0 mt-4' key={1}>
                <div className='col-sm-12' style={{ backgroundColor: "#ffffff" }}>
                  <Link passHref href={`/Singleblog/${data.pathname}`} className='nav-link'>
                    <div className='px-3 py-4'>
                      <h3 className='text-center' style={{ color: "red" }}>{data.tittle}</h3>
                      <br />
                      <img src={data.firstimage} className="img-fluid" alt={data.tittle}></img>
                      <br />
                      <p className='mt-2 text-dark px-2 text-center'>{data.shortdescription} ................. </p>

                      <div className='d-flex justify-content-center'>
                        <p className='text-center cont py-4 px-2 change'>Continue reading...</p>
                      </div>

                      <br />
                      <div className='d-flex'><i className="fa fa-folder-o"></i>
                        <p className='sc change'>{data.category}</p>
                      </div>
                      <div className='d-flex '><i className="fa fa-comments"></i>
                        <p className='sc change'>Leave a comment</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )
          }
        </>
      );
    } else {
      return (
        <>
          <h1 className="text-warning text-center mt-2">Your Search Not Found</h1>
          <br />
          <h1 className="text-warning text-center mt-2">Your Search Not Found</h1>
          <br />
          <h1 className="text-warning text-center mt-2">Your Search Not Found</h1>
          <br />
          <h1 className="text-warning text-center mt-2">Your Search Not Found</h1>
          <br />
          <h1 className="text-warning text-center mt-2">Your Search Not Found</h1>
          <br />
          <h1 className="text-warning text-center mt-2">Your Search Not Found</h1>
          <br />
          <h1 className="text-warning text-center mt-2">Your Search Not Found</h1>
          <br />
          <h1 className="text-warning text-center mt-2">Your Search Not Found</h1>
          <br />
          <h1 className="text-warning text-center mt-2">Your Search Not Found</h1>
          <br />
          <h1 className="text-warning text-center mt-2">Your Search Not Found</h1>
          <br />
        </>
      );
    }
  } else {
    return (
      <>
        <Loader />
      </>
    );
  }

}

export default Blog_Main;