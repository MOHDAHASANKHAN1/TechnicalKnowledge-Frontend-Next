import {useState} from "react";
import axios from "axios";

export default function Contact() {
  
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  
function Submit(){
  if (email || name || message !== '') {
    if (email === '') {
      alert("Please Enter Your Email");
    } else if(message === '') {
      alert("Please Enter Your messsage");
    } else if(name === '') {
      alert("Please Enter Your Name");
    }else{
      var format1 = /[@]+/;
      var format2 = /[.]+/;
      
      if(format1.test(email) && format2.test(email)){
        const data = {
          name: name,
          message: message,
          email: email,
          postid: "Messages From Contact"
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
    alert("Please Enter Your Name And Email And messsage");
  }
  }
  
    return (
        <>
            <hr class="dropdown-divider" />
            <div id="bod" class=" container-fluid mb-0 my-0 mt-0 mx-0">
                <div class="contact-form">
                    <h1>Contact Us</h1>
                    <hr />
                    <div class="row">
                        <div class="col-md-6">
                            <h1 style={{ color: "#6ff" }}><b>let's get in touch</b></h1><br /><i class="fa fa-map-marker" aria-hidden="true">
                                <h6 class="size">Location: Mohanlalganj, Lucknow</h6>
                            </i><br /><i class="fa email-box fa-envelope" aria-hidden="true">
                                <h6 class="size">Email: aimtahsankhan@gmail.com</h6>
                            </i><br /><i class="fa fa-phone" aria-hidden="true">
                                <h6 class="size">Phone: +91-9918423716</h6>
                            </i>
                        </div>
                        <div class="col-md-6">
                            <form><div class="form-group">
                                <label>Name</label><input class="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} /></div>
                                <div class="form-group"><label>Email</label><input class="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                                <div class="form-group"><label>Massage</label><textarea class="form-control" rows="7"
                                    name="disc" value={message} onChange={(e) => setMessage(e.target.value)}></textarea></div><br />
                                <div class="form-group">
                                    <div class="d-grid"><button class="btn btn-primary" type="button" onClick={() => Submit()}>Send</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
