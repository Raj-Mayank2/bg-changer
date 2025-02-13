import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const [color,setColor]=useState('olive');
  function changeColor(color){
    setColor(color)
  }
  return (
    
    <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={()=>changeColor('red')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black' style={{backgroundColor:'red'}}
          >Red</button>
          <button
          onClick={()=>changeColor('blue')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor:'blue'}}
          >Blue</button>
          <button
          onClick={()=>changeColor('yellow')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor:'yellow'}}
          >yellow</button>
          <button
          onClick={()=>changeColor('grey')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor:'grey'}}
          >grey</button>
          <button
          onClick={()=>changeColor('pink')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor:'pink'}}
          >pink</button>

        </div>
      </div>
    </div>
  );
}

export default App;
