import { filterBy } from '@progress/kendo-data-query';
import { GridColumn as Column } from '@progress/kendo-react-grid';
import { ReactElement, useContext, useState } from 'react';
import GridComponent from '../../components/Grid/Grid';
import { FlagCells } from '../../components/GridCells/GridCells';
import { AppContext } from '../../contexts';
import { employees } from '../../data/employees';
import { orders } from '../../data/orders';
import { teams } from '../../data/teams';
import ChartComponent from '../../layouts/Chart/chart.component';

// interface Props {

// }

function Dashboard(): ReactElement {
    const [range] = useState({
        start: new Date('2020-01-01T21:00:00.000Z'),
        end: new Date('2020-04-29T21:00:00.000Z'),
    });

    const { teamId } = useContext(AppContext);

    const [employeesData, setEmployeeData] = useState(employees);

    const filterCondition: any = {
        logic: 'and',
        filters: [{
            field: 'teamId',
            operator: 'eq',
            value: teamId,
        }],
    };

    return (
        <>
            <div id="Dashboard" className="dashboard-page main-content">
                <div className="card-container grid">
                    <div className="card-component">
                        <ChartComponent
                            dateRange={range}
                            data={orders}
                            groupByField={'teamID'}
                            groupResourceData={teams}
                            seriesType={'line'}
                            fieldXData={'orderDate'}
                            fieldYData={'orderTotal'}
                            groupColorField={'teamColor'}
                        />
                    </div>
                </div>
                <div className="card-container grid">
                    <div className="card-component">
                        <GridComponent
                            style={{ height: 450 }}
                            data={filterBy(employeesData, filterCondition)}
                            onDataChange={(data: any) => setEmployeeData(data)}
                        >
                            <Column title="Employee" groupable={false}>
                                <Column title="Contact Name" field="fullName" width={230} />
                                <Column title="Job Title" field="jobTitle" width={230} />
                                <Column title="Country" field="country" width={100} cell={FlagCells} />
                                <Column title="Status" field="isOnline" width={100} />
                            </Column>
                            <Column title="Performance" groupable={false}>
                                <Column title="Rating" width={110} field="rating" />
                                <Column title="Engagement" width={200} field="target" />
                                <Column title="Budget" width={100} field="budget" />
                            </Column>
                            <Column title="Contacts" groupable={false}>
                                <Column title="Phone" field="phone" width={130} />
                                <Column title="Address" field="rating" width={200} />
                            </Column>
                        </GridComponent>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Dashboard;
