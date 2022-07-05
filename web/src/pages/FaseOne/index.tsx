import React, { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import useUser from '../../hooks/useUser';
import { api } from '../../services/api';
import { toastStyle } from '../../styles/Toast';

import { Container, Description, Main, SecretText, Text, Title } from './styles';

function FaseOne() {

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
        navigate('/HsJCZBfTTk');
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
      <Title>The ENIGMATISMO, by Breno - Fase 1</Title>

      <SecretText>
      .óuoéníçtésómg úét óe éutóh fçów éúr óséqté é ,tésómg tátté úóe éu úé éúr óttí sóQ !fçów ónóç máíçéqté óàu áóttéq ánú sásuoóçoé míçâg ê óào ,éuoáusóqní ákét ásóN ásócné tán ,ódésq nóc nú sóq áutímáíçéqté nú ásáq óeíeoéw séu áíséeóq úÉ .hoíkúZ ée ódásséU óo áuoámq séúrmáúr éúr óe ósás tíán éuoénmáés ê ,óeáçíutígót éuoáutác ósíéiç nú óeoíuíné ,éeáeímáúr áóc ánú íúttóq émé ,néaíe táóttéq tá ónóç níttÁ .nú sáuémóç óeíúhétoóç séu ée éusót á éwíu é âm íúg úé óuoáusóq ,éuoénátúgósq óeoéçtésómg óàuté áwmét áo âm óseíW ée tóísjM tó éúr tâsuá táíe toú sécát á íéúhéiç úÉ .tóísâuoénóç túét síwúó ásáq éeáeíoúusóqó átté sáuíéwósqá ée áísáutóh óàuoé ,áísâoímúç áo ótóeímícái óuíún ê fçów éúr íét úÉ !séaíe õt ê ,óàutéhút séúrmáúr séwíu fçów éT !éuoéníséqyé ,oúloáíR ásóN ée éosáÇ ánú aíG .tóníyõsq tíán tóhíná túén ,tíóe tfçów sáeíwoóç õt é óutí óeúu sáçígímqnít né óeoátoéq úóuté ,óuoáusóQ .óqnéu óuíún énótoóç éúr átíóç ánú ê tóhíná sáeíwoóç é éuéúroác séaág ,écát fçów ónóç tán ,óísâtséwíoá úén ó ê ékóI
      </SecretText>


      <Main>
        <Description>ADIMUS AT ACID A</Description>

        <CustomInput
          type='password'
          onChange={(value) => setPassword(value)}
          value={password}
          placeholder='SENHASENHA'
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

export { FaseOne };