import type { NextPage } from "next";
import { useRouter} from 'next/router'
import StyleCard from "../../components/StyleCard";
    
const Board: NextPage = () => {
    const router = useRouter()
    const { board_id } = router.query

    console.log("board_id: ", board_id)

    
    return (
        <>
        <div className="container mx-auto flex max-h-screen min-h-screen min-w-full flex-col items-center justify-center bg-indigo-100">
            <StyleCard name="Board PAGE"  
                    desc={board_id ? board_id : ""}
                    linkPath="/"
                    linkText="Home"/>
        </div>
        </>
    );
};

export default Board;