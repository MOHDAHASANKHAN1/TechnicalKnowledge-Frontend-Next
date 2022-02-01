import { useState } from 'react';
import axios from 'axios';
import { useSelector} from "react-redux";

function Post_Blog() {
    const Admin = useSelector((state) => state.User_Admin_Profile.Admin);
    const [category, setCategory] = useState("Technology");
    const [showposition, setShowposition] = useState("All");
    
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

    //start Courses variable
    const [tittle, setTittle] = useState('');
    const [shortdescription, setShortdescription] = useState('');
    const [firstdescription, setFirstdescription] = useState('');
    const [seconddescription, setSeconddescription] = useState('');
    const [thirddescription, setThirddescription] = useState('');
    const [firstimage, setFirstimage] = useState('');
    const [secondimage, setSecondimage] = useState('');
    const [thirdimage, setThirdimage] = useState('');
    const [writer, setWriter] = useState('');
    const [pathname, setPathname] = useState('');
    const [keywords, setKeywords] = useState('');
    const [date, setDate] = useState('');
    //end Courses variable

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

    function Post_Blog(e) {
        e.preventDefault();
        const data = new FormData();
        data.append("category", category);
        data.append("showposition", showposition);
        data.append("pathname", pathname);
        data.append("tittle", tittle);
        data.append("keywords", keywords);
        data.append("file1", fileData1);
        data.append("file2", fileData2);
        data.append("file3", fileData3);
        data.append("shortdescription", shortdescription);
        data.append("firstdescription", firstdescription);
        data.append("seconddescription", seconddescription);
        data.append("thirddescription", thirddescription);
        data.append("writer", writer);
        data.append("date", date);

        axios
            .post('https://technicalknowledge-backends.herokuapp.com/Add_Blogs', data)
            .then((res) => alert(res.data))

    }
    
  if (Admin) {
  return (
        <>
            <div class="container-fluid py-2">
                <div class="row g-0">
                    <div class="col-sm-12">
                        <form onSubmit={(e) => Post_Blog(e)} method="post" class=" border p-4 bg-light shadow">                    <div class="row g-0">     <div class="col-sm-12 d-flex justify-content-center">
                            <h4 class="mb-3 text-secondary">Add Blog Detailes And Post Blog</h4>
                        </div>
                        </div>
                            <div class="row">
                                <div class="mb-3 col-sm-6">
                                    <label>Blog Tittle<span class="text-danger">*</span></label>
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
                                <div class="mb-3 col-sm-6">
                                    <label>Blog Writer Name<span class="text-danger">*</span></label>
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
                                <div class="mb-3 col-sm-6">
                                    <label>Publish Date<span class="text-danger">*</span></label>
                                    <input type="text" className="form-control" required
                                        placeholder='Enter The Current Date'
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>
                                <div class="mb-3 col-sm-6">
                                    <label>Blog First Image<span class="text-danger">*</span></label>
                                    <input type="file" value={firstimage} className="form-control" required
                                        onChange={(e) => {
                                            setFirstimage(e.target.value);
                                            getFile1(e);
                                        }}
                                    />
                                </div>
                                <div class="mb-3 col-sm-6">
                                    <label>Blog Second Image<span class="text-danger">*</span></label>
                                    <input type="file" value={secondimage} className="form-control" required
                                        onChange={(e) => {
                                            setSecondimage(e.target.value);
                                            getFile2(e);
                                        }}
                                    />
                                </div>
                                <div class="mb-3 col-sm-6">
                                    <label>Blog Third Image<span class="text-danger">*</span></label>
                                    <input type="file" value={thirdimage} className="form-control" required
                                        onChange={(e) => {
                                            setThirdimage(e.target.value);
                                            getFile3(e);
                                        }}
                                    />
                                </div>
                                <div class="mb-3 col-sm-6">
                                    <label>PathName<span class="text-danger">*</span></label>
                                    <input type="text" className="form-control" required
                                        placeholder='Enter The Pathname'
                                        value={pathname}
                                        onChange={(e) => setPathname(e.target.value)}
                                    />
                                </div>
                                <div class="mb-3 col-sm-6">
                                    <label>Keywords Separated By Comma<span class="text-danger">*</span></label>
                                    <input type="text" className="form-control" required
                                        placeholder='Enter Keywords Each Keywords Separated By Comma'
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
                                <div class="mb-3 col-sm-6">
                                    <label>Select The Category<span class="text-danger">*</span></label>
                        <br />
        <select onChange={(e) => setCategory(e.target.value)}>
            {optionscategory.map((option) => (
              <option value={option.value} >{option.label}</option>
            ))}
          </select>
                                </div>
                                <div class="mb-3 col-sm-6">
                                    <label>Select The Showing Position<span class="text-danger">*</span></label>
                                  <br />
        <select onChange={(e) => setShowposition(e.target.value)}>
            {optionsshow.map((option) => (
              <option value={option.value} >{option.label}</option>
            ))}
          </select>  
                                </div>
                                <div class="mb-3 col-sm-12">
                                    <label>Blog Short Description<span class="text-danger">*</span></label>

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
                                <div class="mb-3 col-sm-12">
                                    <label>Blog First Long Description<span class="text-danger">*</span></label>

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

                                <div class="mb-3 col-sm-12">
                                    <label>Blog Second Long Description<span class="text-danger">*</span></label>

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

                                <div class="mb-3 col-sm-12">
                                    <label>Blog Third Long Description<span class="text-danger">*</span></label>

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

                                <div class="col-md-12">
                                    <div class="row g-0">
                                        <div class="col-sm-12   d-flex justify-content-center ie">
                                            <button type="submit" class="btn btn-primary px-4 py-2 ">Post Blog</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}else{
  return(
    <>
    <h1 class="text-center mt-4 mb-4 text-danger">Nice Try</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">Nice Try</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">Nice Try</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">Nice Try</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">Nice Try</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">Nice Try</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">Nice Try</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">Nice Try</h1>
    <h1 class="text-center mt-4 mb-4 text-danger">Nice Try</h1>
    </>
    );
}

}

export default Post_Blog;
