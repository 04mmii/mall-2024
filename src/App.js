import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route,  useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail.js';
import aios from 'axios';
import Cart from './pages/Cart.js';



function App() {

  let [ shose, setShoes ] = useState(data);
  let navigate  = useNavigate();


  return (
    <div className="App">


      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Shose MALL</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={()=> { navigate('/detail/0') }}>Detail</Nav.Link>
            <Nav.Link onClick={()=> { navigate('/event') }}>Event</Nav.Link>
            <Nav.Link onClick={()=> { navigate('/cart') }}>Cart</Nav.Link>
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
              <button onClick={()=>{
                aios.get('https://codingapple1.github.io/shop/data2.json')
                .then((결과)=>{ 
                  let copy = [...shose, ...결과.data]
                  setShoes(copy)
                 })
                 .catch(()=> {
                  console.log('실패함')
                 })
              }}>버튼</button>
          </div>
        }/>
        <Route path="/detail/:id" element={<Detail shose={shose} />}/>
        <Route path="/event" element={<Event />}/>
        <Route path="/cart" element={<Cart />} />

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
