import React from 'react';

const Card = ({name,username,id}) => 
{
    
    return(

        <div className='bg-light-green dib br3 pa3 ma2 grow' >
        <img  alt='dogs' src={`https://robohash.org/${id}?200x200`} />
        <div>
          <h2>{name}</h2>
          <p>{username}</p>
            
        </div>

        </div>


    );
}

export default Card;
