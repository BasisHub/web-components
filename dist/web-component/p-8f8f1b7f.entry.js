import{r as t,h as e,H as s,g as i}from"./p-d00804f5.js";let r=class{constructor(e){t(this,e)}render(){return e(s,null,e("div",{id:"hello",style:this.generateAvatar(),onClick:t=>this.onAvatarClick(t)},this.getInitails()),e("slot",null))}generateAvatar(){return{backgroundColor:["#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e","#16a085","#27ae60","#2980b9","#8e44ad","#2c3e50","#f1c40f","#e67e22","#e74c3c","#95a5a6","#f39c12","#d35400","#c0392b","#bdc3c7","#7f8c8d"][(this.getInitails().charCodeAt(0)-65)%19],width:this.width+"px",height:this.height+"px",color:"#FFF",textAlign:"center",font:this.width/2+"px Arial",lineHeight:this.height+"px",borderRadius:"50%"}}getInitails(){return this.name.split(" ").length<=1?this.name.split(" ")[0].charAt(0).toUpperCase()+this.name.split(" ")[0].charAt(1).toUpperCase():this.name.split(" ")[0].charAt(0).toUpperCase()+this.name.split(" ")[1].charAt(0).toUpperCase()}onAvatarClick(t){console.log("new avatar testing click 9.0"),console.log(this.myElement),console.log("event is",t),window.basisDispatchCustomEvent(this.myElement,t)}get myElement(){return i(this)}};r.style=":host{display:block}";let l=class{constructor(e){t(this,e)}getText(){return(this.first||"")+((t=this.middle)?` ${t}`:"")+((e=this.last)?` ${e}`:"");var t,e}render(){return e("div",null,"Hello, World! I'm ",this.getText())}};l.style=":host{display:block}";export{r as avatar_initial,l as my_component}