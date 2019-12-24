import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Gallery from './Gallery/Gallery'
import Discussion from './Discussion'
import Rules from './Rules'
import Workflow from './Workfolw';

class PageContent extends Component {
    render() {
        return (
            
                <Switch>
                    <Route exact path="/" component={Gallery} />
                    <Route path="/discussion" component={Discussion} />
                    <Route path="/rules" component={Rules} />
                    <Route path="/workflow" component={Workflow} />
                </Switch>
         
        )
    }
}

export default PageContent;