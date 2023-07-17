import React, { useState, useEffect } from 'react';
import './index.css';
import Form from './Form';
import Table from './Table';

const App = () => {
  const url = "https://jsonplaceholder.typicode.com/";
  const [item, setItem] = useState('users');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}${item}`);
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, [item]);

  return (
    <div className="App">
      <Form item={item} setItems={setItem} />
      <Table items={data} />
    </div>
  );
};

export default App;
