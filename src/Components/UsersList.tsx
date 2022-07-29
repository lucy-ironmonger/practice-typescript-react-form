import {ReactElement} from "react";

const UsersList = (props: any): ReactElement => {
    return (
        <>
            <div>Users</div>
            {props.users && props.users.map(
                (user: any) => {
                    return (
                        <>
                        <div>{user.name} {user.age}</div>
                    </>)
                }
            )}
        </>
    )
}

export default UsersList
