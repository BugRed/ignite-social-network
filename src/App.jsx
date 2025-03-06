import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Jão" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, rerum cum repellat, optio, sit odit nostrum laboriosam harum quidem voluptate accusamus quasi odio totam cumque? Rem illo saepe eius dolor." />
          <Post author="Pedro" content="Legal!" />
        </main> 
      </div>
    </div>
  );
}

export default App;
