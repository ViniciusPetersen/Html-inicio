
    // Seu código JavaScript aqui

const buttonC = document.querySelector('.b-converter');
const buttonS = document.querySelector('.b-switch')
const inputV = document.querySelector('.i-real');
const select1 = document.querySelector('.moedas');
const select2 = document.querySelector('.moedas2');

const url = 'https://v6.exchangerate-api.com/v6/2b28f847f6610668cfba5704/latest/'
const today = new Date();

function formatDate(date, format) {
	format.replace('mm', date.getMonth() + 1)
    .replace('aa', date.getFullYear())
	.replace('dd', date.getDate());
}


buttonC.addEventListener('click', function() {
    const coins = select1.value;

    fetch(url + coins)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            const coin =  select2.value;
            const conversao = data.conversion_rates[coin];

            document.getElementById('dol').innerHTML = parseFloat(inputV.value / conversao).toLocaleString('en', {
                style: 'currency',
                currency: select1.value
            });
        });
});

buttonS.addEventListener('click', function() {
    const auxIndex = select1.selectedIndex;
    select1.selectedIndex = select2.selectedIndex;
    select2.selectedIndex = auxIndex;
    
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
    
