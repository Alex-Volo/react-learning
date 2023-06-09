import classes from "./Post.module.css";

const Post = ({ post }) => {
    return (
        <div className={classes.post}>
            <div className={classes.post__content}>
                <strong>{post.id}. {post.title}</strong>
                <p>{post.body}</p>
            </div>
            <div className={classes.post__buttons}>
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default Post;
