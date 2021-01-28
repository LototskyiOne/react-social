import './App.css';
import Header from './components/Header/header';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Sidebar from './components/Sidebar/sidebar';
import Profile from './components/Profile/profile';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter >
      <div className='app_Wrapper'>
        <Header />
        <Container>
          <Row>
            <Col md={3}>
              <Sidebar />
            </Col>
            <Col md={9}>
              <Route excat path='/profile' component={Profile}/>
            </Col>
          </Row>
        </Container>
      </div >
    </BrowserRouter >
  );
}

export default App;
