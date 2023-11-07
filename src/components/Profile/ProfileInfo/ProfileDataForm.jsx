import s from './ProfileInfo.module.css';
import style from '../../Common/FormsControls/FormsControls.module.css';
import {reduxForm} from "redux-form";
import {createField, Textarea, Input} from '../../Common/FormsControls/FormsControls';


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error &&
            <div className={style.formSummaryError}>
                {error}
            </div>
        }
        <div>
            <b>Full name</b>: {createField("Full name", {}, Input, "fullName", [])}
        </div>
        <div>
            <b>Looking for a job</b>: {createField("", {type: "checkbox"}, Input, "lookingForAJob", [])}
        </div>
        <div>
            <b>My professional skills</b>: {createField("My professional skills", {}, Textarea, "lookingForAJobDescription", [])}
        </div>
        <div>
            <b>About me</b>: {createField("About me", {}, Textarea, "aboutMe", [])}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: {createField(key, {}, Input, "contacts." + key, [])}</b> 
                </div>
            })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)


export default ProfileDataFormReduxForm;
