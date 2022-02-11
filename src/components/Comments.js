import React, { useEffect, useState } from 'react'
import {itemUrl} from '../services/apiLinks'
import Comment from './Comment'

function Comments({id}) {
    const [storyData, setStoryData] = useState([])
    const [isFetched, setisFetched] = useState(false)

    useEffect(()=>{
        const fetchComments = async () =>{
            try{
                const response = await fetch(`${itemUrl}${id}`)
                const data = await response.json()
                setStoryData(data)
                setisFetched(true)
            }catch(err){
                console.log(err)
            }
        }
        fetchComments()
    },[id])
    
    const {children} = storyData
    console.log(children)
    if(isFetched){
        return <div>
            {children && children.map((child, i)=>
            (
               <div key={i}>
               <Comment children={child.children} text={child.text}/>
               </div>
            ))}

        </div>
    }
    if(!isFetched){
        return <p>Loading...</p>
    }

}

export default Comments;