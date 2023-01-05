function addProduct(){
    let productList=document.getElementById('productList')
    let productName=document.getElementById('productName')
    
    productName.value = productName.value.trim()

    if ( productName.value.length > 2  ){
        let li=document.createElement('li')
        li.innerHTML = productName.value
        productList.appendChild(li)
    }

    productName.value = ''
}