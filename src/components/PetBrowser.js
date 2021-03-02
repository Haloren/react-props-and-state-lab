import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    return <div className="ui cards">
      {/* {console.log("PetBrowser", this.props)} */}
      {this.props.pets.map(pet => 
        <Pet onAdoptPet={this.props.onAdoptPet} pet={pet} key={pet.id} />
      )
      }
    </div>
  }
}

export default PetBrowser
