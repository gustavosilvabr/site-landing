import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Phone, Send } from "lucide-react";
import { submitLead } from "@/lib/leads.functions";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import mockupSite from "@/assets/mockup-site.jpg";
import mockupMaps from "@/assets/mockup-maps.jpg";
import mockupOrders from "@/assets/mockup-orders.jpg";
import mockupSchedule from "@/assets/mockup-schedule.jpg";
import solutionGoogleMaps from "@/assets/solution-google-maps.png";
import solutionSites from "@/assets/solution-sites.png";
import segmentAcademias from "@/assets/segment-academias.png";
import segmentClinicas from "@/assets/segment-clinicas.png";
import segmentCosmeticos from "@/assets/segment-cosmeticos.png";
import segmentDentistas from "@/assets/segment-dentistas.png";
import segmentEngenhariaCivil from "@/assets/segment-engenharia-civil.png";
import segmentMarcenaria from "@/assets/segment-marcenaria.png";
import segmentOculos from "@/assets/segment-oculos.png";
import segmentPerfumes from "@/assets/segment-perfumes.png";
import segmentRestaurantes from "@/assets/segment-restaurantes.png";

const WHATSAPP_NUMBER = "5561995167585";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/")({
  component: LandingPage,
});

/* -------------------- DATA -------------------- */

const PROBLEMS = [
  {
    n: "01",
    title: "Invisibilidade no Google",
    body: "Seu concorrente está na primeira página e você nem aparece no mapa do bairro.",
  },
  {
    n: "02",
    title: "Site que não vende",
    body: "Visitantes entram, não entendem sua proposta e vão embora sem deixar contato.",
  },
  {
    n: "03",
    title: "Atendimento manual",
    body: "Pedidos e agendamentos perdidos no caos do WhatsApp e papel.",
  },
  {
    n: "04",
    title: "Sem previsibilidade",
    body: "Mês bom, mês ruim — sem um motor digital que traga clientes todos os dias.",
  },
];

const SERVICES = [
  {
    n: "01",
    eyebrow: "Solução 01",
    title: "Sites de\nAlta Conversão",
    body: "Plataformas focadas em um único objetivo: transformar visitantes em oportunidades reais de negócio.",
    points: ["Mobile first e ultra-rápido", "Copy estratégico de conversão", "Integração nativa com WhatsApp"],
    image: solutionSites,
    flip: false,
    cta: "Quero meu site",
  },
  {
    n: "02",
    eyebrow: "Solução 02",
    title: "Domínio Local\nGoogle Maps",
    body: "Colocamos sua empresa na frente de quem está procurando agora pelo seu serviço, na sua região.",
    points: ["Otimização do Perfil de Empresa", "Estratégia de avaliações e fotos", "SEO local de intenção de compra"],
    image: solutionGoogleMaps,
    flip: true,
    cta: "Quero aparecer",
  },
  {
    n: "03",
    eyebrow: "Solução 03",
    title: "Sistemas de\nPedidos Online",
    body: "Receba pedidos direto pelo seu cardápio digital, sem comissões de marketplaces e com pagamento integrado.",
    points: ["Cardápio digital próprio", "Sem comissão por pedido", "Notificações automáticas"],
    image: mockupOrders,
    flip: false,
    cta: "Quero meu cardápio",
  },
  {
    n: "04",
    eyebrow: "Solução 04",
    title: "Agendamento\n24/7 Automático",
    body: "Sua agenda preenchida por um sistema que trabalha enquanto você atende — zero faltas, lembretes automáticos.",
    points: ["Agenda online integrada", "Lembretes por WhatsApp", "Redução de faltas comprovada"],
    image: mockupSchedule,
    flip: true,
    cta: "Quero automatizar",
  },
];

