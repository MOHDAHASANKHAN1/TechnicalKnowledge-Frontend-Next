import { useState } from 'react';
import BPSCQ from './Blog_Posts_share_comment_Question';
import Parser from 'react-html-parser';
import { useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from 'next/router';

const Searchbyid = (props) => {
  const data = props.Detailes;
  const Admin = useSelector((state) => state.User_Admin_Profile.Admin);

  //start Blogs variable
  const [category, setCategory] = useState('');
  const [showposition, setShowposition] = useState('');
  const [tittle, setTittle] = useState('');
  const [shortdescription, setShortdescription] = useState('');
  const [firstdescription, setFirstdescription] = useState('');
  const [seconddescription, setSeconddescription] = useState('');
  const [thirddescription, setThirddescription] = useState('');
  const [firstimage, setFirstimage] = useState('');
  const [secondimage, setSecondimage] = useState('');
  const [thirdimage, setThirdimage] = useState('');
  const [writer, setWriter] = useState('');
  const [pathnames, setPathnames] = useState('');
  const [keywords, setKeywords] = useState('');
  const [date, setDate] = useState('');
  const [upid, setUpid] = useState('');
  const [upfirstimgid, setUpfirstimgid] = useState('');
  const [upsecondimgid, setUpsecondimgid] = useState('');
  const [upthirdimgid, setUpthirdimgid] = useState('');
  //end Blogs variable

  const optionscategory = [
    {
      label: "Technology",
      value: "Technology",
    },
    {
      label: "Science",
      value: "Science",
    },
    {
      label: "Finance",
      value: "Finance",
    },
    {
      label: "Health",
      value: "Health",
    },
    {
      label: "Lifestyle",
      value: "Lifestyle",
    },
    {
      label: "Travel",
      value: "Travel",
    },
    {
      label: "Auto",
      value: "Auto",
    },
    {
      label: "Design",
      value: "Design",
    },
    {
      label: "Culture",
      value: "Culture",
    },
    {
      label: "Bussiness",
      value: "Bussiness",
    },
    {
      label: "Politics",
      value: "Politics",
    },
    {
      label: "Opinion",
      value: "Opinion",
    },
    {
      label: "World",
      value: "World",
    },
    {
      label: "U.s.",
      value: "U.s.",
    },
    {
      label: "Social Media",
      value: "Social-Media",
    },
    {
      label: "Bloging",
      value: "Bloging",
    },
    {
      label: "Digital Marketing",
      value: "Digital-Marketing",
    },
    {
      label: "Money Making",
      value: "Money-Making",
    },
    {
      label: "Bitcoin",
      value: "Bitcoin",
    },
    {
      label: "Entrepreneurship & Startup",
      value: "Entrepreneurship-&-Startup",
    },
    {
      label: "Freelancing",
      value: "Freelancing",
    },
    {
      label: "Companies",
      value: "Companies",
    },
    {
      label: "Marketing Tools",
      value: "Marketing-Tools",
    },
    {
      label: "Sports",
      value: "Sports",
    },
    {
      label: "Photography",
      value: "Photography",
    },
    {
      label: "Eco-tourism",
      value: "Eco-tourism",
    },
    {
      label: "Windsurfing",
      value: "Windsurfing",
    },
    {
      label: "Videography",
      value: "Videography",
    },
    {
      label: "Funny Stories",
      value: "Funny-Stories",
    }
  ];

  const optionsshow = [
    {
      label: "All",
      value: "All",
    },
    {
      label: "Featured",
      value: "Featured",
    },
    {
      label: "Populer",
      value: "Populer",
    },
    {
      label: "Recent",
      value: "Recent",
    },
  ];

  const [fileData1, setFileData1] = useState("");
  function getFile1(e) {
    setFileData1(e.target.files[0]);
  };

  const [fileData2, setFileData2] = useState("");
  function getFile2(e) {
    setFileData2(e.target.files[0]);
  };

  const [fileData3, setFileData3] = useState("");
  function getFile3(e) {
    setFileData3(e.target.files[0]);
  };

  function Update(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("_id", upid);
    data.append("category", category);
    data.append("showposition", showposition);
    data.append("tittle", tittle);
    data.append("keywords", keywords);
    data.append("pathname", pathnames);
    data.append("file1", fileData1);
    data.append("file2", fileData2);
    data.append("file3", fileData3);
    data.append("shortdescription", shortdescription);
    data.append("firstdescription", firstdescription);
    data.append("seconddescription", seconddescription);
    data.append("thirddescription", thirddescription);
    data.append("writer", writer);
    data.append("date", date);
    data.append("firstimgid", upfirstimgid);
    data.append("secondimgid", upsecondimgid);
    data.append("thirdimgid", upthirdimgid);

    axios
      .post('https://technicalknowledge-backends.herokuapp.com/Blogs/Update', data)
      .then((res) => alert(res.data))

  }

  const history = useRouter();

  function Delete(id, categ, firstimgid, secondimgid, thirdimgid) {
    const qdata = { _id: id, firstimgid: firstimgid, secondimgid: secondimgid, thirdimgid: thirdimgid }
    if (window.confirm("Do You Really Want To Delete This Post")) {
      axios.post('https://technicalknowledge-backends.herokuapp.com/Blogs/Delete', qdata)
        .then(res => {
          alert(res.data);
          history.push(`/Blog/${categ}`)
        }
        )
    }
  }

  function Updateset(upid, tittle, pathnames, keywords, showposition, category, writer, date, shortdescription, firstdescription, seconddescription, thirddescription, firstimgid, secondimgid, thirdimgid) {
    setUpid(upid);
    setTittle(tittle);
    setPathnames(pathnames);
    setKeywords(keywords);
    setShowposition(showposition);
    setCategory(category);
    setWriter(writer);
    setDate(date);
    setShortdescription(shortdescription);
    setFirstdescription(firstdescription);
    setSeconddescription(seconddescription);
    setThirddescription(thirddescription);
    setUpfirstimgid(firstimgid);
    setUpsecondimgid(secondimgid);
    setUpthirdimgid(thirdimgid);
  }

  if (data !== null) {
    if (Admin) {
      return (
        <>
          <div className="row g-0 mt-4">
            <div className="col-sm-12 right_side_info">
              <div className="px-2 py-3">
                <h1> <b>{/*Place Here Tittle*/}{data.tittle}</b></h1><br />
                <div className="d-flex">
                  <h5 className="postdate d-flex"> <i className="fas fa-edit"></i><p className='date'>{data.date} By {data.writer}</p></h5>
                  <h5 className="read d-flex "> <i className="fas fa-book-open"></i> <p className='date'>5 Minute Read</p></h5>
                </div>
                <br />
                <img src={data.firstimage} className="img-fluid" alt={data.tittle} />
                <br />
                <br />
                <div className="row g-0">
                  <div className="col-sm-6 col-6 d-flex justify-content-center">
                    <button data-bs-toggle="modal" data-bs-target="#updatec" className="btn-success px-3 py-1" onClick={() => Updateset(data._id, data.tittle, data.pathname, data.keywords, data.showposition, data.category, data.writer, data.date, data.shortdescription, data.firstdescription, data.seconddescription, data.thirddescription, data.firstimgid, data.secondimgid, data.thirdimgid)}><i className="fas fa-pen px-1"></i> Edit</button>
                  </div>
                  <div className="col-sm-6 col-6 d-flex justify-content-center">
                    <button className="btn-danger px-3 py-1" onClick={() => Delete(data._id, data.category, data.firstimgid, data.secondimgid, data.thirdimgid)}><i className="fas px-1 fa-trash-alt"></i> Delete</button>
                  </div>
                </div>
                <br />
                <h6 className='text-center'><b>
                  {/*Here Place Content Which is Visible EveryWhere*/}
                  {Parser(data.shortdescription)}
                </b></h6>
                <div className=''>
                  {/*Here Place Content 1*/}
                  {Parser(data.firstdescription)}
                </div>
                <br />
                <img src={data.secondimage} className="img-fluid" alt={data.tittle} />
                <br />
                <br />
                <div>
                  {/*Here Place Content 2*/}
                  {Parser(data.seconddescription)}
                </div>
                <img src={data.thirdimage} className="img-fluid" alt={data.tittle} />
                <br />
                <br />
                <div>
                  {/*Here Place Content 3*/}
                  {Parser(data.thirddescription)}
                </div>
                <BPSCQ data={data} />
              </div>
            </div>
          </div>

          <div className="modal fade" id="updatec" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog m-dlg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header bg-info">
                  <h5 className="modal-title" id="exampleModalLabel">Update Blog Detailes Here</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body bg-info">
                  <div className="container-fluid py-2">
                    <div className="row g-0">
                      <div className="col-sm-12">
                        <form onSubmit={(e) => Update(e)} method="post" className=" border p-4 bg-light shadow">                    <div className="row g-0">     <div className="col-sm-12 d-flex justify-content-center">
                          <h4 className="mb-3 text-secondary">Add Blog Detailes And Post Blog</h4>
                        </div>
                        </div>
                          <div className="row">
                            <div className="mb-3 col-sm-6">
                              <label>Blog Tittle<span className="text-danger">*</span></label>
                              <input type="text" value={tittle} className="form-control" required

                                placeholder="Enter Course Tittle"

                                onChange={((e) => {
                                  const str = e.target.value;
                                  const arr = str.split(" ");
                                  for (var i = 0; i < arr.length; i++) {
                                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                                  }
                                  const str2 = arr.join(" ");
                                  setTittle(str2);
                                })}
                              />
                            </div>
                            <div className="mb-3 col-sm-6">
                              <label>Blog Writer Name<span className="text-danger">*</span></label>
                              <input type="text" value={writer} className="form-control" required
                                placeholder="Enter Blog Writer Name"

                                onChange={((e) => {
                                  const str = e.target.value;
                                  const arr = str.split(" ");
                                  for (var i = 0; i < arr.length; i++) {
                                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                                  }
                                  const str2 = arr.join(" ");
                                  setWriter(str2);
                                }
                                )}
                              />
                            </div>
                            <div className="mb-3 col-sm-6">
                              <label>Publish Date<span className="text-danger">*</span></label>
                              <input type="text" className="form-control" required
                                placeholder='Enter The Current Date'
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                              />
                            </div>
                            <div className="mb-3 col-sm-6">
                              <label>Blog First Image<span className="text-danger">*</span></label>
                              <input type="file" value={firstimage} className="form-control"
                                onChange={(e) => {
                                  setFirstimage(e.target.value);
                                  getFile1(e);
                                }}
                              />
                            </div>
                            <div className="mb-3 col-sm-6">
                              <label>Blog Second Image<span className="text-danger">*</span></label>
                              <input type="file" value={secondimage} className="form-control"
                                onChange={(e) => {
                                  setSecondimage(e.target.value);
                                  getFile2(e);
                                }}
                              />
                            </div>
                            <div className="mb-3 col-sm-6">
                              <label>Blog Third Image<span className="text-danger">*</span></label>
                              <input type="file" value={thirdimage} className="form-control"
                                onChange={(e) => {
                                  setThirdimage(e.target.value);
                                  getFile3(e);
                                }}
                              />
                            </div>
                            <div className="mb-3 col-sm-6">
                              <label>PathName<span className="text-danger">*</span></label>
                              <input type="text" className="form-control" required
                                placeholder='Enter The Pathname'
                                value={pathnames}
                                onChange={(e) => setPathnames(e.target.value)}
                              />
                            </div>
                            <div className="mb-3 col-sm-6">
                              <label>Keywords<span className="text-danger">*</span></label>
                              <input type="text" className="form-control" required
                                placeholder='Enter All The Keywords'
                                value={keywords}
                                onChange={((e) => {
                                  const str = e.target.value;
                                  const arr = str.split(" ");
                                  for (var i = 0; i < arr.length; i++) {
                                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                                  }
                                  const str2 = arr.join(" ");
                                  setKeywords(str2);
                                })} />
                            </div>

                            <div className="mb-3 col-sm-6">
                              <label>Select The Category<span className="text-danger">*</span></label>
                              <br />
                              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                {optionscategory.map((option) => (
                                  <option value={option.value} key={1} >{option.label}</option>
                                ))}
                              </select>
                            </div>
                            <div className="mb-3 col-sm-6">
                              <label>Select The Showing Position<span className="text-danger">*</span></label>
                              <br />
                              <select value={showposition} onChange={(e) => setShowposition(e.target.value)}>
                                {optionsshow.map((option) => (
                                  <option value={option.value} key={1} >{option.label}</option>
                                ))}
                              </select>
                            </div>

                            <div className="mb-3 col-sm-12">
                              <label>Blog Short Description<span className="text-danger">*</span></label>

                              <textarea rows="3" value={shortdescription} className="form-control" required
                                placeholder="Enter Course Description"

                                onChange={((e) => {
                                  const str = e.target.value;
                                  const arr = str.split(" ");
                                  for (var i = 0; i < arr.length; i++) {
                                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                                  }
                                  const str2 = arr.join(" ");
                                  setShortdescription(str2);
                                })}>
                              </textarea>
                            </div>
                            <div className="mb-3 col-sm-12">
                              <label>Blog First Long Description<span className="text-danger">*</span></label>

                              <textarea rows="9" value={firstdescription} className="form-control" required
                                placeholder="Blog First Long Descriptions"

                                onChange={((e) => {
                                  const str = e.target.value;
                                  const arr = str.split(" ");
                                  for (var i = 0; i < arr.length; i++) {
                                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                                  }
                                  const str2 = arr.join(" ");
                                  setFirstdescription(str2);
                                })}>
                              </textarea>
                            </div>

                            <div className="mb-3 col-sm-12">
                              <label>Blog Second Long Description<span className="text-danger">*</span></label>

                              <textarea rows="9" value={seconddescription} className="form-control" required
                                placeholder="Blog Second Long Description"

                                onChange={((e) => {
                                  const str = e.target.value;
                                  const arr = str.split(" ");
                                  for (var i = 0; i < arr.length; i++) {
                                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                                  }
                                  const str2 = arr.join(" ");
                                  setSeconddescription(str2);
                                })}>
                              </textarea>
                            </div>

                            <div className="mb-3 col-sm-12">
                              <label>Blog Third Long Description<span className="text-danger">*</span></label>

                              <textarea rows="9" value={thirddescription} className="form-control" required
                                placeholder="Blog Third Long Description"

                                onChange={((e) => {
                                  const str = e.target.value;
                                  const arr = str.split(" ");
                                  for (var i = 0; i < arr.length; i++) {
                                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                                  }
                                  const str2 = arr.join(" ");
                                  setThirddescription(str2);
                                })}>
                              </textarea>
                            </div>

                            <div className="col-md-12">
                              <div className="row g-0">
                                <div className="col-sm-12   d-flex justify-content-center ie">
                                  <button type="submit" className="btn btn-primary px-4 py-2 ">Update Blog</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="row g-0 mt-4">
            <div className="col-sm-12 right_side_info">
              <div className="px-2 py-3">
                <h1> <b>{/*Place Here Tittle*/}{data.tittle}</b></h1><br />
                <div className="d-flex">
                  <h5 className="postdate d-flex"> <i className="fas fa-edit"></i><p className='date'>{data.date} By {data.writer}</p></h5>
                  <h5 className="read d-flex "> <i className="fas fa-book-open"></i> <p className='date'>5 Minute Read</p></h5>
                </div>
                <br />
                <img src={data.firstimage} className="img-fluid" alt={data.tittle} />
                <br />
                <br />
                <h6 className='text-center'><b>
                  {/*Here Place Content Which is Visible EveryWhere*/}
                  {Parser(data.shortdescription)}
                </b></h6>
                <div className=''>
                  {/*Here Place Content 1*/}

                  {Parser(data.firstdescription)}
                </div>
                <br />
                <img src={data.secondimage} className="img-fluid" alt={data.tittle} />
                <br />
                <br />
                <div>
                  {/*Here Place Content 2*/}
                  {Parser(data.seconddescription)}
                </div>
                <img src={data.thirdimage} className="img-fluid" alt={data.tittle} />
                <br />
                <br />
                <div>
                  {/*Here Place Content 3*/}
                  {Parser(data.thirddescription)}
                </div>
                <BPSCQ data={data} />
              </div>
            </div>
          </div>
        </>
      );
    }
  } else {
    return (
      <>
        <h1 className="text-warning text-center mt-2">wrong id</h1>
        <br />
        <h1 className="text-warning text-center mt-2">Loading...</h1>
        <br />
        <h1 className="text-warning text-center mt-2">Loading...</h1>
        <br />
        <h1 className="text-warning text-center mt-2">Loading...</h1>
        <br />
        <h1 className="text-warning text-center mt-2">Loading...</h1>
        <br />
        <h1 className="text-warning text-center mt-2">Loading...</h1>
        <br />
        <h1 className="text-warning text-center mt-2">Loading...</h1>
        <br />
        <h1 className="text-warning text-center mt-2">Loading...</h1>
      </>
    );
  }


}

export default Searchbyid;