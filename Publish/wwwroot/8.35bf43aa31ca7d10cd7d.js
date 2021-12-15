(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{h9W5:function(t,r,e){"use strict";e.r(r),e.d(r,"OrdersModule",function(){return h});var b=e("ofXK"),c=e("tyNb"),i=e("fXoL"),o=e("AytR"),s=e("tk/3");let n=(()=>{class t{constructor(t){this.http=t,this.baseUrl=o.a.apiUrl+"orders/"}getOrdersForUser(){return this.http.get(this.baseUrl)}getOrderDetailed(t){return this.http.get(this.baseUrl+t)}}return t.\u0275fac=function(r){return new(r||t)(i.Xb(s.b))},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function d(t,r){if(1&t&&(i.Tb(0,"tr",6),i.Tb(1,"th"),i.Ac(2),i.Sb(),i.Tb(3,"td"),i.Ac(4),i.dc(5,"date"),i.Sb(),i.Tb(6,"td"),i.Ac(7),i.dc(8,"currency"),i.Sb(),i.Tb(9,"td"),i.Ac(10),i.Sb(),i.Sb()),2&t){const t=r.$implicit;i.kc("routerLink","/orders/",t.id,""),i.Cb(2),i.Cc("# ",t.id,""),i.Cb(2),i.Bc(i.fc(5,5,t.orderDate,"medium")),i.Cb(3),i.Bc(i.fc(8,8,t.total,"INR")),i.Cb(3),i.Bc(t.status)}}let a=(()=>{class t{constructor(t,r){this.orderService=t,this.router=r}ngOnInit(){this.getOrders()}getOrders(){this.orderService.getOrdersForUser().subscribe(t=>{this.orders=t},t=>{console.log(t)})}}return t.\u0275fac=function(r){return new(r||t)(i.Nb(n),i.Nb(c.c))},t.\u0275cmp=i.Hb({type:t,selectors:[["app-orders"]],decls:16,vars:1,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-12"],[1,"table","table-hover",2,"cursor","pointer"],[1,"thead-light"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(t,r){1&t&&(i.Tb(0,"div",0),i.Tb(1,"div",1),i.Tb(2,"div",2),i.Tb(3,"table",3),i.Tb(4,"thead",4),i.Tb(5,"tr"),i.Tb(6,"th"),i.Ac(7,"Order"),i.Sb(),i.Tb(8,"th"),i.Ac(9,"Date"),i.Sb(),i.Tb(10,"th"),i.Ac(11,"Total"),i.Sb(),i.Tb(12,"th"),i.Ac(13,"Status"),i.Sb(),i.Sb(),i.Sb(),i.Tb(14,"tbody"),i.yc(15,d,11,11,"tr",5),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb()),2&t&&(i.Cb(15),i.ic("ngForOf",r.orders))},directives:[b.l,c.d],pipes:[b.f,b.d],styles:[""]}),t})();var l=e("tc9g");function u(t,r){if(1&t&&(i.Tb(0,"tr"),i.Tb(1,"th",16),i.Tb(2,"div",17),i.Ob(3,"img",18),i.Tb(4,"div",19),i.Tb(5,"h5",20),i.Ac(6),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(7,"td",21),i.Tb(8,"strong"),i.Ac(9),i.dc(10,"currency"),i.Sb(),i.Sb(),i.Tb(11,"td",21),i.Tb(12,"span",22),i.Ac(13),i.Sb(),i.Sb(),i.Tb(14,"td",21),i.Tb(15,"strong"),i.Ac(16),i.dc(17,"currency"),i.Sb(),i.Sb(),i.Sb()),2&t){const t=r.$implicit;i.Cb(3),i.jc("src",t.pictureUrl,i.uc),i.jc("alt",t.productName),i.Cb(3),i.Cc(" ",t.productName," "),i.Cb(3),i.Bc(i.fc(10,6,t.price,"INR")),i.Cb(4),i.Bc(t.quantity),i.Cb(3),i.Bc(i.fc(17,9,t.price*t.quantity,"INR"))}}function p(t,r){if(1&t&&(i.Tb(0,"div",2),i.Tb(1,"div",3),i.Tb(2,"div"),i.Tb(3,"div",4),i.Tb(4,"table",5),i.Tb(5,"thead"),i.Tb(6,"tr"),i.Tb(7,"th",6),i.Tb(8,"div",7),i.Ac(9,"Product"),i.Sb(),i.Sb(),i.Tb(10,"th",6),i.Tb(11,"div",8),i.Ac(12,"Price"),i.Sb(),i.Sb(),i.Tb(13,"th",6),i.Tb(14,"div",8),i.Ac(15,"Quantity"),i.Sb(),i.Sb(),i.Tb(16,"th",6),i.Tb(17,"div",8),i.Ac(18,"Total"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(19,"tbody"),i.yc(20,u,18,12,"tr",9),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(21,"div",10),i.Tb(22,"div",11),i.Ac(23," Order summary "),i.Sb(),i.Tb(24,"div",12),i.Tb(25,"ul",13),i.Tb(26,"li",14),i.Tb(27,"strong",15),i.Ac(28,"Order subtotal"),i.Sb(),i.Tb(29,"strong"),i.Ac(30),i.dc(31,"currency"),i.Sb(),i.Sb(),i.Tb(32,"li",14),i.Tb(33,"strong",15),i.Ac(34,"Shipping and handling"),i.Sb(),i.Tb(35,"strong"),i.Ac(36),i.dc(37,"currency"),i.Sb(),i.Sb(),i.Tb(38,"li",14),i.Tb(39,"strong",15),i.Ac(40,"Total"),i.Sb(),i.Tb(41,"strong"),i.Ac(42),i.dc(43,"currency"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb()),2&t){const t=i.cc();i.Cb(20),i.ic("ngForOf",t.order.orderItems),i.Cb(10),i.Bc(i.fc(31,4,t.order.subTotal,"INR")),i.Cb(6),i.Bc(i.fc(37,7,t.order.shippingPrice,"INR")),i.Cb(6),i.Bc(i.fc(43,10,t.order.total,"INR"))}}const S=[{path:"",component:a},{path:":id",component:(()=>{class t{constructor(t,r,e){this.route=t,this.breadcrumbService=r,this.orderService=e,this.breadcrumbService.set("@OrderDetailed"," ")}ngOnInit(){this.orderService.getOrderDetailed(+this.route.snapshot.paramMap.get("id")).subscribe(t=>{this.order=t,this.breadcrumbService.set("@OrderDetailed",`Order# ${t.id} - ${t.status}`)},t=>{console.log(t)})}}return t.\u0275fac=function(r){return new(r||t)(i.Nb(c.a),i.Nb(l.c),i.Nb(n))},t.\u0275cmp=i.Hb({type:t,selectors:[["app-order-detailed"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-8"],[1,"table-responsive"],[1,"table"],["scope","col",1,"border-0","bg-light"],[1,"p-1","text-uppercase"],[1,"py-1","text-uppercase"],[4,"ngFor","ngForOf"],[1,"col-4"],[1,"bg-light","px-4","py-3","text-uppercase","font-weight-bold"],[1,"p-4"],[1,"list-unstyled","mb-1"],[1,"d-flex","justify-content-between","py-3","border-bottom"],[1,"text-muted"],["scope","row"],[1,"p-2"],[1,"img-fluid",2,"max-height","50px",3,"src","alt"],[1,"ml-3","d-inline-block","align-middle"],[1,"mb-0"],[1,"align-middle"],[1,"font-weight-bold","px-2"]],template:function(t,r){1&t&&(i.Tb(0,"div",0),i.yc(1,p,44,13,"div",1),i.Sb()),2&t&&(i.Cb(1),i.ic("ngIf",r.order))},directives:[b.m,b.l],pipes:[b.d],styles:[""]}),t})(),data:{breadcrumb:{alias:"OrderDetailed"}}}];let T=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({imports:[[c.g.forChild(S)],c.g]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({imports:[[b.c,T]]}),t})()}}]);