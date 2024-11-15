import React from 'react'

function Footer(props) {
    const {count} = props
  return (
    <div>
        <div className="w-[100%] sm:w-[60%] bg-white fixed bottom-0 mx-[auto] left-1/2 transform -translate-x-1/2 flex justify-between h-[60px] items-center sm:rounded-t-2xl transition-all duration-500">
                <div className="w-[50px] border-r border-r-gray-200">
                  <p className="text-center ">&#127757;</p>
                </div>

                <div className="flex justify-between w-[80%]">
                  <p className="text-center">Worldwide</p>
                </div>

                <div className="w-[50px] border-l border-l-gray-200">
                  <p className="text-center">{count}</p>
                </div>
              </div>
    </div>
  )
}

export default Footer