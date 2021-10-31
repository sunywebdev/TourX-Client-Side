import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import SignUp from "./Components/Pages/SignUp/SignUp";
import NotFound from "./Components/Pages/NotFound/NotFound";
import AddPackage from "./Components/Pages/AddPackage/AddPackage";
import AddNews from "./Components/Pages/AddNews/AddNews";
import AddComments from "./Components/Pages/AddComments/AddComments";
import AddKnowledge from "./Components/Pages/AddKnowledge/AddKnowledge";
import SingleNews from "./Components/Pages/SingleNews/SingleNews";
import SingleKnowledge from "./Components/Pages/SingleKnowledge/SingleKnowledge";
import SinglePackage from "./Components/Pages/SinglePackage/SinglePackage";
import Admin from "./Components/Pages/Admin/Admin";
import OrderPage from "./Components/Pages/OrderPage/OrderPage";
import Orders from "./Components/Pages/Orders/Orders";
import ManageOrders from "./Components/Pages/ManageOrders/ManageOrders";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
						<PrivateRoute path='/admin'>
							<Admin></Admin>
						</PrivateRoute>
						<PrivateRoute path='/manageorders'>
							<ManageOrders></ManageOrders>
						</PrivateRoute>
						<PrivateRoute path='/orders'>
							<Orders></Orders>
						</PrivateRoute>
						<PrivateRoute path='/manageorders'>
							<Orders></Orders>
						</PrivateRoute>
						<PrivateRoute path='/packages/:productId'>
							<SinglePackage></SinglePackage>
						</PrivateRoute>
						<PrivateRoute path='/order/:productId'>
							<OrderPage></OrderPage>
						</PrivateRoute>
						<PrivateRoute path='/knowledges/:knowledgeId'>
							<SingleKnowledge></SingleKnowledge>
						</PrivateRoute>
						<PrivateRoute path='/news/:newsId'>
							<SingleNews></SingleNews>
						</PrivateRoute>
						<PrivateRoute path='/addpackage'>
							<AddPackage></AddPackage>
						</PrivateRoute>
						<PrivateRoute path='/addnews'>
							<AddNews></AddNews>
						</PrivateRoute>
						<PrivateRoute path='/addcomments'>
							<AddComments></AddComments>
						</PrivateRoute>
						<PrivateRoute path='/addknowledge'>
							<AddKnowledge></AddKnowledge>
						</PrivateRoute>
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
