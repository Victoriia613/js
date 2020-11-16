import React, { Component } from 'react';

class User extends Component {

    state = { status: this.props.user.status };

    constructor(props) {
        super(props);
    }

    action = (user) => {
        user.status = !user.status;
        this.setState({
            status: !this.props.user.status
        })
    }

    render() {
        let { user } = this.props;
        return (
            <div>
                {
                    !user.status && (<b>
                        <div> {user.action} - {user.name} - {user.age} </div>
                    </b>

                    )
                }
                {
                    user.status && (
                        <div>
                            {user.action} -  {user.name} - {user.age}
                        </div>
                    )
                }
                <button
                    onClick={() => { return this.action(user) }}> Validate
</button>

            </div>

        )
    }

}
export default User;
