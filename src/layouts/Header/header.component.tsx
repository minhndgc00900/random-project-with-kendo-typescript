import { ReactElement, useContext } from 'react';
import headerBg from '../../assets/header-bg.png';
import { AppContext } from '../../contexts';
import { Avatar } from '@progress/kendo-react-layout';
import userAvatar from '../../assets/user-avatar.jpg';

interface Props {
    onHandleExpandMenu: any;
}

function Header(props: Props): ReactElement {
    const { onHandleExpandMenu } = props;

    const { avatar } = useContext(AppContext);

    const hasImage = avatar && avatar.length > 0;

    return (
        <header className="header" style={{ backgroundImage: `url(${headerBg})` }} >
            <div className="nav-container">
                <div className="menu-button">
                    <span className={'k-icon k-i-menu'} onClick={onHandleExpandMenu} />
                </div>
                <div className="title">
                    <h1>
                        Minh Nguyen
                    </h1>
                </div>
                <Avatar type={'image'} shape={'circle'}>
                    {hasImage ? <img src={userAvatar} alt="user-avatar" /> : <img src={userAvatar} alt="user-avatar" />}
                </Avatar>
            </div>
        </header>
    );
}

export default Header;
