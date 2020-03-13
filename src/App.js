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
      currentItem: {text:"первое дело", inner_key:"firstItem"}
      
    }
  }
  componentDidMount() {
    fetch("http://localhost:5003/deals")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            //если и произошла загрузка, тогда мы активируем наш компонент
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
    const currentItem = {text: itemText, inner_key: Date.now()}
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
        currentItem: {text:"", inner_key:""}
      })
}
}


  deleteItem = inner_key =>{
    const filterItems = this.state.items.filter(item =>{
        return item.inner_key !== inner_key;
    })
    this.setState({
      items:filterItems
    })
  }

  render(){
    const { error, isLoaded } = this.state;
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