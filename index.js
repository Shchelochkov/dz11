
let y = 0

let don = 'don.jpg'
let leo = 'leo.jpg'
let raf = 'raf.jpg'
let mik = 'mik.jpg'



function f1(){
    if (y == 1){
        $('.img1').attr('src', '4.jpg')
        console.log(y)
        y++
    }
    else if (y == 2){
        $('.img1').attr('src',don)
        console.log(y)
        y++
    }
    else if (y == 3){
        $('.img1').attr('src',leo)
        console.log(y)
        y++
    }    
    else if (y == 4){
        $('.img1').attr('src',raf)
        console.log(y)
        y++
    }    
    else {
        $('.img1').attr('src',mik)
        console.log(y)
        y = 1
    }
}

$('#but1').click(f1)