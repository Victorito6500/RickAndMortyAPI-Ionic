(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{elQZ:function(t,e,n){"use strict";n.r(e),n.d(e,"CharacterSearchPageModule",function(){return h});var c=n("ofXK"),a=n("3Pt+"),r=n("TEn/"),o=n("tyNb"),i=n("fXoL"),s=n("U1g7");const b=function(t,e,n){return{alive:t,dead:e,unknown:n}};function l(t,e){if(1&t){const t=i.Lb();i.Kb(0,"ion-col",6),i.Kb(1,"ion-card",7),i.Sb("click",function(){i.cc(t);const n=e.$implicit;return i.Ub(2).characterDetails(n.id)}),i.Ib(2,"ion-img",8),i.Kb(3,"ion-card-content"),i.Kb(4,"ion-card-title"),i.hc(5),i.Jb(),i.Kb(6,"ion-card-subtitle",9),i.Ib(7,"ion-icon",10),i.hc(8),i.Jb(),i.Jb(),i.Jb(),i.Jb()}if(2&t){const t=e.$implicit;i.xb(2),i.Xb("src",t.image),i.xb(3),i.jc(" ",t.name," "),i.xb(2),i.Xb("ngClass",i.Zb(5,b,"Alive"===t.status,"Dead"===t.status,"unknown"===t.status)),i.xb(1),i.kc(" ",t.status," - ",t.species," ")}}function u(t,e){if(1&t&&(i.Kb(0,"ion-row",4),i.fc(1,l,9,9,"ion-col",5),i.Jb()),2&t){const t=i.Ub();i.xb(1),i.Xb("ngForOf",t.charactersFiltered)}}const d=[{path:"",component:(()=>{class t{constructor(t,e,n,c){this.route=t,this._characterService=e,this.navCtrl=n,this.router=c}ngOnInit(){this.route.params.subscribe(t=>{let e;this.textoBuscado=t.texto,this._characterService.getCharacters().subscribe(n=>{e=n.results,this.charactersFiltered=this.getCharacterFiltered(t.texto,e)})})}characterDetails(t){this.router.navigate(["/character-details",t])}volver(){this.navCtrl.back()}getCharacterFiltered(t,e){t=t.toLowerCase();let n=[];return e.forEach(e=>{let c=e.name.toLowerCase(),a=e.species.toLowerCase();(c.indexOf(t)>=0||a.indexOf(t)>=0)&&n.push(e)}),n}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(o.a),i.Hb(s.a),i.Hb(r.y),i.Hb(o.g))},t.\u0275cmp=i.Bb({type:t,selectors:[["app-character-search"]],decls:8,vars:2,consts:[[1,"animate__animated","animate__fadeIn"],["name","arrow-back-circle",1,"back",3,"click"],[2,"margin-left","20px"],["class","fondo",4,"ngIf"],[1,"fondo"],["size","6","class","animate__animated animate__pulse",4,"ngFor","ngForOf"],["size","6",1,"animate__animated","animate__pulse"],[3,"click"],[3,"src"],[1,"mt-2"],["name","ellipse",3,"ngClass"]],template:function(t,e){1&t&&(i.Kb(0,"ion-header",0),i.Kb(1,"ion-toolbar"),i.Kb(2,"ion-item"),i.Kb(3,"ion-icon",1),i.Sb("click",function(){return e.volver()}),i.Jb(),i.Kb(4,"span",2),i.hc(5),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Kb(6,"ion-content",0),i.fc(7,u,2,1,"ion-row",3),i.Jb()),2&t&&(i.xb(5),i.jc("Results of:\xa0 ' ",e.textoBuscado," '"),i.xb(2),i.Xb("ngIf",e.charactersFiltered))},directives:[r.i,r.v,r.l,r.j,r.h,c.j,r.p,c.i,r.g,r.b,r.k,r.c,r.f,r.e,c.h],styles:[".back[_ngcontent-%COMP%]{color:#adff2f;font-size:35px}.alive[_ngcontent-%COMP%]{color:green}.dead[_ngcontent-%COMP%]{color:red}.unknown[_ngcontent-%COMP%]{color:grey}.fondo[_ngcontent-%COMP%]{background-image:url(bg.bad429ba220e55257cd6.jpg);background-size:cover;background-repeat:repeat;height:100vh}ion-col[_ngcontent-%COMP%]{animation-duration:.5s}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},imports:[[o.j.forChild(d)],o.j]}),t})(),h=(()=>{class t{}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},imports:[[c.b,a.a,r.w,f]]}),t})()}}]);