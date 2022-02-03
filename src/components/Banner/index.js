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
        src="https://occ-0-4762-559.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZlXFIzGDr1mRUiDwKcoHp0ooKSfq9DbJn9OoEtk9R1GpNffrO_sGSkSOs5pf3SDALE1UNtgjooAYZJzCzCa6IzVGAJJ.webp?r=de8"
        alt="Background"
      />
      <InfoNavContainer>
        <Info>
          <div>
            <img
              src="https://occ-0-4762-559.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABfcYJ2W-jNi_hijQClWi_8Qh8Wal9Ar5KHvqX4PAYvSx_tr_h83Jrh9ufm18PXdth5j7uo0FuzvfFSJPvbVy7VwhSnPariCLYbUPEvLEGx-rY-QyQRV5ayKUqiXCFANQDJQHyAptARTFELzzcJY35rWtuvzmFQlsVRs1l-pduD6Pgw.webp?r=c06"
              alt="Murderville"
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
