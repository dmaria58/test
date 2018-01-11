import React, {Component, PropTypes} from 'react';
import { HashRouter } from 'react-router-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import login from '../Component/Login/index'; //登录
import store from '../Redux/Store/index';
import createHistory from 'history/createBrowserHistory'
import ShowContainer from 'bundle-loader?lazy&name=app-[name]!../Component/Show/index.js';
import Mode1Container from 'bundle-loader?lazy&name=app-[name]!../Component/Mode1/index.js';
const history = createHistory()
class Bundle extends React.Component {
    state = {
        mod: null
    }
    componentWillMount() {
        this.load(this.props)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }
    load(props) {
        this.setState({
            mod: null
        })
        props.load((mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        })
    }
    render() {
        if (!this.state.mod)
            return false
        return this.props.children(this.state.mod)
    }
}

const requireSessionId=(nextState,replace,next)=>{  //验证用户是否登录成功
   /* let sessionId=sessionStorage.getItem("sessionid");
    if(sessionId && sessionId!=""){ 
        next()
    }else{
        //alert("用户未登陆");
        replace("/");
        next();
    }*/
    next();
}
const Show = () => (
    <Bundle load={ShowContainer}>
        {(Show) => <Show />}
    </Bundle>
)
const Mode1 = () => (
    <Bundle load={Mode1Container}>
        {(Mode1) => <Mode1 />}
    </Bundle>
)
const RouteConfig =()=> (
    <HashRouter  history={history}>
        <Router basename="/" >
            <div>
                <Route exact path="/" component={login} />
                <Route path="/Show" component={Show} />
                <Route path="/Mode1" component={Mode1} />
            </div>
        </Router>
    </HashRouter>
);

export default RouteConfig;