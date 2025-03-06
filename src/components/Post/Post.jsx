import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/BugRed.png" />
          <div className={styles.authorInfo}>
            <strong>Hernandes Ramalho</strong>
            <p>Web Developer</p>
          </div>
        </div>

        <time title="03 de Março às 11:15h" datetime="2025-03-05 11:15:16">Publicado há 1h</time>
      </header>

        <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa.</p>
        <p>É um projeto que fiz no NLW Return, evento da Rocketseat.</p>
        <p>O nome do projeto é DoctorCare 🚀 <a href="">devonlane.design</a></p>
        <p>👉{' '}<a href=""> jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto</a> {' '}
         <a href="">#nlw </a> {' '}
         <a href="">#rocketseat</a> </p>
        </div>

    </article>
  );
}
