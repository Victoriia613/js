import React, {Component} from 'react';
import './User.css'

class User extends Component{
    render(){
        let {id, name, username, email} = this.props.user;
        
        return(
            <div class="list-group-item">
                {id} - {name} - {email} - {username}


            </div>
        )
    }
}
export default User;
