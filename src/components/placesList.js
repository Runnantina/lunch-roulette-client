import React from 'react'
import { Container, Divider  } from 'semantic-ui-react'
import MainCard from './maincard.js'



function PlacesList(props){

    return (
      <Container>
        <Divider horizontal></Divider>
        <Container>
          <MainCard place={props.places[0]}/>
        </Container>
      </Container>
    )

}

export default PlacesList
