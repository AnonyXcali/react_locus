import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

////STYLES////

const root = {
  padding: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  width: 400,
  borderRadius: 0
}

const input = {
  marginLeft: 8,
  flex: 1,
}

const iconButton = {
  padding: 10

}

////STYLES////

class Search extends Component {
  state = {
    value: ''
  }
  handleChange = (e) => {
    this.setState({
      value : [e.target.name] = e.target.value
    })
    this.props.recieveChange(e.target.value);
  }

  handleKeyPress = (e) => {
    if(e.keyCode === 40){
      let element = document.querySelector('.cardList');
      let elementBounding = element.getBoundingClientRect();
      let cards = document.getElementsByClassName('_resultCard');
      for(let i=0; i<cards.length;i++){
        if(cards[i].classList.contains('_selected')){
          cards[i].classList.remove('_selected');
          if(!cards[i].parentElement.nextElementSibling){
            let bounding = cards[i].parentElement.parentElement.children[0].children[0].getBoundingClientRect();
            if (
                bounding.top >= elementBounding.top &&
                bounding.left >= 0 &&
                bounding.right <= elementBounding.right &&
                bounding.bottom <= elementBounding.bottom
              ) {
                //do nothing
               } else {
                  element.scrollTop = bounding.top;
                }
            cards[i].parentElement.parentElement.children[0].children[0].classList.add('_selected')
           break;
          }else{
            let bounding = cards[i].parentElement.nextElementSibling.children[0].getBoundingClientRect();
            if (
                bounding.top >= elementBounding.top &&
                bounding.left >= 0 &&
                bounding.right <= elementBounding.right &&
                bounding.bottom <= elementBounding.bottom
              ) {
                //do nothing
               } else {
                 element.scrollTop = (bounding.bottom - elementBounding.bottom) + element.scrollTop;
                }
            cards[i].parentElement.nextElementSibling.children[0].classList.add('_selected')
            break;
          }
        }
      }

    }else if(e.keyCode === 38){
      let element = document.querySelector('.cardList');
      let elementBounding = element.getBoundingClientRect();
      console.log(elementBounding);
      let cards = document.getElementsByClassName('_resultCard');
      for(let i=0; i<cards.length;i++){
        if(cards[i].classList.contains('_selected')){
          cards[i].classList.remove('_selected');
          if(!cards[i].parentElement.previousElementSibling){
            let bounding = cards[i].parentElement.parentElement.children[cards.length-1].children[0].getBoundingClientRect();
            if (
                bounding.top >= elementBounding.top &&
                bounding.bottom <= elementBounding.bottom
              ) {
                //do nothing
               } else {
                 console.log('Not in the viewport... whomp whomp');
                 console.log('bounding-top', bounding.top)
                 element.scrollTop = bounding.top;
                }
            cards[i].parentElement.parentElement.children[cards.length-1].children[0].classList.add('_selected')
           break;
          }else{
            let bounding = cards[i].parentElement.previousElementSibling.children[0].getBoundingClientRect();
            if (
                bounding.top >= elementBounding.top &&
                bounding.bottom <= elementBounding.bottom
              ) {
                //do nothing
               } else {
                 console.log('Not in the viewport... whomp whomp');
                 element.scrollTop = element.scrollTop - (elementBounding.bottom - bounding.bottom);
                }

            cards[i].parentElement.previousElementSibling.children[0].classList.add('_selected')
            break;
          }
        }
      }
    }
  }

  render(){
    return (
      <div className={'inputDiv'}>
      <Paper style={root}>
        <InputBase
          autoComplete="off"
          style={input}
          placeholder="Search Query"
          inputProps={{ 'aria-label': 'Search Query' }}
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
        />
        <IconButton style={iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Paper>
      </div>
    );
  }

}

export default Search;
