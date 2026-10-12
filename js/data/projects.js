// Para adicionar um projeto, copie um bloco { ... } e preencha os campos.
// Para exibir um link de demonstração, inclua na lista "links":
// { label: "Demonstração", href: "https://..." }
export const projects = [
    {
      name: "DSCommerce",
      status: "Em desenvolvimento",
      summary:
      "API REST de e-commerce desenvolvida a partir do projeto do curso Java Spring Professional, da DevSuperior. Construída para praticar os fundamentos de back-end com Java e Spring Boot: modelagem de domínio, relacionamentos entre entidades e funcionalidades essenciais de um sistema real.",
      highlights: [
        "Arquitetura em camadas (controller, service e repository), com classes e pacotes auxiliares de apoio.",
        "Segurança com Spring Security, OAuth2 e JWT.",
        "Persistência com JPA/Hibernate e PostgreSQL, com relacionamentos entre entidades.",
        "Validação de dados nas requisições.",
        "Banco PostgreSQL em container Docker e deploy no Railway. A versão online está fora do ar no momento e será republicada junto com o front-end.",
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
        "Testes/TDD"
      ],
      links: [
        {
          label: "Código no GitHub",
          href: "https://github.com/JoaoBatista07/dscommerce",
        },
      ],
    },
  ];