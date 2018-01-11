import React, {Component, PropTypes} from 'react';
import template from '../Template/index'
import {Link} from 'react-router-dom';
import {Row, Col,Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon,
 } from 'wmstool';
class Index extends Component { 
  constructor(props) {
    super(props);
  }
  Log=()=>{
    this.props.getLogin("login");
  }
  componentWillReceiveProps(nextProps){
    //重置
    if(this.props.getLoginData != nextProps.getLoginData){
      if(nextProps.getLoginData.data == "success"){
       this.props.history.push("/Mode1");
      }
    }
  }
  render() {
    return (
      <div>
      <Row className="page1_row">
      23435
        <Link to='/Show'>Show</Link>  
        <Button onClick={this.Log}>登录</Button>    
      </Row>  
      </div>
    );
  }
}
export default template({
    id: 'Index',  
    component: Index,
    url: ''
});