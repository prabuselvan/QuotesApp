import React from 'react';
import fire from '../../config/Fire';
class Search extends React.Component {

    state= {
        email : {
            
        }
    }

componentDidMount() {
    this.authListener();
}
// check user exists in firebase
authListener( ) {
    fire.auth().onAuthStateChanged((email)=> {
        console.log(email);
        if(email) {
            this.setState({ email })
        } else {
            this.setState({email : null})
        }
    }); 
}
    render() {
        return(
            <div>
                <h1> Search Page</h1>
            </div>
        )
    }
}
export default Search;