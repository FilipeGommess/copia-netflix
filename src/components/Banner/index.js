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
  Banner,
  Border,
} from './styled';

export default function Nav() {
  return (
    <Banner>
      <Container>
        <InfoNavContainer>
          <Info>
            <div>
              <img
                src="https://occ-0-4762-559.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVDqjJ5BDA06k6FS6PuIK6aHPYefyLhLmYnw1SsRDfaFqovUxiUvjApHqWCguzJT6T_1pGZYfZIPTG9X-CcNsPnl9uNRJzNny9Awm07k0TnN2hDmrbc-beiHfHY4HMhVx94LllKaZePuTpZYikMvY8z8qRM9UK5xCpaOXbhCZOH8_Q.webp?r=238"
                alt="Murderville"
              />
            </div>
            <Synopsis>
              <h3>
                Investigadores revelam como a Boeing pode ter sido responsável por dois acidentes catastróficos seguidos
                ao priorizar o lucro em detrimento da segurança.
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
        <Border />
      </Container>
    </Banner>
  );
}
