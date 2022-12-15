import { useEffect, useState } from 'react';
import apiBuilder from './getApi';

const useApi = (entity, state, language, page = 1) => {

const [values, setValues] = useState([]);

useEffect(() => {
    getData()
}, [page]);

const getData = async () => {
    const res = await apiBuilder.tryGet(entity,state, language, page);
    if (res instanceof Error) {
        console.log(res.messange)
        }else{
    setValues(res)
    };
}


return [values];

}

export default useApi;