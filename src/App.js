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
						<Route path='/admin'>
							<Admin></Admin>
						</Route>
						<Route path='/manageorders'>
							<ManageOrders></ManageOrders>
						</Route>
						<Route path='/orders'>
							<Orders></Orders>
						</Route>
						<Route path='/manageorders'>
							<Orders></Orders>
						</Route>
						<Route path='/packages/:productId'>
							<SinglePackage></SinglePackage>
						</Route>
						<Route path='/order/:productId'>
							<OrderPage></OrderPage>
						</Route>
						<Route path='/knowledges/:knowledgeId'>
							<SingleKnowledge></SingleKnowledge>
						</Route>
						<Route path='/news/:newsId'>
							<SingleNews></SingleNews>
						</Route>
						<Route path='/addpackage'>
							<AddPackage></AddPackage>
						</Route>
						<Route path='/addnews'>
							<AddNews></AddNews>
						</Route>
						<Route path='/addcomments'>
							<AddComments></AddComments>
						</Route>
						<Route path='/addknowledge'>
							<AddKnowledge></AddKnowledge>
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
