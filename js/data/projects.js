// Para adicionar um projeto, copie um bloco { ... } e preencha os campos.
// Para exibir um link de demonstração, inclua na lista "links":
// { label: "Demonstração", href: "https://..." }
export const projects = [
    {
      name: "DSCommerce",
      status: "Em desenvolvimento",
      summary:
        "API REST que simula um sistema de e-commerce. Construída para praticar os fundamentos de back-end com Java e Spring Boot: modelagem de domínio, relacionamentos entre entidades e funcionalidades essenciais de um sistema real.",
      highlights: [
        "Segurança com Spring Security, OAuth2 e JWT.",
        "Persistência com JPA/Hibernate e PostgreSQL, com relacionamentos entre entidades.",
        "Validação de dados nas requisições e testes automatizados.",
        "Containerizado com Docker. O deploy foi feito no Railway e a versão online volta junto com o front-end.",
      ],
      stack: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "OAuth2",
        "JWT",
        "JPA / Hibernate",
        "PostgreSQL",
        "Maven",
        "Docker",
      ],
      links: [
        {
          label: "Código no GitHub",
          href: "https://github.com/JoaoBatista07/dscommerce",
        },
      ],
    },
  ];