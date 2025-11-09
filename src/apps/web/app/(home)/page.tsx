import { AboutGo } from "@components/AboutGo"
import { Contacts } from "@components/Contacts"
import { EducationOffer } from "@components/EducationOffer"
import { FAQ } from "@components/FAQ"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header/Header"
import { Hero } from "@components/Hero"
import { InversionOverlay } from "@components/InversionOverlay"
import { ReviewList } from "@components/ReviewList"
import { TeacherList } from "@components/TeacherList"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutGo />
        <EducationOffer />
        <InversionOverlay />
        <TeacherList />
        <ReviewList/>
        <Contacts />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
