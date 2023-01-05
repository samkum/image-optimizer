import React, { useState } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimeImg from './AnimeImg';
import Uploadfile from './Uploadfile';
import Listitems from './Listitems';

const App = () => {

  const [image, setimage] = useState("")
  const handleFile = (e) => {
    let file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = function (event) {
      setimage(event.target.result)
      console.log(event.target.result);
    }
    setimage(reader.readAsDataURL(file));
  }
  return (
    <div className='mainback d-flex justify-content-center align-items-center'>
      <div className='d-flex align-item-center main flex-column '>
        <div className='title d-flex justify-content-center align-items-center w-100'>
          Image Optmizer
        </div>


        <div className="d-flex w-100 mainc">
          <div className='w-50'>
            <Uploadfile handleFile={handleFile} image={image}/>
          </div>
          <div className='w-50'>
            <AnimeImg />
          </div>
        </div>
        <div>
          <Listitems image={image} />
        </div>
      </div>
    </div>
  )
}

export default App