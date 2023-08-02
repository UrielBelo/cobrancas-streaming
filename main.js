const $pix = document.getElementById('pix')

$pix.addEventListener('mousedown', () => {
    navigator.clipboard.writeText('urielhbelo@gmail.com')
    alert("Chave Pix Copiada")
})
$pix.addEventListener('touchend', () => {
    navigator.clipboard.writeText('urielhbelo@gmail.com')
    alert("Chave Pix Copiada")
})

const {createApp, ref} = Vue

createApp({
    data(){
        return {
            pagamentos: []
        }
    },
    mounted() {
        fetch('dataset.json')
        .then( (response) => {
            return response.json()
        })
        .then( (json) => {
            for(p of json.pagamentos){
                this.pagamentos.push(p)
            }
        })
    }
}).mount('#table')