<table>
<tr>
<td>
<a href= "https://www.vivo.com.br/"> <img src="https://raw.githubusercontent.com/2024M7T5-Inteli/template-cc7/main/img/vivo-logo.png" alt="vivo.com.br" border="0" width="20%"></a>
</td>
<td><a href= "https://www.inteli.edu.br/"><img src="https://raw.githubusercontent.com/2024M7T5-Inteli/template-cc7/main/img/inteli-logo.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width="50%"></a>
</td>
</tr>
</table>

# Introdução

Este é um dos repositórios do projeto de alunos do Inteli em parceria com a Vivo no 2º semestre de 2024. Este projeto foi desenvolvido por alunos do Módulo 7 do curso de Ciência da Computação.

# Projeto: Sistema de Inventário Distribuído

# Grupo: Helium

# 👨‍🎓 Integrantes:

* [Drielly Santana Farias](https://www.linkedin.com/in/drielly-farias/)
* [Enzo Schiezaro Bressane](https://www.linkedin.com/in/enzo-bressane-72a030219/)
* [Fernando Machado dos Santos](https://www.linkedin.com/in/fernando-machado-santos/)
* [Heloisa Cavalcanti Oliveira](https://www.linkedin.com/in/heloisa-cavalcanti-oliveira/)
* [Hugo Noyma Povoleri](https://www.linkedin.com/in/hugo-noyma/)
* [Maurício de Azevedo Neto](linkedin.com/in/mauricio-azevedo-neto/)

# 👩‍🏫 Professores:

## Orientadora
* [🧭 Laíza Ribeiro Silva](https://www.linkedin.com/in/laizaribeiro/)

## Instrutores
* [📈 Lisane Valdo - Professor de Business](https://www.linkedin.com/in/lisane-valdo/)
* [👨‍💻 Tomaz Sasaki - Professor de Engenharia de Software](linkedin.com/in/rafael-will-m-de-araujo-20809b18b/)
* [👨‍💻 André Godoi - Professor de Infraestrutura](https://www.linkedin.com/in/profandregodoi/)
* [👨‍💻 Rodolfo Goya - Professor de Sistemas Distribuídos](https://www.linkedin.com/in/rodolfo-goya-6ab187/)
* [🎨 Guilherme Cestari - Professor de Design UX/UI](https://www.linkedin.com/in/gui-cestari/)
* [🧮 Maria Cristina - Professora de Matemática](linkedin.com/in/cristinagramani/)
* [👑 Mônica Anastassiu - Professor de Liderança](linkedin.com/in/monica-anastassiu-d-sc-2568522/)

# Descrição

A Vivo identificou um problema de alto custo de sincronização do estoque para a plataforma do seu e-commerce, o que exige diversos processamentos para garantir que as informações de estoque sejam confiáveis. Isso impacta negativamente o tempo de navegação dos clientes durante a jornada de compra. Assim, foi desenvolvida uma solução que consiste em um sistema de inventário distribuído, que permite o gerenciamento do estoque de múltiplos centros de distribuição e lojas em tempo próximo ao tempo real, melhorando a eficiência para o time de logística e reduzindo a sobrecarga de processamento da plataforma de e-commerce.

# Configuração para o desenvolvimento

## 1. Pré-requisitos

É necessário as seguintes ferramentas instaladas para configurar o seu ambiente:

- Node.js (versão 14.x ou superior)
- npm
- git
- MySQL (versão 5.7 ou superior)

## 2. Clonar este repositório

Clone o repositório no seu ambiente local:

`
git clone https://github.com/Inteli-College/2024-2A-T07-CC07-G05.git
cd 2024-2A-T07-CC07-G05/codigo
`

## 3. Configuração do Banco de Dados

- Instale o MySQL e crie um banco de dados para o projeto.
- No diretório backend, configure as credenciais de acesso ao banco no arquivo `.env`. É preciso definir a URL de conexão com o banco. E uma porta na qual o `backend` será executado

## 4. Configuração do Prisma

O Prisma é utilizado como ORM no projeto, e seu esquema está localizado em `codigo/backend/src/domain/prisma/schema.prisma`.

- Certifique-se de que o banco de dados MySQL está rodando.
- Para gerar o cliente Prisma, rode o seguinte comando dentro da pasta backend:

```
npx prisma generate
```

- Para rodar as migrações no banco de dados:

```
npx prisma migrate dev
```

Isso criará as tabelas no banco de dados com base no esquema definido.

## 5. Configuração do Backend (TypeScript)

Entre na pasta `backend`e instale as dependências:

```
cd backend
npm install
```

Para rodar a aplicação em modo de desenvolvimento:

```
npm start
```

## 6. Configuração do Frontend (React)

Entre na pasta `frontend` e instale as dependências:

```
cd ../frontend
npm install
```

Para rodar a aplicação em modo de desenvolvimento:

```
npm start
```

## 7. Executando a aplicação

Após seguir os passos acima, tanto o frontend quanto o backend estarão disponíveis para desenvolvimento local. O backend roda em http://localhost utilizando a porta definida no arquivo `.env` localizado na pasta `backend` e o frontend em roda http://localhost:3000, e o MySQL deve estar configurado e rodando em sua máquina.


# Releases

* **SPRINT 1**
  - Entendimento do Usuário
  - Entendimento do Negócio
  - Definição dos Requisitos Funcionais e Não Funcionais
  - Deploy de uma aplicação com arquitetura básica em EC2 e frontend em S3

* **SPRINT 2**: 
  - Versão refinada do frontend
  - Versão refinada do backend
  - Arquitetura corporativa
  - Infraestrutura
  - Primeira versão do artigo

* **SPRINT 3**: 
  - Modelagem do banco de dados
  - Relatório técnico descrevendo os testes realizados
  - Migração do back-end para uma arquitetura serveless
  - Integração entre front-end e back-end
  - Segunda versão do artigo

* **SPRINT 4**: 
  - Documentação sobre testes unitários
  - Documentação sobre testes de integração
  - Documentação sobre testes de microsserviços
  - Terceira versão do artigo

* **SPRINT 5**:
  - Organização deste repositório
  - Aprimoramento dos testes
  - Artigo finalizado

## 📋 Licença/License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/Inteli-College/2024-2A-T07-CC07-G05">Helium</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.inteli.edu.br/">Inteli, Drielly Farias, Enzo Bressani, Fernando Machado, Heloísa Oliveira, Hugo Noyma, Maurício Azevedo.</a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""></a></p>
