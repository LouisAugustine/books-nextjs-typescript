import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Image from 'next/image'
import Link from 'next/link';

const NavBar = () => {

  const handleLink = () => {
    const windowLink: any = window.open('about:blank');
    windowLink.location.href = "https://nzlouis.com"
  }

  return (
    <Navbar sticky="top" expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand onClick={handleLink}>
          <Image
              alt="NZLouis.com"
              src={require(`../images/nzlouis.jpg`)}
              width="120"
              height="40"
            />
        </Navbar.Brand>
        <Nav >
        <Nav.Link href="/">
          <Link href="/">
            <a>Books</a>
          </Link>
        </Nav.Link>
        <Nav.Link href="/authors">
          <p>
            <Link href="/authors">
              <a>Authors</a>
            </Link>
          </p>
        </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
