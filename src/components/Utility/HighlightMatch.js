import React, { Component } from 'react';


class HighlightMatch extends Component {

  getHighlightedText(text, higlight) {
    let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
    console.log(parts);
    return <span> { parts.map((part, i) =>
        <span key={i}
        style={part.toLowerCase() === higlight.toLowerCase() ? {  textDecoration:'underline', fontWeight: 'bold', color:'#98484d' } : {} }>
            { part }
        </span>)
    } </span>;
}

  render() {
    return this.getHighlightedText(this.props.dataToBeHighlighted, this.props.keywordData)
  }
}

export default HighlightMatch;
