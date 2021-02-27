import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    // console.log("PetBrowser", this.props)

    return <div className="ui cards">
      <Pet pets={this.props.pets } />
    </div>
  }
}

export default PetBrowser
