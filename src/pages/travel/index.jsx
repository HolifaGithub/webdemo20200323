import React, { Component } from 'react'
import './index.css'
import Footer from '../../components/footer/index'
import { connect } from 'react-redux'
import '../../static/css/slide/normalize.css'
import '../../static/css/slide/demo.css'
import '../../static/css/slide/style.css'
import '../../static/css/main/bootstrap.css'
import '../../static/css/main/style.css'
import '../../static/css/main/font-awesome.min.css'
import logo from '../../static/images/logo.png'
// import topBackGroundImage from '../../static/images/1.jpg'
import banner1 from "../../static/images/1.jpg"
import banner2 from "../../static/images/2.jpg"
import banner3 from "../../static/images/3.jpg"
import banner4 from "../../static/images/4.jpg"
import banner5 from "../../static/images/5.jpg"
import bg1 from '../../image/template2/template2_bg1.jpg'
import Slider from '../../static/js/index'
import '../../ihover.min.css'
// import axios from 'axios'

const mapStateToProps = (state) => {
    return { state }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}


class Travel extends Component {
    state = {
        webname: '',
        moduleID: 2,
        cfgContent1: '旅游日记',
        cfgContent2: '地名：新疆',
        cfgContent3: 'TO --- 旅游爱好者',
        cfgContent4: '世界那么大，我想去看看。',
        cfgImageSrc: bg1,
        cfgFontColor: '#ffffff',
        cfgMain: [{
            cfgSub: '穿过丛林',
            cfgDescribe: '“穿越丛林，披荆斩棘”'
        }, {
            cfgSub: '湖泊',
            cfgDescribe: '“我曾经跨过山河大海，也穿过人山人海”'
        }, {
            cfgSub: '悬崖',
            cfgDescribe: '“悬崖勒马，为时未晚”'
        }, {
            cfgSub: '山峰',
            cfgDescribe: '“会当凌绝顶，一览众山小”'
        }, {
            cfgSub: '原野',
            cfgDescribe: '“野火烧不尽，春风吹又生”'
        }],
        isView: false
    }
    componentDidMount() {
        // var sliderEl = document.getElementById('slider');
        // var slider = new Slider(sliderEl);

        // // ------------------ Demo stuff ------------------------ //

        // var timer = 0;

        // function autoSlide() {
        //     requestAnimationFrame(function () {
        //         slider.next();
        //     });

        //     timer = setTimeout(autoSlide, 5000);
        // }

        // function stopAutoSlide() {
        //     clearTimeout(timer);

        //     this.removeEventListener('touchstart', stopAutoSlide);
        //     this.removeEventListener('mousemove', stopAutoSlide);
        // }
        // sliderEl.addEventListener('mousemove', stopAutoSlide);
        // sliderEl.addEventListener('touchstart', stopAutoSlide)
        // timer = setTimeout(autoSlide, 2000);
    }
    componentDidUpdate() {
        var _sliderEl = document.getElementById('slider');
        if (_sliderEl) {
            var slider = new Slider(_sliderEl);

            // ------------------ Demo stuff ------------------------ //

            var timer = 0;

            function autoSlide() {
                requestAnimationFrame(function () {
                    slider.next();
                });

                timer = setTimeout(autoSlide, 5000);
            }

            function stopAutoSlide() {
                clearTimeout(timer);

                this.removeEventListener('touchstart', stopAutoSlide);
                this.removeEventListener('mousemove', stopAutoSlide);
            }
            _sliderEl.addEventListener('mousemove', stopAutoSlide);
            _sliderEl.addEventListener('touchstart', stopAutoSlide)
            timer = setTimeout(autoSlide, 2000);
        }
    }
    onCfgContent1Change(event) {
        this.setState({ cfgContent1: event.target.value })
    }
    onCfgContent2Change(event) {
        this.setState({ cfgContent2: event.target.value })
    }
    onCfgContent3Change(event) {
        this.setState({ cfgContent3: event.target.value })
    }
    onCfgContent4Change(event) {
        this.setState({ cfgContent4: event.target.value })
    }
    onCfgFontColorChange(event) {
        this.setState({ cfgFontColor: event.target.value })
    }
    onCfgImageSrcClick(e) {
        const element = e.target
        const selectedImageSrc = element.getAttribute('data-name')
        this.setState({ cfgImageSrc: selectedImageSrc })
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
    onCfgDescribe1Change(event) {
        const value = event.target.value
        this.setState((prevState) => {
            prevState.cfgMain[0].cfgDescribe = value
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
    onCfgDescribe2Change(event) {
        const value = event.target.value
        this.setState((prevState) => {
            prevState.cfgMain[1].cfgDescribe = value
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
    onCfgDescribe3Change(event) {
        const value = event.target.value
        this.setState((prevState) => {
            prevState.cfgMain[2].cfgDescribe = value
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
    onCfgDescribe4Change(event) {
        const value = event.target.value
        this.setState((prevState) => {
            prevState.cfgMain[3].cfgDescribe = value
            return {
                cfgMain: prevState.cfgMain
            }
        })
    }
    onCfgSub5Change(event) {
        const value = event.target.value
        this.setState((prevState) => {
            prevState.cfgMain[4].cfgSub = value
            return {
                cfgMain: prevState.cfgMain
            }
        })
    }
    onCfgDescribe5Change(event) {
        const value = event.target.value
        this.setState((prevState) => {
            prevState.cfgMain[4].cfgDescribe = value
            return {
                cfgMain: prevState.cfgMain
            }
        })
    }
    onTemplateNameChange(event) {
        this.setState({ webname: event.target.value })
    }
    onViewClick() {
        this.setState((prevState) => {
            return {
                isView: !prevState.isView
            }
        })
    }
    onSubmitClick(){
        console.log(this.state);
    }
    render() {
        return (
            <div className={`${this.state.isView ? '' : 'on-editor'}`}>
                {this.state.isView ? (<div>
                    <header>
                        <nav className="navbar">
                            <div className="container">
                                <h1 className="wthree-logo">
                                    <a href="main.html" id="logoLink"><img src={logo} alt='' /></a>
                                </h1>
                                {/* <ul id="menu" >
                                <li>
                                    <input id="check02" type="checkbox" name="menu" />
                                    <label htmlFor="check02"><span className="fa fa-bars" aria-hidden="true"></span></label>
                                    <ul className="submenu">
                                        <li><a href="index.html" className="active">主页</a></li>
                                        <li><a href="#about">关于我</a></li>
                                        <li><a href="#services">我的关键词</a></li>
                                        <li><a href="#experience">我的经历</a></li>
                                        <li><a href="#portfolio">照片</a></li>
                                        <li><a href="#testimonials">他人评价</a></li>
                                        <li><a href="#contact">联系我</a></li>
                                    </ul>
                                </li>
                            </ul> */}

                            </div>
                        </nav>
                    </header>
                    <div style={{ backgroundColor: 'green', zIndex: '99999' }}>
                        <div id="home" className="banner-w3pvt d-flex" style={{ backgroundImage: `url(${this.state.cfgImageSrc})` }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 bnr-txt-w3pvt">
                                        <div className="bnr-w3pvt-txt mt-sm-5">
                                            <h6 className={`${this.state.isView ? '' : 'on-editor'}`} style={{ color: this.state.cfgFontColor }}>{this.state.cfgContent1}</h6>
                                            <h2 className={`${this.state.isView ? '' : 'on-editor'}`} style={{ color: this.state.cfgFontColor }}><span>{this.state.cfgContent2}</span></h2><br />
                                            <h4 className={`${this.state.isView ? '' : 'on-editor'}`} style={{ color: this.state.cfgFontColor }}>{this.state.cfgContent3}</h4>
                                            <p className="mt-4" className={`${this.state.isView ? '' : 'on-editor'}`} style={{ color: this.state.cfgFontColor }}>{this.state.cfgContent4}</p>
                                            <ul className="social_section_1info mt-4">
                                                <li className="mb-2 wechat"><a href="javascript:void(0);"><span className="fa fa-wechat"></span></a></li>
                                                <li className="mb-2 github"><a href="javascript:void(0);"><span className="fa fa-github"></span></a></li>
                                                <li className="linkedin"><a href="javascript:void(0);"><span className="fa fa-linkedin"></span></a></li>
                                                <li className="qq"><a href="javascript:void(0);"><span className="fa fa-qq"></span></a></li>
                                            </ul>
                                            <a href="#about" className="scroll bnr-btn mr-2">更多 </a>
                                            <a href="#contact" className="scroll bnr-btn1">联系我 </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : (<div class="ih-item square effect1 top_to_bottom" style={{ width: '100%', height: '670px' }}><a href="javascript:void(0);">
                    <div class="img" style={{ width: '100%' }}>
                        <div>
                            <header>
                                <nav className="navbar">
                                    <div className="container">
                                        <h1 className="wthree-logo">
                                            <a href="main.html" id="logoLink"><img src={logo} alt='' /></a>
                                        </h1>
                                        {/* <ul id="menu" >
                                <li>
                                    <input id="check02" type="checkbox" name="menu" />
                                    <label htmlFor="check02"><span className="fa fa-bars" aria-hidden="true"></span></label>
                                    <ul className="submenu">
                                        <li><a href="index.html" className="active">主页</a></li>
                                        <li><a href="#about">关于我</a></li>
                                        <li><a href="#services">我的关键词</a></li>
                                        <li><a href="#experience">我的经历</a></li>
                                        <li><a href="#portfolio">照片</a></li>
                                        <li><a href="#testimonials">他人评价</a></li>
                                        <li><a href="#contact">联系我</a></li>
                                    </ul>
                                </li>
                            </ul> */}

                                    </div>
                                </nav>
                            </header>
                            <div style={{ backgroundColor: 'green', zIndex: '99999' }}>
                                <div id="home" className="banner-w3pvt d-flex" style={{ backgroundImage: `url(${this.state.cfgImageSrc})` }}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-7 bnr-txt-w3pvt">
                                                <div className="bnr-w3pvt-txt mt-sm-5">
                                                    <h6 className={`${this.state.isView ? '' : 'on-editor'}`} style={{ color: this.state.cfgFontColor }}>{this.state.cfgContent1}</h6>
                                                    <h2 className={`${this.state.isView ? '' : 'on-editor'}`} style={{ color: this.state.cfgFontColor }}><span>{this.state.cfgContent2}</span></h2><br />
                                                    <h4 className={`${this.state.isView ? '' : 'on-editor'}`} style={{ color: this.state.cfgFontColor }}>{this.state.cfgContent3}</h4>
                                                    <p className="mt-4" className={`${this.state.isView ? '' : 'on-editor'}`} style={{ color: this.state.cfgFontColor }}>{this.state.cfgContent4}</p>
                                                    <ul className="social_section_1info mt-4">
                                                        <li className="mb-2 wechat"><a href="javascript:void(0);"><span className="fa fa-wechat"></span></a></li>
                                                        <li className="mb-2 github"><a href="javascript:void(0);"><span className="fa fa-github"></span></a></li>
                                                        <li className="linkedin"><a href="javascript:void(0);"><span className="fa fa-linkedin"></span></a></li>
                                                        <li className="qq"><a href="javascript:void(0);"><span className="fa fa-qq"></span></a></li>
                                                    </ul>
                                                    <a href="#about" className="scroll bnr-btn mr-2">更多 </a>
                                                    <a href="#contact" className="scroll bnr-btn1">联系我 </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="info select-container">
                        <h3>自定义属性：</h3>
                        <p>Defined By Youself</p>
                        <div className='select-content'>
                            <input type="text" value={this.state.cfgContent1} onChange={(event) => { this.onCfgContent1Change(event) }} className='cfg-content' />
                            <input type="text" value={this.state.cfgContent2} onChange={(event) => { this.onCfgContent2Change(event) }} className='cfg-content' />
                            <input type="text" value={this.state.cfgContent3} onChange={(event) => { this.onCfgContent3Change(event) }} className='cfg-content' />
                            <input type="text" value={this.state.cfgContent4} onChange={(event) => { this.onCfgContent4Change(event) }} className='cfg-content' />
                            <div className='cfg-bg-color'>
                                <div>请选择字体颜色：</div>
                                <input type="color" onChange={(event) => { this.onCfgFontColorChange(event) }} />
                            </div>
                            <div className='cfg-image-src' onClick={(e) => { this.onCfgImageSrcClick(e) }}>
                                <img src={bg1} alt="" className={this.state.cfgImageSrc === bg1 ? 'selected' : ''} data-name={bg1} />
                                <img src={banner1} alt="" className={this.state.cfgImageSrc === banner1 ? 'selected' : ''} data-name={banner1} />
                                <img src={banner2} alt="" className={this.state.cfgImageSrc === banner2 ? 'selected' : ''} data-name={banner2} />
                                <img src={banner3} alt="" className={this.state.cfgImageSrc === banner3 ? 'selected' : ''} data-name={banner3} />
                                <img src={banner4} alt="" className={this.state.cfgImageSrc === banner4 ? 'selected' : ''} data-name={banner4} />
                                <img src={banner5} alt="" className={this.state.cfgImageSrc === banner5 ? 'selected' : ''} data-name={banner5} />
                            </div>
                        </div>
                    </div></a>
                </div>)}
                {this.state.isView ? (<div className="slider" id="slider" >
                    <div className="slider__content" id="slider-content">
                        <div className="slider__images">
                            <div className="slider__images-item slider__images-item--active" data-id="1"><img src={banner1} alt="" /></div>
                            <div className="slider__images-item" data-id="2"><img src={banner2} alt="" /></div>
                            <div className="slider__images-item" data-id="3"><img src={banner3} alt="" /></div>
                            <div className="slider__images-item" data-id="4"><img src={banner4} alt="" /></div>
                            <div className="slider__images-item" data-id="5"><img src={banner5} alt="" /></div>
                        </div>
                        <div className="slider__text" style={{ color: this.state.cfgFontColor }}>
                            <div className="slider__text-item slider__text-item--active" data-id="1">
                                <div className="slider__text-item-head">
                                    <h3>{this.state.cfgMain[0].cfgSub}</h3>
                                </div>
                                <div className="slider__text-item-info">
                                    <p style={{ color: this.state.cfgFontColor }}>{this.state.cfgMain[0].cfgDescribe}</p>
                                </div>
                            </div>
                            <div className="slider__text-item" data-id="2">
                                <div className="slider__text-item-head">
                                    <h3>{this.state.cfgMain[1].cfgSub}</h3>
                                </div>
                                <div className="slider__text-item-info">
                                    <p style={{ color: this.state.cfgFontColor }}>{this.state.cfgMain[1].cfgDescribe}</p>
                                </div>
                            </div>
                            <div className="slider__text-item" data-id="3">
                                <div className="slider__text-item-head">
                                    <h3>{this.state.cfgMain[2].cfgSub}</h3>
                                </div>
                                <div className="slider__text-item-info">
                                    <p style={{ color: this.state.cfgFontColor }}>{this.state.cfgMain[2].cfgDescribe}</p>
                                </div>
                            </div>
                            <div className="slider__text-item" data-id="4">
                                <div className="slider__text-item-head">
                                    <h3>{this.state.cfgMain[3].cfgSub}</h3>
                                </div>
                                <div className="slider__text-item-info">
                                    <p style={{ color: this.state.cfgFontColor }}>{this.state.cfgMain[3].cfgDescribe}</p>
                                </div>
                            </div>
                            <div className="slider__text-item" data-id="5">
                                <div className="slider__text-item-head">
                                    <h3>{this.state.cfgMain[4].cfgSub}</h3>
                                </div>
                                <div className="slider__text-item-info">
                                    <p style={{ color: this.state.cfgFontColor }}>{this.state.cfgMain[4].cfgDescribe}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider__nav">
                        <div className="slider__nav-arrows">
                            <div className="slider__nav-arrow slider__nav-arrow--left" id="left">to left</div>
                            <div className="slider__nav-arrow slider__nav-arrow--right" id="right">to right</div>
                        </div>
                        <div className="slider__nav-dots" id="slider-dots">
                            <div className="slider__nav-dot slider__nav-dot--active" data-id="1"></div>
                            <div className="slider__nav-dot" data-id="2"></div>
                            <div className="slider__nav-dot" data-id="3"></div>
                            <div className="slider__nav-dot" data-id="4"></div>
                            <div className="slider__nav-dot" data-id="5"></div>
                        </div>
                    </div>
                </div>) : (<div class="ih-item square effect7" style={{ width: '100%', height: '730px' }}><a href="javascript:void(0);">
                    <div class="img">
                        <div className="slider" id="slider1" >
                            <div className="slider__content" id="slider-content">
                                <div className="slider__images">
                                    <div className="slider__images-item slider__images-item--active" data-id="1"><img src={banner1} alt="" /></div>
                                    <div className="slider__images-item" data-id="2"><img src={banner2} alt="" /></div>
                                    <div className="slider__images-item" data-id="3"><img src={banner3} alt="" /></div>
                                    <div className="slider__images-item" data-id="4"><img src={banner4} alt="" /></div>
                                    <div className="slider__images-item" data-id="5"><img src={banner5} alt="" /></div>
                                </div>
                                <div className="slider__text" style={{ color: this.state.cfgFontColor }}>
                                    <div className="slider__text-item slider__text-item--active" data-id="1">
                                        <div className="slider__text-item-head">
                                            <h3>{this.state.cfgMain[0].cfgSub}</h3>
                                        </div>
                                        <div className="slider__text-item-info">
                                            <p style={{ color: this.state.cfgFontColor }}>{this.state.cfgMain[0].cfgDescribe}</p>
                                        </div>
                                    </div>
                                    <div className="slider__text-item" data-id="2">
                                        <div className="slider__text-item-head">
                                            <h3>{this.state.cfgMain[1].cfgSub}</h3>
                                        </div>
                                        <div className="slider__text-item-info">
                                            <p style={{ color: this.state.cfgFontColor }}>{this.state.cfgMain[1].cfgDescribe}</p>
                                        </div>
                                    </div>
                                    <div className="slider__text-item" data-id="3">
                                        <div className="slider__text-item-head">
                                            <h3>{this.state.cfgMain[2].cfgSub}</h3>
                                        </div>
                                        <div className="slider__text-item-info">
                                            <p style={{ color: this.state.cfgFontColor }}>{this.state.cfgMain[2].cfgDescribe}</p>
                                        </div>
                                    </div>
                                    <div className="slider__text-item" data-id="4">
                                        <div className="slider__text-item-head">
                                            <h3>{this.state.cfgMain[3].cfgSub}</h3>
                                        </div>
                                        <div className="slider__text-item-info">
                                            <p style={{ color: this.state.cfgFontColor }}>{this.state.cfgMain[3].cfgDescribe}</p>
                                        </div>
                                    </div>
                                    <div className="slider__text-item" data-id="5">
                                        <div className="slider__text-item-head">
                                            <h3>{this.state.cfgMain[4].cfgSub}</h3>
                                        </div>
                                        <div className="slider__text-item-info">
                                            <p style={{ color: this.state.cfgFontColor }}>{this.state.cfgMain[4].cfgDescribe}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider__nav">
                                <div className="slider__nav-arrows">
                                    <div className="slider__nav-arrow slider__nav-arrow--left" id="left">to left</div>
                                    <div className="slider__nav-arrow slider__nav-arrow--right" id="right">to right</div>
                                </div>
                                <div className="slider__nav-dots" id="slider-dots">
                                    <div className="slider__nav-dot slider__nav-dot--active" data-id="1"></div>
                                    <div className="slider__nav-dot" data-id="2"></div>
                                    <div className="slider__nav-dot" data-id="3"></div>
                                    <div className="slider__nav-dot" data-id="4"></div>
                                    <div className="slider__nav-dot" data-id="5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="info">
                        <h3>自定义标题和描述：</h3>
                        <p>Defined Title And Description</p>
                        <div>
                            <div className='title-and-description'>
                                <span>标题1：</span>
                                <input type='text' onInput={(event) => {
                                    event.persist()
                                    this.onCfgSub1Change(event)
                                }} value={this.state.cfgMain[0].cfgSub} data-name='sub-1'></input>
                                <span>描述1：</span>
                                <input type='text' onChange={(event) => {
                                    event.persist()
                                    this.onCfgDescribe1Change(event)
                                }} value={this.state.cfgMain[0].cfgDescribe}></input>
                            </div>
                            <div className='title-and-description'>
                                <span>标题2：</span>
                                <input type='text' onChange={(event) => {
                                    event.persist()
                                    this.onCfgSub2Change(event)
                                }} value={this.state.cfgMain[1].cfgSub}></input>
                                <span>描述2：</span>
                                <input type='text' onChange={(event) => {
                                    event.persist()
                                    this.onCfgDescribe2Change(event)
                                }} value={this.state.cfgMain[1].cfgDescribe}></input>
                            </div>
                            <div className='title-and-description'>
                                <span>标题3：</span>
                                <input type='text' onChange={(event) => {
                                    event.persist()
                                    this.onCfgSub3Change(event)
                                }} value={this.state.cfgMain[2].cfgSub}></input>
                                <span>描述3：</span>
                                <input type='text' onChange={(event) => {
                                    event.persist()
                                    this.onCfgDescribe3Change(event)
                                }} value={this.state.cfgMain[2].cfgDescribe}></input>
                            </div>
                            <div className='title-and-description'>
                                <span>标题4：</span>
                                <input type='text' onChange={(event) => {
                                    event.persist()
                                    this.onCfgSub4Change(event)
                                }} value={this.state.cfgMain[3].cfgSub}></input>
                                <span>描述4：</span>
                                <input type='text' onChange={(event) => {
                                    event.persist()
                                    this.onCfgDescribe4Change(event)
                                }} value={this.state.cfgMain[3].cfgDescribe}></input>
                            </div>
                            <div className='title-and-description'>
                                <span>标题5：</span>
                                <input type='text' onChange={(event) => {
                                    event.persist()
                                    this.onCfgSub5Change(event)
                                }} value={this.state.cfgMain[4].cfgSub}></input>
                                <span>描述5：</span>
                                <input type='text' onChange={(event) => {
                                    event.persist()
                                    this.onCfgDescribe5Change(event)
                                }} value={this.state.cfgMain[4].cfgDescribe}></input>
                            </div>
                        </div>
                    </div></a>
                </div>)}
                <div class='travel-submit'>
                    <span>模板名：</span>
                    <input type="text" onChange={(event) => {
                        event.persist()
                        this.onTemplateNameChange(event)
                    }} />
                    <div id='btn'>
                        <div className='view' onClick={() => { this.onViewClick() }}>{this.state.isView ? '编辑' : '预览'}</div>
                        <div className='submit' onClick={()=>{this.onSubmitClick()}}>提交</div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Travel);