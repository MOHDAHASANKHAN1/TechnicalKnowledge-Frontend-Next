import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { All_Blogs_Details, Featured_Blogs_Details } from "../Redux/Action/Fech_Api.js";
import { useEffect } from "react";

export default function Featured_Artcles() {

    const dispatch = useDispatch();
    const All = useSelector((state) => state.All_Blogs_Details.AllBlogs);
    const Featured = useSelector((state) => state.Featured_Blogs_Details.FeaturedBlogs);

    useEffect(() => {
        dispatch(All_Blogs_Details());
        dispatch(Featured_Blogs_Details());
    }, []);

    return (
        <div>
            <div className="container-fluid">
                <div className="row g-2">
                    <div className="bbox">
                        <h1 className="bbox"><u><b><i>Featured Articles</i></b></u></h1>
                    </div>
                    <hr className="dropdown-divider bg-dark" />
                    {
                        Featured.map((data) =>
                            <div className="col-sm-4" key={1}>
                                <Link passHref href={`/Singleblog/${data.pathname}`} className="nav-link">
                                    <div className="card"><img src={data.firstimage} className="card-img-top" alt={data.tittle} />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{data.tittle}</h5>
                                            <p className="card-text text-dark  text-center">{data.shortdescription}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }

                    <hr className="dropdown-divider bg-dark" />
                    <div className="col-sm-12 my-6">
                        <div className="centre">
                            <div><button className="btn btn-light bg-danger" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                                <h1><u><b><i>See All Articles</i></b></u></h1>
                            </button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="collapse mt-2" id="collapseExample3">
                <div className="card card-body color">
                    <div className="container-fluid">
                        <div className="row g-2">
                            <hr className="dropdown-divider bg-dark" />
                            {
                                All.map((data) =>
                                    <div className="col-sm-4" key={1}>
                                        <Link passHref href={`/Singleblog/${data.pathname}`} className="nav-link">
                                            <div className="card"><img src={data.firstimage} className="card-img-top" alt={data.tittle} />
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">{data.tittle}</h5>
                                                    <p className="card-text text-dark text-center">{data.shortdescription}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
