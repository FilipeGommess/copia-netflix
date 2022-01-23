import React from 'react';
import {
  Container,
  InfoNavContainer,
  Info,
  ContainerSynopsiButtons,
  PlayButton,
  InfoButton,
  Synopsis,
  ContainerPlayButton,
  ContainerInfoButton,
  ContainerClassification,
  AgeClassification,
} from './styled';

export default function Nav() {
  return (
    <Container>
      <img
        src="https://occ-0-4762-559.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRQqYy_FRdu-lF0XTiL7JpvbCtgCUKndncRv07V2OnTqmOYpG-4_Zokd9f1k-XGBznbGgdOJ0TJNjCzHS6N4H1VJAG-u.webp?r=7cd"
        alt="Background"
      />
      <InfoNavContainer>
        <Info>
          <div>
            <img
              src="https://occ-0-4762-559.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdJES5ZNTvJPf9Z9DXJ9vS-4_17dlRU6AwBEhjV2hn4-jSjENcmxipOqLM8aD1ZjWmdzumpZPIkMOQw32jAQLXrBXonw3JH_3qY86iS8HfP6iJFOId12tTdEQlmRNNSbpXlzhCKbHd1bQa5rJ-7yaZNLtqtPAVKR_re8n86xhfY2lQ.webp?r=c52"
              alt="Tratamento de Realeza"
            />
          </div>
          <Synopsis>
            <h3>
              Na tensa Conferência de Munique em 1938, amigos <br /> que agora trabalham para governos opostos se tornam
              espiões e correm contra o tempo para revelar um segredo nazista.
            </h3>
          </Synopsis>
          <ContainerSynopsiButtons>
            <a href="/">
              <ContainerPlayButton>
                <PlayButton />
                Assistir
              </ContainerPlayButton>
            </a>
            <a href="/">
              <ContainerInfoButton>
                <InfoButton />
                Mais Informações
              </ContainerInfoButton>
            </a>
          </ContainerSynopsiButtons>
        </Info>
      </InfoNavContainer>
      <ContainerClassification>
        <AgeClassification>16</AgeClassification>
      </ContainerClassification>
    </Container>
  );
}
