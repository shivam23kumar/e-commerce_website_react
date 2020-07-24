import React from'react';
import Shop_data from "./shop.data.js";
import CollectionPreview from '../../components/preview_collection/preview.components';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            collections: Shop_data
              
        }
    }
    render(){
      const {collections} = this.state;
      return(<div className='shop-page'>
        {
          collections.map(({id,...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>);
      
    }

}

export default ShopPage;