import React from 'react'
import Comment from './Comment'
function Comment2({child, text}) {
  return (
    <div className='border-spacing'>
        { child && child.map((child, i)=>(
                        <div key={i} >
                            <div className='blue' dangerouslySetInnerHTML={{__html: text}}></div>
                            {/* <Comment child={child.children} text={child.text}/> */}
                        </div>
                    ))
                }
    </div>
  )
}

export default Comment2