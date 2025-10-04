import { Contacts } from "./components/Contacts"
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero"
import { Offer } from "./components/Offer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Offer />
        <Contacts />
      </main>
    </>
  );
}
