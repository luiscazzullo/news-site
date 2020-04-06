import React from 'react';
//Component
import NewCard from '../newCard/NewCard';
const NewsList = ({ news }) => {
    return ( 
        <div className="row">
            {news.map(notice => (
                <NewCard 
                    key={notice.url}
                    notice={notice}
                />
            ))}
        </div>
     );
}
 
export default NewsList;