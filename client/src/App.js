import React, { useState, useEffect } from 'react';
import Split from 'react-split';
import './style.css';
import Box from './component/Box';
import axios from 'axios';

function App() {
  // state variables
  const [data, setData] = useState();
  const [edit, setEdit] = useState(false);
  const [editForm, setEditForm] = useState(null);
  const [count, setCount] = useState(0);

  // Handle Form Submit
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

  // Handle Edit Form Submit
  const handleEditSubmit = (e, id) => {
    e.preventDefault();
    let name = e.target.elements.editName.value;
    let age = e.target.elements.editAge.value;
    axios.patch(`/api/info/boxOne/${id}`, { name, age }).then((res) => {
      let newData = data.map((item) => {
        if (item._id === id) {
          return {
            ...item,
            name: e.target.elements.editName.value,
            age: e.target.elements.editAge.value,
          };
        } else {
          return item;
        }
      });
      setData(newData);
      setEdit(false);
    });
  };

  // Handle Edit Button Click
  const handleClick = (id) => {
    setEdit(true);
    setEditForm(
      <div className='editForm'>
        <form id='editForm' onSubmit={(e) => handleEditSubmit(e, id)}>
          <div>
            <div>
              <h2>Edit Item: {id}</h2>
            </div>
            <div>
              <label htmlFor='editName'>Name: </label>
              <input
                type='text'
                id='editName'
                defaultValue={
                  data[data.findIndex((item) => item._id === id)].name
                }
              />
            </div>
            <div>
              <label htmlFor='editAge'>Age: </label>
              <input
                type='text'
                id='editAge'
                defaultValue={
                  data[data.findIndex((item) => item._id === id)].age
                }
              />
            </div>
            <div>
              <button type='submit'>Edit</button>
            </div>
          </div>
          <div>
            <button
              id='cancel'
              onClick={(e) => {
                e.preventDefault();
                setEdit(false);
                setEditForm(null);
              }}
            >
              X
            </button>
          </div>
        </form>
      </div>
    );
  };

  // Initial data setting
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
    let mount = true;
    axios.get('/api/stats').then((res) => {
      setCount(res.data.count);
    });
    return () => (mount = false);
  }, [data]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Split
        direction='vertical'
        style={{ height: 'calc(100vh)' }}
        className='main'
      >
        <Split className='flex' sizes={[40, 60]}>
          <Box
            id='one'
            handleSubmit={handleBoxOneSubmit}
            data={data}
            edit={edit}
            handleClick={handleClick}
            showForm={true}
          />
          <Box id='two' showForm={false} />
        </Split>
        <Box id='three' showForm={false} />
      </Split>
      <div id='count'>
        <span>Count: {count}</span>
      </div>
      {edit && editForm}
    </>
  );
}

export default App;
