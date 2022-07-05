import React from 'react';

import { toast } from 'react-toastify';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import useUser from '../../hooks/useUser';
import { api } from '../../services/api';
import { toastStyle } from '../../styles/Toast';

import { Container, Main, Text, Title } from './styles';

function Login() {

  const { user, setUser, setAuthenticated } = useUser();

  async function handleSubmit() {
    toast.success('Nice, agora... boa sorte!!', toastStyle.success);

    try {

      const { data } = await api.post('/user/started', { user });

      if(data.code===1) {
        toast.success(data.message, toastStyle.success);
        toast.info(data.hint, toastStyle.info);
        setAuthenticated(true);
      }

    } catch(err: any) {
      console.log(err);

      if(!err?.response?.data?.message) {
        if(err?.message)
          toast.error(err.message, toastStyle.error);
        else
          toast.error('Iiiii deu erro... vá la no console e avisa o breno... :/', toastStyle.error);
  
        return;
      }
  
      const { message } = err?.response?.data;
  
      toast.error(message || 'Iiiii deu erro... vá la no console e avisa o breno... :/', toastStyle.error);
    }
  }

  return (
    <Container>
      <Title>The ENIGMATISMO, by Breno - Login</Title>

      <Main>
        <CustomInput
          type='text'
          onChange={(value) => setUser(value)}
          value={user}
          placeholder='BOTA UM NICK QLQ AI'
          width='100%'
          color='#DEDEDE'
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

export { Login };