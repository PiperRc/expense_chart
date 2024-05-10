

async function assign(){
    try{
        let value=document.querySelectorAll('.value');
        let date=document.querySelectorAll('.date');

        let res=await fetch("data.json");
        let data=await res.json();

        for(i=0;i<data.length;i++){
       
            value[i].innerHTML='$'+data[i].amount;
            date[i].innerHTML=data[i].day;
          }
          

    }

    catch (e){
        console.log(e);
    }
}

assign();
