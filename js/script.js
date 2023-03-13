var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}

// Envio de mensagem e validação do formulário 
function validateFields() {
    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#message').val();

    if (!name || !email || !message) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });

        Toast.fire({
            icon: 'error',
            title: 'Preencha todos os campos por favor!'
        });

        return false;
    }

    return true;
}

$(document).ready(function() {
    $('#submit-form').submit(function(e) {
        e.preventDefault();

        if (!validateFields()) {
            return;
        }

        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val(),
            _subject: $('#_subject').val(),
            _cc: $('#_cc').val(),
            _autoresponse: $('#_autoresponse').val(),
            _template: $('#_template').val(),
            _captcha: $('#_captcha').val()
        };

        $.ajax({
            method: 'POST',
            url: 'https://formsubmit.co/ajax/victorsoles09@gmail.com',
            dataType: 'json',
            accepts: 'application/json',
            data: formData,
            contentType: 'application/x-www-form-urlencoded',
            error: function(err) {
                const isValid = validateFields();

                if (!isValid) {
                    return;
                }

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                    }
                });

                Toast.fire({
                    icon: 'error',
                    title: 'Erro ao enviar formulário!'
                });
            },
            success: function(data) {
                Swal.fire({
                    title: "GreenBox",
                    html: '<p>Obrigado por entrar em contato conosco, retornaremos em breve!</p>',
                    icon: 'success',
                    imageWidth: 150,
                    imageHeight: 150,
                    imageAlt: 'Greenbox',
                    confirmButtonColor: '#3085d6',
                    position: 'center',
                });

                $('#submit-form')[0].reset();
            }
        });
    });
});