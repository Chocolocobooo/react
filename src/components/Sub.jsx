import React, { useState } from 'react'

const Sub = () => {
  const [formData, setFormData] = useState({ email: ''})
  const [error, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { email } = e.target
    setFormData({...formData, [email]: value})

    if (value.trim() === '') {
      setErrors(prevErrors => ({...prevErrors, [email]: `The ${email} field is required`}))
    } else {
      setErrors(prevErrors => ({...prevErrors, [email]: ''}))
    }
  }

  const handleOk = () => {
    setSubmitted(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}
    Object.keys(formData).forEach(field => {
      if (formData[field].trim()=== '') {
        newErrors[field] = `The ${email} field is required`
        
      }
    })

    if (Objects.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }



    const res = await fetch ('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
      method: 'post', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringfy(formData)
    })

    if (res.ok) {
      setSubmitted(true)
      setFormData({ email: '' })
    } 
      
  }

  if (submitted) {
    return (
      <div className='infobox'>
        <h1>Thank you for subscribing!</h1>
        <button className='btn-green' onClick={handleOk}>OK</button>
      </div>
    )
  }

  return (
    <section aria-label="subscribe" className="subscribe">
        <div className="content">
          <img className='bell' src="Resources/notification-icon-1.svg fill.svg" alt=""/>
          <h2>Subscribe to our newsletter to stay <br /> informed about latest updates</h2>

          <form onSubmit={handleSubmit} noValidate className="body">
            <div className='input-group'>
              <i className="fa-regular fa-envelope icon"></i>
              <input className="form-input email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Your Email"/>
              <span>{error.email && errors.email}</span>
              <button className="btn" type='submit'>Subscribe</button> 
            </div>
                                     

          </form>

        </div>
    </section>
  )
}

export default Sub