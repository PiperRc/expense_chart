fetch("data.json") 
.then((res)=>{ 
return res.json(); 
}) 
.then((data)=>{ 
return data[0].day
})
