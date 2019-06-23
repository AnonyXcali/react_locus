import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import HighlightMatch from '../Utility/HighlightMatch.js'
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';


////STYLES////

const card = {
  minWidth: 275,
  borderRadius: 0
}

const title = {
  fontSize: '18px',
  color: '#403a3a'
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

  checkItemExist = (data, keyword) => {
    keyword = keyword.trim();
    if(data.hasItem){
      let dataFilter = data.items.filter(key => {
        if(key.toLowerCase().indexOf(keyword) >= 0){
          return key;
        }
        return false;
      })
      let string = [': found in items'];

      dataFilter.map((key, iter) => {
        string.unshift('"'+key+'" ')
        return key;
      })

      string = string.join(" ");

      return (
        <Typography className='item' color="textSecondary">
        <Badge className='badge' color="primary" variant="dot">
        </Badge>
        {string}
        </Typography>
      )
    }

    return (
      <Typography className='item' color="textSecondary">
      <Badge className='no-item-badge' color="primary" variant="dot">
      </Badge>
       No Item matched
      </Typography>
    )
  }

  render(){
    return (
      <Card
        onMouseOver={this.handleMouseFunc}
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
          <Divider variant='left'/>
              {this.checkItemExist(this.props.data, this.props.keywordData)}
          <Divider variant='left'/>
          <Typography className='address' variant="body2" component="p">
          <HighlightMatch dataToBeHighlighted={this.props.data.address}
          keywordData={this.props.keywordData}/>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default ResultCard;
