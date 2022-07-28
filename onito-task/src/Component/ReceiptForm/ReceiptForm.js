import React, { useState } from 'react'
import './ReceiptForm.css'
import ShowPayment from './ShowPayment/ShowPayment';

export default function ReceiptForm() {
  const [paymentData, setPaymentData] = useState([])
  const [payment, setPayment] = useState({
    date: '',
    amount: '',
    paymentmode: "Cash",
    remarks: ''
  });
  const [valid, setValid] = useState({
    date: false,
    amount: false,
    paymentmode: false,

  })
  const HandleReceiptInput = (e) => {
    const { name, value } = e.target
    setPayment({ ...payment, [name]: value })

  }
  const HandleValidation = () => {

  }
  const clearData = () => {
    setPayment({
      date: '',
      amount: '',
      paymentmode: "Cash",
      remarks: ''
    })
  }
  const ReceiptButton = (name) => {
    if (name === 'cancel') {
      clearData()
    }
    else if (name === 'submit') {
      setPaymentData((prevState) => {
        return [...prevState, payment]
      })
      clearData()
    }
  }
  return (
    <>
    <div className='receiptFrom__container'>
      <div className='receiptFrom__content'>
        <h3 className="receiptFrom__heading">Receipt Details</h3>
        <table className='receiptFrom__table'>
          <tbody>
            <tr>
              <td className='receiptFrom__td'>
                Date<span style={{ color: 'red' }}>*</span>
              </td>
              <td className='receiptFrom__td'>
                <input type="text" className="receipt_input" placeholder="Enter Date" value={payment.date} name="date" onChange={HandleReceiptInput} />
                {valid.date && <div style={{ color: 'red' }}>please enter date</div>}
              </td>
            </tr>
            <tr>
              <td className='receiptFrom__td'>
                Amount<span style={{ color: 'red' }}>*</span>
              </td>
              <td>
                <input type="number" className="receipt_input input_custom" placeholder="Enter Amount (in INR)" value={payment.amount} name="amount" onChange={HandleReceiptInput} />
                {valid.amount && <div style={{ color: 'red' }}>please enter amount</div>}

              </td>
            </tr>
            <tr>
              <td className='receiptFrom__td'>
                Payment mode<span style={{ color: 'red' }}>*</span>
              </td>
              <td className='receiptFrom__td'>
                <input type="text" className="receipt_input" value={payment.paymentmode} name="paymentmode" onChange={HandleReceiptInput} />
                {valid.paymentmode && <div style={{ color: 'red' }}>select payment mode</div>}

              </td>
            </tr>
            <tr>
              <td className='receiptFrom__td'>
                Remark
              </td>
              <td className='receiptFrom__td'>
                <input type="text" className="receipt_input input_custom" placeholder="Enter Remark" value={payment.remarks} name="remarks" onChange={HandleReceiptInput} />
              </td>
            </tr>
          </tbody>
        </table>

        <div className='receiptForm__button'>
          <button className="receiptform__btn cancel-btn" onClick={(e) => ReceiptButton("cancel")}>CANCEL (esc)</button>
          <button className="receiptform__btn submit-btn" onClick={(e) => ReceiptButton("submit")}>SUBMIT<br />  (s)</button>

        </div>
      </div>
      </div>
     {paymentData.length ? <ShowPayment  paymentData={paymentData}/> :" " } 
     </>
  )
}
