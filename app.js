


const scanner = new Html5QrcodeScanner("reader", {
    qrbox:{
        width:250,
        height:250,
    },
    fps:20,
})

scanner.render(onSuccess, onError)

function onSuccess(result){
    document.getElementById("result").innerHTML = `
    <h2>Success !</h2>
    <a href="${result}">${result}</a>
    `

    scanner.clear()

    document.getElementById("reader").remove()
}

function onError(error){
    console.log(error)
}