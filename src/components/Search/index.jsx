import React from 'react';
import fire from '../../config/Fire';
import Input from '../Common/Input';
import Pagination from '../Common/Pagination';
import {paginate} from '../utils/paginate';
import {Link} from 'react-router-dom';
import './search.css';
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
            "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
            "To succeed in life, you need two things: ignorance and confidence",
            "I walk slowly but never backwards",
            "The people who succeed are irrationally passionate about something.",
            "Success is not in what you have, but who you are. ",
            "Many of life’s failures are people who did not realize how close they were to success when they gave up",
            "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed",
            "Always bear in mind that your own resolution to succeed is more important than any other one thing.",
            "The secret of success is to do the common things uncommonly well. ",
            "Action is the foundational key to all success",
            "If you’re going through hell, keep going.",
            "Success is not forever and failure isn’t fatal."



        ],
        searchVal: '',
        successMessage: true,
        perPageCount:5,
        currentPage: 1,
        cuurentPageQuotes: [
            "Work hard for what you want because it won't come to you without a fight. You have to be strong and courageous and know that you can do anything you put your mind to. If somebody puts you down or criticizes you, just keep on believing in yourself and turn it into something positive",
            "Push yourself, because no one else is going to do it for you.",
            "Great things never come from comfort zones.",
            " Dream it. Wish it. Do it.",
            "The harder you work for something, the greater you’ll feel when you achieve it.",

        ],
        filteredQuotes: [
            "Work hard for what you want because it won't come to you without a fight. You have to be strong and courageous and know that you can do anything you put your mind to. If somebody puts you down or criticizes you, just keep on believing in yourself and turn it into something positive",
            "Push yourself, because no one else is going to do it for you.",
            "Great things never come from comfort zones.",
            " Dream it. Wish it. Do it.",
            "The harder you work for something, the greater you’ll feel when you achieve it.",
        ]

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
    const updatedQuotes = [...this.state.cuurentPageQuotes];
    console.log('updated quotes ', updatedQuotes);
    const filteredArray=updatedQuotes.filter((quote)=> quote.includes(val) === true );
    // console.log('filtered array is ', filteredArray);
    this.setState({
        searchVal: val,
        filteredQuotes: filteredArray
    });
}

handlePageChange=(newPage)=> {
    const {quotes: allQuotes, searchVal, successMessage, perPageCount, currentPage} = this.state;
    const quotes = paginate(allQuotes, currentPage, perPageCount);
    this.setState({
            currentPage: newPage,
            cuurentPageQuotes: quotes
    }, ()=> {
        this.onSearchChange({target: {value : ''} });
    });
    
}

logOut=(e)=> {
    e.preventDefault();
    fire.auth().signOut().then((u)=> {
        console.log('signed out');
        // console.log(u);
    }).catch((error)=> {
        console.log('error in sign out ',error);
    })
}


    render() {
        const {quotes: allQuotes, searchVal, successMessage} = this.state;
        const {length : count} =this.state.quotes;
        const {perPageCount, currentPage, cuurentPageQuotes, filteredQuotes}= this.state;
        
        return(
            <div>
                <div className='mainSearchpage'>
                    <div className='searchHeading'>
                            <h1> Search Page</h1>
                    </div>

                    <div className='searchLinks'>
                            <ul> 
                                <li> <Link to='/profile' > Profile </Link> </li>
                                <li> <Link to='/' onClick={this.logOut}> Logout </Link> </li>
                            </ul>
                    </div>

                </div>

                 <Input type='text' label='Search' name='search'  placeholder='search' value={searchVal}  onChange={this.onSearchChange} successMessage={successMessage}/>
               <div className='border'>

          
                {filteredQuotes.map((quote, index)=> {
                    return  <ul className='list-group' key={index}>
                                <li className='list-group-item'> {quote} </li>  
                    </ul> 
                })} 
                </div>
                <Pagination count={count} perPageCount={perPageCount} onPageChange={this.handlePageChange} currentPage={currentPage}/>

            </div>
        )
    }
}
export default Search;