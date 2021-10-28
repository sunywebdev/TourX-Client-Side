import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { NotFound } from "http-errors";

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<BrowserRouter>
					<Header></Header>
					<Switch>
						<Route exact path='/'>
							<Home></Home>
						</Route>
						<Route path='/login'>
							<Login></Login>
						</Route>
						<Route path='/signup'>
							<SignUp></SignUp>
						</Route>
						<Route path='*'>
							<NotFound></NotFound>
						</Route>
					</Switch>
					<Footer></Footer>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
