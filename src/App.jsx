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
    else if(value==3){
      return "";
    }
  }

  maku(value,value2) {
     if(this.state.data[value][value2]!=3){
      return ;
    }
      var s = this.state; // stateの内容を取得
 
      if(s.turn%2==0){
       s.data[value][value2]=1;
      }

      else {
      s.data[value][value2]=2; 
      }
   
    s.turn+=1;
  
    this.setState(s);

    var result = this.soro();
      console.log(result);
      if(result==1){
    notification.alert('〇の勝ち！！');
}
  if(result==2){
    notification.alert('✕の勝ち！！');
}

  if(result==4){
    notification.alert('引き分け！！');
}
  }


soro() {
var data = this.state.data; // this.state.dataを取り出す
var i,j;
// data[たて][よこ]：たては0～2, よこは0～2で各マスの値が取り出せる
if(data[0][0]==data[0][1]&&data[0][1]==data[0][2]&&data[0][0]!=3){
  return data[0][0]; 
}
if(data[1][0]==data[1][1]&&data[1][1]==data[1][2]&&data[1][0]!=3){
  return data[1][0]; 
}
if(data[2][0]==data[2][1]&&data[2][1]==data[2][2]&&data[2][0]!=3){
  return data[2][0]; 
}

if(data[0][0]==data[1][0]&&data[1][0]==data[2][0]&&data[0][0]!=3){
  return data[0][0]; 
}
if(data[0][1]==data[1][1]&&data[1][1]==data[2][1]&&data[0][1]!=3){
  return data[0][1]; 
}
if(data[0][2]==data[1][2]&&data[1][2]==data[2][2]&&data[0][2]!=3){
  return data[0][2]; 
}

if(data[0][0]==data[1][1]&&data[1][1]==data[2][2]&&data[0][0]!=3){
  return data[0][0]; 
}
if(data[0][2]==data[1][1]&&data[1][1]==data[2][0]&&data[0][2]!=3){
  return data[0][2]; 
}

for(i=0;i<=2;i++){
  for(j=0;j<=2;j++){
    if(data[i][j]==3){
      return 3;
    }
  }
}
return 4;

}

  render() {
    return (
     <Page renderToolbar={this.renderToolbar}>
 
        <Row>
          <Col className="box1"onClick={() => this.maku(0,0)}>{this.maba(this.state.data[0][0])}</Col>
          <Col className="box2"onClick={() => this.maku(0,1)}>{this.maba(this.state.data[0][1])}</Col>
          <Col className="box1"onClick={() => this.maku(0,2)}>{this.maba(this.state.data[0][2])}</Col>
        </Row>
    
        <Row>
          <Col className="box2"onClick={() => this.maku(1,0)}>{this.maba(this.state.data[1][0])}</Col>
          <Col className="box1"onClick={() => this.maku(1,1)}>{this.maba(this.state.data[1][1])}</Col>
          <Col className="box2"onClick={() => this.maku(1,2)}>{this.maba(this.state.data[1][2])}</Col>
        </Row>

        <Row>
          <Col className="box1"onClick={() => this.maku(2,0)}>{this.maba(this.state.data[2][0])}</Col>
          <Col className="box2"onClick={() => this.maku(2,1)}>{this.maba(this.state.data[2][1])}</Col>
          <Col className="box1"onClick={() => this.maku(2,2)}>{this.maba(this.state.data[2][2])}</Col>
        </Row>

</Page>
    );
  }
}