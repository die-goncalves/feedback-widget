<h1 align="center">
    <img alt="Feedget Widget" title="Feedget Widget" src="/assets/feedback-widget.svg" width="400px" />
</h1>

<!-- TABLE OF CONTENTS -->

<h5 align="center"> 
<a href="#sobre">Sobre</a>
   •   <a href="#tecnologias">Tecnologias</a> 
   •   <a href="#instalação">Instalação</a> 
   •   <a href="#funcionalidades">Funcionalidades</a> 
   •   <a href="#layout">Layout</a> 
   •   <a href="#visão-do-projeto">Visão do projeto</a>
   •   <a href="#agradecimento">Agradecimento</a> 
   •   <a href="#licença">Licença</a>     
   •   <a href="#autor">Autor</a> 
</h5>

## Sobre
<h4>Feedback widget é uma aplicação web de envio de feedbacks 💬 </h4>

O widget é um botão flutuante que se localiza na parte inferior direita do site, o usuário ao clicá-lo pode escolher entre escrever feedback de erro, ideia ou qualquer outro assunto. Após a escolha o usuário deve escrever o feedback e poderá tirar uma foto da tela, recurso que complementa as descrições escritas pelos usuários, e depois enviar o feedback. Todos os feedbacks são encaminhados para o e-mail do(s) responsável(veis) para análise.

Aplicação apresentada na Next Level Week #08 - Return da Rocketseat e aperfeiçoada após o evento.

## Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Figma](https://www.figma.com/)
- [Tailwindcss](https://tailwindcss.com/)
- [Headlessui](https://headlessui.dev/)
- [Auth0](https://auth0.com/)
- [Prisma](https://www.prisma.io/)
- [Nodemailer](https://nodemailer.com/about/)
- [Mailtrap](https://mailtrap.io/)
- [Mailgun](https://www.mailgun.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [React Router](https://reactrouter.com/)
- [js-cookie](https://github.com/js-cookie/js-cookie)
- [html2canvas](https://www.npmjs.com/package/html2canvas)
- [Axios](https://github.com/axios/axios)
- [Express](https://www.npmjs.com/package/express)

> Veja o arquivo  [package.json](packages/server/package.json) do servidor

> Veja o arquivo  [package.json](packages/web/package.json) do cliente

### Sobre as tecnologias
Listagem das principais tecnologias e porque foram utilizadas:
- Utilização do ***Vite*** para a construção de uma aplicação react + typescript pois fornece uma experiência de desenvolvimento mais rápida utilizando o que é de mais atual nos navegadores;
- O ***tailwind css*** é um framework de css que traz classes já customizadas que devem ser incluídas diretamente no html, essas classes são colocadas no atributo class/className nos elementos HTML. Com ele é possível construir componentes personalizados sem escrever CSS e ainda conta com suporte para criação de tema claro/escuro;
- O ***headless ui*** permite construir componentes acessíveis e é integrado ao <ins>tailwind css</ins>. A aplicação foi desenvolvida para ter um comportamento acessível, ou seja, toda a navegação pode ser feita com o teclado, e lido por leitores de tela;
- Utilização do ***auth0*** ( <ins>versão trial</ins> ) para trabalhar com autenticação/autorização;
- Utilização do ***prisma*** para trabalhar com banco de dados SQLite;
- Enviar e-mails com as ferramentas ***nodemailer e mailtrap*** e ***mailgun*** ( <ins>versão trial</ins> );
- ***React Router*** para lidar com roteamento;
- ***js-cookie*** para gerenciar informações sobre o tema da aplicação;
- ***html2canvas*** para tirar fotos da tela;
- ***axios*** para realizar requisições http;
- ***express*** para criação do servidor;
- Todos os ícones presentes na aplicação são do ***phosphor icons***.

## Instalação

- ### **Pré-requisitos**
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador.
  - É **necessário** ter o gerenciador de pacotes **[Yarn](https://yarnpkg.com/)** pois estamos trabalhando com workspaces.
  - É **necessário** ter uma conta no **[Auth0](https://auth0.com/)**.
  - É **necessário** ter uma conta no **[Mailtrap](https://mailtrap.io/)**.
  - É **necessário** ter uma conta no **[Mailgun](https://www.mailgun.com/)**.

- ### **Próximo passo**
1. Faça um clone deste repositório:
   ```sh
   $ git clone https://github.com/die-goncalves/feedback-widget.git
   ```

2. Instale as depêndencias:
   ```sh
   # Entre no diretório do repositório clonado
   $ cd feedback-widget
   # Instale as dependências do projeto.
   $ yarn
   ```

3. Variáveis de ambiente<br/>
    a. Crie o arquivo **.env** em `packages/server/` com as seguintes variáveis: 
    ```
    DATABASE_URL=
    AUTH0_AUDIENCE=
    AUTH0_DOMAIN=
    MAILTRAP_EMAIL_USERNAME=
    MAILTRAP_EMAIL_PASSWORD=
    MAILGUN_API_KEY=
    MAILGUN_DOMAIN=
    ``` 
    b. Crie o arquivo **.env.local** em `packages/web/` com as seguintes variáveis: 
    ```
    VITE_API_URL=
    VITE_APP_AUTH0_DOMAIN=
    VITE_APP_AUTH0_CLIENT_ID=
    VITE_APP_AUTH0_AUDIENCE=
    VITE_APP_AUTH0_ROLE_URL=
    ``` 
    ---
    Agora vamos preencher essas variáveis.
    - **AUTH0**
        - Crie uma conta Auth0 ou utilize uma já criada. 
        - Crie um tenant.
          <img src="assets\auth0-variaveis-01.png" alt="Auth0 - criar tenant">
        - Acesse o tenant criado e crie uma aplicação SPA.
          <img src="assets\auth0-variaveis-02.png" alt="Auth0 - criar aplicação SPA">
        - Acesse a aplicação criada e entre em settings.
          <img src="assets\auth0-variaveis-03.png" alt="Auth0 - configurações da aplicação">
          Em **Application URIs:**
            - **Allowed Callback URLs -** `http://localhost:3000`
            - **Allowed Logout URLs -** `http://localhost:3000`
            - **Allowed Web Origins -** `http://localhost:3000`

          Em **Basic Information** você precisa guardar as informações de Domain e Client ID no servidor `AUTH0_DOMAIN=https://domain/` e no cliente `VITE_APP_AUTH0_DOMAIN=` e `VITE_APP_AUTH0_CLIENT_ID=`
          
        - Crie uma API
          <img src="assets\auth0-variaveis-04.png" alt="Auth0 - criar API">
          - Entre em settings na API criada
          <img src="assets\auth0-variaveis-05.png" alt="Auth0 - configurações da API">
          
          Em **General Settings** você precisa guardar a informação Identifier no servidor `AUTH0_AUDIENCE=`  e no cliente `VITE_APP_AUTH0_AUDIENCE=` . 
          Em **RBAC Settings** ativar as opções **Enable RBAC** e **Add Permissions in the Access Token** se não estiverem ativadas.

          - Clique na aba **Permissions** e crie as permissões como na imagem
          <img src="assets\auth0-variaveis-06.png" alt="Auth0 - permissões">
        - Na aba lateral entre em **User Management > Users** e crie um usuário administrador.
        <img src="assets\auth0-variaveis-07.png" alt="Auth0 - criar usuário">
        
        - Entre em **User Management > Roles** e crie uma função chamada Administrador.
        <img src="assets\auth0-variaveis-08.png" alt="Auth0 - criar funções">
          Entre na função criada e adicione as permissões como na imagem
          <img src="assets\auth0-variaveis-09.png" alt="Auth0 - adicionar permissões em funções">
          Adicione um usuario para ter função de administrador em Users.
          <img src="assets\auth0-variaveis-10.png" alt="Auth0 - adicionar um usuário administrador">

        - Entre em **Actions > Flows** e clique em Login
          <img src="assets\auth0-variaveis-11.png" alt="Auth0 - menu de adição de ações em fluxos">
          - Clique em **Add Action > Build Custom**, digite o nome da ação [ ex: add-roles ] e crie. 
          <img src="assets\auth0-variaveis-12.png" alt="Auth0 - criar ação">
          <img src="assets\auth0-variaveis-13.png" alt="Auth0 - ação criada">
          
          Após isso coloque o seguinte código e clique em deploy.
            ```
            exports.onExecutePostLogin = async (event, api) => {
              const namespace = 'http://localhost:3000/'
              if (event.authorization) {
                api.idToken.setCustomClaim(`${namespace}roles`, event.authorization.roles);
                api.accessToken.setCustomClaim(`${namespace}roles`, event.authorization.roles);
              }
            };
            ```
            Agora arraste a ação para o centro do fluxo de autenticação. Deverá ficar como na imagem abaixo.
            <img src="assets\auth0-variaveis-14.png" alt="Auth0 - adicionar ação no fluxo de login">
            Adicione `http://localhost:3000/roles` em `VITE_APP_AUTH0_ROLE_URL=`
    <br />
    
    - **MAILGUN**
      O mailgun disponibiliza um domínio para testes ( o nome do domínio começa com sandbox, chamarei apenas de sandbox 👍 ) durante a versão trial, mas é possível utilizar um domínio que você tenha. Aqui utilizaremos o domínio sandbox.
      <img src="assets\mailgun-variaveis-00.png" alt="Mailgun - domínio">
      - A chave privada pode ser encontrada no painel de controle acessando API Keys.
        <img src="assets\mailgun-variaveis-01.png" alt="Mailgun - menu api keys">
        <img src="assets\mailgun-variaveis-02.png" alt="Mailgun - api security">
        Armazene o domínio e a chave privada em `MAILGUN_DOMAIN=` e `MAILGUN_API_KEY=`.
      - Antes de enviar um email você deve autorizar destinatários, isso apenas é realizado quando utilizamos o domínio sandbox e só podemos cadastrar até 5 destinatários, mas para domínios próprios você pode enviar para quem quiser, não há limitações e não precisa autorizar destinatários.
      Clique no domínio sandbox e digite o endereço de email que será o destinatário dos seus e-mails enviados, nesse endereço de e-mail você receberá um e-mail de confirmação para deixá-lo verificado e apto a receber os e-mails.
      <img src="assets\mailgun-variaveis-03.png" alt="Mailgun - destinatários autorizados">
    <br />
    
    - **MAILTRAP**
      Tudo que você precisa do mailtrap são as propriedades user e pass de auth.
      Armazene user e pass em `MAILTRAP_EMAIL_USERNAME=` e `MAILTRAP_EMAIL_PASSWORD=`
      <img src="assets\mailtrap-variaveis.png" alt="Mailtrap - configurações SMTP/POP3">
    <br />
    
    - **BANCO DE DADOS**
      Na aplicação trabalhamos com o banco de dados SQLite por meio do prisma e precisamos armazenar na variável `DATABASE_URL=` a url do nosso banco de dados, no caso digite `"file:./dev.db"`.
    <br />
    
    - **SERVIDOR**
      Armazenar a url do nosso servidor que é `http://localhost:3333` em `VITE_API_URL=`.
<br />

4. Execute a aplicação:
    ```sh
    # Em um terminal rode o servidor
    $ yarn workspace @widget-feedback/server dev
    # A aplicação inciará na porta 3333 - acesse <http://localhost:3333>
    ```
    
    ```sh
    # Em outro terminal rode o cliente
    $ yarn workspace @widget-feedback/web dev
    # A aplicação inciará na porta 3000 - acesse <http://localhost:3000>
    ```

## Funcionalidades

- [X] Criar um serviço de autenticação e autorização. 
  - No cliente:
    - Apenas usuários autenticados e autorizados podem acessar a rotar `http://localhost:3000/feedbacks`;
    - Qualquer usuário pode criar e enviar feedbacks.
  - No servidor:
    - A rota `http://localhost:3333/create/feedback` pode ser acessada por qualquer usuário;
    - A rota `http://localhost:3333/feedbacks`, `http://localhost:3333/feedback` e `http://localhost:3333/update/feedback` somente usuários autenticados e com a autorização correta.
- [x] Montar um banco de dados com os seguintes serviços:
  - Criação de feedbacks;
  - Retornar um feedback específico;
  - Retornar todos os feedbacks;
  - Atualizar informações dos feedbacks.
- [x] Tema Claro/Escuro;

## Layout

<div>
    <p>A implementação da interface foi construída conforme o layout fornecido a seguir. Para observar o layout no Figma acesse:</p>
    <p align="center">
        <a href="https://www.figma.com/file/sRAmiS2e0W11SWNkRbyMQV/Feedback-Widget-(Community)">
            <img alt="Link do site" src="https://img.shields.io/static/v1?label=Figma&message=layout&color=FFC700&style=flat-square&logo=figma" />
        </a>
    </p>
</div>


## Visão do projeto

<img src="/assets/feedget-gif.gif" alt="worldtrip-gif">

## Agradecimento

<table width="100%" align="center">
    <tr>
        <th>
            <a href="https://rocketseat.com.br/">
                <img width="100" height="150" src="/assets/rocketseat.svg">
                <br /><sub><b>Rocketseat</b></sub>
            </a>
        </th>
        <th>
            <img width="150" height="150" src="/assets/nlw-return.svg">
            <br /><sub><b>Next Level Week #08 - Return</b></sub>
        </th>
    </tr>
</table>

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Feito por Diego Gonçalves, contato:

[![Badge](https://img.shields.io/static/v1?label=Linkedin&message=Diego%20Gonçalves&color=208BEE&style=flat-square&logo=linkedin&link=https://www.linkedin.com/in/diego-goncalves1990)](https://www.linkedin.com/in/diego-goncalves1990)
[![Badge](https://img.shields.io/static/v1?label=Gmail&message=die.goncalves1990@gmail.com&color=EA5134&style=flat-square&logo=gmail&link=mailto:die.goncalves1990@gmail.com)](mailto:die.goncalves1990@gmail.com)
