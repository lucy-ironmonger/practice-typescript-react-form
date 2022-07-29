const User = (props: any) => {
    return (
        <>
        <div>User</div>
    <h3>{props.user.name}</h3>
    <h3>{props.user.age}</h3>
            </>
)
}

export default User