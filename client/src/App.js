import React, { useState, useEffect } from 'react';
import Split from 'react-split';
import './style.css';
import Box from './component/Box';
import axios from 'axios';

// const mock_data = [
//   {
//     id: 1,
//     name: 'venu',
//     age: '25',
//   },
//   {
//     id: 2,
//     name: 'hari',
//     age: '20',
//   },
// ];

function App() {
  const [data, setData] = useState();

  const handleBoxOneSubmit = (e) => {
    e.preventDefault();
    let name = e.target.elements.name.value;
    let age = e.target.elements.age.value;
    axios.post('/api/info/boxOne', { name, age }).then((res) => {
      setData((prev) => [...prev, res.data]);
    });
    e.target.elements.name.value = '';
    e.target.elements.age.value = '';
  };

  useEffect(() => {
    let mount = true;
    axios.get('/api/info/boxOne').then((res) => {
      if (mount) {
        setData(res.data);
      }
    });
    return () => (mount = false);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Split
      direction='vertical'
      style={{ height: 'calc(100vh)' }}
      className='main'
    >
      <Split className='flex' sizes={[40, 60]}>
        <Box id='one' handleSubmit={handleBoxOneSubmit} data={data} />
        <Box id='two' />
      </Split>
      <Box id='three' />
    </Split>
  );
}

export default App;
