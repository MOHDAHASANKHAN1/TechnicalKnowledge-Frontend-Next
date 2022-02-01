import Link from 'next/link';

export default function Explore() {
    return (
        <div>
            <hr class="dropdown-divider bg-dark" />
            <hr class="dropdown-divider bg-dark" />
            <div class="container-fluid">
                <div class="bbox">
                    <h1 class="bbo"><u><b><i>Explore</i></b></u></h1>
                </div>
                
                <div class="row g-2">
                    <div class="col-sm-6 col-12 col-lg-6 col-xl-6 col-md-6" id="health12">
                    <Link href="/Blog/Technology">
                    <a className="nav-link">
                    <img
                        src="/Technology.jpeg" class="card-img-top" alt="Technical Knowledge By Mohd Ahasan Khan" />
                        <div id="health13"><img class="explore-section__icon"
                            src="https://cdn.www.nation.com/nation/wp-content/themes/nation/img/phone-icon.svg" alt="Heart Icon"
                            id="box" />
                            <h3 class="explore-section__title text-dark" id="box1"><b>Technology</b></h3>
                        </div>
                    </a>
                    </Link>
                    </div>
                    
                    <div class="col-sm-6 col-12 col-lg-6 col-xl-6 col-md-6 my-2" id="health12">
                    <Link href="/Blog/Health">
                    <a className="nav-link">
                    <img
                        src="/Health.jpeg" class="card-img-top" alt="Technical Knowledge By Mohd Ahasan Khan" />
                        <div id="health13"><img class="explore-section__icon"
                            src="https://cdn.www.nation.com/nation/wp-content/themes/nation/img/heart-icon.svg" alt="Heart Icon"
                            id="box" />
                            <h3 class="explore-section__title text-dark" id="box1"><b>Health</b></h3>
                        </div>
                    </a>
                        </Link>
                    </div>
                    
                    <div class="col-sm-6 col-12 col-lg-6 col-xl-6 col-md-6 my-2" id="health12">
                    <Link href="/Blog/Lifestyle">
                    <a className="nav-link" >
                    <img
                        src="/Lifestyle.jpeg" class="card-img-top" alt="Technical Knowledge By Mohd Ahasan Khan" />
                        <div id="health13"><img class="explore-section__icon"
                            src="https://cdn.www.nation.com/nation/wp-content/themes/nation/img/mug-icon.svg" alt="Heart Icon"
                            id="box" />
                            <h3 class="explore-section__title text-dark" id="box1"><b>Lifestyle</b></h3>
                        </div>
                    </a>
                        </Link>
                    </div>
                    
                    <div class="col-sm-6 col-12 col-lg-6 col-xl-6 col-md-6 my-2" id="health12">
                    <Link href="/Blog/Finance">
         <a className="nav-link" >
         <img src="/Finance.jpeg" class="card-img-top" alt="Technical Knowledge By Mohd Ahasan Khan"/>
         <div id="health13">
            <img class="explore-section__icon" src="https://cdn.www.nation.com/nation/wp-content/themes/nation/img/chart-icon.svg" alt="Heart Icon" id="box"/>
            <h3 class="explore-section__title text-dark" id="box1"><b>Finance</b></h3>
         </div>
         </a>
         </Link>
      </div>
      
      <div class="col-sm-6 col-12 col-lg-6 col-xl-6 col-md-6 my-2" id="health12">
      <Link href="/Blog/Travel">
         <a className="nav-link" >
         <img src="/Travel.jpeg" class="card-img-top" alt="Technical Knowledge By Mohd Ahasan Khan"/>
         <div id="health13">
            <img class="explore-section__icon" src="https://cdn.www.nation.com/nation/wp-content/themes/nation/img/plane-icon.svg" alt="Heart Icon" id="box"/>
            <h3 class="explore-section__title text-dark" id="box1"><b>Travel</b></h3>
         </div>
         </a>
         </Link>
      </div>
                    
                    <div class="col-sm-6 col-12 col-lg-6 col-xl-6 col-md-6" id="health12">
                    <Link href="/Blog/Auto">
                    <a className="nav-link">
                    <img
                        src="/Auto.jpeg" class="card-img-top" alt="Technical Knowledge By Mohd Ahasan Khan" />
                        <div id="health13"><img class="explore-section__icon"
                            src="https://cdn.www.nation.com/nation/wp-content/themes/nation/img/car-icon.svg" alt="Heart Icon"
                            id="box" />
                            <h3 class="explore-section__title text-dark" id="box1"><b>Auto</b></h3>
                        </div>
                    </a>
                    </Link>
                </div>
                
                    </div>
                </div>
</div>
    );
}