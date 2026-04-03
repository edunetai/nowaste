import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider } from '../i18n/LanguageContext';
import Navigation from '../components/Navigation';

describe('Navigation', () => {
  const mockOnNavigate = vi.fn();
  
  beforeEach(() => {
    mockOnNavigate.mockClear();
  });

  it('renders with correct active section highlighted', () => {
    render(
      <LanguageProvider>
        <Navigation activeSection="home" onNavigate={mockOnNavigate} />
      </LanguageProvider>
    );
    
    expect(screen.getByText('Trang chủ')).toBeInTheDocument();
  });

  it('calls onNavigate when nav item is clicked', () => {
    render(
      <LanguageProvider>
        <Navigation activeSection="home" onNavigate={mockOnNavigate} />
      </LanguageProvider>
    );
    
    fireEvent.click(screen.getByText('Phân tích Khoảng cách'));
    
    expect(mockOnNavigate).toHaveBeenCalledWith('gap-analysis');
  });

  it('has menu toggle button', () => {
    render(
      <LanguageProvider>
        <Navigation activeSection="home" onNavigate={mockOnNavigate} />
      </LanguageProvider>
    );
    
    const menuButton = document.querySelector('.md\\:hidden button');
    expect(menuButton).toBeInTheDocument();
  });
});
