import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class TodoList extends Component{
render(){
    return(

        <form onSubmit={this.props.addItem}>
            <TextField id="standard-basic" 
        ref={this.props.inputElement}
        value={this.props.currentItem.text}
        onChange={this.props.handleInput} />
            <Button type="submit" color="primary"> Добавить дело </Button>
        </form>
    )
}
}



export default TodoList;