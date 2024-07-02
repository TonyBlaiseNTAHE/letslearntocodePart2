export default function handleResponseFromAPI(promise){
    promise.then(res => {
        return {status: 200, body: 'success'};
    }).catch(error => {
        const er = new Error();
        return er;
    }).finally(() => {
        console.log("Got a response from the API");

    });
}