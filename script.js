function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.lenght == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente.')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebeM.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovemM.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adultoM.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosoM.png')
            }
        }else if (fsex[1].checked){
                 gênero = 'mulher'
                if(idade >= 0 && idade < 10){
                    //criança
                    img.setAttribute('src', 'pessoas.png')

                }else if(idade < 21){
                    //jovem
                    img.setAttribute('src', 'jovemF.png')

                }else if(idade < 50){
                    //adulto
                    img.setAttribute('src', 'adultoF.png')

                }else{
                    //idoso
                    img.setAttribute('src', 'idosoF.png')

                }
        }
        res.innerHTML = `Detectamos um(a) ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}