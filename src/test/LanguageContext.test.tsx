import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LanguageProvider, useLanguage } from '../i18n/LanguageContext';
import userEvent from '@testing-library/user-event';

function TestComponent() {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <div>
      <span data-testid="lang">{language}</span>
      <button data-testid="set-en" onClick={() => setLanguage('en')}>Set EN</button>
      <button data-testid="set-vi" onClick={() => setLanguage('vi')}>Set VI</button>
      <span data-testid="translation">{t('navigation.home')}</span>
    </div>
  );
}

function TestComponentMissingKey() {
  const { t } = useLanguage();
  
  return (
    <span data-testid="missing-key">{t('nonexistent.key')}</span>
  );
}

describe('LanguageContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('provides default language as Vietnamese', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    expect(screen.getByTestId('lang').textContent).toBe('vi');
  });

  it('translates navigation.home to Vietnamese by default', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    expect(screen.getByTestId('translation').textContent).toBe('Trang chủ');
  });

  it('changes language when setLanguage is called', async () => {
    const user = userEvent.setup();
    
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    await user.click(screen.getByTestId('set-en'));
    
    expect(screen.getByTestId('lang').textContent).toBe('en');
    expect(screen.getByTestId('translation').textContent).toBe('Home');
  });

  it('persists language to localStorage', async () => {
    const user = userEvent.setup();
    
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    await user.click(screen.getByTestId('set-en'));
    
    expect(localStorage.getItem('language')).toBe('en');
  });

  it('loads saved language from localStorage', () => {
    localStorage.setItem('language', 'en');
    
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    expect(screen.getByTestId('lang').textContent).toBe('en');
  });

  it('returns key when translation key is missing', () => {
    render(
      <LanguageProvider>
        <TestComponentMissingKey />
      </LanguageProvider>
    );
    
    expect(screen.getByTestId('missing-key').textContent).toBe('nonexistent.key');
  });
});
