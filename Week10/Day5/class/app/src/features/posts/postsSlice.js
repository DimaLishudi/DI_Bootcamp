import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import config from "../../config/config.json";


export const STATUS = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
}


// debug function
async function sleep(time) {
  return await new Promise(r => setTimeout(r, time * 1000));
}

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAll",
  async () => {
    return await fetch(config.POSTS_API).then(data => data.json());
  },
)

const initialState = {
  posts: [],
  status: null,
  author: null,
};  

const initialReactions = {
  thumbsUp: 0,
  wow: 0,
  heart: 0,
  rocket: 0,
  coffee: 0,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    incrementReaction: (state, action) => {
      const {post_id, reaction: incrementedReaction} = action.payload;
      state.posts
        .find((post) => post.id === post_id)
        .reactions[incrementedReaction] += 1;
      return state;
    },

    setAuthor: (state, action) => {
      state.author = action.payload.author;
      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.pending, (state) => {
      state.status = STATUS.PENDING;
    })

    builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
      state.posts = action.payload.map((post) => {
        return {
          ...post,
          reactions: {...initialReactions},
        };
      });
      state.status = STATUS.FULFILLED;
    })

    builder.addCase(fetchAllPosts.rejected, (state, action) => {
      alert("Internal client error. Please try again later.")
      state.status = STATUS.REJECTED;
      console.log(action.error);
    })
  }
});

export const { incrementReaction, setAuthor } = postsSlice.actions;

export const author = (state) => (state.posts.author);
export const posts = (state) => (state.posts.posts);
export const status = (state) => (state.posts.status);

export default postsSlice.reducer;