const PROJECT_AREAS = [
  {
    area: "Clínicas",
    title: "Captação de pacientes particulares",
    body: "Landing page com especialidades, convênios, prova social, localização e botão direto para agendamento.",
    image: segmentClinicas,
    accent: "bg-blue-500",
    points: ["Agenda online", "SEO local", "WhatsApp por especialidade"],
  },
  {
    area: "Dentistas",
    title: "Tratamentos com alto valor percebido",
    body: "Páginas para implantes, estética dental e avaliação inicial com fotos, diferenciais e funil de contato.",
    image: segmentDentistas,
    accent: "bg-cyan-500",
    points: ["Antes e depois", "Avaliação pelo WhatsApp", "Google Maps otimizado"],
  },
  {
    area: "Restaurantes",
    title: "Pedidos, reservas e cardápio digital",
    body: "Site rápido com cardápio, promoções, delivery próprio, reservas e integração com campanhas locais.",
    image: segmentRestaurantes,
    accent: "bg-rose-500",
    points: ["Cardápio online", "Pedidos sem comissão", "Campanhas por bairro"],
  },
  {
    area: "Marcenaria",
    title: "Orçamentos para móveis planejados",
    body: "Portfólio visual, tipos de ambientes, formulário de briefing e captação de clientes de alto ticket.",
    image: segmentMarcenaria,
    accent: "bg-amber-600",
    points: ["Galeria de projetos", "Briefing inteligente", "Leads qualificados"],
  },
  {
    area: "Engenharia civil",
    title: "Autoridade para obras e projetos",
    body: "Landing institucional com serviços, obras entregues, ART, equipe técnica e solicitação de proposta.",
    image: segmentEngenhariaCivil,
    accent: "bg-slate-500",
    points: ["Portfólio técnico", "Propostas online", "SEO regional"],
  },
  {
    area: "Cosméticos",
    title: "Vitrine de produtos e lançamentos",
    body: "Páginas para linhas de produtos, kits, revendedores, catálogo e campanhas sazonais de conversão.",
    image: segmentCosmeticos,
    accent: "bg-fuchsia-500",
    points: ["Catálogo visual", "Kits promocionais", "Captação de revendas"],
  },
  {
    area: "Perfumes",
    title: "Experiência premium de marca",
    body: "Landing sensorial com coleções, notas olfativas, combos, datas comemorativas e compra pelo WhatsApp.",
    image: segmentPerfumes,
    accent: "bg-violet-500",
    points: ["Coleções por ocasião", "Ofertas premium", "Atendimento consultivo"],
  },
  {
    area: "Óculos",
    title: "Venda local para óticas e eyewear",
    body: "Site com armações, lentes, exames, marcas, localização e campanha para levar clientes até a loja.",
    image: segmentOculos,
    accent: "bg-sky-500",
    points: ["Vitrine de armações", "Rotas no Maps", "Cupons locais"],
  },
  {
    area: "Academias",
    title: "Matrículas e planos recorrentes",
    body: "Landing com modalidades, planos, horários, aulas experimentais e automação para novos alunos.",
    image: segmentAcademias,
    accent: "bg-sky-600",
    points: ["Aula experimental", "Planos destacados", "Remarketing local"],
  },
];

const METRICS = [
  { v: "+300%", label: "Alcance Local", bg: "bg-[var(--ink-deep)]", fg: "text-[var(--paper)]", muted: "text-[var(--steel)]" },
  { v: "+150%", label: "Leads Qualificados", bg: "bg-[var(--signal)]", fg: "text-[var(--ink-deep)]", muted: "text-[var(--ink-deep)]/70" },
  { v: "+200%", label: "Ligações Diretas", bg: "bg-[var(--ink-deep)]", fg: "text-[var(--paper)]", muted: "text-[var(--steel)]" },
  { v: "Zero", label: "Desperdício", bg: "bg-[var(--steel)]", fg: "text-[var(--ink-deep)]", muted: "text-[var(--ink-deep)]/70" },
];

