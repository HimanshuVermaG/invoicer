import React, { useEffect,useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {AiOutlineDelete,AiOutlineEdit} from 'react-icons/ai'

export default function TableForm({ description, setDescription, quantity, setQuantity, price, setPrice, amount, setAmount, list, setList,total, setTotal}) {
    
    const [isEditing,setIsEditing] = useState(false)
    // Form Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: uuidv4(),
            description,
            quantity,
            price,
            amount
        }
        setDescription("")
        setQuantity("")
        setPrice("")
        setAmount("")
        setList([...list, newItem])
        setIsEditing(false)
    }

    // Calculate Amount
    useEffect(() => {
        const calcAmount = () => {
            setAmount(quantity * price);
        }
        calcAmount()
    }, [price, quantity])
    
    // Delete funtion
    const deleteRow = (id) => {
        setList(list.filter((row)=>row.id !== id))
    }

    // Edit Function
    const editRow = (id) =>{
        const editingRow = list.find((row)=>row.id === id)
        setIsEditing(true)
        setDescription(editingRow.description)
        setQuantity(editingRow.quantity)
        setPrice(editingRow.price)
        setAmount(editingRow.amount)
        deleteRow(id)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:mt-10">
                    <label htmlFor="description">Item description</label>
                    <input type="text" name="description" id="description" placeholder="Item description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                </div>
                <div className="md:grid grid-cols-3 gap-10">
                    <div className="flex flex-col">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" name="quantity" id="quantity" placeholder="quantity" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="price">Item price</label>
                        <input type="number" name="price" id="price" placeholder="price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="amount">Items amount</label>
                        <p>₹ {amount}</p>
                    </div>
                </div>
                <button className='mt-5 text-white font-bold bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300' type="submit" onClick={()=> setTotal(total+amount)}>{isEditing ? "Edit Item" :"Add Item"}</button>
                <table className='my-5 w-full'>
                    <thead>
                        <tr className="bg-gray-200">
                            <td className='font-bold'>Description</td>
                            <td className='font-bold'>Quantity</td>
                            <td className='font-bold'>Price</td>
                            <td className='font-bold'>Amount</td>
                        </tr>
                    </thead>
                    {list.map(({id,description,quantity,price,amount})=>(
                        <React.Fragment key={id} >
                        <tbody>
                        <tr>
                            <td>{description}</td>
                            <td>{quantity}</td>
                            <td>{price}</td>
                            <td>₹ {amount}</td>
                            <td><button onClick={()=>{deleteRow(id); setTotal(total-amount)}}><AiOutlineDelete className='text-red-500 font-bold text-xl'/></button></td>
                            <td><button onClick={()=>{editRow(id); setTotal(total-amount)}}><AiOutlineEdit className='text-green-500 font-bold text-xl'/></button></td>
                        </tr>
                        </tbody>
                        </React.Fragment>
                    ))}
                </table>
                <div>
                    <h2 className="flex items-end justify-end text-gray-800 text-2xl font-bold">Total: {total}</h2>
                </div>
            </form>
        </>
    )
}
