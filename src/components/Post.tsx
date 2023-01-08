import { Avatar } from './Avatar';
import { Comment } from './Comment';

import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';

import style from './Post.module.css';
import { ChangeEvent,  FormEvent,  useState } from 'react';

interface Header {
    avatar: string,
    name: string,
    rule: string,
    datetime: Date
}

interface Post {
    type: string,
    content: string
}

interface PostProps {
    header: Header;
    post: Post[];
}

interface CommentProps {
    id: number;
    value: string;
}

export function Post({ header, post }:PostProps)
{

    const [ comments, setComments] = useState<CommentProps[]>([]);
    const [ newComment, setNewComment] = useState<string>('');


    const formattedDate = format(header.datetime, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(header.datetime, {
        locale: ptBR,
        addSuffix: true
    });


    const handleAddNewComment = (e: FormEvent) => {
        e.preventDefault();
        const id = comments != null ? comments.length + 1 : 1;
        setComments([...comments, {id: id, value: newComment}])
        setNewComment('')
        
    }

    const handleUpdateNewComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.target.setCustomValidity("");
        
         setNewComment(e.target.value)
        
    }
    const handleInvalidComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity("Este é um campo obrigatório!");
        
    }

    
    function deleteComment(comment: number){
        setComments(comments.filter((c:any) => {return c.id != comment}))
    }

    const isNewComment = newComment != null ? newComment.length == 0 : false;

    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar src={header.avatar} />
                    <div className={style.authorInfo}>
                        <strong>{header.name}</strong>
                        <span>{header.rule}</span>
                    </div>
                </div>
                <time title={formattedDate} dateTime={header.datetime.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={style.content}>
            {post.map(p => {
                return p.type == 'text' ? (<p key={p.content}>{p.content}</p>) : (<p key={p.content}><a href="#">{p.content}</a></p>)
               })}
            </div>

            <form onSubmit={handleAddNewComment} className={style.commentForm}>
                <strong>Deixe seu comentário</strong>
            <textarea name="comment" placeholder='Deixe um comentário' value={newComment} onChange={handleUpdateNewComment} onInvalid={handleInvalidComment} required/>
                <footer>
                <button type='submit' disabled={isNewComment}>Comentar</button>
                </footer>
            </form>
            <div className={style.commentList}>
                {comments.map(comment => {return comment != null ? (<Comment id={comment.id} content={comment.value} key={comment.id} deleteComment={deleteComment}/>) : null})}
 
            </div>
        </article>
   );
}