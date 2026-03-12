import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen ? (
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-96 h-[700px] flex flex-col">
          <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
            <h3 className="text-lg font-light">Need Help?</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex-1">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/hwsJ_p2r6k5T__1w7otXp"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Chat with our AI Assistant"
              allow="microphone"
            />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
