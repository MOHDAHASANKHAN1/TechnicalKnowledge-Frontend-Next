import { useState } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import Loader from './Loader';
import { useSelector, useDispatch } from "react-redux";
import { Recent_Blogs_Details, Populer_Blogs_Details } from "../Redux/Action/Fech_Api.js";
import { useEffect } from "react";

const Loding = (props) => {
    const [loading, setLoading] = useState(true);
    const Component = props.Component;
    const Detailes = props.Detailes;

    Router.onRouteChangeStart = url => {
        setLoading(false);
    }
    Router.onRouteChangeComplete = url => {
        setLoading(true);
    }

    if (loading) {
        return (
            <>
                <Component Detailes={Detailes} />
            </>
        );
    } else {
        return (
            <>
                <Loader />
            </>
        );
    }
}

function BlogBase(props) {
    const Components = props.Component;
    const Detailes = props.Detailes;

    const dispatch = useDispatch();
    const Populer = useSelector((state) => state.Populer_Blogs_Details.PopulerBlogs);
    const Recent = useSelector((state) => state.Recent_Blogs_Details.RecentBlogs);

    useEffect(() => {
        dispatch(Populer_Blogs_Details());
        dispatch(Recent_Blogs_Details());
    }, []);

    const history = useRouter();

    const [search, setSearch] = useState('');
    function Search() {
        if (search === '') {
            alert("Please Enter Any Thing In Search Box");
        } else {
            history.push(`/Searchblog/${search}`);
        }
    }

    return (
        <>
            <div className='container-fluid'>
                <div style={{ backgroundColor: "#00f" }} className='mt-4 py-3'>
                    <h2 className='text-center' style={{ color: "#fff", fontSize: "3rem" }}>Blog</h2>
                    <h2 className='text-center' style={{ color: "red" }}>Technology Health Style Travel Culture Design Politics Science Bussiness World</h2>
                </div>

                <div className='row gx-2'>
                    <div className='col-sm-8'>
                        <Loding Component={Components} Detailes={Detailes} />
                    </div>

                    <div className='col-sm-4'>

                        <div className='right_side_info mt-4'>
                            <div>
                                <div className="my-3  p-3 d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search"
                                        aria-label="Search" value={search}
                                        onChange={((e) => {
                                            const str = e.target.value;
                                            const arr = str.split(" ");
                                            for (var i = 0; i < arr.length; i++) {
                                                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                                            }
                                            const str2 = arr.join(" ");
                                            setSearch(str2);
                                        })} /><i className="fas fa-search p-2" onClick={() => Search()}></i>
                                </div>
                            </div>
                        </div>

                        <div className='right_side_info mt-4'>
                            <div>
                                <div className="p-3">
                                    <h2 className='text-center'><b>Popular Posts</b></h2>
                                    <br />
                                    {
                                        Populer.map((data) =>
                                            <Link passHref href={`/Singleblog/${data.pathname}`} key={data._id}>
                                                <a >
                                                    <div className="boxes p-3">
                                                        <img src={data.firstimage} className="img-fluid" alt={data.tittle} />
                                                        <div className="texts">
                                                            <p className='text-center'>{data.tittle}</p>
                                                        </div>
                                                    </div>
                                                    <hr className="dropdown-divider bg-dark" />
                                                </a>
                                            </Link>

                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='right_side_info mt-4'>
                            <div>
                                <div className="p-3">
                                    <h2 className='text-center'><b>Recent Posts</b></h2>
                                    <br />
                                    {
                                        Recent.map((data) =>
                                            <Link passHref href={`/Singleblog/${data.pathname}`} key={data._id}>
                                                <a><div className="boxes p-3">
                                                    <img src={data.firstimage} className="img-fluid" alt={data.tittle} />
                                                    <div className="texts">
                                                        <p className='text-center'>{data.tittle}</p>
                                                    </div>
                                                </div>
                                                    <hr className="dropdown-divider bg-dark" />
                                                </a>
                                            </Link>

                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="right_side_info mt-4">
                            <div>
                                <div className="py-4 px-5">
                                    <h2 className='text-dark'><b>Topics</b></h2>
                                    <Link passHref href="/Blog/Technology" className='nav-link px-0'><h5 className='topics'>Technology(20)</h5></Link>
                                    <Link passHref href="/Blog/Science" className='nav-link px-0'><h5 className='topics'>Science(10)</h5></Link>
                                    <Link passHref href="/Blog/Health" className='nav-link px-0'><h5 className='topics'>Health(13)</h5></Link>
                                    <Link passHref href="/Blog/Finance" className='nav-link px-0'><h5 className='topics'>Finance(16)</h5></Link>
                                    <Link passHref href="/Blog/Lifestyle" className='nav-link px-0'><h5 className='topics'>LifeStyle(6)</h5></Link>
                                    <Link passHref href="/Blog/Travel" className='nav-link px-0'><h5 className='topics'>Travel(3)</h5></Link>
                                    <Link passHref href="/Blog/Design" className='nav-link px-0'><h5 className='topics'>Design(7)</h5></Link>
                                    <Link passHref href="/Blog/Culture" className='nav-link px-0'><h5 className='topics'>Culture(9)</h5></Link>
                                    <Link passHref href="/Blog/Bussiness" className='nav-link px-0'><h5 className='topics'>Bussiness(8)</h5></Link>
                                    <Link passHref href="/Blog/Politics" className='nav-link px-0'><h5 className='topics'>Politics(2)</h5></Link>
                                    <Link passHref href="/Blog/Opinion" className='nav-link px-0'><h5 className='topics'>Opinion(5)</h5></Link>
                                    <Link passHref href="/Blog/World" className='nav-link px-0'><h5 className='topics'>World(2)</h5></Link>
                                    <Link passHref href="/Blog/U.s." className='nav-link px-0'><h5 className='topics'>U.s.(2)</h5></Link>
                                    <Link passHref href="/Blog/Social-Media" className='nav-link px-0'><h5 className='topics'>Social Medea(15)</h5></Link>
                                    <Link passHref href="/Blog/Bloging" className='nav-link px-0'><h5 className='topics'>Bloging(9)</h5></Link>
                                    <Link passHref href="/Blog/Digital-Marketing" className='nav-link px-0'><h5 className='topics'>Digital Marketing(11)</h5></Link>
                                    <Link passHref href="/Blog/Money-Making" className='nav-link px-0'><h5 className='topics'>Money Making(9)</h5></Link>
                                    <Link passHref href="/Blog/Bitcoin" className='nav-link px-0'><h5 className='topics'>Bitcoin(6)</h5></Link>
                                    <Link passHref href="/Blog/Entrepreneurship-&-Startup" className='nav-link px-0'><h5 className='topics'>Entrepreneurship & Startup(3)</h5></Link>
                                    <Link passHref href="/Blog/Freelancing" className='nav-link px-0'><h5 className='topics'>Freelancing(2)</h5></Link>
                                    <Link passHref href="/Blog/Companies" className='nav-link px-0'><h5 className='topics'>Companies(8)</h5></Link>
                                    <Link passHref href="/Blog/Marketing-tools" className='nav-link px-0'><h5 className='topics'>Marketing tools(3)</h5></Link>
                                    <Link passHref href="/Blog/Sports" className='nav-link px-0'><h5 className='topics'>Sports(8)</h5></Link>
                                    <Link passHref href="/Blog/Photography" className='nav-link px-0'><h5 className='topics'>Photography(5)</h5></Link>
                                    <Link passHref href="/Blog/Eco-tourism" className='nav-link px-0'><h5 className='topics'>Eco-tourism(2)</h5></Link>
                                    <Link passHref href="/Blog/Windsurfing" className='nav-link px-0'><h5 className='topics'>Windsurfing(6)</h5></Link>
                                    <Link passHref href="/Blog/Videography" className='nav-link px-0'><h5 className='topics'>Videography(8)</h5></Link>
                                    <Link passHref href="/Blog/Funny-Stories" className='nav-link px-0'><h5 className='topics'>Funny Stories(15)</h5></Link>
                                </div>
                            </div>
                        </div>
                        <div className="right_side_info mt-4">
                            <div>
                                <a href="https://wa.me/+919918423716" className='nav-link'>
                                    <div className="my-3 py-3 px-2">
                                        <h4 className='text-center'><b>Know More About Mohd Ahsan Khan</b></h4>
                                        <img src="/know1.jpg" className="img-fluid" alt="Technical Knowledge By Mohd Ahasan Khan"></img>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="right_side_info mt-4">
                            <div>
                                <a href="https://www.facebook.com/people/Mo-Ahsan-Khan/100043795833453/" className='nav-link'>
                                    <div className="my-3 py-3 px-2">
                                        <h4 className='text-center'><b>Join Our Facebook</b></h4>
                                        <img src="/know2.jpg" className="img-fluid" alt="Technical Knowledge By Mohd Ahasan Khan"></img>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="right_side_info mt-4">
                            <div>
                                <a href="https://t.me/TechnicalKnowledgeByMoAhasanKhan" className='nav-link'>
                                    <div className="my-3 py-3 px-2">
                                        <h4 className='text-center'><b>Join Our Telegram</b></h4>
                                        <img src="/know3.jpg" className="img-fluid" alt="Technical Knowledge By Mohd Ahasan Khan"></img>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="right_side_info mt-4">
                            <div>
                                <div className="py-4 px-4">
                                    <h2><b>Follow Us</b></h2><br />
                                    <div>
                                        <div className="ss-follow-wrapper ss-clearfix ss-regular-buttons ss-columns-1 ss-network-style">
                                            <div className="ss-follow-column" data-ss-sf-network-id="&#34;youtube&#34;"><p onClick={() => alert("We Are Sorry Now Youtube Channel Are Not Available")}
                                                href="#"
                                                className="ss-follow-network ss-youtube-color" rel="nofollow noopener"
                                                aria-label="youtube" target="_blank"><span className="ss-follow-icon"><svg
                                                    className="ss-svg-icon" aria-hidden="true" role="img" focusable="false"
                                                    width="32" height="32" viewBox="0 0 32 32"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M31.688 9.625c0 0-0.313-2.25-1.25-3.188-1.25-1.313-2.625-1.313-3.25-1.375-4.438-0.313-11.188-0.313-11.188-0.313v0c0 0-6.75 0-11.188 0.313-0.625 0.063-2 0.063-3.25 1.375-0.938 0.938-1.25 3.188-1.25 3.188s-0.313 2.563-0.313 5.125v2.438c0 2.625 0.313 5.188 0.313 5.188s0.313 2.188 1.25 3.188c1.25 1.25 2.875 1.25 3.563 1.375 2.563 0.25 10.875 0.313 10.875 0.313s6.75 0 11.188-0.313c0.625-0.063 2-0.125 3.25-1.375 0.938-1 1.25-3.188 1.25-3.188s0.313-2.563 0.313-5.188v-2.438c0-2.563-0.313-5.125-0.313-5.125zM20.313 16.25v0l-7.563 3.938v-9l8.625 4.5z">
                                                    </path>
                                                </svg></span> <span className="ss-follow-network-label">Follow us on
                                                    YouTube</span> <span className="ss-follow-network-count"><span
                                                        className="ss-follow-network-count-number">4.5K</span> <span
                                                            className="ss-follow-network-count-label">Followers</span></span></p></div>
                                            <div className="ss-follow-column" data-ss-sf-network-id="&#34;facebook&#34;"><a
                                                href="https://www.facebook.com/people/Mo-Ahsan-Khan/100043795833453/"
                                                className="ss-follow-network ss-facebook-color" rel="nofollow noopener"
                                                aria-label="facebook" ><span className="ss-follow-icon"><svg
                                                    className="ss-svg-icon" aria-hidden="true" role="img" focusable="false"
                                                    width="32" height="32" viewBox="0 0 32 32"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M32 16.098C32 7.208 24.837 0 16 0S0 7.207 0 16.098C0 24.133 5.851 30.792 13.5 32V20.751H9.437v-4.653H13.5V12.55c0-4.034 2.389-6.263 6.043-6.263 1.751 0 3.582.315 3.582.315v3.961h-2.018c-1.987 0-2.607 1.241-2.607 2.514v3.02h4.438l-.71 4.653H18.5V32C26.149 30.792 32 24.133 32 16.098z">
                                                    </path>
                                                </svg></span> <span className="ss-follow-network-label">Follow us on
                                                    Facebook</span> <span className="ss-follow-network-count"><span
                                                        className="ss-follow-network-count-number">1.4K</span> <span
                                                            className="ss-follow-network-count-label">Followers</span></span></a></div>
                                            <div className="ss-follow-column" data-ss-sf-network-id="&#34;twitter&#34;"><a
                                                href="https://twitter.com/MoAhsanKhan5"
                                                className="ss-follow-network ss-twitter-color" rel="nofollow noopener"
                                                aria-label="twitter"><span className="ss-follow-icon"><svg
                                                    className="ss-svg-icon" aria-hidden="true" role="img" focusable="false"
                                                    width="32" height="32" viewBox="0 0 32 32"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M28.75 9.5c0 0.25 0 0.563 0 0.813 0 8.688-6.625 18.688-18.688 18.688-3.688 0-7.188-1.063-10.063-2.938 0.5 0.063 1.063 0.063 1.563 0.063 3.063 0 5.938-1 8.188-2.813-2.875 0-5.313-1.938-6.188-4.563 0.438 0.125 0.813 0.125 1.25 0.125 0.625 0 1.188-0.063 1.75-0.188-3-0.625-5.25-3.313-5.25-6.438 0-0.063 0-0.063 0-0.125 0.875 0.5 1.875 0.813 2.938 0.813-1.75-1.125-2.938-3.188-2.938-5.438 0-1.188 0.375-2.313 0.938-3.313 3.188 4 8.063 6.625 13.5 6.875-0.125-0.5-0.188-1-0.188-1.5 0-3.625 2.938-6.563 6.563-6.563 1.938 0 3.625 0.813 4.813 2.063 1.5-0.313 2.938-0.813 4.188-1.563-0.5 1.5-1.563 2.813-2.875 3.625 1.313-0.188 2.563-0.5 3.75-1.063-0.875 1.313-2 2.5-3.25 3.438z">
                                                    </path>
                                                </svg></span> <span className="ss-follow-network-label">Follow us on
                                                    Twitter</span> <span className="ss-follow-network-count"><span
                                                        className="ss-follow-network-count-number">250</span> <span
                                                            className="ss-follow-network-count-label">Followers</span></span></a></div>
                                            <div className="ss-follow-column" data-ss-sf-network-id="&#34;instagram&#34;"><a
                                                href="https://www.instagram.com/mo_ahsan_khan"
                                                className="ss-follow-network ss-instagram-color" rel="nofollow noopener"
                                                aria-label="instagram"><span className="ss-follow-icon"><svg
                                                    className="ss-svg-icon" aria-hidden="true" role="img" focusable="false"
                                                    width="32" height="32" viewBox="0 0 32 32"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16 2.875c4.313 0 4.75 0.063 6.438 0.125 1.625 0.063 2.438 0.313 3 0.5 0.75 0.313 1.313 0.688 1.813 1.188 0.563 0.563 0.938 1.125 1.188 1.813 0.25 0.625 0.5 1.438 0.563 3 0.063 1.75 0.125 2.188 0.125 6.5s-0.063 4.75-0.125 6.438c-0.063 1.625-0.313 2.438-0.5 3-0.313 0.75-0.688 1.313-1.188 1.813-0.563 0.563-1.125 0.938-1.813 1.188-0.625 0.25-1.438 0.5-3 0.563-1.75 0.063-2.188 0.125-6.5 0.125s-4.75-0.063-6.438-0.125c-1.625-0.063-2.438-0.313-3-0.5-0.75-0.313-1.313-0.688-1.813-1.188-0.563-0.563-0.938-1.125-1.188-1.813-0.25-0.625-0.5-1.438-0.563-3-0.063-1.75-0.125-2.188-0.125-6.5s0.063-4.75 0.125-6.438c0.063-1.625 0.313-2.438 0.5-3 0.313-0.75 0.688-1.313 1.188-1.813 0.563-0.563 1.125-0.938 1.813-1.188 0.625-0.25 1.438-0.5 3-0.563 1.75-0.063 2.188-0.125 6.5-0.125M16 0c-4.375 0-4.875 0.063-6.563 0.125-1.75 0.063-2.938 0.313-3.875 0.688-1.063 0.438-2 1-2.875 1.875s-1.438 1.813-1.875 2.875c-0.375 1-0.625 2.125-0.688 3.875-0.063 1.688-0.125 2.188-0.125 6.563s0.063 4.875 0.125 6.563c0.063 1.75 0.313 2.938 0.688 3.875 0.438 1.063 1 2 1.875 2.875s1.813 1.438 2.875 1.875c1 0.375 2.125 0.625 3.875 0.688 1.688 0.063 2.188 0.125 6.563 0.125s4.875-0.063 6.563-0.125c1.75-0.063 2.938-0.313 3.875-0.688 1.063-0.438 2-1 2.875-1.875s1.438-1.813 1.875-2.875c0.375-1 0.625-2.125 0.688-3.875 0.063-1.688 0.125-2.188 0.125-6.563s-0.063-4.875-0.125-6.563c-0.063-1.75-0.313-2.938-0.688-3.875-0.438-1.063-1-2-1.875-2.875s-1.813-1.438-2.875-1.875c-1-0.375-2.125-0.625-3.875-0.688-1.688-0.063-2.188-0.125-6.563-0.125zM16 7.75c-4.563 0-8.25 3.688-8.25 8.25s3.688 8.25 8.25 8.25c4.563 0 8.25-3.688 8.25-8.25s-3.688-8.25-8.25-8.25zM16 21.375c-2.938 0-5.375-2.438-5.375-5.375s2.438-5.375 5.375-5.375c2.938 0 5.375 2.438 5.375 5.375s-2.438 5.375-5.375 5.375zM26.438 7.438c0 1.063-0.813 1.938-1.875 1.938s-1.938-0.875-1.938-1.938c0-1.063 0.875-1.875 1.938-1.875s1.875 0.813 1.875 1.875z">
                                                    </path>
                                                </svg></span> <span className="ss-follow-network-label">Follow us on
                                                    Instagram</span> <span className="ss-follow-network-count"><span
                                                        className="ss-follow-network-count-number">1.2K</span> <span
                                                            className="ss-follow-network-count-label">Followers</span></span></a></div>
                                            <div className="ss-follow-column" data-ss-sf-network-id="&#34;linkedin&#34;"><a
                                                href="https://www.linkedin.com/in/mo-ahasan-khan-0240b5205"
                                                className="ss-follow-network ss-linkedin-color" rel="nofollow noopener"
                                                aria-label="linkedin"><span className="ss-follow-icon"><svg
                                                    className="ss-svg-icon" aria-hidden="true" role="img" focusable="false"
                                                    width="32" height="32" viewBox="0 0 32 32"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd"
                                                        d="M29.632 0C30.939 0 32 1.032 32 2.307v27.384C32 30.966 30.939 32 29.632 32H2.36C1.058 32 0 30.966 0 29.69V2.308C0 1.032 1.058 0 2.36 0h27.272zM9.149 11.638h-4.77V27h4.77V11.638zm12.133-.382c-2.318 0-3.874 1.273-4.509 2.48h-.066v-2.098H12.14V27h4.76v-7.599c0-2.004.378-3.946 2.858-3.946 2.447 0 2.475 2.29 2.475 4.072V27H27v-8.423c0-4.138-.893-7.32-5.718-7.32v-.001zM6.764 4A2.766 2.766 0 004 6.769a2.765 2.765 0 105.528 0A2.767 2.767 0 006.765 4h-.001z">
                                                    </path>
                                                </svg></span> <span className="ss-follow-network-label">Follow us on
                                                    LinkedIn</span> <span className="ss-follow-network-count"><span
                                                        className="ss-follow-network-count-number">1.6K</span> <span
                                                            className="ss-follow-network-count-label">Followers</span></span></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogBase;
