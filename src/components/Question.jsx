import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class Question extends Component {
  
    question;
    answer;
    constructor(props){
        super(props);
        this.question = props.question.question;
        this.answer = props.question.answer;
    }
        
    state = { activeIndex: 1 }
    
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
        <Accordion>
            <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
            >
            <Icon name='dropdown' />
            {this.question}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
            <p>
                {this.answer}
            </p>
            </Accordion.Content>
        </Accordion>
        )
    } 
}
