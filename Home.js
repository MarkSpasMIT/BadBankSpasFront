import '../App.css';
import React from 'react';
import Card from './Card';

function Home() {
  return (
    <Card
      txtcolor="black"
      title="Welcome to the Bad Bank Spas"
      text="The best in bad Banking"
      body={(<img src="images/bank.jpg" id="bankImage" className="img-fluid" alt="Bank image" />)}
    />
  );
}

export default Home;