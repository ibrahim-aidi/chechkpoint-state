import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname : "ibrahim aidi",
            bio : "this is a bio",
            profession : "student",
            imgSrc : "https://www.w3schools.com/howto/img_avatar.png"
        };
      }
  render() {
    return (
      <div>
        <h2>{this.state.fullname}</h2>
        <h2>{this.state.bio}</h2>
        <h2>{this.state.profession}</h2>
        <img src={this.state.imgSrc} alt="img1" />
      </div>
    )
  }
}
