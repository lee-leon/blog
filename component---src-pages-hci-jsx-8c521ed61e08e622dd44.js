(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{284:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(4),o=a.n(n),s=a(296),l=a.n(s),d=a(285),u=a(288),c=a(294),f=a.n(c),p=(a(317),a(88)),h=a(295),m=a.n(h),g=a(287),b=Object(d.b)(p.Link,{target:"e1onsdx00"})("position:absolute;top:0;right:0;bottom:0;left:0;border-radius:",g.a.borderRadius.default,";display:flex;flex-flow:column nowrap;justify-content:flex-end;padding:1rem;background-image:linear-gradient(30deg,",g.a.colors.primary.light," 0%,",g.a.colors.primary.dark," 100%);color:",g.a.colors.white.light,";opacity:0;visibility:hidden;transition:all 0.4s cubic-bezier(0.165,0.84,0.44,1);h2{margin-bottom:0;}&:hover{color:",g.a.colors.white.light,";}"),y=Object(d.b)("div",{target:"e1onsdx01"})("display:inline-block;width:100%;position:relative;border-radius:",function(e){return e.theme.borderRadius.default},";margin-top:1.5rem;margin-bottom:1.5rem;box-shadow:",function(e){return e.theme.shadow.feature.small.default},";transition:",function(e){return e.theme.transitions.boom.transition},";img{border-radius:",function(e){return e.theme.borderRadius.default},";}&:hover{box-shadow:",function(e){return e.theme.shadow.feature.small.hover},";transform:translateY(-12px);a{visibility:visible;opacity:0.9;}}"),v=function(e){var t=e.cover,a=e.path,i=e.customer,n=e.title;return r.a.createElement(y,null,r.a.createElement(m.a,{fluid:t}),r.a.createElement(b,{to:a},r.a.createElement("div",null,i),r.a.createElement("h2",null,n)))},w=v;v.propTypes={cover:o.a.any.isRequired,path:o.a.string.isRequired,customer:o.a.string.isRequired,title:o.a.string.isRequired};var S=a(292),E=a(299);a.d(t,"pageQuery",function(){return x});var R=Object(d.b)("div",{target:"e1hb4oa10"})("padding-top:2rem;padding-bottom:2rem;column-gap:2rem;column-width:500px;"),L=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(u.c,null,r.a.createElement(l.a,{title:"HCI | "+f.a.siteTitle}),r.a.createElement(E.a,{title:"Next Generation HCI"}),r.a.createElement(u.a,{type:"big"},r.a.createElement(R,null,t.map(function(e){return r.a.createElement(w,{key:e.node.frontmatter.title,path:e.node.fields.slug,cover:e.node.frontmatter.cover.childImageSharp.fluid,customer:e.node.frontmatter.customer,title:e.node.frontmatter.title})}))),r.a.createElement(S.a,null))};t.default=L,L.propTypes={data:o.a.shape({allMarkdownRemark:o.a.shape({edges:o.a.array.isRequired})}).isRequired};var x="1950714669"},295:function(e,t,a){"use strict";var i=a(12);t.__esModule=!0,t.default=void 0;var r,n=i(a(21)),o=i(a(62)),s=i(a(137)),l=i(a(90)),d=i(a(0)),u=i(a(4)),c=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=c(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},h=[],m=null,g=function(){if(null!==m)return m;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return m=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1";return"<img "+o+s+t+a+n+r+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},y=function(e){var t=e.style,a=e.onLoad,i=(0,s.default)(e,["style","onLoad"]);return d.default.createElement("img",(0,l.default)({},i,{onLoad:a,style:(0,l.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};y.propTypes={style:u.default.object,onLoad:u.default.func};var v=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!0,n=!1;return!p(t)&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!1,n=!0),"undefined"==typeof window&&(i=!1,r=!1),a.state={isVisible:i,imgLoaded:r,IOSupported:n},a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])}(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},a.render=function(){var e,t=this,a=c(this.props),i=a.title,r=a.alt,n=a.className,o=a.outerWrapperClassName,s=a.style,u=void 0===s?{}:s,f=a.imgStyle,p=void 0===f?{}:f,h=a.placeholderStyle,m=void 0===h?{}:h,v=a.fluid,w=a.fixed,S=a.backgroundColor,E=a.Tag;e="boolean"==typeof S?"lightgray":S;var R=(0,l.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},p,m),L=(0,l.default)({opacity:this.state.imgLoaded||!1===this.props.fadeIn?1:0},p);if(v){var x=v;return x.srcWebp&&x.srcSetWebp&&g()&&(x.src=x.srcWebp,x.srcSet=x.srcSetWebp),d.default.createElement(E,{className:(o||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===u.position?"initial":"relative"}},d.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},u),ref:this.handleRef},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&d.default.createElement(y,{alt:r,title:i,src:x.base64,style:R}),x.tracedSVG&&d.default.createElement(y,{alt:r,title:i,src:x.tracedSVG,style:R}),e&&d.default.createElement(E,{title:i,style:{backgroundColor:e,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement(y,{alt:r,title:i,srcSet:x.srcSet,src:x.src,sizes:x.sizes,style:L,onLoad:function(){t.state.IOSupported&&t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,l.default)({alt:r,title:i},x))}})))}if(w){var k=w,I=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},u);return"inherit"===u.display&&delete I.display,k.srcWebp&&k.srcSetWebp&&g()&&(k.src=k.srcWebp,k.srcSet=k.srcSetWebp),d.default.createElement(E,{className:(o||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===u.position?"initial":"relative"}},d.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef},k.base64&&d.default.createElement(y,{alt:r,title:i,src:k.base64,style:R}),k.tracedSVG&&d.default.createElement(y,{alt:r,title:i,src:k.tracedSVG,style:R}),e&&d.default.createElement(E,{title:i,style:{backgroundColor:e,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),this.state.isVisible&&d.default.createElement(y,{alt:r,title:i,width:k.width,height:k.height,srcSet:k.srcSet,src:k.src,style:L,onLoad:function(){t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,l.default)({alt:r,title:i,width:k.width,height:k.height},k))}})))}return null},t}(d.default.Component);v.defaultProps={fadeIn:!0,alt:"",Tag:"div"};var w=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),S=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});v.propTypes={resolutions:w,sizes:S,fixed:w,fluid:S,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),outerWrapperClassName:u.default.oneOfType([u.default.string,u.default.object]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,position:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,Tag:u.default.string};var E=v;t.default=E}}]);
//# sourceMappingURL=component---src-pages-hci-jsx-8c521ed61e08e622dd44.js.map