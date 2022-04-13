import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { Recent_Blogs_Details } from "../Redux/Action/Fech_Api.js";
import { useEffect } from "react";

export default function Recently_Publisheds() {

    const dispatch = useDispatch();
    const Recent = useSelector((state) => state.Recent_Blogs_Details.RecentBlogs);

    useEffect(() => {
        dispatch(Recent_Blogs_Details())
    }, []);

    return (
        <div>
            <hr className="dropdown-divider bg-dark" />
            <div className="container-fluid">
                <div className="bbox">
                    <h1 className="bbox"><u><b><i>Recently Published</i></b></u></h1>
                </div>
                <div className="row g-2">
                    {
                        Recent.map((data) =>
                            <div className="col-sm-6" key={1}>
                                <Link passHref href={`/Singleblog/${data.pathname}`} className="nav-link">
                                    <a>
                                        <div className="card"><img src={data.firstimage} className="card-img-top" alt={data.tittle} />
                                            <div className="card-body">
                                                <h5 className="card-title text-center">{data.tittle}</h5>
                                                <p className="card-text text-dark text-center">{data.shortdescription}</p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
