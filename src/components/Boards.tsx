import type { NextPage } from "next";
import StyleCard from "../components/StyleCard";


const Boards= (props: {board_id: string, msg: string, key: string}) => {
  return (
    <>
      <div className="container mx-auto flex max-h-screen min-h-screen min-w-full flex-col items-center justify-center bg-indigo-100">
        <StyleCard name={props.msg}  
                  desc="-"
                  linkPath={`/board/${props.board_id}/edit`}
                  linkText="Edit"/>
      </div>
    </>
  );
};

export default Boards;