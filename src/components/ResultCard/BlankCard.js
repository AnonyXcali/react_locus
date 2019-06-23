import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

////STYLES////

const card = {
  minWidth: 275,
  borderRadius: 0,
  height: '110px'
}

const title = {
  fontSize: '18px',
  color: '#d8d8d8',
  marginTop:'20px'
}

const pos = {

}

////STYLES///

class BlankCard extends Component {

  render(){
    if(this.props.keyword.length > 0){
      return (
        <Card style={card}>
          <CardContent>
            <Typography style={title} color="textSecondary" gutterBottom>
              <strong>No User Found</strong>
            </Typography>
          </CardContent>
        </Card>
      );
    }else{
      return (null)
    }
  }
}

export default BlankCard;
