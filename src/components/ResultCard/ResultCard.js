import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HighlightMatch from '../Utility/HighlightMatch.js'

////STYLES////

const card = {
  minWidth: 275,
  borderRadius: 0
}

const title = {
  fontSize: '18px',
  color: '#403a3a'
}

const pos = {

}

////STYLES///

class ResultCard extends Component {

  handleMouseFunc = e => {
    if(e.target.parentElement.parentElement.parentElement.classList.contains('cardList')){
      let curr = e.target.parentElement.parentElement.parentElement;
      let currChildren = curr.children;
      for(let i = 0 ; i < currChildren.length ; i++){
        currChildren[i].children[0].classList.remove('_selected');
      }
      e.target.parentElement.classList.add('_selected');
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.data !== this.props.data){
      let selected = document.getElementsByClassName('_selected');
      if(selected.length === 0){
        let cards = document.getElementsByClassName('_resultCard');
        cards[0].classList.add('_selected');
      }
    }
  }

  render(){
    return (
      <Card
        onMouseOver = {this.handleMouseFunc}
        className={this.props.iter === 0 ? '_resultCard _selected' : '_resultCard'}
        style={card}>
        <CardContent>
          <Typography style={title} color="textSecondary" gutterBottom>
            <strong>{this.props.data.id}</strong>
          </Typography>
          <Typography className='name' color="textSecondary">
            <i><HighlightMatch dataToBeHighlighted={this.props.data.name}
            keywordData={this.props.keywordData}/></i>
          </Typography>
          <Typography className='address' variant="body2" component="p">
            {this.props.data.address}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default ResultCard;
