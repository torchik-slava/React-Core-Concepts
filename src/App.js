import React from 'react';
import { createdElement } from "./components/createElement";
import ClassComponent from "./components/ClassComponent";
import PureComponent from "./components/PureComponent";
import FunctionalComponent from "./components/FunctionalComponent";

const App = () => {
  return (
    <div className="app" id="app">
      <h1>Hello world!</h1>
      {createdElement}
      <ClassComponent />
      <PureComponent />
      <FunctionalComponent />
    </div>
  );
};

export default App;
