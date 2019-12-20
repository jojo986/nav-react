import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Discussion from './Discussion'
import Rules from './Rules'
import Workflow from './Workfolw';

class PageContent extends Component {
    render() {
        return (
            <section>
                <Switch>
                    <div>
                        <Route exact path="/" component={Discussion} />
                        <Route exact path="/rules" component={Rules} />
                        <Route exact path="/workflow" component={Workflow} />
                   </div>
                </Switch>
            </section>
        )
    }
}

export default PageContent;