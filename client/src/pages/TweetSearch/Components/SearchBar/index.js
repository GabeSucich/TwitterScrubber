import React, {useState, useEffect} from 'react'
import {useTweetContext} from "../../../../GlobalStates/TweetState"
import {Segment, Input, Button, Icon, Container} from "semantic-ui-react"
import {SET_KEYWORD} from "../../../../GlobalStates/TweetState/tweetAction"
import KeywordAPI from "../../../../utils/APIs/KeywordAPI"

export default function SearchBar() {

    const [tweetState, tweetDispatch] = useTweetContext()
    const [keyword, setKeyword] = useState("")
    const [keywordOptions, setKeywordOptions] = useState([])

    useEffect(() => {
        KeywordAPI.getAllKeywords().then(dbKeywords => {
            setKeywordOptions(dbKeywords.map(dbKeyword => dbKeyword.word))
        })
    }, [])

    const handleSubmit = () => {
        tweetDispatch({type: SET_KEYWORD, keyword: keyword})
        setKeyword("")
    }

    const handleChange = (event) => {
        setKeyword(event.target.value)
    }

    const handleKeywordClick = keyword => {
        setKeyword(keyword)
    }

    return (
        <Container fluid>
            <Segment>
                <Input placeholder='Search...' value={keyword} onChange={(event) => handleChange(event)}/>
                {keyword ? <Button icon color="violet" onClick={handleSubmit} ><Icon name="search"/></Button> : null}
            </Segment>
            {keywordOptions.length > 0 &&
                <Segment>
                    {keywordOptions.map((keyword, index) => <KeywordButton onClick = {handleKeywordClick} key={index} keyword = {keyword}/>)}
                    </Segment>
            }
        </Container>
    )

}

function KeywordButton(props) {

    return (
        <Button color="violet" onClick={() => props.onClick(props.keyword)}>{props.keyword}</Button>
    )

}