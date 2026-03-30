import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AImusicStudio from './pages/AIMusicStudio';
import AImusicVideos from './pages/AIMusicVideos';
import AICoverStudio from './pages/AICoverStudio';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/ai-music-studio" component={AImusicStudio} />
                <Route path="/ai-music-videos" component={AImusicVideos} />
                <Route path="/ai-cover-studio" component={AICoverStudio} />
                <Route path="/" exact>
                    <h1>Welcome to AI Music Studio</h1>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;