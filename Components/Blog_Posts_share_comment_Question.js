import { useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/router';

import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    TelegramShareButton,
    TwitterShareButton,
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    PinterestIcon,
    TelegramIcon,
    TwitterIcon,
} from "react-share";

export default function Blog_Posts_share_comment_Question(props) {
    const { asPath } = useRouter();
    const data = props.data;
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    function Submit(blogid) {
        if (email || name || message !== '') {
            if (email === '') {
                alert("Please Enter Your Email");
            } else if (message === '') {
                alert("Please Enter Your Question");
            } else if (name === '') {
                alert("Please Enter Your Name");
            } else {
                var format1 = /[@]+/;
                var format2 = /[.]+/;

                if (format1.test(email) && format2.test(email)) {
                    const data = {
                        name: name,
                        message: message,
                        email: email,
                        postid: blogid
                    };

                    axios
                        .post("https://technicalknowledge-backends.herokuapp.com/Contactus/Add", data)
                        .then((res) => {
                            alert(res.data);
                        });
                } else {
                    alert("Please Enter A Valid Email Address")
                }
            }
        } else {
            alert("Please Enter Your Name And Email And Question");
        }
    }

    return (
        <>
            <hr className="dropdown-dividers bg-dark" />
            <div className="px-1 py-2">
                <h3 style={{ padding: "10px" }}><b><i><u>Please Share This Post</u></i></b></h3>

                <FacebookShareButton
                    className='px-3'
                    url={"https://technicalknowledge.herokuapp.com" + asPath}
                    quote={data.tittle}
                    hashtag="#TechnincalKnowledge"
                >
                    <FacebookIcon round={true} />
                </FacebookShareButton>

                <TwitterShareButton
                    className='px-3'
                    url={"https://technicalknowledge.herokuapp.com" + asPath}
                    title={data.tittle}
                    hashtag="#TechnincalKnowledge"
                >
                    <TwitterIcon round={true} />
                </TwitterShareButton>

                <LinkedinShareButton
                    className='px-3'
                    url={"https://technicalknowledge.herokuapp.com" + asPath}
                    title={data.tittle}
                    summary={data.shortdescription}

                >
                    <LinkedinIcon round={true} />
                </LinkedinShareButton>

                <TelegramShareButton
                    className='px-3'
                    url={"https://technicalknowledge.herokuapp.com" + asPath}
                    title={data.tittle}
                >
                    <TelegramIcon round={true} />
                </TelegramShareButton>

                <EmailShareButton
                    className='px-3'
                    url={"https://technicalknowledge.herokuapp.com" + asPath}
                    subject=""
                    body=""
                    separator=":: "
                >
                    <EmailIcon round={true} />
                </EmailShareButton>

                <PinterestShareButton
                    className='px-3'
                    url={"https://technicalknowledge.herokuapp.com" + asPath}
                    description={data.tittle + data.shortdescription}

                >
                    <PinterestIcon round={true} />
                </PinterestShareButton>

            </div>
            <hr className="dropdown-dividers bg-dark" />
            <div className="px-0 py-2">
                <h3 className='question'><b><i><u>Do You Have Any Question</u></i></b></h3>
                <form>
                    <div className="mb-3">
                        <textarea className="form-control" rows="9" placeholder="Your Question:*" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Name:*"
                            value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Email:*" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="button" onClick={() => Submit(data._id)}>Post Your Question</button>
                    </div>
                </form>
            </div>
        </>
    );
}
