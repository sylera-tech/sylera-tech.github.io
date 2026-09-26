// Configuration des informations SYLERA
const SYLERA_CONFIG = {
    // Remplace par ton numéro WhatsApp commercial (avec l'indicatif sans le +)
    // Ex: "50912345678" pour Haïti
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