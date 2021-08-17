import { ReactElement, useState } from 'react';
import Header from '../Header/header.component';

interface Props {
    children: ReactElement;
}

function DrawerRouter(props: Props): ReactElement {
    const { children } = props;
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    console.log('isExpanded', isExpanded);

    const onHandleExpandMenu = () => {
        setIsExpanded((prev: boolean) => !prev);
    };

    return (
        <>
            <Header onHandleExpandMenu={onHandleExpandMenu} />
            <div>
                {children}
            </div>
        </>
    );
}

export default DrawerRouter;
