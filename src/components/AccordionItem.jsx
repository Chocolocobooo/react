import React, { useState } from 'react'

const AccordionItem = ({item}) => {
    const [isOpen, SetIsOpen] = useState(false)

    const toggleAccordion = () => {
        SetIsOpen(!isOpen)
    }

  return (
    <div className='accordion-item'>
        <div className={ `item-titlebar ${isOpen ? 'active': ''}` } onClick={toggleAccordion}>
            <h3>{item.title}</h3>
            <div className='btn btn-accordion'>
                <i className={`item-icon fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
        </div>
        {
            isOpen && (
                <p className={ `item-content ${isOpen ? 'active': ''}` }>
                    {item.content}
                </p>
            )
        }
    </div>
  )
}

export default AccordionItem