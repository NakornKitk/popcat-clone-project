import Navbar from './components/navbar'
import {useState, useEffect} from 'react'
import useStore from './store/store.js'
import './input.css'
import sound from './sound/sound.wav'

 

function App() {
  let [count,setCount] = useState('')
  let {localCount,setlocalCount} = useStore()
  const [isImageOne, setIsImageOne] = useState(true);


  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/get`,{method: 'GET'})
    .then(response => response.json())
    .then(result => {
      setCount(result.data.numCount)
    })
  },[])


  function playAudio(url) {
    new Audio(url).play();
  }


  const incrementClick = () =>{
    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/add`,{method: 'PUT'})
    .then(response => response.json())
    .then(result => {
        // console.log(result)
        setCount(result.data.numCount)
        setlocalCount()
    })
    setIsImageOne((prev) => !prev);
    playAudio(sound)
  }




  return (
    <div className={isImageOne ? 'bg-image-1 h-[100vh] bg-top bg-cover' : 'bg-image-2 h-[100vh] bg-top bg-cover'} onClick={incrementClick} >
      <Navbar/>
      <div className="">
        <div className="londrina-outline-regular h-[95%] w-[100%]">
          <p className="text-center text-[70px] md:text-[50px]">{localCount}</p>
        </div>
        <div className="text-4xl w-[100%] bg-white fixed bottom-0">
          <p className="text-center p-[10px] londrina-outline-regular">All time clicks: {count} times</p>
        </div>
      </div>
    </div>
  );
}

export default App;
