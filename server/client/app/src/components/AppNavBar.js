import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import { Link } from 'react-router-dom';
import { GoogleLogin} from 'react-google-login';
import Cookies from 'universal-cookie';
import logo from '../CodeCornerLogo32x32.png';
export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
    
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  CheckAuthentication()
  {
    const cookies = new Cookies();
    return cookies.get("IsAuthenticated") === "True";
  }

  IsAdmin()
  {
    const cookies = new Cookies();
    return cookies.get("IsAdmin") === "True";
  }

  GetSignInButton() {
    const Success = (response) => {
      return fetch(process.env.REACT_APP_API_URL + 'Account/Authenticate?idTokenString=' + response.tokenId, {
        method: 'GET',
        headers: {
        }
    }).then(response => response.json())
        .then((responseJSON) => {
          if(responseJSON != null)
          {
            var cookies = new Cookies();
            if (responseJSON.email != null)
            {
              cookies.set("IsAuthenticated", "True");
              if (responseJSON.isAdmin)
              {
                cookies.set("IsAdmin", "True");
              }
              
              responseJSON.givenName != null ? cookies.set("givenName", responseJSON.givenName) : cookies.set("givenName", "");

            }
          }
          window.location.reload(true);
    }).catch(err => console.log(err));
    }

    const Failure = (response) => {
      new Cookies().set("IsAuthenticated", "False");
    }

    const logout = (response) => {
      new Cookies().set("IsAuthenticated", "False");
    }

    if (!this.CheckAuthentication())
    {
      return <GoogleLogin
        clientId= {process.env.REACT_APP_Prd_GoogleClientId}
        buttonText="Login"
        onSuccess={Success}
        onFailure={Failure}
        cookiePolicy={'single_host_origin'}
        />

    }
    else if(this.CheckAuthentication() === true)
    {
      var cookies = new Cookies();
      return <> <div className="UsernameBox"> <span id="UserNameText">Welcome, <br / > {cookies.get("givenName")}</span></div> </>
    }
  }

  ShowCreatePost()
  {
    if (this.CheckAuthentication() && this.IsAdmin())
    {
      return (
        <NavLink href="/CreatePost">Create Blog Post</NavLink>
      )
    }
  }


  render() {
    return <div class="NavBar"><Navbar color="dark" dark expand="md" id="MainNavBar">
      <NavbarBrand tag={Link} to="/"><img src={logo} alt="Logo" /> CodeCorner</NavbarBrand>
      <NavbarToggler onClick={this.toggle}/>
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
          {this.ShowCreatePost()}
          </NavItem>
          <NavItem>
            <NavLink href="https://twitter.com/michaelmaniatis">@mikedev</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/mikejohnmaniatis">GitHub</NavLink>
          </NavItem>
          <NavItem>
            {this.GetSignInButton()}
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    </div>
  }
}