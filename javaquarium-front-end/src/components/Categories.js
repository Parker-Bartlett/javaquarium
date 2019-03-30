import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Category from './Category'

export class Categories extends Component {
  render() {
    return this.props.categories.map((category) => (
        <Category key={category.id} category={category} 
        getCategory={this.props.getCategory}/>
    ))
  }
}

//PropTypes
Categories.propTypes = {
    categories: PropTypes.object.isRequired
}

export default Categories


