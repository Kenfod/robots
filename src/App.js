import React, { Component }  from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robot: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users =>this.setState({ robot: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value }) 
  }

  render() {
    const filteredRobot = this.state.robot.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robot.length === 0) {
      return <h1>Loading</h1>
    } else { 
      return (
        <div className='tc'>
          <h1 className='f1'>Robopals</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robot={filteredRobot}/>
          </Scroll>  
        </div>
      );
    }
  }
}

export default App;
