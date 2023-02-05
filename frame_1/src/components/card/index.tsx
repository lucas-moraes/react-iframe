import React from 'react';
import './styles.css'

function Card() {

  const handleChange = () => {
      console.log('frame_1')
  }
  return (
    <div className="card">
      <h2>Frame_1</h2>
      <button id="buttonFrameOne">click me</button>
      <input  id="inputFrameOne" type='text' />
    </div>
  );
}

export default Card;
