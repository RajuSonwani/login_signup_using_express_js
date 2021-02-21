global.knex = require('knex')({
    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        password:'root0123',
        database:'rAju'
    },pool:{min:0,max:4}
});

