import React, { Component } from 'react'
import './index.css'
import Footer from '../../components/footer/index'
import { connect } from 'react-redux'
import '../static/css/slide/normalize.css'
import '../static/css/slide/demo.css'
import '../static/css/slide/style.css'
import '../static/css/main/bootstrap.css'
import '../static/css/main/style.css'
import '../static/css/main/font-awesome.min.css'
import logo from '../static/images/logo.png'
import topBackGroundImage from '../static/images/banner-top.png'
import banner1 from "../static/images/1.jpg"
import banner2 from "../static/images/2.jpg"
import banner3 from "../static/images/3.jpg"
import banner4 from "../static/images/4.jpg"
import banner5 from "../static/images/5.jpg"
import Slider from '../static/js/index'
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
        bannerIndex: 1
    }
    componentDidMount() {
        var sliderEl = document.getElementById('slider');
        var slider = new Slider(sliderEl);

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

        sliderEl.addEventListener('mousemove', stopAutoSlide);
        sliderEl.addEventListener('touchstart', stopAutoSlide);

        timer = setTimeout(autoSlide, 2000);
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar">
                        <div className="container">
                            <h1 className="wthree-logo">
                                <a href="main.html" id="logoLink"><img src={logo} alt='' /></a>
                            </h1>
                            <ul id="menu" >
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
                            </ul>

                        </div>
                    </nav>
                </header>
                <div id="home" className="banner-w3pvt d-flex" style={{ backgroundImage: `url(${topBackGroundImage})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 bnr-txt-w3pvt">
                                <div className="bnr-w3pvt-txt mt-sm-5">
                                    <h6>旅游日记</h6>
                                    <h2> 地名：<span>新疆</span></h2><br />
                                    <h4>TO --- 旅游爱好者</h4>
                                    <p className="mt-4"> 世界那么大，我想去看看。</p>
                                    <ul className="social_section_1info mt-4">
                                        <li className="mb-2 wechat"><a href="#"><span className="fa fa-wechat"></span></a></li>
                                        <li className="mb-2 github"><a href="#"><span className="fa fa-github"></span></a></li>
                                        <li className="linkedin"><a href="#"><span className="fa fa-linkedin"></span></a></li>
                                        <li className="qq"><a href="#"><span className="fa fa-qq"></span></a></li>
                                    </ul>
                                    <a href="#about" className="scroll bnr-btn mr-2">更多 </a>
                                    <a href="#contact" className="scroll bnr-btn1">联系我 </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider" id="slider" >
                    <div className="slider__content" id="slider-content">
                        <div className="slider__images">
                            <div className="slider__images-item slider__images-item--active" data-id="1"><img src={banner1} alt="" /></div>
                            <div className="slider__images-item" data-id="2"><img src={banner2} alt="" /></div>
                            <div className="slider__images-item" data-id="3"><img src={banner3} alt="" /></div>
                            <div className="slider__images-item" data-id="4"><img src={banner4} alt="" /></div>
                            <div className="slider__images-item" data-id="5"><img src={banner5} alt="" /></div>
                        </div>
                        <div className="slider__text">
                            <div className="slider__text-item slider__text-item--active" data-id="1">
                                <div className="slider__text-item-head">
                                    <h3>穿过丛林</h3>
                                </div>
                                <div className="slider__text-item-info">
                                    <p>“穿越丛林，披荆斩棘”</p>
                                </div>
                            </div>
                            <div className="slider__text-item" data-id="2">
                                <div className="slider__text-item-head">
                                    <h3>湖泊</h3>
                                </div>
                                <div className="slider__text-item-info">
                                    <p>“我曾经跨过山河大海，也穿过人山人海”</p>
                                </div>
                            </div>
                            <div className="slider__text-item" data-id="3">
                                <div className="slider__text-item-head">
                                    <h3>悬崖</h3>
                                </div>
                                <div className="slider__text-item-info">
                                    <p>“悬崖勒马，为时未晚”</p>
                                </div>
                            </div>
                            <div className="slider__text-item" data-id="4">
                                <div className="slider__text-item-head">
                                    <h3>山峰</h3>
                                </div>
                                <div className="slider__text-item-info">
                                    <p>“会当凌绝顶，一览众山小”</p>
                                </div>
                            </div>
                            <div className="slider__text-item" data-id="5">
                                <div className="slider__text-item-head">
                                    <h3>原野</h3>
                                </div>
                                <div className="slider__text-item-info">
                                    <p>“野火烧不尽，春风吹又生”</p>
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
                <Footer></Footer>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Travel);