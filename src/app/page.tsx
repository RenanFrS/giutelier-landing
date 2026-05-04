import { Nav }          from '@/components/layout/Nav'
import { Footer }       from '@/components/layout/Footer'
import { Hero }         from '@/components/sections/Hero'
import { Marquee }      from '@/components/sections/Marquee'
import { Manifesto }    from '@/components/sections/Manifesto'
import { Philosophy }   from '@/components/sections/Philosophy'
import { Pezzi }        from '@/components/sections/Pezzi'
import { Processo }     from '@/components/sections/Processo'
import { Testimonials } from '@/components/sections/Testimonials'
import { Contato }      from '@/components/sections/Contato'

export default function HomePage(): JSX.Element {
  return (
    <>
      <Nav />

      <main id="main-content">
        <Hero />
        <Marquee />
        <Manifesto />
        <Philosophy />
        <Pezzi />
        <Processo />
        <Testimonials />
        <Contato />
      </main>

      <Footer />
    </>
  )
}
