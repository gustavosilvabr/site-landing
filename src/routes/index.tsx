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
    image: mockupSite,
    flip: false,
    cta: "Quero meu site",
  },
  {
    n: "02",
    eyebrow: "Solução 02",
    title: "Domínio Local\nGoogle Maps",
    body: "Colocamos sua empresa na frente de quem está procurando agora pelo seu serviço, na sua região.",
    points: ["Otimização do Perfil de Empresa", "Estratégia de avaliações e fotos", "SEO local de intenção de compra"],
    image: mockupMaps,
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

const METRICS = [
  { v: "+300%", label: "Alcance Local", bg: "bg-[var(--ink-deep)]", fg: "text-[var(--paper)]", muted: "text-[var(--steel)]" },
  { v: "+150%", label: "Leads Qualificados", bg: "bg-[var(--ink-mid)]", fg: "text-[var(--paper)]", muted: "text-[var(--paper)]/60" },
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
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((wrap) => {
        const items = wrap.querySelectorAll<HTMLElement>("[data-stagger-item]");
        gsap.fromTo(
          items,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "expo.out",
            stagger: 0.08,
            scrollTrigger: { trigger: wrap, start: "top 80%" },
          },
        );
      });
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.to(el, {
          yPercent: -8,
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
    <nav className="sticky top-0 z-50 w-full bg-[var(--ink)] border-b border-[var(--ink-mid)]">
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
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--paper)]/60">
            <a href="#solucoes" className="hover:text-[var(--steel)] transition-colors">Soluções</a>
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
    <section id="top" className="relative bg-[var(--ink)] pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] border-[40px] lg:border-[60px] border-[var(--ink-mid)] translate-x-1/3 -translate-y-1/3" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="reveal inline-flex items-center gap-3 mb-8">
              <span className="w-8 h-[2px] bg-[var(--steel)]" />
              <span className="text-[var(--steel)] text-[11px] font-bold uppercase tracking-[0.3em]">
                Performance Digital para Empresas Locais
              </span>
            </div>
            <h1 className="reveal-up font-display text-5xl sm:text-6xl lg:text-8xl text-[var(--paper)] leading-[0.92] mb-10 uppercase">
              Sua Empresa Está
              <span className="block text-[var(--steel)]">Perdendo Clientes</span>
              Todos os Dias.
            </h1>
            <p className="reveal-up text-lg lg:text-xl text-[var(--paper)]/70 mb-10 max-w-xl leading-relaxed">
              Convertemos tráfego local em faturamento real. Sites de alta conversão, Google Maps otimizado e sistemas
              que vendem 24/7 — sem fórmulas mágicas, com método.
            </p>
            <div className="reveal-up flex flex-wrap gap-5">
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
                className="px-8 lg:px-10 py-5 lg:py-6 border-2 border-[var(--ink-mid)] text-[var(--paper)] font-black uppercase tracking-widest text-xs lg:text-sm hover:bg-[var(--ink-mid)] transition-colors"
              >
                Nossas Soluções
              </a>
            </div>
            <div className="reveal mt-12 grid grid-cols-3 gap-6 max-w-md">
              <Stat top="+200" label="Empresas atendidas" />
              <Stat top="14d" label="Entrega média" />
              <Stat top="5min" label="Resposta no WhatsApp" />
            </div>
          </div>

          <div className="lg:col-span-5 relative reveal" data-parallax>
            <div className="border-2 border-[var(--ink-mid)] p-3 bg-[var(--ink-deep)]">
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
    <div>
      <p className="font-display text-2xl text-[var(--paper)]">{top}</p>
      <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--paper)]/50 mt-1">{label}</p>
    </div>
  );
}

/* -------------------- PROBLEM -------------------- */

function Problem() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--paper)] border-y border-[var(--ink-mid)]/15">
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
                className="p-8 lg:p-10 bg-white flex items-start gap-6 hover:bg-[var(--paper)] transition-colors"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-[var(--ink)] flex items-center justify-center text-[var(--paper)] text-base font-black italic font-display">
                  {p.n}
                </div>
                <div>
                  <h3 className="font-display text-lg text-[var(--ink)] uppercase tracking-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--ink)]/60 leading-relaxed">{p.body}</p>
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
    <section id="solucoes" className="bg-[var(--ink)]">
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
    <div className="p-6 lg:p-20 flex items-center justify-center bg-[var(--ink-deep)]/40">
      <div className="w-full border border-[var(--ink-mid)] bg-[var(--ink-deep)] overflow-hidden">
        <img
          src={image}
          alt={`Mockup ${title.replace("\n", " ")}`}
          width={1280}
          height={960}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover"
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
            <div key={m.label} data-stagger-item className={`${m.bg} p-10 lg:p-12`}>
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
    <section id="processo" className="py-24 lg:py-32 bg-[var(--ink)] border-y border-[var(--ink-mid)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal-up max-w-2xl mb-16">
          <p className="eyebrow mb-6">Processo</p>
          <h2 className="font-display text-4xl lg:text-5xl text-[var(--paper)] uppercase leading-none">
            Como trabalhamos.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--ink-mid)]" data-stagger>
          {PROCESS.map((p) => (
            <div key={p.n} data-stagger-item className="bg-[var(--ink)] p-10">
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
    <section id="contato" className="py-24 lg:py-32 bg-[var(--paper)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 reveal-up">
          <div className="lg:col-span-5 bg-[var(--ink)] p-10 lg:p-16 flex flex-col justify-between">
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
    <section className="py-24 lg:py-32 bg-[var(--ink-deep)]">
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
