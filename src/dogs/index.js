import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './Dogs.css'

const imgs = Array.apply(null, {length: 20})
imgs.map((el, index) => {
  return imgs[index] = require(`../utilities/img/dogs/${index + 1}.jpg`);
});

export default class Dogs extends Component {
  constructor(props){
    super(props)
    this.state = {
      like: null,
      dislike: null,
      likes: [],
      dislikes: []
    }
  }

  direction(data, transform) {
    data.map((e) => {
      let x = ReactDOM.findDOMNode(this).getElementsByClassName(e)
      return x[0].style.transform = transform
    })
  }

  buttonLike(data) {
    this.setState((e) => {
      const likes = e.likes.concat(data)
      this.direction(likes, 'translateX(500px)')

      return {
        like: data,
        likes: likes
      }
    })
  }

  buttonDislike(data) {
    this.setState((e) => {
      const dislikes = e.dislikes.concat(data)
      this.direction(dislikes, 'translateX(-500px)')

      return {
        dislike: data,
        dislikes: dislikes
      }
    })
  }

  render() {
    return (
      <div className='container'>
        <h1>¡adoptame!</h1>
        <div className='container-dogs'>
          {
            imgs.map((el, index) => {
              return (
              <div className={`imgs-dogs ${this.state.like === index ? 'slideOutRight' : ''} ${this.state.dislike === index ? 'slideOutLeft' : ''} ${index}`} key={index}>
                <img src={el} />
                <div className='container-buttons'>
                  <div>
                    <img src={require('../utilities/img/buttons/dislike.png')} onClick={() => this.buttonDislike(index)} /> 
                  </div>
                  <div>
                    <img src={require('../utilities/img/buttons/like.jpg')} onClick={() => this.buttonLike(index)} />
                  </div>
                </div>
              </div>
            )})
          }
        </div>
      </div>
    )
  }
}