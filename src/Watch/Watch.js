import React, {Component} from 'react';
import Button from "@material-ui/core/Button";

class Watch extends Component{
    constructor(props){
        super(props)
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerId = setInterval(() =>this.tick(),
        1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }
    render(){
        return(
            <div>
                <Button color="primary" size="large" > Сегодня: {this.state.date.toLocaleDateString()}</Button>
                <h3>   Текущее время: {this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
}

export default Watch;
