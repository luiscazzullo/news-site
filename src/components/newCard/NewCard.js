import React from 'react';
const NewCard = ({ notice }) => {
    const { urlToImage, url, title, description, source } = notice;
    const image = (urlToImage) ? 
            <div className="card-image">
                <img alt={title} src={urlToImage} />
                <span className="card-title">{source.name}</span>
            </div> 
            : null
    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                {image}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >
                        Ver noticia
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default NewCard;