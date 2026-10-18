import { describe, it, expect } from 'vitest';
import { formatRelativeTime } from '../src/index';

describe('formatRelativeTime', () => {
    //基準となる日時を固定 (ex. 2026-01-01 12:00:00)
    const baseTime = new Date('2026-01-01T12:00:00Z');

    describe('日本語 (ja)', () => {
        it('1分未満は「たった今」と返すこと', () => {
            const target = new Date('2026-01-01T11:59:30Z'); // 30秒前
            expect(formatRelativeTime(target, { now: baseTime, locale: 'ja' })).toBe('たった今');
        });

        it('1時間未満は「~分前」と返すこと', () => {
            const target = new Date('2026-01-01T11:50:00Z'); // 10分前
            expect(formatRelativeTime(target, { now: baseTime, locale: 'ja' })).toBe('10分前');
        });

        it('24時間未満は「~時間前」と返すこと', () => {
            const target = new Date('2026-01-01T09:00:00Z'); // 3時間前
            expect(formatRelativeTime(target, { now: baseTime, locale: 'ja' })).toBe('3時間前');
        });

        it('30日未満は「~日前」と返すこと', () => {
            const target = new Date('2025-12-30T12:00:00Z'); // 2日前
            expect(formatRelativeTime(target, { now: baseTime, locale: 'ja' })).toBe('2日前');
        });

        it('365日未満は「~ヶ月前」と返すこと', () => {
            const target = new Date('2025-11-02T12:00:00Z'); // 60日前
            expect(formatRelativeTime(target, { now: baseTime, locale: 'ja' })).toBe('2ヶ月前');
        });

        it('365日以上は「~年前」と返すこと', () => {
            const target = new Date('2025-01-01T12:00:00Z'); // 365日前
            expect(formatRelativeTime(target, { now: baseTime, locale: 'ja' })).toBe('1年前');
        });
    })

    describe('英語 (en)', () => {
        it('1分未満は「just now」と返すこと', () => {
            const target = new Date('2026-01-01T11:59:30Z'); // 30秒前
            expect(formatRelativeTime(target, { now: baseTime, locale: 'en' })).toBe('just now');
        });

        it('1時間未満は「~m ago」と返すこと', () => {
            const target = new Date('2026-01-01T11:50:00Z'); // 10分前
            expect(formatRelativeTime(target, { now: baseTime, locale: 'en' })).toBe('10m ago');
        });

        it('24時間未満は「~h ago」と返すこと', () => {
            const target = new Date('2026-01-01T09:00:00Z'); // 3時間前
            expect(formatRelativeTime(target, { now: baseTime, locale: 'en' })).toBe('3h ago');
        });

        it('30日未満は「~d ago」と返すこと', () => {
            const target = new Date('2025-12-30T12:00:00Z'); // 2日前
            expect(formatRelativeTime(target, { now: baseTime, locale: 'en' })).toBe('2d ago');
        });

        it('365日未満は「~mo ago」と返すこと', () => {
            const target = new Date('2025-11-02T12:00:00Z'); // 60日前
            expect(formatRelativeTime(target, { now: baseTime, locale: 'en' })).toBe('2mo ago');
        });

        it('365日以上は「~y ago」と返すこと', () => {
            const target = new Date('2025-01-01T12:00:00Z'); // 365日前
            expect(formatRelativeTime(target, { now: baseTime, locale: 'en' })).toBe('1y ago');
        });
    })
})