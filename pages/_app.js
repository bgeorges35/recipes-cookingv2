import "../styles/globals.css";
import Header from "../components/Header";

// import { ApolloProvider } from "@apollo/client";
// import client from "../apollo-client";

function MyApp({ Component, pageProps }) {
  return (
    // <ApolloProvider client={client}>
    <div className="flex flex-col h-full">
      <Header />
      <Component {...pageProps} />
    </div>
    // </ApolloProvider>
  );
}

export default MyApp;
