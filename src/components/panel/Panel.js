import React,{ useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line

import Dashboard from "./Dashboard";
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-4 `;
const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  h2 {${tw`text-3xl sm:text-xl font-bold`}}}`;
const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;
const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover { ${tw`bg-gray-300 text-gray-700`}}
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}}`;
const TabsControl = tw.div`sm:w-2/5 flex flex-col border-l-2`;
const TabContent = tw(motion.div)`bg-primary-500 mt-1  sm:-mr-10 md:-mr-6 lg:mr-1 lg:w-screen`;
const CardContainer = tw.div`mt-2 w-full sm:w-1/2 md:w-1/3 lg:w-2/5 lg:h-auto sm:pr-10 md:pr-6 lg:pr-12 `;
const Card = tw(motion.a)`bg-gray-300 rounded-xl block max-w-xs mx-auto sm:max-w-none sm:mx-0 lg:h-1/3`;
const CardTitle = tw.h5`text-base font-semibold group-hover:text-primary-500 text-primary-500 lg:mr-10`;
const CardContent = tw.p` text-sm font-medium text-primary-400 lg:mr-10 lg:mt-5`;
 

export default ({
  heading = "پنل کاربری",
  tabs={
    "دوره های خریداری شده":Dashboard(),
    "دوره های رایگان":Dashboard(),
    "دوره های نشان شده":Dashboard()
  }
}) => {
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2 tw="border-b-2">{heading}</h2>
              <TwoColumn>
              <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
          {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((con, index) => (
            
            <CardContainer key={index}>
                <Card   initial="rest" whileHover="hover" animate="rest">
                  <CardTitle>{con.title}</CardTitle>
                  <CardContent>{con.count}</CardContent>
                </Card>
            </CardContainer>
            ))}
          </TabContent>
        ))} 
              </TwoColumn>
          </div>
          
        </FormContainer>
        <SubmitButton type="submit" value="Submit">خروج</SubmitButton>
      </Content>
    </Container>    
  );
};
