import React from 'react'
import Showcard from './Showcard'
import IMAGE_NOT_FOUND from "../../images/not-found.png"
import { FlexGrid } from '../style'
import { useShows } from '../../Misc/custom-hooks'
const ShowGrid = ({data}) => {

  const[starredShows,dispatchStarred]=useShows();

  return (
    <FlexGrid>
        {
            data.map(({show})=>{
                const isStarred =starredShows.includes(show.id)

                const onStarCLick=()=>{
                  if(isStarred){
                    dispatchStarred({type:'REMOVE',showId:show.id})

                  }
                  else{
                    dispatchStarred({type:'ADD',showId:show.id})

                  }
                }
                return(
                  <Showcard 
                      key={show.id} 
                      id={show.id} 
                      name={show.name} 
                      image={show.image ? show.image.medium:IMAGE_NOT_FOUND }  
                      summary={show.summary}
                      onStarCLick={onStarCLick}
                      isStarred={isStarred}
                  />
                )
              }
            )
        }
    </FlexGrid>
  )
}

export default ShowGrid