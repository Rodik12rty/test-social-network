import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validators"; 
import {Textarea} from "../../Common/FormsControls/FormsControls";


const maxLength = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"} 
                       component={Textarea}
                       name={"newMessageBody"}
                       validate={[required, maxLength]} 
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}


export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);
