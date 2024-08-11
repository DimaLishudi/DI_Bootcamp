import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  status: null,
  author: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    addTask: (state, action) => {
      const { text, categories } = action.payload;
      state.tasks.push({
        id: nanoid(),
        text,
        categories,
        isCompleted: false,
      })
      return state;
    },

    toggleTask: (state, action) => {
      const {id} = action.payload;
      state.tasks.find(value => value.id === id).isCompleted ^= true;
    }

    deleteTask: (state, action) => {
      state.tasks
    }

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