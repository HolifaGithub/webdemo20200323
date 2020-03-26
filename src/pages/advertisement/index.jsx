import React, { Component } from 'react'
import { connect } from 'react-redux'
import banner from '../../image/banner.jpg'
import './index.css'
import bg1 from '../../image/template3/template3_bg1.png'
import Footer from '../../components/footer'
// import axios from 'axios'

const mapStateToProps = (state) => {
    return { state }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
class Advertisement extends Component {
    state = {
    }
    render() {
        return (
            <div>
            <div className='advertisement'>
                <div class="wrapper" style={{ backgroundImage: `url(${bg1})` }}>
                    <h1>极速建站</h1>
                    <ul>
                        <li class="l1">
                            <div class="bg">
                            </div>
                            <div class="wrap">
                                <div class="ico">
                                    <img src={banner} alt='' />
                                </div>
                                <h2>企业官网设计开发</h2>
                                <dl>
                                    <dd><img src={banner} alt='' /></dd>
                                    <dd><span></span></dd>
                                    <dd><img src={banner} alt='' /></dd>
                                    <dd><span></span></dd>
                                    <dd><img src={banner} alt='' /></dd>
                                </dl>
                                <p class="desc">企业官网专属的高端定制化服务<br />
解决方案，全面满足建设核心与运行管理<br />
并提升企业品牌的有效传播。</p>
                            </div>
                            <div class="img">
                                <img src={banner} alt='' />
                            </div>
                        </li>
                        <li class="l2">
                            <div class="bg">
                            </div>
                            <div class="wrap">
                                <div class="ico">
                                    <img src={banner} alt='' />
                                </div>
                                <h2>平台功能型网站设计定制</h2>
                                <dl>
                                    <dd><img src={banner} alt='' /></dd>
                                    <dd><span></span></dd>
                                    <dd><img src={banner} alt='' /></dd>
                                    <dd><span></span></dd>
                                    <dd><img src={banner} alt='' /></dd>
                                </dl>
                                <p class="desc">皇室科技凭借多年的行业经验与专业团队<br />
让各知名行业门户脱颖而出<br />
从满足预期到走向卓越。</p>
                            </div>
                            <div class="img">
                                <img src={banner} />
                            </div>
                        </li>
                        <li class="l3">
                            <div class="bg">
                            </div>
                            <div class="wrap">
                                <div class="ico">
                                    <img src={banner} alt='' />
                                </div>
                                <h2>HTML5响应式网站开发</h2>
                                <dl>
                                    <dd><img src={banner} alt='' /></dd>
                                    <dd><span></span></dd>
                                    <dd><img src={banner} alt='' /></dd>
                                    <dd><span></span></dd>
                                    <dd><img src={banner} alt='' /></dd>
                                </dl>
                                <p class="desc">HTML5+CSS3设计制作同时兼容<br />
手机、IPAD等触屏设备分辨率，达到最优<br />
访问效果，网站数据同步各终端。</p>
                            </div>
                            <div class="img">
                                <img src={banner} alt='' />
                            </div>
                        </li>
                        <li class="l4">
                            <div class="bg">
                            </div>
                            <div class="wrap">
                                <div class="ico">
                                    <img src={banner} alt='' />
                                </div>
                                <h2>移动端手机网站与APP</h2>
                                <dl>
                                    <dd><img src={banner} alt='' /></dd>
                                    <dd><span></span></dd>
                                    <dd><img src={banner} alt='' /></dd>
                                    <dd><span></span></dd>
                                    <dd><img src={banner} alt='' /></dd>
                                </dl>
                                <p class="desc">专注移动端手机网站设计、微网站开发、<br />APP定制开发，创造有活力的品牌网站，<br />提升用户体验和品牌价值感。</p>
                            </div>
                            <div class="img">
                                <img src={banner} alt='' />
                            </div>
                        </li>
                    </ul>
                </div>
            </div >
            <Footer></Footer>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Advertisement);