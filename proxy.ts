import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const supportedLanguages = ['tr', 'en'];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // API yollarına ve statik dosyalara dokunma
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/public/') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // URL'de zaten dil prefix'i var mı? (/en/...)
  const isEnUrl = pathname === '/en' || pathname.startsWith('/en/');

  if (isEnUrl) {
    // İngilizce sayfa → cookie'yi güncelle
    const response = NextResponse.next();
    response.cookies.set('lang', 'en', {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
    response.headers.set('x-language', 'en');
    return response;
  }

  // Prefix'siz URL (Türkçe) → her zaman Türkçe göster, asla yönlendirme
  const cookieLang = request.cookies.get('lang')?.value;

  // İlk ziyaret mi? (cookie yok)
  if (!cookieLang) {
    const acceptLang = request.headers.get('accept-language');
    if (acceptLang) {
      const preferred = acceptLang.split(',')[0]?.split('-')[0];
      if (preferred === 'en') {
        // Sadece ilk ziyarette İngilizce'ye yönlendir
        const url = request.nextUrl.clone();
        url.pathname = `/en${pathname === '/' ? '' : pathname}`;
        const response = NextResponse.redirect(url);
        response.cookies.set('lang', 'en', {
          path: '/',
          maxAge: 60 * 60 * 24 * 365,
          sameSite: 'lax',
        });
        return response;
      }
    }
  }

  // Türkçe için devam et
  const response = NextResponse.next();
  response.cookies.set('lang', 'tr', {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  });
  response.headers.set('x-language', 'tr');
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
};
