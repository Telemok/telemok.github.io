/*
* Copyright Telemok.com
* */

/*
example:
//import {ConsoleTxRx} from "https://telemok.github.io/telemok.com/js/ConsoleTxRx/ConsoleTxRx.mjs"
//import {ConsoleTxRx} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@master/telemok.com/js/ConsoleTxRx/ConsoleTxRx.mjs"

var console_TXRX = new ConsoleTxRx();
console_TXRX.addEventListener('tx', (e)=>//only if browser connected to USART
{
	console.log("Message for redirecting to USART TX: "+event.detail.message)
});

console.log(`Hello from developer console on Windows, Android, IOS, ...`);
console.error(`Rightclick for looking call stack`);
*/


import {tbr} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@023e19a/telemok.com/js/tbr.mjs"


export class ConsoleTxRx extends tbr.Component
{
	constructor()
	{
		super();
		this.addEventNames(["tx"]);

		this.last_add_type="";//Чтобы менять цвет при смене типа сообщения
		this.last_add_number=0;//Номер блока TX  или RX в консоли
		this.log_history_obj=LogQueueDOM();

		this.flag_hidden=false;
		this.__constructed=false;


		this.elemPreLast=null;

		this.div_id="";
		this.id_last_line="div_text_last_line"


		this.buttonsMap=new Map([
			["copy" ,{name:"copy" ,pressed:null,caption:"&#x1f4cb;",click:()=>{this.copyToClipboard();}}],
			["clear",{name:"clear",pressed:null,caption:"Clr",click:()=>{this.clear();}}],
			["all"  ,{name:"all"  ,pressed:0,caption:"Pause &#9208;",click:()=>{this.toggle('all');}}],
			["tx"   ,{name:"tx"   ,pressed:1,caption:"TX",click:()=>{this.toggle('tx');}}],
			["rx"   ,{name:"rx"   ,pressed:1,caption:"RX",click:()=>{this.toggle('rx');}}],
			["log"  ,{name:"log"  ,pressed:1,caption:"log",click:()=>{this.toggle('log');}}],
			["error",{name:"error",pressed:1,caption:"err",click:()=>{this.toggle('error');}}],
			["addN" ,{name:"addN" ,pressed:1,caption:"\\n",click:()=>{this.toggle('addN');}}],
			["addR" ,{name:"addN" ,pressed:1,caption:"\\r",click:()=>{this.toggle('addR');}}],
			["back" ,{name:"back" ,pressed:null,caption:"&#x21bb;",click:()=>{location.href=location.href;},contextmenu:()=>{history.back();}}],
		]);
		//TODO add 'request' and 'response' to server colors

		let buttonsHtml = '';
		for(let [key,value] of this.buttonsMap.entries())
		{
			value.id = tbr.random.generateUniqueVarName(10);
			buttonsHtml += `<div><a class="Console_TXRX_button" id="${value.id}">${value.caption}</a></div>`
		}
		buttonsHtml+=`<div style="width:100%"></div>`;

		this.elems = new tbr.Elements();
		let elChild = document.createElement('div');
		elChild.id=tbr.random.generateUniqueVarName();
		this.elems.set("divAll",elChild.id)
		elChild.innerHTML=`<div${this.elems.newId("divPanel")} class="class_Console_TXRX_div_all">
            <DIV style="display:flex;flex-wrap: nowrap;">
                <DIV${this.elems.newId("buttonSide")} style="flex-grow:1;align-items: stretch;" class="Console_TXRX_button">&#8596;</DIV
                ><input${this.elems.newId("buttonTxInput")} style="min-width:0;width:100%;flex-grow:99;" placeholder="TX input" value="ATZ" class="class_Console_TXRX_input"
                /><a${this.elems.newId("buttonTxButton")} style="flex-grow:1" class="Console_TXRX_button">USART TX</a
                ><a${this.elems.newId("buttonHide")} style="1flex-grow:1" class="Console_TXRX_button">X</a
                ></DIV>
            <DIV style="display:flex;flex-wrap:wrap;1flex-grow:1" onselectstart="return false"
                ondragenter="return false"
                ondragover="return false"
                ondragleave="return false"
                ondrop="return false"
                ondragstart="return false">
                   ${buttonsHtml}
                </DIV>
            <DIV${this.elems.newId("divData")} class="Console_TXRX_data" style="flex:1">
            </DIV>
        </div>
        <DIV${this.elems.newId("buttonUnhide")} class="Console_TXRX_button class_Console_TXRX_button_unhide">&lt;</DIV>`;
		document.body.appendChild(elChild);

		//document.getElementById("Console_TXRX_controlsAll").onselectstart=0;
		this.elems.get("buttonUnhide").addEventListener('click',()=>{this.unhide();});
		this.elems.get("buttonHide").addEventListener('click',()=>{this.hide();});
		this.elems.get("buttonSide").addEventListener('click',()=>{this.side();});
		this.elems.get("buttonTxButton").addEventListener('click',()=>{this.dispatchTx();});
		this.elems.get("buttonTxInput").addEventListener('keypress',(event)=>{if(event.which === 13) this.dispatchTx();});

		for(let [key,value] of this.buttonsMap.entries())
		{
			value.elem = document.getElementById(value.id);
			if(typeof value.click !== 'undefined')
				value.elem.addEventListener('click',value.click);
			if(typeof value.contextmenu !== 'undefined')
				value.elem.addEventListener('contextmenu',value.contextmenu);
		}

		this.pause('all');
		this.unpause('tx');
		this.unpause('rx');
		this.unpause('log');
		this.unpause('error');
		this.unpause('addN');
		this.pause('addR');

		this.unhide();
		this.__constructed=true;

		console.log= (text,ln=true)=>{return this.add_log_block(text,ln,"log")};
		console.error=(text,ln=true)=>{return this.add_log_block(text,ln,"error")};
		console.tx=(text,ln=true)=>{return this.add_log_block(text,ln,"tx")};
		console.rx=(text,ln=true)=>{return this.add_log_block(text,ln,"rx")};

		console.pause = ()=>{this.pause();};
		console.toggle = ()=>{this.toggle()};
		console.start = ()=>{this.unpause()};
		console.clear = ()=>{this.clear()};

		console.hide = ()=>{this.hide()};
		console.side = ()=>{this.side()};
		console.unhide = ()=>{this.unhide()};
		console.toggleMenuButton = (onOff)=>{this.toggleMenuButton(onOff)};

		console.log("URL: <a href='"+location.href+"'>"+location.href+"</a>");
		console.log("ConsoleTXRX initialised");
		console.error("ConsoleTXRX error legend");
		console.tx("ConsoleTXRX tx legend");
		console.rx("ConsoleTXRX rx legend");
		//
		// document.addEventListener('DOMContentLoaded', function(){
		// 	///console_TXRX.__construct();//Все накопленные сообщения выводятся сразу после __construct
		// }, false);

	}
	dispatchTx()
	{
		let message = this.elems.get("buttonTxInput").value;
		if(this.buttonsMap.get('addR').pressed)
			message += "\r";
		if(this.buttonsMap.get('addN').pressed)
			message += "\n";
		console.tx(message);
		this.dispatchEvent(new CustomEvent("tx",{detail: {message: message}}));
	}

