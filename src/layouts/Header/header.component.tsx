import { ReactElement } from 'react';
import headerBg from '../../assets/header-bg.png';

// interface Props {

// }

function Header(): ReactElement {
    return (
        <header className="header" style={{ backgroundImage: `url(${headerBg})` }} >
            <div/>
        </header>
    );
}

export default Header;
