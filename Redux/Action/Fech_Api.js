import axios from "axios";

export const Recent_Blogs_Details = (data) => async (dispatch) => {
  axios
    .get(
      "https://technical-knowledge-backend-node-rest.vercel.app/Blogs/Read/Recent"
    )
    .then((res) => {
      dispatch({
        type: "RECENTBLOGS",
        payload: res.data.Blogs,
      });
    });
};

export const All_Blogs_Details = (data) => async (dispatch) => {
  axios
    .get(
      "https://technical-knowledge-backend-node-rest.vercel.app/Blogs/Read/All"
    )
    .then((res) => {
      dispatch({
        type: "ALLBLOGS",
        payload: res.data.Blogs,
      });
    });
};

export const Featured_Blogs_Details = (data) => async (dispatch) => {
  axios
    .get(
      "https://technical-knowledge-backend-node-rest.vercel.app/Blogs/Read/Featured"
    )
    .then((res) => {
      dispatch({
        type: "FEATUREDBLOGS",
        payload: res.data.Blogs,
      });
    });
};

export const Populer_Blogs_Details = (data) => async (dispatch) => {
  axios
    .get(
      "https://technical-knowledge-backend-node-rest.vercel.app/Blogs/Read/Populer"
    )
    .then((res) => {
      dispatch({
        type: "POPULERBLOGS",
        payload: res.data.Blogs,
      });
    });
};

export const Category_Blogs_Details = (data) => async (dispatch) => {
  axios
    .post(
      "https://technical-knowledge-backend-node-rest.vercel.app/Blogs/Read/Category",
      data
    )
    .then((res) => {
      dispatch({
        type: "CATEGORYBLOGS",
        payload: res.data.info,
      });
    });
};

export const Category_Blogs_Details_Back = (data) => async (dispatch) => {
  dispatch({
    type: "CATEGORYBLOGSBACK",
  });
};

export const Search_Blogs = (data) => async (dispatch) => {
  axios
    .get(
      `https://technical-knowledge-backend-node-rest.vercel.app/Blogs/Search/${data}`
    )
    .then((res) => {
      dispatch({
        type: "CATEGORYBLOGS",
        payload: res.data.info,
      });
    });
};

export const Search_Blogs_Back = (data) => async (dispatch) => {
  dispatch({
    type: "CATEGORYBLOGSBACK",
  });
};
