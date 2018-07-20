import React, { Component } from 'react'
import hogs from '../porkers_data'
import HogTile from './HogTile'

export default class HogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hogIndexData: hogs,
            currentlyActiveHogs: []
        }

    }

    //if filter (in app.js) is active ---> pass that in props to HogIndex
    //In HogIndex, create new array based on props --> pass that array to function based on props
    //Pass sorted and filtered array to tiles --> create a title for each element

    filterHogsByGreased = () => {
        this.state.hogIndexData.filter(individualHog => individualHog.greased === true)


    }

  render() {
      console.log('hogArray', this.state.hogIndexData)
   
      return (
      <div className='hog-index-container'>
        <HogTile hogData={this.state.hogIndexData} />>
      </div>
    )
  }
}
