import React, { useState, useRef } from 'react'
import { TextArea, Container, Button, Grid, Form, Divider, Input } from 'semantic-ui-react'



export default function NewMessageTemplate({ tweet, ...props }) {

    const [currentTemplate, editCurrentTemplate] = useState("")
    const currentTitle = useRef()

    const additions = [
        { visible: "full name", addition: "{{name}}" },
        { visible: "first name", addition: "{{firstName}}" },
        { visible: "last name", addition: "{{lastName}}" }

    ]

    const handleTemplateChange = edited => {
        editCurrentTemplate(edited)
    }


    const handleTemplateClick = addition => {
        editCurrentTemplate(currentTemplate + addition)
    }

    return (
        <Container fluid>
            <Grid celled="internally">
                <Grid.Column width={12}>
                    <Input size="small" ref={currentTitle} placeholder="Template Title" />
                    <Divider />
                    <Form>

                        <TextArea
                            value={currentTemplate}
                            placeholder="Write your new message template here. Use the 'template buttons' to create placeholders which will be filled based on the user whom you are contacting."
                            onChange={(e) => handleTemplateChange(e.target.value)}
                        />
                    </Form>
                </Grid.Column>
                <Grid.Column>
                    
                </Grid.Column>
            </Grid>

            <Grid centered columns={4}>
                {additions.map((addition, index) => {
                    return (
                        <Grid.Column>
                            <Button primary onClick={() => handleTemplateClick(addition.addition)}>{addition.visible}</Button>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </Container>
    )
}

