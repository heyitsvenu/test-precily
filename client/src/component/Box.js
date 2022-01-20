import React from 'react';

const Box = ({ data, id, handleClick, handleChange }) => {
  return (
    <div style={{ backgroundColor: '#ddd' }} id={id} className='box'>
      <div id='btn'>
        <div>
          <input type='text' onChange={handleChange} />
        </div>
        <div>
          <button onClick={handleClick} type='button'>
            Add
          </button>
          <button type='button'>Update</button>
        </div>
      </div>
      <div id='data'>
        <p>{data}</p>
      </div>
    </div>
  );
};

export default Box;
