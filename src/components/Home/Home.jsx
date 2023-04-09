import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const shirts = useLoaderData();
  console.log(shirts);
  return (
    <div>
      <h1>T-Shirt no-{shirts.length}</h1>
      
    </div>
  );
};

export default Home;