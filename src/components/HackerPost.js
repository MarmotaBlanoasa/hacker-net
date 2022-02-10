import React from 'react';
import Moment from 'react-moment';

function HackerPost({hit}) {

  return <div className='story-container'>
                <h1 className='green'>{hit.story_title}</h1>
                <div className='container-info'>
                    <h2 className='green'>By: {hit.author}</h2>
                    <h2 className='green posted'>
                        Posted: 
                        <Moment fromNow ago element='span' className='time'>
                        {hit.created_at}
                        </Moment>
                        ago
                    </h2>
                
                </div>
  </div>;
}

export default HackerPost;
