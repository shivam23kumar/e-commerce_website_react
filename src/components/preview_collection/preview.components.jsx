import React from 'react';
import './preview.styles.scss';
import CollectionItem from '../../components/collection-item/collection.component'

const CollectionPreview = ({title,items}) =>(
    <div className="collection_preview">
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item,idx)=>idx<4)
                .map(({id,...otherItemProps})=>(
                    <CollectionItem key={id}{...otherItemProps} />

                ))}

                    
        </div>
    </div>
);
export default CollectionPreview;