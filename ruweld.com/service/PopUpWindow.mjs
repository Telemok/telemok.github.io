/*
* Copyright Telemok.com
* */

/*
example:
//import {PopUpWindow} from "https://telemok.github.io/ruweld.com/service/PopUpWindow.mjs"
//import {PopUpWindow} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@master/ruweld.com/service/PopUpWindow.mjs"

example1, Simple:
let pop = new PopUpWindow({html: `Example pop up`});

example2, animation in pop up:
document.getElementById("button1").addEventListener("click",()=>{
	let popUp = new PopUpWindow({timeoutMsec: 1500, html: `
	    <DIV id="divCounter"></DIV>
	`});
	let count = 0;
	let interval = setInterval(()=>{//start js animation in pop up
		document.getElementById("divCounter").innerHTML = `count: ${count}`
        console.log(count++);
    }, 100);
	popUp.addEventListener("close",()=>{
		clearInterval(interval);//stop js animation in pop up
    });
});
*/
import {tbr} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@023e19a/telemok.com/js/tbr.mjs"
export {tbr};
export class PopUpWindow extends tbr.Component
{
	constructor(parameters = {})
	{
		super();
		this.addEventNames(['clickBg','clickClose','close','keyEscape']);

		if(parameters.timeoutMsec >= 0 && parameters.timeoutMsec < 100000)
			this.timeoutMsec = Math.floor(parameters.timeoutMsec);
		else
			this.timeoutMsec = 1000;

		if(parameters.autoclose === 0 || parameters.autoclose === false)
			this.autoclose = 0;
		else
			this.autoclose = 1;

		let anchor = document.body;
		if(typeof parameters.anchor !== 'undefined')
			anchor = tbr.extract.elem(parameters, "anchor");

		let rect = anchor.getBoundingClientRect();
		this.left = (rect.x+rect.width/2)+"px";
		this.top = (rect.y+rect.height/2)+"px";
		try{this.left = tbr.extract.str(parameters, "left");}catch(e){}
		try{this.top = tbr.extract.str(parameters, "top");}catch(e){}

		this.elems = new tbr.Elements();
		this.divAll = document.createElement("div");

		document.body.appendChild(this.divAll);
		this.divAll.innerHTML = `
        <DIV
            ${this.elems.newId("elemDivBg")}
            class="PopUpWindow_divBg"
            style="transition: all ${this.timeoutMsec}ms;">
        </DIV>
        <DIV
            ${this.elems.newId("elemDivHtml")}
            class="PopUpWindow_divHTML"
            style="
                transition: all ${this.timeoutMsec}ms;
                left:${this.left};
                top:${this.top};
            ">PopupHTML. Try to use .setInnerHTML("Hello") or constructor({html: "Hello"})
        </DIV>
        <DIV${this.elems.newId("elemDivClose")}
            class="PopUpWindow_divClose"
            style="
                transition: all ${this.timeoutMsec}ms;
                left:${this.left};
                top:${this.top};
            ">
        </DIV>
        `;
		window.focus();//focus+blur required for using escape key to close this
		if (document.activeElement)
			document.activeElement.blur();

		if(typeof parameters.html !== 'undefined')
			this.setInnerHTML(tbr.extract.string(parameters, "html"));

		setTimeout(()=>{
			this.divAll.classList.add('PopUpWindow_active');
		},50);//some msec required, or transition animation will not show

		let dispatch = (name)=>{
			try{this.dispatchEvent(new Event(name));}
			catch(err){console.error(`PopUpWindow.${name}.catch: ${err}`);}
		}
		this.elems.get("elemDivClose").addEventListener('click',()=>{
			dispatch('clickClose');
			dispatch('close');
			if(this.autoclose)
				this.close();//this.close() Must be last for event must delete all extended before
		});
		this.elems.get("elemDivBg").addEventListener('click',()=>{
			dispatch('clickBg');
			dispatch('close');
			if(this.autoclose)
				this.close();//this.close() Must be last for event must delete all extended before
		});
		window.addEventListener('keydown', (e)=>{
			console.log(e)
			if((e.key==='Escape'||e.key==='Esc'||e.keyCode===27)
				&& (e.target.nodeName==='BODY'))//e.target.nodeName==='BODY' require window.focus()+unblur all
			{
				e.preventDefault();
				dispatch('keyEscape');
				dispatch('close');
				if(this.autoclose)
					this.close();//Закрывать надо последним, чтобы по евентам успело удалиться всё содержимое
				return false;
			}
		}, true);
		//this.parsedObj={};//Object for keeping all received pattern items
	}
	close()
	{
		if(this.closed === 1)
			return;
		this.closed = 1;
		this.divAll.classList.remove('PopUpWindow_active');
		setTimeout(()=>{
			this.divAll.parentNode.removeChild(this.divAll);
			super.destroy();
		},this.timeoutMsec)
	}
	setInnerHTML(html)
	{
		this.elems.get("elemDivHtml").innerHTML = html;
	}
}
PopUpWindow.setupCSS(`<STYLE>
.PopUpWindow_divHTML {
    position:fixed;
    background:#fff;
    font-size:0;
    width:0;
    height:0;
    border-radius:0;
    padding:0;
    opacity:0.3;
    border:#07f 0 solid;
    box-sizing: border-box;
    z-index:99998;
}
.PopUpWindow_active .PopUpWindow_divHTML {
    font-size:100%;
    left:10vmin!important;
    top:10vmin!important;
    width:calc(100% - 20vmin);
    height:calc(100% - 20vmin);
    border-radius:3vmin;
    padding:3vmin;
    border-width: 1vmin;
    opacity:1;
    box-shadow: inset #777 0 0 3vmin;
}
.PopUpWindow_divClose {
    position:fixed;
    width:0;
    height:0;
    border-radius: 100vmax;
    background-color:#fff;
    cursor:pointer;
    opacity:0.3;
    border:#07f 0vmin solid;
    background-size:contain;
    background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA7ElEQVR4nO3ZWwqDMBCF4bMI9+SjS3U3bkWQgn3JQEur9TJQzfk/yOskZ/ASowQAAAAAAAAc1UjqJY2SBkltYu221BzLHE1i7TS9pPllTJK6hLpdqfVau0+om27U+yIzmvAt/FzmupxBnws904Sl8HOZ63JaLS94bxPWwk/Kfb6k+rXwLU3IqPFXZwLcPnw4EqSa8GFPoOrChy3Bqg0f1gI+yqg2fFhrQvXhw9YmVBk+dFq+5OOWqDa8ZN4A61vA+iFo/Rq03ghZb4WtP4asP4etD0Tsj8TsD0Xtj8Xtf4zY/xoDAAAAAADAHTwBBaBl9KZw62AAAAAASUVORK5CYII=");
    z-index:99999;
}
.PopUpWindow_active .PopUpWindow_divClose {
    border-width: 1vmin;
    top:5vmin!important;
    left:calc(100% - 15vmin)!important;
    width:10vmin;
    height:10vmin;
    opacity:1;
    box-shadow: inset #bbb 0 0 3vmin;
}
.PopUpWindow_divBg {
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    z-index:99997;
}
.PopUpWindow_active .PopUpWindow_divBg {
    background-color: rgba(0,0,0,0.5);
}
</STYLE>`);