
const allblogsinitialstate = {
  AllBlogs: []
};

const All_Blogs_Details = (state = allblogsinitialstate, action) => {
  switch (action.type) {
    case "ALLBLOGS":
      return { ...state, AllBlogs: action.payload };
    default:
      return state
  }
}

const categoryblogsinitialstate = {
  CategoryBlogs: []
};

const Category_Blogs_Details = (state = categoryblogsinitialstate, action) => {
  switch (action.type) {
    case "CATEGORYBLOGS":
      return { ...state, CategoryBlogs: action.payload };
    case "CATEGORYBLOGSBACK":
      return {};
    default:
      return state
  }
}

const Featuredblogsinitialstate = {
  FeaturedBlogs: []
};

const Featured_Blogs_Details = (state = Featuredblogsinitialstate, action) => {
  switch (action.type) {
    case "FEATUREDBLOGS":
      return { ...state, FeaturedBlogs: action.payload };
    default:
      return state
  }
}

const Recentblogsinitialstate = {
  RecentBlogs: []
};

const Recent_Blogs_Details = (state = Recentblogsinitialstate, action) => {
  switch (action.type) {
    case "RECENTBLOGS":
      return { ...state, RecentBlogs: action.payload };
    default:
      return state
  }
}

const Populerblogsinitialstate = {
  PopulerBlogs: []
};

const Populer_Blogs_Details = (state = Populerblogsinitialstate, action) => {
  switch (action.type) {
    case "POPULERBLOGS":
      return { ...state, PopulerBlogs: action.payload };
    default:
      return state
  }
}

export { All_Blogs_Details, Featured_Blogs_Details, Recent_Blogs_Details, Populer_Blogs_Details, Category_Blogs_Details };