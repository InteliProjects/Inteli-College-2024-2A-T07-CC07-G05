# Frontend

&emsp;&emsp;Duante o processo de entendimento do negócio, concluímos que a solução de inventário desenvolvida por este grupo seria implementada dentro dos sistemas da Vivo, não sendo necessário, assim, a entrega de um frontend. Por isso, este grupo optou peplo desenvolvimento de uma interface que pudesse, de fato, gerar valor para a Vivo. Assim, desenvolvemos uma aplicação inicialmente voltada para dispositivos móveis, sem foco na responsividade para desktop. Essa solução foi projetada para atender os vendedores presenciais da Vivo Store, que enfrentam o desafio de digitalizar manualmente o SKU dos produtos vendidos sempre que precisam realizar alguma modificação no iventário. A aplicação web, ao ser acessada pelo celular, permite que o usuário aponte a câmera para um código de barras, utilizando o scanner integrado para adicionar produtos ao estoque, remover produtos ou consultar informações do estoque. Uma demonstração desse site pode ser visto [neste vídeo](https://www.youtube.com/watch?v=ffwXzNyvibs) ou você pode acessá-lo diretamente [clicando aqui](https://ddqiqm5ceeb8w.cloudfront.net/).

&emsp;&emsp;Vale destacar que, nesta versão inicial, as informações estão mockadas e não estão sendo obtidas do backend. A aplicação foi hospedada em um bucket S3 na AWS e, devido ao uso da câmera, foi necessário configurá-la no CloudFront com um certificado SSL para que não ocorressem bloqueios durante o acesso.

&emsp;&emsp;Para a construção deste frontend foi utilizada a biblioteca React com as seguintes dependências:

- React Router Dom: para gerenciar as rotas e navegação da aplicação.
- Styled Components: Para estilizar os componentes React utilizando CSS-in-JS.
- React Icons: Para se obter ícones prontos para usar no projeto.
- Quagga2: BPara escanear códigos de barras em aplicações web usando JavaScript.