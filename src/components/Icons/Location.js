
import React from 'react';

export default ({ color, height }) => (
  <svg width="20px" height={`${height || 29 }px`} viewBox="0 0 20 29" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>Shape</title>
    <desc>Created with Sketch.</desc>
    <defs />
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path d="M0,9.425 C0,14.645 10,29 10,29 C10,29 20,14.645 20,9.425 C20,4.223125 15.5272727,0 10,0 C4.47272727,0 0,4.223125 0,9.425 L0,9.425 Z M4,10.2020057 C4,6.90544413 7.12893983,4 10.5186246,4 C13.9083095,4 17,6.94269341 17,10.2206304 C17,13.517192 13.8896848,17 10.4813754,17 C7.09169054,17 4,13.4985673 4,10.2020057 L4,10.2020057 Z" id="Shape" fill={color} />
    </g>

  </svg>

);

