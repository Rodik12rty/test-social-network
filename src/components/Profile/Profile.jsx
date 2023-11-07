import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto}
                        saveProfile={props.saveProfile}
                        isOwner={props.isOwner}
                        profile={props.profile}
                        status={props.status}
                        updateStatus={props.updateStatus} 
            />
            <MyPostsContainer />
        </div>
    )
}


export default Profile;
