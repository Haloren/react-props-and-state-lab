import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  // FILTER FUNCTIONS
  handleFilter = (event) => {
    // console.log("handleFilter", event.target.value)
    this.setState({
      filters: {
        ...this.state.filters, 
        type: event.target.value 
      }
    })
  }

  fetchPets = () => {
    // console.log("Fetch - Pet Type ", this.state.filters.type)
    let petType = this.state.filters.type
    let apiUrl = '/api/pets'
    petType === 'all' ? apiUrl = '/api/pets' : apiUrl = '/api/pets?type='+petType

    fetch(apiUrl) 
    .then(resp => resp.json())
    // .then(pets => console.log("fetchPets", pets))
    .then(pets => this.setState({
      pets: pets
    }))
  }

  // PET BROWSER FUNCTIONS
  handleAdopt = (id) => {
    console.log("handleAdopt", this.state.pets)
    const pets = this.state.pets
    this.state.pets.find(pet => pet.id === id).isAdopted = true
    this.setState({pets})
   }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleFilter} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdopt} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
