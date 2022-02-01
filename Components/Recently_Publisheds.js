import Link from 'next/link';

export default function Recently_Publisheds(props) {
  
    return (
        <div>
            <hr class="dropdown-divider bg-dark" />
            <div class="container-fluid">
                <div class="bbox">
                    <h1 class="bbox"><u><b><i>Recently Published</i></b></u></h1>
                </div>
                <div class="row g-2">
                    {
                      props.Recent.map((data) =>
                      <div class="col-sm-6">
                       <Link href={`/Singleblog/${data.pathname}`} class="nav-link">
                        <div class="card"><img src={data.firstimage} class="card-img-top" alt={data.tittle} />
                            <div class="card-body">
                                <h5 class="card-title text-center">{data.tittle}</h5>
                                <p class="card-text text-dark text-center">{data.shortdescription}</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                      )
                    }
                </div>
            </div>
        </div>
    );
}
