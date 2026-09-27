export type Locale = 'ja' | 'en';

export interface FormatRelativeTimeOptions {
    now: Date;
    locale: Locale;
}

export function formatRelativeTime(target: Date, options: FormatRelativeTimeOptions): string {
    const { now, locale } = options;
    const diffMs = now.getTime() - target.getTime();

    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSeconds < 60) {
        return locale === 'ja' ? 'たった今' : 'just now';
    }
    if (diffMinutes < 60) {
        return locale === 'ja' ? `${diffMinutes}分前` : `${diffMinutes}m ago`;
    }
    if (diffHours < 24) {
        return locale === 'ja' ? `${diffHours}時間前` : `${diffHours}h ago`;
    }
    return locale === 'ja' ? `${diffDays}日前` : `${diffDays}d ago`;
}
