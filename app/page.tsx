"use client"

import {
  Briefcase,
  Calendar,
  Code,
  ExternalLink,
  FolderOpen,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Sun,
  Twitter,
  User,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const skills = ["PHP", "Java", "Python", "JavaScript", "Typescript", "SQL"]

  const experiences = [
    {
      title: "Software Developer Trainee",
      company: "CriarD Technology",
      period: "Jun. 2025 - Presente",
      description:
        "Atuei no desenvolvimento de plataformas web e aplicações para o usuário final, assim como em sistemas internos para empresas de médio e alto porte, utilizando tecnologias modernas e robustas. Participei da manutenção e desenvolvimento de soluções completas para negócios com PHP, PDO e Laravel, seguindo as melhores práticas de mercado e garantindo eficiência e qualidade no software entregue."
    },
    {
      title: "Software Developer",
      company: "Freelancer",
      period: "Jul. 2024 - Set. 2024",
      description:
        "Desenvolvimento de um software para aplicação em gestão de inadimplência, envolvendo: Automatização do processo de verificação de clientes inadimplentes, envio de propostas de renegociação, consumo de Interfaces de Programação de Aplicações (APIs) para consultar números de telefone cadastrados, integração de serviços de envio de mensagens via SMS e WhatsApp, além de otimização da comunicação e aumento da eficiência no contato com os clientes.",
    },
  ]

  const projects = [
    {
      title: "Social Network",
      description:
        "Uma aplicação de rede social desenvolvida em Java. Este projeto tem como objetivo simular funcionalidades de uma rede social, com cadastro de usuários, amizades, likes e comentarios e com uma autenticação realizada utilizando jwt-token.",
      github: "https://www.github.com/dnsouzadev/social-network",
      demo: null,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 text-foreground transition-all duration-500">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight">dnsouzadev</div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#skills" className="text-sm hover:text-primary transition-colors">
              Habilidades
            </a>
            <a href="#experience" className="text-sm hover:text-primary transition-colors">
              Experiência
            </a>
            <a href="#projects" className="text-sm hover:text-primary transition-colors">
              Projetos
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                Daniel de Deus Souza
              </h1>
              <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground mb-8">
                <Code className="w-5 h-5" />
                <span>desenvolvedor de software, 23 anos</span>
                <MapPin className="w-4 h-4 ml-2" />
                <span>Macaé/RJ</span>
              </div>
            </div>

            <div className="flex justify-center gap-6 mb-12">
              <a
                href="https://www.linkedin.com/in/dnsouzadev"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-muted transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://www.github.com/dnsouzadev"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-muted transition-all duration-300 hover:scale-105"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <User className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Sobre Mim</h2>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/70 transition-all duration-300">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Atualmente trabalho com PHP, JavaScript e Python no desenvolvimento de sistemas web e automações. Tenho
                focado em back-end, mas venho estudando frontend nas horas vagas para me tornar um desenvolvedor mais
                completo. Gosto de entender a fundo o que estou fazendo, escrever código limpo e buscar soluções
                práticas para os problemas do dia a dia.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Habilidades</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center hover:bg-card/70 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Experiência</h2>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/70 transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-primary font-medium mb-4">{exp.company}</p>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FolderOpen className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Projetos</h2>
            </div>
            <div className="grid md:grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/70 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Ver no GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ver Projeto Online
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Mail className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Vamos Conversar?</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Estou sempre aberto a novas oportunidades e projetos interessantes.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/dnsouzadev"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
                <span>Entre em Contato</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© 2025 dnsouzadev. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
