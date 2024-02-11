import { useState } from 'react';

import { Container } from "./styles";

import { ReactComponent as LancheIcon } from '../../assets/burger.svg';
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg';
import { ReactComponent as BebidaIcon } from '../../assets/soda.svg';
import { ReactComponent as SobremesaIcon } from '../../assets/ice-cream.svg';

import menuImg from '../../assets/menu.svg';


export function SideBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return <Container isMenuOpen={menuOpen}>
    <button type='button' onClick={handleToggleMenu}>
      <img src={menuImg} alt='Abrir e fechar o menu' />
    </button>
    <nav>
      <ul>
        <li>
          <a href='#' className='active'>
            <LancheIcon />
            <span>Lanches</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <PizzaIcon />
            <span>Pizzas</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <BebidaIcon />
            <span>Bebidas</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <SobremesaIcon />
            <span>Sobremesas</span>
          </a>
        </li>
      </ul>
    </nav>
  </Container>
}
