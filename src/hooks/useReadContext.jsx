import { useContext } from 'react';
import { ReadContext } from '../context/ReadContext';

export const useReadContext = () => {
    const context = useContext(ReadContext);

    if(!context) {
        throw Error('useReadContext must be inside ReadContext Provider');
    }

    return context;
}

