import React from 'react'
import '../style/button.css'

const Button = ({content, margin}) => {

    return (
        <button className='Button' style={{ margin }}>
            {content}
        </button>
    )
}

export default Button