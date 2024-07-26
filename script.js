alert("WELCOME! CLICK ANY FLOWER TO READ WIKI");
const division = document.getElementById("flowers");
document.body.style.backgroundColor = "blue"

const flowers = [
	{
	        imglink: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/lotus-flower-real444.jpg",
                name: "Lotus",
		scname: "Nelumbo nucifera",
		wikilink: "https://en.wikipedia.org/wiki/Lotus"
	},
        
        {
        	
                imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTRorDVv6LPT7H-_VlI0pDrwIayjO2_rAAaA&s",
                name: "Shoe Flower",
        	scname: "Hibiscus rosa sinencis",
		wikilink: "https://en.wikipedia.org/wiki/Hibiscus"        
        },

        {
        	imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9n7JMt2fy9gM3072EklXWey4_LTUwiYK6hdBkrREzGsuAIElmWYEg-Dvzu-ZmaCAQGzc&usqp=CAU",
                name: "Sunflower",
                color: "lightgreen",
        	scname: "Helianthus annuus",
		wikilink: "https://en.wikipedia.org/wiki/Common_sunflower"        
        },

        {
        	
        	imglink: "https://qph.cf2.quoracdn.net/main-qimg-7e6e88b16735d443b006305f1977b40a-lq",
                name: "Jasmine",
        	scname: "Jasminum officinale",
		wikilink: "https://en.wikipedia.org/wiki/Jasmine"
        },

        {
        	
        	imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNAVxBFNWJqv_FVVpYjlFOZDoXfenl_9Hp0oOFbME8pUcHzDfR9WZW7iS2QQftkGEhrL4&usqp=CAU",
                name: "Champak",
        	scname: "magnolia champaca",        
		wikilink: "https://en.wikipedia.org/wiki/Magnolia_champaca"
        },

        {
        	imglink: "https://www.gulab.pk/karachi/wp-content/uploads/sites/20/2022/01/03.Dahlia-flower-image.jpg",
        	name: "Dahlia",
        	scname: "Dahlia pinnata",
        	wikilink: "https://en.wikipedia.org/wiki/Dahlia"
        },

        {
        	imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThU24-GRbpeLT-zsyyN6qnDt7W2kjAkfrNt8QM7aOfl3Z7BlLYeemDFQ5n1dc-7xcfVgc&usqp=CAU",
                name: "Marigold",
                scname: "Tagetes spp",
                wikilink: "https://en.wikipedia.org/wiki/Marigold"
        },

        {
        	imglink: "https://www.netmeds.com/images/cms/magefan_blog/popular/Shankhpushpi_Thumb_200x200.jpg",
        	name: "Butterfly pea",
        	scname: "Clitoria ternatea",
        	wikilink: "https://en.wikipedia.org/wiki/Clitoria"
        },

        {
        	imglink: "https://images.meesho.com/images/products/352626968/yl4ed_512.webp",
        	name: "Prickly burr",
        	scname: "Datura metal",
        	wikilink: "https://en.wikipedia.org/wiki/Datura"
        },

        {
        	imglink: "https://plantsmarket.in/cdn/shop/products/1_cefbadd5-0d33-4a76-a9f2-4112a12cbc1b_1024x1024.jpg?v=1651254301",
        	name: "Chrysanthemum",
        	scname: "Chrysanthemum indicum",
        	wikilink: "https://en.wikipedia.org/wiki/Chrysanthemum"
        }
]

         
function makeHtml(obj){
	const od = document.createElement("div");
	od.setAttribute("class","flower");
	od.style.borderRadius = "2rem";
	od.style.display = "flex";
	od.addEventListener("click",()=>{
	   window.location.href = obj.wikilink;
	})
	const img = document.createElement("img");
	img.setAttribute("src", obj.imglink);
	img.setAttribute("alt", "Image not loaded");
	img.style.borderRadius = "50%";
	img.style.margin = "0.5rem";
	img.style.border = "4px solid blue";
	const id = document.createElement("div");
	id.setAttribute("class","flowers");
	const h = document.createElement("h1"); 
	h.innerText = obj.name;
	h.style.color = "blue";
	const i = document.createElement("i");
	i.innerText = obj.scname;
	od.appendChild(img);
	id.appendChild(h);
	id.appendChild(i);
	od.appendChild(id);
	division.appendChild(od);
}

flowers.forEach(makeHtml);		
