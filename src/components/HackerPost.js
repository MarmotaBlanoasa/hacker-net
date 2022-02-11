import React, { useState } from 'react';
import Moment from 'react-moment';
import Comments from './Comments';
function HackerPost({hit, id}) {
    const [showComments, setShowComments] = useState(false)
    console.log(hit)
  return <div className='story-container'>
                <div className='container-info'>
                    <h1 className='green'>{hit.title}</h1>
                    {showComments && <h1 className='green points'> Points: {hit.points}</h1>}
                </div>
                <div className='container-info'>
                    <h2 className='green'>By: {hit.author}</h2>
                    <h2 className='green posted'>
                        Posted: 
                        <Moment fromNow ago element='span' className='time'>
                        {hit.created_at}
                        </Moment>
                        ago
                    </h2>
                <button className='green show-comments' onClick={()=> {setShowComments(!showComments)}}>Show Comments</button>
                </div>
                {showComments && <Comments id={id}/>}
            </div>;
}

export default HackerPost;
