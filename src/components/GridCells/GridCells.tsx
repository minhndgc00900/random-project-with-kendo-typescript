import { ReactElement } from 'react';
import { images } from '../../data/images';

export const FlagCells = (props: any): ReactElement => {
    const { dataItem } = props;
    return (
        <td style={{ textAlign: 'center' }}>
            <img
                src={images[dataItem.country]}
                style={{ width: 30, verticalAlign: 'middle', borderStyle: 'none' }}
                alt=""
            />
        </td>
    );
};
