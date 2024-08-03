
    //header
    document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    });
    });
    
    
     // orders
        let hearts = document.querySelectorAll('#heart');
        hearts.forEach(heart => {
            heart.addEventListener('click', function() {
                if (heart.style.color === 'red') {
                    heart.style.color = 'white';
                } else {
                    heart.style.color = 'red';
                }
            });
        });

            // requestes

                document.querySelectorAll('.card-confirm-orders button').forEach(button => {
            button.addEventListener('click', function() {
                this.parentElement.remove();
            });
        });

