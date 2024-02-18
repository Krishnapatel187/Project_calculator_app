import React from 'react'

const CalcButton = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={() => onClick(value)}>
    {value}
  </button>
  )
}

export default CalcButton