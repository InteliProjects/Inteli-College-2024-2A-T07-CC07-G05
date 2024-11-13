# Docker e Kubernetes

&emsp; &emsp; **Docker** é uma plataforma que permite empacotar aplicações e suas dependências em containers. Esses containers são leves e portáveis, garantindo que o software funcione da mesma forma em qualquer ambiente. Ele simplifica o processo de criação, envio e execução de aplicações, mas não resolve desafios como escalabilidade e orquestração de múltiplos containers em ambientes complexos.

&emsp; &emsp; Já o **Kubernetes**, por outro lado, é uma plataforma de orquestração que gerencia a distribuição e o funcionamento desses containers em clusters. Ele automatiza tarefas como balanceamento de carga, escalonamento, atualização e recuperação, facilitando o gerenciamento de aplicações em larga escala. É por isso que podemos dizer que o Kubernetes e Docker são, portanto, complementares: enquanto Docker cria containers, Kubernetes os organiza e coordena para garantir alta disponibilidade e eficiência.

&emsp; &emsp; Dentro do projeto junto à Vivo, nosso grupo começou utilizando Docker e Kubernetes para gerenciar e escalar nossa aplicação em uma instância EC2. Contudo, ao migrarmos para uma arquitetura serverless com AWS Lambda, percebemos que a necessidade de ferramentas de containerização e orquestração se tornou dispensável. Isso porque o Lambda cuida da execução e escalabilidade das funções automaticamente, eliminando a complexidade da gestão de infraestrutura que Docker e Kubernetes resolvem. Assim, conseguimos simplificar nosso ambiente e focar mais no desenvolvimento da aplicação ao invés da sua manutenção. Acessando o caminho `codigo/backend`, em entregas das sprints anteriores, é possível conferir os arquivos de configuração do Docker, por exemplo.

## REFERÊNCIAS

**Atlassian**. Kubernetes vs. Docker: The key differences between Kubernetes and Docker and how they fit into containerization. Disponível em: <https://www.atlassian.com/microservices/microservices-architecture/kubernetes-vs-docker> Acesso em 28 set. 2024.

**AWS**. Qual é a diferença entre o Kubernetes e o Docker? Disponível em: <https://aws.amazon.com/pt/compare/the-difference-between-kubernetes-and-docker/> Acesso em 28 set. 2024.

**Supero**. Entenda o que são e quais as diferenças entre Kubernetes e Docker contêineres. Disponível em: <https://www.supero.com.br/blog/kubernetes-vs-docker/> Acesso em 28 set. 2024.

