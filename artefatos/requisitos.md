# Requisitos Funcionais

&emsp;&emsp;Os requisitos funcionais descrevem o comportamento esperado do sistema, abrangendo as funcionalidades e serviços que ele deve oferecer para atender às necessidades dos usuários. Esses requisitos especificam as operações, cálculos, manipulações de dados e outras interações que o sistema deve executar, sendo essenciais para definir o que o sistema fará. Baseando-se nas necessidades dos usuários e nos objetivos do projeto, os seguintes requisitos funcionais foram estabelecidos.

## RF01
| Requisito Funcional | RF01                                                                                              |
|---------------------|--------------------------------------------------------------------------------------------------|
| **Função**          | O sistema deve guardar, receber e mandar informações do SAP ECC e do client sobre o estoque de produtos nos centros de distribuição e lojas.            |
| **Descrição**       | Garantir que todas as lojas e SAP ECC tenham informações atualizadas sobre a disponibilidade de produtos.   |
| **Entrada**         | Dados de estoque atualizados dos centros de distribuição .                                 |
| **Saída**           | Informações atualizadas para o cliente final.                                                                             |
| **Ação**            | Pegar dados de estoque e vendas e guardá-los no sistema.                                          |
| **Efeito**          | O sistema possui um estoque atualizado e confiável, evitando vendas de produtos indisponíveis.    |
| **Testabilidade**   | **Caso:** Receber dados de estoque.                                                   |
|                     | **Sucesso:** Os dados são sincronizados corretamente, e o estoque reflete as informações reais. |
|                     | **Falha:** O sistema não atualiza o estoque, emitindo uma mensagem de eero. |

## RF02
| Requisito Funcional | RF02                                                                                              |
|---------------------|--------------------------------------------------------------------------------------------------|
| **Função**          | O sistema deve verificar disponibilidade de estoque e prazo de entrega durante a compra.          |
| **Descrição**       | Ao informar o CEP, o usuário poderá verificar a loja mais próxima com produto disponível e o prazo de entrega. |
| **Entrada**         | CEP informado pelo cliente e dados de estoque.                                                    |
| **Saída**           | Loja mais próxima identificada e o prazo de entrega calculado.                                    |
| **Ação**            | Consulta aos dados de lojas e estoque.                                                            |
| **Efeito**          | Cliente informado sobre a disponibilidade do produto e prazo de entrega.                         |
| **Testabilidade**   | **Caso:** Cliente informa um CEP válido.                                                          |
|                     | **Sucesso:** O sistema identifica a loja mais próxima com o produto disponível e calcula o prazo de entrega. |
|                     | **Falha:** O sistema não encontra o produto disponível ou o CEP, retornando uma mensagem de erro ao cliente. |

## RF03
| Requisito Funcional | RF03                                                                                              |
|---------------------|--------------------------------------------------------------------------------------------------|
| **Função**          | O sistema deve fazer requisições GET, POST,UPDATE e DELETE nos sistemas legados, a fim de acessar e modificar informações de disponibilidade e local dos produtos e lojas, SKUs, pedidos, números de vendas.                                                  |
| **Descrição**       | O sistema deve se integrar com as plataformas já utilizadas pela Vivo através de requisições HTTP e HTTPs para acessar e modificar dados relacionados às entidades(produtos, lojas, clientes, pedidos).                               |
| **Entrada**         | Dados e APIs das plataformas legadas.                                                             |
| **Saída**           | Dados enviados e recebidos.                                                            |
| **Ação**            | Conectar diferentes sistemas.                                                                     |
| **Efeito**          | Continuidade entre sistemas.                                                                      |
| **Testabilidade**   | **Caso:** Conexão com uma plataforma legada da Vivo.                                              |
|                     | **Sucesso:** Dados sincronizados corretamente entre os sistemas.                                  |
|                     | **Falha:** Os dados não não sincronizados e uma mensagem de erro é emitida. |

