var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}

// Function para mostrar mensagem de envio. 
function enviar() {
    // Variáveis 
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");

    // linha 18 verifica se algum dos campos está vazio, 
    // se estiver vazio ele mostra o toast.
    if (nome.value == "" || email.value == "" || mensagem.value == "" ) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
        })
    
        Toast.fire({
            icon: 'error',
            title: 'Preencha todos os campos por favor!'
        })
        document.addEventListener('submit', function(event) {
            event.preventDefault(); 
            formulario.reset();
        });
    // Se nenhum campo estiver vazio ele executa o (else) e mostra o modal.
    } else {
        Swal.fire({
            title: "GreenBox",
            html: '<p>Obrigado por entrar em contato com a gente, retornaremos em breve!</p>',
            imageUrl: "https://s4.aconvert.com/convert/p3r68-cdx67/a4b0s-6czu0.jpg",
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: 'Nubank',
            confirmButtonColor: '#3085d6',
            position: 'center',
        })
        document.addEventListener('submit', function(event) {
            event.preventDefault(); 
            formulario.reset();
        });
    }
}