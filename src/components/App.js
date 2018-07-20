import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogIndex from './HogIndex'
import HogTile from './HogTile'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: "default",
      sort: {
        name: true,
        weight: false,
      }
    }
  }

    onFilterSelect = (e) => {
      
      let currentToggle = null;

      switch(e.target.id){
        case 'filter-all':
          currentToggle = "default";
        case 'filter-greased':
          currentToggle = "greased";
        case 'filter-ungreased':
          currentToggle = "ungreased";   
      }
      
      
      
      this.setState({
        filter: currentToggle
      })

    }

    onSortSelect() {


    }


  render() {
    console.log('appState', this.state)
    return (
      <div className="App">
          < Nav />
          <select onChange={this.onFilterSelect}> 
             <option id="filter-default">default</option>  
            <option id="filter-greased">greased</option> 
            <option id="filter-not-greased">not greased</option>
          </select> 
          
          < select onChange={this.onSortSelect}> 
              <option id="sort-default">default</option>  
              <option id="sort-name">name</option>
              <option id="sort-weight"> weight </option>
          </select>
           
          < HogIndex />
          < HogTile />
      </div>
    )
  }
}

export default App;
