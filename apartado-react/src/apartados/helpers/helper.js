const peticion = async (link, metodo)=>{
	return fetch('http://localhost:8080/' + link, {
        method:metodo,
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + window.sessionStorage.getItem('token'),
        },
        params: JSON.stringify({token : window.sessionStorage.getItem('token')})
    }).then((response) => {
        return response.json()
    }).then((response)=>{
    	console.log(response.data);
    	return response.data;
    })
}

export default peticion;