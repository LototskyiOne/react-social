import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className={styles.header__left}>
                            <h3 className={styles.logo__text}>𝕷𝖔𝖙𝖔𝖙𝖘𝖐𝖞𝖎</h3>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className={styles.header__right}>
                            Right content
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;