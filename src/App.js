import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
       
        this.setState({
          currentUser: {
            id: userAuth.uid,
            createdAt: userAuth.metadata.createdAt
          }
        },() => {
          
        })
        
      } else{
        this.setState({ currentUser: null})
      }
      
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    
    return (
      <div>
        <BrowserRouter>
        <Header currentUser={this.state.currentUser}/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="signin" element={<SignInAndSignUpPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
