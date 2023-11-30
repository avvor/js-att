
self.addEventListener('message', (event) => {
    fetch('http://localhost:4040/add-logdata', {
        method: 'POST',  
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
        "user" : event.data.user,
        "action" : event.data.action
        }),
    })
    .then()
})
  