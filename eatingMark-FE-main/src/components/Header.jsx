import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const NavButton = styled(Link)`
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #666;
  &:hover {
    color: #333;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  color: #666;
  &:hover {
    color: #333;
  }
`;

const ProfileIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #eee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <HeaderContainer>
      <Logo to="/">TastyRoad</Logo>
      {isLogin ? (
        <NavButtons>
          <NavButton to="/main">맛집 구경하기</NavButton>
          <NavButton to="/mypage">마이페이지</NavButton>
          <IconButton>
            <span role="img" aria-label="notifications">🔔</span>
          </IconButton>
          <IconButton>
            <ProfileIcon>
              <span role="img" aria-label="profile">👤</span>
            </ProfileIcon>
          </IconButton>
        </NavButtons>
      ) : (
        <ButtonContainer>
          <Button types="outlineDark" onClick={handleLoginClick}>
            로그인
          </Button>
          <Button types="colorDark" onClick={handleSignupClick}>
            회원가입
          </Button>
        </ButtonContainer>
      )}
    </HeaderContainer>
  );
};

export default Header; 