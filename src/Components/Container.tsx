import Form from "./Form"
import {ReactElement, useState} from "react";
import UsersList from "./UsersList";

const Container = (): ReactElement => {

    interface User {
        name: string,
        age: number
    }

    const [users, setUsers] = useState<User[]>([{name: "Lucy", age: 33}])

    const addUser = ({name, age}: User): void => {
        setUsers(prevUsers => [
            ...prevUsers,
            {name: name, age: age},
        ])
    }

    return (
        <>
            <Form onSubmit={addUser}/>
            <UsersList/>
        </>
    )
}

export default Container
