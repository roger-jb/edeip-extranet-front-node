import React from 'react'
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './Home.css'
import { Redirect } from 'react-router'

export default class Home extends React.Component {
  constructor (props){
    super(props)
    this.connexion = this.connexion.bind(this)
  }

  connexion(e) {
    e.preventDefault()
    this.props.mappedConnection()
  }

  render (){
    const homeState = this.props.mappedHomeState;
    if (!homeState.isConnected){
      <Redirect to='/'/>
    }
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous"/>
        <Navbar inverse collapseOnSelect className="customNav">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/#">EDEIP Extranet</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{pathname: '/test', query: {}}}>
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to={{pathname: '/test2', query: {}}}>
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.location.state}
        <Button onClick={this.connexion}>Toggle</Button>
        {!homeState.isConnected &&
          <div>Ceci est le corp2. Voila.</div>
         }
        {homeState.isConnected &&
          <div>Bonjour2 {homeState.userInfo.nom} {homeState.userInfo.prenom}</div>}
      </div>
    )
  }
}
