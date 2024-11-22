"use strict";exports.id=4500,exports.ids=[4500],exports.modules={9475:(e,t,a)=>{function populateCommonDb(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}a.d(t,{A:()=>populateCommonDb}),(0,a(8554).eW)(populateCommonDb,"populateCommonDb")},4500:(e,t,a)=>{a.d(t,{diagram:()=>W});var i=a(9475),l=a(5968),r=a(4841),o=a(8554),s=a(9290),n=a(4665),c=o.vZ.pie,p={sections:new Map,showData:!1,config:c},d=p.sections,u=p.showData,g=structuredClone(c),m=(0,o.eW)(()=>structuredClone(g),"getConfig"),x=(0,o.eW)(()=>{d=new Map,u=p.showData,(0,o.ZH)()},"clear"),f=(0,o.eW)(({label:e,value:t})=>{d.has(e)||(d.set(e,t),o.cM.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),h=(0,o.eW)(()=>d,"getSections"),D=(0,o.eW)(e=>{u=e},"setShowData"),w=(0,o.eW)(()=>u,"getShowData"),S={getConfig:m,clear:x,setDiagramTitle:o.g2,getDiagramTitle:o.Kr,setAccTitle:o.GN,getAccTitle:o.eu,setAccDescription:o.U$,getAccDescription:o.Mx,addSection:f,getSections:h,setShowData:D,getShowData:w},T=(0,o.eW)((e,t)=>{(0,i.A)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),$={parse:(0,o.eW)(async e=>{let t=await (0,s.Qc)("pie",e);o.cM.debug(t),T(t,S)},"parse")},y=(0,o.eW)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),C=(0,o.eW)(e=>{let t=[...e.entries()].map(e=>({label:e[0],value:e[1]})).sort((e,t)=>t.value-e.value),a=(0,n.ve8)().value(e=>e.value);return a(t)},"createPieArcs"),W={parser:$,db:S,renderer:{draw:(0,o.eW)((e,t,a,i)=>{o.cM.debug("rendering pie chart\n"+e);let s=i.db,c=(0,o.nV)(),p=(0,l.Rb)(s.getConfig(),c.pie),d=(0,r.P)(t),u=d.append("g");u.attr("transform","translate(225,225)");let{themeVariables:g}=c,[m]=(0,l.VG)(g.pieOuterStrokeWidth);m??=2;let x=p.textPosition,f=(0,n.Nb1)().innerRadius(0).outerRadius(185),h=(0,n.Nb1)().innerRadius(185*x).outerRadius(185*x);u.append("circle").attr("cx",0).attr("cy",0).attr("r",185+m/2).attr("class","pieOuterCircle");let D=s.getSections(),w=C(D),S=[g.pie1,g.pie2,g.pie3,g.pie4,g.pie5,g.pie6,g.pie7,g.pie8,g.pie9,g.pie10,g.pie11,g.pie12],T=(0,n.PKp)(S);u.selectAll("mySlices").data(w).enter().append("path").attr("d",f).attr("fill",e=>T(e.data.label)).attr("class","pieCircle");let $=0;D.forEach(e=>{$+=e}),u.selectAll("mySlices").data(w).enter().append("text").text(e=>(e.data.value/$*100).toFixed(0)+"%").attr("transform",e=>"translate("+h.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),u.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");let y=u.selectAll(".legend").data(T.domain()).enter().append("g").attr("class","legend").attr("transform",(e,t)=>{let a=22*T.domain().length/2;return"translate(216,"+(22*t-a)+")"});y.append("rect").attr("width",18).attr("height",18).style("fill",T).style("stroke",T),y.data(w).append("text").attr("x",22).attr("y",14).text(e=>{let{label:t,value:a}=e.data;return s.getShowData()?`${t} [${a}]`:t});let W=Math.max(...y.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0)),b=512+W;d.attr("viewBox",`0 0 ${b} 450`),(0,o.v2)(d,450,b,p.useMaxWidth)},"draw")},styles:y}}};