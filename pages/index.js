
import Base from "@layouts/Baseof";
import Youtube from "@layouts/shortcodes/Youtube";

 function index({item}) {

  return(

    <Base>
      {/* profile */}
      <div className="mx-auto text-center lg:col-8">

<div class="notice warning relative rounded mt-0 ">
<div class="absolute h-[30px] -top-[30px] z-10 left-0 p-3 flex items-center">
<svg width="16px" height="16px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
<path fill="#fff" 
d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>

<p class="my-0 text-dark ml-1.5 capitalize ">teste de algo icrível! &nbsp;</p>



<svg width="16px" height="16px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
<path fill="#fff" 
d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>

</div>


</div>



      </div>
      <div className="section">

        <div className="container">
          <div className="row">
            <div className="mx-auto text-center lg:col-8">

            <Youtube id="qJA2U-YMvkk" title="Play: Video" />
   
            </div>
          </div>
        </div>
      </div>
    </Base>  

  
    




)   

  
}


export default index