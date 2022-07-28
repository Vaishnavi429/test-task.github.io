import React from 'react'
import './ShowPayment.css'

export default function ShowPayment({ paymentData }) {


    return (
        <div className='showpayment-contianer'>
            <h3>Payment Detail</h3>
            <table className='showpayment_table'>
                <tbody>

                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Payment Mode</th>
                        <th>Remarks</th>

                    </tr>
                    {paymentData.map(({ date, amount, paymentmode, remarks }, index) => (
                        <tr className='dataShow' key={index}>
                            <td>{date}</td>
                            <td>{amount}</td>
                            <td>{paymentmode}</td>
                            <td>{remarks}</td>

                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}
