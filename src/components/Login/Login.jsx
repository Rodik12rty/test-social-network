import {Navigate} from 'react-router-dom';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../utils/validators/validators";
import {Input} from "../Common/FormsControls/FormsControls";
import {login} from "../../redux/auth-reducer";
import style from '../Common/FormsControls/FormsControls.module.css';
import {createField} from '../Common/FormsControls/FormsControls';


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form action="" onSubmit={handleSubmit}>
            {createField("Email", {}, Input, "email", [required])}
            {createField("Password", {type: "password"}, Input, "password", [required])}
            {createField(null, {type: "checkbox"}, Input, "rememberMe", [], "remember me")}
            { captchaUrl && <img src={captchaUrl} />}
            {captchaUrl &&  createField("Symbols from image", {}, Input, "captcha", [required])}

            {error &&
                <div className={style.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) return <Navigate to={"/profile"} />

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});


export default connect(mapStateToProps, {login})(Login);
