import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function WhatsAppChatBtn() {
  return (
    <a
      href="https://wa.me/33626043435?text=Please help me with the F1 website!"
      class="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex justify-center items-center self-center text-center content-center">
        <FontAwesomeIcon icon={faMessage} className="text-white" />
      </div>
    </a>
  );
}
