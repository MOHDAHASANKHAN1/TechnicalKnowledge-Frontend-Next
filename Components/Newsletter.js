import { useState } from 'react';
import axios from "axios";

export default function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function Submit() {
    if (email || name !== '') {
      if (email === '') {
        alert("Please Enter Your Email");
      } else if (name === '') {
        alert("Please Enter Your Name");
      } else {
        var format1 = /[@]+/;
        var format2 = /[.]+/;

        if (format1.test(email) && format2.test(email)) {
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
      <hr className="dropdown-divider bg-dark" />
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-sm-12 lear">
            <div style={{ textAlign: "center" }} className="bg p-3">
              <h2 style={{ color: "#000", fontSize: "2.5rem" }}><b>Never Miss The Best Of The Best</b></h2><br />
              <h4 id='h4newsletter'><b>Subscribe to our monthly newsletter</b></h4><br /><input
                placeholder="Your Name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} /><br /><input value={email} type="email"
                  placeholder="Your Email Address" className="form-control" onChange={(e) => setEmail(e.target.value)} /><br />
              <div className="d-grid"><button className="btn btn-warning" type="button" onClick={() => Submit()}>Subscribe</button></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
