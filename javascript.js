window.onload = doBemVindo

function doBemVindo() {
	alert("Bem vindo à página de Vinicius!");
}

window.alert = function(string){
   var el = document.createElement('div');
   el.style.position = 'fixed';
   el.style.background = '#ffff00';
   el.style.border = 'double 2px #000';
   el.style.color = '#000000';
   el.style.fontSize = '24px';
   el.style.padding = '6px';
   el.style.top = '35%';
   el.style.left = '38%';
   el.style.margin = '0 auto';
   el.style.width = '400px';
   el.style.textAlign = 'center';
   var btn = document.createElement('button');
   btn.onclick = function(){
       document.getElementsByTagName('body')[0].removeChild(el);
   };
   btn.innerHTML = 'OK';
   btn.style.width = '40px';
   btn.style.height = '40px';
   btn.style.margin = '15 auto';
   btn.style.display = 'block';
   el.innerHTML = string;
   el.appendChild(btn);
   document.getElementsByTagName('body')[0].appendChild(el);
};