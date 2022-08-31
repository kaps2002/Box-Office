import React from 'react';
import { useState,useEffect,useCallback } from 'react';
import Actorgrid from '../components/actor/Actorgrid';
import CustomRadio from '../components/CustomRadio';
import MainPageLayout from "../components/MainPageLayout"
import ShowGrid from '../components/show/ShowGrid';
import {apiGet} from "../Misc/config"
import { useLastQuery, useWhyDidYouUpdate } from '../Misc/custom-hooks';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';
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
    const onInputChange=useCallback(ev=>{
        setInput(ev.target.value);
    },[setInput])
    const OnKeyDown=ev=>{
        if(ev.keyCode === 13){
            onSearch()
        }
    }
    const onRadioChange= useCallback(ev=>{
        setSearchOption(ev.target.value)
    },[])
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
    useWhyDidYouUpdate('home',{onInputChange, OnKeyDown})

    return (
        <MainPageLayout>
            <SearchInput 
            type="text" 
            onChange={onInputChange}
             value={input} 
              
             placeholder="Search for Something"/>
            <RadioInputsWrapper>
                <div>
                    <CustomRadio
                        label="Shows"
                        id='shows-search' 
                        value="shows" 
                        onChange={onRadioChange} 
                        checked={isShowsSearch}
                    />
                </div>
                <div>
                    <CustomRadio
                        label="Actors"
                        id='actors-search' 
                        value="people" 
                        onChange={onRadioChange} 
                        checked={!isShowsSearch}
                    />
                </div>
            </RadioInputsWrapper>
            <SearchButtonWrapper>
                <button type='button' className='b' onClick={onSearch}>
                Search
                </button> 
            </SearchButtonWrapper>
            {renderResults()}
        </MainPageLayout>
    )
}
export default Home