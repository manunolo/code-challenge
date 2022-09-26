module.exports = (link,metodo, data,token = 0) => {
    let request = {
        method: metodo,
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
    };
    if (typeof data != "string") {
        request.body = JSON.stringify(data);
    }
    return fetch(`http://localhost:8080/` + link, {
        ...request
    }).then((response) =>{
        response.json();
    }).catch((error) => {
        console.error(error);
    });
}