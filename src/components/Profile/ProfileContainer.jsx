import React from 'react';
import {compose} from "redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {connect} from 'react-redux';
import Profile from './Profile';
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from '../../redux/profile-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
            
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        // let userId = this.props.router.params.userId;
        // if (!userId) {
        //     // userId = 2;
        //     // userId = 27124;
        //     userId = this.props.authorizedUserId;
        //     if (!userId) {
        //         // // редирект на login, но лучше не использовать этот метод, потому что мы вмешиваемся
        //         // // в жизненный цикл компоненты и поэтому редиректы лучше делать через render,
        //         // // jsx-ом редирект делать
        //         // this.props.history.push("/login");
        //     }
        // }
        // this.props.getUserProfile(userId);
        // this.props.getStatus(userId);
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile();
        }
    }
    
    render() {
        // console.log('RENDER PROFILE')
        return (
            <div>
                <Profile {...this.props}
                        isOwner={!this.props.router.params.userId} 
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        savePhoto={this.props.savePhoto}
                />
            </div>
        )
    };
};

let mapStateToProps = (state) => {
    // console.log('mapStateToProps PROFILE')
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    })
};

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

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

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// compose(
//     connect(mapStateToProps, {getUserProfile}),
//     withRouter,
//     withAuthRedirect
// )(ProfileContainer);


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);
