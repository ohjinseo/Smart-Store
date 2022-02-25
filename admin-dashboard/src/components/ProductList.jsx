import React from 'react'

function ProductList({product}) {
  return (
    <div className="flex w-full pb-4 pt-4 border-solid border-b-[1px]  border-gray-200 cursor-pointer hover:bg-gray-100">
            <div className="w-4/12 flex">
              <div className="w-1/3 h-[150px] mr-4 flex justify-center items-center bg-gray-50">
                <img className="max-w-[80%] max-h-[80%] object-cover" src={product?.img} />
              </div>

              <div className="w-2/3">
                <p className="font-bold text-gray-500 text-sm">BMW</p>
                <h1 className="font-medium mb-5 text-gray-900 text-[26px]">{product?.title}</h1>
                <div className="flex mb-2">
                  {product?.color.map((c, idx) => (
                    <div key={idx} className={`bg-${c}-600 w-5 h-5 mr-2 rounded-full`}></div>
                  ))}
                </div>

                <div className="flex">
                  {product?.size.map((s, idx) => (
                    <div key={idx} className="border-[1px] border-solid border-gray-700 flex justify-center items-center w-7 h-7 rounded-md mr-2">
                      <p className="font-medium">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-2/12 flex justify-center">
              <span className="text-[18px] font-medium">4 / 5</span>
            </div>

            <div className="w-2/12 flex justify-center">
              <span className="text-[18px] font-medium">100</span>
            </div>

            <div className="w-2/12 flex justify-center">
              <span className="text-[18px] font-medium">56</span>
            </div>

            <div className="w-2/12 flex justify-center">
              <span className="text-[18px] font-medium">{product?.price || 0} \</span>
            </div>
          </div>
  )
}

export default ProductList