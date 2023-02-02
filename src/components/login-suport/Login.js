import React , { Component } from 'react';
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line

import logo from "images/other/LOGO.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import { Container as ContainerBase } from "components/misc/Layouts";

//const Container = tw(ContainerBase)` bg-primary-100 text-white font-medium flex justify-center -m-1 lg:w-1/2 lg:h-2/12 mt--8 mr--8`;

const Container = tw(ContainerBase)` bg-primary-100 text-white font-medium flex justify-center -m-1 lg:w-1/2 lg:h-2/12 mt--8 mr--8  mx-auto `;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-8 sm:my-6 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/6 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto mt--4`;
const MainContent = tw.div`mt-5 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold `;
const FormContainer = tw.div`w-full flex-1 mt-8 mt--8`;
const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;
const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {${tw`w-6 h-6 -ml-2`}}
  .text {${tw`ml-3`}}`;

  export default function Login({
    logoLinkUrl = "/",
    headingText = "ورود یا ثبت نام",
    submitButtonText = " ورود ",
    //SubmitButtonIcon = LoginIcon,
    suport = "#",
    title="",
    war="ایمیل و رمز عبور وارد کنید",
  }) {
    const send = () =>{
      alert("درخواست شما ارسال شد");
    }
    return (
      <Container id="login">
        <Content>
          <MainContainer>
            <LogoLink href={logoLinkUrl}>
              <LogoImage src={logo} />
            </LogoLink>
            <MainContent>
              <Heading>{headingText}</Heading>
              <p tw="mt-6 text-xs text-gray-600 text-center">
                    {war}
                </p>
              <FormContainer>
                <DividerTextContainer>
                  <DividerText>{title}</DividerText>
                </DividerTextContainer>
                <Form onSubmit={send}>
                  <Input type="email" placeholder="ایمیل" />
                  <Input type="password" placeholder="رمز عبور" />
                  <SubmitButton type="submit" href="/">
                    {/*<SubmitButtonIcon className="icon"  href="/"/>*/}
                    <span className="text">{submitButtonText}</span>
                  </SubmitButton>
                </Form>
              </FormContainer>
            </MainContent>
          </MainContainer>
        </Content>
      </Container>
  );
                  }