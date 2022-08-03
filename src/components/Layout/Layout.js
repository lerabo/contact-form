import Footer from "../СontactForm/Footer/Footer";

const Layout = (props) => {
  return (
    <div id="container">
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
