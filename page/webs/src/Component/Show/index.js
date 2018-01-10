import React, {Component, PropTypes} from 'react';
import {Row, Col,Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon,
 } from 'wmstool';
 import baseInfoImg from "../../Img/img1.jpg"
class Index extends Component { 
  render() {
    return (
      <div>
	    <Row className="page1_row">
        巴拉巴拉小魔仙   
        <img src={baseInfoImg}/> 		
      </Row>	
      </div>
    );
  }
}
export default Index;