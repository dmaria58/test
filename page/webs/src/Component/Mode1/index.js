import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col,Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon,
 } from 'wmstool';
 import baseInfoImg from "../../Img/img1.jpg"
class Index extends Component { 
  render() {
    return (
      <div>
	  <Row className="page1_row">
	    <Col xs={0} sm={0} md={4} lg={3} xl={3} className="page1_col">   
      <Link to='/'>登录</Link>   
      		<img src={baseInfoImg}/>
      	</Col>
 	    <Col xs={24} sm={24} md={0} lg={0} xl={0} >      
      		good morning 12345
      	</Col> 
      	<Col xs={24} sm={24} md={10} lg={21} xl={21} style={{height:"100%"}}>  

hello meiren
      	</Col>	    		
      </Row>	
      </div>
    );
  }
}
export default Index;