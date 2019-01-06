function performGetRequest1() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';

    axios.get('http://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

function performGetRequest2() {
    var resultElement = document.getElementById('getResult2');
    var todoId = document.getElementById('todoId').nodeValue;
    resultElement.innerHTML = '';

    axios.get('http://jsonplaceholder.typicode.com/todos',
        {
            params: {
                id: todoId
            }
        })
        .then(function (response) {
            console.log(response);
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

document.getElementById('todoInpoutForm').addEventListener
    ('submit', performPostRequest);

function performPostRequest(e) {
    var resultElement = document.getElementById('postResult');
    var todoTitle = document.getElementById('todoTitle').nodeValue;
    resultElement.innerHTML = '';

    axios.post('http://jsonplaceholder.typicode.com/todos' {
        userId: '1',
        title: todoTitle,
        completed: false
    })
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
    e.preventDefault();
}