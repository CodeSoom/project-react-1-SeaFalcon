import React from 'react';

import styled from '@emotion/styled';

import { Link, withRouter } from 'react-router-dom';

import Login from './Login';

const Header = styled.div({
  color: 'white',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  zIndex: 10,
  backgroundColor: 'rgba(20, 20, 20, 0.8)',
  boxShadow: '0px 1px 5px 2px rgba(0, 0, 0, 0.8)',
});

const List = styled.ul({
  display: 'flex',
});

const Item = styled.li((props) => ({
  textAlign: 'center',
  width: '200px',
  height: '50px',
  borderBottom: `3px solid ${props.selected ? '#3498db' : 'transparent'}`,
  transition: 'border-bottom 0.5s ease-in-out',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const SLink = styled(Link)({
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5em',
  '&:hover': {
    cursor: 'pointer',
    color: 'rgba(255,255,255,0.5)',
    transition: 'color 0.3s ease-in-out',
  },
  '& span': {
    position: 'absolute',
    right: '30px',
  },
});

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item selected={pathname === '/'}>
        <SLink to="/">Album Of The Year</SLink>
      </Item>
      <Item selected={pathname === '/search'}>
        <SLink to="/search">Search</SLink>
      </Item>
      <Item>
        <Login />
      </Item>
    </List>
  </Header>
));
