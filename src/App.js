import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import PostJobs from './components/PostJobs/PostJobs';
import ViewJobs from './components/ViewJobs/ViewJobs';
// import SideNavigationBar from './components/SideNavigationBar/SideNavigationBar';


//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			{/* <SideNavigationBar /> */}
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/signup" exact component={SignUp} />
				<Route path="/pricing" exact component={Pricing} />
				<Route path="/PostJobs" element={<PostJobs />} />
        		<Route path="/ViewJobs" element={<ViewJobs />} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
