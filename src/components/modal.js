import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import ReviewForm from '../components/reviewForm'

export default class InputModal extends Component {
  state = { modalOpen: false }

  handleOpen = (e) => this.setState({
    modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })

  render() {
    return (
      <Modal
        trigger={<Button color="orange" size="massive" onClick={this.handleOpen}>Add Review</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content='Add a review' />
        <Modal.Content>
          <h3>Reviews feature coming soon!</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
