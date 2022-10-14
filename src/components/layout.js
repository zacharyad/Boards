import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import Head from "next/head";
import useUserStore from "../store/user_store";
import Footer from "./Footer";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("./Navbar"), {
  ssr: false,
});

const Layout = ({ children }) => {
  const [isModal, setModal] = useState(false);
  let user_id = useUserStore((state) => state.user_id);
  const setUserId = useUserStore((state) => state.setUserId);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserId(session?.user?.id);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setUserId(session);
    });
  }, [user_id]);

  function toggleModal() {
    isModal ? setModal(!isModal) : setModal(!isModal);
    return;
  }
  return (
    <>
      <Head>
        <title>Boards</title>
      </Head>
      <Navbar user_id={user_id} isModal={isModal} toggleModal={toggleModal} />
      {children}
      <Footer isModal={isModal} />
    </>
  );
};

export default Layout;
