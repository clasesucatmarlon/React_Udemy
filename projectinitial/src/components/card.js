// create component card
import React from 'react'
import exerciceImg from '../images/exercise.png'
import circlesImg from '../images/circles.png'
import './styles/Card.css'

class Card extends React.Component {
  render() {
    const {title, descripction, img, leftColor, rightColor} = this.props
    return (
    <div className="card mx-auto Fitness-Card"
      style={{
        backgroundImage: `url(${img}), linear-gradient(to right, ${leftColor}, ${rightColor})`
      }}>
      <div className="card-body"> 
         <div className="row center">
          <div className="col-6">
            <img src={exerciceImg} className="float-right"/>
          </div>
          <div className="col-6 Fitness-Card-Info">
            <h1>{title} </h1>
            <p>{descripction}</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Card