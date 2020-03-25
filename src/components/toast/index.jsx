import React, { Component } from 'react'
import success from '../../image/success.png'
import fail from '../../image/fail.png'
import './index.css'
class Toast extends Component {

    render() {
        const {type,text}=this.props
        return (
            <div className="toast">
                    <img src={type==='success'?success:fail} alt="" />
                    <div>{text}</div>
            </div>
        );
    }
}

export default Toast;