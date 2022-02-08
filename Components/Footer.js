import { useState } from "react";
import axios from "axios";

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
      <footer class="footer">
        <div class="main-content">
          <div class="left box">
            <h2>About us</h2>
            <div class="content mt-3">
              <p>TechnicalKnowledge Blog is a website where you can learn about Technology, bussiness, culture, designing, word, politics, health, style, travel, and also about programming langueges its tutorial and related so on.</p>
              <div class="social"><a href="https://www.facebook.com/profile.php?id=100043795833453"><span
                class="fab fa-facebook-f"></span></a> <a href="https://twitter.com/MoAhsanKhan5"><span
                  class="fab fa-twitter"></span></a> <a href="https://www.instagram.com/mo_ahsan_khan"><span
                    class="fab fa-instagram"></span></a> <a href="/Blog" class="text-primary" onClick={() => alert("We Are Sorry Now Youtube Channel Are Not Available")} ><span class="fab fa-youtube"></span></a></div>
            </div>
          </div>
          <div class="center box">
            <h2>Address</h2>
            <div class="content">
              <div class="place"><span class="fas fa-map-marker-alt"></span> <span class="text">MohanlalGanj,
                Lucknow</span></div>
              <div class="phone"><span class="fas fa-phone-alt"></span> <span
                class="text">+91-9918423716</span></div>
              <div class="email"><span class="fas fa-envelope"></span> <span
                class="text">aimtahsankhan@gmail.</span></div>
            </div>
          </div>
          <div class="right box">
            <h2>Contact us</h2>
            <div class="content">
              <form>
                <div class="email">
                  <div class="text text-primary">Email:*</div><input placeholder="Enter Your Email Here" className="bg-info" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="msg">
                  <div class="text text-primary">Message:*</div><input placeholder="Enter Your Message Here" className="bg-info" rows="2" cols="25" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <div class="d-grid gap-2">
                  <button class="btn btn-danger" type="button" onClick={() => Submit()}>Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr class="dropdown-divider" />
        <div class="bottom">
          <center><span class="credit">Created By <a href="https://wa.me/+919918423716">Ahsan Khan</a> |</span>
            <span class="far fa-copyright"></span><span>2021 All rights reserved.</span></center>
        </div>
      </footer>
    </div>
  );
}
