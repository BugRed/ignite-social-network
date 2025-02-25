import { Header } from "./components/Header"
import {Post} from "./Post"

import "./global.css"

function App() {
  return (
    <div>
      <Header />
      <Post author="Jão" content="Post do jão"/>
      <Post author="Jão" content="Post do jão"/>
    </div>
  )
}

export default App
