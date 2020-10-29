async function fetchData(dataresource){
    let resource = await fetch(dataresource).then(response => {
        if (response.status !== 200) {
            throw new Error(`Danger Will Robinson! Here there be monsters! Error ${response.status}`);

        }

        return response;

})
let dataset = await resource.json();
return dataset;
}

export {fetchData};