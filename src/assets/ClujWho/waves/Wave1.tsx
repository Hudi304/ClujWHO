import React from 'react'

function Wave1() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width="100vw"
      enableBackground="new 0 0 900 525"
      fill="none"
      viewBox="0 0 900 525"
    >
      <g clipPath="url(#clip0_1_2)">
        <path fill="#253551" d="M900 0H0v525h900V0z"></path>
        <circle
          cx="450"
          cy="-25"
          r="550"
          fill="#1A202C"
          fillOpacity="0.25"
        ></circle>
        <circle
          cx="450"
          cy="-25"
          r="500"
          fill="#1A202C"
          fillOpacity="0.5"
        ></circle>
        <circle cx="450" cy="-25" r="450" fill="#1A202C"></circle>
      </g>
      <defs>
        <clipPath id="clip0_1_2">
          <path fill="#fff" d="M0 0H900V525H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default Wave1
