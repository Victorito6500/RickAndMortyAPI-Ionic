(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{LHz3:function(e,t,i){"use strict";i.r(t),i.d(t,"EpisodeSearchPageModule",function(){return u});var n=i("ofXK"),o=i("3Pt+"),s=i("TEn/"),c=i("tyNb"),a=i("fXoL"),r=i("xnQj");function b(e,t){if(1&e){const e=a.Lb();a.Kb(0,"ion-item",6),a.Sb("click",function(){a.cc(e);const i=t.$implicit;return a.Ub(2).episodeDetails(i.id)}),a.Kb(1,"ion-label"),a.hc(2),a.Jb(),a.Jb()}if(2&e){const e=t.$implicit;a.xb(2),a.kc(" ",e.episode," - ",e.name," ")}}function l(e,t){if(1&e&&(a.Kb(0,"ion-content",0),a.Kb(1,"ion-list",4),a.fc(2,b,3,2,"ion-item",5),a.Jb(),a.Jb()),2&e){const e=a.Ub();a.xb(2),a.Xb("ngForOf",e.episodesFiltered)}}const d=[{path:"",component:(()=>{class e{constructor(e,t,i,n){this.route=e,this._episodeService=t,this.navCtrl=i,this.router=n}ngOnInit(){this.route.params.subscribe(e=>{let t;this.textoBuscado=e.texto,this._episodeService.getEpisodes().subscribe(i=>{t=i.results,this.episodesFiltered=this.getEpisodesFiltered(e.texto,t)})})}episodeDetails(e){this.router.navigate(["/episode-details",e])}volver(){this.navCtrl.back()}getEpisodesFiltered(e,t){e=e.toLowerCase();let i=[];return t.forEach(t=>{let n=t.name.toLowerCase(),o=t.episode.toLowerCase();(n.indexOf(e)>=0||o.indexOf(e)>=0)&&i.push(t)}),i}}return e.\u0275fac=function(t){return new(t||e)(a.Hb(c.a),a.Hb(r.a),a.Hb(s.y),a.Hb(c.g))},e.\u0275cmp=a.Bb({type:e,selectors:[["app-episode-search"]],decls:7,vars:2,consts:[[1,"animate__animated","animate__fadeIn"],["name","arrow-back-circle",1,"back",3,"click"],[2,"margin-left","20px"],["class","animate__animated animate__fadeIn",4,"ngIf"],[1,"animate__animated","animate__backInUp"],[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(e,t){1&e&&(a.Kb(0,"ion-header",0),a.Kb(1,"ion-toolbar"),a.Kb(2,"ion-item"),a.Kb(3,"ion-icon",1),a.Sb("click",function(){return t.volver()}),a.Jb(),a.Kb(4,"span",2),a.hc(5),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.fc(6,l,3,1,"ion-content",3)),2&e&&(a.xb(5),a.jc("Results of:\xa0 ' ",t.textoBuscado," '"),a.xb(1),a.Xb("ngIf",t.episodesFiltered))},directives:[s.i,s.v,s.l,s.j,n.j,s.h,s.n,n.i,s.m],styles:["ion-list[_ngcontent-%COMP%]{animation-duration:.5s}"]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=a.Fb({type:e}),e.\u0275inj=a.Eb({factory:function(t){return new(t||e)},imports:[[c.j.forChild(d)],c.j]}),e})(),u=(()=>{class e{}return e.\u0275mod=a.Fb({type:e}),e.\u0275inj=a.Eb({factory:function(t){return new(t||e)},imports:[[n.b,o.a,s.w,p]]}),e})()}}]);