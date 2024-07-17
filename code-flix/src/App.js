import React, {useEffect, useState} from 'react';
import './App.scss';
import Tmdb from './services/Tmdb';
import {Movies} from './components/Movies';


function App() {

  const [movieList,setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  },[])


  return (
    <div className='App'>
      <div className='list'>
        {movieList.map((item,key) => (
         <Movies key={key} title={item.title} items = {item.items}/>
        ))}
      </div>
    </div>

  );
}

export default App;
