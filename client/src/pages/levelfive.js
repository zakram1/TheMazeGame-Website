import axios from 'axios';
import React, { useState, useEffect } from 'react';

function LevelFive () {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios('http://localhost:5000/levelfive')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
        setError(err);
      }
      ).finally(() => {
        setLoading(false);
      }
      );
  }, []);

  if (loading) {
    return <div className='flex justify-center'>Loading...</div>;
  }
  if (error) {
    return <div className='flex justify-center'>Error: {error.message}</div>;
  }
  
  return (
    <div className='container mx-auto mt-2 bg-[#ff8c00] rounded-lg'>
      <div className='flex justify-around text-xl bg-[#FFD580] font-bold rounded-lg'>
        <p>Time</p>
        <p>Moves</p>
      </div>
        {data.map(item => (
          <div key={item._id} className="flex justify-around mx-auto my-1 max-w-md rounded justify-around text-xl bg-[#FFD580] py-1 font-bold">
            <span>{item.time}s</span>
            <span>{item.moves}</span>
          </div>
        ))}
    </div>
  );
}


export default LevelFive;