import axios from "axios";
import React from "react";


async function getVenda(divId : HTMLDivElement){

const vendaUrl = "http://localhost:4000/api/venda";
await axios.get(vendaUrl)
.then((response)=>{
    console.log("cheguei na response do get")
    const dataVenda: Record<string, {user: string, products: string,
        finishedSale: string, discount:string, Sale:string}> =
        response.data;

        //name vai conter a url da imagem
        // products vai contem o título
        //finishedSale vai conter o subtítulo

    const dataVendaArray = Object.entries(dataVenda).map(
        ([key, value]) => ({
            key,
            ...value

        }));
        //  return(
            var content = "";
        dataVendaArray.forEach((dados) =>{
        
        // var newDiv = document.createElement("div");
            

             content += `
                <div class="FlexPai">

                <div class="produtos">
                   <img src= ${dados.user} alt =""/>
                   <label>
                   Samsung Galaxy s5 - 2015
                   </label>
                </div>

                        
                <div class="home">
                <img src=  ${dados.products} alt =""/> 
                <label>
                Nokia Lumia 1320
                </label>
                </div>

                <div class="shop">
                <img src=  ${dados.finishedSale} alt =""/> 
                <label>
                LG Leon 2015
                </label>   
                </div>

                <div class="products">
                <img src= ${dados.discount}  alt =""/>  
                <label>
                Sony Microsoft
                </label>    
                </div>

                <div class="checkout">
                <img src= ${dados.Sale}  alt =""/> 
                <label>
                Iphone 6
                </label>     
                </div>

           


                </div>
                    `;
            
         


        // var teste: any = teste.innerHTML = `
        // <div className="FlexPai">

        //         <div className="produtos">
        //             ${dados.user}
        //         </div>

                
        //         <div className="home">
        //             ${dados.products}
        //         </div>

        //         <div className="shop">
        //             ${dados.finishedSale}
        //         </div>

        //         <div className="products">
        //         ${dados.discount}
        //         </div>

        //         <div className="checkout">
        //         ${dados.Sale}
        //         </div>

        //         <div className="category">
        //             <label>Category</label>
        //         </div>

        //         <div className="outhers">
        //             <label>Outhers</label>
        //         </div>

        //         <div className="contacts">
        //             <label>Contacts</label>
        //         </div>

                
        //         <div className="Botão">
                    
        //             <button> Login</button>
        //         </div>


        //         </div>
        //     `;

            

            

       
    //    divId.appendChild(newDiv);
        // document.body.appendChild(newDiv);


    })
    console.log("Content", content);
    divId.innerHTML = content;
    // );


})


.catch((error)=> {
    console.log("O erro ocorrido foi:", error)
})

}

function postVenda(): void{
    console.log("teste")
}

export default { getVenda, postVenda };
