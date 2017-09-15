import { Route, Switch } from 'react-router-dom'

// test
import HomeComponent from './home';
import AboutComponent from './about';
const NoMatch = () => <p>Page not found</p>;


const App = () => (
	<Switch>
	<Route path="/" exact component={HomeComponent}/>
	<Route path="/about" component={AboutComponent}/>
	<Route component={NoMatch}/>
	</Switch>
	)

export default App

// const RoutedApp = () => (
//     <Router history = {hashHistory}>
//         <Route path="/" component={HomeComponent} />
//         <Route path="/about" component={AboutComponent} />
//         <Route path="*" component={NoMatch} />
//     </Router>
// );

// <Route exact path="/" component={HomeComponent} />
// <Route path ="/about" component={AboutComponent} />

// ReactDOM.render(<App />, document.getElementById('contents')); // Render the component inside the content Node

// if(module.hot){
//     module.hot.accept();
// }