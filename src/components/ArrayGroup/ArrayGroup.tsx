import React from "react";
import OnOff from "../OnOff/OnOff";

interface RecordsProps {
  id: number;
  title: string;
  status: boolean;
}

interface ArrayGroupProps {
  records: RecordsProps[];
  setDone: (done: boolean, id: number) => void;
}

function ArrayGroup({ records, setDone }: ArrayGroupProps) {
  return (
    <>
      {records.map((record) => {
        return (
          <div key={record.id}>
            <p>title: {record.title}</p>
            <p>status: {record.status ? "True" : "False"}</p>
            <OnOff done={true} setDone={setDone} id={record.id} />
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ArrayGroup;
