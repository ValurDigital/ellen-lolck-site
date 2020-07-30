import React, { useReducer, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Container, Row, Col, Alert } from "react-bootstrap";
import UnderlinedHeader from "../../molecules/UnderlinedHeader/UnderlinedHeader";
import { CheckmarkCircle } from "@styled-icons/evaicons-solid/CheckmarkCircle";

const initialState = {
  username: "",
  email: "",
  message: "",
};

const reducer = (state, { field, value }) => ({ ...state, [field]: value });

const ContactForm = () => {
  const firstRender = useRef(true);
  const [response, setResponse] = useState({ message: "", status: "" });
  const [messageValid, setMessageValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [usernameValid, setUserNameValid] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const onInputChange = (e) => dispatch({ field: e.target.name, value: e.target.value });

  const onInputSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", state.username);
    formData.append("email", state.email);
    formData.append("message", state.message);

    return fetch("/ellen-lolck/wp-json/contact-form-7/v1/contact-forms/207/feedback", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(({ message, status }) => setResponse({ message, status }));
  };

  useEffect(() => {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (firstRender.current) {
      firstRender.current = false;
    }

    if (state.email.match("@")) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
    if (state.username.length > 0) {
      setUserNameValid(true);
    } else {
      setUserNameValid(false);
    }
    if (state.message.length > 5) {
      setMessageValid(true);
    } else {
      setMessageValid(false);
    }
  }, [emailValid, messageValid, usernameValid, firstRender, state.username, state.message, state.email]);

  return (
    <StyledContainer fluid>
      <Container>
        <Row>
          <Col md="4">
            <UnderlinedHeader header="Kontakt mig" />
          </Col>
        </Row>
        <Row>
          <Col md="4">Har du spørgsmål, så send mig gerne en besked. Så vender jeg tilbage snarest muligt.</Col>
        </Row>
        <Row>
          <Col md="4">
            <Row>
              <Col>
                <Checkmark valid={emailValid} firstRender={firstRender} />
                <Input type="email" name="email" placeholder="Din e-mail" onChange={onInputChange} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Checkmark valid={usernameValid} firstRender={firstRender} />
                <Input type="text" name="username" placeholder="Dit navn" onChange={onInputChange} />
              </Col>
            </Row>
          </Col>
          <Col md="8">
            <Checkmark valid={messageValid} firstRender={firstRender} />
            <Input type="textarea" name="message" placeholder="Din besked" onChange={onInputChange} />
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="d-flex justify-content-end">
            <Button role="presentational" type="submit" onClick={onInputSubmit} disabled={!emailValid || !messageValid || !usernameValid}>
              Send Besked
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <StyledAlert variant={response.status === "mail_sent" ? "success" : "danger"} show={response.message !== ""}>
              {response.message}
            </StyledAlert>
          </Col>
        </Row>
      </Container>
    </StyledContainer>
  );
};

// ContactForm.defaultProps = {};

ContactForm.propTypes = {};

const StyledContainer = styled(Container)`
  padding-top: ${({ theme: { padding } }) => padding.sectionTop};
  padding-bottom: ${({ theme: { padding } }) => padding.sectionBottom};
  background-color: ${({ theme: { colors } }) => colors.brand.lightGrey};
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 10px 5px;
  margin-top: 10px;
  margin-bottom: 10px;

  &[type="textarea"] {
    height: 110px;
  }
  &:focus {
    border-color: ${({ theme: { colors } }) => colors.brand.primary};
    outline-color: ${({ theme: { colors } }) => colors.brand.primary};
    border-radius: 0;
    outline-style: solid;
    outline-width: 1px;
  }
`;

const Checkmark = styled(CheckmarkCircle)`
  display: ${({ firstRender }) => (firstRender.current ? "none" : "flex")};
  height: 22px;
  position: absolute;
  bottom: 20px;
  right: 30px;
  color: ${({ theme: { colors }, valid }) => (valid ? colors.brand.primary : colors.brand.red)};
`;
const Button = styled.button`
  padding: 15px 40px;
  border: 0;
  color: white;
  width: 300px;
  background-color: ${({ theme: { colors } }) => colors.brand.primary};
  &:hover {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
  border: none;
  &:focus, &:active: {
    outline: none;
    border: none;
  }
`;
const StyledAlert = styled(Alert)`
  margin-top: 12px;
  border-radius: 0;
  border: 0;
`;
export default ContactForm;
