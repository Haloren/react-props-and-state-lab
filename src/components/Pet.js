import React from 'react'

class Pet extends React.Component {
  render() {
    console.log("Pet", this.props)
    // let petCard = this.props.pets.map(pet => console.log(
    //     pet.gender,
    //     pet.name,
    //     pet.type,
    //     pet.age,
    //     pet.weight,
    //     pet.isAdopted
    //   )
    // )

    let pet = this.props.pet

    return (
      
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {pet.gender === 'male' ? '♂ ' : '♀ '} 
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
