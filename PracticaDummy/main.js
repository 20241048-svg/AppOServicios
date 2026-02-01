const producto=document.getElementById('productos')
const busca=document.getElementById('buscar')
let productos=[]

fetch('https://dummyjson.com/products')
.then(respu=>respu.json())
.then (data=> {productos=data.products;
    obtener(productos);
})

function obtener(list)
{
    producto.innerHTML='';
    list.forEach(pro=>{
        const card = document.createElement('div');
        card.className='card';
        card.innerHTML=`<img src="${pro.thumbnail}"> <h3>${pro.title}</h3><p>Precio:$${pro.price}</p><p>Categoria:${pro.category}</p>`
        card.onclick= () =>{
            
            window.location.href=`detalle.html?id=${pro.id}`
        }
        producto.appendChild(card);

    })
}
busca.addEventListener('input',i=>{
    const value=i.target.value.toLowerCase()
    const filtro=productos.filter(pro=>pro.title.toLowerCase().includes(value))
    obtener(filtro)
})
