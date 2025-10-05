import { Contacts } from "@components/Contacts"
import { Header } from "@components/Header/Header"
import { Hero } from "@components/Hero"
import { InversionOverlay } from "@components/InversionOverlay"
import { Offer } from "@components/Offer"
import { ReviewList } from "@components/ReviewList"
import { TeacherList } from "@components/TeacherList"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InversionOverlay />
        <TeacherList />
        <ReviewList/>
        <Offer />
        <Contacts />
      </main>
    </>
  );
}