	toggleMenuButton(onOff){this.elems.get("buttonUnhide").classList.toggle("Console_TXRX_displayNoneImportant", !onOff);}

	unhide()
	{
		this.flag_hidden=false;
		this.elems.get("buttonUnhide").classList.add("Console_TXRX_displayNoneImportant");
		this.elems.get("divPanel").classList.remove("Console_TXRX_displayNoneImportant");
	}
	hide()
	{
		this.flag_hidden=true;
		this.elems.get("buttonUnhide").classList.remove("Console_TXRX_displayNoneImportant");
		this.elems.get("divPanel").classList.add("Console_TXRX_displayNoneImportant");
	}
	side()
	{
		this.flag_hidden=false;
		this.elems.get("buttonUnhide").classList.add("Console_TXRX_displayNoneImportant");
		this.elems.get("divPanel").classList.remove("Console_TXRX_displayNoneImportant");

		if(this.currentSide === "left")
		{
			this.elems.get("divPanel").style.left="50vw"
			this.elems.get("divPanel").style.right=0
			this.currentSide="right";
		}
		else
		{
			this.elems.get("divPanel").style.left=0
			this.elems.get("divPanel").style.right="50vw"
			this.currentSide="left";

		}
	}
	__checkPause(type)
	{
		if(!this.buttonsMap.has(type))
			throw "qwe cant stop type "+type;
		let btn = this.buttonsMap.get(type);
		if(!(btn.pressed < 2))
			throw "asd cant stop type "+type;
		return btn;
	}
	toggle(type)
	{
		let btn = this.__checkPause(type);
		if(btn.pressed)
			this.pause(type);
		else
			this.unpause(type);

	}
	pause(type)
	{
		let btn = this.__checkPause(type);
		btn.pressed = 0;
		btn.elem.classList.remove("Console_TXRX_button_pressed");
	}
	unpause(type)
	{
		let btn = this.__checkPause(type);
		btn.pressed = 1;
		btn.elem.classList.add("Console_TXRX_button_pressed");
	}
	add_log_block(stringParameter,ln,type)
	{
		if(!this.__constructed)
			throw "add_log_block not constructed";
		if(this.flag_hidden)
			return;//do noting, when console closed
		if(this.buttonsMap.get('all').pressed)
			return;//All paused
		if(!this.buttonsMap.has(type))
			throw `add_log_block wrong type: "${type}"`;
		if(!this.buttonsMap.get(type).pressed)
			return;//All paused
		if(typeof(this.id_last_line)==="undefined"||!this.id_last_line)
			throw "no last line"

		let string = "";

		if(typeof stringParameter === 'object')
		{//print_r;
			if(stringParameter instanceof Error)
			{
				//string = `${string.message}<BR>\r\n${string.fileName} ${string.lineNumber}:${string.columnNumber} ${string.stack}`;
				string = stringParameter.message;
			}
			else
				string = JSON.stringify(stringParameter);
		}
		else
			string = stringParameter

		//string = tbr.convert.stringToEntity(string);//if want to prevent html injections

		//if(typeof(this.id_td_data)==="undefined"||!this.id_td_data)
		//    throw "no id_td_data"
		let pre=null;//Надо передавать объёкт, чтобы можно было собирать в лог до инициализации
		if(this.last_add_type !== type||ln)//Создаётся блок, если происходит смена типа
		{
			this.last_add_type = type;
			this.last_add_number++;
			pre = document.createElement('pre');
			//pre.className='div_'+type//div_tx or div_rx
			//alert(type)
			let title = (new Error().stack);

			if(stringParameter instanceof Error)
				title = stringParameter.stack + " <BR> " + title;

			pre.classList.add('Console_TXRX_div_'+type);
			pre.classList.add('console_TXRX_pre_block');
			pre.id='Console_TXRX_pre_'+this.last_add_number
			pre.innerHTML=''
			pre.title = title;
			pre.oncontextmenu=()=>
			{
				if(stringParameter instanceof Error)
					pre.innerHTML = title;//Потому, что error.stack уже включает в себя сообщение об ошибке
				else
					pre.innerHTML += title;
				pre.oncontextmenu=function(){return false;}
			}
			//if(type=='error')
			//	pre.innerHTML=(new Error().stack)
			this.elemPreLast=pre
			this.elems.get("divData").appendChild(pre)//Сама консоль
		}
		//alert("1="+string)
		//let pre_id='Console_TXRX_pre_'+this.last_add_number
		pre=this.elemPreLast;
		let span=this.log_history_obj.add(string,pre)
		//span+=" (string="+string+")"
		//$(this.elemPreLast).append(span)


		this.elemPreLast.appendChild(span);



		//let el=document.getElementById(this.div_id)
		//el.scrollTop = Math.ceil(el.scrollHeight - el.clientHeight);
		this.elems.get("divData").scrollTop=Math.ceil(this.elems.get("divData").scrollHeight-this.elems.get("divData").clientHeight);
		//alert(span +"\n"+string+"\npre_id="+pre_id)
		return span;
	}
	copyToClipboard()
	{
		let text=this.log_history_obj.getAllText()
		copyTextToClipboard(text);
	}
	clear()
	{
		try
		{
			this.add_log_block(" ",false,"log")
			for(let i=0;i<300&&!this.log_history_obj.del_last();i++)
			{

			}
		}
		catch(err){console.error(err)}
	}
}


