
import type { NextPage } from "next";
import { useRouter} from 'next/router'
import StyleCard from "../../components/StyleCard";

const board: NextPage = () => {
    const {board_id} = useRouter().query
    
    return (
        <>
        <div className="container mx-auto flex max-h-screen min-h-screen min-w-full flex-col items-center justify-center bg-indigo-100">
            <StyleCard name="Board PAGE"  
                    desc={board_id || ""}
                    linkPath="/"
                    linkText="Home"/>
        </div>
        </>
    );
};

export default board;