import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const title = '';

const background = <img class="background" alt="ocean" src="/images/ocean.jpg" />

const images = [];
for (const animal in animals) {
  images.push(`<img key={${animal}}src={${animal}}/>`)
  console.log(animal);
}

const animalFacts = (
  <div>
    { background }
    <h1>{title ? title : 'Click an animal for a fun fact'}</h1>
  </div>
  );

root.render(animalFacts);