import { useState, useRef } from 'react'

import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Table from "./components/Table";
import Notes from "./components/Notes";
import Footer from "./components/Footer";
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print";

function App() {
  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("Himanshu Verma")
  const [address, setAddress] = useState("Chhjmanpura")
  const [email, setEmail] = useState("himanshuverma@gmail.com")
  const [phone, setPhone] = useState("1234567890")
  const [bankName, setBankName] = useState("SBI")
  const [bankAccountNumber, setBankAccountNumber] = useState("1231232123123123")
  const [clientName, setClientName] = useState("Samu")
  const [clientAddress, setClientAddress] = useState("Jhansi")
  const [invoiceNumber, setInvoiceNumber] = useState("123234234")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")
  const [website, setWebsite] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [total, setTotal] = useState(0)
  const [list, setList] = useState([])

  const componentRef = useRef()
  const handlePrint = () => {
    window.print()
  }
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto xl:max-w-4xl xl:max-w-4xl bg-white rounded shadow">

        {showInvoice ? (<>
          <div className="p-5" ref={componentRef}>
          <ReactToPrint
            trigger={() => <button className='mb-5 text-white font-bold bg-gray-500 py-1 px-4 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300'>Print/Download</button>}
            content={() => componentRef.current} />
            <Header handlePrint={handlePrint} componentRef={componentRef}/>
            <MainDetails name={name} address={address} />
            <ClientDetails clientAddress={clientAddress} clientName={clientName} />
            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
            <Table list={list} total={total} />
            <Notes notes={notes} />
            <Footer name={name} phone={phone} email={email} website={website} address={address} bankAccountNumber={bankAccountNumber} bankName={bankName} />
            <button className='mt-5 text-white font-bold bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'
              onClick={() => setShowInvoice(false)}
            >Edit Information</button>
          </div>
        </>) :
          (<>
            <div className='flex flex-col justify-center'>
              <article className='md:grid grid-cols-2 gap-5'>
                <div className='flex flex-col'>
                  <label htmlFor="name">Enter your name</label>
                  <input type="text" name="name" id="text" placeholder="Enter Name" autoComplete='off'
                    value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="address">Enter your address</label>
                  <input type="text" name="address" id="address" placeholder="Enter Address" autoComplete='off' value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
              </article>
              <article className='md:grid grid-cols-3 gap-5'>
                <div className='flex flex-col'>
                  <label htmlFor="email">Enter your email</label>
                  <input type="email" name="email" id="email" placeholder="Enter email" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="website">Enter your website</label>
                  <input type="url" name="email" id="website" placeholder="Enter website" autoComplete='off' value={website} onChange={(e) => setWebsite(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="phone">Enter your phone number</label>
                  <input type="number" name="phone" id="phone" placeholder="Enter phone number" autoComplete='off' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </article>
              <article className='md:grid grid-cols-2 gap-5'>
                <div className='flex flex-col'>
                  <label htmlFor="bankName">Enter your bank name</label>
                  <input type="text" name="bankName" id="bankName" placeholder="Enter bank name" autoComplete='off' value={bankName} onChange={(e) => setBankName(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="bankAccountNumber">Enter your bank account number</label>
                  <input type="number" name="bankAccountNumber" id="bankAccountNumber" placeholder="Enter bank account number" autoComplete='off' value={bankAccountNumber} onChange={(e) => setBankAccountNumber(e.target.value)} />
                </div>
              </article>
              <article className='md:grid grid-cols-2 gap-5 md:mt-10'>
                <div className='flex flex-col'>
                  <label htmlFor="clientName">Enter client name</label>
                  <input type="text" name="clientName" id="clientName" placeholder="Enter name" autoComplete='off' value={clientName} onChange={(e) => setClientName(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="clientAddress">Enter client address</label>
                  <input type="text" name="clientAddress" id="clientAddress" placeholder="Enter Client Address" autoComplete='off' value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} />
                </div>
              </article>
              <article className='md:grid grid-cols-3 gap-5'>
                <div className='flex flex-col'>
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input type="number" name="invoiceNumber" id="invoiceNumber" placeholder="Enter Invoice number" autoComplete='off' value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="invoiceDate">Invoice Date</label>
                  <input type="date" name="invoiceDate" id="invoiceDate" autoComplete='off' value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="dueDate">Due Date</label>
                  <input type="date" name="dueDate" id="dueDate" autoComplete='off' value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                </div>
              </article>
              <article>
                <TableForm setDescription={setDescription} description={description} quantity={quantity} setQuantity={setQuantity} amount={amount} setAmount={setAmount} price={price} setPrice={setPrice} setList={setList} list={list} total={total} setTotal={setTotal} />
              </article>
              <label htmlFor="notes">Additional Notes</label>
              <textarea name="notes" id="notes" cols="30" rows="3" value={notes} onChange={(e) => setNotes(e.target.value)}>Additional notes to the client</textarea>

              <button className='mt-5 text-white font-bold bg-blue-500 py-2 px-4 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'
                onClick={() => setShowInvoice(true)}
              >Preview Invoice</button>
            </div>
          </>)
        }
      </main>
    </>
  );
}

export default App;
