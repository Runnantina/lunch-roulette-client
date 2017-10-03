import React from 'react'
import { Card, Icon, Image, Rating } from 'semantic-ui-react'

const MainCard = (props) => (
  <Card fluid="true" raised="true">

    <Card.Content>
      <Card.Header className="card-head">
        {props.place.name}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          {props.place.location}
        </span>
      </Card.Meta>
      <Card.Description className="card-d">
      <h5>
        Rating: <Rating defaultRating={props.place.avg_star_rating} maxRating={5} disabled size="massive" />
      </h5>
        <h5>
          <Icon name='food' />
          Good for: {props.place.mode_recommended_for[0]}
        </h5>
        <h5>
          <Icon name='help circle' />
          Bodily Impact: {props.place.mode_bodily_impact[0]}
        </h5>
      </Card.Description>
    </Card.Content>

    <Image fluid="false" src={props.place.image} />

</Card>
)

export default MainCard
