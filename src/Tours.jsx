import React from 'react';
import Tour from './Tour';
import { nanoid } from 'nanoid';

export default function Tours({removeTour, tours}){
  return (
    <section>
        <div className="title">
            <h2>our tours</h2>
        </div>
        <div>
            {tours.map(tour => (<Tour key={nanoid()} removeTour={removeTour} {...tour} />))}
        </div>
    </section>
  )
};