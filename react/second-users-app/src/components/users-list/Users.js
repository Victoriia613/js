import React, {Component} from 'react';
import ApiService from '../../services/ApiService';
import './Users.css'
import User from '../user/User'

class Users extends Component {
    api = new ApiService();

    state = {users: []};
    async componentDidMount() {
        this.setState({users: await this.api.getUsers()})
    }
    render(){
        return(
            <div class="list-group list-group-flush">
                {
        this.state.users.map(user => (<User user={user} key={user.id}/>))
            
                }
                </div>
        )
    }
}
export default Users;
