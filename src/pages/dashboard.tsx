import {useEffect} from 'react'
import type { NextPage } from "next";
import { supabase } from "../supabaseClient";
import useUserStore from '../store/user_store';
import dynamic from "next/dynamic";
const Boards = dynamic(() => import("../components/boards"), {
  ssr: false,
});

const Dashboard = (props: {user_id: any}) => {
    let user_id = useUserStore((state) => state.user_id)
    let boards = useUserStore((state) => state.boards)
    let setBoards = useUserStore((state) => state.setBoards)

    useEffect(() =>{
        getProfileAndBoards()
    }, [])

    async function getProfileAndBoards(){
        try{
            // get the users boards
            let { data: boards, error } = await supabase
                .from('boards')
                .select('msg, isVisible, id')
                .eq('user_id', user_id) as any

            if (error) {
                throw error
            }

            setBoards(boards)

            //console.log("data from supabase in dash", boards)
        } catch (error) {
            console.log("Error: ", error)
        } finally {
        //   setLoading(false)
        }
    }

    return (
            <div className="container mx-auto flex max-h-screen min-h-screen min-w-full flex-col items-center justify-center bg-indigo-100">
                <div>This is the dash</div>
                <button onClick={() => supabase.auth.signOut()}>Logout</button>
                
                {
                    boards.length ? 
                    boards.map(board => {
                        return <Boards key={board.id} board_id={board.id} msg={board.msg} />
                        
                    }) :
                    <div>Sorry no boards yet. bummer.</div>
                }
            </div>

        );
};

export default Dashboard;