import React from 'react'
import {Button} from 'semantic-ui-react'

export default function RejectButton({onClick}) {
    
    return (
        <Button onClick={onClick} color={"red"}>Don't show again</Button>
    )
}