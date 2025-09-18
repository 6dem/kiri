import type { Metadata } from "next"
import "./styles/globals.scss"

export const metadata: Metadata = {
  title: 'Школа Го "КИРИ"',
  description: "Узнайте, чем полезна игра Го и запишитесь на обучение.",
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
