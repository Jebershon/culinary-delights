import { AccountCircle, AccountCircleOutlined, AdminPanelSettings, Login, Logout } from '@mui/icons-material';
import axios from 'axios';
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import './/Home.css';
import './/external.css';
import { Mail, User } from "./Asserts/Anim";
import logo from './Asserts/dinner.png';
export default function NavBar(){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true);setShow2(false)};
  const navigate = useNavigate();

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => {setShow2(true);setShow(false);};

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmpassword,setConfirmpassword] = useState("");

  const [Login_email,setLogin_Email] = useState("");
  const [Login_password,setLogin_Password] = useState("");

  const StoreSignup=(e)=>{
    e.preventDefault();
    if(password===confirmpassword && password!=""){
      axios.post('http://localhost:3001/CreateUser',{name,email,password})
      .then(result=>{
        console.log(result);
        setShow(true);
        setShow2(false);
      })
      .catch(err=>console.log(err));
    }
    else{
     alert("Enter The password properly");
    }
  }

  const ValidateLogin=(e)=>{
    e.preventDefault();
      axios.post('http://localhost:3001/Login',{Login_email,Login_password})
      .then(result=>{
        console.log(result);
        if(result.data==="Success"){
         console.log("Logged in sucessfully");
         setShow(false);
        }
        else if(result.data=="Sorry Password Incorrect"){
          alert(result.data);
        }
        else{
          console.log(result.data);
          setShow(false);
          setShow2(true);
        }
      })
      .catch(err=>console.log(err));
    }
    return(
      <div>
      <Modal show={show} onHide={handleClose} contentClassName='modal' className='body-blur'>
        <Modal.Body>
            <form  style={{color:"#fc8019"}} onSubmit={ValidateLogin}>
            <p class="title">Welcome back</p>
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><User/></InputGroup.Text>
                <Form.Control
                placeholder="Email"
                aria-describedby="basic-addon1"
                type="email"
                onChange={e=>setLogin_Email(e.target.value)}
                className='rem-border'/>
               </InputGroup>

               <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><Mail/></InputGroup.Text>
                <Form.Control
                placeholder="Password"
                aria-describedby="basic-addon1"
                type='password'
                onChange={e=>setLogin_Password(e.target.value)}
                className='rem-border'/>
               </InputGroup>
               <Row>
                <Col>
                <Form.Check
                    inline
                    name="group1"
                    type="checkbox"
                    label="Remember me"
                    className='rem-border'/>
                </Col>
                <Col xs={2}></Col>
                <Col>
                <span class="span-l">
                    <a href='#' style={{textDecoration:"none",color:"#fc8019"}}>Forgot password?</a>
                </span>
                </Col>
                </Row>
                <br/>
                <Button type='submit' variant='warning' size="lg" style={{width:"100%"}}>Sign In</Button>
                <p class="p">Don't have an account?<a class="span" onClick={handleShow2}>Sign Up</a></p>
                {/* <p class="p line">Or With</p>
                <div class="flex-row">
                <button class="btn-l google"><GoogleIcon/>Google</button>
                </div> */}
                </form>
        </Modal.Body>
      </Modal>

      <Modal show={show2} onHide={handleClose2} className='body-blur'>
        <Modal.Body>
            <form  style={{color:"#fc8019"}} onSubmit={StoreSignup}>
            <p class="title">Create Account</p>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><AccountCircle/></InputGroup.Text>
                <Form.Control
                placeholder="Full Name"
                aria-describedby="basic-addon1"
                type="text"
                id='name'
                onChange={e=>setName(e.target.value)}
                className='rem-border'/>
               </InputGroup>

                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><User/></InputGroup.Text>
                <Form.Control
                placeholder="Email"
                aria-describedby="basic-addon1"
                type="email"
                id='email'
                onChange={e=>setEmail(e.target.value)}
                className='rem-border'/>
               </InputGroup>

               <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><Mail/></InputGroup.Text>
                <Form.Control
                placeholder="Password"
                aria-describedby="basic-addon1"
                id='password'
                type='password'
                onChange={e=>setPassword(e.target.value)}
                className='rem-border'/>
               </InputGroup>

               <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><Mail/></InputGroup.Text>
                <Form.Control
                placeholder="Confirm Password"
                aria-describedby="basic-addon1"
                type='password'
                onChange={e=>setConfirmpassword(e.target.value)}
                id='confirm'
                className='rem-border'/>
               </InputGroup>
                <br/>
                <Button type="submit" variant='warning' size="lg"  style={{width:"100%"}}>Sign Up</Button>
                <p class="p">Already have an account?<span onClick={handleShow} class="span">Sign In</span></p>
                {/* <p class="p line">Or With</p>
                <div class="flex-row">
                <button class="btn-l google"><ColorGoo/>Google</button>
                </div> */}
                </form>
        </Modal.Body>
      </Modal>

      <Row>
      <Col>
        <Navbar collapseOnSelect expand="lg" className="transparent-Nav" fixed='top'>
        <Navbar>
            <Container>
              <Navbar.Brand className='text-white' style={{fontSize:"20px"}}>
              <Link to='/' className='nav-brand'>
              <img
                  alt="logo"
                  src={logo}
                  width="40"
                  height="40"
                  className="d-inline-block align-top brand"
                />&nbsp;
                <span style={{color:"#ee7752"}}>C</span>ulinary&nbsp;
                <span style={{color:"#ee7752"}}>D</span>elights
                </Link>
              </Navbar.Brand>
            </Container>
          </Navbar>
            <br/>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto nav-underline">
                <center><Nav.Link className='navi'><Link to='/' className='nav-text'>Home</Link></Nav.Link></center>
                <center><Nav.Link className='navi'><Link to='./Glocery' className='nav-text'>Grocery</Link></Nav.Link></center>
                <center><Nav.Link className='navi'><Link to='./Recipes' className='nav-text'>Recipes</Link></Nav.Link></center>
                <center><Nav.Link className='navi'><Link to='./NutriCalc' className='nav-text'>NutriCalc</Link></Nav.Link></center>
                <center><Nav.Link className='navi'><Link to='./Aboutus' className='nav-text'>About us</Link></Nav.Link></center>
              </Nav>
              <br/>
              <Nav>
                  <center><Nav.Link className='navi nav-text' style={{color:"white"}} onClick={handleShow}><Login/></Nav.Link></center>
              </Nav>
                <center>
                <NavDropdown className='navi nav-text' title={<AccountCircle/>} id="basic-nav-dropdown" menuVariant='dark' align="end">
                  <center>
                    <NavDropdown.Item ><Link to="./MyProfile" className='nav-text'><AccountCircleOutlined/></Link></NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item ><Link to="./AdminDash" className='nav-text'><AdminPanelSettings/></Link></NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item ><Link to="./" className='nav-text'><Logout/></Link></NavDropdown.Item>
                    </center>
                </NavDropdown>
                </center>
            </Navbar.Collapse>
        </Navbar>
        </Col>
    </Row>
    </div>
    );
}
