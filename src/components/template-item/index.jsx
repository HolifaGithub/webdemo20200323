import React, { Component } from 'react'
import banner from '../../image/banner.jpg'
import './index.css'
class TemplateItem extends Component {
    onEditorClick(){
        console.log(this.props.history);
    }
    render() {
        return (
            <div className="template-item">
                   <img src={banner} alt="" className='template-image'/>
                   <div className='template-main'>
                        <div className='templatte-title'>个人简介模板</div>
                        <div className='template-btn'>
                            <div className='editor' onClick={()=>{this.onEditorClick()}}>编辑模板</div>
                            <div className='view'>预览模板</div>
                        </div>
                   </div>
            </div>
        );
    }
}

export default TemplateItem;