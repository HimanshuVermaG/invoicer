import React from 'react'

export default function Header({handlePrint}) {
    return (
        <>
            <header className="flex flex-col items-center justify-center mb-5">
                <div>
                    <h1 className="font-bold uppercase tracking-wide text-4xl mb-3" >Invoicer</h1>
                </div>
                {/* <div>
                    <ul className="flex items-center justify-between flex-wrap">
                        <li><button className='mt-5 mx-1 text-white font-bold bg-gray-500 py-1 px-4 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300' onClick={handlePrint}>Print</button></li>
                        <li><button className='mt-5 mx-1 text-white font-bold bg-blue-500 py-1 px-4 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300' onClick={handlePrint}>Download</button></li>
                        <li><button className='mt-5 mx-1 text-white font-bold bg-green-500 py-1 px-4 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300' onClick={handlePrint}>Send</button></li>
                    </ul>
                </div> */}
            </header>
        </>
    )
}
