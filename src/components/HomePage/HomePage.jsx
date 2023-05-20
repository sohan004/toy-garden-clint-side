import React from 'react';
import Sec1 from './Sec1/Sec1';
import Sec2 from './Sec2/Sec2';
import Sec3 from './Sec3/Sec3';
import Sec4 from './Sec4/Sec4';
import Sec5 from './Sec5/Sec5';
import { useTitle } from '../useTitle/useTitle';

const HomePage = () => {
    useTitle('Toy Garden')
    return (
        <div>
            <Sec1></Sec1>
            <Sec2></Sec2>
            <Sec5></Sec5>
            <Sec4></Sec4>
            <Sec3></Sec3>
        </div>
    );
};

export default HomePage;