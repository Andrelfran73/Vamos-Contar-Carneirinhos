function contar () {
    var inicio = document.getElementById(`txti`)
    var fim = document.getElementById(`txtf`)
    var pulo = document.getElementById(`txtp`)
    var res = document.getElementById(`resp`)

    if (inicio.value.length == 0 || fim.value.length == 0 || pulo.value.length == 0) {
    window.alert(`Erro! Faltam dados`)
    res.innerHTML = `Impossivél contar`
   } else {
     res.innerHTML = `Contando: <br>`
     let i = Number(inicio.value)
     let f = Number(fim.value)
     let p = Number(pulo.value)

     if (i < f) {
     for  (let c = i; c <= f; c += p) {
        res.innerHTML +=` ${c} \u{1F411}`
    }
           
   }else {
      for (let c = i; c>= f;  c -= p) {
         res.innerHTML +=` ${c} \u{1F411}`
      }
   }
   res.innerHTML += `<br> Bons Sonhos!`
 }
}
