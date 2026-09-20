import { MessageCircle } from "lucide-react";
import "../../styles/global.css";

function WhatsAppButton() {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello NUVIQ AI LABS, I would like to know more about your services."
    );

    window.open(
      `https://wa.me/918838096220?text=${message}`,
      "_blank"
    );
  };

  return (
    <button
      className="floating-whatsapp"
      onClick={openWhatsApp}
      aria-label="Contact NUVIQ AI LABS on WhatsApp"
    >
      <MessageCircle size={25} />

      <span className="whatsapp-tooltip">
        Chat with us
      </span>
    </button>
  );
}

export default WhatsAppButton;