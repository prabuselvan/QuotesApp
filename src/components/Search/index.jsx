import React from 'react';
import fire from '../../config/Fire';
import Input from '../Common/Input';
class Search extends React.Component {

    state= {
        email : {
            
        },
        quotes: [
            "Work hard for what you want because it won't come to you without a fight. You have to be strong and courageous and know that you can do anything you put your mind to. If somebody puts you down or criticizes you, just keep on believing in yourself and turn it into something positive",
            "Push yourself, because no one else is going to do it for you.",
            "Great things never come from comfort zones.",
            " Dream it. Wish it. Do it.",
            "The harder you work for something, the greater you’ll feel when you achieve it.",
            "Don’t stop when you’re tired. Stop when you’re done.",
            "Wake up with determination. Go to bed with satisfaction.",
            "The key to success is to focus on goals, not obstacles.",
            "Your limitation—it’s only your imagination.",
            "Success doesn’t just find you. You have to go out and get it.",
            "Sometimes we’re tested not to show our weaknesses, but to discover our strengths."

        ],
        searchVal: '',
        successMessage: true
    }

componentDidMount() {
    // this.authListener();
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

onSearchChange=(e)=> {
    const val  = e.target.value;
    const filteredArray=this.state.quotes.filter((quote)=> quote.indexOf(val) !== -1 );
    this.setState({
        searchVal: e.target.value,
        quotes: filteredArray
    });
}


    render() {
        const {quotes, searchVal, successMessage} = this.state;

        return(
            <div>
                <h1> Search Page</h1>
                 <Input type='text' label='Search' name='search'  placeholder='search' value={searchVal}  onChange={this.onSearchChange} successMessage={successMessage}/>
                {quotes.map((quote, index)=> {
                    return  <ul className='list-group' key={index}>
                                <li className='list-group-item'> {quote} </li>  
                    </ul> 
                })} 
            </div>
        )
    }
}
export default Search;