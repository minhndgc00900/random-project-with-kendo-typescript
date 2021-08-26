import { Drawer, DrawerContent, DrawerSelectEvent } from '@progress/kendo-react-layout';
import { ReactElement, ReactNode, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import Header from '../Header/header.component';
import { items } from './drawer-router.configs';

interface Props {
    children: ReactNode;
}

function DrawerRouter(props: RouteComponentProps & Props): ReactElement {
    const { children, location, history } = props;
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    // const [isScreenSmall] = useState<boolean>(window.innerWidth > 768);

    const onHandleExpandMenu = () => {
        setIsExpanded((prev: boolean) => !prev);
    };

    const getSelectedMenu = (pathname: string) => {
        const menuPathName = items.find((it: any) => it.route === pathname);

        if (menuPathName?.name) {
            return menuPathName.name;
        }
        return;
    };

    const onHandleSelect = (e: DrawerSelectEvent) => {
        history.push(e.itemTarget.props.route);
    };

    const nameSelected = getSelectedMenu(location.pathname);

    return (
        <>
            <Header onHandleExpandMenu={onHandleExpandMenu} />
            <Drawer
                expanded={isExpanded}
                position="start"
                mode={'overlay'}
                // mini={isScreenSmall ? true : false}
                onOverlayClick={onHandleExpandMenu}
                onSelect={onHandleSelect}
                items={items.map((it: any) => ({
                    ...it,
                    text: it.name,
                    selected: it.name === nameSelected,
                }))}
            >
                <DrawerContent style={{ height: 1066 }}>
                    {children}
                </DrawerContent>
            </Drawer>

        </>
    );
}

export default withRouter(DrawerRouter);
