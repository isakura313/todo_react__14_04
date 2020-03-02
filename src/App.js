import React, {Component} from 'react';
import Container from "@material-ui/core/Container"
import Watch from './Watch';
import TodoList from './TodoList';


class App extends Component{
  constructor(){
    super()
    this.state ={
      items:[],
      currentItem: {text:"фывфы", key:"firstItem"}
    }
  }

  render(){
    return(
      <Container maxWidth="md">
      <Watch />
        <h1> Приложение для своих дел</h1>
      <TodoList currentItem = {this.state.currentItem}/>
      </Container> 
    )
  }


}

export default App;