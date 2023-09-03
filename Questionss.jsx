import React from 'react'
import { Button } from 'semantic-ui-react'

export const Questionss = () => {
  return (
    <>
    <h4 className='head'>What do you want to ask or share</h4>
    <div className='post-type'>Title</div>
    <textarea className='tag' name="text" id="text1" cols="77" rows="1" placeholder='Start your question with how, what, why, etc.'></textarea>
    
    <div className='desc-class'>Describe your problem</div>
    <textarea className='text-desc' name="desc" id="desc1" cols="83" rows="10"></textarea>

    <div className='post-type'>Tags </div>
    <textarea className='tag' name="text" id="text1" cols="78" rows="1" placeholder='Please add up to 3 tags to describe what your question is about e.g., Java'></textarea>
    <Button className='btn' primary>Post</Button>
    </>
  )
}
