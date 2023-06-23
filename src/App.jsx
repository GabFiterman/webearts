// import { useState } from 'react'
import "./scss/app.scss";
import TestingComponent from "./components/TestingComponent";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='container py-4 px-3 mx-auto'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <div className="container-sm mainContainer">
        <TestingComponent />
      </div>
    </>
  );
}

export default App;
