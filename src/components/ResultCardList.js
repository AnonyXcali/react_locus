import React, { Component } from 'react';
import ResultCard from '../components/ResultCard/ResultCard.js'
import BlankCard from '../components/ResultCard/BlankCard.js'

class ResultCardList extends Component {

  renderData = dataToRender => {
    return dataToRender.map((key, iter)=> {
      return(
        <li
        className='cardListItem'>
        <ResultCard
        data={key}
        iter={iter}
        keywordData={this.props.keyword}
        />
        </li>
      )
    })
  }


  render() {
    if(this.props.data && this.props.data.length > 0 && this.props.keyword.length > 0){
      return (
        <div className="resultCardDiv">
          <ul
          className='cardList'>
            {this.renderData(this.props.data)}
          </ul>
        </div>
      );
    }else{
      return (
        <div className="noResultCardDiv">
          <BlankCard keyword={this.props.keyword}/>
        </div>
      )
    }
  }
}

export default ResultCardList;
