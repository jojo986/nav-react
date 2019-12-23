import React,{ Component } from 'react';
import Nav from './Nav';
import PageContent from './PageContent';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <header><Nav /></header>
                <main className="container"><PageContent /></main>
            </React.Fragment>
        )
    }
}

export default Main;