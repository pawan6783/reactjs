import React from 'react';
import logger from '../logger';
const Hello = () => {
    
    logger.info("<Hello /> component called");
    
    return(

        <div>
            <h1>Hello World</h1>
        </div>
    );
}

export default Hello;