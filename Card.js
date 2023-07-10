import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
  return (
    <div className="card bg-dark text-white" style={{ width: '30rem', margin: 'auto', float: 'none', marginBottom: '10px' }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {props.status && (<div id='createStatus'>{props.status}</div>)}
      </div>
    </div>
  );
}

export default Card;