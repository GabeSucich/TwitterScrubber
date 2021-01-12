import React, { useState, useEffect } from 'react'

import { TextArea, Form, Container, Button } from "semantic-ui-react"

import { useMessageContext } from "../../../../GlobalStates/MessageState"
import { CLEAR_MESSAGE_TEMPLATE } from "../../../../GlobalStates/MessageState/messageAction"

import NewMessageTemplate from "../NewMessageTemplate"

import "./style.css"

export default function MessageTemplate({ tweet, ...props }) {

    const [messageState, messageDispatch] = useMessageContext()
    const [messageBody, editMessageBody] = useState(messageState.current_message_template ? messageState.current_message_template.message : "Select a message template")
    const [newTemplate, setNewTemplate] = useState(false)

    useEffect(() => {

        if (messageState.current_message_template) {


            editMessageBody(messageState.current_message_template.createMessageFromTemplate(processTweetForTemplate(tweet)))
        }

    }, [messageState.current_message_template])

    const handleChange = edited => {

        editMessageBody(edited)
    }

    const startNewTemplate = () => {
        setNewTemplate(true)
        messageDispatch({ type: CLEAR_MESSAGE_TEMPLATE })
    }

    if (!newTemplate) {
        return (

        <Container fluid>
            <Form>
                <TextArea value={messageBody} onChange={(event) => handleChange(event.target.value)} />
            </Form>
            <Button primary onClick = {() => startNewTemplate(true)}>Create New Template</Button>
        </Container>
        )

    } else {
        return (
            <NewMessageTemplate/>
        )
    }
    }
    

function processTweetForTemplate(tweet) {

    const processedTweet = { ...tweet }
    const firstAndLast = processedTweet.name.split(" ")
    processedTweet["lastName"] = firstAndLast[1]
    processedTweet["firstName"] = firstAndLast[0]
    return processedTweet
}