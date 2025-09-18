import { Contacts } from "./components/Contacts/Contacts"
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { Offer } from "./components/Offer/Offer"

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
