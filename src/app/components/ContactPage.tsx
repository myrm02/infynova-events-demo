import { useState } from "react";
import InfobipSubmitForm from "../api/infobip-form";

export function ContactPage() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    typeEvenement: "",
    message: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const submissionStatus = InfobipSubmitForm(form.nom, form.prenom, form.telephone.substring(1, form.telephone.length), form.typeEvenement, form.message);  ;

    if (submissionStatus?.success === false) {
      setShowErrorMessage(true);
      setSubmissionMessage(submissionStatus?.error || "");
    } else {
      setShowSuccessMessage(true);
      setSubmissionMessage("Votre message a été envoyé avec succès ! Nous vous contacterons bientôt.");
    }
  };

  return (
    <div className="bg-[#F9F5EF] min-h-screen">

      {/* ── HEADER ── */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 pt-28 pb-10">
        <h1
          className="text-[#1A1410]"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 400,
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            letterSpacing: '0.06em',
          }}
        >
          CONTACT
        </h1>
        <div className="mt-6 border-t border-[#1A1410]/15" />
      </section>

      {/* ── FORM ── */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 pb-24">
        <div className="max-w-xl">
          
            <form onSubmit={handleSubmit} className="space-y-0">
              {/* Nom */}
              <div className="py-6 border-b border-[#1A1410]/12">
                <label
                  className="block text-[#1A1410]/40 text-xs tracking-[0.15em] mb-3"
                  style={{ fontFamily: 'Jost' }}
                >
                  Nom
                </label>
                <input
                  required
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1A1410]/20 pb-2 text-[#1A1410] placeholder-[#1A1410]/25 focus:outline-none focus:border-[#1A1410]/60 transition-colors"
                  style={{ fontFamily: 'Jost', fontWeight: 300, fontSize: '1rem' }}
                  placeholder="Votre nom"
                />
              </div>

              {/* Prénom */}
              <div className="py-6 border-b border-[#1A1410]/12">
                <label
                  className="block text-[#1A1410]/40 text-xs tracking-[0.15em] mb-3"
                  style={{ fontFamily: 'Jost' }}
                >
                  Prénom
                </label>
                <input
                  required
                  value={form.prenom}
                  onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1A1410]/20 pb-2 text-[#1A1410] placeholder-[#1A1410]/25 focus:outline-none focus:border-[#1A1410]/60 transition-colors"
                  style={{ fontFamily: 'Jost', fontWeight: 300, fontSize: '1rem' }}
                  placeholder="Votre prénom"
                />
              </div>

              {/* Téléphone */}
              <div className="py-6 border-b border-[#1A1410]/12">
                <label
                  className="block text-[#1A1410]/40 text-xs tracking-[0.15em] mb-3"
                  style={{ fontFamily: 'Jost' }}
                >
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  value={form.telephone}
                  onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1A1410]/20 pb-2 text-[#1A1410] placeholder-[#1A1410]/25 focus:outline-none focus:border-[#1A1410]/60 transition-colors"
                  style={{ fontFamily: 'Jost', fontWeight: 300, fontSize: '1rem' }}
                  placeholder="+33656762145"
                />
              </div>

              {/* Type d'évènement */}
              <div className="py-6 border-b border-[#1A1410]/12">
                <label
                  className="block text-[#1A1410]/40 text-xs tracking-[0.15em] mb-3"
                  style={{ fontFamily: 'Jost' }}
                >
                  Type d'évènement
                </label>
                <select
                  required
                  value={form.typeEvenement}
                  onChange={(e) => setForm({ ...form, typeEvenement: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1A1410]/20 pb-2 text-[#1A1410] focus:outline-none focus:border-[#1A1410]/60 transition-colors appearance-none cursor-pointer"
                  style={{ fontFamily: 'Jost', fontWeight: 300, fontSize: '1rem', color: form.typeEvenement ? '#1A1410' : 'rgba(26,20,16,0.25)' }}
                >
                  <option value="" disabled hidden>Sélectionnez un type</option>
                  <option value="business">Business</option>
                  <option value="festival">Festival</option>
                  <option value="soirée">Soirée</option>
                  <option value="anniversaire">Anniversaire</option>
                  <option value="universitaire">Universitaire</option>
                  <option value="tourisme">Tourisme</option>
                </select>
              </div>

              {/* Message */}
              <div className="py-6 border-b border-[#1A1410]/12">
                <label
                  className="block text-[#1A1410]/40 text-xs tracking-[0.15em] mb-3"
                  style={{ fontFamily: 'Jost' }}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1A1410]/20 pb-2 text-[#1A1410] placeholder-[#1A1410]/25 focus:outline-none focus:border-[#1A1410]/60 transition-colors resize-none"
                  style={{ fontFamily: 'Jost', fontWeight: 300, fontSize: '1rem' }}
                  placeholder="Décrivez votre projet..."
                />
              </div>

              <div className="pt-10">
                <button
                  type="submit"
                  className="border border-[#1A1410] text-[#1A1410] text-xs tracking-[0.18em] px-10 py-3.5 hover:bg-[#1A1410] hover:text-[#F9F5EF] transition-colors"
                >
                  SEND
                </button>
              </div>
            </form>
            {showSuccessMessage ? (
            <div className="py-16">
              <p
                className="text-[#1A1410]"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: '1.4rem',
                  color: '#2F855A',
                }}
              >
                {submissionMessage}
              </p>
            </div>
          ) : (
            <div className="py-16">
              <p
                className="text-[#1A1410]"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: '1.4rem',
                  color: '#C53030',
                }}
              >
                {submissionMessage}
              </p>
            </div>
          )} 
        </div>
      </section>
    </div>
  );
}
