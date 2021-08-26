import { ReactElement, useState } from 'react';

import { DropDownList } from '@progress/kendo-react-dropdowns';
import { sizes } from '../../data/milestone-data';
import { Input } from '@progress/kendo-react-inputs';

function CloneComponent(): ReactElement {
    const [mileStoneList] = useState(sizes);
    console.log(mileStoneList);

    return (
        <>
            <div className="milestone-form-panel">
                <div className="milestone-form-panel-child">
                    <div className="milestone-content">
                        <div className="milestone-content-col">
                            <div className="__input-form">
                                <div className="__input-form label">
                                    <p>Milestone</p>
                                </div>
                                <div className="__input-form content">
                                    <DropDownList data={mileStoneList} />
                                </div>
                            </div>
                        </div>
                        <div className="milestone-content-col">
                            <div className="__input-form">
                                <div className="__input-form label">
                                    <p>Milestone</p>
                                </div>
                                <div className="input-description">
                                    <Input />
                                </div>
                            </div>
                        </div>
                        <div className="milestone-content-col">
                            <div className="__input-form">
                                <div className="__input-form label">
                                    <p>Milestone</p>
                                </div>
                                <div className="__input-form content">
                                    <DropDownList data={mileStoneList} />
                                </div>
                            </div>
                        </div>
                        <div className="milestone-content-col">
                            <div className="__input-form">
                                <div className="__input-form label">
                                    <p>Milestone</p>
                                </div>
                                <div className="__input-form content">
                                    <DropDownList data={mileStoneList} />
                                </div>
                            </div>
                        </div>
                        <div className="milestone-content-col">
                            <div className="__input-form">
                                <div className="__input-form label">
                                    <p>Milestone</p>
                                </div>
                                <div className="__input-form content">
                                    <DropDownList data={mileStoneList} />
                                </div>
                            </div>
                        </div>
                        <div className="milestone-content-col">
                            <div className="__input-form">
                                <div className="__input-form label">
                                    <p>Milestone</p>
                                </div>
                                <div className="__input-form content">
                                    <DropDownList data={mileStoneList} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CloneComponent;
