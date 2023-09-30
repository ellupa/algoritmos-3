const backendUrl = "http://localhost:3000/";

export async function GET(url, requestData){

    return await fetch(backendUrl + url)
        .then((res) => res.json())
        .then((res) => res)
        .catch((err) => err);

}