function init(){canvas=document.getElementById("animation_canvas"),anim_container=document.getElementById("animation_container"),dom_overlay_container=document.getElementById("dom_overlay_container"),images=images||{};var e=new createjs.LoadQueue(!1);e.addEventListener("fileload",handleFileLoad),e.addEventListener("complete",handleComplete),e.loadManifest(lib.properties.manifest)}function handleFileLoad(e){"image"==e.item.type&&(images[e.item.id]=e.result)}function handleComplete(e){var t=e.target,a=lib.ssMetadata;for(i=0;i<a.length;i++)ss[a[i].name]=new createjs.SpriteSheet({images:[t.getResult(a[i].name)],frames:a[i].frames});exportRoot=new lib._animation,(stage=new createjs.Stage(canvas)).addChild(exportRoot),fnStartAnimation=function(){createjs.Ticker.setFPS(lib.properties.fps),createjs.Ticker.addEventListener("tick",stage)},function(e,t,a,i){function n(){var n=lib.properties.width,d=lib.properties.height,c=window.innerWidth,m=window.innerHeight,l=window.devicePixelRatio||1,h=c/n,g=m/d,v=1;e&&("width"==t&&o==c||"height"==t&&r==m?v=s:a?1==i?v=Math.min(h,g):2==i&&(v=Math.max(h,g)):(c<n||m<d)&&(v=Math.min(h,g))),canvas.width=n*l*v,canvas.height=d*l*v,canvas.style.width=dom_overlay_container.style.width=anim_container.style.width=n*v+"px",canvas.style.height=anim_container.style.height=dom_overlay_container.style.height=d*v+"px",stage.scaleX=l*v,stage.scaleY=l*v,o=c,r=m,s=v}var o,r,s=1;window.addEventListener("resize",n),n()}(!0,"width",!0,1),fnStartAnimation(),canvas.className+="animation-ready"}var canvas,stage,exportRoot,anim_container,dom_overlay_container,fnStartAnimation;