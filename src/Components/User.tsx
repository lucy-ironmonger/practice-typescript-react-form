import {UserType} from "./Types";

const User = (props: UserType ) => {
    console.log("props", props)
    return (
        <>
            <p>{props.name} {props.age}</p>
        </>
    )
}

export default User