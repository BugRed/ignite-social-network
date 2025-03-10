import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.css";

import "./global.css";


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://githib.com/BugRed.png',
      name: 'Hernandes Ramalho',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.'},
      {type: 'paragraph', content: 'É um projeto que fiz no NLW Return, evento da Rocketseat.'},
      {type: 'paragraph', content: 'O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-03-05 11:15:16')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://githib.com/maykbrito.png',
      name: 'Guilherme Rodz',
      role: 'Instrutor na Cod3r',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.'},
      {type: 'paragraph', content: 'É um projeto que fiz no NLW Return, evento da Rocketseat.'},
      {type: 'paragraph', content: 'O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-03-05 11:15:16')
  },
  
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => <Post key={post.id} {...post} />) }
        </main> 
      </div>
    </div>
  );
}

export default App;
