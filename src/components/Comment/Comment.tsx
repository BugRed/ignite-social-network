import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar/Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  //função que será chamada para deletar o comentário do array de comentários
  //recebe o conteúdo do comentário como parâmetro mas retorna void;
  onDeleteComment: (content: string) => void;
}

export function Comment({content, onDeleteComment} : CommentProps) {

  const [likeCount, setlikeCount] = useState(0);


  function handleDeleteComment() {
    //comunicação com a tag parent
    onDeleteComment(content);
  }

  function handleLikeComment(){
    setlikeCount((state) => {
      return state + 1});

  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/BugRed.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Hernandes Ramalho</strong>
              <time
                title="03 de Março às 11:15h"
                dateTime="2025-03-05 11:15:16"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>

          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>

        </footer>
      </div>
    </div>
  );
}
