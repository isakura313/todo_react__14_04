import React, {Component} from 'react';
import Container from "@material-ui/core/Container"
import Watch from './Watch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';


class App extends Component{
  constructor(){
    super()
    this.state ={
      error: null,
      isLoaded: false,
      items:[],
      currentItem: {text:"asdasd", key:"firstItem"}
      //localstorage
      //api в котором сохранять
      
    }
  }
  componentDidMount() {
    fetch("http://192.168.64.3/api")
    .then(res => res.text())
      // .then(res => res)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }



  handleInput = e =>{
    const itemText = e.target.value;
    const currentItem = {text: itemText, key: Date.now()}
    this.setState({
      currentItem,
    })
  }



  addItem = e =>{
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text != ''){
      let items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {text:"", key:""}
      })
    }
  }
  deleteItem = key =>{
    const filterItems = this.state.items.filter(item =>{
        return item.key !== key;
    })
    this.setState({
      items:filterItems
    })
  }

  render(){
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
    return(
      <Container maxWidth="sm">
      <Watch />
        <h1> Приложение для своих дел</h1>
      <TodoList 
      addItem = {this.addItem}
      inputElement = {this.inputElement}
      handleInput = {this.handleInput}
      currentItem = {this.state.currentItem} 
      />
      <TodoItem entries={this.state.items} deleteItem = {this.deleteItem} />
      </Container> 
    )
  }
}


}

export default App;