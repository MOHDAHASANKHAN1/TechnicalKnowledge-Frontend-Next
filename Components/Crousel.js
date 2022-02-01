import Link from 'next/link';

export default function Crousel() {
    return (
            <div
                id="carouselExampleCaptions" class="carousel slide carousel-fade crous" data-bs-ride="carousel">
                <div class="carousel-indicators"><button type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button> <button type="button"
                        data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button> <button
                            type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active"><img src="/crousal8.jpeg" class="d-block w-100" alt="Technical Knowledge By Mohd Ahasan Khan" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5><b>The articles you’ll find on TechnicalKnowledge.com are authoritative and comprehensive. Our topic
                                experts research and write up content to help you make the best decisions for your life, whether
                                about your finances, health, home, work, and more.</b></h5><Link href="/Blog/Technology"><button  type="button"
                    class="btn btn-primary">Technology</button></Link> <Link href="/Blog/Health"><button  type="button" class="btn btn-danger">Health</button></Link> <Link href="/Blog/LifeStyle"><button type="button" class="btn btn-success">LifeStyle</button></Link>
                        </div>
                    </div>
                    <div class="carousel-item"><img src="/crousal1.jpeg" class="d-block w-100" alt="Technical Knowledge By Mohd Ahasan Khan" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5><b>The articles you’ll find on TechnicalKnowledge.com are authoritative and comprehensive. Our topic
                                experts research and write up content to help you make the best decisions for your life, whether
                                about your finances, health, home, work, and more.</b></h5><Link href="/Blog/Technology"><button  type="button"
                    class="btn btn-primary">Technology</button></Link> <Link href="/Blog/Health"><button  type="button" class="btn btn-danger">Health</button></Link> <Link href="/Blog/LifeStyle"><button type="button" class="btn btn-success">LifeStyle</button></Link>
                        </div>
                    </div>
                    <div class="carousel-item"><img src="/crousal9.jpeg" class="d-block w-100" alt="Technical Knowledge By Mohd Ahasan Khan" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5><b>The articles you’ll find on TechnicalKnowledge.com are authoritative and comprehensive. Our topic
                                experts research and write up content to help you make the best decisions for your life, whether
                                about your finances, health, home, work, and more.</b></h5><Link href="/Blog/Technology"><button  type="button"
                    class="btn btn-primary">Technology</button></Link> <Link href="/Blog/Health"><button  type="button" class="btn btn-danger">Health</button></Link> <Link href="/Blog/LifeStyle"><button type="button" class="btn btn-success">LifeStyle</button></Link>
                        </div>
                    </div>
                </div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span> <span
                        class="visually-hidden">Previous</span></button> <button class="carousel-control-next" type="button"
                            data-bs-target="#carouselExampleCaptions" data-bs-slide="next"><span class="carousel-control-next-icon"
                                aria-hidden="true"></span> <span class="visually-hidden">Next</span></button>
            </div>
    );
}