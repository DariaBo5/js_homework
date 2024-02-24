var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" 
    },
    
];

var allowedEmails = arr.filter(function(obj) {
    var domainRegex = /@(gmail|yahoo)\.com$/;
    if (domainRegex.test(obj.email)) {
        var emailRegex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(?:[a-zA-Z0-9]+\.)+[a-zA-Z]{2,}$/;
        var userNameRegex = /^[a-zA-Zа-яА-Я0-9]+(?:\.[a-zA-Zа-яА-Я0-9]+)*$/;
        return emailRegex.test(obj.email) && userNameRegex.test(obj.userName);
    }
    return false;
});

console.log(allowedEmails);