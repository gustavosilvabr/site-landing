import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  Globe,
  MapPin,
  ShoppingCart,
  CalendarDays,
  Settings2,
  TrendingUp,
  Users,
  Star,
  ShieldCheck,
  Phone,
  Search,
  XCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  Award,
  Rocket,
  ChartBar,
  Headphones,
} from "lucide-react";
import heroImage from "@/assets/hero-devices.jpg";

const WHATSAPP_NUMBER = "5561995167585";
const WHATSAPP_DISPLAY = "(61) 99516-7585";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soluções Digitais — Sites, Google Maps e Sistemas para sua Empresa" },
      {
        name: "description",
        content:
          "Criação de sites profissionais, cadastro no Google Maps, sistemas de pedidos e agendamento. Atraia mais clientes e aumente suas vendas.",
      },
      { property: "og:title", content: "Soluções Digitais — Mais clientes, mais vendas" },
      {
        property: "og:description",
        content:
          "Sites, Google Maps e sistemas inteligentes para pequenas e médias empresas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Problem />
      <Solutions />
      <Benefits />
      <GoogleMaps />
      <Sites />
      <SocialProof />
      <HowItWorks />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* -------------------- NAV -------------------- */
function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg btn-primary-glow grid place-items-center">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-bold tracking-tight" style={{ fontFamily: "Space Grotesk" }}>
              Soluções Digitais
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#solucoes" className="hover:text-foreground transition">Soluções</a>
            <a href="#beneficios" className="hover:text-foreground transition">Benefícios</a>
            <a href="#resultados" className="hover:text-foreground transition">Resultados</a>
            <a href="#processo" className="hover:text-foreground transition">Processo</a>
          </nav>
          <a
            href={waLink("Olá! Quero saber mais sobre as Soluções Digitais.")}
            target="_blank"
            rel="noopener"
            className="btn-primary-glow inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative pt-36 pb-24 md:pt-44 md:pb-32"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-blob" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-[color:var(--whatsapp)] animate-pulse" />
            Atendimento humano em poucos minutos
          </span>
          <h1
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Sua Empresa Está <span className="gradient-text">Perdendo Clientes</span> Todos os Dias?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Criação de Sites, Google Maps e Sistemas Inteligentes para atrair mais clientes e
            aumentar suas vendas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink("Olá! Quero falar com um especialista das Soluções Digitais.")}
              target="_blank"
              rel="noopener"
              className="btn-primary-glow inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold"
            >
              <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp
            </a>
            <a
              href={waLink("Olá! Gostaria de solicitar um orçamento.")}
              target="_blank"
              rel="noopener"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-foreground hover:bg-white/10 transition"
            >
              Solicitar Orçamento <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[color:var(--primary-glow)]" /> Entrega garantida</div>
            <div className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-400" /> +200 empresas atendidas</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-[color:var(--primary-glow)]" /> Suporte rápido</div>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="absolute -inset-6 rounded-3xl bg-primary/20 blur-3xl" />
          <div className="glass relative rounded-3xl p-3 shadow-[var(--shadow-elegant)] animate-floaty">
            <img
              src={heroImage}
              alt="Notebook mostrando site profissional e celular com perfil no Google Maps"
              width={1536}
              height={1152}
              className="rounded-2xl w-full h-auto"
            />
          </div>
          <div className="glass absolute -bottom-6 -left-6 rounded-2xl p-4 hidden sm:flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[color:var(--whatsapp)]/20 grid place-items-center">
              <TrendingUp className="h-5 w-5 text-[color:var(--whatsapp)]" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Crescimento médio</p>
              <p className="font-bold">+180% em pedidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROBLEMA -------------------- */
