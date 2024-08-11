import './App.css'
import PostList from "./features/posts/components/PostList"
import UserChooser from "./features/users/components/UserChooser"

function App() {
  return (
    <div className="App">
      <h1> The Posts Project </h1>
      <UserChooser/>
      <PostList/>
    </div>
  )
}

export default App
