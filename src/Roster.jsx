import React, { Component } from 'react'
import Student from './Student'

export default class Roster extends Component {
  render() {
    const studentsMap = this.props.students.map((student, i) => {
      return <Student name={student.name} bio={student.bio} scores={student.scores} />
    })

    return (
      <div>
        <h1>Student Roster</h1>
        {studentsMap}
      </div>
    )
  }
}