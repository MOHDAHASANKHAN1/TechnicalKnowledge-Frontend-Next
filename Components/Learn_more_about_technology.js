import Link from 'next/link';

export default function Learn_more_about_technology() {
    return (
        <div>
            <hr class="dropdown-divider bg-dark" />
            <hr class="dropdown-divider bg-dark" />
            <div class="container-fluid ">
                <div class="row g-0">
                    <div class="col-sm-12 learn">
                        <div class="bj">
                            <h1 className='mt-3' style={{ color: "#fff" }}>You can learn on Technology.com about Technology, culture, health, style,
                                travel, and also about programming langueges and related so on.</h1><br />
                      <Link href="/About">     
                      <button type="button"
                                    class="btn btn-warning mb-3">
                                <h3><b>Learn more about TechnicalKnowledge >></b> <b /></h3>
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}