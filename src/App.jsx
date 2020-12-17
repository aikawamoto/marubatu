import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Button, Toolbar, Row, Col } from "react-onsenui";
import {notification} from 'onsenui';

import './style.css';

export default class App extends React.Component {
 constructor(props) { 
    super(props);
this.state = {
data: [
[3,3,3],
[3,3,3],
[3,3,3],
],

turn:
0,
};


}

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>〇✕ゲーム</div>
      </Toolbar>
    );
  }

  maba(value){
    if(value==1){
      return "〇";
    }
    else if(value==2){
      return "✕";
    }
    
      return "";
  }

  maku(value,value2) {
   var s = this.state; // stateの内容を取得

 
   if(s.turn%2==0){
     s.data[value][value2]=1;
   }
   else {
     s.data[value][value2]=2; 
   }
   
   s.turn+=1;
  
   this.setState(s);
}

  render() {
    return (
     <Page renderToolbar={this.renderToolbar}>
 
        <Row>
          <Col className="box"onClick={() => this.maku(0,0)}>{this.maba(this.state.data[0][0])}</Col>
          <Col className="box"onClick={() => this.maku(0,1)}>{this.maba(this.state.data[0][1])}</Col>
          <Col className="box"onClick={() => this.maku(0,2)}>{this.maba(this.state.data[0][2])}</Col>
        </Row>
    
        <Row>
          <Col className="box"onClick={() => this.maku(1,0)}>{this.maba(this.state.data[1][0])}</Col>
          <Col className="box"onClick={() => this.maku(1,1)}>{this.maba(this.state.data[1][1])}</Col>
          <Col className="box"onClick={() => this.maku(1,2)}>{this.maba(this.state.data[1][2])}</Col>
        </Row>

        <Row>
          <Col className="box"onClick={() => this.maku(2,0)}>{this.maba(this.state.data[2][0])}</Col>
          <Col className="box"onClick={() => this.maku(2,1)}>{this.maba(this.state.data[2][1])}</Col>
          <Col className="box"onClick={() => this.maku(2,2)}>{this.maba(this.state.data[2][2])}</Col>
        </Row>

</Page>
    );
  }
}