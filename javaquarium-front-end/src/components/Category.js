import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class Category extends Component {
  render() {
    return (
      <div>
        <p onClick={this.props.getCategory.bind(this, this.props.category.id)}>
            { this.props.category.title }
        </p>
      </div>
    )
  }
}

//PropTypes
Category.propTypes = {
    category: PropTypes.object.isRequired
}