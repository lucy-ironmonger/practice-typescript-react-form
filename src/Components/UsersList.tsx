import {ReactElement} from "react";
import User from "./User"
import {UserType} from "./Types";

const UsersList = (props: { users: UserType[] }): ReactElement => {
    return (
        <>
            <h2>Users</h2>
            {props.users && props.users.map(
                (user: UserType) => {
                    return (
                        <>
                            <User name={user.name} age={user.age} key={Math.random()}/>
                        </>)
                }
            )}
        </>
    )
}

export default UsersList
