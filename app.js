
let activeFilter='all';
const money=n=>n.toLocaleString('vi-VN')+'đ';
const getCart=()=>JSON.parse(localStorage.getItem('cimCart')||'[]');
const setCart=c=>{localStorage.setItem('cimCart',JSON.stringify(c));updateCartCount();};
function updateCartCount(){let n=getCart().reduce((s,x)=>s+x.qty,0);document.querySelectorAll('#cartCount').forEach(e=>e.textContent=n);}
function filter(f){activeFilter=f;renderProducts();document.getElementById('products')?.scrollIntoView({behavior:'smooth'});}
function searchProducts(){let q=(document.getElementById('search')?.value||'').toLowerCase();renderProducts(q);}
function renderProducts(q=''){
 const el=document.getElementById('productGrid'); if(!el)return;
 let arr=PRODUCTS.filter(p=>(activeFilter==='all'||p.gender===activeFilter||(activeFilter==='sale'&&p.discount>0))&&(!q||p.name.toLowerCase().includes(q)||p.id.toLowerCase().includes(q)));
 const s=document.getElementById('sort')?.value;
 if(s==='low')arr.sort((a,b)=>a.price-b.price); if(s==='high')arr.sort((a,b)=>b.price-a.price);
 el.innerHTML=arr.map(p=>`<article class="card"><div class="badge">-${p.discount}%</div><img src="${p.image}" alt="${p.name}"><div class="card-body"><small>${p.gender.toUpperCase()}</small><h3>${p.name}</h3><span class="old">${money(p.oldPrice)}</span><strong>${money(p.price)}</strong><p>⭐ 4.9 • Còn hàng</p><button onclick="location.href='product.html?id=${p.id}'">XEM CHI TIẾT</button></div></article>`).join('');
}
function getProduct(){return PRODUCTS.find(p=>p.id===new URLSearchParams(location.search).get('id'))||PRODUCTS[0];}
function renderDetail(){
 const p=getProduct(),el=document.getElementById('detail'); if(!el)return;
 el.innerHTML=`<div class="detail-img"><div class="badge">-${p.discount}%</div><img src="${p.image}"></div>
 <div class="detail-info"><small>${p.gender.toUpperCase()}</small><h1>${p.name}</h1><p>Mã sản phẩm: <b>${p.id}</b> • ⭐⭐⭐⭐⭐ 4.9</p>
 <div class="prices"><span class="old">${money(p.oldPrice)}</span><strong>${money(p.price)}</strong><em>-${p.discount}%</em></div>
 <p class="promo">🔥 Khuyến mãi áp dụng đến 30/09/2026</p><h3>Mô tả</h3><p>${p.description}</p>
 <p><b>Chất liệu:</b> ${p.material}</p><p><b>Xuất xứ:</b> ${p.origin}</p>
 <label><b>Màu sắc</b></label><div class="opts" id="colors">${p.colors.map((x,i)=>`<button class="${i===0?'chosen':''}" onclick="choose(this)">${x}</button>`).join('')}</div>
 <label><b>Kích thước</b></label><div class="opts" id="sizes">${p.sizes.map((x,i)=>`<button class="${i===1?'chosen':''}" onclick="choose(this)">${x}</button>`).join('')}</div>
 <h3>Bảng size</h3><table class="size"><tr><th>Size</th><th>Chiều cao</th><th>Cân nặng</th></tr><tr><td>S</td><td>160–168cm</td><td>50–58kg</td></tr><tr><td>M</td><td>165–173cm</td><td>58–66kg</td></tr><tr><td>L</td><td>170–178cm</td><td>66–74kg</td></tr><tr><td>XL</td><td>175–185cm</td><td>74–85kg</td></tr></table>
 <label><b>Số lượng</b></label><input id="qty" class="qty" type="number" min="1" value="1"><p class="stock">● CÒN HÀNG (${p.stock} sản phẩm)</p>
 <div class="actions"><button class="outline" onclick="addToCart('${p.id}')">🛒 THÊM VÀO GIỎ</button><button class="primary" onclick="addToCart('${p.id}');location.href='cart.html'">MUA NGAY</button></div></div>`;
 updateCartCount();
}
function choose(btn){btn.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('chosen'));btn.classList.add('chosen');}
function addToCart(id){let c=getCart(),q=Math.max(1,parseInt(document.getElementById('qty')?.value||1));let item=c.find(x=>x.id===id);item?item.qty+=q:c.push({id,qty:q});setCart(c);alert('Đã thêm sản phẩm vào giỏ hàng!');}
function renderCart(){
 const el=document.getElementById('cart'); if(!el)return;let c=getCart();
 if(!c.length){el.innerHTML='<div class="empty">🛍️ Giỏ hàng đang trống.<br><a href="index.html#products">Mua sắm ngay</a></div>';updateCartCount();return;}
 let total=0; el.innerHTML=c.map(x=>{let p=PRODUCTS.find(a=>a.id===x.id);let sub=p.price*x.qty;total+=sub;return `<div class="cart-row"><img src="${p.image}"><div><h3>${p.name}</h3><p>${money(p.price)} × ${x.qty}</p><button onclick="removeItem('${p.id}')">Xóa</button></div><b>${money(sub)}</b></div>`}).join('')+`<div class="cart-total"><h2>Tổng: ${money(total)}</h2><button class="primary" onclick="location.href='checkout.html'">TIẾN HÀNH THANH TOÁN</button></div>`;
 updateCartCount();
}
function removeItem(id){setCart(getCart().filter(x=>x.id!==id));renderCart();}
function renderCheckout(){
 let c=getCart(),el=document.getElementById('checkoutSummary');if(!c.length){el.innerHTML='Giỏ hàng trống';return;}
 let total=0;el.innerHTML=c.map(x=>{let p=PRODUCTS.find(a=>a.id===x.id);let s=p.price*x.qty;total+=s;return `<p>${p.name} × ${x.qty}<b>${money(s)}</b></p>`}).join('')+`<hr><h3>Tạm tính: ${money(total)}</h3><p>Phí vận chuyển: <b>30.000đ</b></p><h2>Tổng: ${money(total+30000)}</h2>`;
 document.getElementById('orderForm').onsubmit=e=>{e.preventDefault();alert('Đặt hàng thành công! Shop sẽ liên hệ xác nhận đơn.');localStorage.removeItem('cimCart');location.href='index.html';};
 updateCartCount();
}
updateCartCount(); if(document.getElementById('productGrid'))renderProducts();
