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
        cfgTitle: 'Junny',
        cfgDescribe: '你好，我是Junny，来自米国的网站开发者。我对设计、开发和互动充满热情。我热衷我所做的一切。',
        webname: '',
        isView: false,
        bgColor: '#ffffff',
        fontColor: '#000000',
        seletedBg: bg1
    }
    type = ''
    text = ''
    componentDidMount() {
        // if (this.props.location.query.type) {
        //     const type = this.props.location.query.type
        //     if (type === 'editor') {
        //         this.setState({ isView: false })
        //     } else if (type === 'view') {
        //         this.setState({ isView: true })
        //     }
        // }
        // if (this.props.location.query.cfgTitle) {
        //     this.setState({ cfgTitle: this.props.location.query.cfgTitle })
        // }
        // if (this.props.location.query.cfgDescribe) {
        //     this.setState({ cfgDescribe: this.props.location.query.cfgDescribe })
        // }
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
        let { webname, cfgDescribe, cfgTitle } = this.state
        let data = { webname, cfgDescribe, cfgTitle }
        // console.log(data);
        // axios.defaults.withCredentials=true
        axios.post(`http://121.36.102.75:8080/${token}/webcfg/commit/${username}`, data).then(res => {
            // console.log(res);
            const data = res.data
            if (data.code === 3001) {
                this.type = 'success'
                this.text = '提交成功！'
                this.setState({ isShowToast: true }, () => {
                    let timer = setTimeout(() => {
                        this.setState({ isShowToast: false })
                        clearTimeout(timer)
                    }, 2000)
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
        this.setState({ bgColor: event.target.value })
    }
    onFontColorChange(event) {
        this.setState({ fontColor: event.target.value })
    }
    onSelectBgClick(e) {
        const element = e.target;
        const selectedBg = element.getAttribute('data-name')
        this.setState({ seletedBg: selectedBg })
    }
    render() {
        // console.log(this.state.cfgDescribe,this.state.cfgTitle);
        return (
            <div>
                <div className="introduct">
                    {this.state.isView ? (<img src={this.state.seletedBg} alt='' className={'left-image'}></img>) : (<div className="ih-item square colored effect15 left_to_right" style={{ width: '50%', height: '833px', border: '2px solid red' }}>
                        <a href="javascript:void(0);">
                            <div className="img"><img src={this.state.seletedBg} alt="img" style={{ width: '100%', height: '833px' }} /></div>
                            <div className="info" style={{ backgroundColor: '#333' }}>
                                <h3>选择背景图：</h3>
                                <div className='select-bg-container' onClick={(e) => { this.onSelectBgClick(e) }}>
                                    <img src={bg1} alt='' className={`select-bg ${this.state.seletedBg === bg1 ? 'selected' : ''}`} data-name={bg1}></img>
                                    <img src={bg2} alt='' className={`select-bg ${this.state.seletedBg === bg2 ? 'selected' : ''}`} data-name={bg2}></img>
                                    <img src={bg3} alt='' className={`select-bg ${this.state.seletedBg === bg3 ? 'selected' : ''}`} data-name={bg3}></img>
                                    <img src={bg4} alt='' className={`select-bg ${this.state.seletedBg === bg4 ? 'selected' : ''}`} data-name={bg4}></img>
                                    <img src={bg5} alt='' className={`select-bg ${this.state.seletedBg === bg5 ? 'selected' : ''}`} data-name={bg5}></img>
                                    <img src={bg6} alt='' className={`select-bg ${this.state.seletedBg === bg6 ? 'selected' : ''}`} data-name={bg6}></img>
                                </div>
                            </div>
                        </a>
                    </div>)}
                    <div className='right' style={{ backgroundColor: this.state.bgColor }}>
                        <img src={logo} alt='' className='logo'></img>
                        <div className='nick-name' style={{ color: this.state.fontColor }}>I am {this.state.isView ? this.state.cfgTitle : ''}
                            {!this.state.isView ? (<input type='text' value={this.state.cfgTitle} onChange={(event) => { this.onNickNameChange(event) }} className='nick-name-input'></input>) : null}
                        </div>
                        <div className='describe' style={{ color: this.state.fontColor }}>
                            {this.state.isView ? this.state.cfgDescribe : ''}
                            {!this.state.isView ? (<textarea type="text" value={this.state.cfgDescribe} onChange={(event) => {
                                this.onDescribeChange(event)
                            }} className='describe-input' />) : null}
                        </div>
                        <div className="right-bottom" style={{ color: this.state.fontColor }}>
                            <div id="about" className='btn'>关于</div>
                            <div id="work" className='btn'>工作</div>
                            <div id="contact" className='btn'>联系</div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
                <div className='submit-container'>
                    <div className='template-name'>
                        <div>模板名称：</div>
                        <input type="text" value={this.state.webname} onChange={(event) => {
                            this.onWebNameChange(event)
                        }} />
                    </div>
                    <div className='select-color'>
                        <div>背景颜色 ： </div>
                        <input type="color" value={this.state.bgColor} onChange={(event) => { this.onBgColorChange(event) }} />
                    </div>
                    <div className='select-color'>
                        <div>字体颜色 ： </div>
                        <input type="color" value={this.state.fontColor} onChange={(event) => { this.onFontColorChange(event) }} />
                    </div>
                    <div className='submit'>
                        <div className='view-btn' onClick={() => { this.onViewClick() }}>{this.state.isView ? '编辑' : '预览'}</div>
                        <div className='submit-btn' onClick={() => { this.onSubmitClick() }}>提交</div>
                    </div>
                </div>
                {this.state.isShowToast ? (<Toast type={this.type} text={this.text}></Toast>) : null}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Introduct);