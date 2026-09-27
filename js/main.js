// Configuration des informations SYLERA
const SYLERA_CONFIG = {
    // Ton numéro WhatsApp commercial (avec l'indicatif sans le +)
    whatsappNumber: "50934942614", 
    
    ebookTitle: "50 Astuces d'Optimisation"
};

/**
 * Génère le lien WhatsApp sécurisé et redirige l'acheteur
 */
function orderEbook() {
    const message = `Bonjour SYLERA, je souhaite acheter l'e-book "${SYLERA_CONFIG.ebookTitle}". Merci de me transmettre les détails pour le paiement via MonCash / Natcash.`;
    
    // Encodage propre des caractères spéciaux pour l'URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${SYLERA_CONFIG.whatsappNumber}?text=${encodedMessage}`;
    
    // Ouverture dans un nouvel onglet
    window.open(whatsappUrl, '_blank');
}

/**
 * Intercepte le formulaire de diagnostic et génère le lien WhatsApp structuré
 */
function handleDiagnosticForm(event) {
    // 1. Empêche le navigateur de recharger la page
    event.preventDefault(); 
    
    // 2. Récupère les valeurs tapées par le client
    const typeAppareil = document.getElementById('deviceType').value;
    const marqueModele = document.getElementById('deviceModel').value;
    const description = document.getElementById('problemDesc').value;
    
    // 3. Construit le message avec un formatage clair et professionnel
    const message = `*🔧 DEMANDE DE DIAGNOSTIC - SYLERA*\n\n` +
                    `📱 *Type d'appareil :* ${typeAppareil}\n` +
                    `🏷️ *Modèle :* ${marqueModele}\n` +
                    `⚠️ *Problème rencontré :*\n${description}\n\n` +
                    `Merci de m'indiquer la faisabilité et un devis estimatif.`;
                    
    // 4. Encode le texte pour l'URL et déclenche l'ouverture
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${SYLERA_CONFIG.whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

/**
 * Redirige vers WhatsApp avec le problème spécifique pré-rempli depuis les accordéons
 */
function commanderServiceDirect(nomProbleme) {
    const message = `*🔧 DEMANDE D'INTERVENTION DIRECTE - SYLERA*\n\n` +
                    `Bonjour, je vous contacte suite à ce problème spécifique identifié sur votre site :\n` +
                    `👉 *${nomProbleme}*\n\n` +
                    `Pouvez-vous m'indiquer la faisabilité et le tarif pour cette solution ?`;
                    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${SYLERA_CONFIG.whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

/* =========================================
   SYSTÈME DE FILTRE (PAGE ACTUALITÉS)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const resourceCards = document.querySelectorAll('.resource-card');

    // Vérifie si on est bien sur la page actualités
    if (filterButtons.length > 0 && resourceCards.length > 0) {
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // 1. Retirer la classe active de tous les boutons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // 2. Ajouter la classe active au bouton cliqué
                button.classList.add('active');
                
                // 3. Récupérer la catégorie cliquée
                const filterValue = button.getAttribute('data-filter');
                
                // 4. Filtrer les cartes
                resourceCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    
                    if (filterValue === 'all' || filterValue === cardCategory) {
                        card.style.display = 'flex'; // flex pour garder la structure de la carte
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});

/* =========================================
   ANIMATION AU DÉFILEMENT (Fade Up)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // L'animation se déclenche quand 15% de l'élément est visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajoute la classe qui déclenche l'animation CSS
                entry.target.classList.add('active');
                // Optionnel : on arrête d'observer pour que l'animation ne se joue qu'une seule fois
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Sélectionne tous les éléments avec la classe .reveal et les observe
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
});