import type { Metadata } from "next"
import "./styles/globals.scss"

export const metadata: Metadata = {
  title: 'Школа Го «КИРИ»',
  description:
    'Школа Го «КИРИ» — обучение игре Го с нуля и для продвинутых игроков.',
  keywords: [
    'Го',
    'школа Го',
    'обучение Го',
    'уроки Го',
    'где учиться играть в Го',
    'Го Севастополь',
    'игра Го обучение',
    'клуб Го',
    'КИРИ',
    'КИРИ Го',
    'kiri-go'
  ],
  openGraph: {
    title: 'Школа Го «КИРИ» — обучение игре Го',
    description:
      'Изучайте Го с профессиональными наставниками. Групповые тренировки. Присоединяйтесь к школе Го «КИРИ».',
    url: 'https://kiri-go.ru',
    siteName: 'Школа Го «КИРИ»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://kiri-go.ru/icons/main-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Школа Го КИРИ — обучение игре Го'
      }
    ]
  }
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
