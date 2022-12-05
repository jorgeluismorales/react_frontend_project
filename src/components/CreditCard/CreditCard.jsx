import React from 'react'
import Card from 'react-credit-cards-2'

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from '../../utils/cardValidations'

import 'react-credit-cards-2/es/styles-compiled.css'
import { useTranslation } from 'react-i18next'

const CreditCard = ({ formData, setFormData }) => {

  const { t } = useTranslation();

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setFormData({ ...formData, issuer })
    }
  }

  const handleInputFocus = ({ target }) => {
    setFormData({ ...formData, focus: target.name })
  }

  const handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value)
    }

    setFormData({ ...formData, [target.name]: target.value })
  }
  const { name, number, expiry, cvc, focused, issuer } = formData

  return (
    <div key='Payment'>
      <div className='App-payment'>
        <Card
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={handleCallback}
        />

        <div className="row">

          <div className="col-6">
            <div className='form-group'>
              <small>{t("nameOnCard")}:</small>

              <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Name'
                pattern='[a-z A-Z-]+'
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className='form-group'>
              <small>{t("cardNumber")}:</small>

              <input
                type='tel'
                name='number'
                className='form-control'
                placeholder='Card Number'
                pattern='[\d| ]{16,22}'
                maxLength='19'
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>


          </div>

          <div className="col-6">

            <div className='form-group'>
              <small>{t("expiryDate")}:</small>

              <input
                type='tel'
                name='expiry'
                className='form-control'
                placeholder='Valid Thru'
                pattern='\d\d/\d\d'
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className='form-group'>
              <small>CVC:</small>

              <input
                type='tel'
                name='cvc'
                className='form-control'
                placeholder='CVC'
                pattern='\d{3}'
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
          </div>

        </div>

        <input type='hidden' name='issuer' value={issuer} />
      </div>
    </div>
  )
}

export default CreditCard