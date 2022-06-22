import React, { useMemo } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { route } = useRouter();

  // Для Админки не отрисовываем шапку и футер
  const isAdmin = useMemo(() => route.includes('admin'), [route]);

  if (isAdmin) {
    return <Component {...pageProps} />;
  }

  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
