import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import {loginUser} from '../../../controller/ContollerUser'

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'





class Login extends Component{
  constructor (props) {
    super(props)
    this.state = {
      useremail : "",
      userpassword : ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
 

  handleSubmit = async e => {
    e.preventDefault();
    
    const response = await loginUser({
      "useremail": this.state.useremail,
      "userpassword": this.state.userpassword,
    });
      if(response.success){
        this.setState({
          useremail : "",
          userpassword : ""
        })
        
        this.props.history.push('/home')
      }
    
  }
  

  render(){
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit = {this.handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Username" autoComplete="username" onChange ={e=>{this.setState({useremail: e.target.value})}}  />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" placeholder="Password" autoComplete="current-password" onChange ={e=>{this.setState({userpassword: e.target.value})}} />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton type="submit" color="primary" className="px-4">Login</CButton>
                        </CCol>
                        <Link to= " /login">
                          <CCol xs="6" className="text-right">
                            <CButton color="link" className="px-0">Forgot password?</CButton>
                          </CCol>
                        </Link>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
  )}
}

export default Login
