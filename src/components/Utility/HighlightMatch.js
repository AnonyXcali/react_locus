import React, { Component } from 'react';


class HighlightMatch extends Component {

  getHighlightedText(text, higlight) {
    let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
    return <span> { parts.map((part, i) =>
        <span key={i}
        style={part.toLowerCase() === higlight.toLowerCase() ? {  textDecoration:'underline', fontWeight: 'bold', color:'#4e8eee' } : {} }>
            { part }
        </span>)
    } </span>;
}

  render() {
    return this.getHighlightedText(this.props.dataToBeHighlighted, this.props.keywordData)
  }
}

export default HighlightMatch;
