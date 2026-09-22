$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll('.prato-container');
    const btnPrev = document.getElementById('prev-button');
    const btnNext = document.getElementById('next-button');
    let indexAtual = 0;
    let isAnimating = false;


    const imagensGirando = document.querySelectorAll('.girando');

    imagensGirando.forEach(img => {
        img.rotationAngle = 0;
        img.currentSpeed = 0.5;
        img.targetSpeed = 0.5;

        function girarContinuamente() {

            img.currentSpeed += (img.targetSpeed - img.currentSpeed) * 0.05;


            img.rotationAngle = (img.rotationAngle + img.currentSpeed) % 360;
            img.style.transform = `rotate(${img.rotationAngle}deg)`;

            requestAnimationFrame(girarContinuamente);
        }

        requestAnimationFrame(girarContinuamente);
    });

    function trocarPrato(direcao) {
        if (isAnimating) return;
        isAnimating = true;

        const pratoSaindo = containers[indexAtual];
        pratoSaindo.classList.remove('active');

        if (direcao === 'next') {
            pratoSaindo.classList.add('slide-up');

            indexAtual = (indexAtual + 1) % containers.length;

            const pratoEntrando = containers[indexAtual];
            const imgEntrando = pratoEntrando.querySelector('.girando');

            pratoEntrando.style.transition = 'none';
            pratoEntrando.classList.remove('slide-up');
            void pratoEntrando.offsetWidth;

            pratoEntrando.style.transition = '';
            pratoEntrando.classList.add('active');


            imgEntrando.targetSpeed = 8.0;

        } else {
            pratoSaindo.classList.remove('slide-up');

            indexAtual = (indexAtual - 1 + containers.length) % containers.length;

            const pratoEntrando = containers[indexAtual];
            const imgEntrando = pratoEntrando.querySelector('.girando');

            pratoEntrando.style.transition = 'none';
            pratoEntrando.classList.add('slide-up');
            void pratoEntrando.offsetWidth;

            pratoEntrando.style.transition = '';
            pratoEntrando.classList.remove('slide-up');
            pratoEntrando.classList.add('active');


            imgEntrando.targetSpeed = 8.0;
        }


        setTimeout(() => {
            isAnimating = false;
            containers[indexAtual].querySelector('.girando').targetSpeed = 0.5;
        }, 600);
    }

    btnNext.addEventListener('click', () => trocarPrato('next'));
    btnPrev.addEventListener('click', () => trocarPrato('prev'));
});