ConsoleTxRx.setupCSS(`/*top:var(--css-global-spacing);*/

.Console_TXRX_displayNone{
	display: none;
}
.Console_TXRX_displayNoneImportant{
	display: none!important;
}
.class_Console_TXRX_div_all{
    position:fixed;
    right:0;
    left:50vw;
    top:0;
    bottom:0;
    background:#eee;
    z-index:999999;
    display:flex;
    flex-direction: column;
    font-family:Tahoma;
    padding:1vmin;
}
.Console_TXRX_controlsAll {
    position: absolute;
    right: 2%;
    left: 2%;
    top: 1vmin;
    height: 5vmin;
    1border: #000 1px solid;
    1background: yellow;
    box-sizing:border-box;
}
.class_Console_TXRX_controls2{
    position: absolute;
    right: 2%;
    left: 2%;
    top: 7vmin;
    height: 5vmin;
    1border: #000 1px solid;
    1background: yellow;
    box-sizing:border-box;
}
.Console_TXRX_data{
    flex:1;
    border:#000 1px solid;
    1background:blue;
    overflow-y:scroll;
    font-size:2.5vmin;
}
.class_Console_TXRX_input, .Console_TXRX_data{
    font-family:monospace, Lucida Console, Courier New, Terminus, Monaco ;
}
.Console_TXRX_div_tx,.Console_TXRX_div_rx{
    width:100%;
    padding:0.3%;
    margin:0;
    text-indent:1%;
    clear:both;
    box-sizing:border-box;/*А не то появится горизонтальный скролл*/
}
.Console_TXRX_div_tx{/*Стиль принятых сообщений, они объединяются в этот блок, если идут подряд, фиолетовый*/
    background:#afb;
    padding-left:10%;
}
.Console_TXRX_div_tx_even{/*Стиль принятых сообщений, они объединяются в этот блок, если идут подряд, фиолетовый*/
    background:#9ea;
}
.Console_TXRX_div_rx{/*Стиль отправленных сообщений, они объединяются в этот блок, если идут подряд, зелёный*/
    background:#abf;
    float:left;
}
.Console_TXRX_div_rx_even{/*Стиль отправленных сообщений, они объединяются в этот блок, если идут подряд, зелёный*/
    _background:#9ae;
}
.Console_TXRX_div_log{/*Стиль отправленных сообщений, они объединяются в этот блок, если идут подряд, зелёный*/
    background:#abc;
    float:left;
    width:100%;
    clear:both;
}
.Console_TXRX_div_error{/*Стиль отправленных сообщений, они объединяются в этот блок, если идут подряд, зелёный*/
    background:#f00;
    float:left;
    width:100%;
    clear:both;
}
.Console_TXRX_div_text_last_line{
    clear:both;
    position:page;
    padding:1%;
}
.class_Console_TXRX_input, .Console_TXRX_button{
    margin:0.4vmin;
    border-radius:1vmin;
}
.class_Console_TXRX_input{
    font-size:2.5vmin;
    vertical-align:1vh;/*Почему-то сдвинуто вниз*/
    width:100%;
    border:#000 1px solid;
    box-sizing:border-box;/*Shtobi ne vilezalo za ramky div*/
    padding:0;
}
.Console_TXRX_button{
    font-size:3.5vmin;
    padding:0 1vh;
    text-decoration:none;
    border:#777 1px solid;
    display:inline-block;/*block vertial align middle, inline-block - bottom, why?*/
    cursor:pointer;
    background-image: linear-gradient(to top, #999, #eee);
    box-sizing:border-box;
    white-space:nowrap;
    box-shadow:0.2vmin 0.2vmin #777;
    margin-bottom:0.4vmin;
    margin-right:0.4vmin;
    margin-left:0;
    margin-top:0;
}
.class_Console_TXRX_button_unhide{
    position:fixed;
    right:1vmin;
    top:1vmin;
    opacity:0.1;
    z-index:999999;
}
.class_Console_TXRX_button_unhide:hover{
    opacity:1;
}
.Console_TXRX_button_pressed,.Console_TXRX_button:hover{
    background-image: linear-gradient(to top, #eee , #999);
    box-shadow: -0.2vmin -0.2vmin rgba(0,0,0,0);
    margin-top:0.4vmin;
    margin-bottom:0;
    margin-left:0.4vmin;
    margin-right:0;

}
.Console_TXRX_button_copy{
    _margin-left:10%;
}
.console_TXRX_pre_block{
    _overflow-wrap: break-word;
    _word-wrap:break-word!important;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;
    margin:0;
}
.Console_TXRX_div_text_last_line{
    1background:blue;
}`);

