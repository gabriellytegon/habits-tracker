const form = document.querySelector('form'); 
const button = document.querySelector('#register')

const nlwSetup = new NLWSetup(form); 

button.addEventListener('click', add) 
form.addEventListener('change', save)

function add(){
    today = new Date().toLocaleDateString('pt-br').slice(0, -5) 
    
    if(nlwSetup.dayExists(today)){
        alert('Dia já inserido!')
    } else{
        nlwSetup.addDay(today)
    }
}

function save(){
    localStorage.setItem('datas', JSON.stringify(nlwSetup.data)) 
}

const data = JSON.parse(localStorage.getItem('datas')) || {}
nlwSetup.setData(data) 
nlwSetup.load() 

