import {ReactElement, useState} from "react";
import {FormProps, UserType} from "./Types";

const Form = ({onSubmit_cont}: FormProps): ReactElement => {
    const [state, setState] = useState<UserType>({name: "", age: ""})

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        onSubmit_cont(state)
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        console.log("e", e)
        const value = e.currentTarget.value;
        setState({...state, [e.currentTarget.name]: value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label>Enter name
                        <input type="text" name="name" value={state.name} onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <label>Age (Years)
                        <input type="number" name="age" value={state.age} onChange={handleChange}/>
                    </label>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>)
}

export default Form;
