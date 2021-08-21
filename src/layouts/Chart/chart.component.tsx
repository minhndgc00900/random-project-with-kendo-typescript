import { ReactElement } from 'react';
import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend, ChartSeries,
    ChartSeriesItem,
} from '@progress/kendo-react-charts';
// import { categories } from '../../configs/index';
import { COMPACT_FORMAT, MONTH_FORMAT } from '../../utils';
import { filterBy, groupBy } from '@progress/kendo-data-query';
import { SeriesType } from '@progress/kendo-react-charts/dist/npm/field-types/series-type';

interface Props {
    data: any;
    dateRange: any;
    groupByField: any;
    groupResourceData: any;
    seriesType: SeriesType;
    fieldXData: string;
    fieldYData: string;
    groupColorField: string;
}

function ChartComponent(props: Props): ReactElement {
    const {
        data,
        dateRange,
        groupByField,
        groupResourceData,
        seriesType,
        fieldXData,
        fieldYData,
        groupColorField,
    } = props;

    const filterData = filterBy(data, {
        logic: 'and',
        filters: [
            { field: 'orderDate', operator: 'gt', value: dateRange.start }, // order date must be greater than start date rabge
            { field: 'orderDate', operator: 'lt', value: dateRange.end },
        ],
    });

    const dataGroupBy = groupBy(filterData, [{ field: groupByField }]);
    console.log('dataGroupBy', dataGroupBy);

    // check if group resource Data exists teamId in dataGroupBy
    const groupData = dataGroupBy.map((group: any) => {
        const resourceData = groupResourceData.find((item: any) => item[groupByField] === group.value);
        return resourceData;
    });
    console.log('groupResourceData', groupResourceData);
    console.log('groupData', groupData);

    return (
        <>
            <Chart style={{ height: 300 }}>
                <ChartLegend
                    position="bottom"
                    orientation="horizontal"
                    background={'#f4f5f8'}
                    padding={{ left: 80 }}
                    labels={{ padding: { right: 80 } }}
                />
                <ChartSeries>
                    {dataGroupBy.map((group: any) => {
                        const resourceData = groupResourceData.find((item: any) => item[groupByField] === group.value);
                        return (
                            <ChartSeriesItem
                                key={group.value}
                                name={resourceData[groupByField]}
                                type={seriesType}
                                data={group.items}
                                categoryField={fieldXData}
                                field={fieldYData}
                                color={resourceData[groupColorField]}
                            />
                        );
                    })}
                </ChartSeries>
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem
                        baseUnit={'months'}
                        labels={{
                            dateFormats: {
                                months: window.innerWidth >= 480 ? MONTH_FORMAT : COMPACT_FORMAT,
                            },
                        }}
                    />
                </ChartCategoryAxis>
            </Chart>
        </>
    );
}

export default ChartComponent;
