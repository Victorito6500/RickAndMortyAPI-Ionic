(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{ee8w:function(n,t,e){"use strict";e.r(t),e.d(t,"LocationDetailsPageModule",function(){return _});var i=e("ofXK"),o=e("3Pt+"),c=e("TEn/"),a=e("tyNb"),r=e("fXoL"),s=e("P12i"),b=e("U1g7");function l(n,t){if(1&n){const n=r.Lb();r.Kb(0,"ion-col",5),r.Sb("click",function(){r.ec(n);const e=t.$implicit;return r.Ub(2).residentDetails(e.id)}),r.Ib(1,"ion-img",6),r.Jb()}if(2&n){const n=t.$implicit;r.xb(1),r.Zb("src",n.image)}}function d(n,t){if(1&n&&(r.Kb(0,"ion-row"),r.hc(1,l,2,1,"ion-col",4),r.Jb()),2&n){const n=r.Ub();r.xb(1),r.Zb("ngForOf",n.residents)}}function u(n,t){1&n&&r.jc(0,"Unknown")}let f=(()=>{class n{constructor(n,t){this._characterService=n,this.router=t}ngOnInit(){this.residents=[],this.location.residents.forEach(n=>{this.getResident(n)})}characterDetails(n){this.router.navigate(["character-details",n])}residentDetails(n){this.router.navigate(["character-details",n])}getResident(n){this._characterService.getCharacterByURL(n).subscribe(n=>{this.residents.push(n)})}}return n.\u0275fac=function(t){return new(t||n)(r.Hb(b.a),r.Hb(a.g))},n.\u0275cmp=r.Bb({type:n,selectors:[["app-location-card-detail"]],inputs:{location:"location"},decls:13,vars:5,consts:[[1,"animate__animated","animate__zoomIn"],[1,"titulo"],[4,"ngIf","ngIfElse"],["noResidents",""],["size","3",3,"click",4,"ngFor","ngForOf"],["size","3",3,"click"],[3,"src"]],template:function(n,t){if(1&n&&(r.Kb(0,"ion-card",0),r.Kb(1,"ion-card-header"),r.Kb(2,"ion-card-title",1),r.jc(3),r.Jb(),r.Jb(),r.Kb(4,"ion-card-content"),r.Kb(5,"p"),r.jc(6),r.Jb(),r.Ib(7,"br"),r.Kb(8,"p"),r.jc(9,"Residents:"),r.Jb(),r.hc(10,d,2,1,"ion-row",2),r.hc(11,u,1,0,"ng-template",null,3,r.ic),r.Jb(),r.Jb()),2&n){const n=r.dc(12);r.xb(3),r.mc("",t.location.name," - ",t.location.type,""),r.xb(3),r.lc("Dimension: ",t.location.dimension,""),r.xb(4),r.Zb("ngIf",t.residents)("ngIfElse",n)}},directives:[c.c,c.e,c.g,c.d,i.k,c.q,i.j,c.h,c.l],styles:[".titulo[_ngcontent-%COMP%]{text-align:center;font-size:30px;margin-bottom:1rem}"]}),n})();function p(n,t){if(1&n&&(r.Kb(0,"ion-content",0),r.Kb(1,"ion-row",3),r.Kb(2,"ion-col"),r.Ib(3,"app-location-card-detail",4),r.Jb(),r.Jb(),r.Jb()),2&n){const n=t.ngIf;r.xb(3),r.Zb("location",n)}}const m=[{path:"",component:(()=>{class n{constructor(n,t,e){this.route=n,this._locationService=t,this.navCtrl=e}ngOnInit(){this.route.params.subscribe(n=>{this.location$=this._locationService.getLocation(n.id)})}volver(){this.navCtrl.back()}}return n.\u0275fac=function(t){return new(t||n)(r.Hb(a.a),r.Hb(s.a),r.Hb(c.z))},n.\u0275cmp=r.Bb({type:n,selectors:[["app-location-details"]],decls:6,vars:3,consts:[[1,"animate__animated","animate__fadeIn"],["name","arrow-back-circle",1,"back",3,"click"],["class","animate__animated animate__fadeIn",4,"ngIf"],[1,"fondo"],[3,"location"]],template:function(n,t){1&n&&(r.Kb(0,"ion-header",0),r.Kb(1,"ion-toolbar"),r.Kb(2,"ion-item"),r.Kb(3,"ion-icon",1),r.Sb("click",function(){return t.volver()}),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.hc(4,p,4,1,"ion-content",2),r.Vb(5,"async")),2&n&&(r.xb(4),r.Zb("ngIf",r.Wb(5,1,t.location$)))},directives:[c.j,c.w,c.m,c.k,i.k,c.i,c.q,c.h,f],pipes:[i.b],styles:[".back[_ngcontent-%COMP%]{color:#adff2f;font-size:35px}ion-content[_ngcontent-%COMP%]{--background:url(bg.0ec50535a2729939be24.jpg) no-repeat center center/cover}ion-card[_ngcontent-%COMP%]{animation-duration:.7s}"]}),n})()}];let h=(()=>{class n{}return n.\u0275mod=r.Fb({type:n}),n.\u0275inj=r.Eb({factory:function(t){return new(t||n)},imports:[[a.j.forChild(m)],a.j]}),n})();var g=e("d2mR");let _=(()=>{class n{}return n.\u0275mod=r.Fb({type:n}),n.\u0275inj=r.Eb({factory:function(t){return new(t||n)},imports:[[i.c,o.a,c.x,h,g.a]]}),n})()}}]);