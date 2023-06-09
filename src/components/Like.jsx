import { useState } from "react";
import classes from "./Like.module.css";

const Like = () => {
    // let isLiked;
    const [isLiked, setIsLiked] = useState(false);
    // setIsLiked = () => {isLiked ? (isLiked = false) : (isLiked = true)}

    const likeFoo = () => {
        setIsLiked(isLiked ? false : true);
    };

    return (
        <div>
            <button
                onClick={likeFoo}
                className={
                    isLiked ? classes.buttonLiked : classes.buttonDefault
                }
            >
                Like
            </button>
        </div>
    );
};

export default Like;
