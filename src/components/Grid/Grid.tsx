import { CompositeFilterDescriptor, GroupDescriptor, process, SortDescriptor } from '@progress/kendo-data-query';
import { Grid, GridColumn as Column, GridDataStateChangeEvent, GridSelectionChangeEvent } from '@progress/kendo-react-grid';
import { ReactElement, ReactNode, useCallback, useState } from 'react';

interface Props {
    children: ReactNode;
    style: any;
    data: any[];
    onDataChange: any;
}

interface DataState {
    take: number | undefined;
    skip: number | undefined;
    sort: SortDescriptor[] | undefined;
    group: GroupDescriptor[] | undefined;
    filter: CompositeFilterDescriptor | undefined;
}

function GridComponent(props: Props): ReactElement {
    const { data, children, onDataChange, ...others } = props;

    const [dataState, setDataState] = useState<DataState>({
        take: 10,
        skip: 0,
        sort: [],
        group: [],
        filter: undefined,
    });

    const onDataStateChange = useCallback(
        (event: GridDataStateChangeEvent) => {
            console.log('event.dataState.group', event.dataState.group);

            setDataState({
                take: event.dataState.take,
                skip: event.dataState.skip,
                sort: event.dataState.sort,
                group: event.dataState.group,
                filter: event.dataState.filter,
            });
        },
        [setDataState],
    );

    // const lastSelectedIndexRef = useRef(0);

    const onSelectionChange = useCallback(
        (event: GridSelectionChangeEvent) => {
            const select = !event.dataItem.selected;
            // const last = lastSelectedIndexRef.current;
            const updatedData = data.map((item: any) => ({ ...item }));
            const current = data.findIndex((dataItem: any) => dataItem === event.dataItem);

            // for (let i = Math.min(last, current); i <= Math.max(last, current); i++) {
            //     updatedData[i].selected = select;
            // }
            updatedData[current].selected = select;

            onDataChange(updatedData);
        },
        [data, onDataChange],
    );

    const onHeaderSelectionChange = useCallback(
        (event: any) => {
            console.log(333);
            const checked = event.syntheticEvent.target.checked;
            const updateData = data.map((it: any) => ({
                ...it,
                selected: checked,
            }));
            onDataChange(updateData);
        },
        [data, onDataChange],
    );

    const dataProcess = process(data, dataState);

    return (
        <Grid
            {...dataState}
            {...others}
            data={dataProcess}
            pageable={true}
            sortable={true}
            rowHeight={40}
            // groupable={true}
            selectedField={'selected'}
            onSelectionChange={onSelectionChange}
            onHeaderSelectionChange={onHeaderSelectionChange}
            onDataStateChange={onDataStateChange}
        >
            <Column
                field={'selected'}
                width={50}
                title=""
            // headerSelectionValue={
            //     data.findIndex((dataItem: any) => dataItem.selected === false) === -1
            // }
            />
            {children}
        </Grid>
    );
}

export default GridComponent;
