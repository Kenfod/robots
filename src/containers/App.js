import React, { Component }  from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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
    const { robot, searchfield } = this.state;
    const filteredRobot = robot.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
      return !robot.length ?
      <h1>Loading</h1> :
      (
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

export default App;