const PROCESS = [
  { n: "01", title: "Diagnóstico", body: "Entendemos seu negócio, seu mercado e seus clientes em uma reunião de 30 minutos." },
  { n: "02", title: "Estratégia", body: "Desenhamos o plano sob medida: site, Maps, sistemas e funil de captação." },
  { n: "03", title: "Execução", body: "Time sênior em design, código e tráfego entrega tudo em até 14 dias." },
  { n: "04", title: "Crescimento", body: "Acompanhamento contínuo, ajustes finos e relatórios de performance." },
];

/* -------------------- ROOT -------------------- */

function LandingPage() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(".reveal, .reveal-up, [data-stagger-item]", {
          opacity: 1,
          y: 0,
          clearProps: "transform",
        });
        return;
      }

      const heroTl = gsap.timeline({ defaults: { ease: "expo.out" } });
      heroTl
        .fromTo(".hero-kicker", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(".hero-title", { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.35")
        .fromTo(".hero-copy", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.75 }, "-=0.45")
        .fromTo(".hero-actions", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.65 }, "-=0.35")
        .fromTo(".hero-stat", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 }, "-=0.25")
        .fromTo(
          ".hero-media",
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.8",
        );

      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
        if (el.closest("#top")) return;
        gsap.fromTo(el, {
          opacity: 0,
          y: 30,
        }, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 84%", once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        if (el.closest("#top")) return;
        gsap.fromTo(el, {
          opacity: 0,
        }, {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((wrap) => {
        const items = wrap.querySelectorAll<HTMLElement>("[data-stagger-item]");
        gsap.fromTo(
          items,
          { opacity: 0, y: 30, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.72,
            ease: "expo.out",
            stagger: 0.07,
            scrollTrigger: { trigger: wrap, start: "top 82%", once: true },
          },
        );
      });
      gsap.utils.toArray<HTMLElement>(".image-reveal").forEach((wrap) => {
        const image = wrap.querySelector("img");
        if (!image) return;
        gsap.fromTo(
          wrap,
          { clipPath: "inset(12% 0 12% 0)" },
          {
            clipPath: "inset(0% 0 0% 0)",
            duration: 1,
            ease: "expo.out",
            scrollTrigger: { trigger: wrap, start: "top 82%", once: true },
          },
        );
        gsap.fromTo(
          image,
          { scale: 1.08 },
          {
            scale: 1,
            duration: 1.15,
            ease: "expo.out",
            scrollTrigger: { trigger: wrap, start: "top 82%", once: true },
          },
        );
      });
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.to(el, {
          yPercent: -6,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="w-full bg-[var(--paper)] text-[var(--ink)] font-sans">
      <Nav />
      <Hero />
      <Problem />
      <Services />
      <ProjectAreas />
      <Metrics />
      <Process />
      <LeadSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* -------------------- NAV -------------------- */

function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--ink)]/95 border-b border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 lg:h-24 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[var(--steel)] flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-[var(--paper)]" />
          </div>
          <span className="font-display text-[var(--paper)] text-xl lg:text-2xl uppercase tracking-tighter">
            Soluções <span className="text-[var(--steel)]">Digitais</span>
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--paper)]/60">
            <a href="#solucoes" className="hover:text-[var(--steel)] transition-colors">Soluções</a>
            <a href="#projetos" className="hover:text-[var(--steel)] transition-colors">Projetos</a>
            <a href="#resultados" className="hover:text-[var(--steel)] transition-colors">Resultados</a>
            <a href="#processo" className="hover:text-[var(--steel)] transition-colors">Processo</a>
            <a href="#contato" className="hover:text-[var(--steel)] transition-colors">Contato</a>
          </div>
          <a
            href={waLink("Olá! Vim pelo site da Soluções Digitais.")}
            target="_blank"
            rel="noopener"
            className="bg-[var(--steel)] text-[var(--paper)] px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-[var(--ink-mid)] transition-colors"
          >
            WhatsApp
          </a>
        </div>
        <a
          href={waLink("Olá! Vim pelo site da Soluções Digitais.")}
          target="_blank"
          rel="noopener"
          className="lg:hidden bg-[var(--steel)] text-[var(--paper)] px-5 py-3 text-[11px] font-black uppercase tracking-widest"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
}

