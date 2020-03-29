import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Toast from '../toast'
import { connect } from 'react-redux'
import { refetchMyTemplateDatas} from '../../action'
import './index.css'
const mapStateToProps = (state) => {
    return { state }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchRefetchMyTemplateDatas(){
            return dispatch(refetchMyTemplateDatas())
          }
    }
}
class TemplateItem extends Component {
    state = {
        isShowTip: false,
        isShowToast:false
    }
    type=''
    text=''
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
    onDeleteTemplateClick(id){
        let username = this.props.state.username
        let token = this.props.state.token
        axios.delete(`http://121.36.102.75:8080/${token}/webcfg/delete/${id}/${username}`).then(res => {
            console.log(res);
            const data = res.data
            if (data.code === 3005) {
                this.type = 'success'
                this.text = '删除成功！'
                this.setState({ isShowToast: true }, () => {
                    let timer = setTimeout(() => {
                        this.setState({ isShowToast: false })
                        this.props.dispatchRefetchMyTemplateDatas()
                        clearTimeout(timer)
                    }, 1000)
                })
            } else {
                this.type = 'fail'
                this.text = '删除失败！'
                this.setState({ isShowToast: true }, () => {
                    let timer = setTimeout(() => {
                        this.setState({ isShowToast: false })
                        clearTimeout(timer)
                    }, 2000)
                })
            }
        })
    }
    render() {
        const { data, isLogin } = this.props
        const { webname, id, templateSrc, path } = data
        return (
            <div className="template-item">
                <img src={templateSrc} alt="" className='template-image' />
                <div className='template-main'>
                    <div className='templatte-title'>{webname}</div>
                    <div className='template-btn'>
                        {id ? (<Link to={{ pathname: path, query: { type: 'editor', id,isFromChange:true } }}>
                            <div className='change-template'>修改模板</div>
                        </Link>) : (<div>
                            {isLogin ? (<Link to={{ pathname: path, query: { type: 'editor', id } }}>
                                <div className='editor' onClick={() => { this.onEditorClick(isLogin) }}>编辑模板</div>
                            </Link>) : <div className='editor' onClick={() => { this.onEditorClick(isLogin) }}>编辑模板</div>}
                        </div>)}
                        {isLogin ? (<Link to={{ pathname: path, query: { type: 'view', id } }}>
                            <div className='view' onClick={() => { this.onViewClick(isLogin) }}>预览模板</div>
                        </Link>) : <div className='view' onClick={() => { this.onViewClick(isLogin) }}>预览模板</div>}
                        {
                            id ? (<div className='delete-template' onClick={()=>{this.onDeleteTemplateClick(id)}}>删除模板</div>) : null
                        }
                    </div>
                </div>
                {this.state.isShowTip ? <div className='tip'>您还未登录，请先登录！</div> : null}
                {id ? (<div id='template-id'>模板ID:{id}</div>) : null}
                {this.state.isShowToast ? (<Toast type={this.type} text={this.text}></Toast>) : null}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateItem);