"use strict";    
let n;
let fatt;
let numeri=[];
let max;
let min;
function immettinumero(n)
    {
        n=prompt("immetti un numero","");
        document.getElementById(n).innerHTML=n;
    }
function  bsq(n,square)
    {   n=immettinumero()
        let mid;
        let max=n;
        let min=0;
        let e=0.001;
        if (n<0){
            try {
                alert("il numero negativo ha radice immaginaria")
            } 
            catch (error) {
                
            }
            }
            if (n==0) 
            {
            return 0;
            }
            while (true)
            {   let mid=(max-min)/2;
                let square=mid*mid;
                if (Math.abs(square-mid<epsilon)) {
                    return n;
                }
                n<square?min=mid:max==mid;
            }
        return square;   
}
function fattoriale(n,fatt) 
    {   
        n=immettinumero(n);
        for (let index = 0; index < n; index++) {
            fatt[index]=fatt[index]*fattoariale(inedx-1);
            
        }
        return fatt;
    }
function ininar(numeri,n)
{
    for (let index = 0; index < n; index++) {
        nuneri[index]=prompt  }
}
function maxmin(numeri,max,min)
{   numeri=inirar(numeri,n);
    for (let index = 0; index < length.numeri; index++) 
    {
        
        if (!((numeri[index]>min)&(numeri[index]<min))) 
        {
            minimo<numeri[index]?min=numeri[index]:max=numeri[index]
        }
        return min, max;
    }
}
function bubble(n,numeri){
    let min=0;
    let max=length.numeri-1;
    while(min<max) {
        for (let index = min; index < max; index++) {
            if (numeri[index]>numeri[index+1]) {
                numeri[inedx]=numeri[inedx+1];
                numeri[index+1]=numeri[index];
            }
        }
    max=max-1
    for (let index = max; index < min; index--) {
        if (numeri[ininex]<numeri[index-1]) {
            numeri[index-1]=numeri[index];
            numeri[inidex]=numeri[inedx-1];
        }
    }
    min+=1;
    }
}
