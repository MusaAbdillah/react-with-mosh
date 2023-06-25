import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styles from "./Like.module.css";

interface LikeProps {
  like: boolean;
  setLikeEnabled: (likeEnable: boolean) => void;
}

function Like({ like, setLikeEnabled }: LikeProps) {
  if (like)
    return (
      <AiFillHeart
        color="#eb3477"
        size={40}
        onClick={() => {
          setLikeEnabled(false);
          console.log(like);
        }}
      />
    );

  return (
    <AiOutlineHeart
      size={40}
      onClick={() => {
        setLikeEnabled(true);
        console.log(like);
      }}
    />
  );
}

export default Like;
