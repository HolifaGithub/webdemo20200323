import React, { Component } from 'react'
import './index.css'
import bg1 from '../../image/template1/template1_bg1.jpg';
import bg2 from '../../image/template1/template1_bg2.jpg';
import bg3 from '../../image/template1/template1_bg3.jpg';
import bg4 from '../../image/template1/template1_bg4.jpg';
import bg5 from '../../image/template1/template1_bg5.jpg';
import bg6 from '../../image/template1/template1_bg6.jpg';
import logo from '../../image/template1/template1-logo.png'
import Toast from '../../components/toast'
import Footer from '../../components/footer/index'
import { connect } from 'react-redux'
import '../../ihover.min.css'
import axios from 'axios'

const mapStateToProps = (state) => {
    return { state }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
class Introduct extends Component {
    state = {
        cfgTitle: 'I am Junny',
        cfgDescribe: '你好，我是Junny，来自米国的网站开发者。我对设计、开发和互动充满热情。我热衷我所做的一切。',
        webname: '',
        isView: false,
        cfgBgColor: '#ffffff',
        cfgFontColor: '#000000',
        cfgImageSrc: bg2,
        cfgOption1: '关于',
        cfgOption2: '工作',
        cfgOption3: '联系',
        moduleID: 1,
        isOther: false,
        isShow404: false,
        id:0
    }
    type = ''
    text = ''
    isFromChange=false
    
    componentWillMount() {
        this.fetchPageDatas()
    }
    fetchPageDatas(){
        const pathName = this.props.location.pathname
        const locationArray = pathName.split('/')
        let id = ''
        if (locationArray.length === 4 && locationArray[2] === 'web') {
            id = locationArray[3]
        } else {
            this.setState({ isShow404: true })
        }

        if (this.props.location.hasOwnProperty('query')) {
            if (this.props.location.query.type) {
                const type = this.props.location.query.type
                if (type === 'editor') {
                    this.setState({ isView: false })
                } else if (type === 'view') {
                    this.setState({ isView: true })
                }
            }
            if (this.props.location.query.id) {
                id = this.props.location.query.id
            }
            if(this.props.location.query.isFromChange){
                this.isFromChange=this.props.location.query.isFromChange
            }
        }
        if (id) {
            axios.get(`http://121.36.102.75:8080/web/${id}`).then(res => {
                const data = res.data
                if (data.code === 3004) {
                    const cfgList = data.cfgList[0]
                    this.setState({
                        cfgTitle: cfgList.cfgTitle,
                        cfgDescribe: cfgList.cfgDescribe,
                        webname: cfgList.webname,
                        isView: false,
                        cfgBgColor: cfgList.cfgBgColor,
                        cfgFontColor: cfgList.cfgFontColor,
                        cfgImageSrc: cfgList.cfgImageSrc,
                        cfgOption1: cfgList.cfgOption[0],
                        cfgOption2: cfgList.cfgOption[1],
                        cfgOption3: cfgList.cfgOption[2],
                        isOther: true,
                        isView: true,
                        id:id
                    })
                }
            })
        }
    }
    onNickNameChange(event) {
        this.setState({ cfgTitle: event.target.value })
    }
    onDescribeChange(event) {
        this.setState({ cfgDescribe: event.target.value })
    }
    onViewClick() {
        this.setState((prevState) => {
            return {
                isView: !prevState.isView
            }
        })
    }
    onWebNameChange(event) {
        this.setState({ webname: event.target.value })
    }

    onSubmitClick() {
        let username = this.props.state.username
        let token = this.props.state.token
        let { webname, cfgDescribe, cfgTitle, cfgBgColor, cfgFontColor, cfgImageSrc, moduleID, cfgOption1, cfgOption2, cfgOption3 } = this.state
        const cfgOption = [cfgOption1, cfgOption2, cfgOption3]
        let data = { webname, cfgDescribe, cfgTitle, cfgBgColor, cfgFontColor, cfgImageSrc, cfgOption, moduleID }
        // console.log(data);
        // axios.defaults.withCredentials=true
        axios.post(`http://121.36.102.75:8080/${token}/webcfg/commit/${username}`, data).then(res => {
            console.log(res);
            const data = res.data
            if (data.code === 3001) {
                this.type = 'success'
                this.text = '提交成功！'
                this.setState({ isShowToast: true }, () => {
                    let timer = setTimeout(() => {
                        this.setState({ isShowToast: false },()=>{
                            this.props.history.goBack()
                        })
                        clearTimeout(timer)
                    }, 1000)
                })
            } else {
                this.type = 'fail'
                this.text = '提交失败！'
                this.setState({ isShowToast: true }, () => {
                    let timer = setTimeout(() => {
                        this.setState({ isShowToast: false })
                        clearTimeout(timer)
                    }, 2000)
                })
            }
        })
        this.setState({
            webname: '',
            isView: true,
        })
    }
    onBgColorChange(event) {
        this.setState({ cfgBgColor: event.target.value })
    }
    onFontColorChange(event) {
        this.setState({ cfgFontColor: event.target.value })
    }
    onSelectBgClick(e) {
        const element = e.target;
        const selectedBg = element.getAttribute('data-name')
        this.setState({ cfgImageSrc: selectedBg })
    }
    onCfgOption1Change(event) {
        this.setState({ cfgOption1: event.target.value })
    }
    onCfgOption2Change(event) {
        this.setState({ cfgOption2: event.target.value })
    }
    onCfgOption3Change(event) {
        this.setState({ cfgOption3: event.target.value })
    }
    onSubmitChangeClick(){
        let username = this.props.state.username
        let token = this.props.state.token
        let { webname, cfgDescribe, cfgTitle, cfgBgColor, cfgFontColor, cfgImageSrc, moduleID, cfgOption1, cfgOption2, cfgOption3,id} = this.state
        const cfgOption = [cfgOption1, cfgOption2, cfgOption3]
        let data = { webname, cfgDescribe, cfgTitle, cfgBgColor, cfgFontColor, cfgImageSrc, cfgOption, moduleID,id }
        axios.post(`http://121.36.102.75:8080/${token}/webcfg/commit/${username}`, data).then(res => {
            console.log(res);
            const data = res.data
            if (data.code === 3001) {
                this.type = 'success'
                this.text = '提交修改成功！'
                this.setState({ isShowToast: true }, () => {
                    let timer = setTimeout(() => {
                        this.setState({ isShowToast: false },()=>{
                            this.props.history.goBack()
                        })
                        clearTimeout(timer)
                    }, 1000)
                })
            } else {
                this.type = 'fail'
                this.text = '提交修改失败！'
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
        // console.log(this.state.cfgDescribe,this.state.cfgTitle);
        return (
            <div>
                <div className="introduct">
                    {this.state.isView ? (<img src={this.state.cfgImageSrc} alt='' className={'left-image'}></img>) : (<div className="ih-item square colored effect15 left_to_right" style={{ width: '50%', height: '833px', animation: 'on-editor 3.5s linear 0s infinite normal ' }}>
                        <a href="javascript:void(0);">
                            <div className="img"><img src={this.state.cfgImageSrc} alt="img" style={{ width: '100%', height: '833px' }} /></div>
                            <div className="info" style={{ backgroundColor: '#333' }}>
                                <h3>选择背景图：</h3>
                                <div className='select-bg-container' onClick={(e) => { this.onSelectBgClick(e) }}>
                                    <img src={bg1} alt='' className={`select-bg ${this.state.cfgImageSrc === bg1 ? 'selected' : ''}`} data-name={bg1}></img>
                                    <img src={bg2} alt='' className={`select-bg ${this.state.cfgImageSrc === bg2 ? 'selected' : ''}`} data-name={bg2}></img>
                                    <img src={bg3} alt='' className={`select-bg ${this.state.cfgImageSrc === bg3 ? 'selected' : ''}`} data-name={bg3}></img>
                                    <img src={bg4} alt='' className={`select-bg ${this.state.cfgImageSrc === bg4 ? 'selected' : ''}`} data-name={bg4}></img>
                                    <img src={bg5} alt='' className={`select-bg ${this.state.cfgImageSrc === bg5 ? 'selected' : ''}`} data-name={bg5}></img>
                                    <img src={bg6} alt='' className={`select-bg ${this.state.cfgImageSrc === bg6 ? 'selected' : ''}`} data-name={bg6}></img>
                                </div>
                            </div>
                        </a>
                    </div>)}
                    <div className='right' style={{ backgroundColor: this.state.cfgBgColor }}>
                        <img src={logo} alt='' className='logo'></img>
                        <div className='nick-name' style={{ color: this.state.cfgFontColor }}>
                            {!this.state.isView ? (<input type='text' value={this.state.cfgTitle} onChange={(event) => { this.onNickNameChange(event) }} className='nick-name-input' style={{ color: this.state.cfgFontColor }}></input>) : <div> {this.state.cfgTitle}</div>}
                        </div>
                        <div className='describe' style={{ color: this.state.cfgFontColor }}>
                            {!this.state.isView ? (<textarea type="text" value={this.state.cfgDescribe} onChange={(event) => {
                                this.onDescribeChange(event)
                            }} className='describe-input' style={{ color: this.state.cfgFontColor }} />) : <div>{this.state.cfgDescribe}</div>}
                        </div>
                        <div className="right-bottom" style={{ color: this.state.cfgFontColor }}>
                            <div className='btn'>
                                {!this.state.isView ? (<input type='text' value={this.state.cfgOption1} className='cfg-option' onChange={(event) => { this.onCfgOption1Change(event) }}></input>) : this.state.cfgOption1}
                            </div>
                            <div className='btn'>
                                {!this.state.isView ? (<input type='text' value={this.state.cfgOption2} className='cfg-option' onChange={(event) => { this.onCfgOption2Change(event) }}></input>) : this.state.cfgOption2}
                            </div>
                            <div className='btn'>
                                {!this.state.isView ? (<input type='text' value={this.state.cfgOption3} className='cfg-option' onChange={(event) => { this.onCfgOption3Change(event) }}></input>) : this.state.cfgOption3}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
                {!this.state.isOther||this.isFromChange ? (<div className='submit-container'>
                    <div className='template-name'>
                        <div>模板名称：</div>
                        <input type="text" value={this.state.webname} onChange={(event) => {
                            this.onWebNameChange(event)
                        }} />
                    </div>
                    <div className='select-color'>
                        <div>背景颜色 ： </div>
                        <input type="color" value={this.state.cfgBgColor} onChange={(event) => { this.onBgColorChange(event) }} />
                    </div>
                    <div className='select-color'>
                        <div>字体颜色 ： </div>
                        <input type="color" value={this.state.cfgFontColor} onChange={(event) => { this.onFontColorChange(event) }} />
                    </div>
                    <div className='submit'>
                        <div className='view-btn' onClick={() => { this.onViewClick() }}>{this.state.isView ? '编辑' : '预览'}</div>
                        {!this.isFromChange ?(<div className='submit-btn' onClick={() => { this.onSubmitClick() }}>提交</div>):(<div className='submit-btn' onClick={() => { this.onSubmitChangeClick() }}>提交修改</div>)}
                    </div>
                </div>) : null}
                {this.state.isShowToast ? (<Toast type={this.type} text={this.text}></Toast>) : null}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Introduct);