import React from 'react';
import {
  Container,
  LogoAndTextContainer,
  LogoAndText,
  ContainerBannerButtons,
  PlayButton,
  InfoButton,
  Text,
  ContainerPlayButton,
  ContainerInfoButton,
  ContainerClassification,
  AgeClassification,
  BannerContainer,
  Border,
} from './styled';

export default function Nav() {
  return (
    <BannerContainer>
      <Container>
        <LogoAndTextContainer>
          <LogoAndText>
            <div>
              <img
                src="https://occ-0-4762-559.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABaOcgDcGTveaAek7NPq8oGGVoOidgfRhgLiYofQfC_LN4zUBYKx_oMCYtOdlqaTwOaojwVU6wxTu0h3H-CiNK8N4VwBvyoHVftyDmu2zPAlWz7_wmMvvVhVTP-pLXkpFu53edHGv964Oy9G_Ai5Od7_BHwiA-aCtDHUi3G_hVYYUuw.webp?r=699"
                alt="Good Girls"
              />
            </div>
            <Text>
              <h3>
                Três pacatas donas de casa bolam um roubo ao supermercado local para sair do buraco e conquistar a
                independência.
              </h3>
            </Text>
            <ContainerBannerButtons>
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
            </ContainerBannerButtons>
          </LogoAndText>
        </LogoAndTextContainer>
        <ContainerClassification>
          <AgeClassification>16</AgeClassification>
        </ContainerClassification>
        <Border />
      </Container>
    </BannerContainer>
  );
}
