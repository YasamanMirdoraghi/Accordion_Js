


let _li =document.querySelectorAll('.acc>li')

function ADAD(self,num){




         //*****************************reseting********************************

    for(i=1;i<=_li.length;i++){

        if(i!=num){
            document.querySelector('li:nth-of-type(' + i + ') p').classList.add('d-none')
            document.querySelector('li:nth-of-type(' + i + ') figure').classList.add('d-none')
            _li[i-1].setAttribute('data-d', 'off')
            document.querySelector('li:nth-of-type(' + i + ') span').innerHTML = '➕'

        }
    }






        //   ********************change icon and toggle***************************


    let status = self.getAttribute('data-d')
    let allChild = self.children
    let row1 = allChild[0].children
    if(status == 'off'){
        row1[1].innerHTML='➖'
        self.setAttribute('data-d', 'on')

    }else{
        row1[1].innerHTML='➕'
        self.setAttribute('data-d', 'off')

    }

    let row2 = allChild[1].children
    row2[0].classList.toggle('d-none')
    row2[1].classList.toggle('d-none')
}