/* -------------------- HERO -------------------- */

function Hero() {
  return (
    <section id="top" className="relative premium-surface pt-20 pb-32 lg:pt-32 lg:pb-44 overflow-x-hidden overflow-y-visible">
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] border-[40px] lg:border-[60px] border-[var(--steel)]/25 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--steel)]/60 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="hero-kicker inline-flex items-center gap-3 mb-8">
              <span className="w-8 h-[2px] bg-[var(--steel)]" />
              <span className="text-[var(--steel)] text-[11px] font-bold uppercase tracking-[0.3em]">
                Performance Digital para Empresas Locais
              </span>
            </div>
            <h1 className="hero-title reveal-up font-display text-5xl sm:text-6xl lg:text-8xl text-[var(--paper)] leading-[0.92] mb-10 uppercase">
              Sua Empresa Está
              <span className="block text-[var(--steel)]">Perdendo Clientes</span>
              Todos os Dias.
            </h1>
            <p className="hero-copy reveal-up text-lg lg:text-xl text-[var(--paper)]/72 mb-10 max-w-xl leading-relaxed">
              Convertemos tráfego local em faturamento real. Sites de alta conversão, Google Maps otimizado e sistemas
              que vendem 24/7 — sem fórmulas mágicas, com método.
            </p>
            <div className="hero-actions reveal-up flex flex-wrap gap-5">
              <a
                href={waLink("Olá! Quero uma consultoria gratuita das Soluções Digitais.")}
                target="_blank"
                rel="noopener"
                className="btn-architect px-8 lg:px-10 py-5 lg:py-6 text-xs lg:text-sm"
              >
                Consultoria Gratuita
              </a>
              <a
                href="#solucoes"
                className="px-8 lg:px-10 py-5 lg:py-6 border-2 border-white/15 text-[var(--paper)] font-black uppercase tracking-widest text-xs lg:text-sm hover:bg-white/10 transition-colors"
              >
                Nossas Soluções
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <Stat top="+200" label="Empresas atendidas" />
              <Stat top="14d" label="Entrega média" />
              <Stat top="5min" label="Resposta no WhatsApp" />
            </div>
          </div>

          <div className="hero-media lg:col-span-5 relative reveal" data-parallax>
            <div className="image-reveal border border-white/10 p-3 bg-[var(--ink-deep)] shadow-2xl shadow-black/25">
              <img
                src={heroDashboard}
                alt="Painel de performance digital de uma empresa local com gráficos e Google Maps"
                width={1280}
                height={960}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-6 lg:-bottom-10 lg:-left-10 bg-[var(--steel)] p-6 lg:p-8">
              <p className="font-display text-[var(--paper)] text-3xl lg:text-4xl leading-none mb-1">+180%</p>
              <p className="text-[var(--paper)]/80 text-[10px] font-bold uppercase tracking-widest">
                Crescimento médio em pedidos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ top, label }: { top: string; label: string }) {
  return (
    <div className="hero-stat">
      <p className="font-display text-2xl text-[var(--paper)]">{top}</p>
      <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--paper)]/50 mt-1">{label}</p>
    </div>
  );
}

/* -------------------- PROBLEM -------------------- */

