import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';

import {
  Nav,
  NavPrimary,
  NavSecondary,
  SortDown,
  DivProfile,
  AccountMenu,
  Profiles,
  ConfigsAccountMenu,
} from './styled';

export default function Header() {
  return (
    <Nav>
      <NavPrimary>
        <a href="/" title="Netflix">
          <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix" />
        </a>
        <ul>
          <li />
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="*****">Séries</a>
          </li>
          <li>
            <a href="**">Filmes</a>
          </li>
          <li>
            <a href="***">Bombando</a>
          </li>
          <li>
            <a href="****">Minha lista</a>
          </li>
        </ul>
      </NavPrimary>
      <NavSecondary>
        <div>
          <a href="*">
            <FaSearch />
          </a>
        </div>
        <div>
          <a href="*">
            <FaBell />
          </a>
        </div>
        <DivProfile>
          <img
            src="https://occ-0-4762-559.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXrmj4H9RUyDiO28L-KJxDGc9oDijd4jnl5RyCkiWMPB6xFxiVdRiKdOcNjG8kn4A3idJRTGAzuBuQ__c6yl1m0.png?r=fcc"
            alt="Usuário"
          />

          <SortDown />
        </DivProfile>
        <AccountMenu>
          <Profiles>
            <ul>
              <li>
                <a href="/">
                  <img
                    src="https://occ-0-4762-559.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcD7ar6C7nv9U2YfOu33ikPAO4VittMNlwNlhsCdAxmbJYGrr46WCmGJfN4fkZ1D3AufurqS0kCYDoV4La-_xxI.png?r=318"
                    alt="Usuário"
                  />
                  <p>Usuário 1</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="https://occ-0-4762-559.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUAcaDX2-P091dLEFUNR0mKUnvOFbw0fDUDr0wK-ixdAFlAkZ9K5bwHPEiZ12klt1dkSJpf4R-SIZJDAhLSKDns.png?r=f08"
                    alt="Usuário"
                  />
                  <p>Usuário 2</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="https://occ-0-4762-559.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfWOpa2joflnVlT5uoJYcQft0GQ6CNr0v5VtcFHYFAfkUEZxpRj47u0l88OTcMzBeCOotpXX-LL5kjTT-Q4rYls.png?r=c71"
                    alt="Usuário"
                  />
                  <p>Usuário 3</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="https://occ-0-4762-559.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUqbzDsUyVm9_HkrxnE0rB5QesVUfzfGKR1n8ukjfxgqkS59Reob6hiD86p_xefui8gzz3EILRE0t0yiv_eZ-NE.png?r=abe"
                    alt="Usuário"
                  />
                  <p>Usuário 4</p>
                </a>
              </li>
              <span>
                <li>
                  <a href="*">
                    <p>Gerenciar Perfis</p>
                  </a>
                </li>
              </span>
            </ul>
          </Profiles>
          <ConfigsAccountMenu>
            <ul>
              <li>
                <a href="*">
                  <p>Conta</p>
                </a>
              </li>
              <li>
                <a href="*">
                  <p>Centro de ajuda</p>
                </a>
              </li>
              <li>
                <a href="*">
                  <p>Sair da Netflix</p>
                </a>
              </li>
            </ul>
          </ConfigsAccountMenu>
        </AccountMenu>
      </NavSecondary>
    </Nav>
  );
}
