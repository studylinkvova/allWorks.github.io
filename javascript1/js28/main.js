function toggle_item(el){
	let element = el.querySelector(`.accordion_body`);
 console.log(element)
if(!el.classList.contains(`isOpen`)){
	el.classList.add(`isOpen`);

	element.style.height = `${element.scrollHeight}px`
	
}else{
	element.removeAttribute(`style`);
	el.classList.remove(`isOpen`);
	
}

}

document.querySelectorAll(`.accordion_item`).forEach(function(x){
	x.addEventListener('click', function(){
		let opened = document.querySelector(`.isOpen`);
		
			toggle_item(this)
		if(opened && opened !== x){
			toggle_item(opened)
		}
		
		
	})
})
