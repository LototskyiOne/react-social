import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Container>
                <Row>
                    <Col md={12}>
                        <nav className={styles.sidebar__links}>
                            <li>Home page</li>
                            <li>Messages</li>
                            <li>Settings</li>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Sidebar;