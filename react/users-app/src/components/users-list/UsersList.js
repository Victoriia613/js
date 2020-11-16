import React, { Component } from 'react';
import { usersList } from "../../data/data";
import User from "../user/User"

class UsersList extends Component {
    render() {
        return (
            <div>
                {
                    usersList.map(eachUser => {
                        return (
                            <User user={eachUser} key={eachUser.id} />
                        )
                    })
                }

            </div>
        )
    }
}
export default UsersList;
