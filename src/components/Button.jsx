import React from 'react'
import '../style/button.css'

const Button = ({content, margin, onClick}) => {

    return (
        <button className='Button' style={{ margin }} onClick={onClick} >
            {content}
        </button>
    )
}

export default Button