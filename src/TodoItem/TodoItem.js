import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const css = {
    marginTop: 30
}


class TodoItem extends Component{
   
    
    createTasks = item => {
        return (
            <div  style={css}>
            <Button variant="contained" key={item.key}> 
                 {item.text}   </Button>
                 <Button onClick={() =>
                    this.props.deleteItem(item.key)}   variant="contained"
                    color="secondary"  startIcon={<DeleteIcon />}>Done</Button>
                 </div>
        )
    }
    render(){
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)

        return <div>  {listItems} </div>
    }
}


export default TodoItem;