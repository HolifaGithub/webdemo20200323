import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import src from '../../image/template1.png'
import './index.css'
class TemplateItem extends Component {
    state = {
        isShowTip: false
    }
    onEditorClick(isLogin) {
        if (!isLogin) {
            this.setState({ isShowTip: true }, () => {
                setTimeout(() => {
                    this.setState({ isShowTip: false })
                }, 2000)
            })
        }
    }
    onViewClick(isLogin) {
        if (!isLogin) {
            this.setState({ isShowTip: true }, () => {
                setTimeout(() => {
                    this.setState({ isShowTip: false })
                }, 2000)
            })
        }
    }
    render() {
        const { data,isLogin } = this.props
        const {webname, cfgTitle,cfgDescribe,id } = data
        return (
            <div className="template-item">
                <img src={src} alt="" className='template-image' />
                <div className='template-main'>
                    <div className='templatte-title'>{webname}</div>
                    <div className='template-btn'>
                        {isLogin ? (<Link to={{ pathname: '/introduct', query: { type: 'editor',cfgTitle,cfgDescribe } }}>
                            <div className='editor' onClick={() => { this.onEditorClick(isLogin) }}>编辑模板</div>
                        </Link>) : <div className='editor' onClick={() => { this.onEditorClick(isLogin) }}>编辑模板</div>}
                        {isLogin ? (<Link to={{ pathname: '/introduct', query: { type: 'view' ,cfgTitle,cfgDescribe } }}>
                            <div className='view' onClick={()=>{this.onViewClick(isLogin)}}>预览模板</div>
                        </Link>) : <div className='view' onClick={()=>{this.onViewClick(isLogin)}}>预览模板</div>}
                    </div>
                </div>
                {this.state.isShowTip ? <div className='tip'>您还未登录，请先登录！</div> : null}
            </div>
        );
    }
}

export default TemplateItem;