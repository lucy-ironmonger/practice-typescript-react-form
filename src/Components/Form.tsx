import {ReactElement, useState} from "react";
import {UserType} from "./Types";

const Form = (props: any): ReactElement => {
    const [state, setState] = useState<UserType>()

console.log(state)

    const handleSubmit_form = (e: any) => {
        e.preventDefault()
        props.onSubmit_cont(state)
    }

    const handleChange = (e: any) => {
    const value = e.target.value;
    setState({...state, [e.target.name]: value})
    }

    return (
        <form onSubmit={handleSubmit_form}>
            <div>
                <label>Enter name
                    <input type="text" name="name" value={state?.name} onChange={handleChange}/>
                </label>

                <label>Age (Years)
                    <input type="number" name="age" value={state?.age} onChange={handleChange}/>
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>)
}

export default Form;
