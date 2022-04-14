var record = 0

window.document.getElementById('record').innerHTML = record

const num = 10

var random = Math.floor(Math.random() * num)

function Verificar() {
    
    const Chute = window.document.getElementById('txtnum')

    const ChuteNum = parseInt(Chute.value)

    if (Chute.value.length !== 0 && ChuteNum > 0) {

        if (ChuteNum == random) {

            window.alert(`Acertou! O número era o ${ChuteNum}! Outro número foi escolhido!`)

            ++record

            window.document.getElementById('record').innerHTML = record

            random = undefined

            random = Math.floor(Math.random() * 10)

        } else if (ChuteNum < random) {

            window.alert('Digite um número mais alto!')

            if (record > 0) {

                --record

                window.document.getElementById('record').innerText = record
            }

        } else {
            window.alert('Digite um número mais baixo!')

            if (record > 0) {

                --record

                window.document.getElementById('record').innerText = record
            }

        }
    } else {

        window.alert('Digite um número!')

        console.error('User dont choice a number')
    }
}

window.document.getElementById('btn').addEventListener('click', Verificar)