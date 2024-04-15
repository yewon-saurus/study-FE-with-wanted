import React from 'react';
import MyStore from '../store/store';

const Cat = () => {
    const {name} = React.useContext(MyStore);

    return (
        <div>
            {name}
        </div>
    );
}

export default Cat;