import React from "react";
//styled
import styled from "styled-components";
//router
import { Link } from 'react-router-dom';
//Sub
import ContentList from '../ContentList'

const ContentArea = () => {
  return (
    <Container color="#e6e6e6">
      <SubTitle>중고거래 지역매물</SubTitle>
      <ContentList />
      <MoreLink to="content">인기매물 더 보기</MoreLink>
      <SubTitle>중고거래 지역매물</SubTitle>
      <ContentList />
      <MoreLink to="content">지역매물 더 보기</MoreLink>
    </Container>
  );
};

export default ContentArea;

const Container = styled.div`
  background-color: ${(props) => (props.color ? props.color : "black")};
`
const SubTitle = styled.h2`
  padding-top:70px;
`;
const MoreLink = styled(Link)`
  display: block;
  text-decoration: underline;
  padding-bottom: 70px;
`;