(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Pf="187",G0=0,Id=1,V0=2,ac=1,tg=2,uo=3,is=0,Gn=1,Bi=2,xa=0,To=1,Nd=2,Ud=3,Od=4,W0=5,ua=100,X0=101,q0=102,Y0=103,K0=104,$0=200,Z0=201,J0=202,Q0=203,ng=204,ig=205,j0=206,ex=207,tx=208,nx=209,ix=210,rx=211,sx=212,ax=213,ox=214,fh=0,dh=1,ph=2,Bo=3,mh=4,gh=5,_h=6,xh=7,Lf=0,lx=1,cx=2,br=0,rg=1,sg=2,ag=3,og=4,lg=5,cg=6,Df=7,Fd="attached",ux="detached",ug=300,La=301,ko=302,uu=303,hu=304,Er=1e3,Ji=1001,Ec=1002,ln=1003,hg=1004,ho=1005,vn=1006,oc=1007,Qi=1008,ci=1009,fg=1010,dg=1011,zo=1012,If=1013,ir=1014,wi=1015,rr=1016,Nf=1017,Uf=1018,Da=1020,pg=35902,mg=35899,gg=1021,_g=1022,zi=1023,rs=1026,Xr=1027,Of=1028,Ff=1029,Ns=1030,Bf=1031,kf=1033,lc=33776,cc=33777,uc=33778,hc=33779,vh=35840,Mh=35841,Sh=35842,yh=35843,Th=36196,bh=37492,Eh=37496,wh=37488,Ah=37489,wc=37490,Rh=37491,Ch=37808,Ph=37809,Lh=37810,Dh=37811,Ih=37812,Nh=37813,Uh=37814,Oh=37815,Fh=37816,Bh=37817,kh=37818,zh=37819,Hh=37820,Gh=37821,Vh=36492,Wh=36494,Xh=36495,qh=36283,Yh=36284,Ac=36285,Kh=36286,Ho=2300,Go=2301,fu=2302,Bd=2303,kd=2400,zd=2401,Hd=2402,hx=2500,fx=0,xg=1,$h=2,dx=3200,Rc=0,px=1,Vr="",Vt="srgb",jn="srgb-linear",Cc="linear",vt="srgb",du=7680,mx=519,gx=512,_x=513,xx=514,vg=515,vx=516,Mx=517,Mg=518,Sg=519,yg=35044,Sx=35048,Gd="300 es",Hi=2e3,Vo=2001;function yx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Tx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Wo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bx(){const s=Wo("canvas");return s.style.display="block",s}const Vd={};function Pc(...s){const e="THREE."+s.shift();console.log(e,...s)}function Tg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ue(...s){s=Tg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function He(...s){s=Tg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function va(...s){const e=s.join(" ");e in Vd||(Vd[e]=!0,Ue(...s))}function Ex(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const wx={[fh]:fh,[ph]:_h,[mh]:mh,[Bo]:gh,[dh]:dh,[_h]:ph,[xh]:xh,[gh]:Bo};class ks{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wd=1234567;const bo=Math.PI/180,Ia=180/Math.PI;function lr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function Ke(s,e,t){return Math.max(e,Math.min(t,s))}function zf(s,e){return(s%e+e)%e}function Ax(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Rx(s,e,t){return s!==e?(t-s)/(e-s):0}function Eo(s,e,t){return(1-t)*s+t*e}function Cx(s,e,t,n){return Eo(s,e,1-Math.exp(-t*n))}function Px(s,e=1){return e-Math.abs(zf(s,e*2)-e)}function Lx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Dx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ix(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Nx(s,e){return s+Math.random()*(e-s)}function Ux(s){return s*(.5-Math.random())}function Ox(s){s!==void 0&&(Wd=s);let e=Wd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fx(s){return s*bo}function Bx(s){return s*Ia}function kx(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function zx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function bg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Hx(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*d,l*h,o*c);break;case"YZY":s.set(l*h,o*u,l*d,o*c);break;case"ZXZ":s.set(l*d,l*h,o*u,o*c);break;case"XZX":s.set(o*u,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*u,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*u,o*c);break;default:Ue("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function $c(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Hf(s,e){if(e.constructor===Float32Array)return s;const t=$c(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Gf(s,e){if(e.constructor===Float32Array)return s;const t=$c(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Rr={DEG2RAD:bo,RAD2DEG:Ia,generateUUID:lr,clamp:Ke,euclideanModulo:zf,mapLinear:Ax,inverseLerp:Rx,lerp:Eo,damp:Cx,pingpong:Px,smoothstep:Lx,smootherstep:Dx,randInt:Ix,randFloat:Nx,randFloatSpread:Ux,seededRandom:Ox,degToRad:Fx,radToDeg:Bx,isPowerOfTwo:kx,ceilPowerOfTwo:zx,floorPowerOfTwo:bg,setQuaternionFromProperEuler:Hx,normalize:Gf,denormalize:Hf};class Ye{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=r[a+0],f=r[a+1],p=r[a+2],g=r[a+3];if(d!==g||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*g;m<0&&(h=-h,f=-f,p=-p,g=-g,m=-m);let _=1-o;if(m<.9995){const v=Math.acos(m),y=Math.sin(v);_=Math.sin(_*v)/y,o=Math.sin(o*v)/y,l=l*_+h*o,c=c*_+f*o,u=u*_+p*o,d=d*_+g*o}else{l=l*_+h*o,c=c*_+f*o,u=u*_+p*o,d=d*_+g*o;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[a],h=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-o*f,e[t+2]=c*p+u*f+o*h-l*d,e[t+3]=u*p-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(r/2),h=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=i+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pu.copy(this).projectOnVector(e),this.sub(pu)}reflect(e){return this.sub(pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pu=new O,Xd=new Gi;class qe{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],g=i[0],m=i[3],_=i[6],v=i[1],y=i[4],M=i[7],b=i[2],w=i[5],x=i[8];return r[0]=a*g+o*v+l*b,r[3]=a*m+o*y+l*w,r[6]=a*_+o*M+l*x,r[1]=c*g+u*v+d*b,r[4]=c*m+u*y+d*w,r[7]=c*_+u*M+d*x,r[2]=h*g+f*v+p*b,r[5]=h*m+f*y+p*w,r[8]=h*_+f*M+p*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,p=t*d+n*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=d*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=h*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return va("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mu.makeScale(e,t)),this}rotate(e){return va("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mu.makeRotation(-e)),this}translate(e,t){return va("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mu=new qe,qd=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yd=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gx(){const s={enabled:!0,workingColorSpace:jn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(i.r=wr(i.r),i.g=wr(i.g),i.b=wr(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(i.r=Ma(i.r),i.g=Ma(i.g),i.b=Ma(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vr?Cc:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[jn]:{primaries:e,whitePoint:n,transfer:Cc,toXYZ:qd,fromXYZ:Yd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:qd,fromXYZ:Yd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),s}const et=Gx();function wr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ma(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Vs;class Vx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vs===void 0&&(Vs=Wo("canvas")),Vs.width=e.width,Vs.height=e.height;const i=Vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=wr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wr(t[n]/255)*255):t[n]=wr(t[n]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wx=0;class Vf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(gu(i[a].image)):r.push(gu(i[a]))}else r=gu(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function gu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Vx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let Xx=0;const _u=new O;class cn extends ks{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=Ji,i=Ji,r=vn,a=Qi,o=zi,l=ci,c=cn.DEFAULT_ANISOTROPY,u=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=lr(),this.name="",this.source=new Vf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_u).x}get height(){return this.source.getSize(_u).y}get depth(){return this.source.getSize(_u).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ug)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Er:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case Ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Er:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case Ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=ug;cn.DEFAULT_ANISOTROPY=1;class Pt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],g=l[2],m=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(f+1)/2,b=(_+1)/2,w=(u+h)/4,x=(d+g)/4,S=(p+m)/4;return y>M&&y>b?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=x/n):M>b?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=w/i,r=S/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=x/r,i=S/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-g)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qx extends ks{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new cn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Vf(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends qx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Eg extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yx extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Ve{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,r,a,o,l,c,u,d,h,f,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,d,h,f,p,g,m)}set(e,t,n,i,r,a,o,l,c,u,d,h,f,p,g,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=d,_[14]=h,_[3]=f,_[7]=p,_[11]=g,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),a=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,f=a*d,p=o*u,g=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,p=c*u,g=c*d;t[0]=h+g*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=g+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,p=c*u,g=c*d;t[0]=h-g*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=g-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,p=o*u,g=o*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+g,t[1]=l*d,t[5]=g*c+h,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,p=o*l,g=o*c;t[0]=l*u,t[4]=g-h*d,t[8]=p*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-g*d}else if(e.order==="XZY"){const h=a*l,f=a*c,p=o*l,g=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+g,t[5]=a*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kx,e,$x)}lookAt(e,t,n){const i=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ir.crossVectors(n,ii),Ir.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ir.crossVectors(n,ii)),Ir.normalize(),gl.crossVectors(ii,Ir),i[0]=Ir.x,i[4]=gl.x,i[8]=ii.x,i[1]=Ir.y,i[5]=gl.y,i[9]=ii.y,i[2]=Ir.z,i[6]=gl.z,i[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],g=n[6],m=n[10],_=n[14],v=n[3],y=n[7],M=n[11],b=n[15],w=i[0],x=i[4],S=i[8],P=i[12],A=i[1],N=i[5],I=i[9],G=i[13],L=i[2],k=i[6],W=i[10],B=i[14],te=i[3],X=i[7],C=i[11],ne=i[15];return r[0]=a*w+o*A+l*L+c*te,r[4]=a*x+o*N+l*k+c*X,r[8]=a*S+o*I+l*W+c*C,r[12]=a*P+o*G+l*B+c*ne,r[1]=u*w+d*A+h*L+f*te,r[5]=u*x+d*N+h*k+f*X,r[9]=u*S+d*I+h*W+f*C,r[13]=u*P+d*G+h*B+f*ne,r[2]=p*w+g*A+m*L+_*te,r[6]=p*x+g*N+m*k+_*X,r[10]=p*S+g*I+m*W+_*C,r[14]=p*P+g*G+m*B+_*ne,r[3]=v*w+y*A+M*L+b*te,r[7]=v*x+y*N+M*k+b*X,r[11]=v*S+y*I+M*W+b*C,r[15]=v*P+y*G+M*B+b*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],g=e[7],m=e[11],_=e[15],v=l*f-c*h,y=o*f-c*d,M=o*h-l*d,b=a*f-c*u,w=a*h-l*u,x=a*d-o*u;return t*(g*v-m*y+_*M)-n*(p*v-m*b+_*w)+i*(p*y-g*b+_*x)-r*(p*M-g*w+m*x)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+i*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],g=e[13],m=e[14],_=e[15],v=t*o-n*a,y=t*l-i*a,M=t*c-r*a,b=n*l-i*o,w=n*c-r*o,x=i*c-r*l,S=u*g-d*p,P=u*m-h*p,A=u*_-f*p,N=d*m-h*g,I=d*_-f*g,G=h*_-f*m,L=v*G-y*I+M*N+b*A-w*P+x*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/L;return e[0]=(o*G-l*I+c*N)*k,e[1]=(i*I-n*G-r*N)*k,e[2]=(g*x-m*w+_*b)*k,e[3]=(h*w-d*x-f*b)*k,e[4]=(l*A-a*G-c*P)*k,e[5]=(t*G-i*A+r*P)*k,e[6]=(m*M-p*x-_*y)*k,e[7]=(u*x-h*M+f*y)*k,e[8]=(a*I-o*A+c*S)*k,e[9]=(n*A-t*I-r*S)*k,e[10]=(p*w-g*M+_*v)*k,e[11]=(d*M-u*w-f*v)*k,e[12]=(o*P-a*N-l*S)*k,e[13]=(t*N-n*P+i*S)*k,e[14]=(g*y-p*b-m*v)*k,e[15]=(u*b-d*y+h*v)*k,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,p=r*d,g=a*u,m=a*d,_=o*d,v=l*c,y=l*u,M=l*d,b=n.x,w=n.y,x=n.z;return i[0]=(1-(g+_))*b,i[1]=(f+M)*b,i[2]=(p-y)*b,i[3]=0,i[4]=(f-M)*w,i[5]=(1-(h+_))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(p+y)*x,i[9]=(m-v)*x,i[10]=(1-(h+g))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ws.set(i[0],i[1],i[2]).length();const o=Ws.set(i[4],i[5],i[6]).length(),l=Ws.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Ni.copy(this);const c=1/a,u=1/o,d=1/l;return Ni.elements[0]*=c,Ni.elements[1]*=c,Ni.elements[2]*=c,Ni.elements[4]*=u,Ni.elements[5]*=u,Ni.elements[6]*=u,Ni.elements[8]*=d,Ni.elements[9]*=d,Ni.elements[10]*=d,t.setFromRotationMatrix(Ni),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=Hi,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let p,g;if(l)p=r/(a-r),g=a*r/(a-r);else if(o===Hi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Vo)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Hi,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,g;if(l)p=1/(a-r),g=a/(a-r);else if(o===Hi)p=-2/(a-r),g=-(a+r)/(a-r);else if(o===Vo)p=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ws=new O,Ni=new Ve,Kx=new O(0,0,0),$x=new O(1,1,1),Ir=new O,gl=new O,ii=new O,Kd=new Ve,$d=new Gi;class sr{constructor(e=0,t=0,n=0,i=sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $d.setFromEuler(this),this.setFromQuaternion($d,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sr.DEFAULT_ORDER="XYZ";class wg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zx=0;const Zd=new O,Xs=new Gi,fr=new Ve,_l=new O,$a=new O,Jx=new O,Qx=new Gi,Jd=new O(1,0,0),Qd=new O(0,1,0),jd=new O(0,0,1),ep={type:"added"},jx={type:"removed"},qs={type:"childadded",child:null},xu={type:"childremoved",child:null};class yt extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new O,t=new sr,n=new Gi,i=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new qe}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Jd,e)}rotateY(e){return this.rotateOnAxis(Qd,e)}rotateZ(e){return this.rotateOnAxis(jd,e)}translateOnAxis(e,t){return Zd.copy(e).applyQuaternion(this.quaternion),this.position.add(Zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jd,e)}translateY(e){return this.translateOnAxis(Qd,e)}translateZ(e){return this.translateOnAxis(jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_l.copy(e):_l.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt($a,_l,this.up):fr.lookAt(_l,$a,this.up),this.quaternion.setFromRotationMatrix(fr),i&&(fr.extractRotation(i.matrixWorld),Xs.setFromRotationMatrix(fr),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ep),qs.child=e,this.dispatchEvent(qs),qs.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jx),xu.child=e,this.dispatchEvent(xu),xu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ep),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,e,Jx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,Qx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}yt.DEFAULT_UP=new O(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ai extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ev={type:"move"};class vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),_=this._getHandJoint(c,g);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ev)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},xl={h:0,s:0,l:0};function Mu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=zf(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Mu(a,r,e+1/3),this.g=Mu(a,r,e),this.b=Mu(a,r,e-1/3)}return et.colorSpaceToWorking(this,i),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Ag[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return et.workingToColorSpace(wn.copy(this),e),Math.round(Ke(wn.r*255,0,255))*65536+Math.round(Ke(wn.g*255,0,255))*256+Math.round(Ke(wn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(wn.copy(this),t);const n=wn.r,i=wn.g,r=wn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Vt){et.workingToColorSpace(wn.copy(this),e);const t=wn.r,n=wn.g,i=wn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Nr),this.setHSL(Nr.h+e,Nr.s+t,Nr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nr),e.getHSL(xl);const n=Eo(Nr.h,xl.h,t),i=Eo(Nr.s,xl.s,t),r=Eo(Nr.l,xl.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Be;Be.NAMES=Ag;class Rg extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sr,this.environmentIntensity=1,this.environmentRotation=new sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ui=new O,dr=new O,Su=new O,pr=new O,Ys=new O,Ks=new O,tp=new O,yu=new O,Tu=new O,bu=new O,Eu=new Pt,wu=new Pt,Au=new Pt;class ki{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ui.subVectors(e,t),i.cross(Ui);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ui.subVectors(i,t),dr.subVectors(n,t),Su.subVectors(e,t);const a=Ui.dot(Ui),o=Ui.dot(dr),l=Ui.dot(Su),c=dr.dot(dr),u=dr.dot(Su),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,p=(a*u-o*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,pr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pr.x),l.addScaledVector(a,pr.y),l.addScaledVector(o,pr.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Eu.setScalar(0),wu.setScalar(0),Au.setScalar(0),Eu.fromBufferAttribute(e,t),wu.fromBufferAttribute(e,n),Au.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Eu,r.x),a.addScaledVector(wu,r.y),a.addScaledVector(Au,r.z),a}static isFrontFacing(e,t,n,i){return Ui.subVectors(n,t),dr.subVectors(e,t),Ui.cross(dr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),dr.subVectors(this.a,this.b),Ui.cross(dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ki.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return ki.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ys.subVectors(i,n),Ks.subVectors(r,n),yu.subVectors(e,n);const l=Ys.dot(yu),c=Ks.dot(yu);if(l<=0&&c<=0)return t.copy(n);Tu.subVectors(e,i);const u=Ys.dot(Tu),d=Ks.dot(Tu);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(Ys,a);bu.subVectors(e,r);const f=Ys.dot(bu),p=Ks.dot(bu);if(p>=0&&f<=p)return t.copy(r);const g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ks,o);const m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return tp.subVectors(r,i),o=(d-u)/(d-u+(f-p)),t.copy(i).addScaledVector(tp,o);const _=1/(m+g+h);return a=g*_,o=h*_,t.copy(n).addScaledVector(Ys,a).addScaledVector(Ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class cr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Oi):Oi.fromBufferAttribute(r,a),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vl.copy(n.boundingBox)),vl.applyMatrix4(e.matrixWorld),this.union(vl)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Za),Ml.subVectors(this.max,Za),$s.subVectors(e.a,Za),Zs.subVectors(e.b,Za),Js.subVectors(e.c,Za),Ur.subVectors(Zs,$s),Or.subVectors(Js,Zs),fs.subVectors($s,Js);let t=[0,-Ur.z,Ur.y,0,-Or.z,Or.y,0,-fs.z,fs.y,Ur.z,0,-Ur.x,Or.z,0,-Or.x,fs.z,0,-fs.x,-Ur.y,Ur.x,0,-Or.y,Or.x,0,-fs.y,fs.x,0];return!Ru(t,$s,Zs,Js,Ml)||(t=[1,0,0,0,1,0,0,0,1],!Ru(t,$s,Zs,Js,Ml))?!1:(Sl.crossVectors(Ur,Or),t=[Sl.x,Sl.y,Sl.z],Ru(t,$s,Zs,Js,Ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mr=[new O,new O,new O,new O,new O,new O,new O,new O],Oi=new O,vl=new cr,$s=new O,Zs=new O,Js=new O,Ur=new O,Or=new O,fs=new O,Za=new O,Ml=new O,Sl=new O,ds=new O;function Ru(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ds.fromArray(s,r);const o=i.x*Math.abs(ds.x)+i.y*Math.abs(ds.y)+i.z*Math.abs(ds.z),l=e.dot(ds),c=t.dot(ds),u=n.dot(ds);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Qt=new O,yl=new Ye;let tv=0;class Kn extends ks{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yg,this.updateRanges=[],this.gpuType=wi,this.version=0,this._normalizationScale=e!==void 0?$c(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yl.fromBufferAttribute(this,t),yl.applyMatrix3(e),this.setXY(t,yl.x,yl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Hf(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Gf(e,this.array)}}class Cg extends Kn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pg extends Kn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tn extends Kn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const nv=new cr,Ja=new O,Cu=new O;class ur{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nv.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ja.subVectors(e,this.center);const t=Ja.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ja,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ja.copy(e.center).add(Cu)),this.expandByPoint(Ja.copy(e.center).sub(Cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let iv=0;const vi=new Ve,Pu=new yt,Qs=new O,ri=new cr,Qa=new cr,dn=new O;class Wn extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yx(e)?Pg:Cg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,n){return vi.makeTranslation(e,t,n),this.applyMatrix4(vi),this}scale(e,t,n){return vi.makeScale(e,t,n),this.applyMatrix4(vi),this}lookAt(e){return Pu.lookAt(e),Pu.updateMatrix(),this.applyMatrix4(Pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Qa.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(ri.min,Qa.min),ri.expandByPoint(dn),dn.addVectors(ri.max,Qa.max),ri.expandByPoint(dn)):(ri.expandByPoint(Qa.min),ri.expandByPoint(Qa.max))}ri.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)dn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(dn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)dn.fromBufferAttribute(o,c),l&&(Qs.fromBufferAttribute(e,c),dn.add(Qs)),i=Math.max(i,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Kn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new O,l[P]=new O;const u=new O,d=new O,h=new O,f=new Ye,p=new Ye,g=new Ye,m=new O,_=new O;function v(P,A,N){c[P]=c[A]=c[N]=1,u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,A),h.fromBufferAttribute(n,N),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,A),g.fromBufferAttribute(r,N),d.sub(u),h.sub(u),p.sub(f),g.sub(f);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(I),_.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(I),o[P].add(m),o[A].add(m),o[N].add(m),l[P].add(_),l[A].add(_),l[N].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,A=y.length;P<A;++P){const N=y[P],I=N.start,G=N.count;for(let L=I,k=I+G;L<k;L+=3)v(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const M=new O,b=new O,w=new O,x=new O;function S(P){w.fromBufferAttribute(i,P),x.copy(w);const A=o[P];M.copy(A),M.sub(w.multiplyScalar(w.dot(A))).normalize(),b.crossVectors(x,A);const I=b.dot(l[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,I)}for(let P=0,A=n.count;P<A;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Kn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new O,r=new O,a=new O,o=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let h=0,f=e.count;h<f;h+=3){const p=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,p=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let _=0;_<u;_++)h[p++]=c[f++]}return new Kn(h,u,d)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yg,this.updateRanges=[],this.version=0,this.uuid=lr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=np(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=np(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function np(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=lr()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const In=new O;class Zc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?$c(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Pc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Kn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Pc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Hf(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Gf(e,this.data.array)}}const Lu=new O,rv=new O,sv=new qe;class zr{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Lu.subVectors(n,t).cross(rv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Lu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sv.getNormalMatrix(e),i=this.coplanarPoint(Lu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let av=0;class Pi extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=To,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ng,this.blendDst=ig,this.blendEquation=ua,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=du,this.stencilZFail=du,this.stencilZPass=du,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new zr().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gr=new O,Du=new O,Tl=new O,bl=new O;class Jc{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gr.copy(this.origin).addScaledVector(this.direction,t),gr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Du.copy(e).add(t).multiplyScalar(.5),Tl.copy(t).sub(e).normalize(),bl.copy(this.origin).sub(Du);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Tl),o=bl.dot(this.direction),l=-bl.dot(Tl),c=bl.lengthSq(),u=Math.abs(1-a*a);let d,h,f,p;if(u>0)if(d=a*l-o,h=a*o-l,p=r*u,d>=0)if(h>=-p)if(h<=p){const g=1/u;d*=g,h*=g,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Du).addScaledVector(Tl,h),f}intersectSphere(e,t){if(e.radius<0)return null;gr.subVectors(e.center,this.origin);const n=gr.dot(this.direction),i=gr.dot(gr)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gr)!==null}intersectTriangle(e,t,n,i,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,p=t.x-a.x,g=t.y-a.y,m=t.z-a.z,_=n.x-a.x,v=n.y-a.y,y=n.z-a.z,M=Math.abs(l),b=Math.abs(c),w=Math.abs(u);let x,S,P,A,N,I,G,L,k,W,B,te;if(M>=b&&M>=w?(P=l,I=d,k=p,te=_,l>=0?(x=c,S=u,A=h,N=f,G=g,L=m,W=v,B=y):(x=u,S=c,A=f,N=h,G=m,L=g,W=y,B=v)):b>=w?(P=c,I=h,k=g,te=v,c>=0?(x=u,S=l,A=f,N=d,G=m,L=p,W=y,B=_):(x=l,S=u,A=d,N=f,G=p,L=m,W=_,B=y)):(P=u,I=f,k=m,te=y,u>=0?(x=l,S=c,A=d,N=h,G=p,L=g,W=_,B=v):(x=c,S=l,A=h,N=d,G=g,L=p,W=v,B=_)),P===0)return null;const X=x/P,C=S/P,ne=1/P,Se=A-X*I,Fe=N-C*I,$=G-X*k,ue=L-C*k,Me=W-X*te,Te=B-C*te,me=Me*ue-Te*$,Ie=Se*Te-Fe*Me,_t=$*Fe-ue*Se;if(i){if(me<0||Ie<0||_t<0)return null}else if((me<0||Ie<0||_t<0)&&(me>0||Ie>0||_t>0))return null;const we=me+Ie+_t;if(we===0)return null;const Ge=ne*(me*I+Ie*k+_t*te);return(we>0?Ge<0:Ge>0)?null:this.at(Ge/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Sr extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sr,this.combine=Lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ip=new Ve,ps=new Jc,El=new ur,rp=new O,wl=new O,Al=new O,Rl=new O,Iu=new O,Cl=new O,sp=new O,Pl=new O;class Lt extends yt{constructor(e=new Wn,t=new Sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Cl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Iu.fromBufferAttribute(d,e),a?Cl.addScaledVector(Iu,u):Cl.addScaledVector(Iu.sub(t),u))}t.add(Cl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),El.copy(n.boundingSphere),El.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(El.containsPoint(ps.origin)===!1&&(ps.intersectSphere(El,rp)===null||ps.origin.distanceToSquared(rp)>(e.far-e.near)**2))&&(ip.copy(r).invert(),ps.copy(e.ray).applyMatrix4(ip),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,g=h.length;p<g;p++){const m=h[p],_=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,b=y;M<b;M+=3){const w=o.getX(M),x=o.getX(M+1),S=o.getX(M+2);i=Ll(this,_,e,n,c,u,d,w,x,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=p,_=g;m<_;m+=3){const v=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);i=Ll(this,a,e,n,c,u,d,v,y,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,g=h.length;p<g;p++){const m=h[p],_=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,b=y;M<b;M+=3){const w=M,x=M+1,S=M+2;i=Ll(this,_,e,n,c,u,d,w,x,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=p,_=g;m<_;m+=3){const v=m,y=m+1,M=m+2;i=Ll(this,a,e,n,c,u,d,v,y,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function ov(s,e,t,n,i,r,a,o){let l;if(e.side===Gn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===is,o),l===null)return null;Pl.copy(o),Pl.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Pl);return c<t.near||c>t.far?null:{distance:c,point:Pl.clone(),object:s}}function Ll(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,wl),s.getVertexPosition(l,Al),s.getVertexPosition(c,Rl);const u=ov(s,e,t,n,wl,Al,Rl,sp);if(u){const d=new O;ki.getBarycoord(sp,wl,Al,Rl,d),i&&(u.uv=ki.getInterpolatedAttribute(i,o,l,c,d,new Ye)),r&&(u.uv1=ki.getInterpolatedAttribute(r,o,l,c,d,new Ye)),a&&(u.normal=ki.getInterpolatedAttribute(a,o,l,c,d,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new O,materialIndex:0};ki.getNormal(wl,Al,Rl,h.normal),u.face=h,u.barycoord=d}return u}const ja=new Pt,ap=new Pt,op=new Pt,lv=new Pt,lp=new Ve,Dl=new O,Nu=new ur,cp=new Ve,Uu=new Jc;class cv extends Lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fd,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new cr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dl),this.boundingBox.expandByPoint(Dl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ur),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dl),this.boundingSphere.expandByPoint(Dl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nu.copy(this.boundingSphere),Nu.applyMatrix4(i),e.ray.intersectsSphere(Nu)!==!1&&(cp.copy(i).invert(),Uu.copy(e.ray).applyMatrix4(cp),!(this.boundingBox!==null&&Uu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Uu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ux?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ue("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ap.fromBufferAttribute(i.attributes.skinIndex,e),op.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(ja.copy(t),t.set(0,0,0,0)):(ja.set(t.x,t.y,t.z,1),t.set(0,0,0)),ja.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=op.getComponent(r);if(a!==0){const o=ap.getComponent(r);lp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(lv.copy(ja).applyMatrix4(lp),a)}}return t.isVector4&&(t.w=ja.w),t.applyMatrix4(this.bindMatrixInverse)}}class Dg extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wf extends cn{constructor(e=null,t=1,n=1,i,r,a,o,l,c=ln,u=ln,d,h){super(null,a,o,l,c,u,i,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const up=new Ve,uv=new Ve;class Xf{constructor(e=[],t=[]){this.uuid=lr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ue("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:uv;up.multiplyMatrices(o,t[r]),up.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Xf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Wf(t,e,e,zi,wi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Ue("Skeleton: No bone found with UUID:",r),a=new Dg),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Lc extends Kn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const js=new Ve,hp=new Ve,Il=[],fp=new cr,hv=new Ve,eo=new Lt,to=new ur;class qf extends Lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,hv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),fp.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(fp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ur),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),to.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(to)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(eo.geometry=this.geometry,eo.material=this.material,eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(n),e.ray.intersectsSphere(to)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,js),hp.multiplyMatrices(n,js),eo.matrixWorld=hp,eo.raycast(e,Il);for(let a=0,o=Il.length;a<o;a++){const l=Il[a];l.instanceId=r,l.object=this,t.push(l)}Il.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Lc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wf(new Float32Array(i*this.count),i,this.count,Of,wi));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ms=new ur,fv=new Ye(.5,.5),Nl=new O;class Xo{constructor(e=new zr,t=new zr,n=new zr,i=new zr,r=new zr,a=new zr){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hi,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],g=r[9],m=r[10],_=r[11],v=r[12],y=r[13],M=r[14],b=r[15];if(i[0].setComponents(c-a,f-u,_-p,b-v).normalize(),i[1].setComponents(c+a,f+u,_+p,b+v).normalize(),i[2].setComponents(c+o,f+d,_+g,b+y).normalize(),i[3].setComponents(c-o,f-d,_-g,b-y).normalize(),n)i[4].setComponents(l,h,m,M).normalize(),i[5].setComponents(c-l,f-h,_-m,b-M).normalize();else if(i[4].setComponents(c-l,f-h,_-m,b-M).normalize(),t===Hi)i[5].setComponents(c+l,f+h,_+m,b+M).normalize();else if(t===Vo)i[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const t=fv.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Nl.x=i.normal.x>0?e.max.x:e.min.x,Nl.y=i.normal.y>0?e.max.y:e.min.y,Nl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const dp=new Ve;class Yf{constructor(){this.coordinateSystem=Hi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const r=t[i];dp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Xo),n[i].setFromProjectionMatrix(dp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Xo),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new Yf().copy(this)}}class Ig extends Pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dc=new O,Ic=new O,pp=new Ve,no=new Jc,Ul=new ur,Ou=new O,mp=new O;class Kf extends yt{constructor(e=new Wn,t=new Ig){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Dc.fromBufferAttribute(t,i-1),Ic.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Dc.distanceTo(Ic);e.setAttribute("lineDistance",new tn(n,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ul.copy(n.boundingSphere),Ul.applyMatrix4(i),Ul.radius+=r,e.ray.intersectsSphere(Ul)===!1)return;pp.copy(i).invert(),no.copy(e.ray).applyMatrix4(pp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,m=p-1;g<m;g+=c){const _=u.getX(g),v=u.getX(g+1),y=Ol(this,e,no,l,_,v,g);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(p-1),m=u.getX(f),_=Ol(this,e,no,l,g,m,p-1);_&&t.push(_)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,m=p-1;g<m;g+=c){const _=Ol(this,e,no,l,g,g+1,g);_&&t.push(_)}if(this.isLineLoop){const g=Ol(this,e,no,l,p-1,f,p-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ol(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Dc.fromBufferAttribute(o,i),Ic.fromBufferAttribute(o,r),t.distanceSqToSegment(Dc,Ic,Ou,mp)>n)return;Ou.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ou);if(!(c<e.near||c>e.far))return{distance:c,point:mp.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const gp=new O,_p=new O;class dv extends Kf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)gp.fromBufferAttribute(t,i),_p.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gp.distanceTo(_p);e.setAttribute("lineDistance",new tn(n,1))}else Ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pv extends Kf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ng extends Pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xp=new Ve,Zh=new Jc,Fl=new ur,Bl=new O;class mv extends yt{constructor(e=new Wn,t=new Ng){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fl.copy(n.boundingSphere),Fl.applyMatrix4(i),Fl.radius+=r,e.ray.intersectsSphere(Fl)===!1)return;xp.copy(i).invert(),Zh.copy(e.ray).applyMatrix4(xp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=h,g=f;p<g;p++){const m=c.getX(p);Bl.fromBufferAttribute(d,m),vp(Bl,m,l,i,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=h,g=f;p<g;p++)Bl.fromBufferAttribute(d,p),vp(Bl,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function vp(s,e,t,n,i,r,a){const o=Zh.distanceSqToPoint(s);if(o<t){const l=new O;Zh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ug extends cn{constructor(e=[],t=La,n,i,r,a,o,l,c,u){super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gv extends cn{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Na extends cn{constructor(e,t,n=ir,i,r,a,o=ln,l=ln,c,u=rs,d=1){if(u!==rs&&u!==Xr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Og extends Na{constructor(e,t=ir,n=La,i,r,a=ln,o=ln,l,c=rs){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fg extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Va extends Wn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(d,2));function p(g,m,_,v,y,M,b,w,x,S,P){const A=M/x,N=b/S,I=M/2,G=b/2,L=w/2,k=x+1,W=S+1;let B=0,te=0;const X=new O;for(let C=0;C<W;C++){const ne=C*N-G;for(let Se=0;Se<k;Se++){const Fe=Se*A-I;X[g]=Fe*v,X[m]=ne*y,X[_]=L,c.push(X.x,X.y,X.z),X[g]=0,X[m]=0,X[_]=w>0?1:-1,u.push(X.x,X.y,X.z),d.push(Se/x),d.push(1-C/S),B+=1}}for(let C=0;C<S;C++)for(let ne=0;ne<x;ne++){const Se=h+ne+k*C,Fe=h+ne+k*(C+1),$=h+(ne+1)+k*(C+1),ue=h+(ne+1)+k*C;l.push(Se,Fe,ue),l.push(Fe,$,ue),te+=6}o.addGroup(f,te,P),f+=te,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class qo extends Wn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new O,u=new Ye;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new tn(a,3)),this.setAttribute("normal",new tn(o,3)),this.setAttribute("uv",new tn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qc extends Wn{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],d=[],h=[],f=[];let p=0;const g=[],m=n/2;let _=0;v(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new tn(d,3)),this.setAttribute("normal",new tn(h,3)),this.setAttribute("uv",new tn(f,2));function v(){const M=new O,b=new O;let w=0;const x=(t-e)/n;for(let S=0;S<=r;S++){const P=[],A=S/r,N=A*(t-e)+e;for(let I=0;I<=i;I++){const G=I/i,L=G*l+o,k=Math.sin(L),W=Math.cos(L);b.x=N*k,b.y=-A*n+m,b.z=N*W,d.push(b.x,b.y,b.z),M.set(k,x,W).normalize(),h.push(M.x,M.y,M.z),f.push(G,1-A),P.push(p++)}g.push(P)}for(let S=0;S<i;S++)for(let P=0;P<r;P++){const A=g[P][S],N=g[P+1][S],I=g[P+1][S+1],G=g[P][S+1];(e>0||P!==0)&&(u.push(A,N,G),w+=3),(t>0||P!==r-1)&&(u.push(N,I,G),w+=3)}c.addGroup(_,w,0),_+=w}function y(M){const b=p,w=new Ye,x=new O;let S=0;const P=M===!0?e:t,A=M===!0?1:-1;for(let I=1;I<=i;I++)d.push(0,m*A,0),h.push(0,A,0),f.push(.5,.5),p++;const N=p;for(let I=0;I<=i;I++){const L=I/i*l+o,k=Math.cos(L),W=Math.sin(L);x.x=P*W,x.y=m*A,x.z=P*k,d.push(x.x,x.y,x.z),h.push(0,A,0),w.x=k*.5+.5,w.y=W*.5*A+.5,f.push(w.x,w.y),p++}for(let I=0;I<i;I++){const G=b+I,L=N+I;M===!0?u.push(L,L+1,G):u.push(L+1,L,G),S+=3}c.addGroup(_,S,M===!0?1:2),_+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _v{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ue("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const u=n[i],h=n[i+1]-u,f=(a-u)/h;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new Ye:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new O,i=[],r=[],a=[],o=new O,l=new Ve;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Ke(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ke(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}function $f(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,i(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Mp=new O,Sp=new O,Fu=new $f,Bu=new $f,ku=new $f;class Bg extends _v{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new O){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(Sp.subVectors(i[0],i[1]).add(i[0]),c=Sp);const d=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(Mp.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Mp),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),Fu.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,g,m),Bu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,g,m),ku.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,g,m)}else this.curveType==="catmullrom"&&(Fu.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Bu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),ku.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Fu.calc(l),Bu.calc(l),ku.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new O().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class cl extends Wn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,f=[],p=[],g=[],m=[];for(let _=0;_<u;_++){const v=_*h-a;for(let y=0;y<c;y++){const M=y*d-r;p.push(M,-v,0),g.push(0,0,1),m.push(y/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<o;v++){const y=v+c*_,M=v+c*(_+1),b=v+1+c*(_+1),w=v+1+c*_;f.push(y,M,w),f.push(M,b,w)}this.setIndex(f),this.setAttribute("position",new tn(p,3)),this.setAttribute("normal",new tn(g,3)),this.setAttribute("uv",new tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zf extends Wn{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],d=[],h=new O,f=new O,p=new O;for(let g=0;g<=n;g++){const m=a+g/n*o;for(let _=0;_<=i;_++){const v=_/i*r;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(_/i),d.push(g/n)}}for(let g=1;g<=n;g++)for(let m=1;m<=i;m++){const _=(i+1)*g+m-1,v=(i+1)*(g-1)+m-1,y=(i+1)*(g-1)+m,M=(i+1)*g+m;l.push(_,v,M),l.push(v,y,M)}this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class xv extends Pi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Ua(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(yp(i))i.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(yp(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function On(s){const e={};for(let t=0;t<s.length;t++){const n=Ua(s[t]);for(const i in n)e[i]=n[i]}return e}function yp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function vv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function kg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Mv={clone:Ua,merge:On};var Sv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Us extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sv,this.fragmentShader=yv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ua(e.uniforms),this.uniformsGroups=vv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ye().fromArray(i.value);break;case"v3":this.uniforms[n].value=new O().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Tv extends Us{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Oa extends Pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vn extends Oa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return va('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){va('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class bv extends Pi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sr,this.combine=Lf,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ev extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wv extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Hr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function fo(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Av(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Tp(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Rv(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Wa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Cv extends Wa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kd,endingEnd:kd}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case zd:r=e,o=2*t-n;break;case Hd:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zd:a=e,l=2*n-t;break;case Hd:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),g=p*p,m=g*p,_=-h*m+2*h*g-h*p,v=(1+h)*m+(-1.5-2*h)*g+(-.5+h)*p+1,y=(-1-f)*m+(1.5+f)*g+.5*p,M=f*m-f*g;for(let b=0;b!==o;++b)r[b]=_*a[u+b]+v*a[c+b]+y*a[l+b]+M*a[d+b];return r}}class Pv extends Wa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}}class Lv extends Wa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dv extends Wa{interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){const p=(n-t)/(i-t),g=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*g+a[l+m]*p;return r}const h=o*2,f=e-1;for(let p=0;p!==o;++p){const g=a[c+p],m=a[l+p],_=f*h+p*2,v=d[_],y=d[_+1],M=e*h+p*2,b=u[M],w=u[M+1],x=Nv(n,t,v,b,i);r[p]=zg(x,g,y,w,m)}return r}}function zg(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Iv(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Nv(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){const o=zg(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;const l=Iv(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class Vi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hr(t,this.TimeBufferType),this.values=Hr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hr(e.times,Array),values:Hr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),fo(e.settings)&&(n.settings={inTangents:Hr(e.settings.inTangents,Array),outTangents:Hr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Dv(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ho:t=this.InterpolantFactoryMethodDiscrete;break;case Go:t=this.InterpolantFactoryMethodLinear;break;case fu:t=this.InterpolantFactoryMethodSmooth;break;case Bd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ue("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ho;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return fu;case this.InterpolantFactoryMethodBezier:return Bd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;fo(this.settings)&&(bp(this.settings.inTangents,e),bp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;fo(this.settings)&&(Ep(this.settings.inTangents,e),Ep(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){He("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){He("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Tx(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){He("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fu,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){const g=t[d+p];if(g!==t[h+p]||g!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,fo(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function bp(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function Ep(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Vi.prototype.ValueTypeName="";Vi.prototype.TimeBufferType=Float32Array;Vi.prototype.ValueBufferType=Float32Array;Vi.prototype.DefaultInterpolation=Go;class Xa extends Vi{constructor(e,t,n){super(e,t,n)}}Xa.prototype.ValueTypeName="bool";Xa.prototype.ValueBufferType=Array;Xa.prototype.DefaultInterpolation=Ho;Xa.prototype.InterpolantFactoryMethodLinear=void 0;Xa.prototype.InterpolantFactoryMethodSmooth=void 0;class Hg extends Vi{constructor(e,t,n,i){super(e,t,n,i)}}Hg.prototype.ValueTypeName="color";class Yo extends Vi{constructor(e,t,n,i){super(e,t,n,i)}}Yo.prototype.ValueTypeName="number";class Uv extends Wa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Gi.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Ko extends Vi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Uv(this.times,this.values,this.getValueSize(),e)}}Ko.prototype.ValueTypeName="quaternion";Ko.prototype.InterpolantFactoryMethodSmooth=void 0;class qa extends Vi{constructor(e,t,n){super(e,t,n)}}qa.prototype.ValueTypeName="string";qa.prototype.ValueBufferType=Array;qa.prototype.DefaultInterpolation=Ho;qa.prototype.InterpolantFactoryMethodLinear=void 0;qa.prototype.InterpolantFactoryMethodSmooth=void 0;class Nc extends Vi{constructor(e,t,n,i){super(e,t,n,i)}}Nc.prototype.ValueTypeName="vector";class Ov{constructor(e="",t=-1,n=[],i=hx){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=lr(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Bv(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Vi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Av(l);l=Tp(l,1,u),c=Tp(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Yo(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Fv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yo;case"vector":case"vector2":case"vector3":case"vector4":return Nc;case"color":return Hg;case"quaternion":return Ko;case"bool":case"boolean":return Xa;case"string":return qa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Bv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Fv(s.type);if(s.times===void 0){const n=[],i=[];Rv(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),fo(s.settings)&&(t.settings={inTangents:Hr(s.settings.inTangents,Float32Array),outTangents:Hr(s.settings.outTangents,Float32Array)}),t}const yr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(wp(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!wp(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function wp(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class kv{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const zv=new kv;class zs{constructor(e){this.manager=e!==void 0?e:zv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}zs.DEFAULT_MATERIAL_NAME="__DEFAULT";const _r={};class Hv extends Error{constructor(e,t){super(e),this.response=t}}class Uc extends zs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=yr.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(_r[e]!==void 0){_r[e].push({onLoad:t,onProgress:n,onError:i});return}_r[e]=[],_r[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ue("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=_r[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,p=f!==0;let g=0;const m=new ReadableStream({start(_){v();function v(){d.read().then(({done:y,value:M})=>{if(y)_.close();else{g+=M.byteLength;const b=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:f});for(let w=0,x=u.length;w<x;w++){const S=u[w];S.onProgress&&S.onProgress(b)}_.enqueue(M),v()}},y=>{_.error(y)})}}});return new Response(m)}else throw new Hv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{yr.add(`file:${e}`,c);const u=_r[e];delete _r[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=_r[e];if(u===void 0)throw this.manager.itemError(e),c;delete _r[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ea=new WeakMap;class Gv extends zs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=yr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=ea.get(a);d===void 0&&(d=[],ea.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=Wo("img");function l(){u(),t&&t(this);const d=ea.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}ea.delete(this),r.manager.itemEnd(e)}function c(d){u(),i&&i(d),yr.remove(`image:${e}`);const h=ea.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onError&&p.onError(d)}ea.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),yr.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class po extends zs{constructor(e){super(e)}load(e,t,n,i){const r=new cn,a=new Gv(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class jc extends yt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Vv extends jc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const zu=new Ve,Ap=new O,Rp=new O;class Jf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xo,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ap.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ap),Rp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){zu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(zu,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Vo||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const kl=new O,zl=new Gi,Wi=new O;class Gg extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kl,zl,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kl,zl,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(kl,zl,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kl,zl,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fr=new O,Cp=new Ye,Pp=new Ye;class zn extends Gg{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z),Fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z)}getViewSize(e,t){return this.getViewBounds(e,Cp,Pp),t.subVectors(Pp,Cp)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Wv extends Jf{constructor(){super(new zn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ia*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Xv extends jc{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Wv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class qv extends Jf{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0}}class Vg extends jc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Qf extends Gg{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yv extends Jf{constructor(){super(new Qf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jf extends jc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Yv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Qr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Hu=new WeakMap;class Kv extends zs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ue("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ue("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=yr.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Hu.has(a)===!0?(i&&i(Hu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return yr.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Hu.set(l,c),yr.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});yr.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ta=-90,na=1;class Jh extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zn(ta,na,e,t);i.layers=this.layers,this.add(i);const r=new zn(ta,na,e,t);r.layers=this.layers,this.add(r);const a=new zn(ta,na,e,t);a.layers=this.layers,this.add(a);const o=new zn(ta,na,e,t);o.layers=this.layers,this.add(o);const l=new zn(ta,na,e,t);l.layers=this.layers,this.add(l);const c=new zn(ta,na,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=g,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class $v extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const ed="\\[\\]\\.:\\/",Zv=new RegExp("["+ed+"]","g"),td="[^"+ed+"]",Jv="[^"+ed.replace("\\.","")+"]",Qv=/((?:WC+[\/:])*)/.source.replace("WC",td),jv=/(WCOD+)?/.source.replace("WCOD",Jv),eM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",td),tM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",td),nM=new RegExp("^"+Qv+jv+eM+tM+"$"),iM=["material","materials","bones","map"];class rM{constructor(e,t,n){const i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zv,"")}static parseTrackName(e){const t=nM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);iM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;He("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=rM;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class sM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ue("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class aM{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function Lp(s,e,t,n){const i=oM(n);switch(t){case gg:return s*e;case Of:return s*e/i.components*i.byteLength;case Ff:return s*e/i.components*i.byteLength;case Ns:return s*e*2/i.components*i.byteLength;case Bf:return s*e*2/i.components*i.byteLength;case _g:return s*e*3/i.components*i.byteLength;case zi:return s*e*4/i.components*i.byteLength;case kf:return s*e*4/i.components*i.byteLength;case lc:case cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uc:case hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mh:case yh:return Math.max(s,16)*Math.max(e,8)/4;case vh:case Sh:return Math.max(s,8)*Math.max(e,8)/2;case Th:case bh:case wh:case Ah:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Eh:case wc:case Rh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case kh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Vh:case Wh:case Xh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case qh:case Yh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ac:case Kh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function oM(s){switch(s){case ci:case fg:return{byteLength:1,components:1};case zo:case dg:case rr:return{byteLength:2,components:1};case Nf:case Uf:return{byteLength:2,components:4};case ir:case If:case wi:return{byteLength:4,components:1};case pg:case mg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pf}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pf);function Wg(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function lM(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],g=d[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++h,d[h]=g)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const g=d[f];s.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var cM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_M=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,CM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,PM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,LM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,DM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,IM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BM="gl_FragColor = linearToOutputTexel( gl_FragColor );",kM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,XM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$M=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,eS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,tS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uS=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_S=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yS=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ES=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,LS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,US=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,BS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,XS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$S=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ZS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ey=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ty=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ny=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ly=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hy=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,py=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,my=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_y=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ty=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,by=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ey=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ay=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ry=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Py=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ly=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Iy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ny=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,By=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ky=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:cM,alphahash_pars_fragment:uM,alphamap_fragment:hM,alphamap_pars_fragment:fM,alphatest_fragment:dM,alphatest_pars_fragment:pM,aomap_fragment:mM,aomap_pars_fragment:gM,batching_pars_vertex:_M,batching_vertex:xM,begin_vertex:vM,beginnormal_vertex:MM,bsdfs:SM,iridescence_fragment:yM,bumpmap_pars_fragment:TM,clipping_planes_fragment:bM,clipping_planes_pars_fragment:EM,clipping_planes_pars_vertex:wM,clipping_planes_vertex:AM,color_fragment:RM,color_pars_fragment:CM,color_pars_vertex:PM,color_vertex:LM,common:DM,defaultnormal_vertex:IM,displacementmap_pars_vertex:NM,displacementmap_vertex:UM,emissivemap_fragment:OM,emissivemap_pars_fragment:FM,colorspace_fragment:BM,colorspace_pars_fragment:kM,envmap_fragment:zM,envmap_common_pars_fragment:HM,envmap_pars_fragment:GM,envmap_pars_vertex:VM,envmap_physical_pars_fragment:eS,envmap_vertex:WM,fog_vertex:XM,fog_pars_vertex:qM,fog_fragment:YM,fog_pars_fragment:KM,gradientmap_pars_fragment:$M,lightmap_pars_fragment:ZM,lights_lambert_fragment:JM,lights_lambert_pars_fragment:QM,lights_pars_begin:jM,lights_toon_fragment:tS,lights_toon_pars_fragment:nS,lights_phong_fragment:iS,lights_phong_pars_fragment:rS,lights_physical_fragment:sS,lights_physical_pars_fragment:aS,lights_fragment_begin:oS,lights_fragment_maps:lS,lights_fragment_end:cS,lightprobes_pars_fragment:uS,logdepthbuf_fragment:hS,logdepthbuf_pars_fragment:fS,logdepthbuf_pars_vertex:dS,logdepthbuf_vertex:pS,map_fragment:mS,map_pars_fragment:gS,map_particle_fragment:_S,map_particle_pars_fragment:xS,metalnessmap_fragment:vS,metalnessmap_pars_fragment:MS,morphinstance_vertex:SS,morphcolor_vertex:yS,morphnormal_vertex:TS,morphtarget_pars_vertex:bS,morphtarget_vertex:ES,normal_fragment_begin:wS,normal_fragment_maps:AS,normal_pars_fragment:RS,normal_pars_vertex:CS,normal_vertex:PS,normalmap_pars_fragment:LS,clearcoat_normal_fragment_begin:DS,clearcoat_normal_fragment_maps:IS,clearcoat_pars_fragment:NS,iridescence_pars_fragment:US,opaque_fragment:OS,packing:FS,premultiplied_alpha_fragment:BS,project_vertex:kS,dithering_fragment:zS,dithering_pars_fragment:HS,roughnessmap_fragment:GS,roughnessmap_pars_fragment:VS,shadowmap_pars_fragment:WS,shadowmap_pars_vertex:XS,shadowmap_vertex:qS,shadowmask_pars_fragment:YS,skinbase_vertex:KS,skinning_pars_vertex:$S,skinning_vertex:ZS,skinnormal_vertex:JS,specularmap_fragment:QS,specularmap_pars_fragment:jS,tonemapping_fragment:ey,tonemapping_pars_fragment:ty,transmission_fragment:ny,transmission_pars_fragment:iy,uv_pars_fragment:ry,uv_pars_vertex:sy,uv_vertex:ay,worldpos_vertex:oy,background_vert:ly,background_frag:cy,backgroundCube_vert:uy,backgroundCube_frag:hy,cube_vert:fy,cube_frag:dy,depth_vert:py,depth_frag:my,distance_vert:gy,distance_frag:_y,equirect_vert:xy,equirect_frag:vy,linedashed_vert:My,linedashed_frag:Sy,meshbasic_vert:yy,meshbasic_frag:Ty,meshlambert_vert:by,meshlambert_frag:Ey,meshmatcap_vert:wy,meshmatcap_frag:Ay,meshnormal_vert:Ry,meshnormal_frag:Cy,meshphong_vert:Py,meshphong_frag:Ly,meshphysical_vert:Dy,meshphysical_frag:Iy,meshtoon_vert:Ny,meshtoon_frag:Uy,points_vert:Oy,points_frag:Fy,shadow_vert:By,shadow_frag:ky,sprite_vert:zy,sprite_frag:Hy},ye={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},$i={basic:{uniforms:On([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:On([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:On([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:On([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:On([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Be(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:On([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:On([ye.points,ye.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:On([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:On([ye.common,ye.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:On([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:On([ye.sprite,ye.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:On([ye.common,ye.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:On([ye.lights,ye.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};$i.physical={uniforms:On([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Hl={r:0,b:0,g:0},Gy=new Ve,Xg=new qe;Xg.set(-1,0,0,0,1,0,0,0,1);function Vy(s,e,t,n,i,r){const a=new Be(0);let o=i===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const M=v.backgroundBlurriness>0;y=e.get(y,M)}return y}function p(v){let y=!1;const M=f(v);M===null?m(a,o):M&&M.isColor&&(m(M,1),y=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(v,y){const M=f(y);M&&M.isCubeTexture?(c===void 0&&(c=new Lt(new Va(1,1,1),new Us({name:"BackgroundCubeMaterial",uniforms:Ua($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Gy.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xg),c.material.toneMapped=et.getTransfer(M.colorSpace)!==vt,(u!==M||d!==M.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Lt(new cl(2,2),new Us({name:"BackgroundMaterial",uniforms:Ua($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=et.getTransfer(M.colorSpace)!==vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB(Hl,kg(s)),t.buffers.color.setClear(Hl.r,Hl.g,Hl.b,y,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:p,addToRenderList:g,dispose:_}}function Wy(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,a=!1;function o(N,I,G,L,k){let W=!1;const B=d(N,L,G,I);r!==B&&(r=B,c(r.object)),W=f(N,L,G,k),W&&p(N,L,G,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,M(N,I,G,L),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function u(N){return s.deleteVertexArray(N)}function d(N,I,G,L){const k=L.wireframe===!0;let W=n[I.id];W===void 0&&(W={},n[I.id]=W);const B=N.isInstancedMesh===!0?N.id:0;let te=W[B];te===void 0&&(te={},W[B]=te);let X=te[G.id];X===void 0&&(X={},te[G.id]=X);let C=X[k];return C===void 0&&(C=h(l()),X[k]=C),C}function h(N){const I=[],G=[],L=[];for(let k=0;k<t;k++)I[k]=0,G[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:L,object:N,attributes:{},index:null}}function f(N,I,G,L){const k=r.attributes,W=I.attributes;let B=0;const te=G.getAttributes();for(const X in te)if(te[X].location>=0){const ne=k[X];let Se=W[X];if(Se===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor)),ne===void 0||ne.attribute!==Se||Se&&ne.data!==Se.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function p(N,I,G,L){const k={},W=I.attributes;let B=0;const te=G.getAttributes();for(const X in te)if(te[X].location>=0){let ne=W[X];ne===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor));const Se={};Se.attribute=ne,ne&&ne.data&&(Se.data=ne.data),k[X]=Se,B++}r.attributes=k,r.attributesNum=B,r.index=L}function g(){const N=r.newAttributes;for(let I=0,G=N.length;I<G;I++)N[I]=0}function m(N){_(N,0)}function _(N,I){const G=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;G[N]=1,L[N]===0&&(s.enableVertexAttribArray(N),L[N]=1),k[N]!==I&&(s.vertexAttribDivisor(N,I),k[N]=I)}function v(){const N=r.newAttributes,I=r.enabledAttributes;for(let G=0,L=I.length;G<L;G++)I[G]!==N[G]&&(s.disableVertexAttribArray(G),I[G]=0)}function y(N,I,G,L,k,W,B){B===!0?s.vertexAttribIPointer(N,I,G,k,W):s.vertexAttribPointer(N,I,G,L,k,W)}function M(N,I,G,L){g();const k=L.attributes,W=G.getAttributes(),B=I.defaultAttributeValues;for(const te in W){const X=W[te];if(X.location>=0){let C=k[te];if(C===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(C=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(C=N.instanceColor)),C!==void 0){const ne=C.normalized,Se=C.itemSize,Fe=e.get(C);if(Fe===void 0)continue;const $=Fe.buffer,ue=Fe.type,Me=Fe.bytesPerElement,Te=ue===s.INT||ue===s.UNSIGNED_INT||C.gpuType===If;if(C.isInterleavedBufferAttribute){const me=C.data,Ie=me.isInterleavedBuffer===!0?me.stride:me.itemSize,_t=C.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let we=0;we<X.locationSize;we++)_(X.location+we,me.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let we=0;we<X.locationSize;we++)m(X.location+we);s.bindBuffer(s.ARRAY_BUFFER,$);for(let we=0;we<X.locationSize;we++)y(X.location+we,Se/X.locationSize,ue,ne,Ie*Me,(_t+Se/X.locationSize*we)*Me,Te)}else{if(C.isInstancedBufferAttribute){for(let me=0;me<X.locationSize;me++)_(X.location+me,C.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let me=0;me<X.locationSize;me++)m(X.location+me);s.bindBuffer(s.ARRAY_BUFFER,$);for(let me=0;me<X.locationSize;me++)y(X.location+me,Se/X.locationSize,ue,ne,Se*Me,Se/X.locationSize*me*Me,Te)}}else if(B!==void 0){const ne=B[te];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(X.location,ne);break;case 3:s.vertexAttrib3fv(X.location,ne);break;case 4:s.vertexAttrib4fv(X.location,ne);break;default:s.vertexAttrib1fv(X.location,ne)}}}}v()}function b(){P();for(const N in n){const I=n[N];for(const G in I){const L=I[G];for(const k in L){const W=L[k];for(const B in W)u(W[B].object),delete W[B];delete L[k]}}delete n[N]}}function w(N){if(n[N.id]===void 0)return;const I=n[N.id];for(const G in I){const L=I[G];for(const k in L){const W=L[k];for(const B in W)u(W[B].object),delete W[B];delete L[k]}}delete n[N.id]}function x(N){for(const I in n){const G=n[I];for(const L in G){const k=G[L];if(k[N.id]===void 0)continue;const W=k[N.id];for(const B in W)u(W[B].object),delete W[B];delete k[N.id]}}}function S(N){for(const I in n){const G=n[I],L=N.isInstancedMesh===!0?N.id:0,k=G[L];if(k!==void 0){for(const W in k){const B=k[W];for(const te in B)u(B[te].object),delete B[te];delete k[W]}delete G[L],Object.keys(G).length===0&&delete n[I]}}}function P(){A(),a=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function Xy(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function qy(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==zi&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const S=x===rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==ci&&x!==wi&&!S&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ue("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ue("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,maxSamples:b,samples:w}}function Yy(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new zr,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,_=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,y=v*4;let M=_.clippingState||null;l.value=M,M=u(p,h,y,f);for(let b=0;b!==y;++b)M[b]=t[b];_.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,p!==!0||m===null){const _=f+g*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<_)&&(m=new Float32Array(_));for(let y=0,M=f;y!==g;++y,M+=4)a.copy(d[y]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}class nd extends tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ug(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Va(5,5,5),r=new Us({name:"CubemapFromEquirect",uniforms:Ua(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gn,blending:xa});r.uniforms.tEquirect.value=t;const a=new Lt(i,r),o=t.minFilter;return t.minFilter===Qi&&(t.minFilter=vn),new Jh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Dp=256,Ky=3,$y=20,qg=256,Yg=16,Zy=3,Jy=new O,Qy=new Be;class $o{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Jh(1,10,null),this._boxMesh=new Lt(new Va(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Jy}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,g=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(e.background=l.getClearColor(Qy));const m=new Jh(n,i,u);return m.position.copy(o),m.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=p,e.background=g,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Dp,bg(e))}_fromTexture(e,t){e.mapping===La||e.mapping===ko?this._setSize(e.image.length===0?Dp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Ip(e,!1,!1),n=Math.log2(e)-Ky;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ip(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===La||e.mapping===ko?(this._cubemapMaterial===null&&(this._cubemapMaterial=Up()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Np()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=jy(),this._integrationMaterial=eT());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Yg);for(let a=0;a<=n;a++){const o=$o.lodToRoughness(a,n);if(a>n-Zy)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(qg*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=tT());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}}function Ip(s,e,t){return new nd(s,{minFilter:Qi,generateMipmaps:e,type:rr,colorSpace:jn,depthBuffer:t})}function ul(s,e,t){return new Us({name:s,uniforms:e,vertexShader:$e.cube_vert,fragmentShader:t,side:Gn,blending:xa,depthTest:!1,depthWrite:!1})}function jy(){return ul("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qg}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function eT(){return ul("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Yg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function tT(){return ul("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$y}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Np(){return ul("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Up(){return ul("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function nT(s){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===uu||f===hu)if(e.has(h)){const p=e.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const g=new nd(p.height);return g.fromEquirectangularTexture(s,h),e.set(h,g),h.addEventListener("dispose",c),o(g.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const f=h.mapping,p=f===uu||f===hu,g=f===La||f===ko;if(p||g){let m=t.get(h);const _=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new $o(s)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const v=h.image;return p&&v&&v.height>0||g&&v&&l(v)?(n===null&&(n=new $o(s)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===uu?h.mapping=La:f===hu&&(h.mapping=ko),h}function l(h){let f=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&f++;return f===p}function c(h){const f=h.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function iT(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&va("WebGLRenderer: "+n+" extension not supported."),i}}}function rT(s,e,t,n){const i={},r=new WeakMap,a=new FinalizationRegistry(p=>delete i[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(const m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete i[p.id],a.unregister(p);const g=r.get(p);g&&(e.remove(g),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,g){return i[g.id]!==void 0||(g.addEventListener("dispose",o),i[g.id]=new WeakRef(g),a.register(g,g.id,g),t.memory.geometries++),g}function u(p){const g=p.attributes;for(const m in g)e.update(g[m],s.ARRAY_BUFFER)}function d(p){const g=p.index,m=p.attributes.position;let _=0;if(m===void 0)return;const v=g!==null?g.array.length:m.array.length/3-1,y=m.count>=65535?Pg:Cg,M=new y(Math.ceil(v/3)*6,1),b=M.array;if(g!==null){const x=g.array;_=g.version;for(let S=0,P=0;S<v;S+=3){const A=x[S+0],N=x[S+1],I=x[S+2];b[P++]=A,b[P++]=N,b[P++]=N,b[P++]=I,b[P++]=I,b[P++]=A}}else{_=m.version;for(let x=0,S=0;x<v;x+=3){const P=x+0,A=x+1,N=x+2;b[S++]=P,b[S++]=A,b[S++]=A,b[S++]=N,b[S++]=N,b[S++]=P}}M.version=_;const w=r.get(p);w&&e.remove(w),r.set(p,M)}function h(p){const g=r.get(p);if(g){const m=p.index;m!==null&&g.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(const p in i){const g=i[p].deref();g!==void 0&&l(g)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function sT(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){s.drawElements(n,h,r,d*a),t.update(h,n,1)}function c(d,h,f){f!==0&&(s.drawElementsInstanced(n,h,r,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let g=0;for(let m=0;m<f;m++)g+=h[m];t.update(g,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function aT(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function oT(s,e,t){const n=new WeakMap,i=new Pt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let P=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",P)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;f===!0&&(y=1),p===!0&&(y=2),g===!0&&(y=3);let M=o.attributes.position.count*y,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*b*4*d),x=new Eg(w,M,b,d);x.type=wi,x.needsUpdate=!0;const S=y*4;for(let A=0;A<d;A++){const N=m[A],I=_[A],G=v[A],L=M*b*4*A;for(let k=0;k<N.count;k++){const W=k*S;f===!0&&(i.fromBufferAttribute(N,k),w[L+W+0]=i.x,w[L+W+1]=i.y,w[L+W+2]=i.z,w[L+W+3]=0),p===!0&&(i.fromBufferAttribute(I,k),w[L+W+4]=i.x,w[L+W+5]=i.y,w[L+W+6]=i.z,w[L+W+7]=0),g===!0&&(i.fromBufferAttribute(G,k),w[L+W+8]=i.x,w[L+W+9]=i.y,w[L+W+10]=i.z,w[L+W+11]=G.itemSize===4?i.w:1)}}h={count:d,texture:x,size:new Ye(M,b)},n.set(o,h),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function lT(s,e,t,n,i){let r=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const cT={[rg]:"LINEAR_TONE_MAPPING",[sg]:"REINHARD_TONE_MAPPING",[ag]:"CINEON_TONE_MAPPING",[og]:"ACES_FILMIC_TONE_MAPPING",[cg]:"AGX_TONE_MAPPING",[Df]:"NEUTRAL_TONE_MAPPING",[lg]:"CUSTOM_TONE_MAPPING"};function uT(s,e,t,n,i,r){const a=new tr(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Wn;u.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new tn([0,2,0,0,2,0],2));const d=new Tv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Lt(u,d),f=new Qf(-1,1,1,-1,0,1);let p=null,g=null,m=!1,_,v=null,y=[],M=!1;this.setSize=function(b,w){a.setSize(b,w),o!==null&&o.setSize(b,w),l!==null&&l.setSize(b,w);for(let x=0;x<y.length;x++){const S=y[x];S.setSize&&S.setSize(b,w)}},this.setEffects=function(b){y=b,M=y.length>0&&y[0].isRenderPass===!0;const w=a.width,x=a.height;y.length>0&&o===null&&(o=new tr(w,x,{type:rr,depthBuffer:!1,stencilBuffer:!1}),l=new tr(w,x,{type:rr,depthBuffer:!1,stencilBuffer:!1}));const S=i===!0&&y.some(P=>P.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Na(w,x),r===!0&&(c.format=Xr,c.type=Da)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let P=0;P<y.length;P++){const A=y[P];A.setSize&&A.setSize(w,x),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(b,w){if(m||b.toneMapping===br&&y.length===0)return!1;if(v=w,w!==null){const x=w.width,S=w.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return M===!1&&b.setRenderTarget(a),_=b.toneMapping,b.toneMapping=br,!0},this.hasRenderPass=function(){return M},this.end=function(b,w){b.toneMapping=_,m=!0;let x=a,S=o;for(let P=0;P<y.length;P++){const A=y[P];A.enabled!==!1&&(A.render(b,S,x,w),A.needsSwap!==!1&&(x=S,S=S===o?l:o))}if(p!==b.outputColorSpace||g!==b.toneMapping){p=b.outputColorSpace,g=b.toneMapping,d.defines={},et.getTransfer(p)===vt&&(d.defines.SRGB_TRANSFER="");const P=cT[g];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(v),b.render(h,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}const Kg=new cn,$g=new Na(1,1),Zg=new Og(1),Jg=new Eg,Qg=new Yx,jg=new Ug,Op=[],Fp=[],Bp=new Float32Array(16),kp=new Float32Array(9),zp=new Float32Array(4);function Ya(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Op[i];if(r===void 0&&(r=new Float32Array(i),Op[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function un(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function hn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function eu(s,e){let t=Fp[e];t===void 0&&(t=new Int32Array(e),Fp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function hT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function fT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2fv(this.addr,e),hn(t,e)}}function dT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;s.uniform3fv(this.addr,e),hn(t,e)}}function pT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4fv(this.addr,e),hn(t,e)}}function mT(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;zp.set(n),s.uniformMatrix2fv(this.addr,!1,zp),hn(t,n)}}function gT(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;kp.set(n),s.uniformMatrix3fv(this.addr,!1,kp),hn(t,n)}}function _T(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;Bp.set(n),s.uniformMatrix4fv(this.addr,!1,Bp),hn(t,n)}}function xT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function vT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2iv(this.addr,e),hn(t,e)}}function MT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3iv(this.addr,e),hn(t,e)}}function ST(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4iv(this.addr,e),hn(t,e)}}function yT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function TT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2uiv(this.addr,e),hn(t,e)}}function bT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3uiv(this.addr,e),hn(t,e)}}function ET(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4uiv(this.addr,e),hn(t,e)}}function tu(s){return s.version===0&&(s.compareFunction=Sg,s.needsUpdate=!0),s}function wT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=tu($g):r=Kg,t.setTexture2D(e||r,i)}function AT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qg,i)}function RT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=tu(Zg):r=jg,t.setTextureCube(e||r,i)}function CT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jg,i)}function PT(s){switch(s){case 5126:return hT;case 35664:return fT;case 35665:return dT;case 35666:return pT;case 35674:return mT;case 35675:return gT;case 35676:return _T;case 5124:case 35670:return xT;case 35667:case 35671:return vT;case 35668:case 35672:return MT;case 35669:case 35673:return ST;case 5125:return yT;case 36294:return TT;case 36295:return bT;case 36296:return ET;case 35678:case 36198:case 36298:case 36306:case 35682:return wT;case 35679:case 36299:case 36307:return AT;case 35680:case 36300:case 36308:case 36293:return RT;case 36289:case 36303:case 36311:case 36292:return CT}}function LT(s,e){s.uniform1fv(this.addr,e)}function DT(s,e){const t=Ya(e,this.size,2);s.uniform2fv(this.addr,t)}function IT(s,e){const t=Ya(e,this.size,3);s.uniform3fv(this.addr,t)}function NT(s,e){const t=Ya(e,this.size,4);s.uniform4fv(this.addr,t)}function UT(s,e){const t=Ya(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function OT(s,e){const t=Ya(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function FT(s,e){const t=Ya(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function BT(s,e){s.uniform1iv(this.addr,e)}function kT(s,e){s.uniform2iv(this.addr,e)}function zT(s,e){s.uniform3iv(this.addr,e)}function HT(s,e){s.uniform4iv(this.addr,e)}function GT(s,e){s.uniform1uiv(this.addr,e)}function VT(s,e){s.uniform2uiv(this.addr,e)}function WT(s,e){s.uniform3uiv(this.addr,e)}function XT(s,e){s.uniform4uiv(this.addr,e)}function qT(s,e,t){const n=this.cache,i=e.length,r=eu(t,i);un(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=tu($g):a=Kg;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function YT(s,e,t){const n=this.cache,i=e.length,r=eu(t,i);un(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Qg,r[a])}function KT(s,e,t){const n=this.cache,i=e.length,r=eu(t,i);un(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=tu(Zg):a=jg;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,r[o])}function $T(s,e,t){const n=this.cache,i=e.length,r=eu(t,i);un(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Jg,r[a])}function ZT(s){switch(s){case 5126:return LT;case 35664:return DT;case 35665:return IT;case 35666:return NT;case 35674:return UT;case 35675:return OT;case 35676:return FT;case 5124:case 35670:return BT;case 35667:case 35671:return kT;case 35668:case 35672:return zT;case 35669:case 35673:return HT;case 5125:return GT;case 36294:return VT;case 36295:return WT;case 36296:return XT;case 35678:case 36198:case 36298:case 36306:case 35682:return qT;case 35679:case 36299:case 36307:return YT;case 35680:case 36300:case 36308:case 36293:return KT;case 36289:case 36303:case 36311:case 36292:return $T}}class JT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=PT(t.type)}}class QT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZT(t.type)}}class jT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Gu=/(\w+)(\])?(\[|\.)?/g;function Hp(s,e){s.seq.push(e),s.map[e.id]=e}function eb(s,e,t){const n=s.name,i=n.length;for(Gu.lastIndex=0;;){const r=Gu.exec(n),a=Gu.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Hp(t,c===void 0?new JT(o,s,e):new QT(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new jT(o),Hp(t,d)),t=d}}}class fc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);eb(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Gp(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const tb=37297;let nb=0;function ib(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Vp=new qe;function rb(s){et._getMatrix(Vp,et.workingColorSpace,s);const e=`mat3( ${Vp.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(s)){case Cc:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Wp(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ib(s.getShaderSource(e),o)}else return r}function sb(s,e){const t=rb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const ab={[rg]:"Linear",[sg]:"Reinhard",[ag]:"Cineon",[og]:"ACESFilmic",[cg]:"AgX",[Df]:"Neutral",[lg]:"Custom"};function ob(s,e){const t=ab[e];return t===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gl=new O;function lb(){et.getLuminanceCoefficients(Gl);const s=Gl.x.toFixed(4),e=Gl.y.toFixed(4),t=Gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function ub(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hb(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function mo(s){return s!==""}function Xp(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function qp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(s){return s.replace(fb,db)}function db(s,e){const t=$e[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Qh(t)}const pb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yp(s){return s.replace(pb,mb)}function mb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Kp(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const gb={[ac]:"SHADOWMAP_TYPE_PCF",[uo]:"SHADOWMAP_TYPE_VSM"};function _b(s){return gb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xb={[ko]:"ENVMAP_MODE_REFRACTION"};function vb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":xb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Mb={[Lf]:"ENVMAP_BLENDING_MULTIPLY",[lx]:"ENVMAP_BLENDING_MIX",[cx]:"ENVMAP_BLENDING_ADD"};function Sb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Mb[s.combine]||"ENVMAP_BLENDING_NONE"}function yb(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=_b(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=vb(t),d=Sb(t),h=cb(t),f=ub(r),p=i.createProgram();let g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(mo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(mo).join(`
`),m.length>0&&(m+=`
`)):(g=[Kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),m=[Kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==br?"#define TONE_MAPPING":"",t.toneMapping!==br?$e.tonemapping_pars_fragment:"",t.toneMapping!==br?ob("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,sb("linearToOutputTexel",t.outputColorSpace),lb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mo).join(`
`)),a=Qh(a),a=Xp(a,t),a=qp(a,t),o=Qh(o),o=Xp(o,t),o=qp(o,t),a=Yp(a),o=Yp(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Gd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=_+g+a,y=_+m+o,M=Gp(i,i.VERTEX_SHADER,v),b=Gp(i,i.FRAGMENT_SHADER,y);i.attachShader(p,M),i.attachShader(p,b),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function w(A){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(p)||"",I=i.getShaderInfoLog(M)||"",G=i.getShaderInfoLog(b)||"",L=N.trim(),k=I.trim(),W=G.trim();let B=!0,te=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,M,b);else{const X=Wp(i,M,"vertex"),C=Wp(i,b,"fragment");He("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+X+`
`+C)}else L!==""?Ue("WebGLProgram: Program Info Log:",L):(k===""||W==="")&&(te=!1);te&&(A.diagnostics={runnable:B,programLog:L,vertexShader:{log:k,prefix:g},fragmentShader:{log:W,prefix:m}})}i.deleteShader(M),i.deleteShader(b),x=new fc(i,p),S=hb(i,p)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(p,tb)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nb++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=b,this}let Tb=0;class bb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Eb(e),t.set(e,n)),n}}class Eb{constructor(e){this.id=Tb++,this.code=e,this.usedTimes=0}}function wb(s){return s===Ns||s===wc||s===Ac}function Ab(s,e,t,n,i,r){const a=new wg,o=new bb,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,S,P,A,N,I){const G=A.fog,L=N.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=e.get(x.envMap||k,W),te=h[x.type];let X=n.precision;x.precision!==null&&(X=n.getMaxPrecision(x.precision),X!==x.precision&&Ue("WebGLProgram.getParameters:",x.precision,"not supported, using",X,"instead."));const C=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ne=C!==void 0?C.length:0;let Se=0;L.morphAttributes.position!==void 0&&(Se=1),L.morphAttributes.normal!==void 0&&(Se=2),L.morphAttributes.color!==void 0&&(Se=3);let Fe,$,ue,Me;if(te){const ee=$i[te];Fe=ee.vertexShader,$=ee.fragmentShader}else{Fe=x.vertexShader,$=x.fragmentShader;const ee=o.getVertexShaderStage(x),be=o.getFragmentShaderStage(x);o.update(x,ee,be),ue=ee.id,Me=be.id}const Te=s.getRenderTarget(),me=s.state.buffers.depth.getReversed(),Ie=N.isInstancedMesh===!0,_t=N.isBatchedMesh===!0,we=!!x.map,Ge=!!x.matcap,Le=!!B,Oe=Le&&B.isPMREMTexture===!0,ht=!!x.aoMap,lt=!!x.lightMap,K=!!x.bumpMap&&x.wireframe===!1,tt=!!x.normalMap,Kt=!!x.displacementMap,Tt=!!x.emissiveMap,at=!!x.metalnessMap,zt=!!x.roughnessMap,Xt=x.anisotropy>0,F=x.clearcoat>0,dt=x.diffuseRoughness>0,ct=x.dispersion>0,ze=x.retroreflectivity>0,he=x.iridescence>0,ft=x.sheen>0,De=x.transmission>0,ke=Xt&&!!x.anisotropyMap,R=F&&!!x.clearcoatMap,T=F&&!!x.clearcoatNormalMap,H=F&&!!x.clearcoatRoughnessMap,se=dt&&!!x.diffuseRoughnessMap,ie=he&&!!x.iridescenceMap,ce=he&&!!x.iridescenceThicknessMap,ge=ft&&!!x.sheenColorMap,V=ft&&!!x.sheenRoughnessMap,Q=!!x.specularMap,le=!!x.specularColorMap,D=!!x.specularIntensityMap,J=De&&!!x.transmissionMap,Z=De&&!!x.thicknessMap,fe=!!x.gradientMap,oe=!!x.alphaMap,de=x.alphaTest>0,ae=!!x.alphaHash,pe=!!x.extensions;let re=br;x.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(re=s.toneMapping);const j=Oe?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,_e={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:Fe,fragmentShader:$,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:X,batching:_t,batchingColor:_t&&N._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,instancingMorph:Ie&&N.morphTexture!==null,outputColorSpace:Te===null?s.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:we,matcap:Ge,envMap:Le,envMapMode:Le&&B.mapping,envMapPMREM:Oe,envMapMaxLod:Oe?j.length-1:null,envMapSize:Oe?j[0].width:null,aoMap:ht,lightMap:lt,bumpMap:K,normalMap:tt,displacementMap:Kt,emissiveMap:Tt,normalMapObjectSpace:tt&&x.normalMapType===px,normalMapTangentSpace:tt&&x.normalMapType===Rc,packedNormalMap:tt&&x.normalMapType===Rc&&wb(x.normalMap.format),metalnessMap:at,roughnessMap:zt,anisotropy:Xt,anisotropyMap:ke,clearcoat:F,clearcoatMap:R,clearcoatNormalMap:T,clearcoatRoughnessMap:H,diffuseRoughness:dt,diffuseRoughnessMap:se,dispersion:ct,retroreflection:ze,iridescence:he,iridescenceMap:ie,iridescenceThicknessMap:ce,sheen:ft,sheenColorMap:ge,sheenRoughnessMap:V,specularMap:Q,specularColorMap:le,specularIntensityMap:D,transmission:De,transmissionMap:J,thicknessMap:Z,gradientMap:fe,opaque:x.transparent===!1&&x.blending===To&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:de,alphaHash:ae,combine:x.combine,mapUv:we&&f(x.map.channel),aoMapUv:ht&&f(x.aoMap.channel),lightMapUv:lt&&f(x.lightMap.channel),bumpMapUv:K&&f(x.bumpMap.channel),normalMapUv:tt&&f(x.normalMap.channel),displacementMapUv:Kt&&f(x.displacementMap.channel),emissiveMapUv:Tt&&f(x.emissiveMap.channel),metalnessMapUv:at&&f(x.metalnessMap.channel),roughnessMapUv:zt&&f(x.roughnessMap.channel),anisotropyMapUv:ke&&f(x.anisotropyMap.channel),clearcoatMapUv:R&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:V&&f(x.sheenRoughnessMap.channel),specularMapUv:Q&&f(x.specularMap.channel),specularColorMapUv:le&&f(x.specularColorMap.channel),specularIntensityMapUv:D&&f(x.specularIntensityMap.channel),transmissionMapUv:J&&f(x.transmissionMap.channel),thicknessMapUv:Z&&f(x.thicknessMap.channel),alphaMapUv:oe&&f(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(tt||Xt),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(we||oe),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&tt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Se,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:I.filter(ee=>ee.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:re,decodeVideoTexture:we&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:Tt&&x.emissiveMap.isVideoTexture===!0&&et.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Bi,flipSided:x.side===Gn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&x.extensions.multiDraw===!0||_t)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function g(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(S,x),_(S,x),S.push(s.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function m(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function _(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){const S=h[x.type];let P;if(S){const A=$i[S];P=Mv.clone(A.uniforms)}else P=x.uniforms;return P}function y(x,S){let P=u.get(S);return P!==void 0?++P.usedTimes:(P=new yb(s,S,x,i),c.push(P),u.set(S,P)),P}function M(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function w(){o.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:w}}function Rb(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Cb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function $p(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Zp(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,g,m,_){let v=s[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:g,renderOrder:h.renderOrder,z:m,group:_},s[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=p,v.materialVariant=a(h),v.groupOrder=g,v.renderOrder=h.renderOrder,v.z=m,v.group=_),e++,v}function l(h,f,p,g,m,_,v){v.reversedDepth===!0&&(m=-m);const y=o(h,f,p,g,m,_);p.transmission>0?n.push(y):p.transparent===!0?i.push(y):t.push(y)}function c(h,f,p,g,m,_){const v=o(h,f,p,g,m,_);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function u(h,f){t.length>1&&t.sort(h||Cb),n.length>1&&n.sort(f||$p),i.length>1&&i.sort(f||$p)}function d(){for(let h=e,f=s.length;h<f;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:u}}function Pb(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Zp,s.set(n,[a])):i>=r.length?(a=new Zp,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Lb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new Be};break;case"SpotLight":t={position:new O,direction:new O,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new O,halfWidth:new O,halfHeight:new O};break}return s[e.id]=t,t}}}function Db(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ib=0;function Nb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ub(s){const e=new Lb,t=Db(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const i=new O,r=new Ve,a=new Ve;function o(c){let u=0,d=0,h=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,p=0,g=0,m=0,_=0,v=0,y=0,M=0,b=0,w=0,x=0,S=0,P=0,A=0;c.sort(Nb);for(let I=0,G=c.length;I<G;I++){const L=c[I],k=L.color,W=L.intensity,B=L.distance;let te=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ns?te=L.shadow.map.texture:te=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=k.r*W,d+=k.g*W,h+=k.b*W;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],W);A++}else if(L.isSunLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const C=L.shadow,ne=t.get(L);ne.shadowIntensity=C.intensity,ne.shadowBias=C.bias,ne.shadowNormalBias=C.normalBias,ne.shadowRadius=C.radius,ne.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[p]=ne,n.sunShadowMap[p]=te;const Se=C.getViewportCount();for(let Fe=0;Fe<Se;Fe++)n.sunShadowMatrix[g+Fe]=C.getMatrix(Fe),n.sunShadowCascade[g+Fe]=C._cascadeData[Fe];g+=Se,p++}n.sun[f]=X,f++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const C=L.shadow,ne=t.get(L);ne.shadowIntensity=C.intensity,ne.shadowBias=C.bias,ne.shadowNormalBias=C.normalBias,ne.shadowRadius=C.radius,ne.shadowMapSize=C.mapSize,n.directionalShadow[m]=ne,n.directionalShadowMap[m]=te,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=X,m++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(k).multiplyScalar(W),X.distance=B,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[v]=X;const C=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,C.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[v]=C.matrix,L.castShadow){const ne=t.get(L);ne.shadowIntensity=C.intensity,ne.shadowBias=C.bias,ne.shadowNormalBias=C.normalBias,ne.shadowRadius=C.radius,ne.shadowMapSize=C.mapSize,n.spotShadow[v]=ne,n.spotShadowMap[v]=te,x++}v++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(k).multiplyScalar(W),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[y]=X,y++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const C=L.shadow,ne=t.get(L);ne.shadowIntensity=C.intensity,ne.shadowBias=C.bias,ne.shadowNormalBias=C.normalBias,ne.shadowRadius=C.radius,ne.shadowMapSize=C.mapSize,ne.shadowCameraNear=C.camera.near,ne.shadowCameraFar=C.camera.far,n.pointShadow[_]=ne,n.pointShadowMap[_]=te,n.pointShadowMatrix[_]=L.shadow.matrix,w++}n.point[_]=X,_++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(W),X.groundColor.copy(L.groundColor).multiplyScalar(W),n.hemi[M]=X,M++}}y>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const N=n.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==_||N.spotLength!==v||N.rectAreaLength!==y||N.hemiLength!==M||N.numSunShadows!==p||N.numDirectionalShadows!==b||N.numPointShadows!==w||N.numSpotShadows!==x||N.numSpotMaps!==S||N.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=y,n.point.length=_,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-P,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,N.sunLength=f,N.directionalLength=m,N.pointLength=_,N.spotLength=v,N.rectAreaLength=y,N.hemiLength=M,N.numSunShadows=p,N.numDirectionalShadows=b,N.numPointShadows=w,N.numSpotShadows=x,N.numSpotMaps=S,N.numLightProbes=A,n.version=Ib++)}function l(c,u){let d=0,h=0,f=0,p=0,g=0,m=0;const _=u.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){const M=c[v];if(M.isSunLight){const b=n.sun[d];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(_),d++}else if(M.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(_),h++}else if(M.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(_),p++}else if(M.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(_),a.identity(),r.copy(M.matrixWorld),r.premultiply(_),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(_),f++}else if(M.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(_),m++}}}return{setup:o,setupView:l,state:n}}function Jp(s){const e=new Ub(s),t=[],n=[],i=[];function r(d){u.camera=d,t.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),i.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ob(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Jp(s),e.set(i,[o])):r>=a.length?(o=new Jp(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Fb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kb=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],zb=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Qp=new Ve,io=new O,Vu=new O;function Hb(s,e,t){let n=new Xo;const i=new Ye,r=new Ye,a=new Pt,o=new Ev,l=new wv,c={},u=t.maxTextureSize,d={[is]:Gn,[Gn]:is,[Bi]:Bi},h=new Us({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:Fb,fragmentShader:Bb}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new Wn;p.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Lt(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let _=this.type;this.render=function(w,x,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===tg&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ac);const P=s.getRenderTarget(),A=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),I=s.state;I.setBlending(xa),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const G=_!==this.type;G&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(k=>k.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,k=w.length;L<k;L++){const W=w[L],B=W.shadow;if(B===void 0){Ue("WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const te=B.getFrameExtents();i.multiply(te),r.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/te.x),i.x=r.x*te.x,B.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/te.y),i.y=r.y*te.y,B.mapSize.y=r.y));const X=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=X,B.map===null||G===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===uo){if(W.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new tr(i.x,i.y,{format:Ns,type:rr,minFilter:vn,magFilter:vn,generateMipmaps:!1}),B.map.texture.name=W.name+".shadowMap",B.map.depthTexture=new Na(i.x,i.y,wi),B.map.depthTexture.name=W.name+".shadowMapDepth",B.map.depthTexture.format=rs,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ln,B.map.depthTexture.magFilter=ln}else W.isPointLight?(B.map=new nd(i.x),B.map.depthTexture=new Og(i.x,ir)):(B.map=new tr(i.x,i.y),B.map.depthTexture=new Na(i.x,i.y,ir)),B.map.depthTexture.name=W.name+".shadowMap",B.map.depthTexture.format=rs,this.type===ac?(B.map.depthTexture.compareFunction=X?Mg:vg,B.map.depthTexture.minFilter=vn,B.map.depthTexture.magFilter=vn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ln,B.map.depthTexture.magFilter=ln);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==i.x||B.map.height!==i.y)&&B.map.setSize(i.x,i.y);const C=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();W.isPointLight!==!0&&B.updateMatrices(W,S);const ne=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:S.layers;for(let Se=0;Se<C;Se++){const Fe=B.getCamera(Se);if(W.isPointLight){const $=B.camera,ue=B.matrix,Me=W.distance||$.far;Me!==$.far&&($.far=Me,$.updateProjectionMatrix()),io.setFromMatrixPosition(W.matrixWorld),$.position.copy(io),Vu.copy($.position),Vu.add(kb[Se]),$.up.copy(zb[Se]),$.lookAt(Vu),$.updateMatrixWorld(),ue.makeTranslation(-io.x,-io.y,-io.z),Qp.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Qp,$.coordinateSystem,$.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,Se),s.clear();else{Se===0&&(s.setRenderTarget(B.map),s.clear());const $=B.getViewport(Se);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),I.viewport(a)}n=B.getFrustum(Se),M(x,S,Fe,W,ne,this.type)}B.isPointLightShadow!==!0&&this.type===uo&&v(B,S),B.needsUpdate=!1}_=this.type,m.needsUpdate=!1,s.setRenderTarget(P,A,N)};function v(w,x){const S=e.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new tr(i.x,i.y,{format:Ns,type:rr}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(x,null,S,h,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(x,null,S,f,g,null)}function y(w,x,S,P){let A=null;const N=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)A=N;else if(A=S.isPointLight===!0?l:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const I=A.uuid,G=x.uuid;let L=c[I];L===void 0&&(L={},c[I]=L);let k=L[G];k===void 0&&(k=A.clone(),L[G]=k,x.addEventListener("dispose",b)),A=k}if(A.visible=x.visible,A.wireframe=x.wireframe,P===uo?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:d[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const I=s.properties.get(A);I.light=S}return A}function M(w,x,S,P,A,N){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===uo)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);const L=e.update(w),k=w.material;if(Array.isArray(k)){const W=L.groups;for(let B=0,te=W.length;B<te;B++){const X=W[B],C=k[X.materialIndex];if(C&&C.visible){const ne=y(w,C,P,N);w.onBeforeShadow(s,w,x,S,L,ne,X),s.renderBufferDirect(S,null,L,ne,w,X),w.onAfterShadow(s,w,x,S,L,ne,X)}}}else if(k.visible){const W=y(w,k,P,N);w.onBeforeShadow(s,w,x,S,L,W,null),s.renderBufferDirect(S,null,L,W,w,null),w.onAfterShadow(s,w,x,S,L,W,null)}}const G=w.children;for(let L=0,k=G.length;L<k;L++)M(G[L],x,S,P,A,N)}function b(w){w.target.removeEventListener("dispose",b);for(const S in c){const P=c[S],A=w.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function Gb(s,e){function t(){let D=!1;const J=new Pt;let Z=null;const fe=new Pt(0,0,0,0);return{setMask:function(oe){Z!==oe&&!D&&(s.colorMask(oe,oe,oe,oe),Z=oe)},setLocked:function(oe){D=oe},setClear:function(oe,de,ae,pe,re){re===!0&&(oe*=pe,de*=pe,ae*=pe),J.set(oe,de,ae,pe),fe.equals(J)===!1&&(s.clearColor(oe,de,ae,pe),fe.copy(J))},reset:function(){D=!1,Z=null,fe.set(-1,0,0,0)}}}function n(){let D=!1,J=!1,Z=null,fe=null,oe=null;return{setReversed:function(de){if(J!==de){const ae=e.get("EXT_clip_control");de?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),J=de;const pe=oe;oe=null,this.setClear(pe)}},getReversed:function(){return J},setTest:function(de){de?me(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(de){Z!==de&&!D&&(s.depthMask(de),Z=de)},setFunc:function(de){if(J&&(de=wx[de]),fe!==de){switch(de){case fh:s.depthFunc(s.NEVER);break;case dh:s.depthFunc(s.ALWAYS);break;case ph:s.depthFunc(s.LESS);break;case Bo:s.depthFunc(s.LEQUAL);break;case mh:s.depthFunc(s.EQUAL);break;case gh:s.depthFunc(s.GEQUAL);break;case _h:s.depthFunc(s.GREATER);break;case xh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=de}},setLocked:function(de){D=de},setClear:function(de){oe!==de&&(oe=de,J&&(de=1-de),s.clearDepth(de))},reset:function(){D=!1,Z=null,fe=null,oe=null,J=!1}}}function i(){let D=!1,J=null,Z=null,fe=null,oe=null,de=null,ae=null,pe=null,re=null;return{setTest:function(j){D||(j?me(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(j){J!==j&&!D&&(s.stencilMask(j),J=j)},setFunc:function(j,_e,ee){(Z!==j||fe!==_e||oe!==ee)&&(s.stencilFunc(j,_e,ee),Z=j,fe=_e,oe=ee)},setOp:function(j,_e,ee){(de!==j||ae!==_e||pe!==ee)&&(s.stencilOp(j,_e,ee),de=j,ae=_e,pe=ee)},setLocked:function(j){D=j},setClear:function(j){re!==j&&(s.clearStencil(j),re=j)},reset:function(){D=!1,J=null,Z=null,fe=null,oe=null,de=null,ae=null,pe=null,re=null}}}const r=new t,a=new n,o=new i;let l={};const c=new WeakMap;let u={},d={},h={},f=new WeakMap,p=[],g=null,m=!1,_=null,v=null,y=null,M=null,b=null,w=null,x=null,S=new Be(0,0,0),P=0,A=!1,N=null,I=null,G=null,L=null,k=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,te=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=te>=2);let C=null,ne={};const Se=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),$=new Pt().fromArray(Se),ue=new Pt().fromArray(Fe);function Me(D,J,Z,fe){const oe=new Uint8Array(4),de=s.createTexture();s.bindTexture(D,de),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<Z;ae++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(J,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,oe):s.texImage2D(J+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,oe);return de}const Te={};Te[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(s.DEPTH_TEST),a.setFunc(Bo),K(!1),tt(Id),me(s.CULL_FACE),ht(xa);function me(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function Ie(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function _t(D,J){return h[D]!==J?(s.bindFramebuffer(D,J),h[D]=J,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=J),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=J),!0):!1}function we(D,J){let Z=p,fe=!1;if(D){Z=f.get(J),Z===void 0&&(Z=[],f.set(J,Z));const oe=D.textures;if(Z.length!==oe.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let de=0,ae=oe.length;de<ae;de++)Z[de]=s.COLOR_ATTACHMENT0+de;Z.length=oe.length,fe=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,fe=!0);fe&&s.drawBuffers(Z)}function Ge(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Le={[ua]:s.FUNC_ADD,[X0]:s.FUNC_SUBTRACT,[q0]:s.FUNC_REVERSE_SUBTRACT};Le[Y0]=s.MIN,Le[K0]=s.MAX;const Oe={[$0]:s.ZERO,[Z0]:s.ONE,[J0]:s.SRC_COLOR,[ng]:s.SRC_ALPHA,[ix]:s.SRC_ALPHA_SATURATE,[tx]:s.DST_COLOR,[j0]:s.DST_ALPHA,[Q0]:s.ONE_MINUS_SRC_COLOR,[ig]:s.ONE_MINUS_SRC_ALPHA,[nx]:s.ONE_MINUS_DST_COLOR,[ex]:s.ONE_MINUS_DST_ALPHA,[rx]:s.CONSTANT_COLOR,[sx]:s.ONE_MINUS_CONSTANT_COLOR,[ax]:s.CONSTANT_ALPHA,[ox]:s.ONE_MINUS_CONSTANT_ALPHA};function ht(D,J,Z,fe,oe,de,ae,pe,re,j){if(D===xa){m===!0&&(Ie(s.BLEND),m=!1);return}if(m===!1&&(me(s.BLEND),m=!0),D!==W0){if(D!==_||j!==A){if((v!==ua||b!==ua)&&(s.blendEquation(s.FUNC_ADD),v=ua,b=ua),j)switch(D){case To:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nd:s.blendFunc(s.ONE,s.ONE);break;case Ud:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Od:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:He("WebGLState: Invalid blending: ",D);break}else switch(D){case To:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ud:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Od:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",D);break}y=null,M=null,w=null,x=null,S.set(0,0,0),P=0,_=D,A=j}return}oe=oe||J,de=de||Z,ae=ae||fe,(J!==v||oe!==b)&&(s.blendEquationSeparate(Le[J],Le[oe]),v=J,b=oe),(Z!==y||fe!==M||de!==w||ae!==x)&&(s.blendFuncSeparate(Oe[Z],Oe[fe],Oe[de],Oe[ae]),y=Z,M=fe,w=de,x=ae),(pe.equals(S)===!1||re!==P)&&(s.blendColor(pe.r,pe.g,pe.b,re),S.copy(pe),P=re),_=D,A=!1}function lt(D,J){D.side===Bi?Ie(s.CULL_FACE):me(s.CULL_FACE);let Z=D.side===Gn;J&&(Z=!Z),K(Z),D.blending===To&&D.transparent===!1?ht(xa):ht(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const fe=D.stencilWrite;o.setTest(fe),fe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Tt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function K(D){N!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),N=D)}function tt(D){D!==G0?(me(s.CULL_FACE),D!==I&&(D===Id?s.cullFace(s.BACK):D===V0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),I=D}function Kt(D){D!==G&&(B&&s.lineWidth(D),G=D)}function Tt(D,J,Z){D?(me(s.POLYGON_OFFSET_FILL),(L!==J||k!==Z)&&(L=J,k=Z,a.getReversed()&&(J=-J,Z=-Z),s.polygonOffset(J,Z))):Ie(s.POLYGON_OFFSET_FILL)}function at(D){D?me(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function zt(D){D===void 0&&(D=s.TEXTURE0+W-1),C!==D&&(s.activeTexture(D),C=D)}function Xt(D,J,Z){Z===void 0&&(C===null?Z=s.TEXTURE0+W-1:Z=C);let fe=ne[Z];fe===void 0&&(fe={type:void 0,texture:void 0},ne[Z]=fe),(fe.type!==D||fe.texture!==J)&&(C!==Z&&(s.activeTexture(Z),C=Z),s.bindTexture(D,J||Te[D]),fe.type=D,fe.texture=J)}function F(){const D=ne[C];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function dt(){try{s.compressedTexImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function ct(){try{s.compressedTexImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function ze(){try{s.texSubImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function he(){try{s.texSubImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function ft(){try{s.compressedTexSubImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function De(){try{s.compressedTexSubImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function ke(){try{s.texStorage2D(...arguments)}catch(D){He("WebGLState:",D)}}function R(){try{s.texStorage3D(...arguments)}catch(D){He("WebGLState:",D)}}function T(){try{s.texImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function H(){try{s.texImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function se(D){return d[D]!==void 0?d[D]:s.getParameter(D)}function ie(D,J){d[D]!==J&&(s.pixelStorei(D,J),d[D]=J)}function ce(D){$.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),$.copy(D))}function ge(D){ue.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),ue.copy(D))}function V(D,J){let Z=c.get(J);Z===void 0&&(Z=new WeakMap,c.set(J,Z));let fe=Z.get(D);fe===void 0&&(fe=s.getUniformBlockIndex(J,D.name),s.uniformBlockBinding(J,fe,fe),Z.set(D,fe))}function Q(D,J,Z){const oe=c.get(J).get(D);l[oe]!==Z&&(s.bindBufferBase(s.UNIFORM_BUFFER,oe,Z),l[oe]=Z)}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},d={},C=null,ne={},h={},l={},f=new WeakMap,p=[],g=null,m=!1,_=null,v=null,y=null,M=null,b=null,w=null,x=null,S=new Be(0,0,0),P=0,A=!1,N=null,I=null,G=null,L=null,k=null,$.set(0,0,s.canvas.width,s.canvas.height),ue.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:me,disable:Ie,bindFramebuffer:_t,drawBuffers:we,useProgram:Ge,setBlending:ht,setMaterial:lt,setFlipSided:K,setCullFace:tt,setLineWidth:Kt,setPolygonOffset:Tt,setScissorTest:at,activeTexture:zt,bindTexture:Xt,unbindTexture:F,compressedTexImage2D:dt,compressedTexImage3D:ct,texImage2D:T,texImage3D:H,pixelStorei:ie,getParameter:se,updateUBOMapping:V,uniformBlockBinding:Q,texStorage2D:ke,texStorage3D:R,texSubImage2D:ze,texSubImage3D:he,compressedTexSubImage2D:ft,compressedTexSubImage3D:De,scissor:ce,viewport:ge,reset:le}}function Vb(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,u=new WeakMap,d=new Set;let h;const f=new WeakMap,p=new Set,g=new FinalizationRegistry(R=>p.delete(R));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,T){return m?new OffscreenCanvas(R,T):Wo("canvas")}function v(R,T,H){let se=1;const ie=ke(R);if((ie.width>H||ie.height>H)&&(se=H/Math.max(ie.width,ie.height)),se<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ce=Math.floor(se*ie.width),ge=Math.floor(se*ie.height);h===void 0&&(h=_(ce,ge));const V=T?_(ce,ge):h;return V.width=ce,V.height=ge,V.getContext("2d").drawImage(R,0,0,ce,ge),Ue("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ce+"x"+ge+")."),V}else return"data"in R&&Ue("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function y(R){return R.generateMipmaps}function M(R){s.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(R,T,H,se,ie,ce=!1){if(R!==null){if(s[R]!==void 0)return s[R];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ge;se&&(ge=e.get("EXT_texture_norm16"),ge||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=T;if(T===s.RED&&(H===s.FLOAT&&(V=s.R32F),H===s.HALF_FLOAT&&(V=s.R16F),H===s.UNSIGNED_BYTE&&(V=s.R8),H===s.UNSIGNED_SHORT&&ge&&(V=ge.R16_EXT),H===s.SHORT&&ge&&(V=ge.R16_SNORM_EXT)),T===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(V=s.R8UI),H===s.UNSIGNED_SHORT&&(V=s.R16UI),H===s.UNSIGNED_INT&&(V=s.R32UI),H===s.BYTE&&(V=s.R8I),H===s.SHORT&&(V=s.R16I),H===s.INT&&(V=s.R32I)),T===s.RG&&(H===s.FLOAT&&(V=s.RG32F),H===s.HALF_FLOAT&&(V=s.RG16F),H===s.UNSIGNED_BYTE&&(V=s.RG8),H===s.UNSIGNED_SHORT&&ge&&(V=ge.RG16_EXT),H===s.SHORT&&ge&&(V=ge.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(V=s.RG8UI),H===s.UNSIGNED_SHORT&&(V=s.RG16UI),H===s.UNSIGNED_INT&&(V=s.RG32UI),H===s.BYTE&&(V=s.RG8I),H===s.SHORT&&(V=s.RG16I),H===s.INT&&(V=s.RG32I)),T===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(V=s.RGB8UI),H===s.UNSIGNED_SHORT&&(V=s.RGB16UI),H===s.UNSIGNED_INT&&(V=s.RGB32UI),H===s.BYTE&&(V=s.RGB8I),H===s.SHORT&&(V=s.RGB16I),H===s.INT&&(V=s.RGB32I)),T===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(V=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(V=s.RGBA16UI),H===s.UNSIGNED_INT&&(V=s.RGBA32UI),H===s.BYTE&&(V=s.RGBA8I),H===s.SHORT&&(V=s.RGBA16I),H===s.INT&&(V=s.RGBA32I)),T===s.RGB&&(H===s.UNSIGNED_SHORT&&ge&&(V=ge.RGB16_EXT),H===s.SHORT&&ge&&(V=ge.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(V=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(V=s.R11F_G11F_B10F)),T===s.RGBA){const Q=ce?Cc:et.getTransfer(ie);H===s.FLOAT&&(V=s.RGBA32F),H===s.HALF_FLOAT&&(V=s.RGBA16F),H===s.UNSIGNED_BYTE&&(V=Q===vt?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&ge&&(V=ge.RGBA16_EXT),H===s.SHORT&&ge&&(V=ge.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(V=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(V=s.RGB5_A1)}return(V===s.R16F||V===s.R32F||V===s.RG16F||V===s.RG32F||V===s.RGBA16F||V===s.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function x(R,T){let H;return R?T===null||T===ir||T===Da?H=s.DEPTH24_STENCIL8:T===wi?H=s.DEPTH32F_STENCIL8:T===zo&&(H=s.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ir||T===Da?H=s.DEPTH_COMPONENT24:T===wi?H=s.DEPTH_COMPONENT32F:T===zo&&(H=s.DEPTH_COMPONENT16),H}function S(R,T){return y(R)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==vn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function P(R){const T=new WeakRef(R);n.get(R).__ref=T,p.add(T),g.register(R,T,T)}function A(R){const T=n.get(R).__ref;T!==void 0&&(p.delete(T),g.unregister(T))}function N(R){G(R.target)}function I(R){L(R.target)}function G(R){R.removeEventListener("dispose",N),A(R),W(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&d.delete(R)}function L(R){R.removeEventListener("dispose",I),A(R),te(R)}function k(){for(const R of p){const T=R.deref();T!==void 0&&(T.isRenderTarget===!0?L(T):G(T))}p.clear(),d.clear()}function W(R){const T=n.get(R);if(T.__webglInit===void 0)return;const H=R.source,se=f.get(H);if(se){const ie=se[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&B(R),Object.keys(se).length===0&&f.delete(H)}n.remove(R)}function B(R){const T=n.get(R);s.deleteTexture(T.__webglTexture);const H=R.source,se=f.get(H);delete se[T.__cacheKey],a.memory.textures--}function te(R){const T=n.get(R);T.__depthDisposeCallback&&T.__depthDisposeCallback();const H=R.depthTexture;if(H&&H.renderTarget===R&&G(H),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(T.__webglFramebuffer[ie]))for(let ce=0;ce<T.__webglFramebuffer[ie].length;ce++)s.deleteFramebuffer(T.__webglFramebuffer[ie][ce]);else s.deleteFramebuffer(T.__webglFramebuffer[ie]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ie])}else{if(Array.isArray(T.__webglFramebuffer))for(let ie=0;ie<T.__webglFramebuffer.length;ie++)s.deleteFramebuffer(T.__webglFramebuffer[ie]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ie=0;ie<T.__webglColorRenderbuffer.length;ie++)T.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ie]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const se=R.textures;for(let ie=0,ce=se.length;ie<ce;ie++){const ge=n.get(se[ie]);ge.__webglTexture&&(s.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(se[ie])}n.remove(R)}let X=0;function C(){X=0}function ne(){return X}function Se(R){X=R}function Fe(){const R=X;return R>=i.maxTextures&&Ue("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),X+=1,R}function $(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.mipmapsAutoUpdate),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function ue(R,T){const H=n.get(R);if(R.isVideoTexture&&ft(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){const se=R.image;if(se===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(H,R,T);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+T)}function Me(R,T){const H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){lt(H,R,T);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+T)}function Te(R,T){const H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){lt(H,R,T);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+T)}function me(R,T){const H=n.get(R);if(R.version>0&&H.__version!==R.version){K(H,R,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+T)}const Ie={[Er]:s.REPEAT,[Ji]:s.CLAMP_TO_EDGE,[Ec]:s.MIRRORED_REPEAT},_t={[ln]:s.NEAREST,[hg]:s.NEAREST_MIPMAP_NEAREST,[ho]:s.NEAREST_MIPMAP_LINEAR,[vn]:s.LINEAR,[oc]:s.LINEAR_MIPMAP_NEAREST,[Qi]:s.LINEAR_MIPMAP_LINEAR},we={[gx]:s.NEVER,[Sg]:s.ALWAYS,[_x]:s.LESS,[vg]:s.LEQUAL,[xx]:s.EQUAL,[Mg]:s.GEQUAL,[vx]:s.GREATER,[Mx]:s.NOTEQUAL};function Ge(R,T){if(T.type===wi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===vn||T.magFilter===oc||T.magFilter===ho||T.magFilter===Qi||T.minFilter===vn||T.minFilter===oc||T.minFilter===ho||T.minFilter===Qi)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Ie[T.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Ie[T.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Ie[T.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,_t[T.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,_t[T.minFilter]),T.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,we[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ln||T.minFilter!==ho&&T.minFilter!==Qi||T.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Le(R,T){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",N),P(T));const se=T.source;let ie=f.get(se);ie===void 0&&(ie={},f.set(se,ie));const ce=$(T);if(ce!==R.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ie[ce].usedTimes++;const ge=ie[R.__cacheKey];ge!==void 0&&(ie[R.__cacheKey].usedTimes--,ge.usedTimes===0&&B(T)),R.__cacheKey=ce,R.__webglTexture=ie[ce].texture}return H}function Oe(R,T,H){return Math.floor(Math.floor(R/H)/T)}function ht(R,T,H,se){const ce=R.updateRanges;if(ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,H,se,T.data);else{ce.sort((D,J)=>D.start-J.start);let ge=0;for(let D=1;D<ce.length;D++){const J=ce[ge],Z=ce[D],fe=J.start+J.count,oe=Oe(Z.start,T.width,4),de=Oe(J.start,T.width,4);Z.start<=fe+1&&oe===de&&Oe(Z.start+Z.count-1,T.width,4)===oe?J.count=Math.max(J.count,Z.start+Z.count-J.start):(++ge,ce[ge]=Z)}ce.length=ge+1;const V=t.getParameter(s.UNPACK_ROW_LENGTH),Q=t.getParameter(s.UNPACK_SKIP_PIXELS),le=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let D=0,J=ce.length;D<J;D++){const Z=ce[D],fe=Math.floor(Z.start/4),oe=Math.ceil(Z.count/4),de=fe%T.width,ae=Math.floor(fe/T.width),pe=oe,re=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,de),t.pixelStorei(s.UNPACK_SKIP_ROWS,ae),t.texSubImage2D(s.TEXTURE_2D,0,de,ae,pe,re,H,se,T.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,V),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(s.UNPACK_SKIP_ROWS,le)}}function lt(R,T,H){let se=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(se=s.TEXTURE_3D);const ie=Le(R,T),ce=T.source;t.bindTexture(se,R.__webglTexture,s.TEXTURE0+H);const ge=n.get(ce);if(ce.version!==ge.__version||ie===!0){if(t.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const re=et.getPrimaries(et.workingColorSpace),j=T.colorSpace===Vr?null:et.getPrimaries(T.colorSpace),_e=T.colorSpace===Vr||re===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let Q=v(T.image,!1,i.maxTextureSize);Q=De(T,Q);const le=r.convert(T.format,T.colorSpace),D=r.convert(T.type);let J=w(T.internalFormat,le,D,T.normalized,T.colorSpace,T.isVideoTexture);Ge(se,T);let Z;const fe=T.mipmaps,oe=T.isVideoTexture!==!0,de=ge.__version===void 0||ie===!0,ae=ce.dataReady,pe=S(T,Q);if(T.isDepthTexture)J=x(T.format===Xr,T.type),de&&(oe?t.texStorage2D(s.TEXTURE_2D,1,J,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,J,Q.width,Q.height,0,le,D,null));else if(T.isDataTexture)if(fe.length>0){oe&&de&&t.texStorage2D(s.TEXTURE_2D,pe,J,fe[0].width,fe[0].height);for(let re=0,j=fe.length;re<j;re++)Z=fe[re],oe?ae&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,Z.width,Z.height,le,D,Z.data):t.texImage2D(s.TEXTURE_2D,re,J,Z.width,Z.height,0,le,D,Z.data);T.generateMipmaps=!1}else oe?(de&&t.texStorage2D(s.TEXTURE_2D,pe,J,Q.width,Q.height),ae&&ht(T,Q,le,D)):t.texImage2D(s.TEXTURE_2D,0,J,Q.width,Q.height,0,le,D,Q.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){oe&&de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,J,fe[0].width,fe[0].height,Q.depth);for(let re=0,j=fe.length;re<j;re++)if(Z=fe[re],T.format!==zi)if(le!==null)if(oe){if(ae)if(T.layerUpdates.size>0){const _e=Lp(Z.width,Z.height,T.format,T.type);for(const ee of T.layerUpdates){const be=Z.data.subarray(ee*_e/Z.data.BYTES_PER_ELEMENT,(ee+1)*_e/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,ee,Z.width,Z.height,1,le,be)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Z.width,Z.height,Q.depth,le,Z.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,J,Z.width,Z.height,Q.depth,0,Z.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?ae&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Z.width,Z.height,Q.depth,le,D,Z.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,J,Z.width,Z.height,Q.depth,0,le,D,Z.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{oe&&de&&t.texStorage2D(s.TEXTURE_2D,pe,J,fe[0].width,fe[0].height);for(let re=0,j=fe.length;re<j;re++)Z=fe[re],T.format!==zi?le!==null?oe?ae&&t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,Z.width,Z.height,le,Z.data):t.compressedTexImage2D(s.TEXTURE_2D,re,J,Z.width,Z.height,0,Z.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?ae&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,Z.width,Z.height,le,D,Z.data):t.texImage2D(s.TEXTURE_2D,re,J,Z.width,Z.height,0,le,D,Z.data)}else if(T.isDataArrayTexture)if(oe){if(de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,J,Q.width,Q.height,Q.depth),ae)if(T.layerUpdates.size>0){const re=Lp(Q.width,Q.height,T.format,T.type);for(const j of T.layerUpdates){const _e=Q.data.subarray(j*re/Q.data.BYTES_PER_ELEMENT,(j+1)*re/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,le,D,_e)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,le,D,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,J,Q.width,Q.height,Q.depth,0,le,D,Q.data);else if(T.isData3DTexture)oe?(de&&t.texStorage3D(s.TEXTURE_3D,pe,J,Q.width,Q.height,Q.depth),ae&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,le,D,Q.data)):t.texImage3D(s.TEXTURE_3D,0,J,Q.width,Q.height,Q.depth,0,le,D,Q.data);else if(T.isFramebufferTexture){if(de)if(oe)t.texStorage2D(s.TEXTURE_2D,pe,J,Q.width,Q.height);else{let re=Q.width,j=Q.height;for(let _e=0;_e<pe;_e++)t.texImage2D(s.TEXTURE_2D,_e,J,re,j,0,le,D,null),re>>=1,j>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const re=s.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),Q.parentNode!==re){re.appendChild(Q),d.add(T),re.onpaint=j=>{const _e=j.changedElements;for(const ee of d)_e.includes(ee.image)&&(ee.needsUpdate=!0)},re.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Q);else{const _e=s.RGBA,ee=s.RGBA,be=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,_e,ee,be,Q)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(fe.length>0){if(oe&&de){const re=ke(fe[0]);t.texStorage2D(s.TEXTURE_2D,pe,J,re.width,re.height)}for(let re=0,j=fe.length;re<j;re++)Z=fe[re],oe?ae&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,le,D,Z):t.texImage2D(s.TEXTURE_2D,re,J,le,D,Z);T.generateMipmaps=!1}else if(oe){if(de){const re=ke(Q);t.texStorage2D(s.TEXTURE_2D,pe,J,re.width,re.height)}ae&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,D,Q)}else t.texImage2D(s.TEXTURE_2D,0,J,le,D,Q);y(T)&&T.mipmapsAutoUpdate===!0&&M(se),ge.__version=ce.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function K(R,T,H){if(T.image.length!==6)return;const se=Le(R,T),ie=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+H);const ce=n.get(ie);if(ie.version!==ce.__version||se===!0){t.activeTexture(s.TEXTURE0+H);const ge=et.getPrimaries(et.workingColorSpace),V=T.colorSpace===Vr?null:et.getPrimaries(T.colorSpace),Q=T.colorSpace===Vr||ge===V?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const le=T.isCompressedTexture||T.image[0].isCompressedTexture,D=T.image[0]&&T.image[0].isDataTexture,J=[];for(let ee=0;ee<6;ee++)!le&&!D?J[ee]=v(T.image[ee],!0,i.maxCubemapSize):J[ee]=D?T.image[ee].image:T.image[ee],J[ee]=De(T,J[ee]);const Z=J[0],fe=r.convert(T.format,T.colorSpace),oe=r.convert(T.type);let de=w(T.internalFormat,fe,oe,T.normalized,T.colorSpace);const ae=T.isVideoTexture!==!0,pe=ce.__version===void 0||se===!0,re=ie.dataReady;let j=S(T,Z);Ge(s.TEXTURE_CUBE_MAP,T);let _e;if(T.isDepthTexture){if(de=x(T.format===Xr,T.type),pe)if(ae)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,de,Z.width,Z.height);else for(let ee=0;ee<6;ee++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,de,Z.width,Z.height,0,fe,oe,null)}else if(le){ae&&pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,j,de,Z.width,Z.height);for(let ee=0;ee<6;ee++){_e=J[ee].mipmaps;for(let be=0;be<_e.length;be++){const nt=_e[be];T.format!==zi?fe!==null?ae?re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,nt.width,nt.height,fe,nt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,de,nt.width,nt.height,0,nt.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,nt.width,nt.height,fe,oe,nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,de,nt.width,nt.height,0,fe,oe,nt.data)}}}else{if(_e=T.mipmaps,ae&&pe){_e.length>0&&j++;const ee=ke(J[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,j,de,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(D){ae?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,J[ee].width,J[ee].height,fe,oe,J[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,de,J[ee].width,J[ee].height,0,fe,oe,J[ee].data);for(let be=0;be<_e.length;be++){const We=_e[be].image[ee].image;ae?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,We.width,We.height,fe,oe,We.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,de,We.width,We.height,0,fe,oe,We.data)}}else{ae?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,fe,oe,J[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,de,fe,oe,J[ee]);for(let be=0;be<_e.length;be++){const nt=_e[be];ae?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,fe,oe,nt.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,de,fe,oe,nt.image[ee])}}}y(T)&&T.mipmapsAutoUpdate===!0&&M(s.TEXTURE_CUBE_MAP),ce.__version=ie.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function tt(R,T,H,se,ie,ce){const ge=r.convert(H.format,H.colorSpace),V=r.convert(H.type),Q=w(H.internalFormat,ge,V,H.normalized,H.colorSpace),le=n.get(T),D=n.get(H);if(D.__renderTarget=T,!le.__hasExternalTextures){const J=Math.max(1,T.width>>ce),Z=Math.max(1,T.height>>ce);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,ce,Q,J,Z,T.depth,0,ge,V,null):t.texImage2D(ie,ce,Q,J,Z,0,ge,V,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),he(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,ie,D.__webglTexture,0,ze(T)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,ie,D.__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(R,T,H){if(s.bindRenderbuffer(s.RENDERBUFFER,R),T.depthBuffer){const se=T.depthTexture,ie=se&&se.isDepthTexture?se.type:null,ce=x(T.stencilBuffer,ie),ge=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;he(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ze(T),ce,T.width,T.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ze(T),ce,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ce,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,R)}else{const se=T.textures;for(let ie=0;ie<se.length;ie++){const ce=se[ie],ge=r.convert(ce.format,ce.colorSpace),V=r.convert(ce.type),Q=w(ce.internalFormat,ge,V,ce.normalized,ce.colorSpace);he(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ze(T),Q,T.width,T.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ze(T),Q,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Q,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(R,T,H){const se=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ie=n.get(T.depthTexture);ie.__renderTarget=T;const ce=se?T.depthTexture.image[0]:T.depthTexture.image;(!ie.__webglTexture||ce.width!==T.width||ce.height!==T.height)&&(ce.width=T.width,ce.height=T.height,T.depthTexture.needsUpdate=!0),se?me(T.depthTexture,0):ue(T.depthTexture,0);const ge=ie.__webglTexture,V=ze(T),Q=se?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,le=T.depthTexture.format===Xr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===rs)he(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,Q,ge,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,le,Q,ge,0);else if(T.depthTexture.format===Xr)he(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,Q,ge,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,le,Q,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(R){const T=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const se=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),se){const ie=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,se.removeEventListener("dispose",ie)};se.addEventListener("dispose",ie),T.__depthDisposeCallback=ie}T.__boundDepthTexture=se}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(H)for(let se=0;se<6;se++)Tt(T.__webglFramebuffer[se],R,se);else R.texture.mipmaps.length>0?Tt(T.__webglFramebuffer[0],R,0):Tt(T.__webglFramebuffer,R,0);else if(H){T.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[se]),T.__webglDepthbuffer[se]===void 0)T.__webglDepthbuffer[se]=s.createRenderbuffer(),Kt(T.__webglDepthbuffer[se],R,!1);else{const ie=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[se];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,ce)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Kt(T.__webglDepthbuffer,R,!1);else{const ie=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,ce)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(R,T,H){const se=n.get(R);T!==void 0&&tt(se.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&at(R)}function Xt(R){const T=R.texture,H=n.get(R),se=n.get(T);R.addEventListener("dispose",I),P(R);const ie=R.textures,ce=R.isWebGLCubeRenderTarget===!0,ge=ie.length>1;if(ge||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=T.version,a.memory.textures++),ce){H.__webglFramebuffer=[];for(let V=0;V<6;V++)if(T.mipmaps.length>0){H.__webglFramebuffer[V]=[];for(let Q=0;Q<T.mipmaps.length;Q++)H.__webglFramebuffer[V][Q]=s.createFramebuffer()}else H.__webglFramebuffer[V]=s.createFramebuffer()}else{if(T.mipmaps.length>0){H.__webglFramebuffer=[];for(let V=0;V<T.mipmaps.length;V++)H.__webglFramebuffer[V]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(ge)for(let V=0,Q=ie.length;V<Q;V++){const le=n.get(ie[V]);le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&he(R)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let V=0;V<ie.length;V++){const Q=ie[V];H.__webglColorRenderbuffer[V]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[V]);const le=r.convert(Q.format,Q.colorSpace),D=r.convert(Q.type),J=w(Q.internalFormat,le,D,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),Z=ze(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,J,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+V,s.RENDERBUFFER,H.__webglColorRenderbuffer[V])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Kt(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,T);for(let V=0;V<6;V++)if(T.mipmaps.length>0)for(let Q=0;Q<T.mipmaps.length;Q++)tt(H.__webglFramebuffer[V][Q],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+V,Q);else tt(H.__webglFramebuffer[V],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);y(T)?M(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(ge){for(let V=0,Q=ie.length;V<Q;V++){const le=ie[V],D=n.get(le);let J=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,D.__webglTexture),Ge(J,le),tt(H.__webglFramebuffer,R,le,s.COLOR_ATTACHMENT0+V,J,0),y(le)&&M(J)}t.unbindTexture()}else{let V=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(V=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(V,se.__webglTexture),Ge(V,T),T.mipmaps.length>0)for(let Q=0;Q<T.mipmaps.length;Q++)tt(H.__webglFramebuffer[Q],R,T,s.COLOR_ATTACHMENT0,V,Q);else tt(H.__webglFramebuffer,R,T,s.COLOR_ATTACHMENT0,V,0);y(T)?M(V):T.mipmaps.length>0&&s.texParameteri(V,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&at(R)}function F(R){const T=R.textures;for(let H=0,se=T.length;H<se;H++){const ie=T[H];if(y(ie)&&ie.mipmapsAutoUpdate===!0){const ce=b(R),ge=n.get(ie).__webglTexture;t.bindTexture(ce,ge),M(ce),t.unbindTexture()}}}const dt=[];function ct(R){if(R.samples>0){if(he(R)===!1){const T=R.textures,H=R.width,se=R.height;let ie=s.COLOR_BUFFER_BIT;const ce=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=n.get(R),V=T.length>1;if(V)for(let le=0;le<T.length;le++)t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let le=0;le<T.length;le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),V){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ge.__webglColorRenderbuffer[le]);const D=n.get(T[le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,D,0)}s.blitFramebuffer(0,0,H,se,0,0,H,se,ie,s.NEAREST),l===!0&&(dt.length=0,dt.push(s.COLOR_ATTACHMENT0+le),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&dt.push(ce),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),V)for(let le=0;le<T.length;le++){t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,ge.__webglColorRenderbuffer[le]);const D=n.get(T[le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,D,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const T=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ze(R){return Math.min(i.maxSamples,R.samples)}function he(R){const T=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ft(R){const T=a.render.frame;u.get(R)!==T&&(u.set(R,T),R.update())}function De(R,T){const H=R.colorSpace,se=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==jn&&H!==Vr&&(et.getTransfer(H)===vt?(se!==zi||ie!==ci)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",H)),T}function ke(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Fe,this.resetTextureUnits=C,this.getTextureUnits=ne,this.setTextureUnits=Se,this.setTexture2D=ue,this.setTexture2DArray=Me,this.setTexture3D=Te,this.setTextureCube=me,this.rebindTextures=zt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=he,this.dispose=k}function Wb(s,e){function t(n,i=Vr){let r;const a=et.getTransfer(i);if(n===ci)return s.UNSIGNED_BYTE;if(n===Nf)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Uf)return s.UNSIGNED_SHORT_5_5_5_1;if(n===pg)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===mg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===fg)return s.BYTE;if(n===dg)return s.SHORT;if(n===zo)return s.UNSIGNED_SHORT;if(n===If)return s.INT;if(n===ir)return s.UNSIGNED_INT;if(n===wi)return s.FLOAT;if(n===rr)return s.HALF_FLOAT;if(n===gg)return s.ALPHA;if(n===_g)return s.RGB;if(n===zi)return s.RGBA;if(n===rs)return s.DEPTH_COMPONENT;if(n===Xr)return s.DEPTH_STENCIL;if(n===Of)return s.RED;if(n===Ff)return s.RED_INTEGER;if(n===Ns)return s.RG;if(n===Bf)return s.RG_INTEGER;if(n===kf)return s.RGBA_INTEGER;if(n===lc||n===cc||n===uc||n===hc)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vh||n===Mh||n===Sh||n===yh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Th||n===bh||n===Eh||n===wh||n===Ah||n===wc||n===Rh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Th||n===bh)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Eh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===wh)return r.COMPRESSED_R11_EAC;if(n===Ah)return r.COMPRESSED_SIGNED_R11_EAC;if(n===wc)return r.COMPRESSED_RG11_EAC;if(n===Rh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ch||n===Ph||n===Lh||n===Dh||n===Ih||n===Nh||n===Uh||n===Oh||n===Fh||n===Bh||n===kh||n===zh||n===Hh||n===Gh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ch)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ph)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ih)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vh||n===Wh||n===Xh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Vh)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qh||n===Yh||n===Ac||n===Kh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ac)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Da?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Xb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Fg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Us({vertexShader:Xb,fragmentShader:qb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new cl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kb extends ks{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null;const g=typeof XRWebGLBinding<"u",m=new Yb,_={},v=t.getContextAttributes();let y=null,M=null;const b=[],w=[],x=new Ye;let S=null,P=null;const A=new zn;A.viewport=new Pt;const N=new zn;N.viewport=new Pt;const I=[A,N],G=new $v;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ue=b[$];return ue===void 0&&(ue=new vu,b[$]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function($){let ue=b[$];return ue===void 0&&(ue=new vu,b[$]=ue),ue.getGripSpace()},this.getHand=function($){let ue=b[$];return ue===void 0&&(ue=new vu,b[$]=ue),ue.getHandSpace()};function W($){const ue=w.indexOf($.inputSource);if(ue===-1)return;const Me=b[ue];Me!==void 0&&(Me.update($.inputSource,$.frame,c||a),Me.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",te);for(let $=0;$<b.length;$++){const ue=w[$];ue!==null&&(w[$]=null,b[$].disconnect(ue))}L=null,k=null,m.reset();for(const $ in _)delete _[$];if(e.setRenderTarget(y),f=null,h=null,d=null,i=null,M=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),P!==null){const $=P.camera;$.fov=P.fov,$.zoom=P.zoom,$.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",B),i.addEventListener("inputsourceschange",te),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Te=null,me=null;v.depth&&(me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=v.stencil?Xr:rs,Te=v.stencil?Da:ir);const Ie={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ie),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new tr(h.textureWidth,h.textureHeight,{format:zi,type:ci,depthTexture:new Na(h.textureWidth,h.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new tr(f.framebufferWidth,f.framebufferHeight,{format:zi,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Fe.setContext(i),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te($){for(let ue=0;ue<$.removed.length;ue++){const Me=$.removed[ue],Te=w.indexOf(Me);Te>=0&&(w[Te]=null,b[Te].disconnect(Me))}for(let ue=0;ue<$.added.length;ue++){const Me=$.added[ue];let Te=w.indexOf(Me);if(Te===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=w.length){w.push(Me),Te=Ie;break}else if(w[Ie]===null){w[Ie]=Me,Te=Ie;break}if(Te===-1)break}const me=b[Te];me&&me.connect(Me)}}function X($,ue){ue===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ue.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ue=$.near,Me=$.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),G.near=N.near=A.near=ue,G.far=N.far=A.far=Me,(L!==G.near||k!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),L=G.near,k=G.far),G.layers.mask=$.layers.mask|6,A.layers.mask=G.layers.mask&-5,N.layers.mask=G.layers.mask&-3;const Te=$.parent,me=G.cameras;X(G,Te);for(let Ie=0;Ie<me.length;Ie++)X(me[Ie],Te);G.projectionMatrix.copy(A.projectionMatrix),G.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&$.isPerspectiveCamera&&(P={camera:$,fov:$.fov,zoom:$.zoom}),C($,G,Te)};function C($,ue,Me){Me===null?$.matrix.copy(ue.matrixWorld):($.matrix.copy(Me.matrixWorld),$.matrix.invert(),$.matrix.multiply(ue.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ue.projectionMatrix),$.projectionMatrixInverse.copy(ue.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ia*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function($){return _[$]};let ne=null;function Se($,ue){if(u=ue.getViewerPose(c||a),p=ue,u!==null){const Me=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Te=!1;Me.length!==G.cameras.length&&(G.cameras.length=0,Te=!0);for(let we=0;we<Me.length;we++){const Ge=Me[we];let Le=null;if(f!==null)Le=f.getViewport(Ge);else{const ht=d.getViewSubImage(h,Ge);Le=ht.viewport,we===0&&(e.setRenderTargetTextures(M,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(M))}let Oe=I[we];Oe===void 0&&(Oe=new zn,Oe.layers.enable(we),Oe.viewport=new Pt,I[we]=Oe),Oe.matrix.fromArray(Ge.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ge.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Le.x,Le.y,Le.width,Le.height),we===0&&(G.matrix.copy(Oe.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Te===!0&&G.cameras.push(Oe)}const me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const we=d.getDepthInformation(Me[0]);we&&we.isValid&&we.texture&&m.init(we,i.renderState)}if(me&&me.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let we=0;we<Me.length;we++){const Ge=Me[we].camera;if(Ge){let Le=_[Ge];Le||(Le=new Fg,_[Ge]=Le);const Oe=d.getCameraImage(Ge);Le.sourceTexture=Oe}}}}for(let Me=0;Me<b.length;Me++){const Te=w[Me],me=b[Me];Te!==null&&me!==void 0&&me.update(Te,ue,c||a)}ne&&ne($,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),p=null}const Fe=new Wg;Fe.setAnimationLoop(Se),this.setAnimationLoop=function($){ne=$},this.dispose=function(){}}}const $b=new Ve,e_=new qe;e_.set(-1,0,0,0,1,0,0,0,1);function Zb(s,e){function t(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,kg(s)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function i(m,_,v,y,M){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(m,_):_.isMeshLambertMaterial?(r(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(m,_),d(m,_)):_.isMeshPhongMaterial?(r(m,_),u(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(m,_),h(m,_),_.isMeshPhysicalMaterial&&f(m,_,M)):_.isMeshMatcapMaterial?(r(m,_),p(m,_)):_.isMeshDepthMaterial?r(m,_):_.isMeshDistanceMaterial?(r(m,_),g(m,_)):_.isMeshNormalMaterial?r(m,_):_.isLineBasicMaterial?(a(m,_),_.isLineDashedMaterial&&o(m,_)):_.isPointsMaterial?l(m,_,v,y):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,t(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===Gn&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,t(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===Gn&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,t(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,t(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);const v=e.get(_),y=v.envMap,M=v.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4($b.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(e_),m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,m.aoMapTransform))}function a(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform))}function o(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function l(m,_,v,y){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*v,m.scale.value=y*.5,_.map&&(m.map.value=_.map,t(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function u(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function d(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function h(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function f(m,_,v){m.ior.value=_.ior,_.diffuseRoughness>0&&(m.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Gn&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.retroreflectivity>0&&(m.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,_){_.matcap&&(m.matcap.value=_.matcap)}function g(m,_){const v=e.get(_).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jb(s,e,t,n){let i={},r={};function a(v,y){const M=y.program;n.uniformBlockBinding(v,M,i[v.id])}function o(v,y){let M=i[v.id];M===void 0&&(p(v),M=l(v),i[v.id]=M,v.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(v,b);const w=e.render.frame;r[v.id]!==w&&(c(v),r[v.id]=w)}function l(v){const y=s.createBuffer(),M=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,M,b),s.bindBuffer(s.UNIFORM_BUFFER,null),y}function c(v){const y=i[v.id],M=v.uniforms,b=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,x=M.length;w<x;w++){const S=M[w];if(Array.isArray(S))for(let P=0,A=S.length;P<A;P++)u(S[P],w,P,b);else u(S,w,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(v,y,M,b){if(h(v,y,M,b)===!0){const w=v.__offset,x=v.value;if(Array.isArray(x)){let S=0;for(let P=0;P<x.length;P++){const A=x[P],N=g(A,!0);d(A,v.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,v.__data)}}function d(v,y,M){typeof v=="number"||typeof v=="boolean"?y[M]=v:v.isMatrix3?(y[M]=v.elements[0],y[M+1]=v.elements[1],y[M+2]=v.elements[2],y[M+3]=0,y[M+4]=v.elements[3],y[M+5]=v.elements[4],y[M+6]=v.elements[5],y[M+7]=0,y[M+8]=v.elements[6],y[M+9]=v.elements[7],y[M+10]=v.elements[8],y[M+11]=0):ArrayBuffer.isView(v)?y.set(v.subarray(0,y.length-M),M):v.toArray(y,M)}function h(v,y,M,b){const w=v.value,x=y+"_"+M;if(Array.isArray(w)){b[x]===void 0&&(b[x]=[]);const S=b[x];let P=!1;for(let A=0;A<w.length;A++)f(w[A],S,A)===!0&&(P=!0);return P}return f(w,b,x)}function f(v,y,M){if(y[M]===void 0)return typeof v=="number"||typeof v=="boolean"?y[M]=v:ArrayBuffer.isView(v)?y[M]=v.slice():y[M]=v.clone(),!0;{const b=y[M];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return y[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function p(v){const y=v.uniforms;let M=0;const b=16;for(let x=0,S=y.length;x<S;x++){const P=Array.isArray(y[x])?y[x]:[y[x]];for(let A=0,N=P.length;A<N;A++){const I=P[A],G=Array.isArray(I.value)?I.value:[I.value],L=Array.isArray(y[x])||Array.isArray(I.value);let k=M;for(let B=0,te=G.length;B<te;B++){const X=G[B],C=g(X,L),ne=M%b,Se=ne%C.boundary,Fe=ne+Se;M+=Se,Fe!==0&&b-Fe<C.storage&&(M+=b-Fe),B===0&&(k=M),M+=C.storage}const W=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new W((M-k)/Float32Array.BYTES_PER_ELEMENT),I.__offset=k}}const w=M%b;return w>0&&(M+=b-w),v.__size=M,v.__cache={},this}function g(v,y){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",v),y===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(v){const y=v.target;y.removeEventListener("dispose",m),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function _(){for(const v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:a,update:o,dispose:_}}const Qb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function jb(){return Xi===null&&(Xi=new Wf(Qb,16,16,Ns,rr),Xi.name="DFG_LUT",Xi.minFilter=vn,Xi.magFilter=vn,Xi.wrapS=Ji,Xi.wrapT=Ji,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class eE{constructor(e={}){const{canvas:t=bx(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=ci}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=f,m=new Set([kf,Bf,Ff]),_=new Set([ci,ir,zo,Da,Nf,Uf]),v=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let b=null,w=null;const x=[],S=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=br,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1,I=null,G=null,L=null,k=null;this._outputColorSpace=Vt;let W=0,B=0,te=null,X=-1,C=null;const ne=new Pt,Se=new Pt;let Fe=null;const $=new Be(0);let ue=0,Me=t.width,Te=t.height,me=1,Ie=null,_t=null;const we=new Pt(0,0,Me,Te),Ge=new Pt(0,0,Me,Te);let Le=!1;const Oe=new Xo,ht=new Yf;let lt=!1,K=!1;const tt=new Ve,Kt=new O,Tt=new Pt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function Xt(){return te===null?me:1}let F=n;function dt(E,U){return t.getContext(E,U)}let ct,ze,he,ft,De,ke,R,T,H,se,ie,ce,ge,V,Q,le,D,J,Z,fe,oe,de,ae;try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pf}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ee,!1),F===null){const U="webgl2";if(F=dt(U,E),F===null)throw dt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pe()}catch(E){throw t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),He("WebGLRenderer: "+E.message),E}function pe(){ct=new iT(F),ct.init(),oe=new Wb(F,ct),ze=new qy(F,ct,e,oe),he=new Gb(F,ct),ze.reversedDepthBuffer&&h&&he.buffers.depth.setReversed(!0),G=F.createFramebuffer(),L=F.createFramebuffer(),k=F.createFramebuffer(),ft=new aT(F),De=new Rb,ke=new Vb(F,ct,he,De,ze,oe,ft),R=new nT(A),T=new lM(F),de=new Wy(F,T),H=new rT(F,T,ft,de),se=new lT(F,H,T,de,ft),J=new oT(F,ze,ke),Q=new Yy(De),ie=new Ab(A,R,ct,ze,de,Q),ce=new Zb(A,De),ge=new Pb,V=new Ob(ct),D=new Vy(A,R,he,se,p,l),le=new Hb(A,se,ze),ae=new Jb(F,ft,ze,he),Z=new Xy(F,ct,ft),fe=new sT(F,ct,ft),ft.programs=ie.programs,A.capabilities=ze,A.extensions=ct,A.properties=De,A.renderLists=ge,A.shadowMap=le,A.state=he,A.info=ft}g!==ci&&(P=new uT(g,t.width,t.height,o,i,r));const re=new Kb(A,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=ct.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ct.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(E){E!==void 0&&(me=E,this.setSize(Me,Te,!1))},this.getSize=function(E){return E.set(Me,Te)},this.setSize=function(E,U,Y=!0){if(re.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=E,Te=U,t.width=Math.floor(E*me),t.height=Math.floor(U*me),Y===!0&&(t.style.width=E+"px",t.style.height=U+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Me*me,Te*me).floor()},this.setDrawingBufferSize=function(E,U,Y){Me=E,Te=U,me=Y,t.width=Math.floor(E*Y),t.height=Math.floor(U*Y),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(g===ci){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ne)},this.getViewport=function(E){return E.copy(we)},this.setViewport=function(E,U,Y,z){E.isVector4?we.set(E.x,E.y,E.z,E.w):we.set(E,U,Y,z),he.viewport(ne.copy(we).multiplyScalar(Xt()).round())},this.getScissor=function(E){return E.copy(Ge)},this.setScissor=function(E,U,Y,z){E.isVector4?Ge.set(E.x,E.y,E.z,E.w):Ge.set(E,U,Y,z),he.scissor(Se.copy(Ge).multiplyScalar(Xt()).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(E){he.setScissorTest(Le=E)},this.setOpaqueSort=function(E){Ie=E},this.setTransparentSort=function(E){_t=E},this.getClearColor=function(E){return E.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,Y=!0){let z=0;if(E){let q=!1;if(te!==null){const ve=te.texture.format;q=m.has(ve)}if(q){const ve=te.texture.type,Re=_.has(ve),xe=D.getClearColor(),Ee=D.getClearAlpha(),Ne=xe.r,Xe=xe.g,rt=xe.b;Re?(v[0]=Ne,v[1]=Xe,v[2]=rt,v[3]=Ee,F.clearBufferuiv(F.COLOR,0,v)):(y[0]=Ne,y[1]=Xe,y[2]=rt,y[3]=Ee,F.clearBufferiv(F.COLOR,0,y))}else z|=F.COLOR_BUFFER_BIT}U&&(z|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),D.dispose(),ge.dispose(),V.dispose(),ke.dispose(),De.dispose(),R.dispose(),se.dispose(),H.dispose(),de.dispose(),ae.dispose(),ie.dispose(),re.dispose(),re.removeEventListener("sessionstart",bt),re.removeEventListener("sessionend",mt),nn.stop()};function j(E){E.preventDefault(),Pc("WebGLRenderer: Context Lost."),N=!0}function _e(){Pc("WebGLRenderer: Context Restored."),N=!1;const E=ft.autoReset,U=le.enabled,Y=le.autoUpdate,z=le.needsUpdate,q=le.type;pe(),ft.autoReset=E,le.enabled=U,le.autoUpdate=Y,le.needsUpdate=z,le.type=q}function ee(E){He("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function be(E){const U=E.target;U.removeEventListener("dispose",be),nt(U)}function nt(E){We(E),De.remove(E)}function We(E){const U=De.get(E).programs;U!==void 0&&(U.forEach(function(Y){ie.releaseProgram(Y)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,Y,z,q,ve){U===null&&(U=at);const Re=q.isMesh&&q.matrixWorld.determinantAffine()<0,xe=xi(E,U,Y,z,q);he.setMaterial(z,Re);let Ee=Y.index,Ne=1;if(z.wireframe===!0){if(Ee=H.getWireframeAttribute(Y),Ee===void 0)return;Ne=2}const Xe=Y.drawRange,rt=Y.attributes.position;let Ce=Xe.start*Ne,st=(Xe.start+Xe.count)*Ne;ve!==null&&(Ce=Math.max(Ce,ve.start*Ne),st=Math.min(st,(ve.start+ve.count)*Ne)),Ee!==null?(Ce=Math.max(Ce,0),st=Math.min(st,Ee.count)):rt!=null&&(Ce=Math.max(Ce,0),st=Math.min(st,rt.count));const Jt=st-Ce;if(Jt<0||Jt===1/0)return;de.setup(q,z,xe,Y,Ee);let Ct,wt=Z;if(Ee!==null&&(Ct=T.get(Ee),wt=fe,wt.setIndex(Ct)),q.isMesh)z.wireframe===!0?(he.setLineWidth(z.wireframeLinewidth*Xt()),wt.setMode(F.LINES)):wt.setMode(F.TRIANGLES);else if(q.isLine){let Tn=z.linewidth;Tn===void 0&&(Tn=1),he.setLineWidth(Tn*Xt()),q.isLineSegments?wt.setMode(F.LINES):q.isLineLoop?wt.setMode(F.LINE_LOOP):wt.setMode(F.LINE_STRIP)}else q.isPoints?wt.setMode(F.POINTS):q.isSprite&&wt.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))wt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Tn=q._multiDrawStarts,Pe=q._multiDrawCounts,Dn=q._multiDrawCount,pt=Ee?T.get(Ee).bytesPerElement:1,us=De.get(z).currentProgram.getUniforms();for(let bn=0;bn<Dn;bn++)us.setValue(F,"_gl_DrawID",bn),wt.render(Tn[bn]/pt,Pe[bn])}else if(q.isInstancedMesh)wt.renderInstances(Ce,Jt,q.count);else if(Y.isInstancedBufferGeometry){const Tn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Pe=Math.min(Y.instanceCount,Tn);wt.renderInstances(Ce,Jt,Pe)}else wt.render(Ce,Jt)};function Dt(E,U,Y,z){I!==null&&E.isNodeMaterial&&I.setObject(z,E),lt===!0&&Q.setState(E,Y,!1),E.transparent===!0&&E.side===Bi&&E.forceSinglePass===!1?(E.side=Gn,E.needsUpdate=!0,ni(E,U,z),E.side=is,E.needsUpdate=!0,ni(E,U,z),E.side=Bi):ni(E,U,z)}this.compile=function(E,U,Y=null){Y===null&&(Y=E),I!==null&&I.renderStart(E,U,Y),w=V.get(Y),w.init(U),S.push(w),Y.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),E!==Y&&E.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights(),I!==null&&I.updateLights(w.state.lightsArray),K=this.localClippingEnabled,lt=Q.init(this.clippingPlanes,K),lt===!0&&Q.setGlobalState(this.clippingPlanes,U),I!==null&&le.render(w.state.shadowsArray,Y,U);const z=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ve=q.material;if(ve)if(Array.isArray(ve))for(let Re=0;Re<ve.length;Re++){const xe=ve[Re];Dt(xe,Y,U,q),z.add(xe)}else Dt(ve,Y,U,q),z.add(ve)}),w=S.pop(),I!==null&&I.renderEnd(),z},this.compileAsync=function(E,U,Y=null){const z=this.compile(E,U,Y);return new Promise(q=>{function ve(){if(z.forEach(function(Re){const Ee=De.get(Re).currentProgram;(Ee===void 0||Ee.isReady())&&z.delete(Re)}),z.size===0){q(E);return}setTimeout(ve,10)}ct.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let $t=null;function It(E){$t&&$t(E)}function bt(){nn.stop()}function mt(){nn.start()}const nn=new Wg;nn.setAnimationLoop(It),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(E){$t=E,re.setAnimationLoop(E),E===null?nn.stop():nn.start()},re.addEventListener("sessionstart",bt),re.addEventListener("sessionend",mt),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;I!==null&&I.renderStart(E,U);const Y=re.enabled===!0&&re.isPresenting===!0,z=P!==null&&(te===null||Y)&&P.begin(A,te);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,U,te),w=V.get(E,S.length),w.init(U),w.state.textureUnits=ke.getTextureUnits(),S.push(w),tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ht.setFromArrayCamera(U):Oe.setFromProjectionMatrix(tt,Hi,U.reversedDepth),K=this.localClippingEnabled,lt=Q.init(this.clippingPlanes,K),b=ge.get(E,x.length),b.init(),x.push(b),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){const Re=A.xr.getDepthSensingMesh();Re!==null&&Et(Re,U,-1/0,A.sortObjects)}Et(E,U,0,A.sortObjects),b.finish(),I!==null&&I.updateLights(w.state.lightsArray),A.sortObjects===!0&&b.sort(Ie,_t),zt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,zt&&D.addToRenderList(b,E),this.info.autoReset===!0&&this.info.reset(),lt===!0&&Q.beginShadows();const q=w.state.shadowsArray;if(le.render(q,E,U),lt===!0&&Q.endShadows(),(z&&P.hasRenderPass())===!1){const Re=b.opaque,xe=b.transmissive;if(w.setupLights(),U.isArrayCamera){const Ee=U.cameras;if(xe.length>0)for(let Ne=0,Xe=Ee.length;Ne<Xe;Ne++){const rt=Ee[Ne];ti(Re,xe,E,rt)}zt&&D.render(E);for(let Ne=0,Xe=Ee.length;Ne<Xe;Ne++){const rt=Ee[Ne];yn(b,E,rt,rt.viewport)}}else xe.length>0&&ti(Re,xe,E,U),zt&&D.render(E),yn(b,E,U)}te!==null&&B===0&&(ke.updateMultisampleRenderTarget(te),ke.updateRenderTargetMipmap(te)),z&&P.end(A),E.isScene===!0&&E.onAfterRender(A,E,U),de.resetDefaultState(),X=-1,C=null,S.pop(),S.length>0?(w=S[S.length-1],ke.setTextureUnits(w.state.textureUnits),lt===!0&&Q.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?b=x[x.length-1]:b=null,I!==null&&I.renderEnd()};function Et(E,U,Y,z){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){const Re=U.isArrayCamera?ht:Oe;if(!E.frustumCulled||E.intersectsFrustum(Re)){z&&Tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(tt);const xe=se.update(E),Ee=E.material;Ee.visible&&b.push(E,xe,Ee,Y,Tt.z,null,U)}}else if(E.isMesh||E.isLine||E.isPoints){const Re=U.isArrayCamera?ht:Oe;if(!E.frustumCulled||E.intersectsFrustum(Re)){const xe=se.update(E),Ee=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Tt.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Tt.copy(xe.boundingSphere.center)),Tt.applyMatrix4(E.matrixWorld).applyMatrix4(tt)),Array.isArray(Ee)){const Ne=xe.groups;for(let Xe=0,rt=Ne.length;Xe<rt;Xe++){const Ce=Ne[Xe],st=Ee[Ce.materialIndex];st&&st.visible&&b.push(E,xe,st,Y,Tt.z,Ce,U)}}else Ee.visible&&b.push(E,xe,Ee,Y,Tt.z,null,U)}}}const ve=E.children;for(let Re=0,xe=ve.length;Re<xe;Re++)Et(ve[Re],U,Y,z)}function yn(E,U,Y,z){const{opaque:q,transmissive:ve,transparent:Re}=E;w.setupLightsView(Y),lt===!0&&Q.setGlobalState(A.clippingPlanes,Y),z&&he.viewport(ne.copy(z)),q.length>0&&Ht(q,U,Y),ve.length>0&&Ht(ve,U,Y),Re.length>0&&Ht(Re,U,Y),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function ti(E,U,Y,z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){const Ce=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new tr(1,1,{generateMipmaps:!0,type:Ce?rr:ci,minFilter:Qi,samples:Math.max(4,ze.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}const ve=w.state.transmissionRenderTarget[z.id],Re=z.viewport||ne;ve.setSize(Re.z*A.transmissionResolutionScale,Re.w*A.transmissionResolutionScale);const xe=A.getRenderTarget(),Ee=A.getActiveCubeFace(),Ne=A.getActiveMipmapLevel();A.setRenderTarget(ve),A.getClearColor($),ue=A.getClearAlpha(),ue<1&&A.setClearColor(16777215,.5),A.clear(),zt&&D.render(Y);const Xe=A.toneMapping;A.toneMapping=br;const rt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),lt===!0&&Q.setGlobalState(A.clippingPlanes,z),Ht(E,Y,z),ke.updateMultisampleRenderTarget(ve),ke.updateRenderTargetMipmap(ve),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let st=0,Jt=U.length;st<Jt;st++){const Ct=U[st],{object:wt,geometry:Tn,material:Pe,group:Dn}=Ct;if(Pe.side===Bi&&wt.layers.test(z.layers)){const pt=Pe.side;Pe.side=Gn,Pe.needsUpdate=!0,Zt(wt,Y,z,Tn,Pe,Dn),Pe.side=pt,Pe.needsUpdate=!0,Ce=!0}}Ce===!0&&(ke.updateMultisampleRenderTarget(ve),ke.updateRenderTargetMipmap(ve))}A.setRenderTarget(xe,Ee,Ne),A.setClearColor($,ue),rt!==void 0&&(z.viewport=rt),A.toneMapping=Xe}function Ht(E,U,Y){const z=U.isScene===!0?U.overrideMaterial:null;for(let q=0,ve=E.length;q<ve;q++){const Re=E[q],{object:xe,geometry:Ee,group:Ne}=Re;let Xe=Re.material;Xe.allowOverride===!0&&z!==null&&(Xe=z),xe.layers.test(Y.layers)&&Zt(xe,U,Y,Ee,Xe,Ne)}}function Zt(E,U,Y,z,q,ve){I!==null&&q.isNodeMaterial&&I.setObject(E,q),E.onBeforeRender(A,U,Y,z,q,ve),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(A,U,Y,z,E,ve),q.transparent===!0&&q.side===Bi&&q.forceSinglePass===!1?(q.side=Gn,q.needsUpdate=!0,A.renderBufferDirect(Y,U,z,q,E,ve),q.side=is,q.needsUpdate=!0,A.renderBufferDirect(Y,U,z,q,E,ve),q.side=Bi):A.renderBufferDirect(Y,U,z,q,E,ve),E.onAfterRender(A,U,Y,z,q,ve)}function rn(E){let U=0;for(const Y of E)Y.texture!==null&&U++;return U}function ni(E,U,Y){U.isScene!==!0&&(U=at);const z=De.get(E),q=w.state.lights,ve=w.state.shadowsArray,Re=q.state.version,xe=ie.getParameters(E,q.state,ve,U,Y,w.state.lightProbeGridArray),Ee=ie.getProgramCacheKey(xe);let Ne=z.programs;z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;const Xe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;z.envMap=R.get(E.envMap||z.environment,Xe),z.envMapRotation=z.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",be),Ne=new Map,z.programs=Ne,z.programVariants=new Map);let rt=Ne.get(Ee);if(rt!==void 0){if(z.currentProgram===rt&&z.lightsStateVersion===Re)return Gt(E,xe),rt}else xe.uniforms=ie.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,Y,xe),E.onBeforeCompile(xe,A),rt=ie.acquireProgram(xe,Ee),Ne.set(Ee,rt),z.uniforms=xe.uniforms;const Ce=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=Q.uniform),Gt(E,xe),z.needsLights=pl(E),z.lightsStateVersion=Re,z.needsLights&&(Ce.ambientLightColor.value=q.state.ambient,Ce.lightProbe.value=q.state.probe,Ce.sunLights.value=q.state.sun,Ce.sunLightShadows.value=q.state.sunShadow,Ce.directionalLights.value=q.state.directional,Ce.directionalLightShadows.value=q.state.directionalShadow,Ce.spotLights.value=q.state.spot,Ce.spotLightShadows.value=q.state.spotShadow,Ce.rectAreaLights.value=q.state.rectArea,Ce.ltc_1.value=q.state.rectAreaLTC1,Ce.ltc_2.value=q.state.rectAreaLTC2,Ce.pointLights.value=q.state.point,Ce.pointLightShadows.value=q.state.pointShadow,Ce.hemisphereLights.value=q.state.hemi,Ce.sunShadowMatrix.value=q.state.sunShadowMatrix,Ce.sunShadowCascade.value=q.state.sunShadowCascade,Ce.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ce.spotLightMatrix.value=q.state.spotLightMatrix,Ce.spotLightMap.value=q.state.spotLightMap,Ce.pointShadowMatrix.value=q.state.pointShadowMatrix),z.numLightProbeGrids=rn(w.state.lightProbeGridArray),z.currentProgram=rt,z.uniformsList=null,rt}function Gs(E,U,Y,z,q){const ve=De.get(E),Re=ve.currentProgram.id+","+z+","+q;let xe=ve.programVariants.get(Re);return xe===void 0?(xe=ni(E,U,Y),ve.programVariants.set(Re,xe)):(ve.currentProgram=xe,ve.uniformsList=null,ve.outputColorSpace=z,ve.toneMapping=q),xe}function sn(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=fc.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Gt(E,U){const Y=De.get(E);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function xi(E,U,Y,z,q){U.isScene!==!0&&(U=at),ke.resetTextureUnits();const ve=U.fog,Re=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,xe=te===null?A.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:et.workingColorSpace,Ee=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ne=R.get(z.envMap||Re,Ee),Xe=z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,rt=!!Y.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ce=!!Y.morphAttributes.position,st=!!Y.morphAttributes.normal,Jt=!!Y.morphAttributes.color;let Ct=br;z.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ct=A.toneMapping);const wt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Tn=wt!==void 0?wt.length:0,Pe=De.get(z),Dn=w.state.lights;if(lt===!0&&(K===!0||E!==C)){const Ut=E===C&&z.id===X;Q.setState(z,E,Ut)}let pt=!1,us=!1;z.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==Dn.state.version||q.isBatchedMesh&&Pe.batching===!1||!q.isBatchedMesh&&Pe.batching===!0||q.isBatchedMesh&&Pe.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Pe.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Pe.instancing===!1||!q.isInstancedMesh&&Pe.instancing===!0||q.isSkinnedMesh&&Pe.skinning===!1||!q.isSkinnedMesh&&Pe.skinning===!0||q.isInstancedMesh&&Pe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Pe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Pe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Pe.instancingMorph===!1&&q.morphTexture!==null||Pe.envMap!==Ne||z.fog===!0&&Pe.fog!==ve||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Q.numPlanes||Pe.numIntersection!==Q.numIntersection)||Pe.vertexAlphas!==Xe||Pe.vertexTangents!==rt||Pe.morphTargets!==Ce||Pe.morphNormals!==st||Pe.morphColors!==Jt||Pe.morphTargetsCount!==Tn||Pe.numLightProbeGrids!==rn(w.state.lightProbeGridArray)?pt=!0:(Pe.outputColorSpace!==xe||Pe.toneMapping!==Ct)&&(us=!0):(pt=!0,Pe.__version=z.version);let bn=Pe.currentProgram;(pt===!0||us===!0)&&(bn=us===!0?Gs(z,U,q,xe,Ct):ni(z,U,q),I&&z.isNodeMaterial&&I.onUpdateProgram(z,bn,Pe));let ml=!1,Dr=!1,hs=!1;const ut=bn.getUniforms(),xn=Pe.uniforms;if(he.useProgram(bn.program)&&(ml=!0,Dr=!0,hs=!0),z.id!==X&&(X=z.id,Dr=!0),ml||C!==E){he.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ut.setValue(F,"projectionMatrix",E.projectionMatrix),ut.setValue(F,"viewMatrix",E.matrixWorldInverse);const fn=ut.map.cameraPosition;fn!==void 0&&fn.setValue(F,Kt.setFromMatrixPosition(E.matrixWorld)),ze.logarithmicDepthBuffer&&ut.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ut.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),C!==E&&(C=E,Dr=!0,hs=!0)}if(Pe.needsLights&&(Dn.state.sunShadowMap.length>0&&ut.setValue(F,"sunShadowMap",Dn.state.sunShadowMap,ke),Dn.state.directionalShadowMap.length>0&&ut.setValue(F,"directionalShadowMap",Dn.state.directionalShadowMap,ke),Dn.state.spotShadowMap.length>0&&ut.setValue(F,"spotShadowMap",Dn.state.spotShadowMap,ke),Dn.state.pointShadowMap.length>0&&ut.setValue(F,"pointShadowMap",Dn.state.pointShadowMap,ke)),q.isSkinnedMesh){ut.setOptional(F,q,"bindMatrix"),ut.setOptional(F,q,"bindMatrixInverse");const Ut=q.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ut.setValue(F,"boneTexture",Ut.boneTexture,ke))}q.isBatchedMesh&&(ut.setOptional(F,q,"batchingTexture"),ut.setValue(F,"batchingTexture",q._matricesTexture,ke),ut.setOptional(F,q,"batchingIdTexture"),ut.setValue(F,"batchingIdTexture",q._indirectTexture,ke),ut.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&ut.setValue(F,"batchingColorTexture",q._colorsTexture,ke));const Ii=Y.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&J.update(q,Y,bn),(Dr||Pe.receiveShadow!==q.receiveShadow)&&(Pe.receiveShadow=q.receiveShadow,ut.setValue(F,"receiveShadow",q.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(xn.envMapIntensity.value=U.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=jb()),Dr){if(ut.setValue(F,"toneMappingExposure",A.toneMappingExposure),Pe.needsLights&&Ka(xn,hs),ve&&z.fog===!0&&ce.refreshFogUniforms(xn,ve),ce.refreshMaterialUniforms(xn,z,me,Te,w.state.transmissionRenderTarget[E.id]),Pe.needsLights&&Pe.numLightProbeGrids>0){const Ut=M;let fn=0;for(const hr of w.state.lightProbeGridArray)hr.texture!==null&&(Ut.textures[fn]=hr.texture,Ut.min[fn]=hr.boundingBox.min,Ut.max[fn]=hr.boundingBox.max,Ut.resolution[fn]=hr.resolution,fn++);for(const hr in Ut)Ut[hr].length=fn;xn.probesSH.value=Ut.textures,xn.probesMin.value=Ut.min,xn.probesMax.value=Ut.max,xn.probesResolution.value=Ut.resolution}fc.upload(F,sn(Pe),xn,ke)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(fc.upload(F,sn(Pe),xn,ke),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ut.setValue(F,"center",q.center),ut.setValue(F,"modelViewMatrix",q.modelViewMatrix),ut.setValue(F,"normalMatrix",q.normalMatrix),ut.setValue(F,"modelMatrix",q.matrixWorld),z.uniformsGroups!==void 0){const Ut=z.uniformsGroups;for(let fn=0,hr=Ut.length;fn<hr;fn++){const Dd=Ut[fn];ae.update(Dd,bn),ae.bind(Dd,bn)}}return bn}function Ka(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function pl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(E,U,Y){const z=De.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),De.get(E.texture).__webglTexture=U,De.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:Y,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const Y=De.get(E);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,Y=0){te=E,W=U,B=Y;let z=null,q=!1,ve=!1;if(E){const xe=De.get(E);if(xe.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(F.FRAMEBUFFER,xe.__webglFramebuffer),ne.copy(E.viewport),Se.copy(E.scissor),Fe=E.scissorTest,he.viewport(ne),he.scissor(Se),he.setScissorTest(Fe),X=-1;return}else if(xe.__webglFramebuffer===void 0)ke.setupRenderTarget(E);else if(xe.__hasExternalTextures)ke.rebindTextures(E,De.get(E.texture).__webglTexture,De.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Xe=E.depthTexture;if(xe.__boundDepthTexture!==Xe){if(Xe!==null&&De.has(Xe)&&(E.width!==Xe.image.width||E.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(E)}}const Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ve=!0);const Ne=De.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?z=Ne[U][Y]:z=Ne[U],q=!0):E.samples>0&&ke.useMultisampledRTT(E)===!1?z=De.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?z=Ne[Y]:z=Ne,ne.copy(E.viewport),Se.copy(E.scissor),Fe=E.scissorTest}else ne.copy(we).multiplyScalar(me).floor(),Se.copy(Ge).multiplyScalar(me).floor(),Fe=Le;if(Y!==0&&(z=G),he.bindFramebuffer(F.FRAMEBUFFER,z)&&he.drawBuffers(E,z),he.viewport(ne),he.scissor(Se),he.setScissorTest(Fe),q){const xe=De.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,Y)}else if(ve){const xe=U;for(let Ee=0;Ee<E.textures.length;Ee++){const Ne=De.get(E.textures[Ee]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ee,Ne.__webglTexture,Y,xe)}}else if(E!==null&&Y!==0){const xe=De.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xe.__webglTexture,Y)}X=-1};function Lr(E){const U=De.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=ze.textureFormatReadable(E.format),U.__typeReadable=ze.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,Y,z,q,ve,Re,xe=0){if(!(E&&E.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Ee=Ee[Re],Array.isArray(Ee)&&(Ee=Ee[0])),Ee){he.bindFramebuffer(F.FRAMEBUFFER,Ee);try{const Ne=E.textures[xe],Xe=Ne.format,rt=Ne.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xe);const Ce=Lr(Ne);if(Ce.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-z&&Y>=0&&Y<=E.height-q&&F.readPixels(U,Y,z,q,oe.convert(Xe),oe.convert(rt),ve)}finally{const Ne=te!==null?De.get(te).__webglFramebuffer:null;he.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,U,Y,z,q,ve,Re,xe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Ee=Ee[Re],Array.isArray(Ee)&&(Ee=Ee[0])),Ee)if(U>=0&&U<=E.width-z&&Y>=0&&Y<=E.height-q){he.bindFramebuffer(F.FRAMEBUFFER,Ee);const Ne=E.textures[xe],Xe=Ne.format,rt=Ne.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xe);const Ce=Lr(Ne);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,st),F.bufferData(F.PIXEL_PACK_BUFFER,ve.byteLength,F.STREAM_READ),F.readPixels(U,Y,z,q,oe.convert(Xe),oe.convert(rt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Jt=te!==null?De.get(te).__webglFramebuffer:null;he.bindFramebuffer(F.FRAMEBUFFER,Jt);const Ct=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ex(F,Ct,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,st),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ve),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(st),F.deleteSync(Ct),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,Y=0){const z=Math.pow(2,-Y),q=Math.floor(E.image.width*z),ve=Math.floor(E.image.height*z),Re=U!==null?U.x:0,xe=U!==null?U.y:0;ke.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Re,xe,q,ve),he.unbindTexture()},this.copyTextureToTexture=function(E,U,Y=null,z=null,q=0,ve=0){let Re,xe,Ee,Ne,Xe,rt,Ce,st,Jt;const Ct=E.isCompressedTexture?E.mipmaps[ve]:E.image;if(Y!==null)Re=Y.max.x-Y.min.x,xe=Y.max.y-Y.min.y,Ee=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,Xe=Y.min.y,rt=Y.isBox3?Y.min.z:0;else{const ut=Math.pow(2,-q);Re=Math.floor(Ct.width*ut),xe=Math.floor(Ct.height*ut),E.isDataArrayTexture?Ee=Ct.depth:E.isData3DTexture?Ee=Math.floor(Ct.depth*ut):Ee=1,Ne=0,Xe=0,rt=0}z!==null?(Ce=z.x,st=z.y,Jt=z.z):(Ce=0,st=0,Jt=0);const wt=oe.convert(U.format),Tn=oe.convert(U.type);let Pe;U.isData3DTexture?(ke.setTexture3D(U,0),Pe=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ke.setTexture2DArray(U,0),Pe=F.TEXTURE_2D_ARRAY):(ke.setTexture2D(U,0),Pe=F.TEXTURE_2D),he.activeTexture(F.TEXTURE0),he.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),he.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),he.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const Dn=he.getParameter(F.UNPACK_ROW_LENGTH),pt=he.getParameter(F.UNPACK_IMAGE_HEIGHT),us=he.getParameter(F.UNPACK_SKIP_PIXELS),bn=he.getParameter(F.UNPACK_SKIP_ROWS),ml=he.getParameter(F.UNPACK_SKIP_IMAGES);he.pixelStorei(F.UNPACK_ROW_LENGTH,Ct.width),he.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ct.height),he.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),he.pixelStorei(F.UNPACK_SKIP_ROWS,Xe),he.pixelStorei(F.UNPACK_SKIP_IMAGES,rt);const Dr=E.isDataArrayTexture||E.isData3DTexture,hs=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const ut=De.get(E),xn=De.get(U),Ii=De.get(ut.__renderTarget),Ut=De.get(xn.__renderTarget);he.bindFramebuffer(F.READ_FRAMEBUFFER,Ii.__webglFramebuffer),he.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let fn=0;fn<Ee;fn++)Dr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,De.get(E).__webglTexture,q,rt+fn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,De.get(U).__webglTexture,ve,Jt+fn)),F.blitFramebuffer(Ne,Xe,Ne+Re,Xe+xe,Ce,st,Ce+Re,st+xe,F.DEPTH_BUFFER_BIT,F.NEAREST);he.bindFramebuffer(F.READ_FRAMEBUFFER,null),he.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||De.has(E)){const ut=De.get(E),xn=De.get(U);he.bindFramebuffer(F.READ_FRAMEBUFFER,L),he.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let Ii=0;Ii<Ee;Ii++)Dr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ut.__webglTexture,q,rt+Ii):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ut.__webglTexture,q),hs?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xn.__webglTexture,ve,Jt+Ii):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xn.__webglTexture,ve),q!==0?F.blitFramebuffer(Ne,Xe,Ne+Re,Xe+xe,Ce,st,Ce+Re,st+xe,F.COLOR_BUFFER_BIT,F.NEAREST):hs?F.copyTexSubImage3D(Pe,ve,Ce,st,Jt+Ii,Ne,Xe,Re,xe):F.copyTexSubImage2D(Pe,ve,Ce,st,Ne,Xe,Re,xe);he.bindFramebuffer(F.READ_FRAMEBUFFER,null),he.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else hs?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Pe,ve,Ce,st,Jt,Re,xe,Ee,wt,Tn,Ct.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Pe,ve,Ce,st,Jt,Re,xe,Ee,wt,Ct.data):F.texSubImage3D(Pe,ve,Ce,st,Jt,Re,xe,Ee,wt,Tn,Ct):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ve,Ce,st,Re,xe,wt,Tn,Ct.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ve,Ce,st,Ct.width,Ct.height,wt,Ct.data):F.texSubImage2D(F.TEXTURE_2D,ve,Ce,st,Re,xe,wt,Tn,Ct);he.pixelStorei(F.UNPACK_ROW_LENGTH,Dn),he.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt),he.pixelStorei(F.UNPACK_SKIP_PIXELS,us),he.pixelStorei(F.UNPACK_SKIP_ROWS,bn),he.pixelStorei(F.UNPACK_SKIP_IMAGES,ml),ve===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Pe),he.unbindTexture()},this.initRenderTarget=function(E){De.get(E).__webglFramebuffer===void 0&&ke.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ke.setTextureCube(E,0):E.isData3DTexture?ke.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ke.setTexture2DArray(E,0):ke.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){W=0,B=0,te=null,he.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}class tE extends Rg{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Va;e.deleteAttribute("uv");const t=new Oa({side:Gn}),n=new Oa,i=new Vg(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Lt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new qf(e,n,6),o=new yt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new Lt(e,ia(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Lt(e,ia(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new Lt(e,ia(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const d=new Lt(e,ia(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const h=new Lt(e,ia(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const f=new Lt(e,ia(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ia(s){return new bv({color:0,emissive:16777215,emissiveIntensity:s})}function jp(s,e){if(e===fx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===$h||e===xg){let t=s.getIndex();if(t===null){const r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===$h)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function nE(s){const e=new Map,t=new Map,n=s.clone();return t_(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function t_(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)t_(s.children[n],e.children[n],t)}class iE extends zs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new lE(t)}),this.register(function(t){return new cE(t)}),this.register(function(t){return new uE(t)}),this.register(function(t){return new vE(t)}),this.register(function(t){return new ME(t)}),this.register(function(t){return new SE(t)}),this.register(function(t){return new fE(t)}),this.register(function(t){return new dE(t)}),this.register(function(t){return new pE(t)}),this.register(function(t){return new mE(t)}),this.register(function(t){return new oE(t)}),this.register(function(t){return new gE(t)}),this.register(function(t){return new hE(t)}),this.register(function(t){return new xE(t)}),this.register(function(t){return new _E(t)}),this.register(function(t){return new sE(t)}),this.register(function(t){return new em(t,je.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new em(t,je.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new yE(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Qr.extractUrlBase(e);a=Qr.resolveURL(c,this.path)}else a=Qr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Uc(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===n_){try{a[je.KHR_BINARY_GLTF]=new TE(e)}catch(d){i&&i(d);return}r=JSON.parse(a[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new OE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case je.KHR_MATERIALS_UNLIT:a[d]=new aE;break;case je.KHR_DRACO_MESH_COMPRESSION:a[d]=new bE(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:a[d]=new EE;break;case je.KHR_MESH_QUANTIZATION:a[d]=new wE;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function rE(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function kt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class sE{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Be(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],jn);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new jf(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vg(u),c.distance=d;break;case"spot":c=new Xv(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),qi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class aE{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Sr}extendParams(e,t,n){const i=[];e.color=new Be(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],jn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Vt))}return Promise.all(i)}}class oE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class lE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(r,r)}return Promise.all(i)}}class cE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class uE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class hE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class fE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],jn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Vt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class dE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class pE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(r[0],r[1],r[2],jn),Promise.all(i)}}class mE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class gE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(r[0],r[1],r[2],jn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Vt)),Promise.all(i)}}class _E{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class xE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class vE{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class ME{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class SE{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class em{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,h,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(f),u,d,h,i.mode,i.filter),f})})}else return null}}class yE{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Si.TRIANGLES&&c.mode!==Si.TRIANGLE_STRIP&&c.mode!==Si.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(const p of d){const g=new Ve,m=new O,_=new Gi,v=new O(1,1,1),y=new qf(p.geometry,p.material,h);for(let b=0;b<h;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,b),l.SCALE&&v.fromBufferAttribute(l.SCALE,b),y.setMatrixAt(b,g.compose(m,_,v));let M=null;for(const b in l)if(b==="_COLOR_0"){const w=l[b];y.instanceColor=new Lc(w.array,w.itemSize,w.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(M===null){const x=y.geometry;M=new Wn,M.name=x.name;for(const S in x.attributes)M.setAttribute(S,x.attributes[S]);for(const S in x.morphAttributes)M.morphAttributes[S]=x.morphAttributes[S];x.index!==null&&M.setIndex(x.index),M.morphTargetsRelative=x.morphTargetsRelative;for(const S of x.groups)M.addGroup(S.start,S.count,S.materialIndex);x.boundingBox!==null&&(M.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(M.boundingSphere=x.boundingSphere.clone()),M.drawRange.start=x.drawRange.start,M.drawRange.count=x.drawRange.count,M.userData=Object.assign({},x.userData),y.geometry=M}const w=l[b];M.setAttribute(b,new Lc(w.array,w.itemSize,w.normalized))}yt.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const n_="glTF",ro=12,tm={JSON:1313821514,BIN:5130562};class TE{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ro),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==n_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ro,r=new DataView(e,ro);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===tm.JSON){const c=new Uint8Array(e,ro+a,o);this.content=n.decode(c)}else if(l===tm.BIN){const c=ro+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class bE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const d=jh[u]||u.toLowerCase();o[d]=a[u]}for(const u in e.attributes){const d=jh[u]||u.toLowerCase();if(a[u]!==void 0){const h=n.accessors[e.attributes[u]],f=Sa[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){i.decodeDracoFile(u,function(f){for(const p in f.attributes){const g=f.attributes[p],m=l[p];m!==void 0&&(g.normalized=m)}d(f)},o,c,jn,h)})})}}class EE{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class wE{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class i_ extends Wa{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,d=(n-t)/u,h=d*d,f=h*d,p=e*c,g=p-c,m=-2*f+3*h,_=f-h,v=1-m,y=_-h+d;for(let M=0;M!==o;M++){const b=a[g+M+o],w=a[g+M+l]*u,x=a[p+M+o],S=a[p+M]*u;r[M]=v*b+y*w+m*x+_*S}return r}}const AE=new Gi;class RE extends i_{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return AE.fromArray(r).normalize().toArray(r),r}}const Si={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Sa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},nm={9728:ln,9729:vn,9984:hg,9985:oc,9986:ho,9987:Qi},im={33071:Ji,33648:Ec,10497:Er},Wu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},jh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Br={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},CE={CUBICSPLINE:void 0,LINEAR:Go,STEP:Ho},Xu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function PE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Oa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:is})),s.DefaultMaterial}function gs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function LE(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(h)}if(i){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(h)}if(r){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=h),s.morphTargetsRelative=!0,s})}function DE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function IE(s){let e;const t=s.extensions&&s.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qu(t.attributes):e=s.indices+":"+qu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+qu(s.targets[n]);return e}function qu(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ef(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function NE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const UE=new Ve;class OE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new rE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?(this.textureLoader=new po(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Kv(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Uc(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return gs(r,o,i),qi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Qr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Wu[i.type],o=Sa[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Kn(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Wu[i.type],c=Sa[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let g,m;if(f&&f!==d){const _=Math.floor(h/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let y=t.cache.get(v);y||(g=new c(o,_*f,i.count*f/u),y=new Lg(g,f/u),t.cache.add(v,y)),m=new Zc(y,l,h%f/u,p)}else o===null?g=new c(i.count*l):g=new c(o,h,i.count*l),m=new Kn(g,l,p);if(i.sparse!==void 0){const _=Wu.SCALAR,v=Sa[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,b=new v(a[1],y,i.sparse.count*_),w=new c(a[2],M,i.sparse.count*l);o!==null&&(m=new Kn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,S=b.length;x<S;x++){const P=b[x];if(m.setX(P,w[x*l]),l>=2&&m.setY(P,w[x*l+1]),l>=3&&m.setZ(P,w[x*l+2]),l>=4&&m.setW(P,w[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(r.samplers||{})[a.sampler]||{};return u.magFilter=nm[h.magFilter]||vn,u.minFilter=nm[h.minFilter]||Qi,u.wrapS=im[h.wrapS]||Er,u.wrapT=im[h.wrapT]||Er,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==ln&&u.minFilter!==vn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)u=n.getDependency("bufferView",a.bufferView).then(function(h){return new Promise(function(f,p){t.parse(h,f,p)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(m){const _=new cn(m);_.needsUpdate=!0,f(_)}),t.load(Qr.resolveURL(h,r.path),g,void 0,p)})})}const d=u.then(function(h){return c===!0&&o.revokeObjectURL(l),qi(h,a),h.userData.mimeType=a.mimeType||NE(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ng,Pi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ig,Pi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Oa}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const d=i[je.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new Be(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],jn),o.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,Vt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Bi);const u=r.alphaMode||Xu.OPAQUE;if(u===Xu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Xu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Sr&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ye(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Sr&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Sr){const d=r.emissiveFactor;o.emissive=new Be().setRGB(d[0],d[1],d[2],jn)}return r.emissiveTexture!==void 0&&a!==Sr&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Vt)),Promise.all(c).then(function(){const d=new a(o);return r.name&&(d.name=r.name),qi(d,r),t.associations.set(d,{materials:e}),r.extensions&&gs(i,d,r),d})}createUniqueName(e){const t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return rm(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=IE(c),d=i[u];if(d)a.push(d.promise);else{let h;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=rm(new Wn,c,t),c.mode===Si.TRIANGLE_STRIP?h=h.then(f=>jp(f,xg)):c.mode===Si.TRIANGLE_FAN&&(h=h.then(f=>jp(f,$h))),i[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?PE(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,p=u.length;f<p;f++){const g=u[f],m=a[f];let _;const v=c[f];if(m.mode===Si.TRIANGLES||m.mode===Si.TRIANGLE_STRIP||m.mode===Si.TRIANGLE_FAN||m.mode===void 0){const y=r.isSkinnedMesh===!0,M=g.hasAttribute("skinIndex")&&g.hasAttribute("skinWeight");y&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),_=y&&M?new cv(g,v):new Lt(g,v),_.isSkinnedMesh===!0&&_.normalizeSkinWeights()}else if(m.mode===Si.LINES)_=new dv(g,v);else if(m.mode===Si.LINE_STRIP)_=new Kf(g,v);else if(m.mode===Si.LINE_LOOP)_=new pv(g,v);else if(m.mode===Si.POINTS)_=new mv(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&DE(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),qi(_,r),m.extensions&&gs(i,_,m),t.assignFinalMaterial(_),d.push(_)}for(let f=0,p=d.length;f<p;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&gs(i,d[0],r),d[0];const h=new Ai;r.extensions&&gs(i,h,r),t.associations.set(h,{meshes:e});for(let f=0,p=d.length;f<p;f++)h.add(d[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zn(Rr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Qf(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const d=a[c];if(d){o.push(d);const h=new Ve;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Xf(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let d=0,h=i.channels.length;d<h;d++){const f=i.channels[d],p=i.samplers[f.sampler],g=f.target,m=g.node,_=i.parameters!==void 0?i.parameters[p.input]:p.input,v=i.parameters!==void 0?i.parameters[p.output]:p.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",_)),l.push(this.getDependency("accessor",v)),c.push(p),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],p=d[2],g=d[3],m=d[4],_=[];for(let y=0,M=h.length;y<M;y++){const b=h[y],w=f[y],x=p[y],S=g[y],P=m[y];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const A=n._createAnimationTracks(b,w,x,S,P);if(A)for(let N=0;N<A.length;N++)_.push(A[N])}const v=new Ov(r,void 0,_);return qi(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,UE)});for(let f=0,p=d.length;f<p;f++)u.add(d[f]);if(u.userData.pivot!==void 0&&d.length>0){const f=u.userData.pivot,p=d[0];u.pivot=new O().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Dg:c.length>1?u=new Ai:c.length===1?u=c[0]:u=new yt,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=a),qi(u,r),r.extensions&&gs(n,u,r),r.matrix!==void 0){const d=new Ve;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(u);i.associations.set(u,{...d})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ai;n.name&&(r.name=i.createUniqueName(n.name)),qi(r,n),n.extensions&&gs(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,d=l.length;u<d;u++){const h=l[u];h.parent!==null?r.add(nE(h)):r.add(h)}const c=u=>{const d=new Map;for(const[h,f]of i.associations)(h instanceof Pi||h instanceof cn)&&d.set(h,f);return u.traverse(h=>{const f=i.associations.get(h);f!=null&&d.set(h,f)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Br[r.path]===Br.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(Br[r.path]){case Br.weights:u=Yo;break;case Br.rotation:u=Ko;break;case Br.translation:case Br.scale:u=Nc;break;default:n.itemSize===1?u=Yo:u=Nc;break}const d=i.interpolation!==void 0?CE[i.interpolation]:Go,h=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){const g=new u(l[f]+"."+Br[r.path],t.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ef(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ko?RE:i_;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function FE(s,e,t){const n=e.attributes,i=new cr;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),o.normalized){const u=ef(Sa[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new O,l=new O;for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,p=h.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),h.normalized){const g=ef(Sa[h.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new ur;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function rm(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=jh[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return et.workingColorSpace!==jn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),qi(s,e),FE(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?LE(s,e.targets,t):s})}const Yu=new WeakMap,BE=new URL(""+new URL("draco_decoder-C32yEggz.wasm",import.meta.url).href,import.meta.url).toString(),kE=new URL(""+new URL("draco_wasm_wrapper-DxJM36Ib.js",import.meta.url).href,import.meta.url).toString(),zE=new URL(""+new URL("draco_decoder-fzg4nYZr.js",import.meta.url).href,import.meta.url).toString();new URL(""+new URL("draco_wasm_wrapper-fZCQGLGb.js",import.meta.url).href,import.meta.url).toString(),new URL(""+new URL("draco_decoder-Z1_iN-Ht.wasm",import.meta.url).href,import.meta.url).toString();class HE extends zs{constructor(e){super(e),this.decoderPaths={js:kE,wasm:BE,dep_js:zE},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){const{decoderPaths:t}=this;return typeof e=="object"?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=Qr.resolveURL("draco_wasm_wrapper.js",e),t.wasm=Qr.resolveURL("draco_decoder.wasm",e),t.dep_js=Qr.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Uc(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Vt,n).catch(n)}decodeDracoFile(e,t,n,i,r=jn,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Yu.has(e)){const l=Yu.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Yu.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Wn;e.index&&t.setIndex(new Kn(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const{name:i,array:r,itemSize:a,stride:o,vertexColorSpace:l}=e.attributes[n];let c;if(a===o)c=new Kn(r,a);else{const u=new Lg(r,o);c=new Zc(u,a,0)}i==="color"&&(this._assignVertexColorSpace(c,l),c.normalized=!(r instanceof Float32Array)),t.setAttribute(i,c)}return t}_assignVertexColorSpace(e,t){if(t!==Vt)return;const n=new Be;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),et.colorSpaceToWorking(n,Vt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Uc(this.manager);return n.setPriority(this.priority),n.setCache(this.cache),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");t.push(this._loadLibrary(n.dep_js,"text"))}else t.push(this._loadLibrary(n.js,"text")),t.push(this._loadLibrary(n.wasm,"arraybuffer"));return this.decoderPending=Promise.all(t).then(i=>{const r=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const a=GE.toString(),o=["/* draco decoder */",r,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const a=r.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function GE(){let s,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":s=o.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(d){u({draco:d})},DracoDecoderModule(s)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(u=>{const d=u.draco,h=new d.Decoder;try{const f=t(d,h,new Int8Array(l),c),p=f.attributes.map(g=>g.array.buffer);f.index&&p.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},p)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{d.destroy(h)}});break}};function t(a,o,l,c){const u=c.attributeIDs,d=c.attributeTypes;let h,f;const p=o.GetEncodedGeometryType(l);if(p===a.TRIANGULAR_MESH)h=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,h);else if(p===a.POINT_CLOUD)h=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,h);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||h.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const g={index:null,attributes:[]};for(const m in u){const _=self[d[m]];let v,y;if(c.useUniqueIDs)y=u[m],v=o.GetAttributeByUniqueId(h,y);else{if(y=o.GetAttributeId(h,a[u[m]]),y===-1)continue;v=o.GetAttribute(h,y)}const M=i(a,o,h,m,_,v);m==="color"&&(M.vertexColorSpace=c.vertexColorSpace),g.attributes.push(M)}return p===a.TRIANGULAR_MESH&&(g.index=n(a,o,h)),a.destroy(h),g}function n(a,o,l){const u=l.num_faces()*3,d=u*4,h=a._malloc(d);o.GetTrianglesUInt32Array(l,d,h);const f=new Uint32Array(a.HEAPF32.buffer,h,u).slice();return a._free(h),{array:f,itemSize:1}}function i(a,o,l,c,u,d){const h=l.num_points(),f=d.num_components(),p=r(a,u),g=f*u.BYTES_PER_ELEMENT,m=Math.ceil(g/4)*4,_=m/u.BYTES_PER_ELEMENT,v=h*g,y=h*m,M=a._malloc(v);o.GetAttributeDataArrayForAllPoints(l,d,p,v,M);const b=new u(a.HEAPF32.buffer,M,v/u.BYTES_PER_ELEMENT);let w;if(g===m)w=b.slice();else{w=new u(y/u.BYTES_PER_ELEMENT);let x=0;for(let S=0;S<h;S++){for(let P=0;P<f;P++)w[x+P]=b[S*f+P];x+=_}}return a._free(M),{name:c,count:h,itemSize:f,array:w,stride:_}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}class sm extends yt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ye(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}}const ra=new O,am=new Ve,om=new Ve,lm=new O,cm=new O;class VE{constructor(e={}){const t=this;let n,i,r,a;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:i}},this.render=function(p,g){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),am.copy(g.matrixWorldInverse),om.multiplyMatrices(g.projectionMatrix,am),u(p,p,g),this.sortObjects&&f(p)},this.setSize=function(p,g){n=p,i=g,r=n/2,a=i/2,l.style.width=p+"px",l.style.height=g+"px"};function c(p){p.isCSS2DObject&&(p.element.style.display="none");for(let g=0,m=p.children.length;g<m;g++)c(p.children[g])}function u(p,g,m){if(p.visible===!1){c(p);return}if(p.isCSS2DObject){ra.setFromMatrixPosition(p.matrixWorld),ra.applyMatrix4(om);const _=ra.z>=-1&&ra.z<=1&&p.layers.test(m.layers)===!0,v=p.element;if(v.style.display=_===!0?"":"none",_===!0){p.onBeforeRender(t,g,m);const M=100*p.center.x,b=100*p.center.y;v.style.transformOrigin=`${M}% ${b}%`;const w=-p.rotation2D,x=ra.x*r+r,S=-ra.y*a+a;v.style.transform=`translate(${-M}%, ${-b}%) translate(${x}px, ${S}px) rotate(${w}rad)`,v.parentNode!==l&&l.appendChild(v),p.onAfterRender(t,g,m)}const y={distanceToCameraSquared:d(m,p)};o.objects.set(p,y)}for(let _=0,v=p.children.length;_<v;_++)u(p.children[_],g,m)}function d(p,g){return lm.setFromMatrixPosition(p.matrixWorld),cm.setFromMatrixPosition(g.matrixWorld),lm.distanceToSquared(cm)}function h(p){const g=[];return p.traverseVisible(function(m){m.isCSS2DObject&&g.push(m)}),g}function f(p){const g=h(p).sort(function(_,v){if(_.renderOrder!==v.renderOrder)return v.renderOrder-_.renderOrder;const y=o.objects.get(_).distanceToCameraSquared,M=o.objects.get(v).distanceToCameraSquared;return y-M}),m=g.length;for(let _=0,v=g.length;_<v;_++)g[_].element.style.zIndex=m-_}}}function xr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function r_(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var di={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zo={duration:.5,overwrite:!1,delay:0},id,Sn,Nt,Ri=1e8,St=1/Ri,tf=Math.PI*2,WE=tf/4,XE=0,s_=Math.sqrt,qE=Math.cos,YE=Math.sin,_n=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},Cr=function(e){return typeof e=="number"},rd=function(e){return typeof e>"u"},ar=function(e){return typeof e=="object"},$n=function(e){return e!==!1},sd=function(){return typeof window<"u"},Vl=function(e){return Wt(e)||_n(e)},a_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ln=Array.isArray,KE=/random\([^)]+\)/g,$E=/,\s*/g,um=/(?:-?\.?\d|\.)+/gi,o_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ma=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ku=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,l_=/[+-]=-?[.\d]+/,ZE=/[^,'"\[\]\s]+/gi,JE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ft,Yi,nf,ad,mi={},Oc={},c_,u_=function(e){return(Oc=Fa(e,mi))&&ei},od=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Jo=function(e,t){return!t&&console.warn(e)},h_=function(e,t){return e&&(mi[e]=t)&&Oc&&(Oc[e]=t)||mi},Qo=function(){return 0},QE={suppressEvents:!0,isStart:!0,kill:!1},dc={suppressEvents:!0,kill:!1},jE={suppressEvents:!0},ld={},jr=[],rf={},f_,oi={},$u={},hm=30,pc=[],cd="",ud=function(e){var t=e[0],n,i;if(ar(t)||Wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=pc.length;i--&&!pc[i].targetTest(t););n=pc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new N_(e[i],n)))||e.splice(i,1);return e},As=function(e){return e._gsap||ud(Ci(e))[0]._gsap},d_=function(e,t,n){return(n=e[t])&&Wt(n)?e[t]():rd(n)&&e.getAttribute&&e.getAttribute(t)||n},Zn=function(e,t){return(e=e.split(",")).forEach(t)||e},qt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},ya=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},ew=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Fc=function(){var e=jr.length,t=jr.slice(0),n,i;for(rf={},jr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},hd=function(e){return!!(e._initted||e._startAt||e.add)},p_=function(e,t,n,i){jr.length&&!Sn&&Fc(),e.render(t,n,!!(Sn&&t<0&&hd(e))),jr.length&&!Sn&&Fc()},m_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ZE).length<2?t:_n(e)?e.trim():e},g_=function(e){return e},gi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},tw=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Fa=function(e,t){for(var n in t)e[n]=t[n];return e},fm=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ar(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Bc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},wo=function(e){var t=e.parent||Ft,n=e.keyframes?tw(Ln(e.keyframes)):gi;if($n(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},nw=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},__=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},nu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},ss=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Rs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},iw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},sf=function(e,t,n,i){return e._startAt&&(Sn?e._startAt.revert(dc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},rw=function s(e){return!e||e._ts&&s(e.parent)},dm=function(e){return e._repeat?Ba(e._tTime,e=e.duration()+e._rDelay)*e:0},Ba=function(e,t){var n=Math.floor(e=Ot(e/t));return e&&n===e?n-1:n},kc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},iu=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||St)||0))},ru=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ot(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),iu(e),n._dirty||Rs(n,e)),e},x_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=kc(e.rawTime(),t),(!t._dur||hl(0,t.totalDuration(),n)-t._tTime>St)&&t.render(n,!0)),Rs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-St}},Zi=function(e,t,n,i){return t.parent&&ss(t),t._start=Ot((Cr(n)?n:!n&&zc(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Ft?Mi(e,n,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),__(e,t,"_first","_last",e._sort?"_start":0),zc(t)||(e._recent=t),i||x_(e,t),e._ts<0&&ru(e,e._tTime),e},v_=function(e,t){return(mi.ScrollTrigger||od("scrollTrigger",t))&&mi.ScrollTrigger.create(t,e)},M_=function(e,t,n,i,r){if(dd(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&f_!==ui.frame)return jr.push(e),e._lazy=[r,i],1},sw=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},zc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},aw=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&sw(e)&&!(!e._initted&&zc(e))||(e._ts<0||e._dp._ts<0)&&!zc(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=hl(0,e._tDur,t),u=Ba(l,o),e._yoyo&&u&1&&(a=1-a),u!==Ba(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Sn||i||e._zTime===St||!t&&e._zTime){if(!e._initted&&M_(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?St:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&sf(e,t,n,!0),e._onUpdate&&!n&&hi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&hi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ss(e,1),!n&&!Sn&&(hi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ow=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ka=function(e,t,n,i){var r=e._repeat,a=Ot(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Ot(a*(r+1)+e._rDelay*r):a,o>0&&!i&&ru(e,e._tTime=e._tDur*o),e.parent&&iu(e),n||Rs(e.parent,e),e},pm=function(e){return e instanceof qn?Rs(e):ka(e,e._dur)},lw={_start:0,endTime:Qo,totalDuration:Qo},Mi=function s(e,t,n){var i=e.labels,r=e._recent||lw,a=e.duration()>=Ri?r.endTime(!1):e._dur,o,l,c;return _n(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Ln(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ao=function(e,t,n){var i=Cr(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=$n(l.vars.inherit)&&l.parent;a.immediateRender=$n(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new en(t[0],a,t[r+1])},cs=function(e,t){return e||e===0?t(e):t},hl=function(e,t,n){return n<e?e:n>t?t:n},Cn=function(e,t){return!_n(e)||!(t=JE.exec(e))?"":t[1]},cw=function(e,t,n){return cs(n,function(i){return hl(e,t,i)})},af=[].slice,S_=function(e,t){return e&&ar(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ar(e[0]))&&!e.nodeType&&e!==Yi},uw=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return _n(i)&&!t||S_(i,1)?(r=n).push.apply(r,Ci(i)):n.push(i)})||n},Ci=function(e,t,n){return Nt&&!t&&Nt.selector?Nt.selector(e):_n(e)&&!n&&(nf||!za())?af.call((t||ad).querySelectorAll(e),0):Ln(e)?uw(e,n):S_(e)?af.call(e,0):e?[e]:[]},of=function(e){return e=Ci(e)[0]||Jo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ci(t,n.querySelectorAll?n:n===e?Jo("Invalid scope")||ad.createElement("div"):e)}},y_=function(e){return e.sort(function(){return .5-Math.random()})},T_=function(e){if(Wt(e))return e;var t=ar(e)?e:{each:e},n=Cs(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return _n(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,f,p){var g=(p||t).length,m=a[g],_,v,y,M,b,w,x,S,P;if(!m){if(P=t.grid==="auto"?0:(t.grid||[1,Ri])[1],!P){for(x=-Ri;x<(x=p[P++].getBoundingClientRect().left)&&P<g;);P<g&&P--}for(m=a[g]=[],_=l?Math.min(P,g)*u-.5:i%P,v=P===Ri?0:l?g*d/P-.5:i/P|0,x=0,S=Ri,w=0;w<g;w++)y=w%P-_,M=v-(w/P|0),m[w]=b=c?Math.abs(c==="y"?M:y):s_(y*y+M*M),b>x&&(x=b),b<S&&(S=b);i==="random"&&y_(m),m.max=x-S,m.min=S,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(P>g?g-1:c?c==="y"?g/P:P:Math.max(P,g/P))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Cn(t.amount||t.each)||0,n=n&&g<0?Tw(n):n}return g=(m[h]-m.min)/m.max||0,Ot(m.b+(n?n(g):g)*m.v)+m.u}},lf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ot(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Cr(n)?0:Cn(n))}},b_=function(e,t){var n=Ln(e),i,r;return!n&&ar(e)&&(i=n=e.radius||Ri,e.values?(e=Ci(e.values),(r=!Cr(e[0]))&&(i*=i)):e=lf(e.increment)),cs(t,n?Wt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Ri,u=0,d=e.length,h,f;d--;)r?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,r||u===a||Cr(a)?u:u+Cn(a)}:lf(e))},E_=function(e,t,n,i){return cs(Ln(e)?!t:n===!0?!!(n=0):!i,function(){return Ln(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},hw=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},fw=function(e,t){return function(n){return e(parseFloat(n))+(t||Cn(n))}},dw=function(e,t,n){return A_(e,t,0,1,n)},w_=function(e,t,n){return cs(n,function(i){return e[~~t(i)]})},pw=function s(e,t,n){var i=t-e;return Ln(e)?w_(e,s(0,e.length),t):cs(n,function(r){return(i+(r-e)%i)%i+e})},mw=function s(e,t,n){var i=t-e,r=i*2;return Ln(e)?w_(e,s(0,e.length-1),t):cs(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},jo=function(e){return e.replace(KE,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split($E);return E_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},A_=function(e,t,n,i,r){var a=t-e,o=i-n;return cs(r,function(l){return n+((l-e)/a*o||0)})},gw=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var a=_n(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Ln(e)&&!Ln(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(s(e[c-1],e[c]));d--,r=function(p){p*=d;var g=Math.min(h,~~p);return u[g](p-g)},n=t}else i||(e=Fa(Ln(e)?[]:{},e));if(!u){for(l in t)fd.call(o,e,l,"get",t[l]);r=function(p){return gd(p,o)||(a?e.p:e)}}}return cs(n,r)},mm=function(e,t,n){var i=e.labels,r=Ri,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},hi=function(e,t,n){var i=e.vars,r=i[t],a=Nt,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&jr.length&&Fc(),o&&(Nt=o),u=l?r.apply(c,l):r.call(c),Nt=a,u},go=function(e){return ss(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Sn),e.progress()<1&&hi(e,"onInterrupt"),e},ga,R_=[],C_=function(e){if(e)if(e=!e.name&&e.default||e,sd()||e.headless){var t=e.name,n=Wt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Qo,render:gd,add:fd,kill:Iw,modifier:Dw,rawVars:0},a={targetTest:0,get:0,getSetter:md,aliases:{},register:0};if(za(),e!==i){if(oi[t])return;gi(i,gi(Bc(e,r),a)),Fa(i.prototype,Fa(r,Bc(e,a))),oi[i.prop=t]=i,e.targetTest&&(pc.push(i),ld[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}h_(t,i),e.register&&e.register(ei,i,Jn)}else R_.push(e)},At=255,_o={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},Zu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*At+.5|0},P_=function(e,t,n){var i=e?Cr(e)?[e>>16,e>>8&At,e&At]:0:_o.black,r,a,o,l,c,u,d,h,f,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),_o[e])i=_o[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&At,i&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(um),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=Zu(l+1/3,r,a),i[1]=Zu(l,r,a),i[2]=Zu(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(o_),n&&i.length<4&&(i[3]=1),i}else i=e.match(um)||_o.transparent;i=i.map(Number)}return t&&!p&&(r=i[0]/At,a=i[1]/At,o=i[2]/At,d=Math.max(r,a,o),h=Math.min(r,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===r?(a-o)/f+(a<o?6:0):d===a?(o-r)/f+2:(r-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},L_=function(e){var t=[],n=[],i=-1;return e.split(es).forEach(function(r){var a=r.match(ma)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},gm=function(e,t,n){var i="",r=(e+i).match(es),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!r)return e;if(r=r.map(function(h){return(h=P_(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=L_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(es,"1").split(ma),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(es),d=c.length-1;o<d;o++)i+=c[o]+r[o];return i+c[d]},es=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in _o)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),_w=/hsl[a]?\(/,D_=function(e){var t=e.join(" "),n;if(es.lastIndex=0,es.test(t))return n=_w.test(t),e[1]=gm(e[1],n),e[0]=gm(e[0],n,L_(e[1])),!0},el,ui=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,d,h,f,p=function g(m){var _=s()-i,v=m===!0,y,M,b,w;if((_>e||_<0)&&(n+=_-t),i+=_,b=i-n,y=b-a,(y>0||v)&&(w=++d.frame,h=b-d.time*1e3,d.time=b=b/1e3,a+=y+(y>=r?0:r-y),M=1),v||(l=c(g)),M)for(f=0;f<o.length;f++)o[f](b,h,w,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){c_&&(!nf&&sd()&&(Yi=nf=window,ad=Yi.document||{},mi.gsap=ei,(Yi.gsapVersions||(Yi.gsapVersions=[])).push(ei.version),u_(Oc||Yi.GreenSockGlobals||!Yi.gsap&&Yi||{}),R_.forEach(C_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,a-d.time*1e3+1|0)},el=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),el=0,c=Qo},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){r=1e3/(m||240),a=d.time*1e3+r},add:function(m,_,v){var y=_?function(M,b,w,x){m(M,b,w,x),d.remove(y)}:m;return d.remove(m),o[v?"unshift":"push"](y),za(),y},remove:function(m,_){~(_=o.indexOf(m))&&o.splice(_,1)&&f>=_&&f--},_listeners:o},d})(),za=function(){return!el&&ui.wake()},ot={},xw=/^[\d.\-M][\d.\-,\s]/,vw=/["']/g,Mw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(vw,"").trim():+c,i=l.substr(o+1).trim();return t},Sw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},yw=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Mw(t[1])]:Sw(e).split(",").map(m_)):ot._CE&&xw.test(e)?ot._CE("",e):n},Tw=function(e){return function(t){return 1-e(1-t)}},Cs=function(e,t){return e&&(Wt(e)?e:ot[e]||yw(e))||t},Hs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Zn(e,function(o){ot[o]=mi[o]=r,ot[a=o.toLowerCase()]=n;for(var l in r)ot[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[o+"."+l]=r[l]}),r},I_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ju=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/tf*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*YE((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:I_(o);return r=tf/r,l.config=function(c,u){return s(e,c,u)},l},Qu=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:I_(n);return i.config=function(r){return s(e,r)},i};Zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Hs(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;Hs("Elastic",Ju("in"),Ju("out"),Ju());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Hs("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Hs("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Hs("Circ",function(s){return-(s_(1-s*s)-1)});Hs("Sine",function(s){return s===1?1:-qE(s*WE)+1});Hs("Back",Qu("in"),Qu("out"),Qu());ot.SteppedEase=ot.steps=mi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-St;return function(o){return((i*hl(0,a,o)|0)+r)*n}}};Zo.ease=ot["quad.out"];Zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return cd+=s+","+s+"Params,"});var N_=function(e,t){this.id=XE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:d_,this.set=t?t.getSetter:md},tl=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ka(this,+t.duration,1,1),this.data=t.data,Nt&&(this._ctx=Nt,Nt.data.push(this)),el||ui.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ka(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(za(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ru(this,n),!r._dp||r.parent||x_(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Zi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===St||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),p_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+dm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+dm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ba(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-St?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?kc(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-St?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||r>0&&r<o)&&this.totalTime(hl(-Math.abs(this._delay),o,r),i!==!1),iu(this),iw(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{za(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==St,a;if(r)for(this._tTime-=St,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+St){r=!1;break}a=a._next}this.totalTime(i,r)}return this},e.startTime=function(n){if(arguments.length){this._start=Ot(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Zi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+($n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?kc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=jE);var i=Sn;return Sn=n,hd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Sn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,pm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,pm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Mi(this,n),$n(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$n(i)),this._dur||(this._zTime=-St),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-St:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-St,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-St)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=Wt(n)?n:g_,l=function(){var u=i.then;i.then=null,r&&r(),Wt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){go(this)},s})();gi(tl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-St,_prom:0,_ps:!1,_rts:1});var qn=(function(s){r_(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=$n(n.sortChildren),Ft&&Zi(n.parent||Ft,xr(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&v_(xr(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Ao(0,arguments,this),this},t.from=function(i,r,a){return Ao(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Ao(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,wo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new en(i,r,Mi(this,a),1),this},t.call=function(i,r,a){return Zi(this,en.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new en(i,a,Mi(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,wo(a).immediateRender=$n(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,d){return o.startAt=a,wo(o).immediateRender=$n(o.immediateRender),this.staggerTo(i,r,o,l,c,u,d)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ot(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,p,g,m,_,v,y,M,b,w,x;if(this!==Ft&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,M=this._start,y=this._ts,_=!y,d&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(h=Ot(u%m),u===l?(g=this._repeat,h=c):(b=Ot(u/m),g=~~b,g&&g===b&&(h=c,g--),h>c&&(h=c)),b=Ba(this._tTime,m),!o&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),w&&g&1&&(h=c-h,x=1),g!==b&&!this._lock){var S=w&&b&1,P=S===(w&&g&1);if(g<b&&(S=!S),o=S?0:u%c?c:u,this._lock=1,this.render(o||(x?0:Ot(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&hi(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,b=g),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,o=S?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=ow(this,Ot(o),Ot(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!r&&!b&&(hi(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||h>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,r,a),h!==this._time||!this._ts&&!_){v=0,p&&(u+=this._zTime=-St);break}}f=p}else{f=this._last;for(var A=i<0?i:h;f;){if(p=f._prev,(f._act||A<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,r,a||Sn&&hd(f)),h!==this._time||!this._ts&&!_){v=0,p&&(u+=this._zTime=A?-St:St);break}}f=p}}if(v&&!r&&(this.pause(),v.render(h>=o?0:-St)._zTime=h>=o?1:-1,this._ts))return this._start=M,iu(this),this.render(i,r,a);this._onUpdate&&!r&&hi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ss(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(hi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Cr(r)||(r=Mi(this,r,i)),!(i instanceof tl)){if(Ln(i))return i.forEach(function(o){return a.add(o,r)}),this;if(_n(i))return this.addLabel(i,r);if(Wt(i))i=en.delayedCall(0,i);else return this}return this!==i?Zi(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ri);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof en?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return _n(i)?this.removeLabel(i):Wt(i)?this.killTweensOf(i):(i.parent===this&&nu(this,i),i===this._recent&&(this._recent=this._last),Rs(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(ui.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Mi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=en.delayedCall(0,r||Qo,a);return o.data="isPause",this._hasPause=1,Zi(this,o,Mi(this,i))},t.removePause=function(i){var r=this._first;for(i=Mi(this,i);r;)r._start===i&&r.data==="isPause"&&ss(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)qr!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=Ci(i),l=this._first,c=Cr(r),u;l;)l instanceof en?ew(l._targets,o)&&(c?(!qr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=Mi(a,i),l=r,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,p=en.to(a,gi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||St,onStart:function(){if(a.pause(),!f){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==m&&ka(p,m,0,1).render(p._time,!0,!0),f=1}u&&u.apply(p,d||[])}},r));return h?p.render(0):p},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,gi({startAt:{time:Mi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),mm(this,Mi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),mm(this,Mi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+St)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ot(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Rs(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Rs(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=Ri,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Zi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Ot(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;ka(a,a===Ft&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Ft._ts&&(p_(Ft,kc(i,Ft)),f_=ui.frame),ui.frame>=hm){hm+=di.autoSleep||120;var r=Ft._first;if((!r||!r._ts)&&di.autoSleep&&ui._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ui.sleep()}}},e})(tl);gi(qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var bw=function(e,t,n,i,r,a,o){var l=new Jn(this._pt,e,t,0,1,k_,null,r),c=0,u=0,d,h,f,p,g,m,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=jo(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),h=n.match(Ku)||[];d=Ku.exec(i);)p=d[0],g=i.substring(c,d.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),p!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:p.charAt(1)==="="?ya(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=Ku.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(l_.test(i)||_)&&(l.e=0),this._pt=l,l},fd=function(e,t,n,i,r,a,o,l,c,u){Wt(i)&&(i=i(r||0,e,a));var d=e[t],h=n!=="get"?n:Wt(d)?c?e[t.indexOf("set")||!Wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Wt(d)?c?Cw:F_:pd,p;if(_n(i)&&(~i.indexOf("random(")&&(i=jo(i)),i.charAt(1)==="="&&(p=ya(h,i)+(Cn(h)||0),(p||p===0)&&(i=p))),!u||h!==i||cf)return!isNaN(h*i)&&i!==""?(p=new Jn(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?Lw:B_,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!d&&!(t in e)&&od(t,i),bw.call(this,e,t,h,i,f,l||di.stringFilter,c))},Ew=function(e,t,n,i,r){if(Wt(e)&&(e=Ro(e,r,t,n,i)),!ar(e)||e.style&&e.nodeType||Ln(e)||a_(e))return _n(e)?Ro(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=Ro(e[o],r,t,n,i);return a},U_=function(e,t,n,i,r,a){var o,l,c,u;if(oi[e]&&(o=new oi[e]).init(r,o.rawVars?t[e]:Ew(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Jn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==ga))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},qr,cf,dd=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,p=e._dur,g=e._startAt,m=e._targets,_=e.parent,v=_&&_.data==="nested"?_.vars.targets:m,y=e._overwrite==="auto"&&!id,M=e.timeline,b=i.easeReverse||d,w,x,S,P,A,N,I,G,L,k,W,B,te;if(M&&(!h||!r)&&(r="none"),e._ease=Cs(r,Zo.ease),e._rEase=b&&(Cs(b)||e._ease),e._from=!M&&!!i.runBackwards,e._from&&(e.ratio=1),!M||h&&!i.stagger){if(G=m[0]?As(m[0]).harness:0,B=G&&i[G.prop],w=Bc(i,ld),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!f?g.render(-1,!0):g.revert(u&&p?dc:QE),g._lazy=0),a){if(ss(e._startAt=en.set(m,gi({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!g&&$n(l),startAt:null,delay:0,onUpdate:c&&function(){return hi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn||!o&&!f)&&e._startAt.revert(dc),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!g){if(t&&(o=!1),S=gi({overwrite:!1,data:"isFromStart",lazy:o&&!g&&$n(l),immediateRender:o,stagger:0,parent:_},w),B&&(S[G.prop]=B),ss(e._startAt=en.set(m,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn?e._startAt.revert(dc):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,St,St);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&$n(l)||l&&!p,x=0;x<m.length;x++){if(A=m[x],I=A._gsap||ud(m)[x]._gsap,e._ptLookup[x]=k={},rf[I.id]&&jr.length&&Fc(),W=v===m?x:v.indexOf(A),G&&(L=new G).init(A,B||w,e,W,v)!==!1&&(e._pt=P=new Jn(e._pt,A,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(X){k[X]=P}),L.priority&&(N=1)),!G||B)for(S in w)oi[S]&&(L=U_(S,w,e,W,A,v))?L.priority&&(N=1):k[S]=P=fd.call(e,A,S,"get",w[S],W,v,0,i.stringFilter);e._op&&e._op[x]&&e.kill(A,e._op[x]),y&&e._pt&&(qr=e,Ft.killTweensOf(A,k,e.globalTime(t)),te=!e.parent,qr=0),e._pt&&l&&(rf[I.id]=1)}N&&z_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!te,h&&t<=0&&M.render(Ri,!0,!0)},ww=function(e,t,n,i,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return cf=1,e.vars[t]="+=0",dd(e,o),cf=0,l?Jo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=qt(n)+Cn(d.e)),d.b&&(d.b=u.s+Cn(d.b))},Aw=function(e,t){var n=e[0]?As(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=Fa({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},Rw=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(Ln(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},Ro=function(e,t,n,i,r){return Wt(e)?e.call(t,n,i,r):_n(e)&&~e.indexOf("random(")?jo(e):e},Hc=cd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",O_={};Zn(Hc+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return O_[s]=1});Hc=Hc.split(",");var en=(function(s){r_(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:wo(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,p=l.keyframes,g=l.defaults,m=l.scrollTrigger,_=i.parent||Ft,v=(Ln(n)||a_(n)?Cr(n[0]):"length"in i)?[n]:Ci(n),y,M,b,w,x,S,P,A;if(o._targets=v.length?ud(v):Jo("GSAP target "+n+" not found. https://gsap.com",!di.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,p||h||Vl(c)||Vl(u)){i=o.vars;var N=i.easeReverse||i.yoyoEase;if(y=o.timeline=new qn({data:"nested",defaults:g||{},targets:_&&_.data==="nested"?_.vars.targets:v}),y.kill(),y.parent=y._dp=xr(o),y._start=0,h||Vl(c)||Vl(u)){if(w=v.length,P=h&&T_(h),ar(h))for(x in h)~Hc.indexOf(x)&&(A||(A={}),A[x]=h[x]);for(M=0;M<w;M++)b=Bc(i,O_),b.stagger=0,N&&(b.easeReverse=N),A&&Fa(b,A),S=v[M],b.duration=+Ro(c,xr(o),M,S,v),b.delay=(+Ro(u,xr(o),M,S,v)||0)-o._delay,!h&&w===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),y.to(S,b,P?P(M,S,v):0),y._ease=ot.none;y.duration()?c=u=0:o.timeline=0}else if(p){wo(gi(y.vars.defaults,{ease:"none"})),y._ease=Cs(p.ease||i.ease||"none");var I=0,G,L,k;if(Ln(p))p.forEach(function(W){return y.to(v,W,">")}),y.duration();else{b={};for(x in p)x==="ease"||x==="easeEach"||Rw(x,p[x],b,p.easeEach);for(x in b)for(G=b[x].sort(function(W,B){return W.t-B.t}),I=0,M=0;M<G.length;M++)L=G[M],k={ease:L.e,duration:(L.t-(M?G[M-1].t:0))/100*c},k[x]=L.v,y.to(v,k,I),I+=k.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return f===!0&&!id&&(qr=xr(o),Ft.killTweensOf(v),qr=0),Zi(_,xr(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!p&&o._start===Ot(_._time)&&$n(d)&&rw(xr(o))&&_.data!=="nested")&&(o._tTime=-St,o.render(Math.max(0,-u)||0)),m&&v_(xr(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-St&&!u?l:i<St?0:i,h,f,p,g,m,_,v,y;if(!c)aw(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,a);if(h=Ot(d%g),d===l?(p=this._repeat,h=c):(m=Ot(d/g),p=~~m,p&&p===m?(h=c,p--):h>c&&(h=c)),_=this._yoyo&&p&1,_&&(h=c-h),m=Ba(this._tTime,g),h===o&&!a&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!_&&!this._lock&&h!==g&&this._initted&&(this._lock=a=1,this.render(Ot(g*p),!0).invalidate()._lock=0)}if(!this._initted){if(M_(this,u?i:h,a,r,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var M=h<o;if(M!==this._inv){var b=M?o:c-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(M?-1:1)/b:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!r&&!m&&(hi(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&sf(this,i,r,a),hi(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&hi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&sf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ss(this,1),!r&&!(u&&!o)&&(d||o||_)&&(hi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,l){el||ui.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||dd(this,c),u=this._ease(c/this._dur),ww(this,i,r,a,o,u,c,l)?this.resetTo(i,r,a,o,1):(ru(this,0),this.parent||__(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?go(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Sn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,qr&&qr.vars.overwrite!==!0)._first||go(this),this.parent&&a!==this.timeline.totalDuration()&&ka(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Ci(i):o,c=this._ptLookup,u=this._pt,d,h,f,p,g,m,_;if((!r||r==="all")&&nw(o,l))return r==="all"&&(this._pt=0),go(this);for(d=this._op=this._op||[],r!=="all"&&(_n(r)&&(g={},Zn(r,function(v){return g[v]=1}),r=g),r=Aw(o,r)),_=o.length;_--;)if(~l.indexOf(o[_])){h=c[_],r==="all"?(d[_]=r,p=h,f={}):(f=d[_]=d[_]||{},p=r);for(g in p)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&nu(this,m,"_pt"),delete h[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&go(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Ao(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Ao(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Ft.killTweensOf(i,r,a)},e})(tl);gi(en.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Zn("staggerTo,staggerFrom,staggerFromTo",function(s){en[s]=function(){var e=new qn,t=af.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var pd=function(e,t,n){return e[t]=n},F_=function(e,t,n){return e[t](n)},Cw=function(e,t,n,i){return e[t](i.fp,n)},Pw=function(e,t,n){return e.setAttribute(t,n)},md=function(e,t){return Wt(e[t])?F_:rd(e[t])&&e.setAttribute?Pw:pd},B_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Lw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},k_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},gd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Dw=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},Iw=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?nu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Nw=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},z_=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Jn=(function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||B_,this.d=l||this,this.set=c||pd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Nw,this.m=n,this.mt=r,this.tween=i},s})();Zn(cd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return ld[s]=1});mi.TweenMax=mi.TweenLite=en;mi.TimelineLite=mi.TimelineMax=qn;Ft=new qn({sortChildren:!1,defaults:Zo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});di.stringFilter=D_;var Ps=[],mc={},Uw=[],_m=0,Ow=0,ju=function(e){return(mc[e]||Uw).map(function(t){return t()})},nl=function(){var e=Date.now(),t=[];e-_m>2&&(ju("matchMediaInit"),Ps.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Yi.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),ju("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),_m=e,ju("matchMedia"))},H_=(function(){function s(t,n){this.selector=n&&of(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ow++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Wt(n)&&(r=i,i=n,n=Wt);var a=this,o=function(){var c=Nt,u=a.selector,d;return c&&c!==a&&c.data.push(a),r&&(a.selector=of(r)),Nt=a,d=i.apply(a,arguments),Wt(d)&&a._r.push(d),Nt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Wt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Nt;Nt=null,n(this),Nt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof en&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof qn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof en)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=Ps.length;a--;)Ps[a].id===this.id&&Ps.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(nl):o.removeEventListener("change",nl)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},s})(),Fw=(function(){function s(t){this.contexts=[],this.scope=t,Nt&&Nt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){ar(n)||(n={matches:n});var a=new H_(0,r||this.scope),o=a.conditions={},l,c,u;Nt&&!a.selector&&(a.selector=Nt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Yi.matchMedia(n[c]),l&&(Ps.indexOf(a)<0&&Ps.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(nl):l.addEventListener("change",nl),(a._mqs||(a._mqs=[])).push(l)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Gc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return C_(i)})},timeline:function(e){return new qn(e)},getTweensOf:function(e,t){return Ft.getTweensOf(e,t)},getProperty:function(e,t,n,i){_n(e)&&(e=Ci(e)[0]);var r=As(e||{}).get,a=n?g_:m_;return n==="native"&&(n=""),e&&(t?a((oi[t]&&oi[t].get||r)(e,t,n,i)):function(o,l,c){return a((oi[o]&&oi[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Ci(e),e.length>1){var i=e.map(function(u){return ei.quickSetter(u,t,n)}),r=i.length;return function(u){for(var d=r;d--;)i[d](u)}}e=e[0]||{};var a=oi[t],o=As(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;ga._pt=0,d.init(e,n?u+n:u,ga,0,[e]),d.render(1,d),ga._pt&&gd(1,ga)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=ei.to(e,gi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return Ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Cs(e.ease,Zo.ease)),fm(Zo,e||{})},config:function(e){return fm(di,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!oi[o]&&!mi[o]&&Jo(t+" effect requires "+o+" plugin.")}),$u[t]=function(o,l,c){return n(Ci(o),gi(l||{},r),c)},a&&(qn.prototype[t]=function(o,l,c){return this.add($u[t](o,ar(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ot[e]=Cs(t)},parseEase:function(e,t){return arguments.length?Cs(e,t):ot},getById:function(e){return Ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new qn(e),i,r;for(n.smoothChildTiming=$n(e.smoothChildTiming),Ft.remove(n),n._dp=0,n._time=n._tTime=Ft._time,i=Ft._first;i;)r=i._next,(t||!(!i._dur&&i instanceof en&&i.vars.onComplete===i._targets[0]))&&Zi(n,i,i._start-i._delay),i=r;return Zi(Ft,n,0),n},context:function(e,t){return e?new H_(e,t):Nt},matchMedia:function(e){return new Fw(e)},matchMediaRefresh:function(){return Ps.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||nl()},addEventListener:function(e,t){var n=mc[e]||(mc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=mc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:pw,wrapYoyo:mw,distribute:T_,random:E_,snap:b_,normalize:dw,getUnit:Cn,clamp:cw,splitColor:P_,toArray:Ci,selector:of,mapRange:A_,pipe:hw,unitize:fw,interpolate:gw,shuffle:y_},install:u_,effects:$u,ticker:ui,updateRoot:qn.updateRoot,plugins:oi,globalTimeline:Ft,core:{PropTween:Jn,globals:h_,Tween:en,Timeline:qn,Animation:tl,getCache:As,_removeLinkedListItem:nu,reverting:function(){return Sn},context:function(e){return e&&Nt&&(Nt.data.push(e),e._ctx=Nt),Nt},suppressOverwrites:function(e){return id=e}}};Zn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Gc[s]=en[s]});ui.add(qn.updateRoot);ga=Gc.to({},{duration:0});var Bw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},kw=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Bw(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},eh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(_n(r)&&(l={},Zn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}kw(o,r)}}}},ei=Gc.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},eh("roundProps",lf),eh("modifiers"),eh("snap",b_))||Gc;en.version=qn.version=ei.version="3.15.1";c_=1;sd()&&za();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;var xm,Yr,Ta,_d,Es,vm,xd,zw=function(){return typeof window<"u"},Pr={},Ss=180/Math.PI,ba=Math.PI/180,sa=Math.atan2,Mm=1e8,vd=/([A-Z])/g,Hw=/(left|right|width|margin|padding|x)/i,Gw=/[\s,\(]\S/,ji={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},uf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Vw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ww=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Xw=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},qw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},G_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},V_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Yw=function(e,t,n){return e.style[t]=n},Kw=function(e,t,n){return e.style.setProperty(t,n)},$w=function(e,t,n){return e._gsap[t]=n},Zw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Jw=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Qw=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Bt="transform",Qn=Bt+"Origin",jw=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in Pr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ji[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=vr(i,o)}):this.tfm[e]=a.x?a[e]:vr(i,e),e===Qn&&(this.tfm.zOrigin=a.zOrigin);else return ji.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(Bt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Qn,t,"")),e=Bt}(r||t)&&this.props.push(e,t,r[e])},W_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},eA=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(vd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=xd(),(!r||!r.isStart)&&!n[Bt]&&(W_(n),i.zOrigin&&n[Qn]&&(n[Qn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},X_=function(e,t){var n={target:e,props:[],revert:eA,save:jw};return e._gsap||ei.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},q_,hf=function(e,t){var n=Yr.createElementNS?Yr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Yr.createElement(e);return n&&n.style?n:Yr.createElement(e)},fi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(vd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Ha(t)||t,1)||""},Sm="O,Moz,ms,Ms,Webkit".split(","),Ha=function(e,t,n){var i=t||Es,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Sm[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Sm[a]:"")+e},ff=function(){zw()&&window.document&&(xm=window,Yr=xm.document,Ta=Yr.documentElement,Es=hf("div")||{style:{}},hf("div"),Bt=Ha(Bt),Qn=Bt+"Origin",Es.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",q_=!!Ha("perspective"),xd=ei.core.reverting,_d=1)},ym=function(e){var t=e.ownerSVGElement,n=hf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Ta.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Ta.removeChild(n),r},Tm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Y_=function(e){var t,n;try{t=e.getBBox()}catch{t=ym(e),n=1}return t&&(t.width||t.height)||n||(t=ym(e)),t&&!t.width&&!t.x&&!t.y?{x:+Tm(e,["x","cx","x1"])||0,y:+Tm(e,["y","cy","y1"])||0,width:0,height:0}:t},K_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Y_(e))},as=function(e,t){if(t){var n=e.style,i;t in Pr&&t!==Qn&&(t=Bt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(vd,"-$1").toLowerCase())):n.removeAttribute(t)}},Kr=function(e,t,n,i,r,a){var o=new Jn(e._pt,t,n,0,1,a?V_:G_);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},bm={deg:1,rad:1,turn:1},tA={grid:1,flex:1},os=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Es.style,l=Hw.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",p,g,m,_;if(i===a||!r||bm[i]||bm[a])return r;if(a!=="px"&&!h&&(r=s(e,t,n,"px")),_=e.getCTM&&K_(e),(f||a==="%")&&(Pr[t]||~t.indexOf("adius")))return p=_?e.getBBox()[l?"width":"height"]:e[u],qt(f?r/p*d:r/100*p);if(o[l?"width":"height"]=d+(h?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Yr||!g.appendChild)&&(g=Yr.body),m=g._gsap,m&&f&&m.width&&l&&m.time===ui.time&&!m.uncache)return qt(r/m.width*d);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+i,p=e[u],v?e.style[t]=v:as(e,t)}else(f||a==="%")&&!tA[fi(g,"display")]&&(o.position=fi(e,"position")),g===e&&(o.position="static"),g.appendChild(Es),p=Es[u],g.removeChild(Es),o.position="absolute";return l&&f&&(m=As(g),m.time=ui.time,m.width=g[u]),qt(h?p*r/d:p&&r?d/p*r:0)},vr=function(e,t,n,i){var r;return _d||ff(),t in ji&&t!=="transform"&&(t=ji[t],~t.indexOf(",")&&(t=t.split(",")[0])),Pr[t]&&t!=="transform"?(r=rl(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Wc(fi(e,Qn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Vc[t]&&Vc[t](e,t,n)||fi(e,t)||d_(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?os(e,t,r,n)+n:r},nA=function(e,t,n,i){if(!n||n==="none"){var r=Ha(t,e,1),a=r&&fi(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=fi(e,"borderTopColor"))}var o=new Jn(this._pt,e.style,t,0,1,k_),l=0,c=0,u,d,h,f,p,g,m,_,v,y,M,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=fi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=fi(e,t)||i,g?e.style[t]=g:as(e,t)),u=[n,i],D_(u),n=u[0],i=u[1],h=n.match(ma)||[],b=i.match(ma)||[],b.length){for(;d=ma.exec(i);)m=d[0],v=i.substring(l,d.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(g=h[c++]||"")&&(f=parseFloat(g)||0,M=g.substr((f+"").length),m.charAt(1)==="="&&(m=ya(f,m)+M),_=parseFloat(m),y=m.substr((_+"").length),l=ma.lastIndex-y.length,y||(y=y||di.units[t]||M,l===i.length&&(i+=y,o.e+=y)),M!==y&&(f=os(e,t,g,y)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:_-f,m:p&&p<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?V_:G_;return l_.test(i)&&(o.e=0),this._pt=o,o},Em={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},iA=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Em[n]||n,t[1]=Em[i]||i,t.join(" ")},rA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Pr[o]&&(l=1,o=o==="transformOrigin"?Qn:Bt),as(n,o);l&&(as(n,Bt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",rl(n,1),a.uncache=1,W_(i)))}},Vc={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Jn(e._pt,t,n,0,0,rA);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},il=[1,0,0,1,0,0],$_={},Z_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},wm=function(e){var t=fi(e,Bt);return Z_(t)?il:t.substr(7).match(o_).map(qt)},Md=function(e,t){var n=e._gsap||As(e),i=e.style,r=wm(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?il:r):(r===il&&!e.offsetParent&&e!==Ta&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ta.appendChild(e)),r=wm(e),l?i.display=l:as(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ta.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},df=function(e,t,n,i,r,a){var o=e._gsap,l=r||Md(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],p=l[1],g=l[2],m=l[3],_=l[4],v=l[5],y=t.split(" "),M=parseFloat(y[0])||0,b=parseFloat(y[1])||0,w,x,S,P;n?l!==il&&(x=f*m-p*g)&&(S=M*(m/x)+b*(-g/x)+(g*v-m*_)/x,P=M*(-p/x)+b*(f/x)-(f*v-p*_)/x,M=S,b=P):(w=Y_(e),M=w.x+(~y[0].indexOf("%")?M/100*w.width:M),b=w.y+(~(y[1]||y[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&o.smooth?(_=M-c,v=b-u,o.xOffset=d+(_*f+v*g)-_,o.yOffset=h+(_*p+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Qn]="0px 0px",a&&(Kr(a,o,"xOrigin",c,M),Kr(a,o,"yOrigin",u,b),Kr(a,o,"xOffset",d,o.xOffset),Kr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+b)},rl=function(e,t){var n=e._gsap||new N_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=fi(e,Qn)||"0",u,d,h,f,p,g,m,_,v,y,M,b,w,x,S,P,A,N,I,G,L,k,W,B,te,X,C,ne,Se,Fe,$,ue;return u=d=h=g=m=_=v=y=M=0,f=p=1,n.svg=!!(e.getCTM&&K_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Bt]!=="none"?l[Bt]:"")),i.scale=i.rotate=i.translate="none"),x=Md(e,n.svg),n.svg&&(n.uncache?(te=e.getBBox(),c=n.xOrigin-te.x+"px "+(n.yOrigin-te.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),df(e,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,x)),b=n.xOrigin||0,w=n.yOrigin||0,x!==il&&(N=x[0],I=x[1],G=x[2],L=x[3],u=k=x[4],d=W=x[5],x.length===6?(f=Math.sqrt(N*N+I*I),p=Math.sqrt(L*L+G*G),g=N||I?sa(I,N)*Ss:0,v=G||L?sa(G,L)*Ss+g:0,v&&(p*=Math.abs(Math.cos(v*ba))),n.svg&&(u-=b-(b*N+w*G),d-=w-(b*I+w*L))):(ue=x[6],Fe=x[7],C=x[8],ne=x[9],Se=x[10],$=x[11],u=x[12],d=x[13],h=x[14],S=sa(ue,Se),m=S*Ss,S&&(P=Math.cos(-S),A=Math.sin(-S),B=k*P+C*A,te=W*P+ne*A,X=ue*P+Se*A,C=k*-A+C*P,ne=W*-A+ne*P,Se=ue*-A+Se*P,$=Fe*-A+$*P,k=B,W=te,ue=X),S=sa(-G,Se),_=S*Ss,S&&(P=Math.cos(-S),A=Math.sin(-S),B=N*P-C*A,te=I*P-ne*A,X=G*P-Se*A,$=L*A+$*P,N=B,I=te,G=X),S=sa(I,N),g=S*Ss,S&&(P=Math.cos(S),A=Math.sin(S),B=N*P+I*A,te=k*P+W*A,I=I*P-N*A,W=W*P-k*A,N=B,k=te),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,_=180-_),f=qt(Math.sqrt(N*N+I*I+G*G)),p=qt(Math.sqrt(W*W+ue*ue)),S=sa(k,W),v=Math.abs(S)>2e-4?S*Ss:0,M=$?1/($<0?-$:$):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Z_(fi(e,Bt)),B&&e.setAttribute("transform",B))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=qt(f),n.scaleY=qt(p),n.rotation=qt(g)+o,n.rotationX=qt(m)+o,n.rotationY=qt(_)+o,n.skewX=v+o,n.skewY=y+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Qn]=Wc(c)),n.xOffset=n.yOffset=0,n.force3D=di.force3D,n.renderTransform=n.svg?aA:q_?J_:sA,n.uncache=0,n},Wc=function(e){return(e=e.split(" "))[0]+" "+e[1]},th=function(e,t,n){var i=Cn(t);return qt(parseFloat(t)+parseFloat(os(e,"x",n+"px",i)))+i},sA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,J_(e,t)},_s="0deg",so="0px",xs=") ",J_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,p=n.scaleX,g=n.scaleY,m=n.transformPerspective,_=n.force3D,v=n.target,y=n.zOrigin,M="",b=_==="auto"&&e&&e!==1||_===!0;if(y&&(d!==_s||u!==_s)){var w=parseFloat(u)*ba,x=Math.sin(w),S=Math.cos(w),P;w=parseFloat(d)*ba,P=Math.cos(w),a=th(v,a,x*P*-y),o=th(v,o,-Math.sin(w)*-y),l=th(v,l,S*P*-y+y)}m!==so&&(M+="perspective("+m+xs),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(b||a!==so||o!==so||l!==so)&&(M+=l!==so||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+xs),c!==_s&&(M+="rotate("+c+xs),u!==_s&&(M+="rotateY("+u+xs),d!==_s&&(M+="rotateX("+d+xs),(h!==_s||f!==_s)&&(M+="skew("+h+", "+f+xs),(p!==1||g!==1)&&(M+="scale("+p+", "+g+xs),v.style[Bt]=M||"translate(0, 0)"},aA=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,p=n.xOrigin,g=n.yOrigin,m=n.xOffset,_=n.yOffset,v=n.forceCSS,y=parseFloat(a),M=parseFloat(o),b,w,x,S,P;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ba,c*=ba,b=Math.cos(l)*d,w=Math.sin(l)*d,x=Math.sin(l-c)*-h,S=Math.cos(l-c)*h,c&&(u*=ba,P=Math.tan(c-u),P=Math.sqrt(1+P*P),x*=P,S*=P,u&&(P=Math.tan(u),P=Math.sqrt(1+P*P),b*=P,w*=P)),b=qt(b),w=qt(w),x=qt(x),S=qt(S)):(b=d,S=h,w=x=0),(y&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(y=os(f,"x",a,"px"),M=os(f,"y",o,"px")),(p||g||m||_)&&(y=qt(y+p-(p*b+g*x)+m),M=qt(M+g-(p*w+g*S)+_)),(i||r)&&(P=f.getBBox(),y=qt(y+i/100*P.width),M=qt(M+r/100*P.height)),P="matrix("+b+","+w+","+x+","+S+","+y+","+M+")",f.setAttribute("transform",P),v&&(f.style[Bt]=P)},oA=function(e,t,n,i,r){var a=360,o=_n(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Ss:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=r.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Mm)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Mm)%a-~~(c/a)*a)),e._pt=h=new Jn(e._pt,t,n,i,c,Vw),h.e=u,h.u="deg",e._props.push(n),h},Am=function(e,t){for(var n in t)e[n]=t[n];return e},lA=function(e,t,n){var i=Am({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Bt]=t,o=rl(n,1),as(n,Bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Bt],a[Bt]=t,o=rl(n,1),a[Bt]=c);for(l in Pr)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(f=Cn(c),p=Cn(u),d=f!==p?os(n,l,c,p):parseFloat(c),h=parseFloat(u),e._pt=new Jn(e._pt,o,l,d,h-d,uf),e._pt.u=p||0,e._props.push(l));Am(o,i)};Zn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});Vc[e>1?"border"+s:s]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(p){return vr(o,p,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(p,g){return f[p]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,f,d)}});var Q_={name:"css",register:ff,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,f,p,g,m,_,v,y,M,b,w,x,S,P;_d||ff(),this.styles=this.styles||X_(e),S=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(oi[g]&&U_(g,t,n,i,e,r)))){if(f=typeof u,p=Vc[g],f==="function"&&(u=u.call(n,i,e,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=jo(u)),p)p(this,e,g,u,n)&&(x=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",es.lastIndex=0,es.test(c)||(m=Cn(c),_=Cn(u),_?m!==_&&(c=os(e,g,c,_)+_):m&&(u+=m)),this.add(o,"setProperty",c,u,i,r,0,0,g),a.push(g),S.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],_n(c)&&~c.indexOf("random(")&&(c=jo(c)),Cn(c+"")||c==="auto"||(c+=di.units[g]||Cn(vr(e,g))||""),(c+"").charAt(1)==="="&&(c=vr(e,g))):c=vr(e,g),h=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),g in ji&&(g==="autoAlpha"&&(h===1&&vr(e,"visibility")==="hidden"&&d&&(h=0),S.push("visibility",0,o.visibility),Kr(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=ji[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Pr,y){if(this.styles.save(g),P=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=fi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=u,u=fi(e,"perspective"),A?e.style.perspective=A:as(e,"perspective")}d=parseFloat(u)}if(M||(b=e._gsap,b.renderTransform&&!t.parseTransform||rl(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,M=this._pt=new Jn(this._pt,o,Bt,0,1,b.renderTransform,b,0,-1),M.dep=1),g==="scale")this._pt=new Jn(this._pt,b,"scaleY",b.scaleY,(v?ya(b.scaleY,v+d):d)-b.scaleY||0,uf),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){S.push(Qn,0,o[Qn]),u=iA(u),b.svg?df(e,u,0,w,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==b.zOrigin&&Kr(this,b,"zOrigin",b.zOrigin,_),Kr(this,o,g,Wc(c),Wc(u)));continue}else if(g==="svgOrigin"){df(e,u,1,w,0,this);continue}else if(g in $_){oA(this,b,g,h,v?ya(h,v+u):u);continue}else if(g==="smoothOrigin"){Kr(this,b,"smooth",b.smooth,u);continue}else if(g==="force3D"){b[g]=u;continue}else if(g==="transform"){lA(this,u,e);continue}}else g in o||(g=Ha(g)||g);if(y||(d||d===0)&&(h||h===0)&&!Gw.test(u)&&g in o)m=(c+"").substr((h+"").length),d||(d=0),_=Cn(u)||(g in di.units?di.units[g]:m),m!==_&&(h=os(e,g,c,_)),this._pt=new Jn(this._pt,y?b:o,g,h,(v?ya(h,v+d):d)-h,!y&&(_==="px"||g==="zIndex")&&t.autoRound!==!1?qw:uf),this._pt.u=_||0,y&&P!==u?(this._pt.b=c,this._pt.e=P,this._pt.r=Xw):m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Ww);else if(g in o)nA.call(this,e,g,c,v?v+u:u);else if(g in e)this.add(e,g,c||e[g],v?v+u:u,i,r);else if(g!=="parseTransform"){od(g,u);continue}y||(g in o?S.push(g,0,o[g]):typeof e[g]=="function"?S.push(g,2,e[g]()):S.push(g,1,c||e[g])),a.push(g)}}x&&z_(this)},render:function(e,t){if(t.tween._time||!xd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:vr,aliases:ji,getSetter:function(e,t,n){var i=ji[t];return i&&i.indexOf(",")<0&&(t=i),t in Pr&&t!==Qn&&(e._gsap.x||vr(e,"x"))?n&&vm===n?t==="scale"?Zw:$w:(vm=n||{})&&(t==="scale"?Jw:Qw):e.style&&!rd(e.style[t])?Yw:~t.indexOf("-")?Kw:md(e,t)},core:{_removeProperty:as,_getMatrix:Md}};ei.utils.checkPrefix=Ha;ei.core.getStyleSaver=X_;(function(s,e,t,n){var i=Zn(s+","+e+","+t,function(r){Pr[r]=1});Zn(e,function(r){di.units[r]="deg",$_[r]=1}),ji[i[13]]=s+","+e,Zn(n,function(r){var a=r.split(":");ji[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){di.units[s]="px"});ei.registerPlugin(Q_);var Co=ei.registerPlugin(Q_)||ei;Co.core.Tween;function cA(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function uA(s,e,t){return e&&cA(s.prototype,e),s}var Mn,gc,Yn,$r,Zr,Ea,j_,ys,wa,e0,Tr,Fi,t0,n0=function(){return Mn||typeof window<"u"&&(Mn=window.gsap)&&Mn.registerPlugin&&Mn},i0=1,_a=[],Qe=[],nr=[],Po=Date.now,pf=function(e,t){return t},hA=function(){var e=wa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Qe),i.push.apply(i,nr),Qe=n,nr=i,pf=function(a,o){return t[a](o)}},ts=function(e,t){return~nr.indexOf(e)&&nr[nr.indexOf(e)+1][t]},Lo=function(e){return!!~e0.indexOf(e)},Un=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},Nn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Wl="scrollLeft",Xl="scrollTop",mf=function(){return Tr&&Tr.isPressed||Qe.cache++},Xc=function(e,t){var n=function i(r){if(r||r===0){i0&&Yn.history.scrollRestoration!=="manual"&&(Yn.history.scrollRestoration="manual");var a=Tr&&Tr.isPressed;r=i.v=Math.round(r)||(Tr&&Tr.iOS?1:0),e(r),i.cacheID=Qe.cache,a&&pf("ss",r)}else(t||Qe.cache!==i.cacheID||pf("ref"))&&(i.cacheID=Qe.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Hn={s:Wl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Xc(function(s){return arguments.length?Yn.scrollTo(s,on.sc()):Yn.pageXOffset||$r[Wl]||Zr[Wl]||Ea[Wl]||0})},on={s:Xl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Hn,sc:Xc(function(s){return arguments.length?Yn.scrollTo(Hn.sc(),s):Yn.pageYOffset||$r[Xl]||Zr[Xl]||Ea[Xl]||0})},Xn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Mn.utils.toArray)(e)[0]||(typeof e=="string"&&Mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},fA=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ls=function(e,t){var n=t.s,i=t.sc;Lo(e)&&(e=$r.scrollingElement||Zr);var r=Qe.indexOf(e),a=i===on.sc?1:2;!~r&&(r=Qe.push(e)-1),Qe[r+a]||Un(e,"scroll",mf);var o=Qe[r+a],l=o||(Qe[r+a]=Xc(ts(e,n),!0)||(Lo(e)?i:Xc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Mn.getProperty(e,"scrollBehavior")==="smooth"),l},gf=function(e,t,n){var i=e,r=e,a=Po(),o=a,l=t||50,c=Math.max(500,l*3),u=function(p,g){var m=Po();g||m-a>l?(r=i,i=p,o=a,a=m):n?i+=p:i=r+(p-r)/(m-o)*(a-o)},d=function(){r=i=n?0:i,o=a=0},h=function(p){var g=o,m=r,_=Po();return(p||p===0)&&p!==i&&u(p),a===o||_-o>c?0:(i+(n?m:-m))/((n?_:a)-g)*1e3};return{update:u,reset:d,getVelocity:h}},ao=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Rm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},r0=function(){wa=Mn.core.globals().ScrollTrigger,wa&&wa.core&&hA()},s0=function(e){return Mn=e||n0(),!gc&&Mn&&typeof document<"u"&&document.body&&(Yn=window,$r=document,Zr=$r.documentElement,Ea=$r.body,e0=[Yn,$r,Zr,Ea],Mn.utils.clamp,t0=Mn.core.context||function(){},ys="onpointerenter"in Ea?"pointer":"mouse",j_=Yt.isTouch=Yn.matchMedia&&Yn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Yn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Fi=Yt.eventTypes=("ontouchstart"in Zr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Zr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return i0=0},500),gc=1),wa||r0(),gc};Hn.op=on;Qe.cache=0;var Yt=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){gc||s0(Mn)||console.warn("Please gsap.registerPlugin(Observer)"),wa||r0();var i=n.tolerance,r=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,g=n.event,m=n.onDragStart,_=n.onDragEnd,v=n.onDrag,y=n.onPress,M=n.onRelease,b=n.onRight,w=n.onLeft,x=n.onUp,S=n.onDown,P=n.onChangeX,A=n.onChangeY,N=n.onChange,I=n.onToggleX,G=n.onToggleY,L=n.onHover,k=n.onHoverEnd,W=n.onMove,B=n.ignoreCheck,te=n.isNormalizer,X=n.onGestureStart,C=n.onGestureEnd,ne=n.onWheel,Se=n.onEnable,Fe=n.onDisable,$=n.onClick,ue=n.scrollSpeed,Me=n.capture,Te=n.allowClicks,me=n.lockAxis,Ie=n.onLockAxis;this.target=o=Xn(o)||Zr,this.vars=n,f&&(f=Mn.utils.toArray(f)),i=i||1e-9,r=r||0,p=p||1,ue=ue||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Yn.getComputedStyle(Ea).lineHeight)||22);var _t,we,Ge,Le,Oe,ht,lt,K=this,tt=0,Kt=0,Tt=n.passive||!u&&n.passive!==!1,at=ls(o,Hn),zt=ls(o,on),Xt=at(),F=zt(),dt=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Fi[0]==="pointerdown",ct=Lo(o),ze=o.ownerDocument||$r,he=[0,0,0],ft=[0,0,0],De=0,ke=function(){return De=Po()},R=function(pe,re){return(K.event=pe)&&f&&fA(pe.target,f)||re&&dt&&pe.pointerType!=="touch"||B&&B(pe,re)},T=function(){K._vx.reset(),K._vy.reset(),we.pause(),d&&d(K)},H=function(){var pe=K.deltaX=Rm(he),re=K.deltaY=Rm(ft),j=Math.abs(pe)>=i,_e=Math.abs(re)>=i;N&&(j||_e)&&N(K,pe,re,he,ft),j&&(b&&K.deltaX>0&&b(K),w&&K.deltaX<0&&w(K),P&&P(K),I&&K.deltaX<0!=tt<0&&I(K),tt=K.deltaX,he[0]=he[1]=he[2]=0),_e&&(S&&K.deltaY>0&&S(K),x&&K.deltaY<0&&x(K),A&&A(K),G&&K.deltaY<0!=Kt<0&&G(K),Kt=K.deltaY,ft[0]=ft[1]=ft[2]=0),(Le||Ge)&&(W&&W(K),Ge&&(m&&Ge===1&&m(K),v&&v(K),Ge=0),Le=!1),ht&&!(ht=!1)&&Ie&&Ie(K),Oe&&(ne(K),Oe=!1),_t=0},se=function(pe,re,j){he[j]+=pe,ft[j]+=re,K._vx.update(pe),K._vy.update(re),c?_t||(_t=requestAnimationFrame(H)):H()},ie=function(pe,re){me&&!lt&&(K.axis=lt=Math.abs(pe)>Math.abs(re)?"x":"y",ht=!0),lt!=="y"&&(he[2]+=pe,K._vx.update(pe,!0)),lt!=="x"&&(ft[2]+=re,K._vy.update(re,!0)),c?_t||(_t=requestAnimationFrame(H)):H()},ce=function(pe){if(!R(pe,1)){pe=ao(pe,u);var re=pe.clientX,j=pe.clientY,_e=re-K.x,ee=j-K.y,be=K.isDragging;K.x=re,K.y=j,(be||(_e||ee)&&(Math.abs(K.startX-re)>=r||Math.abs(K.startY-j)>=r))&&(Ge||(Ge=be?2:1),be||(K.isDragging=!0),ie(_e,ee))}},ge=K.onPress=function(ae){R(ae,1)||ae&&ae.button||(K.axis=lt=null,we.pause(),K.isPressed=!0,ae=ao(ae),tt=Kt=0,K.startX=K.x=ae.clientX,K.startY=K.y=ae.clientY,K._vx.reset(),K._vy.reset(),Un(te?o:ze,Fi[1],ce,Tt,!0),K.deltaX=K.deltaY=0,y&&y(K))},V=K.onRelease=function(ae){if(!R(ae,1)){Nn(te?o:ze,Fi[1],ce,!0);var pe=!isNaN(K.y-K.startY),re=K.isDragging,j=re&&(Math.abs(K.x-K.startX)>3||Math.abs(K.y-K.startY)>3),_e=ao(ae);!j&&pe&&(K._vx.reset(),K._vy.reset(),u&&Te&&Mn.delayedCall(.08,function(){if(Po()-De>300&&!ae.defaultPrevented){if(ae.target.click)ae.target.click();else if(ze.createEvent){var ee=ze.createEvent("MouseEvents");ee.initMouseEvent("click",!0,!0,Yn,1,_e.screenX,_e.screenY,_e.clientX,_e.clientY,!1,!1,!1,!1,0,null),ae.target.dispatchEvent(ee)}}})),K.isDragging=K.isGesturing=K.isPressed=!1,d&&re&&!te&&we.restart(!0),Ge&&H(),_&&re&&_(K),M&&M(K,j)}},Q=function(pe){return pe.touches&&pe.touches.length>1&&(K.isGesturing=!0)&&X(pe,K.isDragging)},le=function(){return(K.isGesturing=!1)||C(K)},D=function(pe){if(!R(pe)){var re=at(),j=zt();se((re-Xt)*ue,(j-F)*ue,1),Xt=re,F=j,d&&we.restart(!0)}},J=function(pe){if(!R(pe)){pe=ao(pe,u),ne&&(Oe=!0);var re=(pe.deltaMode===1?l:pe.deltaMode===2?Yn.innerHeight:1)*p;se(pe.deltaX*re,pe.deltaY*re,0),d&&!te&&we.restart(!0)}},Z=function(pe){if(!R(pe)){var re=pe.clientX,j=pe.clientY,_e=re-K.x,ee=j-K.y;K.x=re,K.y=j,Le=!0,d&&we.restart(!0),(_e||ee)&&ie(_e,ee)}},fe=function(pe){K.event=pe,L(K)},oe=function(pe){K.event=pe,k(K)},de=function(pe){return R(pe)||ao(pe,u)&&$(K)};we=K._dc=Mn.delayedCall(h||.25,T).pause(),K.deltaX=K.deltaY=0,K._vx=gf(0,50,!0),K._vy=gf(0,50,!0),K.scrollX=at,K.scrollY=zt,K.isDragging=K.isGesturing=K.isPressed=!1,t0(this),K.enable=function(ae){return K.isEnabled||(Un(ct?ze:o,"scroll",mf),a.indexOf("scroll")>=0&&Un(ct?ze:o,"scroll",D,Tt,Me),a.indexOf("wheel")>=0&&Un(o,"wheel",J,Tt,Me),(a.indexOf("touch")>=0&&j_||a.indexOf("pointer")>=0)&&(Un(o,Fi[0],ge,Tt,Me),Un(ze,Fi[2],V),Un(ze,Fi[3],V),Te&&Un(o,"click",ke,!0,!0),$&&Un(o,"click",de),X&&Un(ze,"gesturestart",Q),C&&Un(ze,"gestureend",le),L&&Un(o,ys+"enter",fe),k&&Un(o,ys+"leave",oe),W&&Un(o,ys+"move",Z)),K.isEnabled=!0,K.isDragging=K.isGesturing=K.isPressed=Le=Ge=!1,K._vx.reset(),K._vy.reset(),Xt=at(),F=zt(),ae&&ae.type&&ge(ae),Se&&Se(K)),K},K.disable=function(){K.isEnabled&&(_a.filter(function(ae){return ae!==K&&Lo(ae.target)}).length||Nn(ct?ze:o,"scroll",mf),K.isPressed&&(K._vx.reset(),K._vy.reset(),Nn(te?o:ze,Fi[1],ce,!0)),Nn(ct?ze:o,"scroll",D,Me),Nn(o,"wheel",J,Me),Nn(o,Fi[0],ge,Me),Nn(ze,Fi[2],V),Nn(ze,Fi[3],V),Nn(o,"click",ke,!0),Nn(o,"click",de),Nn(ze,"gesturestart",Q),Nn(ze,"gestureend",le),Nn(o,ys+"enter",fe),Nn(o,ys+"leave",oe),Nn(o,ys+"move",Z),K.isEnabled=K.isPressed=K.isDragging=!1,Fe&&Fe(K))},K.kill=K.revert=function(){K.disable();var ae=_a.indexOf(K);ae>=0&&_a.splice(ae,1),Tr===K&&(Tr=0)},_a.push(K),te&&Lo(o)&&(Tr=K),K.enable(g)},uA(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Yt.version="3.15.1";Yt.create=function(s){return new Yt(s)};Yt.register=s0;Yt.getAll=function(){return _a.slice()};Yt.getById=function(s){return _a.filter(function(e){return e.vars.id===s})[0]};n0()&&Mn.registerPlugin(Yt);var Ae,ha,Je,xt,li,gt,Sd,qc,sl,Do,xo,ql,An,su,_f,Bn,Cm,Pm,fa,a0,nh,o0,Fn,xf,l0,c0,kr,vf,yd,Aa,Td,ns,Mf,ih,Yl=1,Rn=Date.now,rh=Rn(),Li=0,vo=0,Lm=function(e,t,n){var i=ai(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Dm=function(e,t){return t&&(!ai(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},dA=function s(){return vo&&requestAnimationFrame(s)},Im=function(){return su=1},Nm=function(){return su=0},Ki=function(e){return e},Mo=function(e){return Math.round(e*1e5)/1e5||0},u0=function(){return typeof window<"u"},h0=function(){return Ae||u0()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},Os=function(e){return!!~Sd.indexOf(e)},f0=function(e){return(e==="Height"?Td:Je["inner"+e])||li["client"+e]||gt["client"+e]},d0=function(e){return ts(e,"getBoundingClientRect")||(Os(e)?function(){return Sc.width=Je.innerWidth,Sc.height=Td,Sc}:function(){return Mr(e)})},pA=function(e,t,n){var i=n.d,r=n.d2,a=n.a;return(a=ts(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?f0(r):e["client"+r])||0}},mA=function(e,t){return!t||~nr.indexOf(e)?d0(e):function(){return Sc}},er=function(e,t){var n=t.s,i=t.d2,r=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=ts(e,n))?a()-d0(e)()[r]:Os(e)?(li[n]||gt[n])-f0(i):e[n]-e["offset"+i])},Kl=function(e,t){for(var n=0;n<fa.length;n+=3)(!t||~t.indexOf(fa[n+1]))&&e(fa[n],fa[n+1],fa[n+2])},ai=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},So=function(e){return typeof e=="number"},Ts=function(e){return typeof e=="object"},oo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},aa=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},oa=Math.abs,p0="left",m0="top",bd="right",Ed="bottom",Ls="width",Ds="height",Io="Right",No="Left",Uo="Top",Oo="Bottom",jt="padding",bi="margin",Ga="Width",wd="Height",an="px",Ei=function(e){return Je.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},gA=function(e){var t=Ei(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Um=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Mr=function(e,t){var n=t&&Ei(e)[_f]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Yc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},g0=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},_A=function(e){return function(t){return Ae.utils.snap(g0(e),t)}},Ad=function(e){var t=Ae.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var o;if(!r)return t(i);if(r>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var o=t(i);return!r||Math.abs(o-i)<a||o-i<0==r<0?o:t(r<0?i-e:i+e)}},xA=function(e){return function(t,n){return Ad(g0(e))(t,n.direction)}},$l=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},gn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},pn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Zl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Om={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Jl={toggleActions:"play",anticipatePin:0},Kc={top:0,left:0,center:.5,bottom:1,right:1},_c=function(e,t){if(ai(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Kc?Kc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ql=function(e,t,n,i,r,a,o,l){var c=r.startColor,u=r.endColor,d=r.fontSize,h=r.indent,f=r.fontWeight,p=xt.createElement("div"),g=Os(n)||ts(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=g?gt:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,y=v?c:u,M="border-color:"+y+";font-size:"+d+";color:"+y+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(M+=(i===on?bd:Ed)+":"+(a+parseFloat(h))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=M,p.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(p,_.children[0]):_.appendChild(p),p._offset=p["offset"+i.op.d2],xc(p,0,i,v),p},xc=function(e,t,n,i){var r={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+Ga]=1,r["border"+o+Ga]=0,r[n.p]=t+"px",Ae.set(e,r)},Ze=[],Sf={},al,Fm=function(){return Rn()-Li>34&&(al||(al=requestAnimationFrame(Ar)))},la=function(){(!Fn||!Fn.isPressed||Fn.startX>gt.clientWidth)&&(Qe.cache++,Fn?al||(al=requestAnimationFrame(Ar)):Ar(),Li||Bs("scrollStart"),Li=Rn())},sh=function(){c0=Je.innerWidth,l0=Je.innerHeight},yo=function(e){Qe.cache++,(e===!0||!An&&!o0&&!xt.fullscreenElement&&!xt.webkitFullscreenElement&&(!xf||c0!==Je.innerWidth||Math.abs(Je.innerHeight-l0)>Je.innerHeight*.25))&&qc.restart(!0)},Fs={},vA=[],_0=function s(){return pn(it,"scrollEnd",s)||ws(!0)},Bs=function(e){return Fs[e]&&Fs[e].map(function(t){return t()})||vA},si=[],x0=function(e){for(var t=0;t<si.length;t+=5)(!e||si[t+4]&&si[t+4].query===e)&&(si[t].style.cssText=si[t+1],si[t].getBBox&&si[t].setAttribute("transform",si[t+2]||""),si[t+3].uncache=1)},v0=function(){Qe.cache++,Qe.forEach(function(e){return Pn(e)&&(e.rec=e())})},Rd=function(e,t){var n;for(Bn=0;Bn<Ze.length;Bn++)n=Ze[Bn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ns=!0,t&&x0(t),t||Bs("revert")},M0=function(e,t){Qe.cache++,(t||!kn)&&Qe.forEach(function(n){return Pn(n)&&n.cacheID++&&(n.rec=0)}),ai(e)&&(yd=e,Je.history.scrollRestoration!==e&&(Je.history.scrollRestoration=e))},kn,Is=0,Bm,MA=function(){if(Bm!==Is){var e=Bm=Is;requestAnimationFrame(function(){return e===Is&&ws(!0)})}},S0=function(){gt.appendChild(Aa),Td=!Fn&&Aa.offsetHeight||Je.innerHeight,gt.removeChild(Aa)},km=function(e){return sl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ws=function(e,t){if(li=xt.documentElement,gt=xt.body,Sd=[Je,xt,li,gt],Li&&!e&&!ns){gn(it,"scrollEnd",_0);return}S0(),kn=it.isRefreshing=!0,ns||v0();var n=Bs("refreshInit");a0&&it.sort(),t||Rd(),Qe.forEach(function(i){Pn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ze.slice(0).forEach(function(i){return i.refresh()}),ns=!1,Ze.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-a),i.refresh()}}),Mf=1,km(!0),Ze.forEach(function(i){var r=er(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>r,o=i._startClamp&&i.start>=r;(a||o)&&i.setPositions(o?r-1:i.start,a?Math.max(o?r:i.start+1,r):i.end,!0)}),km(!1),Mf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Qe.forEach(function(i){Pn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),M0(yd,1),qc.pause(),Is++,kn=2,Ar(2),Ze.forEach(function(i){return Pn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),kn=it.isRefreshing=!1,Bs("refresh")},yf=0,vc=1,Fo,Ar=function(e){if(e===2||!kn&&!ns){it.isUpdating=!0,Fo&&Fo.update(0);var t=Ze.length,n=Rn(),i=n-rh>=50,r=t&&Ze[0].scroll();if(vc=yf>r?-1:1,kn||(yf=r),i&&(Li&&!su&&n-Li>200&&(Li=0,Bs("scrollEnd")),xo=rh,rh=n),vc<0){for(Bn=t;Bn-- >0;)Ze[Bn]&&Ze[Bn].update(0,i);vc=1}else for(Bn=0;Bn<t;Bn++)Ze[Bn]&&Ze[Bn].update(0,i);it.isUpdating=!1}al=0},Tf=[p0,m0,Ed,bd,bi+Oo,bi+Io,bi+Uo,bi+No,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Mc=Tf.concat([Ls,Ds,"boxSizing","max"+Ga,"max"+wd,"position",bi,jt,jt+Uo,jt+Io,jt+Oo,jt+No]),SA=function(e,t,n){Ra(n);var i=e._gsap;if(i.spacerIsNative)Ra(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},ah=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Tf.length,a=t.style,o=e.style,l;r--;)l=Tf[r],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Ed]=o[bd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ls]=Yc(e,Hn)+an,a[Ds]=Yc(e,on)+an,a[jt]=o[bi]=o[m0]=o[p0]="0",Ra(i),o[Ls]=o["max"+Ga]=n[Ls],o[Ds]=o["max"+wd]=n[Ds],o[jt]=n[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},yA=/([A-Z])/g,Ra=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,a;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],r=e[i],a?t[r]=a:t[r]&&t.removeProperty(r.replace(yA,"-$1").toLowerCase())}},jl=function(e){for(var t=Mc.length,n=e.style,i=[],r=0;r<t;r++)i.push(Mc[r],n[Mc[r]]);return i.t=e,i},TA=function(e,t,n){for(var i=[],r=e.length,a=n?8:0,o;a<r;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Sc={left:0,top:0},zm=function(e,t,n,i,r,a,o,l,c,u,d,h,f,p){Pn(e)&&(e=e(l)),ai(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?_c("0"+e.substr(3),n):0));var g=f?f.time():0,m,_,v;if(f&&f.seek(0),isNaN(e)||(e=+e),So(e))f&&(e=Ae.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),o&&xc(o,n,i,!0);else{Pn(t)&&(t=t(l));var y=(e||"0").split(" "),M,b,w,x;v=Xn(t,l)||gt,M=Mr(v)||{},(!M||!M.left&&!M.top)&&Ei(v).display==="none"&&(x=v.style.display,v.style.display="block",M=Mr(v),x?v.style.display=x:v.style.removeProperty("display")),b=_c(y[0],M[i.d]),w=_c(y[1]||"0",n),e=M[i.p]-c[i.p]-u+b+r-w,o&&xc(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(p&&(l[p]=e||-.001,e<0&&(e=0)),a){var S=e+n,P=a._isStart;m="scroll"+i.d2,xc(a,S,i,P&&S>20||!P&&(d?Math.max(gt[m],li[m]):a.parentNode[m])<=S+1),d&&(c=Mr(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+an))}return f&&v&&(m=Mr(v),f.seek(h),_=Mr(v),f._caScrollDist=m[i.p]-_[i.p],e=e/f._caScrollDist*h),f&&f.seek(g),f?e:Math.round(e)},bA=/(webkit|moz|length|cssText|inset)/i,Hm=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,a,o;if(t===gt){e._stOrig=r.cssText,o=Ei(e);for(a in o)!+a&&!bA.test(a)&&o[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=o[a]);r.top=n,r.left=i}else r.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,t.appendChild(e)}},y0=function(e,t,n){var i=t,r=i;return function(a){var o=Math.round(e());return o!==i&&o!==r&&Math.abs(o-i)>3&&Math.abs(o-r)>3&&(a=o,n&&n()),r=i,i=Math.round(a),i}},ec=function(e,t,n){var i={};i[t.p]="+="+n,Ae.set(e,i)},Gm=function(e,t){var n=ls(e,t),i="_scroll"+t.p2,r=function a(o,l,c,u,d){var h=a.tween,f=l.onComplete,p={};c=c||n();var g=y0(n,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=p,p[i]=function(){return g(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){Qe.cache++,a.tween&&Ar()},l.onComplete=function(){a.tween=0,f&&f.call(h)},h=a.tween=Ae.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},gn(e,"wheel",n.wheelHandler),it.isTouch&&gn(e,"touchmove",n.wheelHandler),r},it=(function(){function s(t,n){ha||s.register(Ae)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),vf(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!vo){this.update=this.refresh=this.kill=Ki;return}n=Um(ai(n)||So(n)||n.nodeType?{trigger:n}:n,Jl);var r=n,a=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,d=r.scrub,h=r.trigger,f=r.pin,p=r.pinSpacing,g=r.invalidateOnRefresh,m=r.anticipatePin,_=r.onScrubComplete,v=r.onSnapComplete,y=r.once,M=r.snap,b=r.pinReparent,w=r.pinSpacer,x=r.containerAnimation,S=r.fastScrollEnd,P=r.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Hn:on,N=!d&&d!==0,I=Xn(n.scroller||Je),G=Ae.core.getCache(I),L=Os(I),k=("pinType"in n?n.pinType:ts(I,"pinType")||L&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=N&&n.toggleActions.split(" "),te="markers"in n?n.markers:Jl.markers,X=L?0:parseFloat(Ei(I)["border"+A.p2+Ga])||0,C=this,ne=n.onRefreshInit&&function(){return n.onRefreshInit(C)},Se=pA(I,L,A),Fe=mA(I,L),$=0,ue=0,Me=0,Te=ls(I,A),me,Ie,_t,we,Ge,Le,Oe,ht,lt,K,tt,Kt,Tt,at,zt,Xt,F,dt,ct,ze,he,ft,De,ke,R,T,H,se,ie,ce,ge,V,Q,le,D,J,Z,fe,oe;if(C._startClamp=C._endClamp=!1,C._dir=A,m*=45,C.scroller=I,C.scroll=x?x.time.bind(x):Te,we=Te(),ns&&Te.rec==null&&(Te.rec=we),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(a0=1,n.refreshPriority===-9999&&(Fo=C)),G.tweenScroll=G.tweenScroll||{top:Gm(I,on),left:Gm(I,Hn)},C.tweenTo=me=G.tweenScroll[A.p],C.scrubDuration=function(j){Q=So(j)&&j,Q?V?V.duration(j):V=Ae.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Q,paused:!0,onComplete:function(){return _&&_(C)}}):(V&&V.progress(1).kill(),V=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(d),ce=0,l||(l=i.vars.id)),M&&((!Ts(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in gt.style&&Ae.set(L?[gt,li]:I,{scrollBehavior:"auto"}),Qe.forEach(function(j){return Pn(j)&&j.target===(L?xt.scrollingElement||li:I)&&(j.smooth=!1)}),_t=Pn(M.snapTo)?M.snapTo:M.snapTo==="labels"?_A(i):M.snapTo==="labelsDirectional"?xA(i):M.directional!==!1?function(j,_e){return Ad(M.snapTo)(j,Rn()-ue<500?0:_e.direction)}:Ae.utils.snap(M.snapTo),le=M.duration||{min:.1,max:2},le=Ts(le)?Do(le.min,le.max):Do(le,le),D=Ae.delayedCall(M.delay||Q/2||.1,function(){var j=Te(),_e=Rn()-ue<500,ee=me.tween;if((_e||Math.abs(C.getVelocity())<10)&&!ee&&!su&&$!==j){var be=(j-Le)/at,nt=i&&!N?i.totalProgress():be,We=_e?0:(nt-ge)/(Rn()-xo)*1e3||0,Dt=Ae.utils.clamp(-be,1-be,oa(We/2)*We/.185),$t=be+(M.inertia===!1?0:Dt),It,bt,mt=M,nn=mt.onStart,Et=mt.onInterrupt,yn=mt.onComplete;if(It=_t($t,C),So(It)||(It=$t),bt=Math.max(0,Math.round(Le+It*at)),j<=Oe&&j>=Le&&bt!==j){if(ee&&!ee._initted&&ee.data<=oa(bt-j))return;M.inertia===!1&&(Dt=It-be),me(bt,{duration:le(oa(Math.max(oa($t-nt),oa(It-nt))*.185/We/.05||0)),ease:M.ease||"power3",data:oa(bt-j),onInterrupt:function(){return D.restart(!0)&&Et&&aa(C,Et)},onComplete:function(){C.update(),$=Te(),i&&!N&&(V?V.resetTo("totalProgress",It,i._tTime/i._tDur):i.progress(It)),ce=ge=i&&!N?i.totalProgress():C.progress,v&&v(C),yn&&aa(C,yn)}},j,Dt*at,bt-j-Dt*at),nn&&aa(C,nn,me.tween)}}else C.isActive&&$!==j&&D.restart(!0)}).pause()),l&&(Sf[l]=C),h=C.trigger=Xn(h||f!==!0&&f),oe=h&&h._gsap&&h._gsap.stRevert,oe&&(oe=oe(C)),f=f===!0?h:Xn(f),ai(o)&&(o={targets:h,className:o}),f&&(p===!1||p===bi||(p=!p&&f.parentNode&&f.parentNode.style&&Ei(f.parentNode).display==="flex"?!1:jt),C.pin=f,Ie=Ae.core.getCache(f),Ie.spacer?zt=Ie.pinState:(w&&(w=Xn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ie.spacerIsNative=!!w,w&&(Ie.spacerState=jl(w))),Ie.spacer=dt=w||xt.createElement("div"),dt.classList.add("pin-spacer"),l&&dt.classList.add("pin-spacer-"+l),Ie.pinState=zt=jl(f)),n.force3D!==!1&&Ae.set(f,{force3D:!0}),C.spacer=dt=Ie.spacer,ie=Ei(f),ke=ie[p+A.os2],ze=Ae.getProperty(f),he=Ae.quickSetter(f,A.a,an),ah(f,dt,ie),F=jl(f)),te){Kt=Ts(te)?Um(te,Om):Om,K=Ql("scroller-start",l,I,A,Kt,0),tt=Ql("scroller-end",l,I,A,Kt,0,K),ct=K["offset"+A.op.d2];var de=Xn(ts(I,"content")||I);ht=this.markerStart=Ql("start",l,de,A,Kt,ct,0,x),lt=this.markerEnd=Ql("end",l,de,A,Kt,ct,0,x),x&&(fe=Ae.quickSetter([ht,lt],A.a,an)),!k&&!(nr.length&&ts(I,"fixedMarkers")===!0)&&(gA(L?gt:I),Ae.set([K,tt],{force3D:!0}),T=Ae.quickSetter(K,A.a,an),se=Ae.quickSetter(tt,A.a,an))}if(x){var ae=x.vars.onUpdate,pe=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){C.update(0,0,1),ae&&ae.apply(x,pe||[])})}if(C.previous=function(){return Ze[Ze.indexOf(C)-1]},C.next=function(){return Ze[Ze.indexOf(C)+1]},C.revert=function(j,_e){if(!_e)return C.kill(!0);var ee=j!==!1||!C.enabled,be=An;ee!==C.isReverted&&(ee&&(J=Math.max(Te(),C.scroll.rec||0),Me=C.progress,Z=i&&i.progress()),ht&&[ht,lt,K,tt].forEach(function(nt){return nt.style.display=ee?"none":"block"}),ee&&(An=C,C.update(ee)),f&&(!b||!C.isActive)&&(ee?SA(f,dt,zt):ah(f,dt,Ei(f),R)),ee||C.update(ee),An=be,C.isReverted=ee)},C.refresh=function(j,_e,ee,be){if(!((An||!C.enabled)&&!_e)){if(f&&j&&Li){gn(s,"scrollEnd",_0);return}!kn&&ne&&ne(C),An=C,me.tween&&!ee&&(me.tween.kill(),me.tween=0),V&&V.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(z){return z.vars.immediateRender&&z.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var nt=Se(),We=Fe(),Dt=x?x.duration():er(I,A),$t=at<=.01||!at,It=0,bt=be||0,mt=Ts(ee)?ee.end:n.end,nn=n.endTrigger||h,Et=Ts(ee)?ee.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),yn=C.pinnedContainer=n.pinnedContainer&&Xn(n.pinnedContainer,C),ti=h&&Math.max(0,Ze.indexOf(C))||0,Ht=ti,Zt,rn,ni,Gs,sn,Gt,xi,Ka,pl,Lr,E,U,Y;for(te&&Ts(ee)&&(U=Ae.getProperty(K,A.p),Y=Ae.getProperty(tt,A.p));Ht-- >0;)Gt=Ze[Ht],Gt.end||Gt.refresh(0,1)||(An=C),xi=Gt.pin,xi&&(xi===h||xi===f||xi===yn)&&!Gt.isReverted&&(Lr||(Lr=[]),Lr.unshift(Gt),Gt.revert(!0,!0)),Gt!==Ze[Ht]&&(ti--,Ht--);for(Pn(Et)&&(Et=Et(C)),Et=Lm(Et,"start",C),Le=zm(Et,h,nt,A,Te(),ht,K,C,We,X,k,Dt,x,C._startClamp&&"_startClamp")||(f?-.001:0),Pn(mt)&&(mt=mt(C)),ai(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(ai(Et)?Et.split(" ")[0]:"")+mt:(It=_c(mt.substr(2),nt),mt=ai(Et)?Et:(x?Ae.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,Le):Le)+It,nn=h)),mt=Lm(mt,"end",C),Oe=Math.max(Le,zm(mt||(nn?"100% 0":Dt),nn,nt,A,Te()+It,lt,tt,C,We,X,k,Dt,x,C._endClamp&&"_endClamp"))||-.001,It=0,Ht=ti;Ht--;)Gt=Ze[Ht]||{},xi=Gt.pin,xi&&Gt.start-Gt._pinPush<=Le&&!x&&Gt.end>0&&(Zt=Gt.end-(C._startClamp?Math.max(0,Gt.start):Gt.start),(xi===h&&Gt.start-Gt._pinPush<Le||xi===yn)&&isNaN(Et)&&(It+=Zt*(1-Gt.progress)),xi===f&&(bt+=Zt));if(Le+=It,Oe+=It,C._startClamp&&(C._startClamp+=It),C._endClamp&&!kn&&(C._endClamp=Oe||-.001,Oe=Math.min(Oe,er(I,A))),at=Oe-Le||(Le-=.01)&&.001,$t&&(Me=Ae.utils.clamp(0,1,Ae.utils.normalize(Le,Oe,J))),C._pinPush=bt,ht&&It&&(Zt={},Zt[A.a]="+="+It,yn&&(Zt[A.p]="-="+Te()),Ae.set([ht,lt],Zt)),f&&!(Mf&&C.end>=er(I,A)))Zt=Ei(f),Gs=A===on,ni=Te(),ft=parseFloat(ze(A.a))+bt,!Dt&&Oe>1&&(E=(L?xt.scrollingElement||li:I).style,E={style:E,value:E["overflow"+A.a.toUpperCase()]},L&&Ei(gt)["overflow"+A.a.toUpperCase()]!=="scroll"&&(E.style["overflow"+A.a.toUpperCase()]="scroll")),ah(f,dt,Zt),F=jl(f),rn=Mr(f,!0),Ka=k&&ls(I,Gs?Hn:on)(),p?(R=[p+A.os2,at+bt+an],R.t=dt,Ht=p===jt?Yc(f,A)+at+bt:0,Ht&&(R.push(A.d,Ht+an),dt.style.flexBasis!=="auto"&&(dt.style.flexBasis=Ht+an)),Ra(R),yn&&Ze.forEach(function(z){z.pin===yn&&z.vars.pinSpacing!==!1&&(z._subPinOffset=!0)}),k&&Te(J)):(Ht=Yc(f,A),Ht&&dt.style.flexBasis!=="auto"&&(dt.style.flexBasis=Ht+an)),k&&(sn={top:rn.top+(Gs?ni-Le:Ka)+an,left:rn.left+(Gs?Ka:ni-Le)+an,boxSizing:"border-box",position:"fixed"},sn[Ls]=sn["max"+Ga]=Math.ceil(rn.width)+an,sn[Ds]=sn["max"+wd]=Math.ceil(rn.height)+an,sn[bi]=sn[bi+Uo]=sn[bi+Io]=sn[bi+Oo]=sn[bi+No]="0",sn[jt]=Zt[jt],sn[jt+Uo]=Zt[jt+Uo],sn[jt+Io]=Zt[jt+Io],sn[jt+Oo]=Zt[jt+Oo],sn[jt+No]=Zt[jt+No],Xt=TA(zt,sn,b),kn&&Te(0)),i?(pl=i._initted,nh(1),i.render(i.duration(),!0,!0),De=ze(A.a)-ft+at+bt,H=Math.abs(at-De)>1,k&&H&&Xt.splice(Xt.length-2,2),i.render(0,!0,!0),pl||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),nh(0)):De=at,E&&(E.value?E.style["overflow"+A.a.toUpperCase()]=E.value:E.style.removeProperty("overflow-"+A.a));else if(h&&Te()&&!x)for(rn=h.parentNode;rn&&rn!==gt;)rn._pinOffset&&(Le-=rn._pinOffset,Oe-=rn._pinOffset),rn=rn.parentNode;Lr&&Lr.forEach(function(z){return z.revert(!1,!0)}),C.start=Le,C.end=Oe,we=Ge=kn?J:Te(),!x&&!kn&&!ns&&(we<J&&Te(J),C.scroll.rec=0),C.revert(!1,!0),ue=Rn(),D&&($=-1,D.restart(!0)),An=0,i&&N&&(i._initted||Z)&&i.progress()!==Z&&i.progress(Z||0,!0).render(i.time(),!0,!0),($t||Me!==C.progress||x||g||i&&!i._initted)&&(i&&!N&&(i._initted||Me||i.vars.immediateRender!==!1)&&i.totalProgress(x&&Le<-.001&&!Me?Ae.utils.normalize(Le,Oe,0):Me,!0),C.progress=$t||(we-Le)/at===Me?0:Me),f&&p&&(dt._pinOffset=Math.round(C.progress*De)),V&&V.invalidate(),isNaN(U)||(U-=Ae.getProperty(K,A.p),Y-=Ae.getProperty(tt,A.p),ec(K,A,U),ec(ht,A,U-(be||0)),ec(tt,A,Y),ec(lt,A,Y-(be||0))),$t&&!kn&&C.update(),u&&!kn&&!Tt&&(Tt=!0,u(C),Tt=!1)}},C.getVelocity=function(){return(Te()-Ge)/(Rn()-xo)*1e3||0},C.endAnimation=function(){oo(C.callbackAnimation),i&&(V?V.progress(1):i.paused()?N||oo(i,C.direction<0,1):oo(i,i.reversed()))},C.labelToScroll=function(j){return i&&i.labels&&(Le||C.refresh()||Le)+i.labels[j]/i.duration()*at||0},C.getTrailing=function(j){var _e=Ze.indexOf(C),ee=C.direction>0?Ze.slice(0,_e).reverse():Ze.slice(_e+1);return(ai(j)?ee.filter(function(be){return be.vars.preventOverlaps===j}):ee).filter(function(be){return C.direction>0?be.end<=Le:be.start>=Oe})},C.update=function(j,_e,ee){if(!(x&&!ee&&!j)){var be=kn===!0?J:C.scroll(),nt=j?0:(be-Le)/at,We=nt<0?0:nt>1?1:nt||0,Dt=C.progress,$t,It,bt,mt,nn,Et,yn,ti;if(_e&&(Ge=we,we=x?Te():be,M&&(ge=ce,ce=i&&!N?i.totalProgress():We)),m&&f&&!An&&!Yl&&Li&&(!We&&Le<be+(be-Ge)/(Rn()-xo)*m?We=1e-4:We===1&&Oe>be+(be-Ge)/(Rn()-xo)*m&&(We=.9999)),We!==Dt&&C.enabled){if($t=C.isActive=!!We&&We<1,It=!!Dt&&Dt<1,Et=$t!==It,nn=Et||!!We!=!!Dt,C.direction=We>Dt?1:-1,C.progress=We,nn&&!An&&(bt=We&&!Dt?0:We===1?1:Dt===1?2:3,N&&(mt=!Et&&B[bt+1]!=="none"&&B[bt+1]||B[bt],ti=i&&(mt==="complete"||mt==="reset"||mt in i))),P&&(Et||ti)&&(ti||d||!i)&&(Pn(P)?P(C):C.getTrailing(P).forEach(function(ni){return ni.endAnimation()})),N||(V&&!An&&!Yl?(V._dp._time-V._start!==V._time&&V.render(V._dp._time-V._start),V.resetTo?V.resetTo("totalProgress",We,i._tTime/i._tDur):(V.vars.totalProgress=We,V.invalidate().restart())):i&&i.totalProgress(We,!!(An&&(ue||j)))),f){if(j&&p&&(dt.style[p+A.os2]=ke),!k)he(Mo(ft+De*We));else if(nn){if(yn=!j&&We>Dt&&Oe+1>be&&be+1>=er(I,A),b)if(!j&&($t||yn)){var Ht=Mr(f,!0),Zt=be-Le;Hm(f,gt,Ht.top+(A===on?Zt:0)+an,Ht.left+(A===on?0:Zt)+an)}else Hm(f,dt);Ra($t||yn?Xt:F),H&&We<1&&$t||he(ft+(We===1&&!yn?De:0))}}M&&!me.tween&&!An&&!Yl&&D.restart(!0),o&&(Et||y&&We&&(We<1||!ih))&&sl(o.targets).forEach(function(ni){return ni.classList[$t||y?"add":"remove"](o.className)}),a&&!N&&!j&&a(C),nn&&!An?(N&&(ti&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),a&&a(C)),(Et||!ih)&&(c&&Et&&aa(C,c),W[bt]&&aa(C,W[bt]),y&&(We===1?C.kill(!1,1):W[bt]=0),Et||(bt=We===1?1:3,W[bt]&&aa(C,W[bt]))),S&&!$t&&Math.abs(C.getVelocity())>(So(S)?S:2500)&&(oo(C.callbackAnimation),V?V.progress(1):oo(i,mt==="reverse"?1:!We,1))):N&&a&&!An&&a(C)}if(se){var rn=x?be/x.duration()*(x._caScrollDist||0):be;T(rn+(K._isFlipped?1:0)),se(rn)}fe&&fe(-be/x.duration()*(x._caScrollDist||0))}},C.enable=function(j,_e){C.enabled||(C.enabled=!0,gn(I,"resize",yo),L||gn(I,"scroll",la),ne&&gn(s,"refreshInit",ne),j!==!1&&(C.progress=Me=0,we=Ge=$=Te()),_e!==!1&&C.refresh())},C.getTween=function(j){return j&&me?me.tween:V},C.setPositions=function(j,_e,ee,be){if(x){var nt=x.scrollTrigger,We=x.duration(),Dt=nt.end-nt.start;j=nt.start+Dt*j/We,_e=nt.start+Dt*_e/We}C.refresh(!1,!1,{start:Dm(j,ee&&!!C._startClamp),end:Dm(_e,ee&&!!C._endClamp)},be),C.update()},C.adjustPinSpacing=function(j){if(R&&j){var _e=R.indexOf(A.d)+1;R[_e]=parseFloat(R[_e])+j+an,R[1]=parseFloat(R[1])+j+an,Ra(R)}},C.disable=function(j,_e){if(j!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,_e||V&&V.pause(),J=0,Ie&&(Ie.uncache=1),ne&&pn(s,"refreshInit",ne),D&&(D.pause(),me.tween&&me.tween.kill()&&(me.tween=0)),!L)){for(var ee=Ze.length;ee--;)if(Ze[ee].scroller===I&&Ze[ee]!==C)return;pn(I,"resize",yo),L||pn(I,"scroll",la)}},C.kill=function(j,_e){C.disable(j,_e),V&&!_e&&V.kill(),l&&delete Sf[l];var ee=Ze.indexOf(C);ee>=0&&Ze.splice(ee,1),ee===Bn&&vc>0&&Bn--,ee=0,Ze.forEach(function(be){return be.scroller===C.scroller&&(ee=1)}),ee||kn||ns||(C.scroll.rec=0),i&&(i.scrollTrigger=null,j&&i.revert({kill:!1}),_e||i.kill()),ht&&[ht,lt,K,tt].forEach(function(be){return be.parentNode&&be.parentNode.removeChild(be)}),Fo===C&&(Fo=0),f&&(Ie&&(Ie.uncache=1),ee=0,Ze.forEach(function(be){return be.pin===f&&ee++}),ee||(Ie.spacer=0)),n.onKill&&n.onKill(C)},Ze.push(C),C.enable(!1,!1),oe&&oe(C),i&&i.add&&!at){var re=C.update;C.update=function(){C.update=re,Qe.cache++,Le||Oe||C.refresh()},Ae.delayedCall(.01,C.update),at=.01,Le=Oe=0}else C.refresh();f&&MA()},s.register=function(n){return ha||(Ae=n||h0(),u0()&&window.document&&s.enable(),ha=vo),ha},s.defaults=function(n){if(n)for(var i in n)Jl[i]=n[i];return Jl},s.disable=function(n,i){vo=0,Ze.forEach(function(a){return a[i?"kill":"disable"](n)}),pn(Je,"wheel",la),pn(xt,"scroll",la),clearInterval(ql),pn(xt,"touchcancel",Ki),pn(gt,"touchstart",Ki),$l(pn,xt,"pointerdown,touchstart,mousedown",Im),$l(pn,xt,"pointerup,touchend,mouseup",Nm),qc.kill(),Kl(pn);for(var r=0;r<Qe.length;r+=3)Zl(pn,Qe[r],Qe[r+1]),Zl(pn,Qe[r],Qe[r+2])},s.enable=function(){if(Je=window,xt=document,li=xt.documentElement,gt=xt.body,Ae){if(sl=Ae.utils.toArray,Do=Ae.utils.clamp,vf=Ae.core.context||Ki,nh=Ae.core.suppressOverwrites||Ki,yd=Je.history.scrollRestoration||"auto",yf=Je.pageYOffset||0,Ae.core.globals("ScrollTrigger",s),gt){vo=1,Aa=document.createElement("div"),Aa.style.height="100vh",Aa.style.position="absolute",S0(),dA(),Yt.register(Ae),s.isTouch=Yt.isTouch,kr=Yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),xf=Yt.isTouch===1,gn(Je,"wheel",la),Sd=[Je,xt,li,gt],Ae.matchMedia?(s.matchMedia=function(u){var d=Ae.matchMedia(),h;for(h in u)d.add(h,u[h]);return d},Ae.addEventListener("matchMediaInit",function(){v0(),Rd()}),Ae.addEventListener("matchMediaRevert",function(){return x0()}),Ae.addEventListener("matchMedia",function(){ws(0,1),Bs("matchMedia")}),Ae.matchMedia().add("(orientation: portrait)",function(){return sh(),sh})):console.warn("Requires GSAP 3.11.0 or later"),sh(),gn(xt,"scroll",la);var n=gt.hasAttribute("style"),i=gt.style,r=i.borderTopStyle,a=Ae.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Mr(gt),on.m=Math.round(o.top+on.sc())||0,Hn.m=Math.round(o.left+Hn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(gt.setAttribute("style",""),gt.removeAttribute("style")),ql=setInterval(Fm,250),Ae.delayedCall(.5,function(){return Yl=0}),gn(xt,"touchcancel",Ki),gn(gt,"touchstart",Ki),$l(gn,xt,"pointerdown,touchstart,mousedown",Im),$l(gn,xt,"pointerup,touchend,mouseup",Nm),_f=Ae.utils.checkPrefix("transform"),Mc.push(_f),ha=Rn(),qc=Ae.delayedCall(.2,ws).pause(),fa=[xt,"visibilitychange",function(){var u=Je.innerWidth,d=Je.innerHeight;xt.hidden?(Cm=u,Pm=d):(Cm!==u||Pm!==d)&&yo()},xt,"DOMContentLoaded",ws,Je,"load",ws,Je,"resize",yo],Kl(gn),Ze.forEach(function(u){return u.enable(0,1)}),l=0;l<Qe.length;l+=3)Zl(pn,Qe[l],Qe[l+1]),Zl(pn,Qe[l],Qe[l+2])}else if(xt){var c=function u(){s.enable(),xt.removeEventListener("DOMContentLoaded",u)};xt.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(ih=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ql)||(ql=i)&&setInterval(Fm,i),"ignoreMobileResize"in n&&(xf=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Kl(pn)||Kl(gn,n.autoRefreshEvents||"none"),o0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Xn(n),a=Qe.indexOf(r),o=Os(r);~a&&Qe.splice(a,o?6:2),i&&(o?nr.unshift(Je,i,gt,i,li,i):nr.unshift(r,i))},s.clearMatchMedia=function(n){Ze.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var a=(ai(n)?Xn(n):n).getBoundingClientRect(),o=a[r?Ls:Ds]*i||0;return r?a.right-o>0&&a.left+o<Je.innerWidth:a.bottom-o>0&&a.top+o<Je.innerHeight},s.positionInViewport=function(n,i,r){ai(n)&&(n=Xn(n));var a=n.getBoundingClientRect(),o=a[r?Ls:Ds],l=i==null?o/2:i in Kc?Kc[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(a.left+l)/Je.innerWidth:(a.top+l)/Je.innerHeight},s.killAll=function(n){if(Ze.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Fs.killAll||[];Fs={},i.forEach(function(r){return r()})}},s})();it.version="3.15.1";it.saveStyles=function(s){return s?sl(s).forEach(function(e){if(e&&e.style){var t=si.indexOf(e);t>=0&&si.splice(t,5),si.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ae.core.getCache(e),vf())}}):si};it.revert=function(s,e){return Rd(!s,e)};it.create=function(s,e){return new it(s,e)};it.refresh=function(s){return s?yo(!0):(ha||it.register())&&ws(!0)};it.update=function(s){return++Qe.cache&&Ar(s===!0?2:0)};it.clearScrollMemory=M0;it.maxScroll=function(s,e){return er(s,e?Hn:on)};it.getScrollFunc=function(s,e){return ls(Xn(s),e?Hn:on)};it.getById=function(s){return Sf[s]};it.getAll=function(){return Ze.filter(function(s){return s.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!Li};it.snapDirectional=Ad;it.addEventListener=function(s,e){var t=Fs[s]||(Fs[s]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(s,e){var t=Fs[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};it.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,a=function(c,u){var d=[],h=[],f=Ae.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),h.push(p),r<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Pn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Pn(r)&&(r=r(),gn(it,"refresh",function(){return r=e.batchMax()})),sl(s).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(it.create(c))}),t};var Vm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},oh=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Yt.isTouch?" pinch-zoom":""):"none",e===li&&s(gt,t)},tc={auto:1,scroll:1},EA=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||Ae.core.getCache(r),o=Rn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;r&&r!==gt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(tc[(l=Ei(r)).overflowY]||tc[l.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==n&&!Os(r)&&(tc[(l=Ei(r)).overflowY]||tc[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},T0=function(e,t,n,i){return Yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&EA,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&gn(xt,Yt.eventTypes[0],Xm,!1,!0)},onDisable:function(){return pn(xt,Yt.eventTypes[0],Xm,!0)}})},wA=/(input|label|select|textarea)/i,Wm,Xm=function(e){var t=wA.test(e.target.tagName);(t||Wm)&&(e._gsapAllow=!0,Wm=t)},AA=function(e){Ts(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,a=t.onRelease,o,l,c=Xn(e.target)||li,u=Ae.core.globals().ScrollSmoother,d=u&&u.get(),h=kr&&(e.content&&Xn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=ls(c,on),p=ls(c,Hn),g=1,m=(Yt.isTouch&&Je.visualViewport?Je.visualViewport.scale*Je.visualViewport.width:Je.outerWidth)/Je.innerWidth,_=0,v=Pn(i)?function(){return i(o)}:function(){return i||2.8},y,M,b=T0(c,e.type,!0,r),w=function(){return M=!1},x=Ki,S=Ki,P=function(){l=er(c,on),S=Do(kr?1:0,l),n&&(x=Do(0,er(c,Hn))),y=Is},A=function(){h._gsap.y=Mo(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},N=function(){if(M){requestAnimationFrame(w);var te=Mo(o.deltaY/2),X=S(f.v-te);if(h&&X!==f.v+f.offset){f.offset=X-f.v;var C=Mo((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",h._gsap.y=C+"px",f.cacheID=Qe.cache,Ar()}return!0}f.offset&&A(),M=!0},I,G,L,k,W=function(){P(),I.isActive()&&I.vars.scrollY>l&&(f()>l?I.progress(1)&&f(l):I.resetTo("scrollY",l))};return h&&Ae.set(h,{y:"+=0"}),e.ignoreCheck=function(B){return kr&&B.type==="touchmove"&&N()||g>1.05&&B.type!=="touchstart"||o.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){M=!1;var B=g;g=Mo((Je.visualViewport&&Je.visualViewport.scale||1)/m),I.pause(),B!==g&&oh(c,g>1.01?!0:n?!1:"x"),G=p(),L=f(),P(),y=Is},e.onRelease=e.onGestureStart=function(B,te){if(f.offset&&A(),!te)k.restart(!0);else{Qe.cache++;var X=v(),C,ne;n&&(C=p(),ne=C+X*.05*-B.velocityX/.227,X*=Vm(p,C,ne,er(c,Hn)),I.vars.scrollX=x(ne)),C=f(),ne=C+X*.05*-B.velocityY/.227,X*=Vm(f,C,ne,er(c,on)),I.vars.scrollY=S(ne),I.invalidate().duration(X).play(.01),(kr&&I.vars.scrollY>=l||C>=l-1)&&Ae.to({},{onUpdate:W,duration:X})}a&&a(B)},e.onWheel=function(){I._ts&&I.pause(),Rn()-_>1e3&&(y=0,_=Rn())},e.onChange=function(B,te,X,C,ne){if(Is!==y&&P(),te&&n&&p(x(C[2]===te?G+(B.startX-B.x):p()+te-C[1])),X){f.offset&&A();var Se=ne[2]===X,Fe=Se?L+B.startY-B.y:f()+X-ne[1],$=S(Fe);Se&&Fe!==$&&(L+=$-Fe),f($)}(X||te)&&Ar()},e.onEnable=function(){oh(c,n?!1:"x"),it.addEventListener("refresh",W),gn(Je,"resize",W),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),b.enable()},e.onDisable=function(){oh(c,!0),pn(Je,"resize",W),it.removeEventListener("refresh",W),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new Yt(e),o.iOS=kr,kr&&!f()&&f(1),kr&&Ae.ticker.add(Ki),k=o._dc,I=Ae.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:y0(f,f(),function(){return I.pause()})},onUpdate:Ar,onComplete:k.vars.onComplete}),o};it.sort=function(s){if(Pn(s))return Ze.sort(s);var e=Je.pageYOffset||0;return it.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Je.innerHeight}),Ze.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};it.observe=function(s){return new Yt(s)};it.normalizeScroll=function(s){if(typeof s>"u")return Fn;if(s===!0&&Fn)return Fn.enable();if(s===!1){Fn&&Fn.kill(),Fn=s;return}var e=s instanceof Yt?s:AA(s);return Fn&&Fn.target===e.target&&Fn.kill(),Os(e.target)&&(Fn=e),e};it.core={_getVelocityProp:gf,_inputObserver:T0,_scrollers:Qe,_proxies:nr,bridge:{ss:function(){Li||Bs("scrollStart"),Li=Rn()},ref:function(){return An}}};h0()&&Ae.registerPlugin(it);Co.registerPlugin(it);const Gr="./",Rt=document.getElementById("stage"),lh=document.getElementById("status"),b0=window.matchMedia("(prefers-reduced-motion: reduce)").matches,pi=new eE({antialias:!0,alpha:!0});pi.setPixelRatio(Math.min(window.devicePixelRatio,2));pi.setSize(Rt.clientWidth,Rt.clientHeight);pi.toneMapping=Df;pi.toneMappingExposure=.82;pi.shadowMap.enabled=!0;pi.shadowMap.type=tg;Rt.appendChild(pi.domElement);const fl=new VE;fl.setSize(Rt.clientWidth,Rt.clientHeight);fl.domElement.className="labels";Rt.appendChild(fl.domElement);const _i=new Rg;_i.background=null;const or=new zn(30,Rt.clientWidth/Rt.clientHeight,.05,100);or.position.set(.9,1.15,6.7);const RA=new $o(pi);_i.environment=RA.fromScene(new tE,.04).texture;_i.environmentIntensity=.34;const Di=new jf("#fff4e4",2.5);Di.position.set(-3.4,5.2,3.4);Di.castShadow=!0;Di.shadow.mapSize.set(2048,2048);Di.shadow.camera.near=1;Di.shadow.camera.far=20;Di.shadow.camera.left=-4;Di.shadow.camera.right=4;Di.shadow.camera.top=5;Di.shadow.camera.bottom=-3;Di.shadow.bias=-6e-4;Di.shadow.radius=3;_i.add(Di);const E0=new jf("#cfe0e6",.85);E0.position.set(-4.4,2.4,-3.2);_i.add(E0);_i.add(new Vv("#fffaf0","#b7ae99",.6));const dl=-1.075,au=new Lt(new qo(7,64),new xv({color:"#16302d",opacity:.22}));au.rotation.x=-Math.PI/2;au.position.y=dl;au.receiveShadow=!0;_i.add(au);const CA=(()=>{const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(24, 43, 41, 0.34)"),n.addColorStop(.45,"rgba(24, 43, 41, 0.17)"),n.addColorStop(1,"rgba(24, 43, 41, 0)"),t.fillStyle=n,t.fillRect(0,0,128,128);const i=new gv(e);return i.colorSpace=Vt,i})(),w0=(s,e,t=1)=>{const n=new Lt(new cl(s,e),new Sr({map:CA,transparent:!0,opacity:t,depthWrite:!1,toneMapped:!1}));return n.rotation.x=-Math.PI/2,n.renderOrder=1,n},A0=()=>{const s=Rt.clientWidth,e=Rt.clientHeight;s<1080?or.setViewOffset(s,e,0,e*.13,s,e):or.setViewOffset(s,e,-s*.15,0,s,e)};A0();const mn={bag:{spin:0,open:0,tilt:0,side:0},pour:{u:0},cam:{k:0},annot:{v:0}},ol=[{pos:new O(.9,1.15,6.7),target:new O(0,-.12,.25)},{pos:new O(.5,1.26,5.15),target:new O(0,.1,.15)},{pos:new O(2.2,1.12,8.5),target:new O(.12,-.3,.8)},{pos:new O(.97,-.18,3.3),target:new O(.35,-1,1.62)},{pos:new O(2.95,1.22,8.3),target:new O(.72,-.66,.66)}],PA=new Bg(ol.map(s=>s.pos),!1,"catmullrom",.4),LA=new Bg(ol.map(s=>s.target),!1,"catmullrom",.4),bs=`v=${Date.now()}`,DA=new HE().setDecoderPath(`${Gr}draco/`),qm=new iE().setDRACOLoader(DA),Jr=new Ai;Jr.position.set(0,dl,0);_i.add(Jr);const yc=new Ai;Jr.add(yc);const R0=w0(2.5,2.1,.9);R0.position.y=.004;Jr.add(R0);let nc=null,Wr=null,bf=null,yi=null,Ca=null,ll=new O(.35,dl+.05,1.62);const Cd=w0(.66,.66,0);Cd.position.set(ll.x,dl+.003,ll.z);_i.add(Cd);const Ef=[];qm.loadAsync(`${Gr}models/sack.glb?${bs}`).then(async s=>{const e=await new po().loadAsync(`${Gr}artwork/sack-50kg-texture.png?${bs}`);e.colorSpace=Vt,e.anisotropy=Math.min(8,pi.capabilities.getMaxAnisotropy());const t=await new po().loadAsync(`${Gr}textures/sack-weave.png?${bs}`);t.wrapS=t.wrapT=Er,t.repeat.set(4,9),t.anisotropy=Math.min(8,pi.capabilities.getMaxAnisotropy());const n=await new po().loadAsync(`${Gr}textures/sack-crumple.png?${bs}`);n.wrapS=n.wrapT=Er,n.repeat.set(2,2),n.anisotropy=Math.min(8,pi.capabilities.getMaxAnisotropy());const i=new Vn({map:e,color:"#ffffff",vertexColors:!0,bumpMap:t,bumpScale:.045,normalMap:n,normalScale:new Ye(.5,.5),roughnessMap:t,roughness:1,metalness:0,sheen:.08,sheenRoughness:.95,sheenColor:new Be("#ffffff"),envMapIntensity:.12}),r=new Vn({color:"#ffffff",vertexColors:!0,bumpMap:t,bumpScale:.045,normalMap:n,normalScale:new Ye(.6,.6),roughnessMap:t,roughness:.96,metalness:0,sheen:.22,sheenRoughness:.9,sheenColor:new Be("#ffffff"),envMapIntensity:.26});nc=s.scene,nc.traverse(p=>{p.isMesh&&(p.material=p.name==="sack-panel"?i:r,p.castShadow=!0,p.receiveShadow=!1)});const a=new cr().setFromObject(nc);yc.add(nc),a.max.y-a.min.y,yc.position.y=-a.min.y;const o=a.max.y,l=(a.max.x-a.min.x)/2,c=(a.max.z-a.min.z)/2;Wr=IA(o,l,c,r),bf=Wr.anchor,yc.add(Wr.group);const d=(await qm.loadAsync(`${Gr}models/tablet.glb?${bs}`)).scene.getObjectByProperty("isMesh",!0),h=await new po().loadAsync(`${Gr}textures/salt-detail.png?${bs}`);h.wrapS=h.wrapT=Er,h.repeat.set(3,3);const f=new Vn({color:"#f7f5ee",roughness:.74,metalness:0,bumpMap:h,bumpScale:.03,sheen:.4,sheenRoughness:.62,sheenColor:new Be("#fffdf7"),envMapIntensity:.45});NA(d,f),FA(ll),lh.dataset.state="ready",VA()}).catch(s=>{console.error(s),lh.dataset.state="error",lh.textContent="Could not load public/models/sack.glb — run npm run models"});function IA(s,e,t,n){const i=new Ai;i.position.y=s-.015,i.visible=!1;const r=Math.min(e*.78,.52),a=Math.min(t*.62,.19),o=new Sr({color:"#232a29",transparent:!0,opacity:0}),l=new Lt(new qo(1,48),o);l.scale.set(r,a,1),l.rotation.x=-Math.PI/2,l.position.y=-.02,i.add(l);const c=new Oa({color:"#2a3130",roughness:1,metalness:0,side:Bi,transparent:!0,opacity:0}),u=new Lt(new Qc(1,.9,.3,40,1,!0),c);u.scale.set(r*.97,1,a*.97),u.position.y=-.15,i.add(u);const d=new Vn({color:"#f2efe6",roughness:.92,metalness:0,sheen:.3,sheenRoughness:.8,sheenColor:new Be("#ffffff"),envMapIntensity:.2}),h=new Lt(new Zf(1,.055,8,56),d);h.scale.set(r,a,1),h.rotation.x=Math.PI/2,i.add(h);const f=n.clone();f.color=new Be("#f6f3ec");const p=[];for(const m of[0,1]){const _=new Ai,v=new Lt(new qo(1,32,m*Math.PI,Math.PI),f);v.scale.set(r,a,1),v.rotation.x=-Math.PI/2,v.castShadow=!0,_.add(v),_.userData.flip=m,i.add(_),p.push(_)}const g=new yt;return g.position.set(0,.02,0),i.add(g),{group:i,hole:l,dark:o,throat:c,lips:p,anchor:g}}const ic=64;function NA(s,e){const t=s.geometry.clone();yi=new qf(t,e,ic),yi.instanceMatrix.setUsage(Sx),yi.frustumCulled=!1,yi.castShadow=!0,yi.receiveShadow=!0,_i.add(yi);let n=20261126;const i=()=>(n=(n*1664525+1013904223)%4294967296,n/4294967296),r=new zn(30,Rt.clientWidth/Rt.clientHeight,.05,100);r.position.copy(ol[3].pos),r.lookAt(ol[3].target),r.setViewOffset(Rt.clientWidth,Rt.clientHeight,-Rt.clientWidth*.15,0,Rt.clientWidth,Rt.clientHeight),r.updateMatrixWorld(),r.updateProjectionMatrix();const a=new O,o=c=>{a.copy(c).project(r);const u=(a.x*.5+.5)*Rt.clientWidth,d=(-a.y*.5+.5)*Rt.clientHeight;return u<Rt.clientWidth*.68&&d<Rt.clientHeight*.92};for(let c=0;c<ic;c++){const u=c===0;let d=u?ll.clone():new O;if(!u){let h=.6+i()*1;const f=(i()*2-1)*1.15;for(let p=0;p<14&&(d.set(.3+Math.sin(f)*h*1.1,dl+.05,.5+Math.cos(f)*h),d.z=Math.min(d.z,.98),!(d.distanceTo(ll)>1.28&&!o(d)));p++)h-=.16,h<.5&&(h=.6+i()*1.7)}Ef.push({end:d,hero:u,lift:.18+i()*.34,drift:.34+i()*.5,delay:c/ic*.32+i()*.05,duration:.42+i()*.2,scale:.108+i()*.016,restYaw:i()*Math.PI*2,spinAxis:new O(i()-.5,i()-.5,i()-.5).normalize(),spinAmount:2.4+i()*4.4,jitter:new O((i()-.5)*.26,-.05-i()*.1,(i()-.5)*.1)})}const l=new Ve;for(let c=0;c<ic;c++)yi.setMatrixAt(c,l.makeScale(1e-4,1e-4,1e-4));yi.instanceMatrix.needsUpdate=!0}const da=new yt,ca=new O,vs=new O,Ym=new O,ch=new Gi,Km=new Gi;function UA(s,e,t){const n=Rr.clamp((e-s.delay)/s.duration,0,1);if(!bf)return null;bf.getWorldPosition(ca),ca.add(s.jitter),vs.copy(ca),vs.y+=s.lift,vs.x+=s.end.x*.18,vs.z+=s.drift+s.end.z*.12;const i=n,r=1-i;Ym.set(r*r*ca.x+2*r*i*vs.x+i*i*s.end.x,r*r*ca.y+2*r*i*vs.y+i*i*s.end.y,r*r*ca.z+2*r*i*vs.z+i*i*s.end.z);const a=Rr.smoothstep(n,.72,1);ch.setFromAxisAngle(s.spinAxis,i*s.spinAmount),Km.setFromEuler(new sr(0,s.restYaw,0)),ch.slerp(Km,a),da.position.copy(Ym),da.quaternion.copy(ch);const o=Math.min(1,n*6)*s.scale;return da.scale.set(o,o*.88,o),da.updateMatrix(),yi.setMatrixAt(t,da.matrix),n}const OA=13203778,C0={dissolve:{kicker:"Dissolution · brine tank",title:"Slow Dissolving",short:"Slow<br />Dissolving",body:"Pressed at high density, the tablet offers a small surface to the brine, so it dissolves over weeks instead of hours. The brine stays at a steady saturation between refills.",arabic:"كبس عالي يقلّل سطح التلامس، فيذوب القرص على مدى أسابيع لا ساعات.",rows:[["Solubility","Slow dissolving"],["Hardness","High (compression)"],["Dosing","Uniform 25 mm"]]},bridging:{kicker:"Handling · salt bed",title:"Prevents Salt Bridging",short:"Prevents<br />Salt bridging",body:"The tablet keeps its own shape instead of fusing into a crust, so no salt bridges form over the tank outlet and the brine keeps flowing without being broken up by hand.",arabic:"القرص لا يلتحم في كتلة واحدة، فلا تتكوّن جسور ملح تسدّ مخرج الخزان.",rows:[["Appearance","Compressed tablets"],["Form","Self-supporting disc"],["Result","No caking"]]}},ou=new Map,P0=[];let wf=null;function FA(s){const e=new Ai;e.position.copy(s),_i.add(e),Ca=e,e.visible=!1;const t=.115,n=.05,i=n+t*.34*.8,r=t*1.14,a=new Sr({color:OA,transparent:!0,opacity:0});e.userData.materials=[null,a];const o=new O(0,1,0),l=new O,c=new O,u=(g,m,_,v,y,M,b=8e-4,w=a)=>{l.set(g,m,_),c.set(v,y,M);const x=l.distanceTo(c);if(!x)return;const S=new Lt(new Qc(b,b,x,6),w);S.position.copy(l).add(c).multiplyScalar(.5),S.quaternion.setFromUnitVectors(o,c.clone().sub(l).normalize()),e.add(S)},d=(g,m,_,v)=>{const y=document.createElement("div");y.className=`dims ${g}`,y.innerHTML=m,y.style.opacity="0",P0.push(y);const M=new sm(y);return M.position.set(_,v,0),e.add(M),{element:y,object:M}},h=d("dims--x",'<span class="rule"></span><b><strong>Ø 25 mm</strong><span>Diameter</span></b>',0,i),f=d("dims--y",'<span class="rule"></span><b><strong>11 mm</strong><span>Thickness</span></b>',r,0),p=d("dims--mass","<b><strong>~15 g</strong><span>Net mass</span></b>",t*.52,-t*1.5);wf={widthMark:h,thickMark:f,massMark:p,radius:t,half:n,dimY:i,thickAnchorX:r};for(const[g,m,_]of[["dissolve",t*2.15,t*1.5],["bridging",t*2.15,-t*1.5]]){const v=C0[g],y=document.createElement("button");y.type="button",y.className="hotspot",y.setAttribute("aria-expanded","false"),y.setAttribute("aria-label",`${v.title} — open the specification`),y.innerHTML=`<span class="dot" aria-hidden="true"></span><span>${v.short}</span>`,y.style.opacity="0",y.style.pointerEvents="none",y.addEventListener("click",()=>zA(g));const M=new sm(y);M.position.set(m,_,0),e.add(M),ou.set(g,y);const b=Math.sign(_);u(t*1,t*.6*b,0,m-t*.4,_-t*.28*b,0)}}const uh=new O,Ms=(s,e,t)=>(uh.set(s,e,t).project(or),{x:(uh.x*.5+.5)*Rt.clientWidth,y:(-uh.y*.5+.5)*Rt.clientHeight}),BA=()=>{if(!wf||!Ca?.visible)return;const{widthMark:s,thickMark:e,massMark:t,radius:n,half:i,dimY:r,thickAnchorX:a}=wf,o=Ca.position,l=i*.9,c=Ms(o.x-n,o.y+l,o.z),u=Ms(o.x+n,o.y+l,o.z),d=Ms(o.x+n,o.y+i,o.z),h=Ms(o.x+n,o.y-i,o.z);s.element.style.setProperty("--len",`${Math.max(24,Math.abs(u.x-c.x)).toFixed(1)}px`);const f=Ms(o.x,o.y+r,o.z);s.element.style.setProperty("--drop",`${Math.max(3,f.y-c.y).toFixed(1)}px`);const p=Ms(o.x+a,o.y,o.z);e.element.style.setProperty("--len",`${Math.max(12,Math.abs(h.y-d.y)).toFixed(1)}px`),e.element.style.setProperty("--gap",`${Math.max(3,p.x-u.x).toFixed(1)}px`);const m=(t.element.firstElementChild?.offsetHeight??30)/2,_=Ms(o.x+n*.52,o.y-n*1.5,o.z);t.element.style.setProperty("--rise",`${Math.max(2,_.y-m-h.y).toFixed(1)}px`)},kA=s=>{if(!Ca)return;const e=Rt.clientWidth<1080?0:s;Ca.visible=e>.005;const[t,n]=Ca.userData.materials??[];t&&(t.opacity=.92*Rr.clamp(e*1.3,0,1)),n&&(n.opacity=.5*e);for(const i of P0)i.style.opacity=String(Math.min(1,e*1.4));for(const i of ou.values())i.style.opacity=String(Math.min(1,e*1.4)),i.style.pointerEvents=e>.4?"auto":"none"},L0=document.getElementById("hs-card"),lo={kicker:document.getElementById("hs-kicker"),title:document.getElementById("hs-title"),body:document.getElementById("hs-body"),arabic:document.getElementById("hs-ar"),rows:document.getElementById("hs-rows")},D0=document.getElementById("hs-close");let Pa=null;function lu(){if(!Pa)return;const s=ou.get(Pa);s?.classList.remove("is-on"),s?.setAttribute("aria-expanded","false"),s?.focus({preventScroll:!0}),Pa=null,L0.hidden=!0}function zA(s){const e=Pa===s;if(lu(),e)return;const t=C0[s];if(!t)return;lo.kicker.textContent=t.kicker,lo.title.textContent=t.title,lo.body.textContent=t.body,lo.arabic.textContent=t.arabic,lo.rows.innerHTML=t.rows.map(([i,r])=>`<div><dt>${i}</dt><dd>${r}</dd></div>`).join(""),L0.hidden=!1;const n=ou.get(s);n?.classList.add("is-on"),n?.setAttribute("aria-expanded","true"),Pa=s,D0.focus({preventScroll:!0})}D0?.addEventListener("click",lu);document.addEventListener("keydown",s=>{s.key==="Escape"&&lu()});const HA={BS:"<b>British Standards (BS)</b> — the product is checked against British specifications for salt used in water treatment, and compliance is declared on the batch certificate of analysis.",EN:"<b>European Standards (EN)</b> — analysed to <b>EN 973</b>, the European specification for sodium chloride used in water treatment, which keeps the product acceptable across EU markets.",ASTM:"<b>ASTM Standards</b> — <b>ASTM E534</b> is the reference test method behind the chemical analysis table, so results are comparable with international laboratories.",ISO:"<b>ISO Standards</b> — checked against international requirements, which supports smooth customs clearance and global acceptance of every shipment."},$m=[...document.querySelectorAll("#std-badges button")],Zm=document.getElementById("std-note");$m.forEach(s=>{s.addEventListener("click",()=>{const e=s.classList.contains("is-on");if($m.forEach(t=>{t.classList.remove("is-on"),t.setAttribute("aria-pressed","false")}),e){Zm.textContent="Select a standard to see how it applies to this product.";return}s.classList.add("is-on"),s.setAttribute("aria-pressed","true"),Zm.innerHTML=HA[s.dataset.std]})});const Pd=[...document.querySelectorAll(".panel")],I0=[...document.querySelectorAll(".rail button")],Jm=document.getElementById("progress-fill"),Qm=document.getElementById("step-now");let cu=0,N0=-1,Ti=0,pa=[];const U0=()=>{const s=window.innerHeight;pa=Pd.map(e=>{const t=e.getBoundingClientRect();return{anchor:t.top+window.scrollY+t.height/2-s/2,height:t.height}})},O0=()=>{const s=pa.length;if(!s)return 0;const e=window.scrollY;if(e<=pa[0].anchor)return 0;if(e>=pa[s-1].anchor)return 1;for(let t=0;t<s-1;t++){const n=pa[t].anchor,i=pa[t+1].anchor;if(e>=n&&e<=i){const r=(e-n)/Math.max(i-n,1);return(t+r)/(s-1)}}return 1},F0=()=>{cu=O0()};window.addEventListener("scroll",F0,{passive:!0});let Af=null;function GA(s){const e=s.textContent.trim().replace(/\s+/g," "),t=[];return s.textContent="",e.split(" ").forEach((n,i,r)=>{const a=document.createElement("span");a.className="word";for(const o of n){const l=document.createElement("span");l.className="letter",l.textContent=o,a.appendChild(l),t.push(l)}s.appendChild(a),i<r.length-1&&s.appendChild(document.createTextNode(" "))}),t}function VA(){const s=Co.timeline({paused:!0,defaults:{ease:"none"}});s.to(mn.bag,{spin:1,duration:.14,ease:"power1.inOut"},.02).to(mn.cam,{k:1,duration:.1,ease:"power1.inOut"},.02).to(mn.bag,{open:1,duration:.08,ease:"power2.out"},.09).to(mn.bag,{tilt:1,duration:.07,ease:"power2.inOut"},.15).to(mn.cam,{k:2,duration:.08,ease:"power1.inOut"},.16).to(mn.pour,{u:1,duration:.19,ease:"none"},.21).to(mn.bag,{tilt:.12,duration:.07,ease:"power1.inOut"},.4).to(mn.cam,{k:3,duration:.07,ease:"power1.inOut"},.39).to(mn.bag,{side:1,duration:.08,ease:"power1.inOut"},.42).to(mn.bag,{open:0,duration:.06,ease:"power2.inOut"},.44).to(mn.annot,{v:1,duration:.06,ease:"power1.out"},.42).to(mn.annot,{v:0,duration:.05,ease:"power1.in"},.56).to(mn.cam,{k:4,duration:.14,ease:"power1.inOut"},.58).set({},{},1),Af=s,Pd.forEach(e=>{e.querySelectorAll("[data-letters]").forEach(n=>{const i=GA(n);b0||Co.from(i,{yPercent:108,opacity:0,duration:.9,ease:"expo.out",stagger:.018,scrollTrigger:{trigger:e,start:"top 72%",toggleActions:"play none none reverse"}})});const t=e.querySelectorAll("[data-reveal]");t.length&&Co.from(t,{y:24,opacity:0,duration:.75,stagger:.07,ease:"power2.out",scrollTrigger:{trigger:e,start:"top 70%",toggleActions:"play none none reverse"}})}),U0(),F0(),Ti=cu,s.progress(Ti),B0(Ti<.2?0:Ti<.42?1:Ti<.72?2:3)}function B0(s){N0=s,I0.forEach((e,t)=>{const n=t===s;e.classList.toggle("is-on",n),n?e.setAttribute("aria-current","true"):e.removeAttribute("aria-current")}),Qm&&(Qm.textContent=String(s+1).padStart(2,"0"))}const WA=[0,2,3,6];I0.forEach((s,e)=>{s.addEventListener("click",()=>{Pd[WA[e]]?.scrollIntoView({behavior:b0?"auto":"smooth",block:"start"})})});let Tc=0,bc=0,Ld=!1,Rf=0,Cf=0;const XA=s=>s instanceof Element&&!!s.closest("a, button, input, textarea, select, .panel-inner, .story, .rail, .bar, .hs-card");window.addEventListener("pointerdown",s=>{XA(s.target)||(Ld=!0,Rf=s.clientX,Cf=s.clientY)});window.addEventListener("pointermove",s=>{Ld&&(Tc-=(s.clientX-Rf)*.005,bc-=(s.clientY-Cf)*.003,Tc=Rr.clamp(Tc,-.9,.9),bc=Rr.clamp(bc,-.45,.45),Rf=s.clientX,Cf=s.clientY)});const k0=()=>{Ld=!1};window.addEventListener("pointerup",k0);window.addEventListener("pointercancel",k0);const hh=document.getElementById("cursor");if(hh&&window.matchMedia("(hover: hover)").matches){let s=window.innerWidth/2,e=window.innerHeight/2,t=s,n=e;window.addEventListener("pointermove",r=>{t=r.clientX,n=r.clientY;const a=r.target instanceof Element&&!!r.target.closest("a, button, .hotspot");hh.classList.toggle("is-over",a)},{passive:!0});const i=()=>{s+=(t-s)*.22,e+=(n-e)*.22,hh.style.transform=`translate(${s}px, ${e}px) translate(-50%, -50%)`,requestAnimationFrame(i)};i()}const jm=new sM,eg=new O,rc=new O,sc=new O,co=new aM;function qA(){const s=Rr.clamp(mn.cam.k/(ol.length-1),0,1);PA.getPoint(s,eg),LA.getPoint(s,rc),sc.copy(eg).sub(rc),co.setFromVector3(sc),co.theta+=Tc,co.phi=Rr.clamp(co.phi+bc,.35,2.35),sc.setFromSpherical(co),or.position.copy(rc).add(sc),or.lookAt(rc)}function YA(s){const{spin:e,tilt:t,side:n,open:i}=mn.bag;Jr.rotation.y=e*.92+Math.sin(s*.25)*.012,Jr.rotation.z=t*-.42,Jr.position.x=n*1.5,Jr.position.z=-n*.6,Wr&&(Wr.group.visible=i>.01,Wr.dark.opacity=.95*i,Wr.throat.opacity=.9*i,Wr.lips.forEach(r=>{r.rotation.x=(r.userData.flip?1:-1)*i*1.05}))}function KA(){if(!yi)return;const s=mn.pour.u;Cd.material.opacity=.85*Rr.smoothstep(s,.5,.92);for(let e=0;e<Ef.length;e++){const t=UA(Ef[e],s,e);t!==null&&t<=0&&yi.setMatrixAt(e,da.matrix.makeScale(1e-4,1e-4,1e-4))}yi.instanceMatrix.needsUpdate=!0}function z0(){const s=Math.min(jm.getDelta(),.1),e=jm.elapsedTime;if(Af){Ti+=(cu-Ti)*(1-Math.exp(-s*6)),Af.progress(Ti),Jm&&(Jm.style.transform=`scaleX(${Math.max(.001,Ti)})`);const t=Ti<.2?0:Ti<.42?1:Ti<.72?2:3;t!==N0&&B0(t)}YA(e),KA(),qA(),kA(mn.annot.v),BA(),Pa&&mn.annot.v<.35&&lu(),pi.render(_i,or),fl.render(_i,or),requestAnimationFrame(z0)}z0();const H0=()=>{const s=Rt.clientWidth,e=Rt.clientHeight;!s||!e||(or.aspect=s/e,A0(),or.updateProjectionMatrix(),pi.setSize(s,e),fl.setSize(s,e),U0(),cu=O0())};new ResizeObserver(H0).observe(Rt);window.addEventListener("resize",H0);fetch(`${Gr}artwork/sack-50kg-texture.png?${bs}`,{method:"HEAD"}).then(s=>s.headers.get("last-modified")).then(s=>{if(!s)return;const t=new Date(s).toLocaleString("en-GB",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}),n=document.getElementById("artwork-rev");n&&(n.textContent=`ARTWORK ${t.toUpperCase()}`)}).catch(()=>{});
