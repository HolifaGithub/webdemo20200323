import React, { Component } from 'react';
import Introduct from './pages/introduct'
import Footer from './components/footer'
import logo from './image/logo.png'
import banner from './image/banner.jpg'
import user from './image/user.png'
import TemplateItem from  './components/template-item/index'
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    isLogin: false,
    isShowLogin: false,
    username: '',
    password: ''
  }
  onLoginClick() {
    this.setState({ isShowLogin: true })
  }
  onUserNameChange(event) {
    this.setState({ username: event.target.value });
  }
  onPassWordChange(event) {
    this.setState({ password: event.target.value });
  }
  onLoginBtnClick() {
    const { username, password } = this.state;
    let data = { username, password }
    axios.post('http://121.36.102.75:8080/user/login', data).then(res => {
      const data =res.data
      if(data.code===1004){
        this.setState({
          isLogin:true,
          isShowLogin:false
        })
      }
    })
  }
  onCancelLoginBtnClick(){
    this.setState({isShowLogin:false})
  }
  onCancellationClick(){
    this.setState({isLogin:false})
  }
  render() {
    return (
      <div className='app'>
        <header className='header'>
          <div className='navbar'>
            <img src={logo} alt='' className='header-logo'></img>
            <ul className='navbar-list'>
              <li className='active'>首页</li>
              <li>我的模板</li>
            </ul>
            {this.state.isLogin ? (<div className='header-user'>
              <img src={user} alt='' className='header-user-logo'></img>
              <div>Holifa</div>
              <div className='header-user-btn' onClick={()=>{this.onCancellationClick()}}>注销</div>
            </div>) : (<div className='none-login'>
              <div className='header-user-btn' onClick={() => { this.onLoginClick() }}>登录</div>
              <div className='header-user-btn'>注册</div>
            </div>)}
          </div>
        </header>
        <main>
          <img src={banner} alt='' className='banner'></img>
          <div className='main-container'>
            <div className='main-left-container'>
              <div className='main-left'>热门模板</div>
            </div>
            <div className='main-right'>
              <TemplateItem></TemplateItem>
            </div>
          </div>
        </main>
        <Footer></Footer>
        {this.state.isShowLogin ? (<div className='login'>
          <div className='login-title'>用户登录</div>
          <div className='login-item'>
            <div>账 号：</div>
            <input type='text' className='login-input' value={this.state.username} onChange={(event) => {
              this.onUserNameChange(event)
            }}></input>
          </div>

          <div className='login-item'>
            <div>密 码：</div>
            <input type="password" className='login-input' value={this.state.password} onChange={(event) => {
              this.onPassWordChange(event)
            }}></input>
          </div>
          <div className='login-btn' onClick={() => { this.onLoginBtnClick() }}>登录</div>
          <div className='login-btn-cancel' onClick={() => { this.onCancelLoginBtnClick() }}>取消登录</div>
        </div>) : null}
        {/* <Introduct></Introduct> */}
      </div>
    );
  }
}

export default App;

