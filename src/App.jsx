import React, { Component } from 'react';
// import Introduct from './pages/introduct'
import Footer from './components/footer'
import logo from './image/logo.png'
import banner from './image/banner.jpg'
import notfound from './image/404.png'
import template1 from './image/template1.png'
import template2 from './image/template2.png'
import template3 from './image/template3.png'
import user from './image/user.png'
import TemplateItem from './components/template-item/index'
import axios from 'axios'
import { login, cancelLogin, setUserName, setToken,refetchMyTemplateDatas} from './action'
import { connect } from 'react-redux'
import './App.css';

const mapStateToProps = (state) => {
  return { state }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogin() {
      return dispatch(login())
    },
    dispatchCancelLogin() {
      return dispatch(cancelLogin())
    },
    dispatchSetUserName(username) {
      return dispatch(setUserName(username))
    },
    dispatchSetToken(token) {
      return dispatch(setToken(token))
    },
    dispatchRefetchMyTemplateDatas(){
      return dispatch(refetchMyTemplateDatas())
    }
  }
}
class App extends Component {
  state = {
    isShowLogin: false,
    isShowRegister: false,
    username: '',
    password: '',
    confirmPassWord: '',
    navBarIndex: 0,
    isShowTip: false,
    mytemplateListDatas: []
  }
  templateListDatas = [
    {
      webname: '个人简介模板',
      templateSrc:template1,
      path:'/introduct'
    },
    {
      webname: '旅游博客模板',
      templateSrc:template2,
      path:'/travel'
    },
    {
      webname: '公司广告模板',
      templateSrc:template3,
      path:'/advertisement'
    }
  ]
  onLoginClick() {
    this.setState({ isShowLogin: true })
  }
  onRegisterClick() {
    this.setState({ isShowRegister: true })
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
      // console.log(res);
      const data = res.data
      if (data.code === 1004) {
        const usernameReturn = data.username
        const token = data.token
        this.setState({
          isShowLogin: false
        })
        this.props.dispatchLogin()
        this.props.dispatchSetUserName(usernameReturn)
        this.props.dispatchSetToken(token)
      }
    })
  }
  onCancelLoginBtnClick() {
    this.setState({ isShowLogin: false })
  }
  onCancelRegisterBtnClick() {
    this.setState({ isShowRegister: false })
  }
  onCancellationClick() {
    this.props.dispatchCancelLogin()
  }
  onMainPageClick() {
    this.setState({ navBarIndex: 0 })
  }
  onMyTemplatePageClick() {
    this.setState({ navBarIndex: 1 })
    const token =this.props.state.token
    const username=this.props.state.username
    axios.get(`http://121.36.102.75:8080/${token}/webcfg/getall/${username}`).then(res => {
      const data = res.data
      if(data.code===3002){
        const cfgList = data.cfgList
        const _mytemplateListDatas=[]
        for(let i=0;i<cfgList.length;i++){
          _mytemplateListDatas[i]={}
          _mytemplateListDatas[i].id=cfgList[i].id;
          _mytemplateListDatas[i].webname=cfgList[i].webname;
          if(cfgList[i].moduleID === 1){
            _mytemplateListDatas[i].templateSrc=template1
            _mytemplateListDatas[i].path='/introduct'
          }else if(cfgList[i].moduleID === 2){
            _mytemplateListDatas[i].templateSrc=template2
            _mytemplateListDatas[i].path='/travel'
          }else if(cfgList[i].moduleID === 3){
            _mytemplateListDatas[i].templateSrc=template3
            _mytemplateListDatas[i].path='/advertisement'
          }
        }
        this.setState({mytemplateListDatas:_mytemplateListDatas})
      }
    })
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.state.isRefetchMyTemplateDatas){
      this.onMyTemplatePageClick()
    }
  }
  backMainPage() {
    this.setState({ navBarIndex: 0 })
  }
  onConfirmPassWordChange(event) {
    this.setState({ confirmPassWord: event.target.value });
  }
  onRegisterBtnClick() {
    const { username, password, confirmPassWord } = this.state
    if (password !== confirmPassWord) {
      this.setState({
        isShowTip: true,
        password: '',
        confirmPassWord: ''
      })
    } else {
      let data = { username, password }
      axios.post('http://121.36.102.75:8080/user/signup', data).then(res => {
        const data = res.data
        if (data.code === 1002) {
          const token = data.token
          const usernameReturn = data.username
          this.setState({
            isShowRegister: false,
            username: '',
            password: '',
            confirmPassWord: ''
          })
          this.props.dispatchLogin()
          this.props.dispatchSetUserName(usernameReturn)
          this.props.dispatchSetToken(token)
        }
      })
    }
  }
  render() {
    // console.log(this.props);
    return (
      <div className='app'>
        <header className='header'>
          <div className='navbar'>
            <img src={logo} alt='' className='header-logo'></img>
            <ul className='navbar-list'>
              <li className={this.state.navBarIndex === 0 ? 'active' : ''} onClick={() => { this.onMainPageClick() }}>首页</li>
              {this.props.state.isLogin ? (<li className={this.state.navBarIndex === 1 ? 'active' : ''} onClick={() => { this.onMyTemplatePageClick() }}>我的模板</li>) : null}
            </ul>
            {this.props.state.isLogin ? (<div className='header-user'>
              <img src={user} alt='' className='header-user-logo'></img>
              <div>{this.props.state.username}</div>
              <div className='header-user-btn' onClick={() => { this.onCancellationClick() }}>注销</div>
            </div>) : (<div className='none-login'>
              <div className='header-user-btn' onClick={() => { this.onLoginClick() }}>登录</div>
              <div className='header-user-btn' onClick={() => { this.onRegisterClick() }}>注册</div>
            </div>)}
          </div>
        </header>
        {this.state.navBarIndex === 0 ? (<main>
          <img src={banner} alt='' className='banner'></img>
          <div className='main-container'>
            <div className='main-left-container'>
              <div className='main-left'>热门模板</div>
            </div>
            <div className='main-right'>
              {this.templateListDatas && this.templateListDatas.length > 0 ?
                this.templateListDatas.map((data, index) => {
                  return (
                    <TemplateItem key={index} data={data} isLogin={this.props.state.isLogin}></TemplateItem>
                  )
                }) : null
              }

            </div>
          </div>
        </main>) : null}
        {this.state.navBarIndex === 1 ? (<main className='my-template'>
          {this.state.mytemplateListDatas && this.state.mytemplateListDatas.length > 0 ? (
            <div className='my-template-container'>
              {this.state.mytemplateListDatas.map((data, index) => {
                return (
                  <TemplateItem key={data.id} data={data} isLogin={this.props.state.isLogin}></TemplateItem>
                )
              })}
            </div>) : (<div className='none-tip'>
              <img src={notfound} alt="" />
              <div>抱歉，您当前还没有模板，去建立一个吧！</div>
              <div className='none-tip-btn' onClick={() => { this.backMainPage() }}>回到首页</div>
            </div>)}
        </main>) : null
        }
        <Footer></Footer>
        {
          this.state.isShowLogin ? (<div className='login'>
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
          </div>) : null
        }
        {
          this.state.isShowRegister ? (<div className='register'>
            <div className='register-title'>用户注册</div>
            <div className='register-item'>
              <div>账 号：</div>
              <input type='text' className='register-input' value={this.state.username} onChange={(event) => {
                this.onUserNameChange(event)
              }}></input>
            </div>

            <div className='register-item'>
              <div>密 码：</div>
              <input type="password" className='register-input' value={this.state.password} onChange={(event) => {
                this.onPassWordChange(event)
              }}></input>
            </div>
            <div className='register-item confirm'>
              <div>确 认 密 码：</div>
              <input type="password" className='register-input' value={this.state.confirmPassWord} onChange={(event) => {
                this.onConfirmPassWordChange(event)
              }}></input>
            </div>
            {this.state.isShowTip ? <div className='register-tip'>两次输入的密码不一致！请重新输入!</div> : null}
            <div className='register-btn' onClick={() => { this.onRegisterBtnClick() }}>注册</div>
            <div className='register-btn-cancel' onClick={() => { this.onCancelRegisterBtnClick() }}>取消注册</div>
          </div>) : null
        }
        {/* <Introduct></Introduct> */}
      </div >
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

