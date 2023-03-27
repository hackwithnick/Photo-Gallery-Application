//Extracting classes from html file
const gallery  = document.querySelectorAll(".image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");
const large=document.querySelector(".plussign");
const small=document.querySelector(".minussign");
const rotate=document.querySelector(".bi-arrow-clockwise");

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; 
        let newIndex = i;                         //index of current image selected
        let clickedImgIndex; 
        
        gallery[i].onclick = () =>{                                                      
            clickedImgIndex = i; 
            function preview(){
                currentImg.textContent = newIndex + 1; 
                let imageURL = gallery[newIndex].querySelector("img").src; 
                previewImg.src = imageURL; 
            }
            preview(); 
    
            const prevBtn = document.querySelector(".prev");               //previous slide button
            const nextBtn = document.querySelector(".next");               //nect slide button
            
            if(newIndex == 0){                                               //check if this is a first slide or not
                prevBtn.style.display = "none"; 
            } 
            if(newIndex >= gallery.length - 1){                                //check if this is a last slide or not
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--;                                                     //index decrease by 1 when slides shift to the left
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++;                                     //index increase by 1 when slides shift to the right
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }
          
           var x=1;
           rotate.onclick = ()=>
            {     previewImg.style.width="700px";
                 
                     if(x%2==0)
                     {   preview();  

                        const any=previewImg;
                        any.style.transform = "rotate(360deg)";             //used to rotate image by 360 degree
                        rotate.style.display = "block";
                        x++;
                        console.log(any);
                     }
                     else{
                        preview();
                        const any=previewImg;
                        any.style.transform = "rotate(180deg)";                  //used to rotate image by 180 degree
                        rotate.style.display = "block";
                        x++;
                        console.log(any);
                        
                     }
                      
            }
            var x=5;
            large.onclick=()=>
            {
                
                const elem = getComputedStyle(document.querySelector('.preview-box'));            //for increasing size of image
                const ans=elem.getPropertyValue('max-width').slice(0,3);
            
                document.querySelector('.preview-box').style.maxWidth=parseInt(ans)+x+'px';
                
            }
            small.onclick=()=>                                                                     //for decreasing size of image
            {
                const elem = getComputedStyle(document.querySelector('.preview-box'));
                const ans=elem.getPropertyValue('max-width').slice(0,3);
            
                document.querySelector('.preview-box').style.maxWidth=parseInt(ans)-x+'px';
            }
            
            
            document.querySelector("body").style.overflow = "hidden";                    //for close the slide
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; 
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                rotate.style.display="block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
                location.reload();

            }
        }
        
    } 
}