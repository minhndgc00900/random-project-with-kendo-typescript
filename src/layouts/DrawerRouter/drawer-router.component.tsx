import { ReactElement } from 'react';
import Header from '../Header/header.component';

interface Props {
    children: ReactElement;
}

function DrawerRouter(props: Props): ReactElement {
    const { children } = props;

    return (
        <>
            <Header />
            <div>
                {children}
            </div>
        </>
    );
}

export default DrawerRouter;
