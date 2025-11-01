import { AboutGo } from "@components/AboutGo"
import { Contacts } from "@components/Contacts"
import { FAQ } from "@components/FAQ"
import { Header } from "@components/Header/Header"
import { Hero } from "@components/Hero"
import { InversionOverlay } from "@components/InversionOverlay"
// import { Offer } from "@components/Offer"
import { ReviewList } from "@components/ReviewList"
import { TeacherList } from "@components/TeacherList"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutGo />
        {/* <Offer /> */}
        <InversionOverlay />
        <TeacherList />
        <ReviewList/>
        <Contacts />
        <FAQ />
      </main>
    </>
  );
}
