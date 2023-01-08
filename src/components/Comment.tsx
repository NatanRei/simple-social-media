import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import style from './Comment.module.css';

interface Comment {
    id: number;
    content: string,
    deleteComment: (comment: number) => void;
}

export function Comment({id, content, deleteComment}:Comment) {

    const [ countLikes, setCountLikes ] = useState(0)

    const handleDeleteComment = () => {
        deleteComment(id);
    }

    const handleLike = () => {
    setCountLikes(countLikes + 1);
    }

    return (<div className={style.comment}>
        <Avatar hasBorder={false} src="https://github.com/NatanRei.png" />
        <div className={style.commentBox}>
            <div className={style.commentContent}>
                <header>
                    <div className={style.authorAndTime}>
                        <strong>Natan Reis</strong>
                        <time title="11 de maio as 09:13" dateTime='2022-12-01 08:00:00'>Cerca de 1 hora atrás</time>
                    </div>
                    <button title="Deletar comentário" onClick={handleDeleteComment}>
                        <Trash size={24}/>
                    </button>
                </header>
                <p>{content}</p>
            </div>
            <footer>
                <button onClick={() => setCountLikes(countLikes + 1)}>
                    <ThumbsUp/>
                    aplaudir <span>{countLikes}</span>
                </button>
            </footer>
        </div>
    </div>);
}