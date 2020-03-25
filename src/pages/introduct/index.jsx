import React, { Component } from 'react'
import './index.css'
import mainImage from '../../image/template1-main.jpg';
import logo from '../../image/template1-logo.png'
import Footer from '../../components/footer/index'
import { connect } from 'react-redux'
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
        isView: false
    }
    componentDidMount(){
        if(this.props.location.query.type){
            const type=this.props.location.query.type
            if(type==='editor'){
                this.setState({isView:false})
            }else if(type==='view'){
             this.setState({isView:true})
            }
        }
        if(this.props.location.query.cfgTitle){
            this.setState({cfgTitle:this.props.location.query.cfgTitle})
        }
        if(this.props.location.query.cfgDescribe){
            this.setState({cfgDescribe:this.props.location.query.cfgDescribe})
        }
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
    onWebNameChange(event){
        this.setState({ webname: event.target.value })
    }
    onSubmitClick(){
        let username = this.props.state.username
        let token = this.props.state.token
        let {webname,cfgDescribe,cfgTitle}=this.state
        let data ={webname,cfgDescribe,cfgTitle}
        // console.log(data);
        // axios.defaults.withCredentials=true
        axios.post(`http://121.36.102.75:8080/${token}/webcfg/commit/${username}`, data).then(res => {
            // console.log(res);
            const data = res.data
            if(data.code===3001){
                alert('提交成功！')
            }else{
                alert('提交失败！')
            }
          })
        this.setState({
            cfgTitle: 'Junny',
            cfgDescribe: '你好，我是Junny，来自米国的网站开发者。我对设计、开发和互动充满热情。我热衷我所做的一切。',
            webname: '',
            isView: false
        })
    }
    render() {    
        // console.log(this.state.cfgDescribe,this.state.cfgTitle);
        return (
            <div>
                <div className="introduct">
                    <img src={mainImage} alt='' className='left-image'></img>
                    <div className='right'>
                        <img src={logo} alt='' className='logo'></img>
                        <div className='nick-name'>I am {this.state.isView ? this.state.cfgTitle : ''}
                            {!this.state.isView ? (<input type='text' value={this.state.cfgTitle} onChange={(event) => { this.onNickNameChange(event) }} className='nick-name-input'></input>) : null}
                        </div>
                        <div className='describe'>
                            {this.state.isView ? this.state.cfgDescribe : ''}
                            {!this.state.isView ? (<textarea type="text" value={this.state.cfgDescribe} onChange={(event) => {
                                this.onDescribeChange(event)
                            }} className='describe-input' />) : null}
                        </div>
                        <div className="right-bottom">
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
                        <input type="text" value={this.state.webname} onChange={(event)=>{
                            this.onWebNameChange(event)
                        }}/>
                    </div>
                    <div className='submit'>
                        <div className='view-btn' onClick={() => { this.onViewClick() }}>{this.state.isView ? '编辑' : '预览'}</div>
                        <div className='submit-btn' onClick={()=>{this.onSubmitClick()}}>提交</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Introduct);