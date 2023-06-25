import { FcLike } from "react-icons/fc";
import styles from "./Like.module.css";

interface LikeProps {
  like: boolean;
  setLikeEnabled: (likeEnable: boolean) => void;
}

function Like({ like, setLikeEnabled }: LikeProps) {
  return (
    <div onClick={() => setLikeEnabled(false)}>
      <FcLike color={like ? "red" : styles.unlike} size="40" />
    </div>
  );
}

export default Like;
