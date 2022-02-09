import React from 'react';
import Moment from 'react-moment';

function HackerPost({hit}) {

  return <div>
                <h1 className='green'>{hit.story_title}</h1>
                <div className='container-info'>
                    <h3 className='green'>By: {hit.author}</h3>
                    <h3 className='green'>
                        Posted: 
                        <Moment fromNow ago element='span' className='time'>
                        {hit.created_at}
                        </Moment>
                        ago
                    </h3>
                
                </div>
  </div>;
}

export default HackerPost;
