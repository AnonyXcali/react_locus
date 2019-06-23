import React, { Component } from 'react';
import './App.css';
import './styles/ResultCard.css'
import Search from './components/Search.js'
import ResultCardList from './components/ResultCardList.js'

class App extends Component {

  state = {
    keyword : '',
    peopleData : [],
    filteredPeopleData: [],
    size:0
  }

  filterPeopleData = (keyword, peopleData) => {
    let filteredData = peopleData.filter( key => {
      if(key['id'].toLowerCase().indexOf(keyword)      >= 0  ||
         key['name'].toLowerCase().indexOf(keyword)    >= 0  ||
         key['address'].toLowerCase().indexOf(keyword) >= 0  ||
         key['pincode'].toLowerCase().indexOf(keyword) >= 0
        ){
          return key;
      }
    })
    this.setState({
      size: filteredData.length,
      filteredPeopleData : filteredData.length === this.state.peopleData.length ? [] : filteredData
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.keyword !== prevState.keyword){
      this.filterPeopleData(this.state.keyword, this.state.peopleData);
    }
  }


  /**
    recieveChange(keyword)
    Takes in parameter and sets the current state for keyword
  */
  recieveChange = keyword => {
    this.setState({
      keyword : keyword.toLowerCase()
    })
  }

  fetchData = () => {
    let url = 'http://www.mocky.io/v2/5ba8efb23100007200c2750c'
    if(JSON.parse(localStorage.getItem('data')) && JSON.parse(localStorage.getItem('data')).length > 0){
      this.setState({
        peopleData : JSON.parse(localStorage.getItem('data')),
        size: JSON.parse(localStorage.getItem('data')).length
      })
    }else{
      let fetchedData = fetch(url).
          then(res => {

            return res.json()

          }).then(result => {
            localStorage.setItem('data', JSON.stringify(result));
            this.setState({
              peopleData : result,
              size: result.length
            })
          })
          .catch((error) => {
            console.log(error);
          })
        }

  }

  componentDidMount(prevProps, prevState){
    this.fetchData()
  }

  render(){
    return(
      <div className='mainDiv'>
        <Search
          recieveChange={(keyword) => {this.recieveChange(keyword)}}
          />
        <ResultCardList
          keyword = {this.state.keyword}
          data={this.state.filteredPeopleData}
        />
      </div>
    )
  }
}

export default App;
