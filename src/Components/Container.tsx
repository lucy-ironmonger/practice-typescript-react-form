import {ReactElement, useState} from "react";
import Form from "./Form"
import UsersList from "./UsersList";
import {UserType} from "./Types";

const Container = (): ReactElement => {

    const [users, setUsers] = useState<UserType[]>([{name: "Lucy", age: "33"}])
    // users is an array of objects of type UserType (name, age)

    console.log(users)

    const addUser_cont = ({name, age}: UserType): void => {
        setUsers(prevUsers => [
            ...prevUsers,
            {name: name, age: age},
        ])
    }

    return (
        <>
            <Form onSubmit_cont={addUser_cont}/>
            <UsersList users={users}/>
        </>
    )
}

export default Container
