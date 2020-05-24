import './styles.css';

import moment from 'moment'
moment.locale('fr')
const element = document.createElement('p');
element.innerHTML =
`Le cours a commencé :
${moment("2020 04 27, 8:00:00 am", "YYYY MM DD, h:mm:ss a")
    .fromNow()}`;
document.body.appendChild(element);

console.log("JS c'est bien");

const email = 'vm@lp.wd'
const password = 'azerty68'

const onLoginFormSubmit = e => {
    e.preventDefault()
    try {
        let {email, password} = this.state
        login(email, password)
    } catch (e) {
        console.log(e.message)
    }
    return false
    // TODO Activer l'état de transition
    const data = new FormData(e.target)
    const response = processDataForm(data)
    setTimeout(() => {
        // TODO Stopper l'état de transition
        // TODO Traiter les données du formulaire
    }, 1000) // 1 seconde
    // Récupère les données du formulaire
}
document.querySelector('#loginForm').addEventListener('submit',onLoginFormSubmit)

const processDataForm = data => {
    if (data.get('password') !== password || !data.get('email') !== email){
        // TODO Mauvais email et/ou mot de passe
        console.log("Bonjour Virginie Marra !")
    }  else {
        // TODO Succès !
        console.log("Identifiant inexistant.")
    }
}


var afficherOnglet = function (a) {
    var div = document.querySelector(".form")
    var li = a.parentNode
        
        if(li.classList.contains('active')){
            return false
        }
        
        div.querySelector('.tab-group .tab.active').classList.remove('active')

        li.classList.add('active')

        div.querySelector('.tabs-content .tab-content.actif').classList.remove('actif')
        
        div.querySelector(a.getAttribute('href')).classList.add('actif')
}
const tabA = document.querySelectorAll('.tab a')
for (var i=0; i<tabA.length; i++){
    tabA[i].addEventListener('click', function (e){
        afficherOnglet(this)
    })
}