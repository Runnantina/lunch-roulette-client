import React from 'react'
import { Container, Divider } from 'semantic-ui-react'


const divstyle = {
  color: 'white'

}

function MyHeader(){

    return (
      <Container style={divstyle} className="hello">
        <Divider hidden />

          Flatiron Lunch Roulette

      </Container>
    )

}

export default MyHeader
