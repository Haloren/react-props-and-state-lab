import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  pets = (pets) => {
    const petCard = pets.map(onePet => {
      return (
        <Pet pet={onePet} key={onePet.id} onAdoptPet={this.props.onAdoptPet}/>
      )
    })
    return petCard
  }
  render() {
    console.log("PetBrowser", this.props)
    return <div className="ui cards">
      {/* <Pet pets={this.props.pets} /> */}
      {this.pets(this.props.pets)}
    </div>
  }
}

export default PetBrowser
