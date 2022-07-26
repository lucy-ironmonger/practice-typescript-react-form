import {ChangeEvent, ReactElement} from "react";

const Form = (props: { onSubmit: (arg0: ChangeEvent<HTMLInputElement>) => void; }): ReactElement => {

    const handleSubmit = (e) => {
        props.onSubmit(e)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Enter name
                    <input type="text" name="name"/>
                </label>
            </div>
            <div>
                <label>Age (Years)
                    <input type="number" name="age"/>
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>)
}

export default Form;
