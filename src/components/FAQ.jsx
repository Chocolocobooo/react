import React, { useEffect, useState } from 'react'
import AccordionItem from './AccordionItem'



const FAQ = () => {
    const [accordions, setAccordions] = useState([])

    const fetchFAQ = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await res.json()
        setAccordions(data)
    }

    useEffect(() => {
        fetchFAQ()
    }, [])

  return (
    <section aria-label="faq" className="faq">
        <div className="container">
            <div className='first-column'>
                <h2>Any questions? <br/> Check out the FAQs</h2>
                <p>Still have unanswered questions and need to get in touch?</p>
                <div className='contact-options'>
                    <div className='optionphone'>
                        <i className='fa-solid fa-phone-volume'></i>
                        <p>Still have questions?</p>
                        <a href="#">Contact us <i className='fa-solid fa-arrow-right'></i></a>
                    </div>
                    <div className='optionchat'>
                        <i className='fa-solid fa-comment-dots fa-flip-horizontal'></i>
                        <p>Don't like phone calls?</p>
                        <a href="#">Contact us <i className='fa-solid fa-arrow-right'></i></a>
                    </div>
                </div>
            </div>

            <div className='second-column'>
            {
                accordions.map(item =>(
                    <AccordionItem key={item.id} item={item}/>
                ))
            }
            </div>

            <a href="a" className="btn btn-contact">
                <span>Contact us now</span>
            </a>
        </div>
     </section>
  )
}

export default FAQ