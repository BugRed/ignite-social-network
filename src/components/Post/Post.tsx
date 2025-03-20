import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

//definindo o tipo do objeto Author
interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

//definindo o tipo do objeto PostProps
interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: Date;
}
                      // definindo tipo sempre após o obj
export function Post({ author, content, publishedAt } : PostProps) {

  const [comments, setComments] = useState(["legal!!!!!!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }
  
  //tilizando generics no typescript para dizer onde o evento foi disparado
  function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>) {
    //removendo a mensagem de erro
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    //mudando a mensagem padrão do required
    event.target.setCustomValidity("Escreva um comentário antes de publicar.");
  }

  function deleteComment(commentToDelete: string) {
    //comunicação com a tag child
    setComments(comments.filter((c) => c !== commentToDelete));

    /* ou
    const commentsWithouDeletedOne = comments.filter((c)=>{
      return c !== comment;
    })

    setComments(commentsWithouDeletedOne);
    */
  }

  //checando se a variavel newCommentText está vazia
  const isNewCommentEmpty = newCommentText ? false : true;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/BugRed.png" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <p>{author.role}</p>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href={line.content} target="_blank">
                  {line.content}
                </a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          required
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          placeholder="Deixe um comentário"
        />

        <footer>
          <button 
          type="submit"
          disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
