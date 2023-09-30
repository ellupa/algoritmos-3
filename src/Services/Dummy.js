
import {GET} from './Httpr.js';

export async function getDummyData(requestData){
    let url = 'dummy/data.json';

    let rsp = await GET(url);

    return rsp;
}