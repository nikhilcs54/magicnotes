import React, { useState } from 'react'

export default function DarkandLight() {
    const [mystyle, setMystyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btnText, setBtnText] = useState("Enable Dark mode")
    
         
    const toggleStyle = () => {
        if (mystyle.color === 'black') {
            setMystyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'

            })
            setBtnText("Enable Light Mode")
        }
        else {
            setMystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode");
        }
    }
    return (
        <>
            <div className="mb-3">
                <p className='form-control' id='mybox'    style={mystyle}>
                    It is Created By Nikhil Singh
                </p>
            </div>
            <div>
                <button className="btn btn-primary" onClick={toggleStyle} type="button">{btnText}</button>
            </div>
        </>
    );
}
