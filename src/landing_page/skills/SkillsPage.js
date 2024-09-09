import React from "react";

function SkillsPage(){
    return(
        <>
         <div className="p-5 my-4 mx-5 ">
        <h1 className="py-5 " style={{ textAlign: "center" ,color:"#FFD43B"}}>
        <i class="fa-solid fa-pen-to-square" style={{color: "#FFD43B"}}></i> SKILLS :
        </h1>
        <div className="container row skill" >
            <div className="col-2 m-5" >
                <img src="Html.png" style={{height:"7rem",width:"8rem"}}></img>
                <p><b>Html</b></p>
            </div>


            <div className="col-2 m-5">
                <img src="CSS.png" style={{height:"7rem",width:"8rem"}}></img>
                <p><b>CSS</b></p>
            </div>


            <div className="col-2 m-5" >
                <img src="JS.png" style={{height:"7rem",width:"8rem"}}></img>
                <p><b>JS</b></p>
            </div> 


            <div className="col-2 m-5" >
                <img src="Mongo.png" style={{height:"7rem",width:"8rem"}}></img>
                <p><b>MongoDB</b></p>
            </div>


            <div className="col-2 m-5" >
                <img src="Node.png" style={{height:"7rem",width:"8rem"}}></img>
                <p><b>Node.JS</b></p>
            </div> 


            <div className="col-2 m-5" >
                <img src="Express.png" style={{height:"7rem",width:"8rem"}}></img>
                <p><b>Express.JS</b></p>
            </div>


            <div className="col-2 m-5" >
                <img src="React.png" style={{height:"7rem",width:"8rem"}}></img>
                <p><b>React</b></p>
            </div>

            <div className="col-2 m-5" >
                <img src="Python.png" style={{height:"7rem",width:"8rem",paddingTop:"0.5rem"}}></img>
                <p><b>Python</b></p>
            </div>

            <div className="col-2 m-5" >
                <img src="c.png" style={{height:"7rem",width:"8rem"}}></img>
                <p><b>C</b></p>
            </div>

            <div className="col-2 m-5" >
                <img src="Java.png" style={{height:"7rem",width:"8rem"}}></img>
                <p><b>Java</b></p>
            </div>


            <div className="col-2 m-5" >
                <img src="SQL.png" style={{height:"7rem",width:"8rem", padding:"0.5rem"}}></img>
                <p><b>SQL</b></p>
            </div>


            <div className="col-2 m-5" >
                <img src="Bootstrap.png" style={{height:"7rem",width:"8rem"}}></img>
                <p><b>Bootstrap</b></p>
            </div>  

            <div className="col-2 m-5" >
                <img src="TailwindCSS.png" style={{height:"7rem",width:"7rem" , padding:"1rem"}}></img>
                <p><b>Tailwind CSS</b></p>
            </div> 
        </div>



       </div>
         
            
        
        
        </>
    )
}

export default SkillsPage;