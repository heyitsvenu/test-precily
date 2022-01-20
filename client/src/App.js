import React, { useState, useEffect } from 'react';
import Split from 'react-split';
import './style.css';
import Box from './component/Box';
import axios from 'axios';

function App() {
  const [boxOneData, setBoxOneData] = useState([]);
  const [boxTwoData, setBoxTwoData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleBoxOneChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleBoxOneClick = (e) => {
    e.preventDefault();
    axios.post('/api/info/boxOne', { data: inputValue }).then((res) =>
      setBoxOneData((prev) => {
        return [...prev, res.data.data];
      })
    );
  };

  const handleBoxTwoChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleBoxTwoClick = (e) => {
    e.preventDefault();
    axios.post('/api/info/boxTwo', { data: inputValue }).then((res) =>
      setBoxTwoData((prev) => {
        return [...prev, res.data.data];
      })
    );
  };

  useEffect(() => {
    let mount = true;
    axios.get('/api/info/boxOne').then((res) => {
      let result = res.data.map((item) => item.data);
      if (mount) {
        setBoxOneData(result);
      }
    });

    axios.get('/api/info/boxTwo').then((res) => {
      let result = res.data.map((item) => item.data);
      if (mount) {
        setBoxTwoData(result);
      }
    });
    return () => (mount = false);
  }, []);

  useEffect(() => {
    console.log(boxOneData);
    console.log(boxTwoData);
  }, [boxOneData, boxTwoData]);

  return (
    <Split
      direction='vertical'
      style={{ height: 'calc(100vh)' }}
      className='main'
    >
      <Split className='flex' sizes={[40, 60]}>
        <Box
          data={boxOneData.join(' ')}
          id='one'
          handleClick={handleBoxOneClick}
          handleChange={handleBoxOneChange}
        />
        <Box
          data={boxTwoData.join(' ')}
          id='two'
          handleClick={handleBoxTwoClick}
          handleChange={handleBoxTwoChange}
        />
      </Split>
      <Box data='Box Three' id='three' />
    </Split>
  );
}

export default App;
