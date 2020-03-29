import React, { Component } from 'react'
import vm from './images/vm.png'
import footer from './images/icon-footer.png'
import './index.css'
class Footer extends Component {
    render() {
        return (
            <div className='footer-root'>
                <div className="footer-container">
                    <div className="footer-service clearfix">
                        <div className="footer-service-item footer-icon-001">
                            <i></i>
                            <span>专注服务于网站制作</span>
                        </div>
                        <div className="footer-service-item footer-icon-002">
                            <i></i>
                            <span>资深网站制作专家</span>
                        </div>
                        <div className="footer-service-item footer-icon-003">
                            <i></i>
                            <span>一对一专属会员经理</span>
                        </div>
                        <div className="footer-service-item footer-icon-004">
                            <i></i>
                            <span>385万用户诚意推荐</span>
                        </div>
                    </div>
                    <div className="footer-line"></div>
                    <div className="footer-links clearfix">
                        <dl className="footer-article-item">
                            <dt>旗下品牌</dt>
                            <dd>
                                <a href="#">jq22</a>
                            </dd>
                            <dd>
                                <a href="#">ECJia</a>
                            </dd>
                            <dd>
                                <a href="#">ECTouch</a>
                            </dd>
                        </dl>
                        <dl className="footer-article-item">
                            <dt>关于我们</dt>
                            <dd>
                                <a href="#">公司介绍</a>
                            </dd>
                            <dd>
                                <a href="#">发展历程</a>
                            </dd>
                            <dd>
                                <a href="#">团队风采</a>
                            </dd>
                            <dd>
                                <a href="#">办公环境</a>
                            </dd>
                            <dd>
                                <a href="#">荣誉资质</a>
                            </dd>
                            <dd>
                                <a href="#">联系我们</a>
                            </dd>
                        </dl>
                        <dl className="footer-article-item">
                            <dt>精品教程</dt>
                            <dd>
                                <a href="#">模板说明</a>
                            </dd>
                            <dd>
                                <a href="#">jq22教程</a>
                            </dd>
                            <dd>
                                <a href="#">微商城教程</a>
                            </dd>
                            <dd>
                                <a href="#">APP教程</a>
                            </dd>
                            <dd>
                                <a href="#">视频指导</a>
                            </dd>
                            <dd>
                                <a href="#">问答堂</a>
                            </dd>
                        </dl>
                        <dl className="footer-article-item">
                            <dt>其他</dt>
                            <dd>
                                <a href="#">官方论坛</a>
                            </dd>
                            <dd>
                                <a href="#">服务支持</a>
                            </dd>
                            <dd>
                                <a href="#">电商大会</a>
                            </dd>
                            <dd>
                                <a href="#">投诉建议</a>
                            </dd>
                            <dd>
                                <a href="#">支付方式</a>
                            </dd>
                            <dd>
                                <a href="#">站点地图</a>
                            </dd>
                        </dl>
                        <dl className="footer-contact-item">
                            <h3>联系我们</h3>
                            <p>400-010-xxx</p>
                            <div className="footer-ewm">
                                <img src={vm} alt="" />
                                <p>关注微信订阅号</p>
                            </div>
                        </dl>
                    </div>
                    {/* <div className="footer-friend">
                        <div className="footer-friend-title">友情链接：</div>
                        <ul className="footer-friend-title-list clearfix">
                            <li>
                                <a href="#">jq22</a>
                            </li>
                            <li>
                                <a href="#">移动商城购物</a>
                            </li>
                            <li>
                                <a href="#">APP商城开发</a>
                            </li>
                            <li>
                                <a href="#">DESTOON B2B</a>
                            </li>
                            <li>
                                <a href="#">Linux  </a>
                            </li>
                            <li>
                                <a href="#">Linux 面板</a>
                            </li>
                            <li>
                                <a href="#">Chrome插件</a>
                            </li>
                            <li>
                                <a href="#">W3Cschool</a>
                            </li>
                            <li>
                                <a href="#">网站</a>
                            </li>
                            <li>
                                <a href="#">工具</a>
                            </li>
                            <li>
                                <a href="#">移动商城购物</a>
                            </li>

                        </ul>
                        <a href="#" className="footer-friend-more">更多 >></a>
                    </div>
                    <div className="footer-copyright">
                        <p>© 2002-2018 (jq22.com) 版权所有，并保留所有权利&nbsp;&nbsp;&nbsp;常年法律顾问: （天津）律师事务所</p>
                        <p>
                            天津市南开二纬路xxxx号劝业场&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#">
                                <img src={footer} alt="" />**网安备 0008899999xxxx号
                    </a>
                        </p>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Footer;