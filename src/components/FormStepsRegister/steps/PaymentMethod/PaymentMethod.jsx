import React from 'react'
import CreditCard from '../../../CreditCard/CreditCard'

const PaymentMethod = ({ formData, setFormData }) => {
  return (
    <div>
      <CreditCard formData={formData} setFormData={setFormData}/>
    </div>
  )
}

export default PaymentMethod