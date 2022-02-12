import Link from 'next/link';

export default function Crousel() {
    return (
        <div
            id="carouselExampleCaptions" className="carousel slide carousel-fade crous" data-bs-ride="carousel">
            <div className="carousel-indicators"><button type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button> <button type="button"
                    data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button> <button
                        type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active"><img src="/crousal8.jpeg" className="d-block w-100" alt="Technical Knowledge By Mohd Ahasan Khan" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5><b>The articles you’ll find on TechnicalKnowledge.com are authoritative and comprehensive. Our topic
                            experts research and write up content to help you make the best decisions for your life, whether
                            about your finances, health, home, work, and more.</b></h5><Link passHref href="/Blog/Technology"><button type="button"
                                className="btn btn-primary">Technology</button></Link> <Link passHref href="/Blog/Health"><button type="button" className="btn btn-danger">Health</button></Link> <Link passHref href="/Blog/LifeStyle"><button type="button" className="btn btn-success">LifeStyle</button></Link>
                    </div>
                </div>
                <div className="carousel-item"><img src="/crousal1.jpeg" className="d-block w-100" alt="Technical Knowledge By Mohd Ahasan Khan" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5><b>The articles you’ll find on TechnicalKnowledge.com are authoritative and comprehensive. Our topic
                            experts research and write up content to help you make the best decisions for your life, whether
                            about your finances, health, home, work, and more.</b></h5><Link passHref href="/Blog/Technology"><button type="button"
                                className="btn btn-primary">Technology</button></Link> <Link passHref href="/Blog/Health"><button type="button" className="btn btn-danger">Health</button></Link> <Link passHref href="/Blog/LifeStyle"><button type="button" className="btn btn-success">LifeStyle</button></Link>
                    </div>
                </div>
                <div className="carousel-item"><img src="/crousal9.jpeg" className="d-block w-100" alt="Technical Knowledge By Mohd Ahasan Khan" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5><b>The articles you’ll find on TechnicalKnowledge.com are authoritative and comprehensive. Our topic
                            experts research and write up content to help you make the best decisions for your life, whether
                            about your finances, health, home, work, and more.</b></h5><Link passHref href="/Blog/Technology"><button type="button"
                                className="btn btn-primary">Technology</button></Link> <Link passHref href="/Blog/Health"><button type="button" className="btn btn-danger">Health</button></Link> <Link passHref href="/Blog/LifeStyle"><button type="button" className="btn btn-success">LifeStyle</button></Link>
                    </div>
                </div>
            </div><button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span> <span
                    className="visually-hidden">Previous</span></button> <button className="carousel-control-next" type="button"
                        data-bs-target="#carouselExampleCaptions" data-bs-slide="next"><span className="carousel-control-next-icon"
                            aria-hidden="true"></span> <span className="visually-hidden">Next</span></button>
        </div>
    );
}