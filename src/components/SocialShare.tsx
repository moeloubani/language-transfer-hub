import React from 'react';

interface SocialShareProps {
  sourceLanguage?: string;
  targetLanguage?: string;
  activeTab?: 'syntax' | 'pitfalls' | 'differences' | 'frameworks';
}

const buildShareUrl = (
  sourceLanguage?: string,
  targetLanguage?: string,
  activeTab?: 'syntax' | 'pitfalls' | 'differences' | 'frameworks'
) => {
  const url = new URL(window.location.href);
  const params = url.searchParams;
  if (sourceLanguage) params.set('source', sourceLanguage);
  if (targetLanguage) params.set('target', targetLanguage);
  if (activeTab) params.set('tab', activeTab);
  url.search = params.toString();
  return url.toString();
};

const openWindow = (href: string) => {
  window.open(href, '_blank', 'noopener,noreferrer');
};

export const SocialShare: React.FC<SocialShareProps> = ({
  sourceLanguage,
  targetLanguage,
  activeTab,
}) => {
  const shareUrl = React.useMemo(
    () => buildShareUrl(sourceLanguage, targetLanguage, activeTab),
    [sourceLanguage, targetLanguage, activeTab]
  );

  const shareText = `Language Transfer Hub: ${sourceLanguage || ''} → ${
    targetLanguage || ''
  } (${activeTab || 'syntax'})`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={handleCopy}
        className="px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 shadow-sm"
      >
        Copy link
      </button>
      <button
        type="button"
        onClick={() =>
          openWindow(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(
              shareText
            )}&url=${encodeURIComponent(shareUrl)}`
          )
        }
        className="px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 shadow-sm"
      >
        Share on X
      </button>
      <button
        type="button"
        onClick={() =>
          openWindow(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              shareUrl
            )}`
          )
        }
        className="px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 shadow-sm"
      >
        Share on LinkedIn
      </button>
      <button
        type="button"
        onClick={() =>
          openWindow(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              shareUrl
            )}`
          )
        }
        className="px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 shadow-sm"
      >
        Share on Facebook
      </button>
    </div>
  );
};

export default SocialShare;


