import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from '../Avatar/Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment}: CommentProps){
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return(
        <div className={styles.comment}>
            <Avatar
                alt=""
                hasBorder={false}
                src="https://i.pinimg.com/474x/13/8d/db/138ddb61018e9b74f7fc4d9e1f1afdb6.jpg"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Frodo Baggins</strong>
                            <time title="11 de maio às 08:13">2h ago</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Delet Comment'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Like <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}