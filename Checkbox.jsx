import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react'
import { Article } from './Article'
import { Questionss } from './Questionss'



export const Check = () => {
    const [value, setValue] = React.useState('')
    return (
        <>
        <div className='box'>
        <Form>
            <Form.Field>
                <strong>Select Post Type: </strong>
                <span className='que'>
                <Checkbox
                    radio
                    label='Question'
                    name='checkboxRadio'
                    value='Question'
                    checked={value === 'Question'}
                    onChange={(e, data) => setValue(data.value)}
                />
                </span>
                <span className='art'>
                    <Checkbox
                        radio
                        label='Article'
                        name='checkboxRadio'
                        value='Article'
                        checked={value === 'Article'}
                        onChange={(e, data) => setValue(data.value)}
                    />

                </span>
            </Form.Field>
        </Form>
        </div>
        
        {value === "Question" ? <Questionss /> : value === "Article" ? <Article /> : null}
        </>
    )
}
