import React, { Component } from 'react'
import hogs from '../porkers_data'
import UUID from 'uuid'


export default class HogTile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            frontSide: true,
        }

    }


    filterActive(){
        if (this.props.filter){
        }

    }



     defaultMapCardArray() {
         console.log('hogdata', this.props.hogData)
        return hogs.map( (hogObj) => {
            return  <div>
                    <h1>{hogObj.name}</h1>
                    <img key={UUID()} src="data:image/jpeg;base64,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"></img>
                </div>
        })
    }

  render() {
      console.log('hogTile', this.props)
    return (
      <div>
        {this.defaultMapCardArray()}
      </div>
    )
  }
}