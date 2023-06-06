'use client';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.4rem;
  text-align: center;
  /* Add more styles as needed */
`;

const Message = styled.p`
  color: #666;
  font-size: 1.4rem;
  text-align: center;
  /* Add more styles as needed */
`;

const VerifyRequest = () => {
  return (
    <>
      <Container>
        <Title>Check your email</Title>
        <Message>A sign-in link has been sent to your email.</Message>
        <Message>
          Please check your email and click on the link to sign in.
        </Message>
      </Container>
    </>
  );
};

export default VerifyRequest;
