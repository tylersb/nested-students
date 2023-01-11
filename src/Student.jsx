import React, { Component } from 'react'
import Score from './Score'

export default class Student extends Component {
  render() {
    const scoresMap = this.props.scores.map((score, i) => {
      return <Score date={score.date} score={score.score} />
    })
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.bio}</p>
        {scoresMap}
      </div>
    )
  }
}