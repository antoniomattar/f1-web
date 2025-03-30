import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function WhatsAppChatBtn() {
  return (
    <a
      href="https://wa.me/33626043435?text=Please help me with the F1 website!"
      className="fixed bottom-6 left-6 bg-green-600 text-white rounded-full p-4 shadow-lg hover:bg-green-700 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faMessage} className="text-2xl" />
    </a>
  );
}
