(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{119:function(e,t,s){},122:function(e,t,s){},134:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(37),n=s.n(c),r=(s(119),s(1)),i=s(2),l=s(13),o=s(12),j=s(75),d=s(81),b=s.n(d),u=(s(122),s(7)),h=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(u.jsx)("nav",{id:"nav-wrap",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:"current",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#experience",children:"Experience"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#education",children:"Education"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#skills",children:"Skills"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})})}}]),s}(a.Component),m=h,O=s(34),p=s.n(O),x=s(3),f=s(6),v=s(90),N=s(89),g=function(){var e=Object(a.useCallback)(function(){var e=Object(f.a)(Object(x.a)().mark((function e(t){return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Object(N.a)(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),t=Object(a.useCallback)(function(){var e=Object(f.a)(Object(x.a)().mark((function e(t){return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,console.log(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(u.jsx)(v.a,{className:"particle-bg",id:"tsparticles",init:e,loaded:t,options:{fpsLimit:120,fullScreen:{enable:!0,zIndex:-1},interactivity:{events:{onHover:{enable:!0,mode:"repulse"},onClick:{enable:!1,mode:"push"},resize:!0},modes:{repulse:{distance:50,duration:.4},push:{quantity:4}}},particles:{number:{value:60,density:{enable:!1,area:800}},color:{value:"#FFDCF4"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},opacity:{value:.7,random:!1},size:{value:3},links:{enable:!0,distance:120,color:"#6495ED",opacity:.6,width:1},move:{enable:!0,speed:.3,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},detectRetina:!0}})},k=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.project,this.props.data.github;var e=this.props.data.name,t=this.props.data.description;return Object(u.jsxs)("section",{id:"home",children:[Object(u.jsx)(g,{}),Object(u.jsx)("div",{className:"row banner",children:Object(u.jsxs)("div",{className:"banner-text",children:[Object(u.jsx)(p.a,{bottom:!0,duration:100,children:Object(u.jsx)("h1",{children:e})}),Object(u.jsx)("hr",{}),Object(u.jsx)(p.a,{bottom:!0,duration:100,children:Object(u.jsx)("h3",{children:t})})]})}),Object(u.jsx)("p",{className:"scrolldown",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(u.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component),y=k,w=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.testimonial.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)("blockquote",{children:[Object(u.jsx)("p",{children:e.text}),Object(u.jsx)("cite",{children:e.referee})]})},e.referee)}));return Object(u.jsx)("section",{id:"testimonials",children:Object(u.jsx)("div",{className:"columns flex-container",children:Object(u.jsxs)("div",{className:"flexslider",children:[Object(u.jsx)("i",{className:"fa fa-quote-left"}),Object(u.jsx)("ul",{className:"slides",children:e}),Object(u.jsx)("div",{className:"columns",children:Object(u.jsx)("i",{className:"fa fa-quote-right"})})]})})})}}]),s}(a.Component),C=w,D=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;if(!this.props.testimonials)return null;var e="images/"+this.props.data.image,t=this.props.data.bio,s=this.props.testimonials;return Object(u.jsx)("section",{id:"about",children:Object(u.jsxs)(p.a,{duration:1e3,children:[Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"About"})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"three columns",children:Object(u.jsx)("img",{className:"profile-pic",src:e,alt:"Song Yun profile pic"})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("br",{}),Object(u.jsxs)("p",{children:[t,Object(u.jsx)("a",{className:"smoothscroll",href:"#contact",style:{color:"#6495ED"},children:"Let's connect!"})]}),Object(u.jsx)("div",{className:"row buttons-container",children:Object(u.jsxs)("div",{className:"columns buttons",children:[Object(u.jsxs)("a",{href:"/Tan Song Yun.pdf",className:"button",target:"_blank",rel:"noreferrer",children:[Object(u.jsx)("i",{className:"fa fa-download"}),"Download Resume"]}),Object(u.jsxs)("a",{href:"https://github.com/SongYunTan",className:"button",target:"_blank",rel:"noreferrer",children:[Object(u.jsx)("i",{className:"fa fa-github"}),"View Github Profile"]}),Object(u.jsxs)("a",{href:"/Testimonials.pdf",className:"button",target:"_blank",rel:"noreferrer",children:[Object(u.jsx)("i",{className:"fa fa-pencil"}),"View Full Testimonials"]})]})}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(C,{data:s})})]})]})]})})}}]),s}(a.Component),E=D,F=s(139),S=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.experience.map((function(e){var t="/images/"+e.image;return{label:e.company,key:e.company,children:Object(u.jsxs)("div",{className:"company",children:[Object(u.jsx)("img",{className:"image",src:t}),Object(u.jsxs)("p",{className:"info",children:[e.title,Object(u.jsx)("span",{children:"\u2022"})," ",Object(u.jsx)("em",{className:"date",children:e.years})]}),Object(u.jsx)("ul",{children:e.description.map((function(e){return Object(u.jsx)("li",{children:e})}))})]},e.company)}}));return Object(u.jsx)("section",{id:"experience",children:Object(u.jsxs)(p.a,{left:!0,duration:1300,children:[Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Experience"})}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"row experience",children:Object(u.jsx)("div",{className:"twelve columns main-col",children:Object(u.jsx)(F.a,{defaultActiveKey:"1",tabPosition:"left",items:e})})})]})})}}]),s}(a.Component),T=S,A=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.education.map((function(e){var t="/images/"+e.image;return{label:e.school,key:e.school,children:Object(u.jsxs)("div",{className:"school",children:[Object(u.jsx)("img",{className:"image",src:t}),Object(u.jsxs)("p",{className:"info",children:[e.degree," ",Object(u.jsx)("span",{children:"\u2022"}),Object(u.jsx)("em",{className:"date",children:e.graduated})]}),Object(u.jsx)("ul",{children:e.description.map((function(e){return Object(u.jsx)("li",{children:e})}))})]},e.school)}}));return Object(u.jsx)("section",{id:"education",children:Object(u.jsxs)(p.a,{left:!0,duration:1300,children:[Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Education"})}),Object(u.jsx)("div",{className:"row education",children:Object(u.jsx)("div",{className:"twelve columns main-col",children:Object(u.jsx)(F.a,{defaultActiveKey:"1",tabPosition:"left",items:e})})})]})})}}]),s}(a.Component),L=A,_=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.skillmessage;var e=this.props.data.skills.languages.map((function(e){var t="bar-expand "+e.name.toLowerCase(),s=e.level;return Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{className:"skillname",children:e.name}),Object(u.jsxs)("div",{className:"bars-container",children:[Object(u.jsx)("span",{style:{width:s,backgroundColor:"#6495ED"},className:t}),Object(u.jsx)("span",{className:"skillpercentage",children:e.level})]})]},e.name)})),t=this.props.data.skills.libraries.map((function(e){var t="bar-expand "+e.name.toLowerCase(),s=e.level;return Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{className:"skillname",children:e.name}),Object(u.jsxs)("div",{className:"bars-container",children:[Object(u.jsx)("span",{style:{width:s,backgroundColor:"#6495ED"},className:t}),Object(u.jsx)("span",{className:"skillpercentage",children:e.level})]})]},e.name)}));return Object(u.jsx)("section",{id:"skills",children:Object(u.jsxs)(p.a,{left:!0,duration:1300,children:[Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Skills"})}),Object(u.jsxs)("div",{className:"row skill",children:[Object(u.jsx)("div",{className:"six columns",children:Object(u.jsx)("div",{className:"bars",children:Object(u.jsx)("ul",{className:"skills",children:e})})}),Object(u.jsx)("div",{className:"six columns",children:Object(u.jsx)("div",{className:"bars",children:Object(u.jsx)("ul",{className:"skills",children:t})})})]})]})})}}]),s}(a.Component),P=_,Y=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.contactmessage,t=this.props.data.social.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.url,children:Object(u.jsx)("i",{className:e.className})})},e.name)}));return Object(u.jsx)("section",{id:"contact",children:Object(u.jsxs)(O.Fade,{bottom:!0,duration:1e3,children:[Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Contact"})}),Object(u.jsx)("p",{children:e}),Object(u.jsx)("ul",{className:"social-links",children:t})]})})}}]),s}(a.Component),q=Y,z=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return this.props.data?Object(u.jsx)("footer",{id:"footer",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"scrolltop",children:Object(u.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(u.jsx)("i",{className:"icon-up-open"})})}),Object(u.jsx)(p.a,{bottom:!0,children:Object(u.jsx)("div",{className:"twelve columns",children:Object(u.jsx)("ul",{className:"copyright",children:Object(u.jsx)("li",{children:"\xa9 Copyright 2021 Song Yun Tan"})})})})]})}):null}}]),s}(a.Component),R=z,B=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{},particlesConfig:{}},j.a.initialize("UA-110570651-1"),j.a.pageview(window.location.pathname),a}return Object(i.a)(s,[{key:"getResumeData",value:function(){b.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(m,{}),Object(u.jsx)(y,{data:this.state.resumeData.main}),Object(u.jsx)(E,{data:this.state.resumeData.main,testimonials:this.state.resumeData.testimonials}),Object(u.jsx)(T,{data:this.state.resumeData.resume}),Object(u.jsx)(L,{data:this.state.resumeData.resume}),Object(u.jsx)(P,{data:this.state.resumeData.resume}),Object(u.jsx)(q,{data:this.state.resumeData.main}),Object(u.jsx)(R,{data:this.state.resumeData.main})]})}}]),s}(a.Component),I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,140)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),n(e),r(e)}))};n.a.render(Object(u.jsx)(B,{}),document.getElementById("root")),I()}},[[134,1,2]]]);
//# sourceMappingURL=main.8f792f0e.chunk.js.map