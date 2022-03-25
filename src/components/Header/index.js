import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss'

function Header(props) {
    return (
        <header className='header'>
            <Container>
                <Row className='justify-content-between'>
                    <Col xs='auto'>
                        <a 
                            className='header__link header__title'
                            href='https://www.facebook.com/profile.php?id=100006476330255'
                            target="_blank"
                            rel="noreferrer"
                        >
                            Dang Pham
                        </a>
                    </Col>

                    <Col xs='auto'>
                        <NavLink
                            className={(navData) => navData.isActive ? "header__link header__link--active" : "header__link"}
                            end to="photos"
                        >
                            Photos
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;