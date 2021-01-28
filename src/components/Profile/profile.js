import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './profile.module.css'

const Profile = () => {
    return (
        <div className={styles.profile}>
            <Container>
                <Row>
                    <Col md={4}>
                        <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' className={styles.profile__image} alt='Profile avatar'></img>
                    </Col>

                    <Col md={8}>
                        <h4 className={styles.profile__name}>Lototskyi Volodymyr</h4>

                        <span className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile;