import Link from 'next/link';

export default function Featured_Artcles(props){
  
    return (
      <div>
            <div class="container-fluid">
                <div class="row g-2">
                    <div class="bbox">
                        <h1 class="bbox"><u><b><i>Featured Articles</i></b></u></h1>
                    </div>
                    <hr class="dropdown-divider bg-dark" />
                        {
                          props.Featured.map((data) =>
                        <div class="col-sm-4">
                        <Link href={`/Singleblog/${data.pathname}`} class="nav-link">
                        <div class="card"><img src={data.firstimage} class="card-img-top" alt={data.tittle} />
                            <div class="card-body">
                                <h5 class="card-title text-center">{data.tittle}</h5>
                                <p class="card-text text-dark  text-center">{data.shortdescription}</p>
                            </div>
                        </div>
                        </Link>
                        </div>
   )
                        }
                        
                    <hr class="dropdown-divider bg-dark" />
                    <div class="col-sm-12 my-6">
                        <div class="centre">
                            <div><button class="btn btn-light bg-danger" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                                <h1><u><b><i>See All Articles</i></b></u></h1>
                            </button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="collapse mt-2" id="collapseExample3">
                <div class="card card-body color">
                    <div class="container-fluid">
                        <div class="row g-2">
                            <hr class="dropdown-divider bg-dark" />
                            {
                          props.All.map((data) => 
                        <div class="col-sm-4">
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
            </div>
            </div>
    );
}
