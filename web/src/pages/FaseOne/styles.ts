import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 13px;
  padding-bottom: 300px;
  position: relative;
`;

export const Title = styled.span`
  margin-top: 10px;
  font-size: 2rem;
`;

export const SecretText = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: 0;
`;

export const Description = styled.span`
  font-weight: 700;
  color: #989898;
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  max-width: 300px;
  margin-top: 200px;
  z-index: 10;
`;

export const Text = styled.div`
  font-weight: 700;
`;