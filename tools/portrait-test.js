const assert=require('assert'),fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.join(__dirname,'..'),box=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'data/writers.js'),'utf8'),box);
const writers=box.QUIZ_WRITERS;
assert.equal(writers.length,50);
assert.equal(new Set(writers.map(w=>w.portrait)).size,50);
for(const w of writers){
 assert.equal(w.portrait,'assets/writers/'+w.id+'.webp');
 const image=fs.readFileSync(path.join(root,w.portrait));
 assert.equal(image.toString('ascii',0,4),'RIFF',w.name);
 assert.equal(image.toString('ascii',8,12),'WEBP',w.name);
}
// Run the actual result renderer with lightweight DOM elements to check all profiles.
class Element{
 constructor(tag='div',cls='',text=''){this.tagName=tag.toUpperCase();this.className=cls;this.textContent=text;this.children=[];this.style={};this.dataset={};this.classes=new Set();this.classList={toggle:(c,on)=>on?this.classes.add(c):this.classes.delete(c),remove:c=>this.classes.delete(c)};}
 set innerHTML(value){this.children=[];}get innerHTML(){return '';}
 append(...children){children.forEach(c=>this.appendChild(c));}
 appendChild(child){child.parent=this;this.children.push(child);return child;}
 remove(){if(this.parent)this.parent.children=this.parent.children.filter(c=>c!==this);}
}
const nodes=new Map();
const context={
 $:id=>{if(!nodes.has(id))nodes.set(id,new Element());return nodes.get(id);},
 el:(tag,cls,text)=>new Element(tag,cls,text),
 styleOf:()=>({}),colorOf:w=>w.color,shade:()=> '#222222',APPROACHES:{},
 model:{writers:[]},mine:null,window:{scrollTo(){}},document:{createTextNode:t=>new Element('span','',t)},requestAnimationFrame(){}
};
vm.createContext(context);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const start=html.indexOf('  function renderResult(w, res) {');
const end=html.indexOf("  $('startShort').onclick",start);
assert(start>=0&&end>start);
vm.runInContext(html.slice(start,end),context);
for(const writer of writers){
 context.renderResult(writer,null);
 const top=nodes.get('rtop');
 const slot=nodes.get('writerPortrait');
 const portraits=slot.children.filter(c=>c.tagName==='IMG');
 assert.equal(top.children.filter(c=>c.tagName==='IMG').length,0);
 assert.equal(portraits.length,1,writer.name);
 assert.equal(portraits[0].src,writer.portrait);
 assert.equal(portraits[0].alt,'Chibi portrait of '+writer.name);
 assert.equal(slot.hidden,false);
 portraits[0].onerror();
 assert.equal(slot.hidden,true);
 assert.equal(slot.children.filter(c=>c.tagName==='IMG').length,0);
}
context.renderResult({name:'Legacy writer'},null);
assert.equal(nodes.get('writerPortrait').hidden,true);
assert.equal(nodes.get('writerPortrait').children.length,0);
assert(html.indexOf('id="writerPortrait"')>html.indexOf('id="rtop"'));
assert(html.includes('justify-content:center'));
assert(!html.includes('chips')&&!html.includes('APPROACHES'));
assert(html.includes('@media(max-width:560px)'));
assert(!html.includes('mixnote')&&!html.includes('match-detail'));
console.log('PASS: 50 portrait assets, matching writer paths, profile switching, missing-image fallback and mobile layout rules.');