function LogQueueDOM()
{//История добавлений, чтобы можно было удалить лишнее при переполнении
	//Сама не связана с HTML. Только хранит DOM объекты в очереди, при переполнении стирает старое.
	return {
		MAX_COUNT: 150,//Сколько максимум сообщений разрешается хринить в логе, чтобы не перегружать оперативку
		MAX_LENGTH: 1200,//Сколько максимум байт разрешается хринить в логе, чтобы не перегружать оперативку
		count: 0,//индекс элемента, который будет добавлен
		summ_length: 0,
		delete_index: 0,//инедкс элемента, который можно удалить как первый
		even: 0,//Чтобы по-очереди красить то в тёмный, то в светлый
		data: {},
		getAllText:function()
		{
			let s=""
			for(let i in this.data)
			{
				let obj=this.data[i]
				let id=obj.id
				let el=document.getElementById("span_"+id)
				if(typeof(el)=="object")
					s+=el.innerHTML+"\r\n"
			}
			return s
		},
		del_last: function ()
		{
			try {
				let indexStamp = this.data["index_" + this.delete_index]
				this.summ_length -= indexStamp.length
				let parent_id_cur = indexStamp.parent_obj//.id
				let parent_id_next = this.data["index_" + (this.delete_index + 1)].parent_obj//.id
				//document.getElementById(indexStamp.parent_id).removeChild(document.getElementById('span_' + this.delete_index))
				indexStamp.parent_obj.removeChild(document.getElementById('span_' + this.delete_index))
				if (parent_id_cur.id !== parent_id_next.id) {//Если контейнер pre (tx или rx) остался пустым, удаляем его
					//alert("AAA"+$(document.getElementById("parent_div")).html())
					//document.getElementById("parent_div").removeChild(document.getElementById(parent_id_cur))
					// alert("delete pre = "+parent_id_cur)
					//$("#"+parent_id_cur.id).remove()

					//$(parent_id_cur).remove()
					parent_id_cur.remove();//TODO 2020.08

					//alert("BBB")
					delete this.data["index_" + this.delete_index]
					//alert("CCC")
				}
			}
			catch (err) {
				return 1;
			}
			this.delete_index++;
			return 0;
		},
		//add:function(string,parent_pre_id)
		add:function(string,parent_obj)
		{//Возвращает созданный элемент как DOM (span)
			//let parent_obj = document.getElementById(parent_pre_id)//например, parent_id="pre_4"
			if(!parent_obj)
				return "Console_TXRX error 123"
			let span = document.createElement('span');
			span.innerHTML = string//+"(c="+this.count+";di="+this.delete_index+")"
			span.id = "span_" + this.count
			span.classList.add("LogQueueDOM_span");
			this.even = (this.even + 1) % 2
			if (parent_obj.className === "Console_TXRX_div_rx" && this.even)
				span.style.background = "#bbf"
			if (parent_obj.className === "Console_TXRX_div_rx" && !this.even)
				span.style.background = "#aae"

			if (parent_obj.className === "Console_TXRX_div_tx" && this.even)
				span.style.background = "#bfb"
			if (parent_obj.className === "Console_TXRX_div_tx" && !this.even)
				span.style.background = "#aea"

			if (parent_obj.className === "Console_TXRX_div_log" && this.even)
				span.style.background = "#999"
			if (parent_obj.className === "Console_TXRX_div_log" && !this.even)
				span.style.background = "#bbb"

			if (parent_obj.className === "Console_TXRX_div_error" && this.even)
				span.style.background = "#f00"
			if (parent_obj.className === "Console_TXRX_div_error" && !this.even)
				span.style.background = "#e11"


			this.data["index_" + this.count] = {id: this.count, length: length, parent_obj: parent_obj}
			this.summ_length += length
			this.count++;

			//Удаляем лишнее, чтобы не переполнять оперативку
			for (let limiter = 0; limiter < 5 && (this.count - this.delete_index > this.MAX_COUNT || this.summ_length > this.MAX_LENGTH); limiter++) {
				this.del_last()
			}
			return span
		}
	}
}