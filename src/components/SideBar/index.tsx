import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from '../SideBar/styles';


import { ReactComponent as LancheIcon } from '../../assets/burger.svg';
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg';
import { ReactComponent as BebidaIcon } from '../../assets/soda.svg';
import { ReactComponent as SobremesaIcon } from '../../assets/ice-cream.svg';

import menuImg from '../../assets/menu.svg';


export function SideBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Container isMenuOpen={menuOpen}>
        <button type='button' onClick={handleToggleMenu}>
          <img src={menuImg} alt='Abrir e fechar o menu' />
        </button>
        <nav>
          <ul>
            <li>
            <NavLink to='/'>
              <LancheIcon />
              <span>Lanches</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='pizzas'>
              <PizzaIcon />
              <span>Pizzas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='bebidas'>
              <BebidaIcon />
              <span>Bebidas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='sobremesas'>
              <SobremesaIcon />
              <span>Sobremesas</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
 )
}