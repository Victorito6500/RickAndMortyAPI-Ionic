(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"5llY":function(e,t,i){"use strict";i.r(t),i.d(t,"EpisodeDetailsPageModule",function(){return u});var n=i("ofXK"),c=i("3Pt+"),r=i("TEn/"),a=i("tyNb"),o=i("fXoL"),s=i("U1g7"),b=i("xnQj");function d(e,t){if(1&e){const e=o.Lb();o.Kb(0,"ion-col",8),o.Sb("click",function(){o.cc(e);const i=t.$implicit;return o.Ub(3).characterDetails(i.id)}),o.Ib(1,"ion-img",9),o.Jb()}if(2&e){const e=t.$implicit;o.xb(1),o.Xb("src",e.image)}}function h(e,t){if(1&e&&(o.Kb(0,"ion-row"),o.fc(1,d,2,1,"ion-col",7),o.Jb()),2&e){const e=o.Ub(2);o.xb(1),o.Xb("ngForOf",e.characters)}}function f(e,t){if(1&e&&(o.Kb(0,"ion-content",0),o.Kb(1,"ion-row",3),o.Kb(2,"ion-col"),o.Kb(3,"ion-card",4),o.Kb(4,"ion-card-header"),o.Kb(5,"ion-card-title",5),o.hc(6),o.Jb(),o.Jb(),o.Kb(7,"ion-card-content"),o.Kb(8,"p"),o.hc(9),o.Jb(),o.Ib(10,"br"),o.Kb(11,"p"),o.hc(12,"Characters:"),o.Jb(),o.fc(13,h,2,1,"ion-row",6),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&e){const e=o.Ub();o.xb(6),o.kc("",e.episode.episode," - ",e.episode.name,""),o.xb(3),o.jc("Air Date: ",e.episode.air_date,""),o.xb(4),o.Xb("ngIf",e.characters)}}const l=[{path:"",component:(()=>{class e{constructor(e,t,i,n,c){this.route=e,this._characterService=t,this._episodeService=i,this.router=n,this.navCtrl=c}ngOnInit(){this.route.params.subscribe(e=>{this._episodeService.getEpisode(e.id).subscribe(e=>{this.episode=e,this.characters=[],this.episode.characters.forEach(e=>{this.getCharacter(e)})})})}volver(){this.navCtrl.back()}characterDetails(e){this.router.navigate(["character-details",e])}getCharacter(e){this._characterService.getCharacterByURL(e).subscribe(e=>{this.characters.push(e)})}}return e.\u0275fac=function(t){return new(t||e)(o.Hb(a.a),o.Hb(s.a),o.Hb(b.a),o.Hb(a.g),o.Hb(r.y))},e.\u0275cmp=o.Bb({type:e,selectors:[["app-episode-details"]],decls:5,vars:1,consts:[[1,"animate__animated","animate__fadeIn"],["name","arrow-back-circle",1,"back",3,"click"],["class","animate__animated animate__fadeIn",4,"ngIf"],[1,"fondo"],[1,"animate__animated","animate__rubberBand"],[1,"titulo"],[4,"ngIf"],["size","3",3,"click",4,"ngFor","ngForOf"],["size","3",3,"click"],[3,"src"]],template:function(e,t){1&e&&(o.Kb(0,"ion-header",0),o.Kb(1,"ion-toolbar"),o.Kb(2,"ion-item"),o.Kb(3,"ion-icon",1),o.Sb("click",function(){return t.volver()}),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.fc(4,f,14,4,"ion-content",2)),2&e&&(o.xb(4),o.Xb("ngIf",t.episode))},directives:[r.i,r.v,r.l,r.j,n.j,r.h,r.p,r.g,r.b,r.d,r.f,r.c,n.i,r.k],styles:[".back[_ngcontent-%COMP%]{color:#adff2f;font-size:35px}.titulo[_ngcontent-%COMP%]{text-align:center;font-size:30px;margin-bottom:1rem}.fondo[_ngcontent-%COMP%]{background-image:url(bg.bad429ba220e55257cd6.jpg);background-size:cover;background-repeat:repeat;height:100vh}ion-card[_ngcontent-%COMP%]{animation-duration:.7s}"]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=o.Fb({type:e}),e.\u0275inj=o.Eb({factory:function(t){return new(t||e)},imports:[[a.j.forChild(l)],a.j]}),e})(),u=(()=>{class e{}return e.\u0275mod=o.Fb({type:e}),e.\u0275inj=o.Eb({factory:function(t){return new(t||e)},imports:[[n.b,c.a,r.w,p]]}),e})()}}]);