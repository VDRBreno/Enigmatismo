import React, { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import useUser from '../../hooks/useUser';
import { api } from '../../services/api';
import { toastStyle } from '../../styles/Toast';

import { Container, Description, Main, Text, Title } from './styles';

function FaseSix() {

  const { user } = useUser();

  const navigate = useNavigate();
  const location = useLocation();

  const [password, setPassword] = useState('');

  async function handleSubmit() {
    toast.info('Enviando resposta...', toastStyle.infoLoading);

    try {

      const fase = location.pathname;

      const { data } = await api.post('/password/valid', { password, fase, user });

      if(data.code===1) {
        toast.success(data.message, toastStyle.success);
        toast.info(data.hint, toastStyle.info);
        navigate('/xAmJhilvRC');
      } else if(data.code===2) {
        toast.error(data.message, toastStyle.error);
      }

    } catch(err: any) {
      console.log(err);

      if(!err?.response?.data?.message) {
        if(err?.message)
          toast.error(err.message, toastStyle.error);
        else
          toast.error('Iiiii deu erro... vá la no console... :/', toastStyle.error);
  
        return;
      }
  
      const { message } = err?.response?.data;
  
      toast.error(message || 'Iiiii deu erro... vá la no console... :/', toastStyle.error);
    }
  }

  return (
    <Container>
      <Title onClick={handleSubmit}>The ENIGMATISMO, by Breno - Fase 6</Title>

      <Main>
        <Description>Troll?</Description>

        <CustomInput
          type='password'
          onChange={(value) => setPassword(value)}
          value={password}
          placeholder='SIM OU NAO?'
          width='100%'
        />
        <CustomButton
          style={{
            backgroundColor: '#989898',
            color: '#120F0F',
            width: '100%'
          }}
          onClick={() => navigate('/gAWluizyEQ')}
        >
          <Text>CLICA AQUI</Text>
        </CustomButton>
      </Main>
    </Container>
  );
}

export { FaseSix };