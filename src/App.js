import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchOverview from './containers/Searchoverview';

class App extends Component {
  constructor(){
    super();
    this.state={
      searchQuery:'',
      searchResults:[],
      searchFilter: '',
      showResults:false
    }
  }

  search = () =>{
    axios.get(`https://api.github.com/search/repositories?&q=${this.state.searchQuery}${this.state.searchFilter}&per_page=100`)
    .then((results)=>{
      console.log(results.data.items);
      this.setState({
        searchResults:results.data,
        showResults:true
      })
    })
  }

  handleChange=(searchInput)=>{
    this.setState({
      searchQuery:searchInput.target.value
    })
  }
  
  handleFilter=(filterLanguage)=>{
    this.setState(
      {searchFilter:'+language:' + filterLanguage},
    this.search
   )
    
    // Met het blok hieronder kan je de array van resultaten filteren ipv zoals nu een nieuwe request doorsturen. 
    // Probleem was Github geeft max 100 resultaten wat dan veranderd naar een klein deel van die 100 resultaten.
    // Het houd daarmee dus geen rekening met de duizenden andere resultaten verspreid over andere pagina's
    // Maar ik wilde het er wel even uitgecomment bijverwerken om te laten zien.

    // if(this.state.searchResults.length <= 0){
    //   return null
    // }
    // 
    // else{
    //   const filterArray = this.state.searchResults.items
    //   const searchResults = filterArray.filter(function (item) { 
    //     return item.language === filterLanguage });  
      
    //     this.setState({ 
    //       searchResults: searchResults,
    //       showResults:true })
    // }
  }

  handleClick=()=>{
    this.search();
  }

  render(){
    let searchoverview = null;
    if (this.state.showResults){
      searchoverview = <SearchOverview searchResults={this.state.searchResults} />
    }

    return(
      <div className="App">
        <input type='text' className="searchInput"
         value={this.state.searchQuery}
         onChange={(searchInput)=>this.handleChange(searchInput)} />
        <button className="searchBtn" onClick={this.handleClick}>Search</button> 
      
        <div className="filterblock">
          <p>Filter on languages</p>
          <button className="filterButton" onClick={()=>this.handleFilter('Java')}>Java</button>
          <button className="filterButton" onClick={()=>this.handleFilter('Javascript')}>Javascript</button>
          <button className="filterButton" onClick={()=>this.handleFilter('HTML')}>HTML</button>
          <button className="filterButton" onClick={()=>this.handleFilter('C%2B%2B')}>C++</button>
          <button className="filterButton" onClick={()=>this.handleFilter('Python')}>Python</button>
        </div>
        {searchoverview}
      </div>
    );
  }
}

export default App;