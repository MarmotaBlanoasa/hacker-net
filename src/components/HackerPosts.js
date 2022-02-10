import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { searchUrl } from '../services/apiLinks';
import HackerPost from './HackerPost';

function HackerPosts({fullQuery}) {
   
    const [dataFetched, setDataFetched] = useState([])
    const [fetched, setFetched] = useState(false)

    useEffect(()=>{
        const fetchQuery = async () => {
            try{
                const response = await fetch(`${searchUrl}fullQuery`)
                const data = await response.json()
                setDataFetched(data)
                setFetched(true)
            }catch(err){
                console.log(err)
            }
        
        }
        fetchQuery();
    },[fullQuery])

console.log(dataFetched)
  
if(fetched){
    return(
        <div className='after-search'>
            <h1 className='green'>HACKER NEWS SEARCH RESULTS</h1>
            <hr className='green-hr' />
            {dataFetched.hits.map((hit, i) => {
                return(
                        <HackerPost key={i} hit={hit}/>
                      )
                    })}       
        </div>
    )}
    if(!fetched){
        return <h1 className='empty-search'>Loading...</h1>
    }
}

export default HackerPosts;
