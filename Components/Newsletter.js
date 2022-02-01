import {useState} from 'react';
import axios from "axios";

export default function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
function Submit(){
  if (email || name !== '') {
    if (email === '') {
      alert("Please Enter Your Email");
    } else if(name === '') {
      alert("Please Enter Your Name");
    }else{
      var format1 = /[@]+/;
      var format2 = /[.]+/;
      
      if(format1.test(email) && format2.test(email)){
        const data = {
          name: name,
          email: email
        };
    
        axios
            .post("https://technicalknowledge-backends.herokuapp.com/Newslater/Add", data)
            .then((res) => {
          alert(res.data);
        });
        } else {
          alert("Please Enter A Valid Email Address")
        }
    }
  } else {
    alert("Please Enter Your Name And Email");
  }
  }
    return (
        <div>
            <hr class="dropdown-divider bg-dark" />
            <div class="container-fluid">
                <div class="row g-0">
                    <div class="col-sm-12 lear">
                        <div style={{ textAlign: "center" }} class="bg p-3">
                            <h1 style={{ color: "#000" }}><b>Never Miss The Best Of The Best</b></h1><br />
                            <h4 id='h4newsletter'><b>Subscribe to our monthly newsletter</b></h4><br /><input
                                placeholder="Your Name" class="form-control" value={name} onChange={(e) => setName(e.target.value)} /><br /><input value={email} type="email"
                                    placeholder="Your Email Address" class="form-control" onChange={(e) => setEmail(e.target.value)} /><br />
                            <div class="d-grid"><button class="btn btn-warning" type="button" onClick={() => Submit()}>Subscribe</button></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
