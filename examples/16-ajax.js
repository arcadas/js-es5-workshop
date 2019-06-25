// Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh.

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users/1');
// xhr.open('GET', 'https://reqres.in/api/users/1a'); // error / 404
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log('success');
        console.log(xhr.response);
        console.log(JSON.parse(xhr.response));
        //console.log(xhr);
    }
    else {
        console.log('error');
        console.log(xhr.status);
        //console.log(xhr);
    }
};
xhr.send();
