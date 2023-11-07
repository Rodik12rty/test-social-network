import React from 'react';
import {Field, reduxForm} from "redux-form";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";


const maxLength = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Post message"} 
                       component={Textarea} 
                       name={"newPostText"}
                       validate={[required, maxLength]} 
                /> 
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)

const MyPosts = React.memo((props) => {

    let postsElements = 
        [...props.posts]
            .reverse()
            .map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
});


export default MyPosts;
