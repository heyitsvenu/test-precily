import React from 'react';

const Box = ({ id, handleSubmit, data, handleClick, showForm }) => {
  return (
    <div style={{ backgroundColor: '#ddd' }} id={id} className='box'>
      {showForm ? (
        <form onSubmit={handleSubmit} id='form'>
          <div>
            <div>
              <label htmlFor='name'>Name: </label>
              <input type='text' id='name' />
            </div>
            <div>
              <label htmlFor='age'>Age: </label>
              <input type='text' id='age' />
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
          </div>
        </form>
      ) : null}
      <div id='data'>
        {data ? (
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>age</th>
                <th>edit</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item['_id']}>
                    <td>{item.name}</td>
                    <td>{item['age']}</td>
                    <td>
                      <button onClick={() => handleClick(item['_id'])}>
                        edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};

export default Box;
