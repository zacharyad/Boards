import { useState } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [isModal, setModal] = useState(false);

  function toggleModal() {
    isModal ? setModal(!isModal) : setModal(!isModal);
    return;
  }
  return (
    <>
      <Head>
        <title>Boards</title>
      </Head>
      <Navbar isModal={isModal} toggleModal={toggleModal} />
      {children}
      <Footer isModal={isModal} />
    </>
  );
};

export default Layout;
