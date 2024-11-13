# Documentação de Infraestrutura
&emsp;&emsp;Este documento descreve a infraestrutura do projeto Vivo: a instância EC2, o Bastion Host e o Load Balancer, ferramentas da Amazon Web Services (AWS). A seguir, são apresentados cada elemento e suas configurações.

## 1. Instância EC2 - Projeto Vivo

&emsp;&emsp;A instância EC2 `projeto-vivo-ec2-instance` serve para hospedar a aplicação do projeto e está configurada para receber tráfego do Load Balancer. Pode ser acessada por qualquer computador dentro da mesma rede. Por questões de segurança, há a camada de Bastion Host, que serve como caminho para a EC2.

## 2. Bastion Host

&emsp;&emsp;O Bastion Host é um ponto de acesso seguro para as instâncias EC2 privadas dentro da VPC. Ele possui um endereço público `ec2-54-80-77-154.compute-1.amazonaws.com`. O Bastion Host permite o acesso SSH às instâncias privadas e é configurado para permitir tráfego de entrada na porta 22 (SSH) de qualquer IP. Para acessar a instância EC2 do projeto Vivo, deve-se primeiro conectar ao Bastion Host via SSH e, em seguida, usar o SSH para se conectar à instância EC2 privada. O comando para acessar o Bastion Host, juntamente com a chave, é:

```bash
ssh -i "chave-projeto-ec2.pem" ubuntu@ec2-54-80-77-154.compute-1.amazonaws.com
```

Após isso, para acessar a EC2 do projeto, basta usar

```bash
ssh -i "chave-projeto-ec2.pem" ec2-user@ec2-54-224-77-203.compute-1.amazonaws.com
```

## 3. Load Balancer

&emsp;&emsp;O Load Balancer `internal-load-balancer-1128674567.us-east-1.elb.amazonaws.com` é um Application Load Balancer (ALB) interno, responsável por distribuir o tráfego de entrada entre várias instâncias EC2 para garantir a alta disponibilidade e balanceamento de carga da aplicação. O Load Balancer utiliza a porta 80 (HTTP) para receber tráfego e encaminhá-lo para o grupo de destino.

&emsp;&emsp;Com essas ferramentas, é possível atender às demandas do parceiro de disponibilidade, segurança e agilidade em um inventário. Para ver mais detalhes da instâncias na AWS, clique no [link](https://youtu.be/2BOOMNtoEwY).
