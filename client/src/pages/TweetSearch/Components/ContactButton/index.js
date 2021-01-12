import React, { useState } from 'react'
import { Button, Dimmer, Container, Segment, Icon} from "semantic-ui-react"

import MessageDisplay from "../../../MessageDisplay"


import "./style.css"


export default function ContactButton({ tweet, ...props }) {

    const [dimmerActive, setDimmerActive] = useState(false)

    const openDimmer = () => {
        setDimmerActive(true)
    }

    const closeDimmer = () => {
        setDimmerActive(false)
    }

    return (
        <Container fluid>
            <Button primary onClick = {openDimmer}>Contact</Button>
            <Dimmer page active = {dimmerActive} onClickOutside = {closeDimmer}>
                <MessageDisplay tweet = {tweet} closeDimmer = {closeDimmer} />
            </Dimmer>
        </Container>
    )
        
        

}
