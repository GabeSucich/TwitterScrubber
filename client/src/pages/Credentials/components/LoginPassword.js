import React from 'react'

import { Container, Input, Button, Icon, Message, Divider } from "semantic-ui-react"

export default function LoginPassword({ validUser, currentPassword, handlePasswordChange, passwordError, checkPassword, validPassword, ...props }) {

    if (!validUser) {
        return null
    } else if (validPassword) {
        return (
            <Container fluid>n
                <Input
                    fluid
                    disabled
                    icon="lock open"
                    iconPosition="left"
                    label={<Button color="green"><Icon name="check" color="white"/></Button>}
                    labelPosition="right"
                    placeholder="Password"
                    value={currentPassword}
                />
            </Container>
        )
    } else {
        return (
            <Container fluid>
                <Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    value={currentPassword}
                    onChange={e => handlePasswordChange(e.target.value)}
                />
                <Divider hidden fitted/>
                {passwordError ? <Message compact negative content="Password incorrect" /> : null}
                {currentPassword &&
                    <Button animated onClick={checkPassword}>
                        <Button.Content visible>Login</Button.Content>
                        <Button.Content hidden>
                            <Icon name="twitter" />
                        </Button.Content>
                    </Button>}

            </Container>

        )
    }

}