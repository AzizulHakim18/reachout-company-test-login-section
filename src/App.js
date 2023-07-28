import './App.css';
import Login from './Registration/Login';

function App() {
  return (
    <div className=" bg-green-100 ">
      <div className=' flex justify-center items-center'>
        <Login></Login>
      </div>
      <div className='mt-2 flex justify-center items-end'>
        <p>©2023 r3achout.ai all rights reserved</p>
      </div>
    </div>
  );
}

export default App;
