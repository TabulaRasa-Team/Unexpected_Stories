import React from 'react'
import '../style/button.css'

const Button = ({content}) => {

    return (
        <button className='Button'>
            {content}
        </button>
    )
}

export default Button