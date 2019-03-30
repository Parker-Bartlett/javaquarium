import React, { Component } from 'react';
import './App.css';
import Categories from './components/Categories'

class App extends Component {
  state = {
    categories: [
      {
        id: 1,
        title: 'spring',
        posts: [
          {
            id:2,
            title: 'spring is cool',
            content: 'this is a post about spring and i think it is awfully cool'
          }
        ]
      },
      {
        id: 3,
        title: 'spring2',
        posts: [
          {
            id:4,
            title: 'spring is cool2',
            content: 'this is a post about spring and i think it is awfully cool2'
          }
        ]
      }
    ]
  }

  // Get Category
  getCategory = (id) => {
    //how to link
  }

  render() {
    return (
      <div className="App">
        <h1>Javaquarium</h1>
        <Categories categories={this.state.categories} getCategory={this.getCategory}/>
      </div>
    );
  }
}

export default App;
