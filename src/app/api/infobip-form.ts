// In the browser we must not load `dotenv` (it is server-side only).
// Use Vite env vars (prefix `VITE_`) for values available at build time.
// Set `VITE_API_KEY` in your .env (note: embedding secrets in client bundles is insecure).
const VITE_API_KEY = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_API_KEY) || '';

export default async function InfobipSubmitForm(name: string, prenom: string, telephone: string, type: string, message: string) {
  const formData = new FormData();
    
  formData.append("nom_lead", name); // Nom
  formData.append("prenom_lead", prenom); // Prénom
  formData.append("telephone_lead", telephone); // Téléphone
  formData.append("type_event", type); // Type d'event
  formData.append("demande_lead", message); // Message
  formData.append("UserProfileEmail", "none@example.com"); // Email (non required mais bug API)

  let result;

  try {

    const response = await fetch("https://8vv3md.api.infobip.com/forms/1/forms/694e471c-1269-45b0-a0a7-c68cff902cec/data", {
      method: "POST",
      headers: {
        "Authorization": `App ${VITE_API_KEY}`,
      },
      body: formData,
    });
      
    result = await response.json();

    } catch (err) {
      result = { success: false, error: `${err}` };
    }

    return result;

  }