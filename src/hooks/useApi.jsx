import { useEffect, useState } from 'react';
import apiBuilder from './getApi';

const useApi = (entity, page = 1) => {

const [values, setValues] = useState([]);

useEffect(() => {
    getData()
}, [page]);

const getData = async () => {
    const res = await apiBuilder.tryGetPopular(entity, page);
    if (res instanceof Error) {
        console.log(res.messange)
        }else{
    setValues(res)
    };
}


return [values];

}

export default useApi;