## RF04
| Requisito Funcional | RF04                                                                                              |
|---------------------|--------------------------------------------------------------------------------------------------|
| **Função**          | O sistema deve permitir a filtragem por centro de distribuição.                                   |
| **Descrição**       | O sistema deve possibilitar a consulta e filtragem de produtos disponíveis em um centro de distribuição específico. |
| **Entrada**         | Centro de distribuição selecionado.                                                               |
| **Saída**           | Lista de produtos disponíveis filtrada.                                                           |
| **Ação**            | Filtrar produtos por centro de distribuição.                                                      |
| **Efeito**          | Usuário visualiza apenas os produtos disponíveis no centro de distribuição selecionado.           |
| **Testabilidade**   | **Caso:** Seleção de um centro de distribuição para filtragem.                                    |
|                     | **Sucesso:** A lista de produtos é filtrada corretamente, mostrando apenas itens do centro selecionado. |
|                     | **Falha:** O sistema não filtra corretamente ou retorna uma lista vazia mesmo quando produtos estão disponíveis. |

## 2. Requisitos não funcionais

&emsp;&emsp;Já os requisitos não funcionais constituem de um conjunto de questões que se preocupam com a qualidade do sistema. Eles geralmente são relacionados ao uso da aplicação em termos de desempenho, usabilidade, confiabilidade, segurança, disponibilidade, manutenção e outras tecnologias envolvidas, seguindo a norma ISO 25010. Assim, com base nela e nos requisitos funcionais, os seguintes requisitos não funcionais foram estabelecidos.

**_Eficiência de performance_**

**RNF01:** O sistema deve, em tempo real, considerando uma sincronização de 3 segundos, fornecer a localização e a distribuição dos produtos pelas lojas e outros centros de distribuição.
**Teste:** Verificar se a localização e a distribuição, quando feita uma requisição, condizem com a real localização dos produtos dentro do tempo de sincronização.

**_Eficiência de performance_**

**RNF2:** O sistema deve suportar o acesso múltiplo de 2 mil requisições simultaneamente. <br>
**Teste:** É feita a utilização de ferramentas que simulam teste de carga e desempenho, como o K6, e é conferido se todas as 2 mil requisições são respondidas.

**RNF3:** Em casos de pico e sobrecarga no sistema, a piora no desempenho deve ser de até 30%. <br>
**Teste:** Utilizando uma ferramenta de teste de carga e desempenho, como o K6, é conferido se, pelo menos, 70% das requisições são respondidas.

**RNF4:** O tempo de carregamento do resultado da requisição não deve exceder 3 segundos para garantir uma experiência de usuário satisfatória. <br>
**Teste:** O usuário irá navegar entre as páginas enquanto o tempo será cronometrado.

**RNF5:** Os serviços conseguem redimensionar automaticamente, de acordo com a demanda de carga, os recursos na nuvem (Auto Scaling). <br>
**Teste:** Utilizando uma ferramenta de teste de carga e desempenho, como o K6, é conferido se os recursos na nuvem utilizados são proporcionais para cada pico diferente de requisições.

**_Compatibilidade_**

**RNF6:** O sistema deve ser responsivo para aparelhos como celulares e _notebooks_ de diferentes resoluções como 1280 x 720 e 1920 x 1080. <br>
**Teste:** Fazer requisições com aparelhos de diferentes resoluções e avaliar o desempenho do sistema.

**_Segurança_**

**RNF7:** O sistema deve ser acessado e modificado apenas por colaboladores autenticados da Vivo. <br>
**Teste:** Fazer requisições com usuários não autenticados.

&emsp;&emsp;Dessa forma, espera-se que os requisitos estabelecidos sejam a ponte entre os problemas enfrentandos pela Vivo e o software que os soluciona. Assim, ao cumprí-los, o sistema construído atende todas as necessidades do usuário.
&emsp;&emsp;Um ponto importante é que os requisitos não funcionais estão sujeitos a alterações ao longo do projeto, considerando feedbacks dos professores e da empresa parceira. Isso de fato aconteceu com os RNF1 e RNF5 em que sofreram modificações para levarem em consideração, respectivamente, o tempo de sincronização e o limite de carga para fazer o Auto Sacaling. Dessa forma, espera-se que os requisitos estabelecidos sejam a ponte entre os problemas enfrentandos pela Vivo e o software que os soluciona. Assim, ao cumprí-los, o sistema construído atende todas as necessidades do usuário.
