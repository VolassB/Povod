import styled from '@emotion/styled';

const Container = styled.div`
  min-height: 100vh;
  background: #f8fafd;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Content = styled.div`
  max-width: 480px;
  width: 100%;
  text-align: center;
`;

const ImagesContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 40px;
`;

const Image = styled.img`
  width: 220px;
  height: 140px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #222;
  margin: 0 0 12px 0;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 40px;
  line-height: 1.4;
`;

const VkButton = styled.button`
  width: 100%;
  max-width: 340px;
  padding: 16px 24px;
  background: #4a6bff;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 40px;
  transition: all 0.2s;

  &:hover {
    background: #3b5ae0;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.97);
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #777;
  line-height: 1.5;
`;

const Link = styled.span`
  color: #4a6bff;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #3650c8;
  }
`;

const Register = () => {
  return (
    <Container>
      <Content>
        {/* Изображения */}
        <ImagesContainer>
          <Image 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622" 
            alt="Вечеринка" 
          />
          <Image 
            src="https://images.unsplash.com/photo-1529156069898-7630d9d5d6f5" 
            alt="Друзья" 
          />
        </ImagesContainer>

        {/* Текст */}
        <Title>СОЗДАТЬ ПОВОД</Title>
        <Subtitle>
          Без долгих переписок.<br />Пригласи одним кликом
        </Subtitle>

        {/* Кнопка VK */}
        <VkButton>
          Войти через VK ID
        </VkButton>

        {/* Подвал */}
        <FooterText>
          Создавая аккаунт, вы соглашаетесь с{' '}
          <Link>Условиями</Link> и{' '}
          <Link>Политикой</Link>
        </FooterText>
      </Content>
    </Container>
  );
};

export default Register;