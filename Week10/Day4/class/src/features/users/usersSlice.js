import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "John", email: "jjj@gmail.com" },
    { id: 2, name: "Anne", email: "aaa@gmail.com" },
    { id: 3, name: "Dan", email: "ddd@gmail.com" },
  ],
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json());
    const users = data.map(
      ({name, email}) => { return { id: nanoid(), name, email} }
    );
    return {users};
    // dispatch(usersSlice.actions.addManyUsers({users}))
  },
)


const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push({
        id: nanoid(),
        name: action.payload.name,
        email: action.payload.email,
      });
    },
    addUserPrepare: {
      reducer(state, action) {
        state.users.push(action.payload);
      },
      prepare(name, email) {
        return {
          payload: { id: nanoid(), name, email },
        };
      },
    },
    addManyUsers: (state, action) => {
      console.log(action.payload);
      state.users.push(...action.payload.users.map(({name, email}) => {
          return {
            id: nanoid(),
            name,
            email,
          }
        }
      ));
      console.log([...state.users])
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      console.log("pending");
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users.push(...action.payload.users);
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      console.log(action.error);
      // state.users.push(...action.payload.users);
    })
  }
});

// export const fetchUsers = () => async (dispatch, getState) => {
//   const data = await fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json());
//   console.log(data);
//   const users = data.map(
//     ({id, name, email}) => { return {id, name, email} }
//   );
//   dispatch(usersSlice.actions.addManyUsers({users}))
// }

export const { adduser, addUserPrepare } = usersSlice.actions;

export default usersSlice.reducer;

/** 
[
  { id: 1, name: "Jhon", email: "jjj@gmail.com" },
  { id: 2, name: "Anne", email: "aaa@gmail.com" },
  { id: 3, name: "Dan", email: "ddd@gmail.com" },
];

1. Display the users
2. Add a user 
3. Add user with prepare
*/