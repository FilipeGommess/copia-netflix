import React, { useState, useEffect } from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import {
  Nav,
  NavPrimary,
  NavSecondary,
  SortDown,
  DivProfile,
  AccountMenu,
  Profiles,
  ConfigsAccountMenu,
  HamburguerMenu,
  MobileNavegation,
} from './styled';

export default function Header() {
  const [accountMenuOn, setAccountMenuActive] = useState(false);
  const showAccountMenu = () => setAccountMenuActive(!accountMenuOn);

  const [mobileMenu, setMobileMenu] = useState(false);
  const showMobileMenu = () => setMobileMenu(!mobileMenu);

  const [roleHeaderFixed, setRoleHeader] = useState(false);
  const headerFixed = () => {
    if (window.scrollY >= 1) {
      setRoleHeader(true);
    } else {
      setRoleHeader(false);
    }
  };

  window.addEventListener('scroll', headerFixed);

  useEffect(() => {
    headerFixed();
  }, []);

  return (
    <Nav roleHeaderFixed={roleHeaderFixed}>
      <NavPrimary>
        <Link to="/" title="Netflix">
          <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix" />
        </Link>
        <MobileNavegation onClick={showMobileMenu}>
          <Link to="/">Navegar</Link>
          <SortDown />
        </MobileNavegation>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/">Séries</Link>
          </li>
          <li>
            <Link to="/">Filmes</Link>
          </li>
          <li>
            <Link to="/">Bombando</Link>
          </li>
          <li>
            <Link to="/">Minha lista</Link>
          </li>
        </ul>
      </NavPrimary>
      <HamburguerMenu mobileMenu={mobileMenu}>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="*****">Séries</Link>
          </li>
          <li>
            <Link to="**">Filmes</Link>
          </li>
          <li>
            <Link to="***">Bombando</Link>
          </li>
          <li>
            <Link to="****">Minha lista</Link>
          </li>
        </ul>
      </HamburguerMenu>
      <NavSecondary>
        <div>
          <Link to="*">
            <FaSearch />
          </Link>
        </div>
        <div>
          <Link to="*">
            <FaBell />
          </Link>
        </div>
        <DivProfile onMouseOver={showAccountMenu} onMouseOut={showAccountMenu}>
          <img
            src="https://occ-0-4762-559.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXrmj4H9RUyDiO28L-KJxDGc9oDijd4jnl5RyCkiWMPB6xFxiVdRiKdOcNjG8kn4A3idJRTGAzuBuQ__c6yl1m0.png?r=fcc"
            alt="Usuário"
          />
          <SortDown />
        </DivProfile>
        <AccountMenu accountMenuOn={accountMenuOn}>
          <Profiles>
            <ul>
              <li>
                <Link to="/">
                  <img
                    src="https://occ-0-4762-559.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcD7ar6C7nv9U2YfOu33ikPAO4VittMNlwNlhsCdAxmbJYGrr46WCmGJfN4fkZ1D3AufurqS0kCYDoV4La-_xxI.png?r=318"
                    alt="Usuário"
                  />
                  <p>Usuário 1</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img
                    src="https://occ-0-4762-559.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUAcaDX2-P091dLEFUNR0mKUnvOFbw0fDUDr0wK-ixdAFlAkZ9K5bwHPEiZ12klt1dkSJpf4R-SIZJDAhLSKDns.png?r=f08"
                    alt="Usuário"
                  />
                  <p>Usuário 2</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img
                    src="https://occ-0-4762-559.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfWOpa2joflnVlT5uoJYcQft0GQ6CNr0v5VtcFHYFAfkUEZxpRj47u0l88OTcMzBeCOotpXX-LL5kjTT-Q4rYls.png?r=c71"
                    alt="Usuário"
                  />
                  <p>Usuário 3</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img
                    src="https://occ-0-4762-559.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUqbzDsUyVm9_HkrxnE0rB5QesVUfzfGKR1n8ukjfxgqkS59Reob6hiD86p_xefui8gzz3EILRE0t0yiv_eZ-NE.png?r=abe"
                    alt="Usuário"
                  />
                  <p>Usuário 4</p>
                </Link>
              </li>
              <span>
                <li>
                  <Link to="*">
                    <p>Gerenciar Perfis</p>
                  </Link>
                </li>
              </span>
            </ul>
          </Profiles>
          <ConfigsAccountMenu>
            <ul>
              <li>
                <Link to="*">
                  <p>Conta</p>
                </Link>
              </li>
              <li>
                <Link to="*">
                  <p>Centro de ajuda</p>
                </Link>
              </li>
              <li>
                <Link to="*">
                  <p>Sair da Netflix</p>
                </Link>
              </li>
            </ul>
          </ConfigsAccountMenu>
        </AccountMenu>
      </NavSecondary>
    </Nav>
  );
}