function Problem() {
  const pains = [
    "Sua empresa não aparece no Google?",
    "Clientes não encontram seu negócio?",
    "Você perde vendas para concorrentes?",
    "Faz tudo manualmente?",
  ];
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-[color:var(--primary-glow)] uppercase tracking-wider">O problema</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight" style={{ fontFamily: "Space Grotesk" }}>
            Reconhece alguma dessas situações?
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {pains.map((p) => (
            <div key={p} className="glass rounded-2xl p-6 flex items-start gap-4 hover:translate-y-[-2px] transition">
              <XCircle className="h-6 w-6 text-red-400 shrink-0 mt-0.5" />
              <p className="text-lg font-medium">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- SOLUÇÕES -------------------- */
function Solutions() {
  const items = [
    { icon: Globe, title: "Criação de Sites Profissionais", desc: "Sites rápidos, responsivos e otimizados para vender 24h por dia." },
    { icon: MapPin, title: "Cadastro e Otimização Google Maps", desc: "Apareça nas primeiras posições quando clientes procurarem por você." },
    { icon: ShoppingCart, title: "Sistema de Pedidos Online", desc: "Receba pedidos direto pelo seu cardápio digital, sem comissões abusivas." },
    { icon: CalendarDays, title: "Sistema de Agendamento", desc: "Agenda automática 24/7, lembretes por WhatsApp e zero faltas." },
    { icon: Settings2, title: "Sistemas Personalizados", desc: "Automatize processos do seu negócio com tecnologia sob medida." },
  ];
  return (
    <section id="solucoes" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-[color:var(--primary-glow)] uppercase tracking-wider">Nossas soluções</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight" style={{ fontFamily: "Space Grotesk" }}>
            Tudo que sua empresa precisa para <span className="gradient-text">crescer online</span>
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass group rounded-2xl p-7 hover:bg-white/[0.07] transition relative overflow-hidden">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl btn-primary-glow grid place-items-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- BENEFÍCIOS -------------------- */
function Benefits() {
  const benefits = [
    { icon: Users, label: "Mais clientes" },
    { icon: Award, label: "Mais credibilidade" },
    { icon: TrendingUp, label: "Mais vendas" },
    { icon: Clock, label: "Atendimento 24 horas" },
    { icon: Star, label: "Mais avaliações" },
    { icon: Search, label: "Mais visibilidade local" },
  ];
  return (
    <section id="beneficios" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-[color:var(--primary-glow)] uppercase tracking-wider">Benefícios</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight" style={{ fontFamily: "Space Grotesk" }}>
            O que sua empresa ganha
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {benefits.map(({ icon: Icon, label }) => (
            <div key={label} className="glass rounded-2xl p-6 flex items-center gap-4 hover:translate-y-[-2px] transition">
              <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/15 grid place-items-center">
                <Icon className="h-6 w-6 text-[color:var(--primary-glow)]" />
              </div>
              <p className="font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- GOOGLE MAPS -------------------- */
function GoogleMaps() {
  const wins = [
    { icon: Phone, label: "Mais ligações" },
    { icon: MapPin, label: "Mais rotas" },
    { icon: Users, label: "Mais visitas" },
    { icon: Star, label: "Mais avaliações" },
    { icon: TrendingUp, label: "Mais vendas" },
  ];
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold text-[color:var(--primary-glow)] uppercase tracking-wider">Google Maps</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight" style={{ fontFamily: "Space Grotesk" }}>
            Seu Cliente Está Procurando. <br />
            <span className="gradient-text">Sua Empresa Está Aparecendo?</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Mais de 80% das pessoas pesquisam serviços locais no Google antes de comprar.
            Cadastramos e otimizamos seu perfil para colocar sua empresa na frente.
          </p>
          <ul className="mt-7 space-y-3">
            {wins.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[color:var(--primary-glow)]" />
                <Icon className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">{label}</span>
              </li>
            ))}
          </ul>
          <a
            href={waLink("Quero aparecer no Google Maps!")}
            target="_blank"
            rel="noopener"
            className="btn-primary-glow mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold"
          >
            Quero Aparecer no Google <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="glass rounded-3xl p-6 shadow-[var(--shadow-elegant)]">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl btn-primary-glow grid place-items-center">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="font-bold">Sua Empresa Ltda</p>
              <div className="flex items-center gap-1 text-sm">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />)}
                <span className="text-muted-foreground ml-1">4.9 · 248 avaliações</span>
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { v: "+320%", l: "Visualizações" },
              { v: "+185%", l: "Ligações" },
              { v: "+260%", l: "Rotas" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                <p className="text-2xl font-extrabold gradient-text">{s.v}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 h-40 rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 relative overflow-hidden border border-white/10">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }} />
            <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-[color:var(--primary-glow)] drop-shadow-lg animate-floaty" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- SITES -------------------- */
function Sites() {
  const benefits = ["Credibilidade", "Autoridade", "Mais vendas", "Mais clientes", "Melhor posicionamento no Google"];
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 glass rounded-3xl p-8 relative">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-3 text-xs text-muted-foreground">suaempresa.com.br</span>
          </div>
          <div className="space-y-3">
            <div className="h-3 w-2/3 bg-white/10 rounded" />
            <div className="h-8 w-5/6 bg-white/15 rounded" />
            <div className="h-3 w-3/4 bg-white/10 rounded" />
            <div className="h-3 w-2/3 bg-white/10 rounded" />
            <div className="flex gap-2 mt-4">
              <div className="h-10 w-32 btn-primary-glow rounded-lg" />
              <div className="h-10 w-28 bg-white/10 rounded-lg" />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[Rocket, ChartBar, Headphones].map((Icon, i) => (
                <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <Icon className="h-5 w-5 text-[color:var(--primary-glow)]" />
                  <div className="h-2 w-full bg-white/10 rounded mt-3" />
                  <div className="h-2 w-3/4 bg-white/10 rounded mt-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold text-[color:var(--primary-glow)] uppercase tracking-wider">Sites profissionais</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight" style={{ fontFamily: "Space Grotesk" }}>
            Um Site <span className="gradient-text">Trabalha Para Você</span> 24 Horas Por Dia
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Seu vendedor que nunca dorme. Apresenta seus serviços, gera contatos e fecha
            negócios enquanto você cuida da operação.
          </p>
          <ul className="mt-7 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[color:var(--primary-glow)]" />
                <span className="font-medium">{b}</span>
              </li>
            ))}
          </ul>
          <a
            href={waLink("Quero um site profissional para minha empresa.")}
            target="_blank"
            rel="noopener"
            className="btn-primary-glow mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold"
          >
            <MessageCircle className="h-5 w-5" /> Quero meu site
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROVA SOCIAL -------------------- */
function SocialProof() {
  const stats = [
    { v: "+300%", l: "Visibilidade", icon: Search },
    { v: "+150%", l: "Contatos", icon: MessageCircle },
    { v: "+200%", l: "Ligações", icon: Phone },
    { v: "+180%", l: "Pedidos", icon: ShoppingCart },
  ];
  return (
    <section id="resultados" className="py-24 relative">
      <div className="absolute inset-0 opacity-50" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-[color:var(--primary-glow)] uppercase tracking-wider">Resultados reais</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight" style={{ fontFamily: "Space Grotesk" }}>
            Crescimento que nossos clientes <span className="gradient-text">conquistaram</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map(({ v, l, icon: Icon }) => (
            <div key={l} className="glass rounded-2xl p-7 text-center hover:translate-y-[-3px] transition">
              <div className="h-12 w-12 mx-auto rounded-xl bg-primary/15 grid place-items-center">
                <Icon className="h-6 w-6 text-[color:var(--primary-glow)]" />
              </div>
              <p className="mt-5 text-4xl md:text-5xl font-extrabold gradient-text" style={{ fontFamily: "Space Grotesk" }}>
                {v}
              </p>
              <p className="mt-2 text-sm text-muted-foreground font-medium">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- COMO FUNCIONA -------------------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Análise do negócio", d: "Entendemos seu mercado, seus clientes e seus objetivos." },
    { n: "02", t: "Planejamento", d: "Definimos a estratégia ideal para sua empresa decolar." },
    { n: "03", t: "Desenvolvimento", d: "Criamos sua presença digital com tecnologia de ponta." },
    { n: "04", t: "Entrega e suporte", d: "Lançamento, treinamento e suporte contínuo." },
  ];
  return (
    <section id="processo" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-[color:var(--primary-glow)] uppercase tracking-wider">Como funciona</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight" style={{ fontFamily: "Space Grotesk" }}>
            Um processo simples, do início ao fim
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="glass rounded-2xl p-7 relative">
              <div className="absolute -top-4 left-7 btn-primary-glow rounded-xl px-3 py-1.5 text-sm font-bold" style={{ fontFamily: "Space Grotesk" }}>
                Passo {i + 1}
              </div>
              <p className="mt-4 text-5xl font-extrabold text-white/10" style={{ fontFamily: "Space Grotesk" }}>{s.n}</p>
              <h3 className="mt-2 text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CTA FINAL -------------------- */
function FinalCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative glass rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl animate-blob" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[color:var(--primary-glow)]/20 blur-3xl animate-blob" />
          <div className="relative">
            <Sparkles className="h-10 w-10 mx-auto text-[color:var(--primary-glow)]" />
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight" style={{ fontFamily: "Space Grotesk" }}>
              Pronto para colocar sua empresa <br />
              no <span className="gradient-text">próximo nível?</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
              Fale agora com um especialista e descubra a melhor solução para o seu negócio.
            </p>
            <a
              href={waLink("Olá! Quero falar com um especialista das Soluções Digitais.")}
              target="_blank"
              rel="noopener"
              className="btn-primary-glow mt-9 inline-flex items-center gap-3 rounded-2xl px-8 py-5 text-lg font-bold"
            >
              <MessageCircle className="h-6 w-6" /> Falar com Especialista
            </a>
            <p className="mt-5 text-sm text-muted-foreground">
              WhatsApp: <span className="font-semibold text-foreground">{WHATSAPP_DISPLAY}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg btn-primary-glow grid place-items-center">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-bold" style={{ fontFamily: "Space Grotesk" }}>Soluções Digitais</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Transformando empresas locais em negócios digitais de sucesso.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Serviços</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Sites</li>
            <li>Google Maps</li>
            <li>Sistemas de Pedidos</li>
            <li>Sistemas de Agendamento</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contato</h4>
          <a
            href={waLink("Olá!")}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <MessageCircle className="h-4 w-4" /> {WHATSAPP_DISPLAY}
          </a>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Soluções Digitais. Todos os direitos reservados.
      </div>
    </footer>
  );
}

/* -------------------- FLOATING WHATSAPP -------------------- */
function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Olá! Vim pelo site das Soluções Digitais.")}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full grid place-items-center shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] hover:scale-110 transition"
      style={{ background: "var(--whatsapp)" }}
    >
      <MessageCircle className="h-7 w-7 text-white" />
      <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "var(--whatsapp)", opacity: 0.35 }} />
    </a>
  );
}
