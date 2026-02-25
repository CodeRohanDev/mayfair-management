import { siteConfig } from '@/config/site';

// Google Analytics event tracking
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, eventParams);
    }
};

// Track page views
export const trackPageView = (url: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', siteConfig.analytics.googleAnalytics, {
            page_path: url,
        });
    }
};

// Track conversions
export const trackConversion = (conversionLabel: string, value?: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
            send_to: conversionLabel,
            value: value,
            currency: 'USD',
        });
    }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
    trackEvent('form_submission', {
        form_name: formName,
        event_category: 'engagement',
        event_label: formName,
    });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, buttonLocation: string) => {
    trackEvent('button_click', {
        button_name: buttonName,
        button_location: buttonLocation,
        event_category: 'engagement',
    });
};

// Track outbound links
export const trackOutboundLink = (url: string, linkText: string) => {
    trackEvent('outbound_link', {
        link_url: url,
        link_text: linkText,
        event_category: 'engagement',
    });
};

// Track file downloads
export const trackFileDownload = (fileName: string, fileType: string) => {
    trackEvent('file_download', {
        file_name: fileName,
        file_type: fileType,
        event_category: 'engagement',
    });
};

// Track phone clicks
export const trackPhoneClick = (phoneNumber: string) => {
    trackEvent('phone_click', {
        phone_number: phoneNumber,
        event_category: 'engagement',
        event_label: 'contact',
    });
};

// Track email clicks
export const trackEmailClick = (emailAddress: string) => {
    trackEvent('email_click', {
        email_address: emailAddress,
        event_category: 'engagement',
        event_label: 'contact',
    });
};

// Track video plays
export const trackVideoPlay = (videoTitle: string, videoUrl: string) => {
    trackEvent('video_play', {
        video_title: videoTitle,
        video_url: videoUrl,
        event_category: 'engagement',
    });
};

// Track search queries
export const trackSearch = (searchTerm: string, resultsCount: number) => {
    trackEvent('search', {
        search_term: searchTerm,
        results_count: resultsCount,
        event_category: 'engagement',
    });
};

// Track social shares
export const trackSocialShare = (platform: string, url: string) => {
    trackEvent('social_share', {
        platform: platform,
        url: url,
        event_category: 'engagement',
    });
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
    trackEvent('scroll_depth', {
        depth_percentage: depth,
        event_category: 'engagement',
    });
};

// Track time on page
export const trackTimeOnPage = (seconds: number, pagePath: string) => {
    trackEvent('time_on_page', {
        time_seconds: seconds,
        page_path: pagePath,
        event_category: 'engagement',
    });
};

// Facebook Pixel tracking
export const trackFBEvent = (eventName: string, eventParams?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', eventName, eventParams);
    }
};

// LinkedIn tracking
export const trackLinkedInConversion = (conversionId: string) => {
    if (typeof window !== 'undefined' && (window as any).lintrk) {
        (window as any).lintrk('track', { conversion_id: conversionId });
    }
};

// Bing UET tracking
export const trackBingEvent = (eventName: string, eventParams?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).uetq) {
        (window as any).uetq.push('event', eventName, eventParams);
    }
};
