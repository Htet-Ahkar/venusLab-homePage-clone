// Types
type layoutProps = {
  children: ReactFragment;
};

import { ReactFragment } from "react";
// Components
import { Navbar } from "..";
import { Footer } from "..";

const index = ({ children }: layoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default index;
