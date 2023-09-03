import React from 'react'
import { Button } from 'semantic-ui-react'

export const Article = () => {
    return (
        <>
            <h4 className='head'>What do you want to ask or share</h4>
            <div className='post-type'>Title</div>
            <textarea className='tag' name="text" id="text1" cols="77" rows="1" placeholder='Enter a descriptive title'></textarea>

            <div className='desc-class'>Abstract</div>
            <textarea className='text-desc' name="desc" id="desc1" cols="83" rows="3" placeholder='Enter a 1-paragraph abstract'></textarea>

            <div className='desc-class'>Article text</div>
            <textarea className='text-desc' name="desc" id="desc1" cols="83" rows="6" placeholder='Enter a 1-paragraph abstract'></textarea>

            <div className='post-type'>Tags </div>
            <textarea className='tag' name="text" id="text1" cols="78" rows="1" placeholder='Please add up to 3 tags to describe what your question is about e.g., Java'></textarea>
            <Button className='btn' primary>Post</Button>
        </>
    )
}
