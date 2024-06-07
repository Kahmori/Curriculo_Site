//Busca os dados do front, mas não está conseguindo encontrar o endereçamento

export default function enviarEmail(){
  
    const contactForm = document.getElementById('contactForm');
    console.log('contactForm:', contactForm);
    if (!contactForm) {
      console.error('Elemento contactForm não encontrado');
      return;
    }

    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      console.log('Formulário de contato submetido');

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      const formData = { name, email, message };
      console.log('Dados do formulário:', formData);

      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Resposta do backend:', data);
        if (data.success) {
          alert('Email enviado com sucesso!');

          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('message').value = '';
        } else {
          alert('Falha ao enviar email');
        }
      })
      .catch(error => {
        console.error('Erro:', error);
      });
    });
   

}

/*
//original works
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.sucess){
        alert('Email enviado com sucesso!');
      } else {
        alert('Falha ao enviar email');
      }
    })
    .catch(error => {
      console.log('Erro:', error);
    });
  });
});

*/