import React from "react"

import { Segment, Button, Icon, Grid, Divider } from "semantic-ui-react"

import Sidebar from "./components/Sidebar"
import MessageTemplate from "./components/MessageTemplate"

import "./style.css"


export default function MessageDisplay({ closeDimmer, tweet, ...props }) {

    return (

        <Segment size="massive" id="dimmer">

            <Button icon color="red" onClick={closeDimmer} floated="right" size="small" id="close-button">
                <Icon size="small" inverted name="close" />
            </Button>
            <Divider/>
            <Grid>
                <Grid.Column width = {4}>
                    <Sidebar/> 
                </Grid.Column>
                <Grid.Column width = {12}>
                    <MessageTemplate tweet = {tweet}/>
                </Grid.Column>
               
            </Grid>
            
            
        

        </Segment>
    )

}