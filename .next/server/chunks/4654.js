"use strict";exports.id=4654,exports.ids=[4654],exports.modules={4654:(t,e,i)=>{i.d(e,{diagram:()=>Y});var n=i(5311),s=i(8554),r=i(4665),a=function(){var t=(0,s.eW)(function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},"o"),e=[6,8,10,11,12,14,16,17,18],i=[1,9],n=[1,10],r=[1,11],a=[1,12],l=[1,13],o=[1,14],c={trace:(0,s.eW)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:(0,s.eW)(function(t,e,i,n,s,r,a){var l=r.length-1;switch(s){case 1:return r[l-1];case 2:case 6:case 7:this.$=[];break;case 3:r[l-1].push(r[l]),this.$=r[l-1];break;case 4:case 5:this.$=r[l];break;case 8:n.setDiagramTitle(r[l].substr(6)),this.$=r[l].substr(6);break;case 9:this.$=r[l].trim(),n.setAccTitle(this.$);break;case 10:case 11:this.$=r[l].trim(),n.setAccDescription(this.$);break;case 12:n.addSection(r[l].substr(8)),this.$=r[l].substr(8);break;case 13:n.addTask(r[l-1],r[l]),this.$="task"}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:i,12:n,14:r,16:a,17:l,18:o},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:15,11:i,12:n,14:r,16:a,17:l,18:o},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,16]},{15:[1,17]},t(e,[2,11]),t(e,[2,12]),{19:[1,18]},t(e,[2,4]),t(e,[2,9]),t(e,[2,10]),t(e,[2,13])],defaultActions:{},parseError:(0,s.eW)(function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},"parseError"),parse:(0,s.eW)(function(t){var e=this,i=[0],n=[],r=[null],a=[],l=this.table,o="",c=0,h=0,u=0,y=a.slice.call(arguments,1),p=Object.create(this.lexer),d={yy:{}};for(var f in this.yy)Object.prototype.hasOwnProperty.call(this.yy,f)&&(d.yy[f]=this.yy[f]);p.setInput(t,d.yy),d.yy.lexer=p,d.yy.parser=this,void 0===p.yylloc&&(p.yylloc={});var g=p.yylloc;a.push(g);var m=p.options&&p.options.ranges;function lex(){var t;return"number"!=typeof(t=n.pop()||p.lex()||1)&&(t instanceof Array&&(t=(n=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,s.eW)(function(t){i.length=i.length-2*t,r.length=r.length-t,a.length=a.length-t},"popStack"),(0,s.eW)(lex,"lex");for(var x,k,b,_,v,W,w,$,T,M={};;){if(b=i[i.length-1],this.defaultActions[b]?_=this.defaultActions[b]:(null==x&&(x=lex()),_=l[b]&&l[b][x]),void 0===_||!_.length||!_[0]){var P="";for(W in T=[],l[b])this.terminals_[W]&&W>2&&T.push("'"+this.terminals_[W]+"'");P=p.showPosition?"Parse error on line "+(c+1)+":\n"+p.showPosition()+"\nExpecting "+T.join(", ")+", got '"+(this.terminals_[x]||x)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==x?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(P,{text:p.match,token:this.terminals_[x]||x,line:p.yylineno,loc:g,expected:T})}if(_[0]instanceof Array&&_.length>1)throw Error("Parse Error: multiple actions possible at state: "+b+", token: "+x);switch(_[0]){case 1:i.push(x),r.push(p.yytext),a.push(p.yylloc),i.push(_[1]),x=null,k?(x=k,k=null):(h=p.yyleng,o=p.yytext,c=p.yylineno,g=p.yylloc,u>0&&u--);break;case 2:if(w=this.productions_[_[1]][1],M.$=r[r.length-w],M._$={first_line:a[a.length-(w||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(w||1)].first_column,last_column:a[a.length-1].last_column},m&&(M._$.range=[a[a.length-(w||1)].range[0],a[a.length-1].range[1]]),void 0!==(v=this.performAction.apply(M,[o,h,c,d.yy,_[1],r,a].concat(y))))return v;w&&(i=i.slice(0,-1*w*2),r=r.slice(0,-1*w),a=a.slice(0,-1*w)),i.push(this.productions_[_[1]][0]),r.push(M.$),a.push(M._$),$=l[i[i.length-2]][i[i.length-1]],i.push($);break;case 3:return!0}}return!0},"parse")},h={EOF:1,parseError:(0,s.eW)(function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},"parseError"),setInput:(0,s.eW)(function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,s.eW)(function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:(0,s.eW)(function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},"unput"),more:(0,s.eW)(function(){return this._more=!0,this},"more"),reject:(0,s.eW)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,s.eW)(function(t){this.unput(this.match.slice(t))},"less"),pastInput:(0,s.eW)(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,s.eW)(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,s.eW)(function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},"showPosition"),test_match:(0,s.eW)(function(t,e){var i,n,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var r in s)this[r]=s[r];return!1},"test_match"),next:(0,s.eW)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,n,s=this._currentRules(),r=0;r<s.length;r++)if((i=this._input.match(this.rules[s[r]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,s[r])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,s.eW)(function(){return this.next()||this.lex()},"lex"),begin:(0,s.eW)(function(t){this.conditionStack.push(t)},"begin"),popState:(0,s.eW)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,s.eW)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,s.eW)(function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},"topState"),pushState:(0,s.eW)(function(t){this.begin(t)},"pushState"),stateStackSize:(0,s.eW)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,s.eW)(function(t,e,i,n){switch(i){case 0:case 1:case 3:case 4:break;case 2:return 10;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}},"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}};function Parser(){this.yy={}}return c.lexer=h,(0,s.eW)(Parser,"Parser"),Parser.prototype=c,c.Parser=Parser,new Parser}();a.parser=a;var l="",o=[],c=[],h=[],u=(0,s.eW)(function(){o.length=0,c.length=0,l="",h.length=0,(0,s.ZH)()},"clear"),y=(0,s.eW)(function(t){l=t,o.push(t)},"addSection"),p=(0,s.eW)(function(){return o},"getSections"),d=(0,s.eW)(function(){let t=x(),e=0;for(;!t&&e<100;)t=x(),e++;return c.push(...h),c},"getTasks"),f=(0,s.eW)(function(){let t=[];c.forEach(e=>{e.people&&t.push(...e.people)});let e=new Set(t);return[...e].sort()},"updateActors"),g=(0,s.eW)(function(t,e){let i=e.substr(1).split(":"),n=0,s=[];1===i.length?(n=Number(i[0]),s=[]):(n=Number(i[0]),s=i[1].split(","));let r=s.map(t=>t.trim()),a={section:l,type:l,people:r,task:t,score:n};h.push(a)},"addTask"),m=(0,s.eW)(function(t){let e={section:l,type:l,description:t,task:t,classes:[]};c.push(e)},"addTaskOrg"),x=(0,s.eW)(function(){let t=(0,s.eW)(function(t){return h[t].processed},"compileTask"),e=!0;for(let[i,n]of h.entries())t(i),e=e&&n.processed;return e},"compileTasks"),k=(0,s.eW)(function(){return f()},"getActors"),b={getConfig:(0,s.eW)(()=>(0,s.nV)().journey,"getConfig"),clear:u,setDiagramTitle:s.g2,getDiagramTitle:s.Kr,setAccTitle:s.GN,getAccTitle:s.eu,setAccDescription:s.U$,getAccDescription:s.Mx,addSection:y,getSections:p,getTasks:d,addTask:g,addTaskOrg:m,getActors:k},_=(0,s.eW)(t=>`.label {
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0?`fill: ${t.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0?`fill: ${t.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0?`fill: ${t.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0?`fill: ${t.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0?`fill: ${t.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0?`fill: ${t.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0?`fill: ${t.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0?`fill: ${t.fillType7}`:""};
  }

  .actor-0 {
    ${t.actor0?`fill: ${t.actor0}`:""};
  }
  .actor-1 {
    ${t.actor1?`fill: ${t.actor1}`:""};
  }
  .actor-2 {
    ${t.actor2?`fill: ${t.actor2}`:""};
  }
  .actor-3 {
    ${t.actor3?`fill: ${t.actor3}`:""};
  }
  .actor-4 {
    ${t.actor4?`fill: ${t.actor4}`:""};
  }
  .actor-5 {
    ${t.actor5?`fill: ${t.actor5}`:""};
  }
`,"getStyles"),v=(0,s.eW)(function(t,e){return(0,n.Mu)(t,e)},"drawRect"),W=(0,s.eW)(function(t,e){let i=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),n=t.append("g");function smile(t){let i=(0,r.Nb1)().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(15/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}function sad(t){let i=(0,r.Nb1)().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(15/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}function ambivalent(t){t.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return n.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),n.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),(0,s.eW)(smile,"smile"),(0,s.eW)(sad,"sad"),(0,s.eW)(ambivalent,"ambivalent"),e.score>3?smile(n):e.score<3?sad(n):ambivalent(n),i},"drawFace"),w=(0,s.eW)(function(t,e){let i=t.append("circle");return i.attr("cx",e.cx),i.attr("cy",e.cy),i.attr("class","actor-"+e.pos),i.attr("fill",e.fill),i.attr("stroke",e.stroke),i.attr("r",e.r),void 0!==i.class&&i.attr("class",i.class),void 0!==e.title&&i.append("title").text(e.title),i},"drawCircle"),$=(0,s.eW)(function(t,e){return(0,n.yU)(t,e)},"drawText"),T=(0,s.eW)(function(t,e){function genPoints(t,e,i,n,s){return t+","+e+" "+(t+i)+","+e+" "+(t+i)+","+(e+n-s)+" "+(t+i-1.2*s)+","+(e+n)+" "+t+","+(e+n)}(0,s.eW)(genPoints,"genPoints");let i=t.append("polygon");i.attr("points",genPoints(e.x,e.y,50,20,7)),i.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,$(t,e)},"drawLabel"),M=(0,s.eW)(function(t,e,i){let s=t.append("g"),r=(0,n.kc)();r.x=e.x,r.y=e.y,r.fill=e.fill,r.width=i.width*e.taskCount+i.diagramMarginX*(e.taskCount-1),r.height=i.height,r.class="journey-section section-type-"+e.num,r.rx=3,r.ry=3,v(s,r),E(i)(e.text,s,r.x,r.y,r.width,r.height,{class:"journey-section section-type-"+e.num},i,e.colour)},"drawSection"),P=-1,A=(0,s.eW)(function(t,e,i){let s=e.x+i.width/2,r=t.append("g");P++,r.append("line").attr("id","task"+P).attr("x1",s).attr("y1",e.y).attr("x2",s).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),W(r,{cx:s,cy:300+(5-e.score)*30,score:e.score});let a=(0,n.kc)();a.x=e.x,a.y=e.y,a.fill=e.fill,a.width=i.width,a.height=i.height,a.class="task task-type-"+e.num,a.rx=3,a.ry=3,v(r,a);let l=e.x+14;e.people.forEach(t=>{let i=e.actors[t].color,n={cx:l,cy:e.y,r:7,fill:i,stroke:"#000",title:t,pos:e.actors[t].position};w(r,n),l+=10}),E(i)(e.task,r,a.x,a.y,a.width,a.height,{class:"task"},i,e.colour)},"drawTask"),S=(0,s.eW)(function(t,e){(0,n.O)(t,e)},"drawBackgroundRect"),E=function(){function byText(t,e,i,n,s,r,a,l){let o=e.append("text").attr("x",i+s/2).attr("y",n+r/2+5).style("font-color",l).style("text-anchor","middle").text(t);_setTextAttrs(o,a)}function byTspan(t,e,i,n,s,r,a,l,o){let{taskFontSize:c,taskFontFamily:h}=l,u=t.split(/<br\s*\/?>/gi);for(let t=0;t<u.length;t++){let l=t*c-c*(u.length-1)/2,y=e.append("text").attr("x",i+s/2).attr("y",n).attr("fill",o).style("text-anchor","middle").style("font-size",c).style("font-family",h);y.append("tspan").attr("x",i+s/2).attr("dy",l).text(u[t]),y.attr("y",n+r/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),_setTextAttrs(y,a)}}function byFo(t,e,i,n,s,r,a,l){let o=e.append("switch"),c=o.append("foreignObject").attr("x",i).attr("y",n).attr("width",s).attr("height",r).attr("position","fixed"),h=c.append("xhtml:div").style("display","table").style("height","100%").style("width","100%");h.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),byTspan(t,o,i,n,s,r,a,l),_setTextAttrs(h,a)}function _setTextAttrs(t,e){for(let i in e)i in e&&t.attr(i,e[i])}return(0,s.eW)(byText,"byText"),(0,s.eW)(byTspan,"byTspan"),(0,s.eW)(byFo,"byFo"),(0,s.eW)(_setTextAttrs,"_setTextAttrs"),function(t){return"fo"===t.textPlacement?byFo:"old"===t.textPlacement?byText:byTspan}}(),I={drawRect:v,drawCircle:w,drawSection:M,drawText:$,drawLabel:T,drawTask:A,drawBackgroundRect:S,initGraphics:(0,s.eW)(function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},"initGraphics")},C=(0,s.eW)(function(t){let e=Object.keys(t);e.forEach(function(e){j[e]=t[e]})},"setConf"),V={};function drawActorLegend(t){let e=(0,s.nV)().journey,i=60;Object.keys(V).forEach(n=>{let s=V[n].color,r={cx:20,cy:i,r:7,fill:s,stroke:"#000",pos:V[n].position};I.drawCircle(t,r);let a={x:40,y:i+7,fill:"#666",text:n,textMargin:5|e.boxTextMargin};I.drawText(t,a),i+=20})}(0,s.eW)(drawActorLegend,"drawActorLegend");var j=(0,s.nV)().journey,F=j.leftMargin,L=(0,s.eW)(function(t,e,i,n){let a;let l=(0,s.nV)().journey,o=(0,s.nV)().securityLevel;"sandbox"===o&&(a=(0,r.Ys)("#i"+e));let c="sandbox"===o?(0,r.Ys)(a.nodes()[0].contentDocument.body):(0,r.Ys)("body");N.init();let h=c.select("#"+e);I.initGraphics(h);let u=n.db.getTasks(),y=n.db.getDiagramTitle(),p=n.db.getActors();for(let t in V)delete V[t];let d=0;p.forEach(t=>{V[t]={color:l.actorColours[d%l.actorColours.length],position:d},d++}),drawActorLegend(h),N.insert(0,0,F,50*Object.keys(V).length),D(h,u,0);let f=N.getBounds();y&&h.append("text").text(y).attr("x",F).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);let g=f.stopy-f.starty+2*l.diagramMarginY,m=F+f.stopx+2*l.diagramMarginX;(0,s.v2)(h,g,m,l.useMaxWidth),h.append("line").attr("x1",F).attr("y1",4*l.height).attr("x2",m-F-4).attr("y2",4*l.height).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");let x=y?70:0;h.attr("viewBox",`${f.startx} -25 ${m} ${g+x}`),h.attr("preserveAspectRatio","xMinYMin meet"),h.attr("height",g+x+25)},"draw"),N={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:(0,s.eW)(function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},"init"),updateVal:(0,s.eW)(function(t,e,i,n){void 0===t[e]?t[e]=i:t[e]=n(i,t[e])},"updateVal"),updateBounds:(0,s.eW)(function(t,e,i,n){let r=(0,s.nV)().journey,a=this,l=0;function updateFn(o){return(0,s.eW)(function(s){l++;let c=a.sequenceItems.length-l+1;a.updateVal(s,"starty",e-c*r.boxMargin,Math.min),a.updateVal(s,"stopy",n+c*r.boxMargin,Math.max),a.updateVal(N.data,"startx",t-c*r.boxMargin,Math.min),a.updateVal(N.data,"stopx",i+c*r.boxMargin,Math.max),"activation"!==o&&(a.updateVal(s,"startx",t-c*r.boxMargin,Math.min),a.updateVal(s,"stopx",i+c*r.boxMargin,Math.max),a.updateVal(N.data,"starty",e-c*r.boxMargin,Math.min),a.updateVal(N.data,"stopy",n+c*r.boxMargin,Math.max))},"updateItemBounds")}(0,s.eW)(updateFn,"updateFn"),this.sequenceItems.forEach(updateFn())},"updateBounds"),insert:(0,s.eW)(function(t,e,i,n){let s=Math.min(t,i),r=Math.max(t,i),a=Math.min(e,n),l=Math.max(e,n);this.updateVal(N.data,"startx",s,Math.min),this.updateVal(N.data,"starty",a,Math.min),this.updateVal(N.data,"stopx",r,Math.max),this.updateVal(N.data,"stopy",l,Math.max),this.updateBounds(s,a,r,l)},"insert"),bumpVerticalPos:(0,s.eW)(function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},"bumpVerticalPos"),getVerticalPos:(0,s.eW)(function(){return this.verticalPos},"getVerticalPos"),getBounds:(0,s.eW)(function(){return this.data},"getBounds")},O=j.sectionFills,B=j.sectionColours,D=(0,s.eW)(function(t,e,i){let n=(0,s.nV)().journey,r="",a=2*n.height+n.diagramMarginY,l=i+a,o=0,c="#CCC",h="black",u=0;for(let[i,s]of e.entries()){if(r!==s.section){c=O[o%O.length],u=o%O.length,h=B[o%B.length];let a=0,l=s.section;for(let t=i;t<e.length;t++)if(e[t].section==l)a+=1;else break;let y={x:i*n.taskMargin+i*n.width+F,y:50,text:s.section,fill:c,num:u,colour:h,taskCount:a};I.drawSection(t,y,n),r=s.section,o++}let a=s.people.reduce((t,e)=>(V[e]&&(t[e]=V[e]),t),{});s.x=i*n.taskMargin+i*n.width+F,s.y=l,s.width=n.diagramMarginX,s.height=n.diagramMarginY,s.colour=h,s.fill=c,s.num=u,s.actors=a,I.drawTask(t,s,n),N.insert(s.x,s.y,s.x+s.width+n.taskMargin,450)}},"drawTasks"),R={setConf:C,draw:L},Y={parser:a,db:b,renderer:R,styles:_,init:(0,s.eW)(t=>{R.setConf(t.journey),b.clear()},"init")}}};