import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Link as LinkIcon } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
  description: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title, description }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-[#1877f2] hover:bg-[#0d6efd]',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'bg-[#1da1f2] hover:bg-[#0c85d0]',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
      color: 'bg-[#0a66c2] hover:bg-[#084d93]',
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      color: 'bg-gray-600 hover:bg-gray-700',
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-lg font-light tracking-wider text-gray-900">Share this article</h2>
      <div className="flex items-center space-x-3">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 text-white rounded-full transition-colors ${link.color}`}
            aria-label={`Share on ${link.name}`}
          >
            {link.icon}
          </a>
        ))}
        <button
          onClick={copyToClipboard}
          className="p-2 text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
          aria-label="Copy link"
        >
          <LinkIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SocialShare; 