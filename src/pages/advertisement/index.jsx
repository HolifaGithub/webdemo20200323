import React, { Component } from 'react'
import { connect } from 'react-redux'
import banner from '../../image/banner.jpg'
import './index.css'
import bg1 from '../../image/template3/template3_bg1.png'
import bootom1 from '../../image/template3/bottom1.png'
import bootom2 from '../../image/template3/bottom2.png'
import bootom3 from '../../image/template3/bottom3.png'
import bootom4 from '../../image/template3/bottom4.png'
import computer from '../../image/template3/computer.png'
import light from '../../image/template3/light.png'
import mouse from '../../image/template3/mouse.png'
import phone from '../../image/template3/phone.png'
import Footer from '../../components/footer'
import '../../ihover.min.css'
import Toast from '../../components/toast'
import axios from 'axios'

const mapStateToProps = (state) => {
    return { state }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
class Advertisement extends Component {
    state = {
        moduleID: 3,
        webname: '',
        cfgBgColor: '#203A4F',
        cfgFontColor: '#ffffff',
        cfgTitle: '极速建站',
        cfgMain: [{ cfgSub: '企业官网设计开发', cfgDescribe: '企业官网专属的高端定制化服务,解决方案，全面满足建设核心与运行管理,并提升企业品牌的有效传播。' }, { cfgSub: '平台功能型网站设计定制', cfgDescribe: '凭借多年的行业经验与专业团队,让各知名行业门户脱颖而出,从满足预期到走向卓越。' }, { cfgSub: 'HTML5响应式网站开发', cfgDescribe: 'HTML5+CSS3设计制作同时兼容,手机、IPAD等触屏设备分辨率，达到最优,访问效果，网站数据同步各终端。' }, { cfgSub: '移动端手机网站与APP', cfgDescribe: '专注移动端手机网站设计、微网站开发、APP定制开发，创造有活力的品牌网站，提升用户体验和品牌价值感。' }],
        isView: false,
        isShowToast:false
    }
    onCfgTitleChange(event) {
        this.setState({ cfgTitle: event.target.value })
    }
    onCfgBgColorChange(event) {
        this.setState({ cfgBgColor: event.target.value })
    }
    onCfgSub1Change(event) {
        const value = event.target.value
        this.setState((prevState) => {
            prevState.cfgMain[0].cfgSub = value
            return {
                cfgMain: prevState.cfgMain
            }
        })
    }
    onCfgSub2Change(event) {
        const value = event.target.value
        this.setState((prevState) => {
            prevState.cfgMain[1].cfgSub = value
            return {
                cfgMain: prevState.cfgMain
            }
        })
    }
    onCfgSub3Change(event) {
        const value = event.target.value
        this.setState((prevState) => {
            prevState.cfgMain[2].cfgSub = value
            return {
                cfgMain: prevState.cfgMain
            }
        })
    }
    onCfgSub4Change(event) {
        const value = event.target.value
        this.setState((prevState) => {
            prevState.cfgMain[3].cfgSub = value
            return {
                cfgMain: prevState.cfgMain
            }
        })
    }
    onCfgDescribe1Change(event) {
        const value = event.target.value
        this.setState((prevState) => {
            prevState.cfgMain[0].cfgDescribe = value
            return {
                cfgMain: prevState.cfgMain
            }
        })
    }
    onCfgDescribe2Change(event) {
        const value = event.target.value
        this.setState((prevState) => {
            prevState.cfgMain[1].cfgDescribe = value
            return {
                cfgMain: prevState.cfgMain
            }
        })
    }
    onCfgDescribe3Change(event) {
        const value = event.target.value
        this.setState((prevState) => {
            prevState.cfgMain[2].cfgDescribe = value
            return {
                cfgMain: prevState.cfgMain
            }
        })
    }
    onCfgDescribe4Change(event) {
        const value = event.target.value
        this.setState((prevState) => {
            prevState.cfgMain[3].cfgDescribe = value
            return {
                cfgMain: prevState.cfgMain
            }
        })
    }
    onWebNameChange(event){
        this.setState({webname:event.target.value})
    }
    onViewClick(){
        this.setState((prevState)=>{
            return {
                isView:!prevState.isView
            }
        })
    }
    onSubmitClick(){
        let username = this.props.state.username
        let token = this.props.state.token
        let { webname, moduleID,cfgBgColor,cfgFontColor,cfgTitle,cfgMain} = this.state
        let data = { webname,  moduleID,cfgBgColor,cfgFontColor,cfgTitle,cfgMain}
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
    render() {
        return (
            <div>
                <div className='advertisement'>
                    <div class="wrapper" style={{ backgroundImage: `url(${bg1})` }}>
                        {this.state.isView ? (<h1>{this.state.cfgTitle}</h1>) : (
                            <div class="ih-item square effect10 left_to_right" style={{ width: '100%', height: '120px' }}>
                                <a href="javascript:void(0);">
                                    <div class="img">
                                        <h1 className='on-editor' style={{ background: this.state.cfgBgColor }}>{this.state.cfgTitle}</h1>
                                    </div>
                                    <div class="info">
                                        <div class="info-back title-editor">
                                            <span>标题：</span>
                                            <input type="text" onChange={(event) => {
                                                event.persist()
                                                this.onCfgTitleChange(event)
                                            }} value={this.state.cfgTitle} />
                                            <span>背景色：</span>
                                            <input type="color" value={this.state.cfgBgColor} onChange={(event) => {
                                                event.persist()
                                                this.onCfgBgColorChange(event)
                                            }} />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )}
                        <ul>
                            <li class="l1">
                                <div class="bg">
                                </div>
                                <div class="wrap">
                                    <div class="ico">
                                        <img src={computer} alt='' />
                                    </div>
                                    {this.state.isView ? (<h2>{this.state.cfgMain[0].cfgSub}</h2>) : (<input type='text' value={this.state.cfgMain[0].cfgSub} onChange={(event) => {
                                        event.persist()
                                        this.onCfgSub1Change(event)
                                    }} className='on-editor'></input>)}
                                    <dl>
                                        <dd><img src={bootom1} alt='' /></dd>
                                        <dd><span></span></dd>
                                        <dd><img src={bootom1} alt='' /></dd>
                                        <dd><span></span></dd>
                                        <dd><img src={bootom1} alt='' /></dd>
                                    </dl>
                                    {this.state.isView ? (<p className='desc'>{this.state.cfgMain[0].cfgDescribe}</p>) : (<textarea type='text' value={this.state.cfgMain[0].cfgDescribe} onChange={(event) => {
                                        event.persist()
                                        this.onCfgDescribe1Change(event)
                                    }} className='on-editor'></textarea>)}
                                </div>
                                <div className="img">
                                    <img src={bootom1} alt='' />
                                </div>
                            </li>
                            <li className="l2">
                                <div className="bg">
                                </div>
                                <div className="wrap">
                                    <div className="ico">
                                        <img src={light} alt='' />
                                    </div>
                                    {this.state.isView ? (<h2>{this.state.cfgMain[1].cfgSub}</h2>) : (<input type='text' value={this.state.cfgMain[1].cfgSub} onChange={(event) => {
                                        event.persist()
                                        this.onCfgSub2Change(event)
                                    }} className='on-editor'></input>)}
                                    <dl>
                                        <dd><img src={bootom2} alt='' /></dd>
                                        <dd><span></span></dd>
                                        <dd><img src={bootom2} alt='' /></dd>
                                        <dd><span></span></dd>
                                        <dd><img src={bootom2} alt='' /></dd>
                                    </dl>
                                    {this.state.isView ? (<p className='desc'>{this.state.cfgMain[1].cfgDescribe}</p>) : (<textarea type='text' value={this.state.cfgMain[1].cfgDescribe} onChange={(event) => {
                                        event.persist()
                                        this.onCfgDescribe2Change(event)
                                    }} className='on-editor'></textarea>)}
                                </div>
                                <div class="img">
                                    <img src={bootom2} />
                                </div>
                            </li>
                            <li class="l3">
                                <div class="bg">
                                </div>
                                <div class="wrap">
                                    <div class="ico">
                                        <img src={mouse} alt='' />
                                    </div>
                                    {this.state.isView ? (<h2>{this.state.cfgMain[2].cfgSub}</h2>) : (<input type='text' value={this.state.cfgMain[2].cfgSub} onChange={(event) => {
                                        event.persist()
                                        this.onCfgSub3Change(event)
                                    }} className='on-editor'></input>)}
                                    <dl>
                                        <dd><img src={bootom3} alt='' /></dd>
                                        <dd><span></span></dd>
                                        <dd><img src={bootom3} alt='' /></dd>
                                        <dd><span></span></dd>
                                        <dd><img src={bootom3} alt='' /></dd>
                                    </dl>
                                    {this.state.isView ? (<p className='desc'>{this.state.cfgMain[2].cfgDescribe}</p>) : (<textarea type='text' value={this.state.cfgMain[2].cfgDescribe} onChange={(event) => {
                                        event.persist()
                                        this.onCfgDescribe3Change(event)
                                    }} className='on-editor'></textarea>)}
                                </div>
                                <div class="img">
                                    <img src={bootom3} alt='' />
                                </div>
                            </li>
                            <li class="l4">
                                <div class="bg">
                                </div>
                                <div class="wrap">
                                    <div class="ico">
                                        <img src={phone} alt='' />
                                    </div>
                                    {this.state.isView ? (<h2>{this.state.cfgMain[3].cfgSub}</h2>) : (<input type='text' value={this.state.cfgMain[3].cfgSub} onChange={(event) => {
                                        event.persist()
                                        this.onCfgSub3Change(event)
                                    }} className='on-editor'></input>)}
                                    <dl>
                                        <dd><img src={bootom4} alt='' /></dd>
                                        <dd><span></span></dd>
                                        <dd><img src={bootom4} alt='' /></dd>
                                        <dd><span></span></dd>
                                        <dd><img src={bootom4} alt='' /></dd>
                                    </dl>
                                    {this.state.isView ? (<p className='desc'>{this.state.cfgMain[3].cfgDescribe}</p>) : (<textarea type='text' value={this.state.cfgMain[3].cfgDescribe} onChange={(event) => {
                                        event.persist()
                                        this.onCfgDescribe4Change(event)
                                    }} className='on-editor'></textarea>)}
                                </div>
                                <div class="img">
                                    <img src={bootom4} alt='' />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id='advertisement-submit'>
                        <div className='advertisement-template-name'>
                            <span>模板名：</span>
                            <input type="text" value={this.state.webname} onChange={(event) => {
                                event.persist()
                                this.onWebNameChange(event)
                            }} />
                        </div>
                        <div className='advertisement-btn'>
                            <div className='view' onClick={()=>{this.onViewClick()}}>{this.state.isView ? '编辑' : '预览'}</div>
                            <div className='submit' onClick={()=>{this.onSubmitClick()}}>提交</div>
                        </div>
                    </div>
                </div >
                <Footer></Footer>
                {this.state.isShowToast ? (<Toast type={this.type} text={this.text}></Toast>) : null}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Advertisement);