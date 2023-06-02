$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true ,
                email: true
            },
            telefone: {
                required: true
            },   
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            } 
            
        },
        messages: {
            nome: 'por favor,insira seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento ,validador) {
            let camposIncorretos = validador.numberOfInvalids() ;
            console.log(camposIncorretos)
            if (camposIncorretos) {
                alert(`Existem ${camposIcorretos} campos Incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
    })
}) 