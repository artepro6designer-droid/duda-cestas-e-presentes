/* DUDACESTAS — catálogo e interações
   Edite os nomes, preços e imagens neste arquivo. Valores são estimativas iniciais. */
const WHATSAPP_NUMBER = "5517992818415";

const PRODUCTS = [
  {id:"base-caixa", name:"Caixa decorada", category:"Base e embalagem", price:25, description:"Caixa cartonada ou papelão decorado.", image:"https://cdn.awsli.com.br/2500x2500/399/399569/produto/123534933/bq37---quatro-rosas-db4d3t2fj3.png"},
  {id:"base-cesta", name:"Cesta de vime", category:"Base e embalagem", price:45, description:"Estrutura de vime para montar seu presente.", image:"https://static.giulianaflores.com.br/images/banner/departamentos/Cestas-para-Mulheres-dept-112021.jpg"},
  {id:"base-baú", name:"Baú / MDF", category:"Base e embalagem", price:55, description:"Base rígida com acabamento especial.", image:"https://cdn.awsli.com.br/2500x2500/399/399569/produto/123534933/bq37---quatro-rosas-db4d3t2fj3.png"},
  {id:"acabamento", name:"Celofane, palha e laço", category:"Base e embalagem", price:12, description:"Acabamento para valorizar a apresentação.", image:"https://static.giulianaflores.com.br/images/banner/departamentos/Cestas-para-Mulheres-dept-112021.jpg"},
  {id:"bombom-trad", name:"Caixa de bombons tradicional", category:"Chocolates e doces", price:15, description:"Bombons sortidos (Lacta, Nestlé ou Garoto).", image:"https://drogariasp.vteximg.com.br/arquivos/ids/1217543-1000-1000/757144---Caixa-de-Bombom-Nestle-Especialidades-Caixa-251g-6.jpg.jpg?v=638793024699330000"},
  {id:"ferrero", name:"Ferrero Rocher", category:"Chocolates e doces", price:42, description:"Caixa de chocolates finos — tamanho a confirmar.", image:"https://images.tcdn.com.br/img/img_prod/893215/ferrero_rocher_12_unidades_129_1_20201106182942.jpg"},
  {id:"sonho", name:"Sonho de Valsa", category:"Chocolates e doces", price:3, description:"Bombom unitário.", image:"https://www.extramercado.com.br/img/uploads/1/619/33298619.png"},
  {id:"barra", name:"Barra de chocolate", category:"Chocolates e doces", price:14, description:"Barra de chocolate ao leite ou sabor disponível.", image:"https://acdn-us.mitiendanube.com/stores/002/897/945/products/55b420d01a638ee735a6347436f94bf1-79942b0d306c76a74b17102739653039-640-0.webp"},
  {id:"cookies", name:"Cookies / pão de mel", category:"Chocolates e doces", price:13, description:"Doce para complementar a cesta.", image:"https://cdn.awsli.com.br/2500x2500/399/399569/produto/123534933/bq37---quatro-rosas-db4d3t2fj3.png"},
  {id:"suco", name:"Suco integral", category:"Bebidas", price:12, description:"Garrafa ou embalagem individual.", image:"https://static.giulianaflores.com.br/images/banner/departamentos/Cestas-para-Mulheres-dept-112021.jpg"},
  {id:"cafe", name:"Café / chá / achocolatado", category:"Bebidas", price:10, description:"Sachês ou embalagem individual.", image:"https://drogariasp.vteximg.com.br/arquivos/ids/1217543-1000-1000/757144---Caixa-de-Bombom-Nestle-Especialidades-Caixa-251g-6.jpg.jpg?v=638793024699330000"},
  {id:"vinho", name:"Vinho / espumante", category:"Bebidas", price:65, description:"Consulte rótulo, tamanho e disponibilidade. Venda somente para maiores de 18 anos.", image:"https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=80"},
  {id:"petiscos", name:"Petiscos e torradas", category:"Café da manhã e petiscos", price:15, description:"Torradas, biscoitos ou snacks.", image:"https://cdn.awsli.com.br/2500x2500/399/399569/produto/123534933/bq37---quatro-rosas-db4d3t2fj3.png"},
  {id:"geleia", name:"Geleia / mel", category:"Café da manhã e petiscos", price:12, description:"Mini pote para acompanhar o café.", image:"https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=700&q=80"},
  {id:"frutas", name:"Frutas frescas", category:"Café da manhã e petiscos", price:14, description:"Seleção de frutas conforme disponibilidade.", image:"https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=700&q=80"},
  {id:"caneca", name:"Caneca personalizada", category:"Mimos e decoração", price:38, description:"Caneca para guardar de lembrança.", image:"https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=700&q=80"},
  {id:"urso", name:"Urso de pelúcia", category:"Mimos e decoração", price:45, description:"Pelúcia em tamanho aproximado de 20 a 25 cm.", image:"https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=80"},
  {id:"flores", name:"Flores / mini buquê", category:"Mimos e decoração", price:40, description:"Flores conforme estação e disponibilidade.", image:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80"},
  {id:"balao", name:"Balão / porta-retrato", category:"Mimos e decoração", price:20, description:"Um detalhe especial para personalizar.", image:"https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=700&q=80"}
];

const money = value => value.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
let cart = {};
let activeCategory = "Todos";

function initCommon(){
  document.querySelectorAll("#year").forEach(el => el.textContent = new Date().getFullYear());
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if(toggle && nav){
    toggle.addEventListener("click",()=>{
      const open = nav.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded",String(open));
    });
  }
}

function initCatalog(){
  const grid = document.getElementById("product-grid");
  if(!grid) return;
  const tabs = document.getElementById("category-tabs");
  const search = document.getElementById("product-search");
  const basketItems = document.getElementById("basket-items");
  const totalEl = document.getElementById("basket-total");
  const countEl = document.getElementById("basket-count");
  const bearMessage = document.getElementById("bear-message");
  const categories = ["Todos", ...new Set(PRODUCTS.map(p=>p.category))];

  function renderTabs(){
    tabs.innerHTML = categories.map(c=>`<button class="category-tab ${activeCategory===c?"selected":""}" data-category="${c}">${c}</button>`).join("");
    tabs.querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>{
      activeCategory=btn.dataset.category; renderTabs(); renderProducts();
    }));
  }
  function renderProducts(){
    const term = (search.value||"").trim().toLocaleLowerCase("pt-BR");
    const list = PRODUCTS.filter(p=>(activeCategory==="Todos"||p.category===activeCategory) && (p.name+" "+p.description).toLocaleLowerCase("pt-BR").includes(term));
    grid.innerHTML = list.length ? list.map(p=>`
      <article class="product-card">
        <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=700&q=80'"><span class="product-category">${p.category}</span></div>
        <div class="product-card-body"><h3>${p.name}</h3><p>${p.description}</p><div class="product-card-bottom"><strong>${money(p.price)}</strong><button class="add-product" data-id="${p.id}" aria-label="Adicionar ${p.name}">+</button></div></div>
      </article>`).join("") : `<p class="no-results">Nenhum produto encontrado. Tente outra busca.</p>`;
    grid.querySelectorAll(".add-product").forEach(btn=>btn.addEventListener("click",()=>addProduct(btn.dataset.id)));
  }
  function renderBasket(){
    const entries = Object.entries(cart).filter(([,q])=>q>0);
    const count = entries.reduce((sum,[,q])=>sum+q,0);
    const total = entries.reduce((sum,[id,q])=>sum+PRODUCTS.find(p=>p.id===id).price*q,0);
    countEl.textContent = `${count} ${count===1?"item":"itens"}`;
    totalEl.textContent = money(total);
    basketItems.innerHTML = entries.length ? entries.map(([id,q])=>{
      const p=PRODUCTS.find(x=>x.id===id);
      return `<div class="basket-line"><div><b>${p.name}</b><small>${money(p.price)} cada</small></div><div class="quantity-control"><button data-action="minus" data-id="${id}" aria-label="Diminuir">−</button><span>${q}</span><button data-action="plus" data-id="${id}" aria-label="Aumentar">+</button></div><strong>${money(p.price*q)}</strong></div>`;
    }).join("") : `<div class="empty-basket"><span>🎁</span><b>Sua cesta está vazia</b><small>Adicione produtos para começar.</small></div>`;
    basketItems.querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>{
      const id=btn.dataset.id; cart[id]=(cart[id]||0)+(btn.dataset.action==="plus"?1:-1);
      if(cart[id]<=0) delete cart[id]; renderBasket();
    }));
    bearMessage.textContent = count===0 ? "Escolha os primeiros itens e eu começo a montar sua cesta!" : count<4 ? "Oba! Já estou separando seus presentes. Quer acrescentar mais um mimo?" : "Que cesta linda está ficando! Estou preparando tudo com muito carinho.";
  }
  function addProduct(id){cart[id]=(cart[id]||0)+1;renderBasket();}
  renderTabs(); renderProducts(); renderBasket();
  search.addEventListener("input",renderProducts);
  document.getElementById("checkout-button").addEventListener("click",()=>{
    const entries=Object.entries(cart).filter(([,q])=>q>0);
    if(!entries.length){alert("Adicione pelo menos um produto antes de finalizar.");return;}
    const total=entries.reduce((sum,[id,q])=>sum+PRODUCTS.find(p=>p.id===id).price*q,0);
    const lines=entries.map(([id,q])=>{const p=PRODUCTS.find(x=>x.id===id);return `• ${q}x ${p.name} — ${money(p.price*q)}`;}).join("\n");
    const gift=document.getElementById("gift-message").value.trim();
    const notes=document.getElementById("customer-notes").value.trim();
    const message=`Olá, vim através do site da Dudacestas e gostaria de encomendar uma cesta personalizada!\n\nMinha seleção:\n${lines}\n\nSubtotal estimado: ${money(total)}\n${gift?`\nMensagem para o presente: ${gift}\n`:""}${notes?`\nObservações/dúvidas: ${notes}\n`:""}\nPoderiam confirmar disponibilidade, valores e opções de entrega/retirada?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,"_blank","noopener");
  });
}

function initLocationShare(){
  const btn=document.getElementById("share-location");
  if(!btn)return;
  const status=document.getElementById("location-status");
  btn.addEventListener("click",()=>{
    if(!navigator.geolocation){status.textContent="Este navegador não oferece acesso à localização. Você pode compartilhar sua localização diretamente pelo WhatsApp.";return;}
    status.textContent="Aguardando permissão para acessar sua localização...";
    navigator.geolocation.getCurrentPosition(pos=>{
      const lat=pos.coords.latitude.toFixed(6), lon=pos.coords.longitude.toFixed(6);
      const map=`https://maps.google.com/?q=${lat},${lon}`;
      const text=`Olá, vim através do site da Dudacestas. Esta é minha localização para combinarmos a entrega/retirada: ${map}`;
      status.textContent="Localização pronta. O WhatsApp será aberto para você revisar e enviar a mensagem.";
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,"_blank","noopener");
    },()=>{
      status.textContent="Não foi possível obter a localização. Verifique a permissão do navegador ou compartilhe sua localização diretamente pelo WhatsApp.";
    },{enableHighAccuracy:true,timeout:12000});
  });
}

document.addEventListener("DOMContentLoaded",()=>{initCommon();initCatalog();initLocationShare();});
