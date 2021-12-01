import React, { useState, useEffect} from 'react';
import './App.css';
import { Textbox } from './features/TextBox/Textbox';
import { Tasks } from './features/Tasks/Tasks';
import { useDispatch, useSelector } from 'react-redux';
import { selectImage, addImage, loadImage } from './features/Images/imagesSlice';

function App() {
  const [image, setImage]=useState("");
  const dispatch = useDispatch();
  const getImage = useSelector(selectImage);



  useEffect(() => {
    const loadedImage = loadImage();
    dispatch(loadedImage) 
  }, [getImage])


  return (
    <div className="App">
      <div id='main-boxes'>
        <Textbox />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
