function sendData(e){
    fetch('getCoaches', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({payload: e.value})
    });
}