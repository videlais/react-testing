import "./index.css";
import React from 'react';
import Card from './Card';

export default function Player({ className }) {
  return <div className={className}>
        <>
           <div className="PlayerWrapper">
            <Card />
           </div>
        </> 
    </div>;
}

