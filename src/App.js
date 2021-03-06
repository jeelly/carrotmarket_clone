import styled from 'styled-components';
import { useDispatch } from 'react-redux';
//Sub
import Router from './page/Router';
import GlobalStyles from './css/GlobalStyles'
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { loginUser } from './redux/modules/userSlice';
function App() {
  const dispatch = useDispatch();

  // 쿠키/로컬스토리지에 토큰 있을 시 로그인 체크
  useEffect(() => {
     if(localStorage.getItem("token") !== null)
      dispatch(loginUser(true));
  });

  return (
    <Container>
      <Header />
      <Routerwrap>
        <Router />
      </Routerwrap>
      <GlobalStyles />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
`;
const Routerwrap = styled.div`
  padding-top:50px;
`