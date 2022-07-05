import React, { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { api } from '../../services/api';
import { toastStyle } from '../../styles/Toast';
import ningif from '../../assets/deusamaravilhosa.gif';

import { Container, Description, Image, Main, Text, Title } from './styles';
import useUser from '../../hooks/useUser';

function FaseNine() {

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
        navigate('/OjHaXdGTir');
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
      <Title>0 ENIGMATISMO, by Breno - Fase 9</Title>

      <Main>
        <Image src={ningif} alt='ninglinda' />

        <Description>Minha deusa, querida deusa, diga-me qual seu peso</Description>

        <CustomInput
          type='password'
          onChange={(value) => setPassword(value)}
          value={password}
          placeholder='SENHA'
          width='100%'
        />
        <CustomButton
          style={{
            backgroundColor: '#989898',
            color: '#120F0F',
            width: '100%'
          }}
          onClick={handleSubmit}
        >
          <Text>CLICA AQUI</Text>
        </CustomButton>
      </Main>
    </Container>
  );
}

export { FaseNine };