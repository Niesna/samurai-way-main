import React from "react";

const Technologies = () => {
    return (
        <ul>
            <UnList />
        </ul>
    )
}

const UnList = () => {
            return (
                <ul>
                <List1 value={"CSS"}/>
                <List1 value={"HTML"}/>
                <List1 value={"JS"}/>
                <List1 value={"React"}/>
                </ul>
            )
}

type List1PropsType = {
    value: string
}
function List1  (props: List1PropsType) {
    return <li>{props.value}</li>
}
export default Technologies