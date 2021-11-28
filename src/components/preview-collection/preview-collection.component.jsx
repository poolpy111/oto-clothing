import React from 'react';
import './preview-collection.styles.scss';

function PriveiwCollection({ title, items }) {
    return (
        <div classname="collection-preview">
            <h1 classname="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map((item => (
                            <div key={item.id}>{item.name}</div>
                    )))
                }
            </div>
        </div>
    )
}

export default PriveiwCollection
