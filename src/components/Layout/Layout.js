import Footer from "../Footer";
import { StyledLayout } from "./styles";

const Layout = (props) => {
  return (
    <StyledLayout>
      {props.children}
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
