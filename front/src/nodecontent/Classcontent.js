import axios from 'axios';
import React,{Component} from 'react';

class Classcontent extends Component{
    constructor(props){
        super(props)
        this.state = {
            routerget: '일단대기',
        }
    };

    componentDidMount = async () =>{
        const getpostroot = await axios.get('/getpost');
        this.setState({routerget: getpostroot.data});

    };

    render(){
        return(
            <div>
                <h3>확인해봅시다</h3>
                <p>{this.state.routerget}</p>
            </div>
        );
    };
}


export default Classcontent;