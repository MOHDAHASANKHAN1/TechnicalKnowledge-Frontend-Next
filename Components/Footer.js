import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Footer() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  function Submit() {
    if (email || message !== '') {
      if (email === '') {
        alert("Please Enter Your Email");
      } else if (message === '') {
        alert("Please Enter Your messsage");
      } else {
        var format1 = /[@]+/;
        var format2 = /[.]+/;

        if (format1.test(email) && format2.test(email)) {
          const data = {
            name: "Footer",
            message: message,
            email: email,
            postid: "Messages From Footer"
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
      alert("Please Enter Your messsage And Email");
    }
  }

  return (
    <div>
      <footer className="footer">
        <div className="main-content">
          <div className="left box">
            <h2>About us</h2>
            <div className="content mt-3">
              <p>TechnicalKnowledge Blog is a website where you can learn about Technology, bussiness, culture, designing, word, politics, health, style, travel, and also about programming langueges its tutorial and related so on.</p>
              <div className="social"><a href="https://www.facebook.com/profile.php?id=100043795833453"><span
                className="fab fa-facebook-f"></span></a> <a href="https://twitter.com/MoAhsanKhan5"><span
                  className="fab fa-twitter"></span></a> <a href="https://www.instagram.com/mo_ahsan_khan"><span
                    className="fab fa-instagram"></span></a> <a href="/Blog" className="text-primary" onClick={() => alert("We Are Sorry Now Youtube Channel Are Not Available")} ><span className="fab fa-youtube"></span></a></div>
            </div>
          </div>
          <div className="center box">
            <h2>Address</h2>
            <div className="content">
              <div className="place"><span className="fas fa-map-marker-alt"></span> <span className="text">MohanlalGanj,
                Lucknow</span></div>
              <div className="phone"><span className="fas fa-phone-alt"></span> <span
                className="text">+91-9918423716</span></div>
              <div className="email"><span className="fas fa-envelope"></span> <span
                className="text">aimtahsankhan@gmail.</span></div>
            </div>
          </div>
          <div className="right box">
            <h2>Contact us</h2>
            <div className="content">
              <form>
                <div className="email">
                  <div className="text text-primary">Email:*</div><input placeholder="Enter Your Email Here" className="bg-info" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="msg">
                  <div className="text text-primary">Message:*</div><input placeholder="Enter Your Message Here" className="bg-info" rows="2" cols="25" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-danger" type="button" onClick={() => Submit()}>Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr className="dropdown-divider" />
        <div className="bottom">
          <div className="d-flex justify-content-around">
            <div>
              <span className="text-primary"><Link href="/privacy-policy">Terms And Conditions</Link></span>
            </div>
            <div>
              <span className="text-primary"><Link href="/terms-and-conditions">Terms And Conditions</Link></span>
            </div>
            <div>
              <span className="text-primary"><Link href="/disclaimer">Disclaimer</Link></span>
            </div>
          </div>
        </div>
        <div className="bottom">
          <center><span className="credit">Created By <a href="https://wa.me/+919918423716">Ahsan Khan</a> |</span>
            <span className="far fa-copyright"></span><span>2021 All rights reserved.</span></center>
        </div>
      </footer>
    </div>
  );
}
