import "./App.css";
// import Head from "./component/head.tsx";
// import UseState from "./component/useState.tsx";
// import UseEffect from "./component/useEffect.tsx";
// import Event from "./component/event.tsx";
// import ParentEvent from "./component/parentEvent.tsx";
// import { useState } from "react";
// import Counter from "./component/counter";
// import Test from "./component/test";
// import Index from "./component/counters";
// import counter from "./component/counter";
// import RandomName from "./component/randomName";
import SendData from "./component/sendData";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/about-us";
import Navbar from "./component/layouts/Navbar";
import User from "./component/user";
import NotFound from "./pages/error/not-found.tsx";
import Users from "./pages/users";
import loadable from "./pages/loadable.tsx";
import Login from "./pages/login";
import Todos from "./pages/todos";
import Counter from "./pages/counter";

const App = () => {
  // const counters = [5, 5, 6, 4, 5, 7];
  // const onInputChange = (value) => {
  //   setCounter(value);
  //   console.log(value);
  // };
  // const [counter, setCounter] = useState(6);
  // const clickedHandle = () => {
  //   //console.log("clicked");
  // };
  // const id = 52;
  return (
    <div className="App">
      {/*<Head productId={id} productName="car">*/}
      {/*  <h2>child component</h2>*/}
      {/*</Head>*/}
      {/*<UseState />*/}
      {/*<UseEffect />*/}
      {/*<Event />*/}
      {/*<ParentEvent*/}
      {/*  clickedHandle={clickedHandle}*/}
      {/*  counter={counter}*/}
      {/*  onInputChange={onInputChange}*/}
      {/*/>*/}

      {/*<Counter defaultValue={5} />*/}
      {/*<Test />*/}
      {/*{counters.map((item) => {*/}
      {/*  return (*/}
      {/*    <div className="container" key={item}>*/}
      {/*      {" "}*/}
      {/*      <Index defaultValue={item} />*/}
      {/*    </div>*/}
      {/*  );*/}
      {/*})}*/}

      {/*<RandomName />*/}
      <Navbar />
      <Routes>
        <Route path="/" Component={SendData}></Route>
        <Route path="/about-us" Component={AboutUs}></Route>
        <Route path="/user/:id" Component={User}></Route>
        <Route path="*" Component={NotFound}></Route>
        <Route path="/users" Component={loadable}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/todos" Component={Todos}></Route>
        <Route path="/counter" Component={Counter}></Route>
      </Routes>
    </div>
  );
};

export default App;
