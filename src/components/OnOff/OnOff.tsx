import { MdDoneOutline } from "react-icons/md";

interface OnOffProps {
  done: boolean;
  setDone: (done: boolean, id: number) => void;
  id: number;
}

function OnOff({ done, setDone, id }: OnOffProps) {
  return (
    <>
      <MdDoneOutline
        size="30"
        color={done ? "green" : "yello"}
        onClick={() => setDone(done, id)}
      />
    </>
  );
}

export default OnOff;
