import React, { Component } from 'react';
import Searchitem from '../components/Searchitem';


class SearchOverview extends Component {

render(){
        return this.props.searchResults.items.map((item)=>{
            return( 
                <Searchitem  
                key={item.id}
                name={item.name}
                score={item.score}
                updated_at={item.updated_at}
                created_at={item.created_at}
                language={item.language}
                html_url={item.html_url}
                />
            );
        });
    }
}
export default SearchOverview;