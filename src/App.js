import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail.js';



function App() {

  let [ shose ] = useState(data);
  let navigate  = useNavigate();

  return (
    <div className="App">


      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Shose MALL</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={()=> { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={()=> { navigate('/event') }}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <div>
            <div className="main-bg"></div>
              <div className="container">
                <div className="row" >
                  {
                    shose.map((a, i)=> {
                      return(
                        <Card key={i} shose={shose[i]} i={i} />
                    )
                    })
                  }
                </div>
              </div>
          </div>
        }/>
        <Route path="/detail" element={<Detail />}/>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}/>

        </Route>

        <Route path="*" element={<div>없는 페이지입니다</div>}/>
      </Routes>

    </div> 
  );
}

function Event(){
  return(
    <div>
      <h4>오늘이 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}




function Card(props) {
  return(
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} width="80%" alt={props.shose.title} />
      <h4>{props.shose.title}</h4>
      <p>{props.shose.price}</p>
    </div>

  )
}




export default App;
