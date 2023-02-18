import React from 'react'

export default function Table({ list,total }) {
  return (
    <>
      <table className='my-5 w-full'>
        <thead>
          <tr className="bg-gray-200">
            <td className='font-bold'>Description</td>
            <td className='font-bold'>Quantity</td>
            <td className='font-bold'>Price</td>
            <td className='font-bold'>Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id} >
            <tbody>
              <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>₹ {amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
      <div>
          <h2 className="flex items-end jsutify-end text-gray-800 text-2xl font-bold">Total: {total}</h2>
      </div>
    </>
  )
}
