import React, { Component } from 'react'
import logo from '../../image/logo.png'
import partner from '../../image/partner.png'
import mini from '../../image/mini.png'
import wechat from '../../image/wechat.png'
import phone from '../../image/phone.png'
import window from '../../image/window.png'
import beian from '../../image/beian.png'

import './index.css'
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className='top'>
                    <div className='logo-container'>
                        <img src={logo} alt='' className='logo'></img>
                    </div>
                    <div className='partner'>
                        <div className='title'>官方战略合作伙伴</div>
                        <img src={partner} alt="" className='img' />
                    </div>
                    <div className='platform'>
                        <div id='platform-type'>
                            <img src={window} alt="" className='platform-img' />
                            <div className='platform-title pc'>pc客户端</div>
                        </div>
                        <div id='platform-type'>
                            <img src={phone} alt="" className='platform-img' />
                            <div className='platform-title phone'>App</div>
                        </div>
                        <div id='platform-type'>
                            <img src={mini} alt="" className='platform-img' />
                            <div className='platform-title wechat'>小程序</div>
                        </div>
                        <div id='platform-type'>
                            <img src={wechat} alt="" className='platform-img' />
                            <div className='platform-title gongzhonghao'>公众号</div>
                        </div>
                    </div>
                    <div className='call'>
                        <div className='call-btn'>立即联系客服</div>
                        <div>客服电话：021-61097639</div>
                        <div>商务合作QQ：604066298</div>
                        <div>为保证用户体验 , 云模板不接任何广告</div>
                    </div>
                </div>
                <img src={beian} alt="" className='beian'/>
            </div>
        );
    }
}

export default Footer;