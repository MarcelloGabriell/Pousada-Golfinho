/**
 * Cria um modal para exibição de imagens em tela cheia
 * @returns {HTMLElement} O elemento do modal criado
 */
function createModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <img class="modal-image" src="" alt="Imagem ampliada">
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

/**
 * Abre o modal com a imagem especificada
 * @param {string} imageSrc - O caminho da imagem a ser exibida
 */
function openModal(imageSrc) {
    const modal = document.querySelector('.modal') || createModal();
    const modalImage = modal.querySelector('.modal-image');
    modalImage.src = imageSrc;
    modal.style.display = 'flex';
}

/**
 * Fecha o modal de imagem
 */
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as imagens dos quartos e da seção sobre
    const images = document.querySelectorAll('.quarto-info img, .sobre-item img');
    
    // Adiciona o evento de clique em cada imagem
    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            openModal(this.src);
        });
    });

    // Adiciona eventos para fechar o modal
    document.addEventListener('click', function(event) {
        const modal = document.querySelector('.modal');
        if (modal && event.target === modal) {
            closeModal();
        }
    });

    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Animação do logo no header
    const logo = document.querySelector('.logo-img');
    
    if (logo) {
        // Adiciona efeito hover no logo
        logo.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.2s ease';
            this.style.transform = 'scale(1.02)';
        });

        // Remove o efeito hover do logo
        logo.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.2s ease';
            this.style.transform = 'scale(1)';
        });
    }
}); 