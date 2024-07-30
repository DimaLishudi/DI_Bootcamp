import React from "react"

class UserFavoriteAnimals extends React.Component {
  render() {
    if (!this.props.favAnimals) {
      return null;
    }
    return (
      <ul>
      {
        this.props.favAnimals.map((value, index) => (
          <li key={index}>{value}</li>
        ))
      }
      </ul>
    )
  }
}

export default UserFavoriteAnimals;