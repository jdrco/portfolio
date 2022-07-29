import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="content max-w-sm sm:max-w-xl md:max-w-2xl flex mx-auto justify-between h-screen flex-col py-12 sm:py-0">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
