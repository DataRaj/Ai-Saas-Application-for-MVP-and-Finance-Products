import React from 'react'

export default function ContainerButtons() {
  return (
    <div className=" border-solid rounded-sm border-r-orange-700 text-gray-800 bg-gray-200 box-border shadow-md flex-1 justify-center items-center w-full">
      <div className="flex-1 bg-red-100-transparent shadow-orange-100">
        <ul >
            <li><button className=' bg-green-800 text-red-100 px-8 py-4 font-medium font-serif'>subscribe</button></li>
            <li><button className=' bg-green-800 text-red-100 px-8 py-4 font-medium font-serif'>like</button></li>
            <li><button className=' bg-green-800 text-red-100 px-8 py-4 font-medium font-serif'>reply</button></li>

        </ul>
      </div>
    </div>
  )
}
