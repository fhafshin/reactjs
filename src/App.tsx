import "./App.css";
import Head from "./component/head.tsx";
import UseState from "./component/useState.tsx";
const App = () => {
  const id = 52;
  return (
    <div className="App">
      <Head productId={id} productName="car">
        <h2>child component</h2>
      </Head>
      <UseState />
    </div>
  );
};

export default App;
