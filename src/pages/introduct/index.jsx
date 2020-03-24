import React, { Component } from 'react'
import './index.css'
import mainImage from '../../image/template1-main.jpg';
import logo from '../../image/template1-logo.png'
import Footer from '../../components/footer/index'
class Introduct extends Component {

    render() {
        return (
            <div>
                <div className="introduct">
                    <img src={mainImage} alt='' className='left-image'></img>
                    <div className='right'>
                        <img src={logo} alt='' className='logo'></img>
                        <div className='nick-name'>I am Junny</div>
                        <div className='introduct'>你好，我是Junny，来自米国的网站开发者。我对设计、开发和互动充满热情。我热衷我所做的一切。</div>
                        <div class="right-bottom">
                            <div id="about" className='btn'>关于</div>
                            <div id="work" className='btn'>工作</div>
                            <div id="contact" className='btn'>联系</div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Introduct;