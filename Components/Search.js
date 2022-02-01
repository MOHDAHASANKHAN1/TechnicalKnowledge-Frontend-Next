import Link from 'next/link';

const Blog_Main = (props) => {
  const data = props.Detailes;
  
    if (data.length !== 0) {
      return (
        <>
            {
              data.map((data) => 
              <div className='row g-0 mt-4'>
                <div className='col-sm-12' style={{ backgroundColor: "#ffffff" }}>
                    <Link href={`/Singleblog/${data.pathname}`} className='nav-link'>
                        <div className='px-3 py-4'>
                            <h3 className='text-center' style={{ color: "red" }}>{data.tittle}</h3>
                            <br />
                            <img src={data.firstimage} class="img-fluid" alt={data.tittle}></img>
                            <br />
                            <p className='mt-2 text-dark px-2 text-center'>{data.shortdescription} ................. </p>

                            <div className='d-flex justify-content-center'>
                                <p className='text-center cont py-4 px-2 change'>Continue reading...</p>
                            </div>

                            <br />
                            <div className='d-flex'><i class="fa fa-folder-o"></i>
                                <p className='sc change'>{data.category}</p>
                            </div>
                            <div className='d-flex '><i class="fa fa-comments"></i>
                                <p className='sc change'>Leave a comment</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
              )
            }
        </>
    );
    } else {
      return(
      <>
      <h1 class="text-warning text-center mt-2">Your Search Not Found</h1>
      <br />
      <h1 class="text-warning text-center mt-2">Your Search Not Found</h1>
      <br />
      <h1 class="text-warning text-center mt-2">Your Search Not Found</h1>
      <br />
      <h1 class="text-warning text-center mt-2">Your Search Not Found</h1>
      <br />
      <h1 class="text-warning text-center mt-2">Your Search Not Found</h1>
      <br />
      <h1 class="text-warning text-center mt-2">Your Search Not Found</h1>
      <br />
      <h1 class="text-warning text-center mt-2">Your Search Not Found</h1>
      <br />
      <h1 class="text-warning text-center mt-2">Your Search Not Found</h1>
      <br />
      <h1 class="text-warning text-center mt-2">Your Search Not Found</h1>
      <br />
      <h1 class="text-warning text-center mt-2">Your Search Not Found</h1>
      <br />
      </>
      );
    }
}

export default Blog_Main;