import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import useUser from '../../hooks/useUser';
import { api } from '../../services/api';
import { toastStyle } from '../../styles/Toast';

import { Container, Description, Main, Text, Title } from './styles';

function FaseTen() {

  const { user } = useUser();

  const navigate = useNavigate();

  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [password3, setPassword3] = useState('');
  const [password4, setPassword4] = useState('');
  const [password5, setPassword5] = useState('');
  const [password6, setPassword6] = useState('');
  const [password7, setPassword7] = useState('');
  const [password8, setPassword8] = useState('');
  const [password9, setPassword9] = useState('');

  async function handleSubmit() {
    toast.info('Enviando resposta...', toastStyle.infoLoading);

    try {

      const password = [
        password1,
        password2,
        password3,
        password4,
        password5,
        password6,
        password7,
        password8,
        password9
      ]

      const { data } = await api.post('/password/final/valid', { password, user });

      if(data.code===1) {
        toast.success(data.message, toastStyle.success);
        navigate('/YBlAgDOjTu');
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
      <Title>0 ENIGMATISMO, by Breno - Fase 10</Title>

      <Main>
        <Description>Respostas do quiz da notificação</Description>

        <CustomInput
          type='password'
          onChange={(value) => setPassword1(value)}
          value={password1}
          placeholder='quiz 1'
          width='100%'
        />
        <CustomInput
          type='password'
          onChange={(value) => setPassword2(value)}
          value={password2}
          placeholder='quiz 2'
          width='100%'
        />
        <CustomInput
          type='password'
          onChange={(value) => setPassword3(value)}
          value={password3}
          placeholder='quiz 3'
          width='100%'
        />
        <CustomInput
          type='password'
          onChange={(value) => setPassword4(value)}
          value={password4}
          placeholder='quiz 4'
          width='100%'
        />
        <CustomInput
          type='password'
          onChange={(value) => setPassword5(value)}
          value={password5}
          placeholder='quiz 5'
          width='100%'
        />
        <CustomInput
          type='password'
          onChange={(value) => setPassword6(value)}
          value={password6}
          placeholder='quiz 6'
          width='100%'
        />
        <CustomInput
          type='password'
          onChange={(value) => setPassword7(value)}
          value={password7}
          placeholder='quiz 7'
          width='100%'
        />
        <CustomInput
          type='password'
          onChange={(value) => setPassword8(value)}
          value={password8}
          placeholder='quiz 8'
          width='100%'
        />
        <CustomInput
          type='password'
          onChange={(value) => setPassword9(value)}
          value={password9}
          placeholder='quiz 9'
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

export { FaseTen };