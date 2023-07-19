function calcular() {

    let dist = document.getElementById('txt1')
    let cons = document.getElementById('txt2')
    let preco = document.getElementById('txt3')
    let res = document.getElementById('res')

    if (dist.value == 0 || cons.value == 0 || preco.value == 0) {
        alert('[ERRO] Verifique seus dados e tente novamente !')

    }

    else {

        let d = Number(dist.value)
        let c = Number(cons.value)
        let p = Number(preco.value)
        let gc = d / c
        let gr = gc * p
        let perc = document.getElementsByName('perc')
        let gcv = gc *2
        let grv = gr*2


        

        if (perc[0].checked) {
            percurso = ida
            res.innerHTML = `<strong>Serão nescessários ${gc.toFixed(2).replace('.', ',')} litros de combustível para realizar a sua viajem de ida e você gastará aproximadamente ${gr.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}.</strong> `

        }

        else {

            percurso = volta
            res.innerHTML = `<strong>Serão nescessários ${gcv.toFixed(2).replace('.', ',')} litros de combustível para realizar a sua viajem de ida e volta e você gastará aproximadamente ${grv.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}.</strong> `


        }

        





    }

    

}


