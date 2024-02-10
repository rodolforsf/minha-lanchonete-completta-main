import { Container } from "./styles";

import { ReactComponent as LancheIcon } from '../../assets/burger.svg';

import menuImg from '../../assets/menu.svg';


export function SideBar() {
    return<Container>
        <button type='button'>
            <img src={menuImg} alt='Abrir e fechar o menu' />
        </button>
        <nav>
            <li>
                <a href='#'>
                    <LancheIcon />
                    <span>Lanches</span>
                </a>
            </li>
        </nav>
    </Container>
}