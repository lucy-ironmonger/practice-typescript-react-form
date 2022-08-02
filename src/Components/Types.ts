export interface UserType {
    name: string,
    age: string,
    key?: number
}

export interface FormProps {
    onSubmit_cont: ({name, age}: UserType) => void
}