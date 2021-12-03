import React, { useState, useEffect} from 'react';
import './App.css';
import { Textbox } from './features/TextBox/Textbox';
import { Tasks } from './features/Tasks/Tasks';
import { useDispatch, useSelector } from 'react-redux';
import { selectImage, loadImage } from './features/Images/imagesSlice';
import { Quotes } from './features/Quotes/Quotes';
import { Weather } from './features/Weather/Weather';

function App() {
  const [currImg, setImg] = useState('')
  const dispatch = useDispatch();
  const getImage = useSelector(selectImage);
  const imageArray = getImage[0];

  useEffect(() => {
    dispatch(loadImage());
  }, [dispatch])

  if(imageArray !== undefined && currImg === '') {
    setImg(imageArray[Math.floor(Math.random()*imageArray.length)]);
  }

  const nextPicture = (e) => {
    e.preventDefault();
    const currImgIndex = imageArray.indexOf(currImg);
    if(currImgIndex < 9) {
      setImg(imageArray[currImgIndex+1])
    }
  }

  const previousPicture = (e) => {
    e.preventDefault();
    const currImgIndex = imageArray.indexOf(currImg);
    if(currImgIndex > 0) {
      setImg(imageArray[currImgIndex-1])
    }
  }

  return (
    <div className="App" style={ 
      currImg !== ''? 
      {
        backgroundImage: `url(${currImg.urls.full})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', 
        backgroundPosition: 'center', minHeight: '100vh'
      } 
    : {}
    }>
      <Weather />
      <div id='main-boxes'>
        <Textbox />
        <Tasks />
      </div>
      <div className='btn-container'>
        <button className='left-btn' onClick={previousPicture}>&lt;</button>
        <button className='right-btn' onClick={nextPicture}>&gt;</button>
      </div>
      <Quotes />
    </div>
  );
}

export default App;
