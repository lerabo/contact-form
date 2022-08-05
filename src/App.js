import { Provider } from "react-redux";
import Layout from "./components/Layout";
import ContactForm from "./components/ContactForm";
import GlobalStyle from "./globalStyles";
import store from "./store";

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Layout>
          <ContactForm />
        </Layout>
      </Provider>
    </>
  );
}

export default App;