function Problem() {
  return (
    <section className="py-24 lg:py-32 light-surface border-y border-[var(--ink-mid)]/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 reveal-up">
            <p className="eyebrow mb-6">A Realidade do Mercado</p>
            <h2 className="font-display text-4xl lg:text-5xl text-[var(--ink)] leading-none uppercase">
              O silêncio digital<br />custa caro.
            </h2>
            <p className="mt-6 text-[var(--ink)]/70 max-w-md leading-relaxed">
              80% das decisões de compra locais começam no Google. Se sua empresa não aparece — quem aparece é seu
              concorrente.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-[var(--ink-mid)]/15" data-stagger>
            {PROBLEMS.map((p) => (
              <div
                key={p.n}
                data-stagger-item
                className="motion-card p-8 lg:p-10 bg-white flex items-start gap-5 lg:gap-6 hover:bg-[var(--paper)] transition-colors min-h-[170px]"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-[var(--ink)] flex items-center justify-center text-[var(--paper)] text-base font-black italic font-display">
                  {p.n}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg text-[var(--ink)] uppercase tracking-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--ink)]/60 leading-relaxed break-words">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- SERVICES -------------------- */

function Services() {
  return (
    <section id="solucoes" className="premium-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-32 pb-12">
        <div className="reveal-up max-w-3xl">
          <p className="eyebrow mb-6">Soluções</p>
          <h2 className="font-display text-4xl lg:text-6xl text-[var(--paper)] uppercase leading-[0.95]">
            Quatro frentes.<br />Um único objetivo:<br />
            <span className="text-[var(--steel)]">mais clientes.</span>
          </h2>
        </div>
      </div>
      <div>
        {SERVICES.map((s, i) => (
          <ServiceRow key={s.n} {...s} isLast={i === SERVICES.length - 1} />
        ))}
      </div>
    </section>
  );
}

type ServiceRowProps = (typeof SERVICES)[number] & { isLast: boolean };

function ServiceRow({ n, eyebrow, title, body, points, image, flip, cta, isLast }: ServiceRowProps) {
  const textBlock = (
    <div className="p-10 lg:p-20 flex flex-col justify-center">
      <p className="eyebrow mb-4 reveal-up">{eyebrow}</p>
      <h3
        className="font-display text-3xl lg:text-5xl text-[var(--paper)] mb-8 uppercase whitespace-pre-line reveal-up"
        style={{ lineHeight: 0.95 }}
      >
        {title}
      </h3>
      <p className="text-[var(--paper)]/65 mb-10 text-base lg:text-lg max-w-md leading-relaxed reveal-up">
        {body}
      </p>
      <ul className="space-y-3 mb-12 text-sm text-[var(--paper)]/80" data-stagger>
        {points.map((pt) => (
          <li key={pt} className="flex items-center gap-3" data-stagger-item>
            <span className="w-2 h-2 bg-[var(--steel)]" />
            {pt}
          </li>
        ))}
      </ul>
      <a
        href={waLink(`Olá! Tenho interesse em ${eyebrow}: ${title.replace("\n", " ")}.`)}
        target="_blank"
        rel="noopener"
        className="group inline-flex items-center gap-3 text-[var(--paper)] text-xs font-black uppercase tracking-widest w-fit reveal-up"
      >
        <span className="border-b-2 border-[var(--steel)] pb-1">{cta}</span>
        <ArrowRight className="h-4 w-4 text-[var(--steel)] transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );

  const imageBlock = (
    <div className="p-3 lg:p-8 xl:p-12 flex items-center justify-center bg-[var(--ink-deep)]/35">
      <div className="image-reveal w-full border border-white/10 bg-[var(--ink-deep)] overflow-hidden shadow-2xl shadow-black/20">
        <img
          src={image}
          alt={`Mockup ${title.replace("\n", " ")}`}
          width={1280}
          height={960}
          loading="lazy"
          className="block w-full h-auto"
        />
      </div>
    </div>
  );

  return (
    <div
      className={`grid lg:grid-cols-2 ${isLast ? "" : "border-b"} border-[var(--ink-mid)]`}
      data-service={n}
    >
      {flip ? (
        <>
          <div className="lg:border-r border-[var(--ink-mid)] order-2 lg:order-1">{imageBlock}</div>
          <div className="order-1 lg:order-2">{textBlock}</div>
        </>
      ) : (
        <>
          <div className="lg:border-r border-[var(--ink-mid)]">{textBlock}</div>
          <div>{imageBlock}</div>
        </>
      )}
    </div>
  );
}

/* -------------------- PROJECT AREAS -------------------- */

function ProjectAreas() {
  return (
    <section id="projetos" className="py-24 lg:py-32 light-surface border-b border-[var(--ink-mid)]/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal-up grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Projetos por segmento</p>
            <h2 className="font-display text-4xl lg:text-6xl text-[var(--ink)] uppercase leading-[0.95]">
              Landing pages para quem precisa vender no mundo real.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[var(--ink)]/65 leading-relaxed max-w-xl">
            Cada área recebe uma página com argumento, imagem, prova social e caminho de conversão próprio. O design
            muda, mas o objetivo é o mesmo: transformar visita em conversa comercial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5" data-stagger>
          {PROJECT_AREAS.map((project) => (
            <ProjectAreaCard key={project.area} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ProjectAreaCardProps = (typeof PROJECT_AREAS)[number];

function ProjectAreaCard({ area, title, body, image, accent, points }: ProjectAreaCardProps) {
  return (
    <article
      data-stagger-item
      className="motion-card group bg-white border border-[var(--ink-mid)]/15 overflow-hidden hover:border-[var(--steel)]/60 transition-colors"
    >
      <div className="relative bg-[var(--ink)] p-3">
        <div className="bg-[var(--paper)] border border-white/10 overflow-hidden">
          <div className="h-8 bg-[var(--ink-deep)] flex items-center gap-2 px-3">
            <span className="w-2.5 h-2.5 bg-red-400" />
            <span className="w-2.5 h-2.5 bg-yellow-400" />
            <span className="w-2.5 h-2.5 bg-sky-400" />
            <span className="ml-auto text-[8px] font-black uppercase tracking-[0.18em] text-[var(--paper)]/45">
              Preview
            </span>
          </div>
          <div className="image-reveal relative">
            <img
              src={image}
              alt={`Preview de landing page para ${area}`}
              width={1280}
              height={960}
              loading="lazy"
              className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)]/80 via-transparent to-transparent" />
            <div className="absolute left-4 right-4 bottom-4">
              <span className={`inline-block h-1.5 w-10 ${accent} mb-3`} />
              <p className="font-display text-2xl text-white uppercase leading-none">{area}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-display text-xl text-[var(--ink)] uppercase leading-tight mb-3">{title}</h3>
        <p className="text-sm text-[var(--ink)]/65 leading-relaxed mb-6">{body}</p>
        <ul className="space-y-2 mb-7">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[var(--ink)]/70"
            >
              <span className={`w-2 h-2 ${accent}`} />
              {point}
            </li>
          ))}
        </ul>
        <a
          href={waLink(`Olá! Quero uma landing page para ${area}.`)}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-3 text-[var(--ink)] text-xs font-black uppercase tracking-widest hover:text-[var(--steel)] transition-colors"
        >
          Ver solução para {area}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

/* -------------------- METRICS -------------------- */

function Metrics() {
  return (
    <section id="resultados" className="py-24 lg:py-32 bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal-up max-w-2xl mb-16">
          <p className="eyebrow mb-6">Resultados</p>
          <h2 className="font-display text-4xl lg:text-5xl text-[var(--ink)] uppercase leading-none">
            Números que clientes reais conquistaram.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--paper-mute)]" data-stagger>
          {METRICS.map((m) => (
            <div key={m.label} data-stagger-item className={`motion-card ${m.bg} p-10 lg:p-12`}>
              <p className={`font-display text-4xl lg:text-5xl mb-3 ${m.fg}`}>{m.v}</p>
              <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${m.muted}`}>{m.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-[var(--ink)]/50 max-w-xl">
          Médias observadas em clientes Soluções Digitais nos últimos 12 meses. Resultados individuais variam por
          segmento e investimento.
        </p>
      </div>
    </section>
  );
}

/* -------------------- PROCESS -------------------- */

function Process() {
  return (
    <section id="processo" className="py-24 lg:py-32 premium-surface border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal-up max-w-2xl mb-16">
          <p className="eyebrow mb-6">Processo</p>
          <h2 className="font-display text-4xl lg:text-5xl text-[var(--paper)] uppercase leading-none">
            Como trabalhamos.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--ink-mid)]" data-stagger>
          {PROCESS.map((p) => (
            <div key={p.n} data-stagger-item className="motion-card bg-[var(--ink)]/80 border border-white/10 p-10">
              <p className="font-display text-5xl text-[var(--steel)]/30 mb-8">{p.n}</p>
              <h3 className="font-display text-xl text-[var(--paper)] uppercase tracking-tight mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-[var(--paper)]/60 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- LEAD FORM -------------------- */

function LeadSection() {
  return (
    <section id="contato" className="py-24 lg:py-32 light-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 reveal-up shadow-2xl shadow-[var(--ink-deep)]/10">
          <div className="lg:col-span-5 premium-surface p-10 lg:p-16 flex flex-col justify-between">
            <div>
              <p className="text-[var(--steel)] text-[11px] font-bold uppercase tracking-[0.3em] mb-6">
                Receba uma proposta
              </p>
              <h2 className="font-display text-3xl lg:text-4xl text-[var(--paper)] uppercase leading-tight mb-6">
                Deixe seus dados e nosso time entra em contato.
              </h2>
              <p className="text-[var(--paper)]/60 leading-relaxed">
                Sem compromisso. Diagnóstico inicial gratuito do seu negócio em até 5 minutos no horário comercial.
              </p>
            </div>
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[var(--ink-mid)] flex items-center justify-center text-[var(--steel)]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--paper)]/40 font-bold">WhatsApp</p>
                  <p className="text-[var(--paper)] font-bold">(61) 99516-7585</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 bg-white p-10 lg:p-16">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const formatPhone = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 11);
    if (d.length <= 2) return d;
    if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const n = name.trim();
    const b = business.trim();
    const digits = whatsapp.replace(/\D/g, "");
    if (n.length < 2 || n.length > 80) return setError("Informe um nome válido.");
    if (b.length < 2 || b.length > 80) return setError("Informe o nome da empresa.");
    if (digits.length < 10 || digits.length > 11) return setError("WhatsApp inválido.");
    setError(null);
    setLoading(true);
    try {
      await submitLead({
        data: {
          name: n,
          business: b,
          whatsapp: formatPhone(digits),
          source: "landing_page",
        },
      });
      setSent(true);
      const msg =
        `Olá! Tenho interesse nas Soluções Digitais.\n\n` +
        `Nome: ${n}\nEmpresa: ${b}\nWhatsApp: ${formatPhone(digits)}`;
      window.open(waLink(msg), "_blank", "noopener");
    } catch {
      setError("Não foi possível enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-7" noValidate>
      <Field
        label="Nome completo"
        id="lf-name"
        value={name}
        onChange={setName}
        placeholder="Seu nome"
        autoComplete="name"
      />
      <Field
        label="Nome da empresa"
        id="lf-business"
        value={business}
        onChange={setBusiness}
        placeholder="Sua empresa Ltda"
        autoComplete="organization"
      />
      <Field
        label="WhatsApp"
        id="lf-whats"
        value={whatsapp}
        onChange={(v) => setWhatsapp(formatPhone(v))}
        placeholder="(00) 00000-0000"
        autoComplete="tel"
        type="tel"
      />

      {error && (
        <p className="text-xs text-red-600 font-bold uppercase tracking-widest" role="alert">
          {error}
        </p>
      )}
      {sent && !error && (
        <p className="text-xs text-[var(--steel)] font-bold uppercase tracking-widest" role="status">
          Recebemos seus dados. Continuamos pelo WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-architect-light w-full inline-flex items-center justify-center gap-3 py-5 lg:py-6 text-sm mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <span className="h-4 w-4 rounded-full border-2 border-[var(--paper)]/30 border-t-[var(--paper)] animate-spin" />
            Enviando
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Solicitar diagnóstico
          </>
        )}
      </button>
      <p className="text-[10px] text-[var(--ink)]/50 uppercase tracking-widest font-bold">
        Ao enviar, você concorda em ser contatado pelo time da Soluções Digitais.
      </p>
    </form>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  autoComplete,
  type = "text",
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoComplete?: string;
  type?: string;
}) {
  return (
    <div className="border-b-2 border-[var(--paper-mute)] focus-within:border-[var(--steel)] transition-colors pb-2">
      <label htmlFor={id} className="block text-[10px] font-black uppercase tracking-widest text-[var(--steel)]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        maxLength={80}
        className="w-full bg-transparent border-none p-0 mt-2 text-[var(--ink)] outline-none font-bold placeholder:text-[var(--ink)]/30"
      />
    </div>
  );
}

/* -------------------- FINAL CTA -------------------- */

function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 premium-surface">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <p className="eyebrow mb-6 reveal-up">Próximo passo</p>
        <h2 className="font-display text-4xl lg:text-6xl text-[var(--paper)] uppercase leading-[0.95] mb-8 reveal-up">
          Pronto para colocar sua empresa<br />
          <span className="text-[var(--steel)]">no próximo nível?</span>
        </h2>
        <p className="text-lg text-[var(--paper)]/65 max-w-xl mx-auto mb-12 reveal-up">
          Fale com um especialista agora e descubra exatamente o que está travando seu crescimento digital.
        </p>
        <a
          href={waLink("Olá! Quero falar com um especialista das Soluções Digitais.")}
          target="_blank"
          rel="noopener"
          className="btn-architect inline-flex items-center gap-3 px-12 py-6 text-sm reveal-up"
        >
          Falar com Especialista
          <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--paper)]/40 reveal">
          WhatsApp: (61) 99516-7585
        </p>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */

function Footer() {
  return (
    <footer className="py-16 bg-[var(--paper)] border-t border-[var(--ink-mid)]/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-[var(--ink)] flex items-center justify-center">
              <div className="w-4 h-4 border border-[var(--paper)]" />
            </div>
            <span className="font-display text-lg uppercase tracking-tighter text-[var(--ink)]">
              Soluções <span className="text-[var(--steel)]">Digitais</span>
            </span>
          </div>
          <p className="text-sm text-[var(--ink)]/60 max-w-xs leading-relaxed">
            Transformando empresas locais em negócios digitais de sucesso.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--ink)]/40 mb-5">Serviços</p>
          <ul className="space-y-3 text-sm text-[var(--ink)]/80">
            <li><a href="#solucoes" className="hover:text-[var(--steel)]">Sites</a></li>
            <li><a href="#solucoes" className="hover:text-[var(--steel)]">Google Maps</a></li>
            <li><a href="#solucoes" className="hover:text-[var(--steel)]">Sistemas de Pedidos</a></li>
            <li><a href="#solucoes" className="hover:text-[var(--steel)]">Sistemas de Agendamento</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--ink)]/40 mb-5">Contato</p>
          <p className="text-sm text-[var(--ink)]/80 mb-2">WhatsApp</p>
          <a
            href={waLink("Olá! Vim pelo rodapé do site.")}
            target="_blank"
            rel="noopener"
            className="font-display text-2xl text-[var(--ink)] hover:text-[var(--steel)] transition-colors"
          >
            (61) 99516-7585
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-8 border-t border-[var(--ink-mid)]/15 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--ink)]/40">
          © 2026 Soluções Digitais — Todos os direitos reservados
        </p>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--ink)]/40">
          Performance Digital Certificada
        </p>
      </div>
    </footer>
  );
}
