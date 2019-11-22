import React from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  
  render() {
    const { monsters,searchField } = this.state;
    const filteredMonsters = typeof searchField == 'string' ? monsters.filter(monster => 
      monster.name.toUpperCase().includes(searchField)) : monsters;
   
    return(
      <div className="App">
        <SearchBox 
        placeholder="Search Monsters" 
        handleChange = {e => this.setState({searchField: e.target.value.toUpperCase()})}
        />
        <CardList monsters={filteredMonsters} />
      </div> 
    )
  }
}
export default App;
