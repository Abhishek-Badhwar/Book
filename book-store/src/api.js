export const addbookstore = async (data)=>{
    console.log(data)
    const res = await fetch('http://localhost:5000/upload-book',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    })
     return await res.json()
}