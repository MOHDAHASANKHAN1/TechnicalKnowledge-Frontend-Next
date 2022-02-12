import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../Redux/Action/Register_Login_Logout_Profile_Update_Profile";
import Registrationform from './Registration-form';
import Loginform from './Login-form';

export default function Navbar() {
    const User = useSelector((state) => state.User_Admin_Profile.User);
    const Admin = useSelector((state) => state.User_Admin_Profile.Admin);
    const dispatch = useDispatch();
    const history = useRouter();

    function Logouts() {
        dispatch(Logout());
        history.push("/");
    }

    const Render = () => {
        if (User) {
            return (
                <div>
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark relat" aria-label="Third navbar example">
                        <div className="container-fluid"><Link href="/">
                            <a className="navbar-brand">
                                TechnicalKnowledge
                            </a>
                        </Link> <button
                            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03"
                            aria-controls="navbarsExample03" aria-expanded="false" aria-label="toggle navigation"><span
                                className="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse" id="navbarsExample03">
                                <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                                    <li className="nav-item"><Link href="/"><a className="nav-link">Home</a></Link></li>
                                    <li className="nav-item dropdown">
                                        <Link href="/Blog" ><a className="nav-link dropdown-toggle" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Blogs</a></Link>
                                        <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                            <li><Link href="/Blog/Technology"><a className="dropdown-item text-center">Technology</a></Link></li>
                                            <li><Link href="/Blog/World"><a className="dropdown-item text-center">World</a></Link></li>
                                            <li><Link href="/Blog/Health"><a className="dropdown-item text-center">Health</a></Link></li>
                                            <li><Link href="/Blog/Design"><a className="dropdown-item text-center">Design</a></Link></li>
                                            <li><Link href="/Blog/Culture"><a className="dropdown-item text-center">Culture</a></Link></li>
                                            <li><Link href="/Blog/Politics"><a className="dropdown-item text-center">Politics</a></Link></li>
                                            <li><Link href="/Blog/Bussiness"><a className="dropdown-item text-center">Bussiness</a></Link></li>
                                            <li><Link href="/Blog/Science"><a className="dropdown-item text-center">Science</a></Link></li>
                                            <li><Link href="/Blog/Travel"><a className="dropdown-item text-center">Travel</a></Link></li>
                                            <li><Link href="/Blog/Lifestyle"><a className="dropdown-item text-center">Lifestyle</a></Link></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item"><Link href="/About"><a className="nav-link">About Us</a></Link></li>
                                    <li className="nav-item"><Link href="/Contact"><a className="nav-link">Contact Me </a></Link></li>
                                    <li className="nav-item"><Link href="/Profile"><a className="nav-link">Profile</a></Link></li>

                                </ul>
                                <form><button type="button"
                                    className="btn btn-danger" onClick={() => Logouts()}> <i className="fas fa-sign-out-alt"></i> Logout</button></form>
                            </div>
                        </div>
                    </nav>
                </div>
            );
        } else if (Admin) {
            return (
                <div>
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark relat" aria-label="Third navbar example">
                        <div className="container-fluid"><Link href="/">
                            <a className="navbar-brand">
                                TechnicalKnowledge
                            </a>
                        </Link> <button
                            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03"
                            aria-controls="navbarsExample03" aria-expanded="false" aria-label="toggle navigation"><span
                                className="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse" id="navbarsExample03">
                                <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                                    <li className="nav-item"><Link href="/"><a className="nav-link">Home</a></Link></li>
                                    <li className="nav-item dropdown">
                                        <Link href="/Blog" ><a className="nav-link dropdown-toggle" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Blogs</a></Link>
                                        <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                            <li><Link href="/Blog/Technology"><a className="dropdown-item text-center">Technology</a></Link></li>
                                            <li><Link href="/Blog/World"><a className="dropdown-item text-center">World</a></Link></li>
                                            <li><Link href="/Blog/Health"><a className="dropdown-item text-center">Health</a></Link></li>
                                            <li><Link href="/Blog/Design"><a className="dropdown-item text-center">Design</a></Link></li>
                                            <li><Link href="/Blog/Culture"><a className="dropdown-item text-center">Culture</a></Link></li>
                                            <li><Link href="/Blog/Politics"><a className="dropdown-item text-center">Politics</a></Link></li>
                                            <li><Link href="/Blog/Bussiness"><a className="dropdown-item text-center">Bussiness</a></Link></li>
                                            <li><Link href="/Blog/Science"><a className="dropdown-item text-center">Science</a></Link></li>
                                            <li><Link href="/Blog/Travel"><a className="dropdown-item text-center">Travel</a></Link></li>
                                            <li><Link href="/Blog/Lifestyle"><a className="dropdown-item text-center">Lifestyle</a></Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><Link href="/Profile"><a className="nav-link">Profile</a></Link></li>
                                    <li className="nav-item"><Link href="/Userinfo"><a className="nav-link">Users Info</a></Link></li>
                                    <li className="nav-item"><Link href="/Post_Blog"><a className="nav-link">Post Blog</a></Link></li>

                                    <li className="nav-item dropdown">
                                        <Link href="/Blog" ><a className="nav-link dropdown-toggle" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Nm & Cm</a></Link>
                                        <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                            <li><Link href="/NewsLaterMessage"><a className="dropdown-item text-center">NewsLater Messages</a></Link></li>
                                            <li><Link href="/ContactMessage"><a className="dropdown-item text-center">Contact Messages</a></Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form><button type="button"
                                    className="btn btn-danger" onClick={() => Logouts()}> <i className="fas fa-sign-out-alt"></i> Logout</button></form>
                            </div>
                        </div>
                    </nav>
                </div>
            );
        } else {
            return (
                <div>
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark relat" aria-label="Third navbar example">
                        <div className="container-fluid"><Link href="/">
                            <a className="navbar-brand">
                                TechnicalKnowledge
                            </a>
                        </Link> <button
                            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03"
                            aria-controls="navbarsExample03" aria-expanded="false" aria-label="toggle navigation"><span
                                className="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse" id="navbarsExample03">
                                <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                                    <li className="nav-item"><Link href="/"><a className="nav-link">Home</a></Link></li>
                                    <li className="nav-item dropdown">
                                        <Link href="/Blog" ><a className="nav-link dropdown-toggle" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Blogs</a></Link>
                                        <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                            <li><Link href="/Blog/Technology"><a className="dropdown-item text-center">Technology</a></Link></li>
                                            <li><Link href="/Blog/World"><a className="dropdown-item text-center">World</a></Link></li>
                                            <li><Link href="/Blog/Health"><a className="dropdown-item text-center">Health</a></Link></li>
                                            <li><Link href="/Blog/Design"><a className="dropdown-item text-center">Design</a></Link></li>
                                            <li><Link href="/Blog/Culture"><a className="dropdown-item text-center">Culture</a></Link></li>
                                            <li><Link href="/Blog/Politics"><a className="dropdown-item text-center">Politics</a></Link></li>
                                            <li><Link href="/Blog/Bussiness"><a className="dropdown-item text-center">Bussiness</a></Link></li>
                                            <li><Link href="/Blog/Science"><a className="dropdown-item text-center">Science</a></Link></li>
                                            <li><Link href="/Blog/Travel"><a className="dropdown-item text-center">Travel</a></Link></li>
                                            <li><Link href="/Blog/Lifestyle"><a className="dropdown-item text-center">Lifestyle</a></Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><Link href="/About"><a className="nav-link">About Us</a></Link></li>
                                    <li className="nav-item"><Link href="/Contact"><a className="nav-link">Contact Me </a></Link></li>
                                </ul>
                                <form><button type="button"
                                    className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal1"> SignUp</button> <button type="button"
                                        className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal2">Login</button></form>
                            </div>
                        </div>
                    </nav>
                </div>
            );
        }
    }
    return (
        <div>
            <Render />
            <Registrationform />
            <Loginform />
        </div>
    );
}