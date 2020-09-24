import React, { Component, createContext } from "react";
import { generateUserDocument } from '../lib/user';
import { auth } from '../lib/firebase';
export const UserContext = createContext({ user: null });

class UserProvider extends Component {
    state = {
        user: null
    };
    componentDidMount = () => {
        auth.onAuthStateChanged(async userAuth => {
            console.log('userAuth', userAuth);
            const user = await generateUserDocument(userAuth);
            this.setState({ user });
        });
    };

    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
export default UserProvider;