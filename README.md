# Dudacestas e Presentes — site atualizado

Site responsivo em HTML, CSS e JavaScript puro, organizado em arquivos simples para editar no VS Code e publicar no GitHub Pages.

## Arquivos
- `index.html` — página inicial atualizada com apresentação da marca e artes oficiais fornecidas.
- `cardapio.html` — catálogo e montador de cestas com total automático.
- `contato.html` — endereço, mapa, telefone e compartilhamento de localização.
- `style.css` — identidade visual, estilos das páginas e layout responsivo.
- `script.js` — produtos, preços, carrinho, menu mobile e integração com WhatsApp.
- `banner-dudacestas.png`, `banner-cestas-amor.png`, `banner-presentes-feitos.png` — imagens fornecidas para a apresentação visual da marca.
- `miniconstrutores-hero.mp4` — vídeo animado dos mini construtores usado no destaque da página inicial, com reprodução automática, silenciosa e em loop.

## Cabeçalho atualizado
O destaque da página inicial usa o vídeo dos mini construtores. O botão dourado “Faça sua encomenda” leva diretamente ao montador de cestas; em telas pequenas ele aparece logo abaixo do vídeo para não cobrir a animação.

O cabeçalho das três páginas contém somente:
- Início
- Contato
- Criar meu presente ↗

O acesso ao montador continua disponível pelo botão principal e pelos links internos da página inicial e do rodapé.

## Como testar
1. Extraia o ZIP.
2. Abra a pasta no VS Code.
3. Abra `index.html` no navegador. Recomendado: extensão **Live Server** no VS Code.
4. Teste a navegação, o catálogo, a montagem da cesta e o contato pelo WhatsApp.

## Como editar produtos e preços
Abra `script.js` e procure `const PRODUCTS`.
Cada produto possui `name`, `category`, `price`, `description` e `image`. Os valores são referências iniciais e devem ser confirmados pela loja antes da publicação.

## WhatsApp
O número está definido no início de `script.js`:
`const WHATSAPP_NUMBER = "5517992818415";`
A finalização monta uma mensagem com os itens escolhidos, quantidades, subtotal estimado, mensagem do presente e observações.

## Mapa e localização
O mapa usa um iframe do Google Maps com o endereço informado: Avenida Mirassolândia, 995, São José do Rio Preto – SP. O botão de compartilhar localização solicita permissão ao navegador e abre o WhatsApp com o link da localização do cliente. O cliente ainda precisa revisar e enviar a mensagem.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. No repositório, acesse **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`, depois salve.

## Observações antes de publicar
- As imagens de produtos do catálogo são referências externas e dependem dos sites de origem. Para uso comercial definitivo, substitua por fotos próprias ou imagens com licença de uso.
- Confirme preços, tamanhos, marcas, disponibilidade e regras de entrega/retirada com a loja.
- Confira a localização exata no Google Maps antes de divulgar.
- O site é estático: não salva carrinhos em servidor, não processa pagamentos e não envia pedidos automaticamente para um sistema interno. A confirmação ocorre na conversa pelo WhatsApp.
- Bebidas alcoólicas só devem ser oferecidas a maiores de 18 anos, conforme a legislação aplicável.
