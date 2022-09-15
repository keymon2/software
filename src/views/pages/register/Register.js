import React,{Component} from 'react'
import {createUser} from '../../../controller/ContollerUser'

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
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



class Register extends Component{
  constructor (props) {
    super(props)
    this.state = {
      username: "",
      useremail : "",
      userpassword : "",
      repet: "",
      message: "Repeat-password"
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  

  handleSubmit= async e =>{
    e.preventDefault();
    // 하나라도 적지 않았다면 다시 적으라고 메세지 보내기
      if( this.state.username == "" || 
          this.state.useremail == "" ||
          this.state.userpassword == "" ||
          this. state.repet == "" 
      ){
        alert(" 모두 적으시오 ")
       
        return;
      }
      // Password 다시 쓴 password 와 같은지 확인 
      if(this.state.userpassword === this.state.repet){
        const response = await createUser({
          "name": this.state.username,
          "email": this.state.useremail,
          "password": this.state.userpassword
        });
      // server에 회원가입 성공시 login 화면으로 보내기 
        if(response.success){
          this.props.history.push('/login')
        }
        else{
        // server에 이메일이 db에 저장된 경우 메세지 보내기 
          alert("email 이있는 email 입니다.")
          this.setState({
            username: "",
            useremail : "",
            userpassword : "",
            repet: "",
            message: "Repeat-password"
          })
        }
    }else{
      // password 틀렸을경우 
      alert("비밀번호 다시 입력 하시오!")
      this.setState({
        message: "wrong-plz-repeat same password",
        repet:""
      })
  
    }
  }

  
  render(){
    return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit = {this.handleSubmit}>
                  <h1>회원가입</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Username" autoComplete="username" 
                    onChange ={ e =>{this.setState({username: e.target.value })}} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" autoComplete="email" 
                    onChange ={ e => {this.setState({useremail: e.target.value })}} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Password" autoComplete="new-password" 
                    onChange = {e => {this.setState({userpassword: e.target.value })}} />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder={this.state.message}  
                    onChange ={e => {this.setState({repet: e.target.value })}}
                    value = {this.state.repet} />
                  </CInputGroup>
                  <CButton color="success" block type= "submit"> Create Account</CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )}
}

export default Register
