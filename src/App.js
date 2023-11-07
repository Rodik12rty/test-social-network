import React, { Suspense } from 'react';
import {compose} from "redux";
import {Provider, connect} from 'react-redux';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {HashRouter, BrowserRouter, Navigate, Routes, Route, useLocation, useNavigate, useParams} from "react-router-dom";
import {initializeApp} from '../src/redux/app-reducer';
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux-store";
const ProfileContainer = React.lazy( () => import('./components/Profile/ProfileContainer') );
const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer') );


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }


    render() {

        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper-content">
                <Suspense fallback={<Preloader />}>
                    <Routes>
                        <Route path="/profile/:userId" element={<ProfileContainer />} />
                        <Route path="/profile/" element={<ProfileContainer />} />
                        <Route path="/" element={<Navigate to={"/profile"} />} />
                        <Route path="/dialogs/*" element={<DialogsContainer />} />

                        <Route path="/users" element={<UsersContainer />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />

                        <Route path="*" element={<div>404 NOT FOUND</div>} />
                    </Routes>
                </Suspense>
                </div>
            </div>
        )

    };

};


let mapStateToProps = (state) => ({
    initialized: state.app.initialized
});


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props} router={{ location, navigate, params }} />
        );
    }

    return ComponentWithRouterProp;
}


let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

// const SamuraiJSApp = (props) => {
//     return <BrowserRouter>
//             <Provider store={store}>
//                 <AppContainer />
//             </Provider>
//         </BrowserRouter>
// }

const SamuraiJSApp = (props) => {
    return <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
}


export default SamuraiJSApp;
