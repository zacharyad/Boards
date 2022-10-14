import type { NextPage } from "next";
import { supabase } from "../supabaseClient";

const Dashboard: NextPage = () => {
    console.log("Dash PAge")
  return (
    <>
      <div className="container mx-auto flex max-h-screen min-h-screen min-w-full flex-col items-center justify-center bg-indigo-100">
        <div>This is the dash</div>
        <div>{}</div>
        <button onClick={() => supabase.auth.signOut()}>Logout</button>
      </div>
    </>
  );
};

export default Dashboard;