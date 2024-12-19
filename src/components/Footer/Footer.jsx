import { Footer } from 'antd/es/layout/layout'
import React from 'react'
import '../style.scss'
 
 
const Footers = () => {
    return (
        <Footer
            style={{
                textAlign: 'center',
                background: '#fff',  // Light background for footer
                color: 'black',  // Text color for visibility
            }}
        >
               ©{new Date().getFullYear()} Created by TreeMix 
        </Footer>
    )
}

export default Footers
