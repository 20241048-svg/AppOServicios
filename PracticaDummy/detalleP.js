const detalleP=document.getElementById('detalle')
const dato=new URLSearchParams(window.location.search) 
const id=dato.get('id')

fetch(`https://dummyjson.com/products/${id}`)
.then(respuesta=>respuesta.json())
.then(pro=>{
    
    let comentariosHTML = ""

    pro.reviews.forEach(r => {
        comentariosHTML += `
            <div class="comentario">
                <strong>${r.reviewerName}</strong>
                <p>${r.comment}</p>
                <small> ${r.rating} | ${new Date(r.date).toLocaleDateString()}</small>
            </div>
        `
    })

    detalleP.innerHTML = `
        <img src="${pro.thumbnail}">
        <div>
            <h1>${pro.title}</h1>
            <p><strong>Precio:</strong> $${pro.price}</p>
            <p><strong>Categoría:</strong> ${pro.category}</p>
            <p><strong>Rating:</strong> ${pro.rating}</p>

            <h3>Descripción</h3>
            <p>${pro.description}</p>

            <h3>Opiniones de clientes</h3>
            ${comentariosHTML}
        </div>
    `
    })