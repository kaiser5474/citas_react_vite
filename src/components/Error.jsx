import React from 'react'

const Error = ({msg}) => {
  return (
    <div className="text-white bg-red-800 rounded-md p-2 mb-2 text-center font-bold">
        <p>
            {msg}
        </p>
    </div>
  )
}

export default Error