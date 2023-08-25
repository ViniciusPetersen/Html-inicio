const button = document.querySelector('.b-converter');
const inputV = document.querySelector('.i-real');
const inputC1 = document.querySelector('.moeda1');
const inputC2 = document.querySelector('.moeda2');
const select1 = document.querySelector('.moedas');
const select2 = document.querySelector('.moedas2');

const url = 'https://economia.awesomeapi.com.br/last/';

button.addEventListener('click', function() {
    const coins = select1.value + '-' + select2.value;

    fetch(url + coins)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const coin = select1.value + select2.value;
            const conversao = data[coin];

            document.getElementById('dol').innerHTML = parseFloat(inputV.value / conversao.bid).toLocaleString('en', {
                style: 'currency',
                currency: select1.value
            });
        });
});

/*const button = document.querySelector('.b-converter')
const inputV = document.querySelector('.i-real')
const inputC1 = document.querySelector('.moeda1')
const inputC2 = document.querySelector('.moeda2')
const url =  'https://economia.awesomeapi.com.br/last/'


button.addEventListener('click', function() {
    const coins = inputC1.value + '-' + inputC2.value;
fetch(url + coins)
        .then(function(response){
            return response.json()
        })
        .then(function(data){

            /*function pegarMoedas(){
                coin = inputC1.value + inputC2.value;
                /*document.getElementById('dol')
                .innerHTML = 
            }
            button.addEventListener('click',pegarMoedas)
            
           function pegarValorDoInput(){
                console.log(inputV.value)
                console.log(coin)
                console.log(coins)
                
                const coin = inputC1.value+''+inputC2.value
                const conversao = data[coin]
            
                document.getElementById('dol')
                .innerHTML = parseFloat(inputV.value/conversao.bid).toLocaleString('eng',{
                    style: 'currency' ,
                    currency: 'USD'
                })
            }
            
            button.addEventListener('click',pegarValorDoInput)
    
        })*/
    
