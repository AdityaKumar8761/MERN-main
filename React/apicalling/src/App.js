import React, {useState,useEffect} from 'react';
import './App.css';
import getPost from './API';  
import PostCard from './components/PostCard';

function App(){
  const [data, setData] = useState(null);

  useEffect (()=> {
    getPost().then((posts) => setData(posts))
  },[]);

  return <div className='App'>
    {data ? data.map((e) => <PostCard title={e.title} body={e.body} />) : <p>no data</p>}
  </div>
}

export default App;
