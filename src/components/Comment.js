import React from 'react'
import Comment2 from './Comment2'
function Comment({children, text}) {
  return (

            <div className='border'>
                < div dangerouslySetInnerHTML={{__html: text}}></div>
                { children && children.map((child, i)=>(
                        <div key={i}>
                            <div dangerouslySetInnerHTML={{__html: child.text}}></div>
                            <Comment2 child={child.children} text={child.text}/>
                        </div>
                    ))
                }

            </div>
  
)
}

export default Comment