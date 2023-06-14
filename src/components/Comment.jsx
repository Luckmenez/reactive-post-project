import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment(){
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false}  src="https://github.com/luckmenez.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas M.</strong>
              <time title='25 de junho às 22:47' dateTime='2023-06-10 22:47'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar Comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom!!! Parabéns!!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}