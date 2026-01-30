#  Leão de Judá - Auto Elétrica Premium

![Project Status](https://img.shields.io/badge/status-concluído-success)
![Design](https://img.shields.io/badge/design-Dark%20Automotive-red)
![Tech](https://img.shields.io/badge/tech-GSAP%20Animation-green)
![Acessibilidade](https://img.shields.io/badge/a11y-VLibras-blue)

> **Energia, Confiança e Tecnologia.**
> Uma Landing Page de alta conversão projetada para elevar uma oficina tradicional de 40 anos ao status de marca premium digital.

---

## Sobre o Projeto

O projeto **Leão de Judá** foi desenvolvido para reposicionar uma auto elétrica tradicional no mercado digital. O objetivo era fugir dos clichês visuais do setor (sites poluídos e genéricos) e criar uma experiência **"High-End"** que transmitisse autoridade e modernidade.

A aplicação utiliza uma estética **Dark Mode** profunda com acentos em "Ferrari Red", combinada com animações profissionais via **GSAP** para criar uma narrativa visual imersiva, sem sacrificar a performance em dispositivos móveis.

###  Funcionalidades Principais

* **Hero Imersiva:** Background com efeitos de luz (Glow) fixos que criam ambiência durante toda a navegação.
* **Animações de Alta Performance:** Uso da biblioteca **GSAP (GreenSock)** para entradas cinematográficas de elementos e efeito parallax no mouse.
* **Bento Grid de Autoridade:** Solução de UI para exibir dados de confiança ("Desde 1982") sem depender de fotos genéricas.
* **Foco em Conversão:** Botão flutuante de WhatsApp com animação de pulso e CTAs estratégicos.
* **Otimização Mobile:** Layout responsivo com reordenação de DOM (Mobile First) para priorizar a leitura da proposta de valor.
* **Acessibilidade:**
    * Alto contraste tipográfico (Cinza Claro sobre Fundo Escuro).
    * Widget **VLibras** integrado.
    * Tags HTML semânticas para leitores de tela.

---

##  Tecnologias & Engenharia

O projeto foi construído com foco em **Performance** e **Manutenibilidade**, evitando o overhead de frameworks SPA desnecessários para uma Landing Page.

* **HTML5 Semântico:** Estrutura otimizada para SEO (Meta Tags, Open Graph para redes sociais) e acessibilidade.
* **CSS3 (Arquitetura Escalável):**
    * **Variáveis CSS (`:root`):** Para gerenciamento global de temas e cores.
    * **Grid & Flexbox:** Para layouts complexos como o *Bento Grid* de estatísticas.
    * **Performance:** Uso de propriedades `will-change`, otimização de camadas de renderização e desativação de filtros pesados no mobile.
* **JavaScript (ES6+):**
    * **Programação Defensiva:** Implementação de `window.onload` e fallbacks de CSS para garantir que o conteúdo carregue mesmo se o JS falhar.
    * **GSAP & ScrollTrigger:** Para orquestração de animações baseadas no scroll.
* **Assets:**
    * **WebP:** Conversão de imagens pesadas para formatos de nova geração.
    * **Phosphor Icons:** Iconografia vetorial leve e consistente.

---

##  Decisões de UX/UI

Como Tech Lead e Designer neste projeto, as escolhas foram intencionais:

1.  **Identidade "Dark Premium":** A escolha do fundo `#0a0a0a` ao invés de preto puro, combinado com o vermelho vibrante, visa associar a marca a carros esportivos de luxo.
2.  **Solução para Falta de Imagens:** O cliente não possuía fotos profissionais da oficina. A solução foi criar um **Grid de Estatísticas** tipográfico, gerando autoridade através de números e ícones, eliminando a necessidade de fotos de banco de imagens que soariam falsas.
3.  **Performance Mobile:** No desktop, temos animações de "glow" vivas. No mobile, via *Media Queries*, essas animações são desligadas e o blur é suavizado para economizar bateria e garantir 60fps em qualquer celular.
4.  **Hierarquia Visual:** No mobile, invertemos a ordem visual (CSS `order`) para que o texto "Energia e Confiança" apareça antes da imagem do carro, acelerando o entendimento do usuário.

---

##  Como Rodar Localmente

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/ajtoriani/leao-de-juda.git](https://github.com/ajtoriani/leao-de-juda.git)
    ```
2.  Abra a pasta do projeto.
3.  Abra o arquivo `index.html` no seu navegador.

---

##  Estrutura de Pastas

```text
leao-de-juda/
├── index.html       # Estrutura Semântica e SEO
├── style.css        # Estilos, Variáveis e Media Queries
├── script.js        # Configuração do GSAP e Lógica de UI
├── hero-car.webp    # Assets otimizados
└── favicon.ico      # Identidade visual

```

## Contribuições
Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir uma _issue_ ou um _pull request_.

## Contato

<p align="center"> <a href="https://www.linkedin.com/in/anajuliatoriani/"> <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/> </a> <a href="https://github.com/anajuliatoriani"> <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/> </a> <a href="https://anajuliatorianipessoa.vercel.app/"> <img src="https://img.shields.io/badge/Portfólio-FF5722?style=for-the-badge&logo=html5&logoColor=white"/> </a> <a href="mailto:anajuliatoriani@gmail.com"> <img src="https://img.shields.io/badge/Email-D97706?style=for-the-badge&logo=gmail&logoColor=white"/> </a> </p>

---
## Licença
Este projeto está sob a licença MIT.

---
Desenvolvido por Ana Julia Toriani Pessoa
