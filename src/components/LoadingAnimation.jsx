import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  background: #1a1a1a;
  border-radius: 16px;
  padding: 40px 20px;
`;

const Title = styled.div`
  color: #a78bfa;
  font-size: 18px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CirclesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  max-width: 420px;
`;

const CircleLoader = styled.div`
  width: 52px;
  height: 52px;
  position: relative;
`;

const Svg = styled.svg`
  transform: rotate(-90deg);
  animation: ${props => props.animate ? 'spin 1.2s linear infinite' : 'none'};
`;

const CircleBg = styled.circle`
  fill: none;
  stroke: #333;
  stroke-width: 6;
`;

const CircleProgress = styled.circle`
  fill: none;
  stroke: #fff;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke-dashoffset 0.3s ease;
`;

const LoadingAnimation = () => {
  const circles = [
    { progress: 85, delay: 0 },
    { progress: 65, delay: 0.1 },
    { progress: 45, delay: 0.2 },
    { progress: 90, delay: 0.3 },
    { progress: 30, delay: 0.4 },
    { progress: 75, delay: 0.5 },
    { progress: 55, delay: 0.6 },
    { progress: 80, delay: 0.7 },
  ];

  return (
    <LoadingContainer>
      <Title>♦ Component 2</Title>
      
      <CirclesGrid>
        {circles.map((item, index) => {
          const radius = 22;
          const circumference = 2 * Math.PI * radius;
          const offset = circumference - (item.progress / 100) * circumference;

          return (
            <CircleLoader key={index}>
              <Svg width="52" height="52" viewBox="0 0 52 52" animate={index % 3 === 0}>
                <CircleBg cx="26" cy="26" r={radius} />
                <CircleProgress 
                  cx="26" 
                  cy="26" 
                  r={radius}
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  style={{ animationDelay: `${item.delay}s` }}
                />
              </Svg>
            </CircleLoader>
          );
        })}
      </CirclesGrid>
    </LoadingContainer>
  );
};

export default LoadingAnimation;