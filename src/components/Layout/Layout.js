import Footer from "../Footer";
import { Container, Content, SmileCircleHeaderIcon } from "./styles";

const Layout = (props) => {
  return (
    <Container>
      <SmileCircleHeaderIcon />
      <Content>{props.children}</Content>
      <Footer />
    </Container>
  );
};

export default Layout;
