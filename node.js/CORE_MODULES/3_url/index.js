const url = require('url');
const addres = 'https://www.meusite.com.br/catalog?produtos=roupa';
const parseUrl = new url.URL(addres);

console.log(parseUrl.host);
console.log(parseUrl.pathname);
console.log(parseUrl.search);
console.log(parseUrl.searchParams);
console.log(parseUrl.searchParams.get('produtos'));