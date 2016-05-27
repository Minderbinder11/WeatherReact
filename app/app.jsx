var React               = require('react');
var ReactDOM            = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main                = require('Main');
var Weather             = require('Weather');
var About               = require('About');
var Examples            = require('Examples');
var FiveDay             = require('FiveDay');

/*<!-- ReactDOM is where I seem to requster all of the page elements and add in the routing--> */

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')

$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/"             component={Main}>
            <Route path="about"     component={About}/>
            <Route path="examples"  component={Examples}/>
            <Route path="fiveday"   component={FiveDay}/>
            <IndexRoute             component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
