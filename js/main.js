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