import React, {Component} from "react";
import Button from "@material-ui/core/Button";

const css = {
    margin: '30px'
}


class TodoItem extends Component{
    createTasks = item => {
        return( <div style={css}  key= {item.inner_key} >
        <Button>
            {item.text}
        </Button>
        <Button onClick={()=>
            this.props.deleteItem(item.inner_key)}
            color="secondary"> Done </Button>
        </div>)
    }
    render(){
        const listEn= this.props.entries;
        const ListItem = listEn.map(this.createTasks)
        return <div> {ListItem} </div>;
    }

}

export default TodoItem;