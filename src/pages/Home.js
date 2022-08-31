import React from 'react';
import { useState,useEffect } from 'react';
import Actorgrid from '../components/actor/Actorgrid';
import MainPageLayout from "../components/MainPageLayout"
import ShowGrid from '../components/show/ShowGrid';
import {apiGet} from "../Misc/config"
import { useLastQuery } from '../Misc/custom-hooks';
const Home=()=>{
    const[input,setInput]=useLastQuery('');
    const[results,setresults]=useState(null);
    const[searchOption,setSearchOption]=useState('shows');
    const isShowsSearch = searchOption ==="shows"
    
    const onSearch=()=>{
      //  https://api.tvmaze.com/search/shows?q=men
      apiGet(`/search/${searchOption}?q=${input}`).then(result=>{
        setresults(result)
      })
    }
    const onInputChange=(ev)=>{
        setInput(ev.target.value);
    }
    const OnKeyDown=ev=>{
        if(ev.keyCode === 13){
            onSearch()
        }
    }
    const onRadioChange=(ev)=>{
        setSearchOption(ev.target.value)
    }
    console.log(searchOption)
    const renderResults=()=>{
        if (results && results.length === 0){
            return <div>No result</div>
        }
        if(results && results.length > 0){
            return (
                
                  results[0].show ? <ShowGrid data={results}/>
                    : <Actorgrid data= {results}/>
            )
        }
        return null;
    }
    return (
        <MainPageLayout>
            <input type="text" onChange={onInputChange} value={input} placeholder="Search for Something"/>
            <div>
                <label>
                    Shows 
                    <input id='shows-search' type="radio" value="shows" onClick={onRadioChange} checked={isShowsSearch}/>
                </label>
                <label>
                    Actors
                    <input id='actors-search' type="radio" value="people" onClick={onRadioChange}checked={!isShowsSearch}/>
                </label>
            </div>
            <button type='button' onClick={onSearch} onKeyDown={OnKeyDown}>Search</button>
            {renderResults()}
        </MainPageLayout>
    )
}
export default Home