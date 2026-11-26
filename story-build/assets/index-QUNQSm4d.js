(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const ff="187",Hx=0,yp=1,Gx=2,Uc=1,Vg=2,zo=3,Ms=0,Jn=1,Ji=2,qa=0,Qo=1,Mp=2,Sp=3,bp=4,Vx=5,Fa=100,Wx=101,Xx=102,qx=103,Yx=104,$x=200,Kx=201,Zx=202,Jx=203,Wg=204,Xg=205,Qx=206,jx=207,ev=208,tv=209,nv=210,iv=211,rv=212,sv=213,av=214,Yh=0,$h=1,Kh=2,pl=3,Zh=4,Jh=5,Qh=6,jh=7,pf=0,ov=1,lv=2,Hr=0,qg=1,Yg=2,$g=3,Kg=4,Zg=5,Jg=6,mf=7,Tp="attached",cv="detached",Qg=300,ro=301,ml=302,Hu=303,Gu=304,Gr=1e3,fr=1001,tu=1002,mn=1003,jg=1004,Ho=1005,En=1006,Oc=1007,pr=1008,Si=1009,e_=1010,t_=1011,gl=1012,gf=1013,yr=1014,Fi=1015,Mr=1016,_f=1017,xf=1018,so=1020,n_=35902,i_=35899,r_=1021,s_=1022,ji=1023,Ss=1026,os=1027,vf=1028,yf=1029,ra=1030,Mf=1031,Sf=1033,Fc=33776,Bc=33777,kc=33778,zc=33779,ed=35840,td=35841,nd=35842,id=35843,rd=36196,sd=37492,ad=37496,od=37488,ld=37489,nu=37490,cd=37491,ud=37808,hd=37809,dd=37810,fd=37811,pd=37812,md=37813,gd=37814,_d=37815,xd=37816,vd=37817,yd=37818,Md=37819,Sd=37820,bd=37821,Td=36492,Ed=36494,wd=36495,Ad=36283,Rd=36284,iu=36285,Cd=36286,_l=2300,xl=2301,Vu=2302,Ep=2303,wp=2400,Ap=2401,Rp=2402,uv=2500,hv=0,a_=1,Pd=2,dv=3200,ru=0,fv=1,ss="",Wt="srgb",hi="srgb-linear",su="linear",bt="srgb",Wu=7680,pv=519,mv=512,gv=513,_v=514,o_=515,xv=516,vv=517,l_=518,c_=519,u_=35044,yv=35048,Cp="300 es",er=2e3,vl=2001;function Mv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Sv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function yl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bv(){const r=yl("canvas");return r.style.display="block",r}const Pp={};function au(...r){const e="THREE."+r.shift();console.log(e,...r)}function h_(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Fe(...r){r=h_(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ve(...r){r=h_(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Ya(...r){const e=r.join(" ");e in Pp||(Pp[e]=!0,Fe(...r))}function Tv(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Ev={[Yh]:Yh,[Kh]:Qh,[Zh]:Zh,[pl]:Jh,[$h]:$h,[Qh]:Kh,[jh]:jh,[Jh]:pl};class ha{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lp=1234567;const jo=Math.PI/180,ao=180/Math.PI;function Tr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function Ze(r,e,t){return Math.max(e,Math.min(t,r))}function bf(r,e){return(r%e+e)%e}function wv(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Av(r,e,t){return r!==e?(t-r)/(e-r):0}function el(r,e,t){return(1-t)*r+t*e}function Rv(r,e,t,n){return el(r,e,1-Math.exp(-t*n))}function Cv(r,e=1){return e-Math.abs(bf(r,e*2)-e)}function Pv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Lv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Iv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Dv(r,e){return r+Math.random()*(e-r)}function Nv(r){return r*(.5-Math.random())}function Uv(r){r!==void 0&&(Lp=r);let e=Lp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ov(r){return r*jo}function Fv(r){return r*ao}function Bv(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function kv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function d_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zv(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),h=a((e-n)/2),d=s((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*f,l*h,o*c);break;case"YZY":r.set(l*h,o*u,l*f,o*c);break;case"ZXZ":r.set(l*f,l*h,o*u,o*c);break;case"XZX":r.set(o*u,l*p,l*d,o*c);break;case"YXY":r.set(l*d,o*u,l*p,o*c);break;case"ZYZ":r.set(l*p,l*d,o*u,o*c);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Eu(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Tf(r,e){if(e.constructor===Float32Array)return r;const t=Eu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function Ef(r,e){if(e.constructor===Float32Array)return r;const t=Eu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}const tr={DEG2RAD:jo,RAD2DEG:ao,generateUUID:Tr,clamp:Ze,euclideanModulo:bf,mapLinear:wv,inverseLerp:Av,lerp:el,damp:Rv,pingpong:Cv,smoothstep:Pv,smootherstep:Lv,randInt:Iv,randFloat:Dv,randFloatSpread:Nv,seededRandom:Uv,degToRad:Ov,radToDeg:Fv,isPowerOfTwo:Bv,ceilPowerOfTwo:kv,floorPowerOfTwo:d_,setQuaternionFromProperEuler:zv,normalize:Ef,denormalize:Tf};class Xe{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ir{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=s[a+0],d=s[a+1],p=s[a+2],g=s[a+3];if(f!==g||l!==h||c!==d||u!==p){let m=l*h+c*d+u*p+f*g;m<0&&(h=-h,d=-d,p=-p,g=-g,m=-m);let _=1-o;if(m<.9995){const v=Math.acos(m),M=Math.sin(v);_=Math.sin(_*v)/M,o=Math.sin(o*v)/M,l=l*_+h*o,c=c*_+d*o,u=u*_+p*o,f=f*_+g*o}else{l=l*_+h*o,c=c*_+d*o,u=u*_+p*o,f=f*_+g*o;const v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],h=s[a+1],d=s[a+2],p=s[a+3];return e[t]=o*p+u*f+l*d-c*h,e[t+1]=l*p+u*h+c*f-o*d,e[t+2]=c*p+u*d+o*h-l*f,e[t+3]=u*p-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),h=l(n/2),d=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ip.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ip.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=i+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xu.copy(this).projectOnVector(e),this.sub(Xu)}reflect(e){return this.sub(Xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xu=new O,Ip=new ir;class Ke{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],g=i[0],m=i[3],_=i[6],v=i[1],M=i[4],y=i[7],b=i[2],E=i[5],x=i[8];return s[0]=a*g+o*v+l*b,s[3]=a*m+o*M+l*E,s[6]=a*_+o*y+l*x,s[1]=c*g+u*v+f*b,s[4]=c*m+u*M+f*E,s[7]=c*_+u*y+f*x,s[2]=h*g+d*v+p*b,s[5]=h*m+d*M+p*E,s[8]=h*_+d*y+p*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,p=t*f+n*h+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=f*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=h*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ya("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qu.makeScale(e,t)),this}rotate(e){return Ya("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qu.makeRotation(-e)),this}translate(e,t){return Ya("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qu=new Ke,Dp=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Np=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hv(){const r={enabled:!0,workingColorSpace:hi,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===bt&&(i.r=Vr(i.r),i.g=Vr(i.g),i.b=Vr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(i.r=$a(i.r),i.g=$a(i.g),i.b=$a(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ss?su:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[hi]:{primaries:e,whitePoint:n,transfer:su,toXYZ:Dp,fromXYZ:Np,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:Dp,fromXYZ:Np,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),r}const nt=Hv();function Vr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $a(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ma;class Gv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ma===void 0&&(ma=yl("canvas")),ma.width=e.width,ma.height=e.height;const i=ma.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ma}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Vr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vr(t[n]/255)*255):t[n]=Vr(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vv=0;class wf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=Tr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Yu(i[a].image)):s.push(Yu(i[a]))}else s=Yu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Yu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}let Wv=0;const $u=new O;class gn extends ha{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,n=fr,i=fr,s=En,a=pr,o=ji,l=Si,c=gn.DEFAULT_ANISOTROPY,u=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Tr(),this.name="",this.source=new wf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize($u).x}get height(){return this.source.getSize($u).y}get depth(){return this.source.getSize($u).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gr:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case tu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gr:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case tu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Qg;gn.DEFAULT_ANISOTROPY=1;class Ut{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],g=l[2],m=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(d+1)/2,b=(_+1)/2,E=(u+h)/4,x=(f+g)/4,S=(p+m)/4;return M>y&&M>b?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=E/n,s=x/n):y>b?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=S/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=x/s,i=S/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-p)*(m-p)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(f-g)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xv extends ha{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];const i=n.count;for(let s=0;s<i;s++)this.textures[s]=new gn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new wf(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends Xv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class f_ extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qv extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class qe{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,s,a,o,l,c,u,f,h,d,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,f,h,d,p,g,m)}set(e,t,n,i,s,a,o,l,c,u,f,h,d,p,g,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=d,_[7]=p,_[11]=g,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ga.setFromMatrixColumn(e,0).length(),s=1/ga.setFromMatrixColumn(e,1).length(),a=1/ga.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,p=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,p=c*u,g=c*f;t[0]=h+g*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-p,t[6]=g+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,p=c*u,g=c*f;t[0]=h-g*o,t[4]=-a*f,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*u,t[9]=g-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,p=o*u,g=o*f;t[0]=l*u,t[4]=p*c-d,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,p=o*l,g=o*c;t[0]=l*u,t[4]=g-h*f,t[8]=p*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+p,t[10]=h-g*f}else if(e.order==="XZY"){const h=a*l,d=a*c,p=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=a*u,t[9]=d*f-p,t[2]=p*f-d,t[6]=o*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yv,e,$v)}lookAt(e,t,n){const i=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Kr.crossVectors(n,mi),Kr.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Kr.crossVectors(n,mi)),Kr.normalize(),Wl.crossVectors(mi,Kr),i[0]=Kr.x,i[4]=Wl.x,i[8]=mi.x,i[1]=Kr.y,i[5]=Wl.y,i[9]=mi.y,i[2]=Kr.z,i[6]=Wl.z,i[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],g=n[6],m=n[10],_=n[14],v=n[3],M=n[7],y=n[11],b=n[15],E=i[0],x=i[4],S=i[8],C=i[12],A=i[1],N=i[5],D=i[9],V=i[13],L=i[2],z=i[6],X=i[10],k=i[14],ne=i[3],q=i[7],P=i[11],ie=i[15];return s[0]=a*E+o*A+l*L+c*ne,s[4]=a*x+o*N+l*z+c*q,s[8]=a*S+o*D+l*X+c*P,s[12]=a*C+o*V+l*k+c*ie,s[1]=u*E+f*A+h*L+d*ne,s[5]=u*x+f*N+h*z+d*q,s[9]=u*S+f*D+h*X+d*P,s[13]=u*C+f*V+h*k+d*ie,s[2]=p*E+g*A+m*L+_*ne,s[6]=p*x+g*N+m*z+_*q,s[10]=p*S+g*D+m*X+_*P,s[14]=p*C+g*V+m*k+_*ie,s[3]=v*E+M*A+y*L+b*ne,s[7]=v*x+M*N+y*z+b*q,s[11]=v*S+M*D+y*X+b*P,s[15]=v*C+M*V+y*k+b*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],p=e[3],g=e[7],m=e[11],_=e[15],v=l*d-c*h,M=o*d-c*f,y=o*h-l*f,b=a*d-c*u,E=a*h-l*u,x=a*f-o*u;return t*(g*v-m*M+_*y)-n*(p*v-m*b+_*E)+i*(p*M-g*b+_*x)-s*(p*y-g*E+m*x)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],p=e[12],g=e[13],m=e[14],_=e[15],v=t*o-n*a,M=t*l-i*a,y=t*c-s*a,b=n*l-i*o,E=n*c-s*o,x=i*c-s*l,S=u*g-f*p,C=u*m-h*p,A=u*_-d*p,N=f*m-h*g,D=f*_-d*g,V=h*_-d*m,L=v*V-M*D+y*N+b*A-E*C+x*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/L;return e[0]=(o*V-l*D+c*N)*z,e[1]=(i*D-n*V-s*N)*z,e[2]=(g*x-m*E+_*b)*z,e[3]=(h*E-f*x-d*b)*z,e[4]=(l*A-a*V-c*C)*z,e[5]=(t*V-i*A+s*C)*z,e[6]=(m*y-p*x-_*M)*z,e[7]=(u*x-h*y+d*M)*z,e[8]=(a*D-o*A+c*S)*z,e[9]=(n*A-t*D-s*S)*z,e[10]=(p*E-g*y+_*v)*z,e[11]=(f*y-u*E-d*v)*z,e[12]=(o*C-a*N-l*S)*z,e[13]=(t*N-n*C+i*S)*z,e[14]=(g*M-p*b-m*v)*z,e[15]=(u*b-f*M+h*v)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,p=s*f,g=a*u,m=a*f,_=o*f,v=l*c,M=l*u,y=l*f,b=n.x,E=n.y,x=n.z;return i[0]=(1-(g+_))*b,i[1]=(d+y)*b,i[2]=(p-M)*b,i[3]=0,i[4]=(d-y)*E,i[5]=(1-(h+_))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(p+M)*x,i[9]=(m-v)*x,i[10]=(1-(h+g))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ga.set(i[0],i[1],i[2]).length();const o=ga.set(i[4],i[5],i[6]).length(),l=ga.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Xi.copy(this);const c=1/a,u=1/o,f=1/l;return Xi.elements[0]*=c,Xi.elements[1]*=c,Xi.elements[2]*=c,Xi.elements[4]*=u,Xi.elements[5]*=u,Xi.elements[6]*=u,Xi.elements[8]*=f,Xi.elements[9]*=f,Xi.elements[10]*=f,t.setFromRotationMatrix(Xi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=er,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(l)p=s/(a-s),g=a*s/(a-s);else if(o===er)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===vl)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=er,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i);let p,g;if(l)p=1/(a-s),g=a/(a-s);else if(o===er)p=-2/(a-s),g=-(a+s)/(a-s);else if(o===vl)p=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ga=new O,Xi=new qe,Yv=new O(0,0,0),$v=new O(1,1,1),Kr=new O,Wl=new O,mi=new O,Up=new qe,Op=new ir;class Sr{constructor(e=0,t=0,n=0,i=Sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Up,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Op.setFromEuler(this),this.setFromQuaternion(Op,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sr.DEFAULT_ORDER="XYZ";class p_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kv=0;const Fp=new O,_a=new ir,Rr=new qe,Xl=new O,wo=new O,Zv=new O,Jv=new ir,Bp=new O(1,0,0),kp=new O(0,1,0),zp=new O(0,0,1),Hp={type:"added"},Qv={type:"removed"},xa={type:"childadded",child:null},Ku={type:"childremoved",child:null};class At extends ha{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new O,t=new Sr,n=new ir,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ke}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new p_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _a.setFromAxisAngle(e,t),this.quaternion.multiply(_a),this}rotateOnWorldAxis(e,t){return _a.setFromAxisAngle(e,t),this.quaternion.premultiply(_a),this}rotateX(e){return this.rotateOnAxis(Bp,e)}rotateY(e){return this.rotateOnAxis(kp,e)}rotateZ(e){return this.rotateOnAxis(zp,e)}translateOnAxis(e,t){return Fp.copy(e).applyQuaternion(this.quaternion),this.position.add(Fp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bp,e)}translateY(e){return this.translateOnAxis(kp,e)}translateZ(e){return this.translateOnAxis(zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xl.copy(e):Xl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rr.lookAt(wo,Xl,this.up):Rr.lookAt(Xl,wo,this.up),this.quaternion.setFromRotationMatrix(Rr),i&&(Rr.extractRotation(i.matrixWorld),_a.setFromRotationMatrix(Rr),this.quaternion.premultiply(_a.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hp),xa.child=e,this.dispatchEvent(xa),xa.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qv),Ku.child=e,this.dispatchEvent(Ku),Ku.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hp),xa.child=e,this.dispatchEvent(xa),xa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,Zv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,Jv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}At.DEFAULT_UP=new O(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Bi extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jv={type:"move"};class Zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),_=this._getHandJoint(c,g);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const m_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zr={h:0,s:0,l:0},ql={h:0,s:0,l:0};function Ju(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=nt.workingColorSpace){if(e=bf(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ju(a,s,e+1/3),this.g=Ju(a,s,e),this.b=Ju(a,s,e-1/3)}return nt.colorSpaceToWorking(this,i),this}setStyle(e,t=Wt){function n(s){s!==void 0&&parseFloat(s)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=m_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}copyLinearToSRGB(e){return this.r=$a(e.r),this.g=$a(e.g),this.b=$a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return nt.workingToColorSpace(In.copy(this),e),Math.round(Ze(In.r*255,0,255))*65536+Math.round(Ze(In.g*255,0,255))*256+Math.round(Ze(In.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(In.copy(this),t);const n=In.r,i=In.g,s=In.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Wt){nt.workingToColorSpace(In.copy(this),e);const t=In.r,n=In.g,i=In.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zr),this.setHSL(Zr.h+e,Zr.s+t,Zr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zr),e.getHSL(ql);const n=el(Zr.h,ql.h,t),i=el(Zr.s,ql.s,t),s=el(Zr.l,ql.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new ke;ke.NAMES=m_;class g_ extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sr,this.environmentIntensity=1,this.environmentRotation=new Sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qi=new O,Cr=new O,Qu=new O,Pr=new O,va=new O,ya=new O,Gp=new O,ju=new O,eh=new O,th=new O,nh=new Ut,ih=new Ut,rh=new Ut;class Qi{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qi.subVectors(e,t),i.cross(qi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){qi.subVectors(i,t),Cr.subVectors(n,t),Qu.subVectors(e,t);const a=qi.dot(qi),o=qi.dot(Cr),l=qi.dot(Qu),c=Cr.dot(Cr),u=Cr.dot(Qu),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,p=(a*u-o*l)*h;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Pr)===null?!1:Pr.x>=0&&Pr.y>=0&&Pr.x+Pr.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Pr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pr.x),l.addScaledVector(a,Pr.y),l.addScaledVector(o,Pr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return nh.setScalar(0),ih.setScalar(0),rh.setScalar(0),nh.fromBufferAttribute(e,t),ih.fromBufferAttribute(e,n),rh.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(nh,s.x),a.addScaledVector(ih,s.y),a.addScaledVector(rh,s.z),a}static isFrontFacing(e,t,n,i){return qi.subVectors(n,t),Cr.subVectors(e,t),qi.cross(Cr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),Cr.subVectors(this.a,this.b),qi.cross(Cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Qi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;va.subVectors(i,n),ya.subVectors(s,n),ju.subVectors(e,n);const l=va.dot(ju),c=ya.dot(ju);if(l<=0&&c<=0)return t.copy(n);eh.subVectors(e,i);const u=va.dot(eh),f=ya.dot(eh);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(va,a);th.subVectors(e,s);const d=va.dot(th),p=ya.dot(th);if(p>=0&&d<=p)return t.copy(s);const g=d*c-l*p;if(g<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ya,o);const m=u*p-d*f;if(m<=0&&f-u>=0&&d-p>=0)return Gp.subVectors(s,i),o=(f-u)/(f-u+(d-p)),t.copy(i).addScaledVector(Gp,o);const _=1/(m+g+h);return a=g*_,o=h*_,t.copy(n).addScaledVector(va,a).addScaledVector(ya,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Er{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yi):Yi.fromBufferAttribute(s,a),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yl.copy(n.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),$l.subVectors(this.max,Ao),Ma.subVectors(e.a,Ao),Sa.subVectors(e.b,Ao),ba.subVectors(e.c,Ao),Jr.subVectors(Sa,Ma),Qr.subVectors(ba,Sa),Ps.subVectors(Ma,ba);let t=[0,-Jr.z,Jr.y,0,-Qr.z,Qr.y,0,-Ps.z,Ps.y,Jr.z,0,-Jr.x,Qr.z,0,-Qr.x,Ps.z,0,-Ps.x,-Jr.y,Jr.x,0,-Qr.y,Qr.x,0,-Ps.y,Ps.x,0];return!sh(t,Ma,Sa,ba,$l)||(t=[1,0,0,0,1,0,0,0,1],!sh(t,Ma,Sa,ba,$l))?!1:(Kl.crossVectors(Jr,Qr),t=[Kl.x,Kl.y,Kl.z],sh(t,Ma,Sa,ba,$l))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Lr=[new O,new O,new O,new O,new O,new O,new O,new O],Yi=new O,Yl=new Er,Ma=new O,Sa=new O,ba=new O,Jr=new O,Qr=new O,Ps=new O,Ao=new O,$l=new O,Kl=new O,Ls=new O;function sh(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ls.fromArray(r,s);const o=i.x*Math.abs(Ls.x)+i.y*Math.abs(Ls.y)+i.z*Math.abs(Ls.z),l=e.dot(Ls),c=t.dot(Ls),u=n.dot(Ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const an=new O,Zl=new Xe;let ey=0;class si extends ha{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ey++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=u_,this.updateRanges=[],this.gpuType=Fi,this.version=0,this._normalizationScale=e!==void 0?Eu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zl.fromBufferAttribute(this,t),Zl.applyMatrix3(e),this.setXY(t,Zl.x,Zl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Tf(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ef(e,this.array)}}class __ extends si{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class x_ extends si{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qt extends si{constructor(e,t,n){super(new Float32Array(e),t,n)}}const ty=new Er,Ro=new O,ah=new O;class wr{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ty.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const t=Ro.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ro,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(ah)),this.expandByPoint(Ro.copy(e.center).sub(ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ny=0;const Li=new qe,oh=new At,Ta=new O,gi=new Er,Co=new Er,yn=new O;class kn extends ha{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mv(e)?x_:__)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,t,n){return Li.makeTranslation(e,t,n),this.applyMatrix4(Li),this}scale(e,t,n){return Li.makeScale(e,t,n),this.applyMatrix4(Li),this}lookAt(e){return oh.lookAt(e),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ta).negate(),this.translate(Ta.x,Ta.y,Ta.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];gi.setFromBufferAttribute(s),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Co.setFromBufferAttribute(o),this.morphTargetsRelative?(yn.addVectors(gi.min,Co.min),gi.expandByPoint(yn),yn.addVectors(gi.max,Co.max),gi.expandByPoint(yn)):(gi.expandByPoint(Co.min),gi.expandByPoint(Co.max))}gi.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)yn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(yn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yn.fromBufferAttribute(o,c),l&&(Ta.fromBufferAttribute(e,c),yn.add(Ta)),i=Math.max(i,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new si(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)o[C]=new O,l[C]=new O;const u=new O,f=new O,h=new O,d=new Xe,p=new Xe,g=new Xe,m=new O,_=new O;function v(C,A,N){c[C]=c[A]=c[N]=1,u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,A),h.fromBufferAttribute(n,N),d.fromBufferAttribute(s,C),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,N),f.sub(u),h.sub(u),p.sub(d),g.sub(d);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(m.copy(f).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),_.copy(h).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(D),o[C].add(m),o[A].add(m),o[N].add(m),l[C].add(_),l[A].add(_),l[N].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,A=M.length;C<A;++C){const N=M[C],D=N.start,V=N.count;for(let L=D,z=D+V;L<z;L+=3)v(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const y=new O,b=new O,E=new O,x=new O;function S(C){E.fromBufferAttribute(i,C),x.copy(E);const A=o[C];y.copy(A),y.sub(E.multiplyScalar(E.dot(A))).normalize(),b.crossVectors(x,A);const D=b.dot(l[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,A=n.count;C<A;++C)c[C]&&S(C);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new O,s=new O,a=new O,o=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let h=0,d=e.count;h<d;h+=3){const p=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,p=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let _=0;_<u;_++)h[p++]=c[d++]}return new si(h,u,f)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class v_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=u_,this.updateRanges=[],this.version=0,this.uuid=Tr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Vp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Vp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Vp(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=Tr()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}const Hn=new O;class wu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Eu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix4(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyNormalMatrix(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.transformDirection(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){au("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new si(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){au("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Tf(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ef(e,this.data.array)}}const lh=new O,iy=new O,ry=new Ke;class is{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=lh.subVectors(n,t).cross(iy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(lh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ry.getNormalMatrix(e),i=this.coplanarPoint(lh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let sy=0;class Hi extends ha{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Tr(),this.name="",this.type="Material",this.blending=Qo,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wg,this.blendDst=Xg,this.blendEquation=Fa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wu,this.stencilZFail=Wu,this.stencilZPass=Wu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new is().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ir=new O,ch=new O,Jl=new O,Ql=new O;class Au{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ir.copy(this.origin).addScaledVector(this.direction,t),Ir.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ch.copy(e).add(t).multiplyScalar(.5),Jl.copy(t).sub(e).normalize(),Ql.copy(this.origin).sub(ch);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Jl),o=Ql.dot(this.direction),l=-Ql.dot(Jl),c=Ql.lengthSq(),u=Math.abs(1-a*a);let f,h,d,p;if(u>0)if(f=a*l-o,h=a*o-l,p=s*u,f>=0)if(h>=-p)if(h<=p){const g=1/u;f*=g,h*=g,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ch).addScaledVector(Jl,h),d}intersectSphere(e,t){if(e.radius<0)return null;Ir.subVectors(e.center,this.origin);const n=Ir.dot(this.direction),i=Ir.dot(Ir)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ir)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,p=t.x-a.x,g=t.y-a.y,m=t.z-a.z,_=n.x-a.x,v=n.y-a.y,M=n.z-a.z,y=Math.abs(l),b=Math.abs(c),E=Math.abs(u);let x,S,C,A,N,D,V,L,z,X,k,ne;if(y>=b&&y>=E?(C=l,D=f,z=p,ne=_,l>=0?(x=c,S=u,A=h,N=d,V=g,L=m,X=v,k=M):(x=u,S=c,A=d,N=h,V=m,L=g,X=M,k=v)):b>=E?(C=c,D=h,z=g,ne=v,c>=0?(x=u,S=l,A=d,N=f,V=m,L=p,X=M,k=_):(x=l,S=u,A=f,N=d,V=p,L=m,X=_,k=M)):(C=u,D=d,z=m,ne=M,u>=0?(x=l,S=c,A=f,N=h,V=p,L=g,X=_,k=v):(x=c,S=l,A=h,N=f,V=g,L=p,X=v,k=_)),C===0)return null;const q=x/C,P=S/C,ie=1/C,Se=A-q*D,ze=N-P*D,Z=V-q*z,he=L-P*z,Me=X-q*ne,Te=k-P*ne,ge=Me*he-Te*Z,Ue=Se*Te-ze*Me,vt=Z*ze-he*Se;if(i){if(ge<0||Ue<0||vt<0)return null}else if((ge<0||Ue<0||vt<0)&&(ge>0||Ue>0||vt>0))return null;const Re=ge+Ue+vt;if(Re===0)return null;const We=ie*(ge*D+Ue*z+vt*ne);return(Re>0?We<0:We>0)?null:this.at(We/Re,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mr extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.combine=pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wp=new qe,Is=new Au,jl=new wr,Xp=new O,ec=new O,tc=new O,nc=new O,uh=new O,ic=new O,qp=new O,rc=new O;class Dt extends At{constructor(e=new kn,t=new mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ic.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(uh.fromBufferAttribute(f,e),a?ic.addScaledVector(uh,u):ic.addScaledVector(uh.sub(t),u))}t.add(ic)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jl.copy(n.boundingSphere),jl.applyMatrix4(s),Is.copy(e.ray).recast(e.near),!(jl.containsPoint(Is.origin)===!1&&(Is.intersectSphere(jl,Xp)===null||Is.origin.distanceToSquared(Xp)>(e.far-e.near)**2))&&(Wp.copy(s).invert(),Is.copy(e.ray).applyMatrix4(Wp),!(n.boundingBox!==null&&Is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,g=h.length;p<g;p++){const m=h[p],_=a[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,b=M;y<b;y+=3){const E=o.getX(y),x=o.getX(y+1),S=o.getX(y+2);i=sc(this,_,e,n,c,u,f,E,x,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=p,_=g;m<_;m+=3){const v=o.getX(m),M=o.getX(m+1),y=o.getX(m+2);i=sc(this,a,e,n,c,u,f,v,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,g=h.length;p<g;p++){const m=h[p],_=a[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,b=M;y<b;y+=3){const E=y,x=y+1,S=y+2;i=sc(this,_,e,n,c,u,f,E,x,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=p,_=g;m<_;m+=3){const v=m,M=m+1,y=m+2;i=sc(this,a,e,n,c,u,f,v,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function ay(r,e,t,n,i,s,a,o){let l;if(e.side===Jn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Ms,o),l===null)return null;rc.copy(o),rc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(rc);return c<t.near||c>t.far?null:{distance:c,point:rc.clone(),object:r}}function sc(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ec),r.getVertexPosition(l,tc),r.getVertexPosition(c,nc);const u=ay(r,e,t,n,ec,tc,nc,qp);if(u){const f=new O;Qi.getBarycoord(qp,ec,tc,nc,f),i&&(u.uv=Qi.getInterpolatedAttribute(i,o,l,c,f,new Xe)),s&&(u.uv1=Qi.getInterpolatedAttribute(s,o,l,c,f,new Xe)),a&&(u.normal=Qi.getInterpolatedAttribute(a,o,l,c,f,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new O,materialIndex:0};Qi.getNormal(ec,tc,nc,h.normal),u.face=h,u.barycoord=f}return u}const Po=new Ut,Yp=new Ut,$p=new Ut,oy=new Ut,Kp=new qe,ac=new O,hh=new wr,Zp=new qe,dh=new Au;class ly extends Dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tp,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Er),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ac),this.boundingBox.expandByPoint(ac)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ac),this.boundingSphere.expandByPoint(ac)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hh.copy(this.boundingSphere),hh.applyMatrix4(i),e.ray.intersectsSphere(hh)!==!1&&(Zp.copy(i).invert(),dh.copy(e.ray).applyMatrix4(Zp),!(this.boundingBox!==null&&dh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cv?this.bindMatrixInverse.copy(this.bindMatrix).invert():Fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Yp.fromBufferAttribute(i.attributes.skinIndex,e),$p.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Po.copy(t),t.set(0,0,0,0)):(Po.set(t.x,t.y,t.z,1),t.set(0,0,0)),Po.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=$p.getComponent(s);if(a!==0){const o=Yp.getComponent(s);Kp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(oy.copy(Po).applyMatrix4(Kp),a)}}return t.isVector4&&(t.w=Po.w),t.applyMatrix4(this.bindMatrixInverse)}}class y_ extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Af extends gn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=mn,u=mn,f,h){super(null,a,o,l,c,u,i,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jp=new qe,cy=new qe;class Rf{constructor(e=[],t=[]){this.uuid=Tr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:cy;Jp.multiplyMatrices(o,t[s]),Jp.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Rf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Af(t,e,e,ji,Fi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Fe("Skeleton: No bone found with UUID:",s),a=new y_),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ou extends si{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ea=new qe,Qp=new qe,oc=[],jp=new Er,uy=new qe,Lo=new Dt,Io=new wr;class Cf extends Dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ou(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,uy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ea),jp.copy(e.boundingBox).applyMatrix4(Ea),this.boundingBox.union(jp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ea),Io.copy(e.boundingSphere).applyMatrix4(Ea),this.boundingSphere.union(Io)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Lo.geometry=this.geometry,Lo.material=this.material,Lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Io.copy(this.boundingSphere),Io.applyMatrix4(n),e.ray.intersectsSphere(Io)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ea),Qp.multiplyMatrices(n,Ea),Lo.matrixWorld=Qp,Lo.raycast(e,oc);for(let a=0,o=oc.length;a<o;a++){const l=oc[a];l.instanceId=s,l.object=this,t.push(l)}oc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ou(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Af(new Float32Array(i*this.count),i,this.count,vf,Fi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ds=new wr,hy=new Xe(.5,.5),lc=new O;class Ml{constructor(e=new is,t=new is,n=new is,i=new is,s=new is,a=new is){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=er,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],p=s[8],g=s[9],m=s[10],_=s[11],v=s[12],M=s[13],y=s[14],b=s[15];if(i[0].setComponents(c-a,d-u,_-p,b-v).normalize(),i[1].setComponents(c+a,d+u,_+p,b+v).normalize(),i[2].setComponents(c+o,d+f,_+g,b+M).normalize(),i[3].setComponents(c-o,d-f,_-g,b-M).normalize(),n)i[4].setComponents(l,h,m,y).normalize(),i[5].setComponents(c-l,d-h,_-m,b-y).normalize();else if(i[4].setComponents(c-l,d-h,_-m,b-y).normalize(),t===er)i[5].setComponents(c+l,d+h,_+m,b+y).normalize();else if(t===vl)i[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);const t=hy.distanceTo(e.center);return Ds.radius=.7071067811865476+t,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(lc.x=i.normal.x>0?e.max.x:e.min.x,lc.y=i.normal.y>0?e.max.y:e.min.y,lc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(lc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const em=new qe;class Pf{constructor(){this.coordinateSystem=er,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const s=t[i];em.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ml),n[i].setFromProjectionMatrix(em,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Ml),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new Pf().copy(this)}}class M_ extends Hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lu=new O,cu=new O,tm=new qe,Do=new Au,cc=new wr,fh=new O,nm=new O;class Lf extends At{constructor(e=new kn,t=new M_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)lu.fromBufferAttribute(t,i-1),cu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=lu.distanceTo(cu);e.setAttribute("lineDistance",new qt(n,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(i),cc.radius+=s,e.ray.intersectsSphere(cc)===!1)return;tm.copy(i).invert(),Do.copy(e.ray).applyMatrix4(tm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,m=p-1;g<m;g+=c){const _=u.getX(g),v=u.getX(g+1),M=uc(this,e,Do,l,_,v,g);M&&t.push(M)}if(this.isLineLoop){const g=u.getX(p-1),m=u.getX(d),_=uc(this,e,Do,l,g,m,p-1);_&&t.push(_)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,m=p-1;g<m;g+=c){const _=uc(this,e,Do,l,g,g+1,g);_&&t.push(_)}if(this.isLineLoop){const g=uc(this,e,Do,l,p-1,d,p-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function uc(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(lu.fromBufferAttribute(o,i),cu.fromBufferAttribute(o,s),t.distanceSqToSegment(lu,cu,fh,nm)>n)return;fh.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(fh);if(!(c<e.near||c>e.far))return{distance:c,point:nm.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const im=new O,rm=new O;class dy extends Lf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)im.fromBufferAttribute(t,i),rm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+im.distanceTo(rm);e.setAttribute("lineDistance",new qt(n,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fy extends Lf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class S_ extends Hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sm=new qe,Ld=new Au,hc=new wr,dc=new O;class py extends At{constructor(e=new kn,t=new S_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hc.copy(n.boundingSphere),hc.applyMatrix4(i),hc.radius+=s,e.ray.intersectsSphere(hc)===!1)return;sm.copy(i).invert(),Ld.copy(e.ray).applyMatrix4(sm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=h,g=d;p<g;p++){const m=c.getX(p);dc.fromBufferAttribute(f,m),am(dc,m,l,i,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=h,g=d;p<g;p++)dc.fromBufferAttribute(f,p),am(dc,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function am(r,e,t,n,i,s,a){const o=Ld.distanceSqToPoint(r);if(o<t){const l=new O;Ld.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class b_ extends gn{constructor(e=[],t=ro,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class my extends gn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oo extends gn{constructor(e,t,n=yr,i,s,a,o=mn,l=mn,c,u=Ss,f=1){if(u!==Ss&&u!==os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class T_ extends oo{constructor(e,t=yr,n=ro,i,s,a=mn,o=mn,l,c=Ss){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class E_ extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yo extends kn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(f,2));function p(g,m,_,v,M,y,b,E,x,S,C){const A=y/x,N=b/S,D=y/2,V=b/2,L=E/2,z=x+1,X=S+1;let k=0,ne=0;const q=new O;for(let P=0;P<X;P++){const ie=P*N-V;for(let Se=0;Se<z;Se++){const ze=Se*A-D;q[g]=ze*v,q[m]=ie*M,q[_]=L,c.push(q.x,q.y,q.z),q[g]=0,q[m]=0,q[_]=E>0?1:-1,u.push(q.x,q.y,q.z),f.push(Se/x),f.push(1-P/S),k+=1}}for(let P=0;P<S;P++)for(let ie=0;ie<x;ie++){const Se=h+ie+z*P,ze=h+ie+z*(P+1),Z=h+(ie+1)+z*(P+1),he=h+(ie+1)+z*P;l.push(Se,ze,he),l.push(ze,Z,he),ne+=6}o.addGroup(d,ne,C),d+=ne,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class lo extends kn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new O,u=new Xe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const d=n+f/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ru extends kn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],f=[],h=[],d=[];let p=0;const g=[],m=n/2;let _=0;v(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new qt(f,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(d,2));function v(){const y=new O,b=new O;let E=0;const x=(t-e)/n;for(let S=0;S<=s;S++){const C=[],A=S/s,N=A*(t-e)+e;for(let D=0;D<=i;D++){const V=D/i,L=V*l+o,z=Math.sin(L),X=Math.cos(L);b.x=N*z,b.y=-A*n+m,b.z=N*X,f.push(b.x,b.y,b.z),y.set(z,x,X).normalize(),h.push(y.x,y.y,y.z),d.push(V,1-A),C.push(p++)}g.push(C)}for(let S=0;S<i;S++)for(let C=0;C<s;C++){const A=g[C][S],N=g[C+1][S],D=g[C+1][S+1],V=g[C][S+1];(e>0||C!==0)&&(u.push(A,N,V),E+=3),(t>0||C!==s-1)&&(u.push(N,D,V),E+=3)}c.addGroup(_,E,0),_+=E}function M(y){const b=p,E=new Xe,x=new O;let S=0;const C=y===!0?e:t,A=y===!0?1:-1;for(let D=1;D<=i;D++)f.push(0,m*A,0),h.push(0,A,0),d.push(.5,.5),p++;const N=p;for(let D=0;D<=i;D++){const L=D/i*l+o,z=Math.cos(L),X=Math.sin(L);x.x=C*X,x.y=m*A,x.z=C*z,f.push(x.x,x.y,x.z),h.push(0,A,0),E.x=z*.5+.5,E.y=X*.5*A+.5,d.push(E.x,E.y),p++}for(let D=0;D<i;D++){const V=b+D,L=N+D;y===!0?u.push(L,L+1,V):u.push(L+1,L,V),S+=3}c.addGroup(_,S,y===!0?1:2),_+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ru(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class If extends kn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(s.slice(),3)),this.setAttribute("uv",new qt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const M=new O,y=new O,b=new O;for(let E=0;E<t.length;E+=3)d(t[E+0],M),d(t[E+1],y),d(t[E+2],b),l(M,y,b,v)}function l(v,M,y,b){const E=b+1,x=[];for(let S=0;S<=E;S++){x[S]=[];const C=v.clone().lerp(y,S/E),A=M.clone().lerp(y,S/E),N=E-S;for(let D=0;D<=N;D++)D===0&&S===E?x[S][D]=C:x[S][D]=C.clone().lerp(A,D/N)}for(let S=0;S<E;S++)for(let C=0;C<2*(E-S)-1;C++){const A=Math.floor(C/2);C%2===0?(h(x[S][A+1]),h(x[S+1][A]),h(x[S][A])):(h(x[S][A+1]),h(x[S+1][A+1]),h(x[S+1][A]))}}function c(v){const M=new O;for(let y=0;y<s.length;y+=3)M.x=s[y+0],M.y=s[y+1],M.z=s[y+2],M.normalize().multiplyScalar(v),s[y+0]=M.x,s[y+1]=M.y,s[y+2]=M.z}function u(){const v=new O;for(let M=0;M<s.length;M+=3){v.x=s[M+0],v.y=s[M+1],v.z=s[M+2];const y=m(v)/2/Math.PI+.5,b=_(v)/Math.PI+.5;a.push(y,1-b)}p(),f()}function f(){for(let v=0;v<a.length;v+=6){const M=a[v+0],y=a[v+2],b=a[v+4],E=Math.max(M,y,b),x=Math.min(M,y,b);E>.9&&x<.1&&(M<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),b<.2&&(a[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function d(v,M){const y=v*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function p(){const v=new O,M=new O,y=new O,b=new O,E=new Xe,x=new Xe,S=new Xe;for(let C=0,A=0;C<s.length;C+=9,A+=6){v.set(s[C+0],s[C+1],s[C+2]),M.set(s[C+3],s[C+4],s[C+5]),y.set(s[C+6],s[C+7],s[C+8]),E.set(a[A+0],a[A+1]),x.set(a[A+2],a[A+3]),S.set(a[A+4],a[A+5]),b.copy(v).add(M).add(y).divideScalar(3);const N=m(b);g(E,A+0,v,N),g(x,A+2,M,N),g(S,A+4,y,N)}}function g(v,M,y,b){b<0&&v.x===1&&(a[M]=v.x-1),y.x===0&&y.z===0&&(a[M]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function _(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new If(e.vertices,e.indices,e.radius,e.detail)}}class gy{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],h=n[i+1]-u,d=(a-u)/h;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Xe:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new O,i=[],s=[],a=[],o=new O,l=new qe;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new O)}s[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Ze(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Ze(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),a[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}function Df(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,f){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,i(a,o,h,d)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const om=new O,lm=new O,ph=new Df,mh=new Df,gh=new Df;class w_ extends gy{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new O){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(lm.subVectors(i[0],i[1]).add(i[0]),c=lm);const f=i[o%s],h=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(om.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=om),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),ph.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,p,g,m),mh.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,p,g,m),gh.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,p,g,m)}else this.curveType==="catmullrom"&&(ph.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),mh.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),gh.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(ph.calc(l),mh.calc(l),gh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new O().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Nf extends If{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nf(e.radius,e.detail)}}class Ol extends kn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,h=t/l,d=[],p=[],g=[],m=[];for(let _=0;_<u;_++){const v=_*h-a;for(let M=0;M<c;M++){const y=M*f-s;p.push(y,-v,0),g.push(0,0,1),m.push(M/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<o;v++){const M=v+c*_,y=v+c*(_+1),b=v+1+c*(_+1),E=v+1+c*_;d.push(M,y,E),d.push(y,b,E)}this.setIndex(d),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(g,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.widthSegments,e.heightSegments)}}class Uf extends kn{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],f=[],h=new O,d=new O,p=new O;for(let g=0;g<=n;g++){const m=a+g/n*o;for(let _=0;_<=i;_++){const v=_/i*s;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),p.subVectors(d,h).normalize(),u.push(p.x,p.y,p.z),f.push(_/i),f.push(g/n)}}for(let g=1;g<=n;g++)for(let m=1;m<=i;m++){const _=(i+1)*g+m-1,v=(i+1)*(g-1)+m-1,M=(i+1)*(g-1)+m,y=(i+1)*g+m;l.push(_,v,y),l.push(v,M,y)}this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class _y extends Hi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function co(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(cm(i))i.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(cm(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Wn(r){const e={};for(let t=0;t<r.length;t++){const n=co(r[t]);for(const i in n)e[i]=n[i]}return e}function cm(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function xy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function A_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const vy={clone:co,merge:Wn};var yy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,My=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yy,this.fragmentShader=My,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=xy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(i.value);break;case"v2":this.uniforms[n].value=new Xe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new O().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ut().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(i.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Sy extends sa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class uo extends Hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qn extends uo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ya('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ya('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class by extends Hi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.combine=pf,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ty extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ey extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function rs(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Go(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function wy(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function um(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function Ay(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Mo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Ry extends Mo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wp,endingEnd:wp}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ap:s=e,o=2*t-n;break;case Rp:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ap:a=e,l=2*n-t;break;case Rp:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),g=p*p,m=g*p,_=-h*m+2*h*g-h*p,v=(1+h)*m+(-1.5-2*h)*g+(-.5+h)*p+1,M=(-1-d)*m+(1.5+d)*g+.5*p,y=d*m-d*g;for(let b=0;b!==o;++b)s[b]=_*a[u+b]+v*a[c+b]+M*a[l+b]+y*a[f+b];return s}}class Cy extends Mo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*f+a[l+h]*u;return s}}class Py extends Mo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ly extends Mo{interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){const p=(n-t)/(i-t),g=1-p;for(let m=0;m!==o;++m)s[m]=a[c+m]*g+a[l+m]*p;return s}const h=o*2,d=e-1;for(let p=0;p!==o;++p){const g=a[c+p],m=a[l+p],_=d*h+p*2,v=f[_],M=f[_+1],y=e*h+p*2,b=u[y],E=u[y+1],x=Dy(n,t,v,b,i);s[p]=R_(x,g,M,E,m)}return s}}function R_(r,e,t,n,i){const s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function Iy(r,e,t,n,i){const s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function Dy(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){const o=R_(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;const l=Iy(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}class rr{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rs(t,this.TimeBufferType),this.values=rs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:rs(e.times,Array),values:rs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Go(e.settings)&&(n.settings={inTangents:rs(e.settings.inTangents,Array),outTangents:rs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Py(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ry(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Ly(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case _l:t=this.InterpolantFactoryMethodDiscrete;break;case xl:t=this.InterpolantFactoryMethodLinear;break;case Vu:t=this.InterpolantFactoryMethodSmooth;break;case Ep:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _l;case this.InterpolantFactoryMethodLinear:return xl;case this.InterpolantFactoryMethodSmooth:return Vu;case this.InterpolantFactoryMethodBezier:return Ep}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Go(this.settings)&&(hm(this.settings.inTangents,e),hm(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Go(this.settings)&&(dm(this.settings.inTangents,e),dm(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Sv(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Vu,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const f=o*n,h=f-n,d=f+n;for(let p=0;p!==n;++p){const g=t[f+p];if(g!==t[h+p]||g!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Go(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function hm(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function dm(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}rr.prototype.ValueTypeName="";rr.prototype.TimeBufferType=Float32Array;rr.prototype.ValueBufferType=Float32Array;rr.prototype.DefaultInterpolation=xl;class So extends rr{constructor(e,t,n){super(e,t,n)}}So.prototype.ValueTypeName="bool";So.prototype.ValueBufferType=Array;So.prototype.DefaultInterpolation=_l;So.prototype.InterpolantFactoryMethodLinear=void 0;So.prototype.InterpolantFactoryMethodSmooth=void 0;class C_ extends rr{constructor(e,t,n,i){super(e,t,n,i)}}C_.prototype.ValueTypeName="color";class Sl extends rr{constructor(e,t,n,i){super(e,t,n,i)}}Sl.prototype.ValueTypeName="number";class Ny extends Mo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)ir.slerpFlat(s,0,a,c-o,a,c,l);return s}}class bl extends rr{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ny(this.times,this.values,this.getValueSize(),e)}}bl.prototype.ValueTypeName="quaternion";bl.prototype.InterpolantFactoryMethodSmooth=void 0;class bo extends rr{constructor(e,t,n){super(e,t,n)}}bo.prototype.ValueTypeName="string";bo.prototype.ValueBufferType=Array;bo.prototype.DefaultInterpolation=_l;bo.prototype.InterpolantFactoryMethodLinear=void 0;bo.prototype.InterpolantFactoryMethodSmooth=void 0;class uu extends rr{constructor(e,t,n,i){super(e,t,n,i)}}uu.prototype.ValueTypeName="vector";class Uy{constructor(e="",t=-1,n=[],i=uv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Tr(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Fy(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(rr.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=wy(l);l=um(l,1,u),c=um(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Sl(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=i[f];h||(i[f]=h=[]),h.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Oy(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Sl;case"vector":case"vector2":case"vector3":case"vector4":return uu;case"color":return C_;case"quaternion":return bl;case"bool":case"boolean":return So;case"string":return bo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Fy(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Oy(r.type);if(r.times===void 0){const n=[],i=[];Ay(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),Go(r.settings)&&(t.settings={inTangents:rs(r.settings.inTangents,Float32Array),outTangents:rs(r.settings.outTangents,Float32Array)}),t}const Br={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(fm(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!fm(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function fm(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class By{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ky=new By;class da{constructor(e){this.manager=e!==void 0?e:ky,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}da.DEFAULT_MATERIAL_NAME="__DEFAULT";const Dr={};class zy extends Error{constructor(e,t){super(e),this.response=t}}class hu extends da{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Br.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Dr[e]!==void 0){Dr[e].push({onLoad:t,onProgress:n,onError:i});return}Dr[e]=[],Dr[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Dr[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,p=d!==0;let g=0;const m=new ReadableStream({start(_){v();function v(){f.read().then(({done:M,value:y})=>{if(M)_.close();else{g+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:d});for(let E=0,x=u.length;E<x;E++){const S=u[E];S.onProgress&&S.onProgress(b)}_.enqueue(y),v()}},M=>{_.error(M)})}}});return new Response(m)}else throw new zy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Br.add(`file:${e}`,c);const u=Dr[e];delete Dr[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Dr[e];if(u===void 0)throw this.manager.itemError(e),c;delete Dr[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const wa=new WeakMap;class Hy extends da{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Br.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=wa.get(a);f===void 0&&(f=[],wa.set(a,f)),f.push({onLoad:t,onError:i})}return a}const o=yl("img");function l(){u(),t&&t(this);const f=wa.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}wa.delete(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),Br.remove(`image:${e}`);const h=wa.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onError&&p.onError(f)}wa.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Br.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class Ha extends da{constructor(e){super(e)}load(e,t,n,i){const s=new gn,a=new Hy(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Cu extends At{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Gy extends Cu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const _h=new qe,pm=new O,mm=new O;class Of{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ml,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;pm.setFromMatrixPosition(e.matrixWorld),t.position.copy(pm),mm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){_h.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(_h,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===vl||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(_h)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fc=new O,pc=new ir,sr=new O;class P_ extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=er,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fc,pc,sr),sr.x===1&&sr.y===1&&sr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fc,pc,sr.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fc,pc,sr),sr.x===1&&sr.y===1&&sr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fc,pc,sr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const jr=new O,gm=new Xe,_m=new Xe;class $n extends P_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jr.x,jr.y).multiplyScalar(-e/jr.z),jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jr.x,jr.y).multiplyScalar(-e/jr.z)}getViewSize(e,t){return this.getViewBounds(e,gm,_m),t.subVectors(_m,gm)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Vy extends Of{constructor(){super(new $n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ao*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Wy extends Cu{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Vy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Xy extends Of{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0}}class L_ extends Cu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Xy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ff extends P_{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qy extends Of{constructor(){super(new Ff(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bf extends Cu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new qy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ps{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const xh=new WeakMap;class Yy extends da{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Br.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{xh.has(a)===!0?(i&&i(xh.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Br.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),xh.set(l,c),Br.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Br.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Aa=-90,Ra=1;class Id extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $n(Aa,Ra,e,t);i.layers=this.layers,this.add(i);const s=new $n(Aa,Ra,e,t);s.layers=this.layers,this.add(s);const a=new $n(Aa,Ra,e,t);a.layers=this.layers,this.add(a);const o=new $n(Aa,Ra,e,t);o.layers=this.layers,this.add(o);const l=new $n(Aa,Ra,e,t);l.layers=this.layers,this.add(l);const c=new $n(Aa,Ra,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===er)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=g,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class $y extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const kf="\\[\\]\\.:\\/",Ky=new RegExp("["+kf+"]","g"),zf="[^"+kf+"]",Zy="[^"+kf.replace("\\.","")+"]",Jy=/((?:WC+[\/:])*)/.source.replace("WC",zf),Qy=/(WCOD+)?/.source.replace("WCOD",Zy),jy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zf),eM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zf),tM=new RegExp("^"+Jy+Qy+jy+eM+"$"),nM=["material","materials","bones","map"];class iM{constructor(e,t,n){const i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Tt{constructor(e,t,n){this.path=t,this.parsedPath=n||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Tt.Composite(e,t,n):new Tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ky,"")}static parseTrackName(e){const t=tM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);nM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=iM;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class rM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Fe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class sM{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function xm(r,e,t,n){const i=aM(n);switch(t){case r_:return r*e;case vf:return r*e/i.components*i.byteLength;case yf:return r*e/i.components*i.byteLength;case ra:return r*e*2/i.components*i.byteLength;case Mf:return r*e*2/i.components*i.byteLength;case s_:return r*e*3/i.components*i.byteLength;case ji:return r*e*4/i.components*i.byteLength;case Sf:return r*e*4/i.components*i.byteLength;case Fc:case Bc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kc:case zc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case td:case id:return Math.max(r,16)*Math.max(e,8)/4;case ed:case nd:return Math.max(r,8)*Math.max(e,8)/2;case rd:case sd:case od:case ld:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ad:case nu:case cd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case dd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case fd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case pd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case md:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case gd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case _d:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case xd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case vd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case yd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Md:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Sd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case bd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Td:case Ed:case wd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ad:case Rd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case iu:case Cd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function aM(r){switch(r){case Si:case e_:return{byteLength:1,components:1};case gl:case t_:case Mr:return{byteLength:2,components:1};case _f:case xf:return{byteLength:2,components:4};case yr:case gf:case Fi:return{byteLength:4,components:1};case n_:case i_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ff}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ff);function I_(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function oM(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){const p=f[h],g=f[d];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++h,f[h]=g)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){const g=f[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var lM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cM=`#ifdef USE_ALPHAHASH
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
#endif`,uM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pM=`#ifdef USE_AOMAP
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
#endif`,mM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gM=`#ifdef USE_BATCHING
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
#endif`,_M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MM=`#ifdef USE_IRIDESCENCE
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
#endif`,SM=`#ifdef USE_BUMPMAP
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
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,RM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,CM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,PM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,LM=`#define PI 3.141592653589793
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
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FM="gl_FragColor = linearToOutputTexel( gl_FragColor );",BM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kM=`#ifdef USE_ENVMAP
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
#endif`,zM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
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
#endif`,WM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YM=`#ifdef USE_FOG
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
}`,KM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jM=`#ifdef USE_ENVMAP
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
#endif`,eS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rS=`PhysicalMaterial material;
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
#endif`,sS=`uniform sampler2D dfgLUT;
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
}`,aS=`
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
#endif`,oS=`#if defined( RE_IndirectDiffuse )
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
#endif`,lS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cS=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,uS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_S=`#if defined( USE_POINTS_UV )
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
#endif`,xS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MS=`#if defined( USE_MORPHCOLORS )
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
#endif`,SS=`#ifdef USE_MORPHNORMALS
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
#endif`,TS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ES=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,PS=`#ifdef USE_NORMALMAP
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
#endif`,LS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,US=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,FS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qS=`float getShadowMask() {
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
}`,YS=`#ifdef USE_SKINNING
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
#endif`,KS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZS=`#ifdef USE_SKINNING
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
#endif`,JS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tb=`#ifdef USE_TRANSMISSION
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
#endif`,nb=`#ifdef USE_TRANSMISSION
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
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lb=`uniform sampler2D t2D;
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
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ub=`uniform float backgroundBlurriness;
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
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`#include <common>
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
}`,pb=`#if DEPTH_PACKING == 3200
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
}`,mb=`#define DISTANCE
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
}`,gb=`#define DISTANCE
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
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`uniform float scale;
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
}`,yb=`uniform vec3 diffuse;
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
}`,Mb=`#include <common>
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
}`,Sb=`uniform vec3 diffuse;
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
}`,bb=`#define LAMBERT
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
}`,Tb=`#define LAMBERT
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
}`,Eb=`#define MATCAP
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
}`,wb=`#define MATCAP
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
}`,Ab=`#define NORMAL
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
}`,Rb=`#define NORMAL
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
}`,Cb=`#define PHONG
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
}`,Pb=`#define PHONG
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
}`,Lb=`#define STANDARD
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
}`,Ib=`#define STANDARD
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
}`,Db=`#define TOON
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
}`,Nb=`#define TOON
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
}`,Ub=`uniform float size;
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
}`,Ob=`uniform vec3 diffuse;
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
}`,Fb=`#include <common>
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
}`,Bb=`uniform vec3 color;
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
}`,kb=`uniform float rotation;
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
}`,zb=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:lM,alphahash_pars_fragment:cM,alphamap_fragment:uM,alphamap_pars_fragment:hM,alphatest_fragment:dM,alphatest_pars_fragment:fM,aomap_fragment:pM,aomap_pars_fragment:mM,batching_pars_vertex:gM,batching_vertex:_M,begin_vertex:xM,beginnormal_vertex:vM,bsdfs:yM,iridescence_fragment:MM,bumpmap_pars_fragment:SM,clipping_planes_fragment:bM,clipping_planes_pars_fragment:TM,clipping_planes_pars_vertex:EM,clipping_planes_vertex:wM,color_fragment:AM,color_pars_fragment:RM,color_pars_vertex:CM,color_vertex:PM,common:LM,defaultnormal_vertex:IM,displacementmap_pars_vertex:DM,displacementmap_vertex:NM,emissivemap_fragment:UM,emissivemap_pars_fragment:OM,colorspace_fragment:FM,colorspace_pars_fragment:BM,envmap_fragment:kM,envmap_common_pars_fragment:zM,envmap_pars_fragment:HM,envmap_pars_vertex:GM,envmap_physical_pars_fragment:jM,envmap_vertex:VM,fog_vertex:WM,fog_pars_vertex:XM,fog_fragment:qM,fog_pars_fragment:YM,gradientmap_pars_fragment:$M,lightmap_pars_fragment:KM,lights_lambert_fragment:ZM,lights_lambert_pars_fragment:JM,lights_pars_begin:QM,lights_toon_fragment:eS,lights_toon_pars_fragment:tS,lights_phong_fragment:nS,lights_phong_pars_fragment:iS,lights_physical_fragment:rS,lights_physical_pars_fragment:sS,lights_fragment_begin:aS,lights_fragment_maps:oS,lights_fragment_end:lS,lightprobes_pars_fragment:cS,logdepthbuf_fragment:uS,logdepthbuf_pars_fragment:hS,logdepthbuf_pars_vertex:dS,logdepthbuf_vertex:fS,map_fragment:pS,map_pars_fragment:mS,map_particle_fragment:gS,map_particle_pars_fragment:_S,metalnessmap_fragment:xS,metalnessmap_pars_fragment:vS,morphinstance_vertex:yS,morphcolor_vertex:MS,morphnormal_vertex:SS,morphtarget_pars_vertex:bS,morphtarget_vertex:TS,normal_fragment_begin:ES,normal_fragment_maps:wS,normal_pars_fragment:AS,normal_pars_vertex:RS,normal_vertex:CS,normalmap_pars_fragment:PS,clearcoat_normal_fragment_begin:LS,clearcoat_normal_fragment_maps:IS,clearcoat_pars_fragment:DS,iridescence_pars_fragment:NS,opaque_fragment:US,packing:OS,premultiplied_alpha_fragment:FS,project_vertex:BS,dithering_fragment:kS,dithering_pars_fragment:zS,roughnessmap_fragment:HS,roughnessmap_pars_fragment:GS,shadowmap_pars_fragment:VS,shadowmap_pars_vertex:WS,shadowmap_vertex:XS,shadowmask_pars_fragment:qS,skinbase_vertex:YS,skinning_pars_vertex:$S,skinning_vertex:KS,skinnormal_vertex:ZS,specularmap_fragment:JS,specularmap_pars_fragment:QS,tonemapping_fragment:jS,tonemapping_pars_fragment:eb,transmission_fragment:tb,transmission_pars_fragment:nb,uv_pars_fragment:ib,uv_pars_vertex:rb,uv_vertex:sb,worldpos_vertex:ab,background_vert:ob,background_frag:lb,backgroundCube_vert:cb,backgroundCube_frag:ub,cube_vert:hb,cube_frag:db,depth_vert:fb,depth_frag:pb,distance_vert:mb,distance_frag:gb,equirect_vert:_b,equirect_frag:xb,linedashed_vert:vb,linedashed_frag:yb,meshbasic_vert:Mb,meshbasic_frag:Sb,meshlambert_vert:bb,meshlambert_frag:Tb,meshmatcap_vert:Eb,meshmatcap_frag:wb,meshnormal_vert:Ab,meshnormal_frag:Rb,meshphong_vert:Cb,meshphong_frag:Pb,meshphysical_vert:Lb,meshphysical_frag:Ib,meshtoon_vert:Db,meshtoon_frag:Nb,points_vert:Ub,points_frag:Ob,shadow_vert:Fb,shadow_frag:Bb,sprite_vert:kb,sprite_frag:zb},be={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},ur={basic:{uniforms:Wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Wn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Wn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ke(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Wn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Wn([be.points,be.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Wn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Wn([be.common,be.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Wn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Wn([be.sprite,be.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Wn([be.common,be.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Wn([be.lights,be.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};ur.physical={uniforms:Wn([ur.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const mc={r:0,b:0,g:0},Hb=new qe,D_=new Ke;D_.set(-1,0,0,0,1,0,0,0,1);function Gb(r,e,t,n,i,s){const a=new ke(0);let o=i===!0?0:1,l,c,u=null,f=0,h=null;function d(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const y=v.backgroundBlurriness>0;M=e.get(M,y)}return M}function p(v){let M=!1;const y=d(v);y===null?m(a,o):y&&y.isColor&&(m(y,1),M=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(v,M){const y=d(M);y&&y.isCubeTexture?(c===void 0&&(c=new Dt(new yo(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:co(ur.backgroundCube.uniforms),vertexShader:ur.backgroundCube.vertexShader,fragmentShader:ur.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(D_),c.material.toneMapped=nt.getTransfer(y.colorSpace)!==bt,(u!==y||f!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Dt(new Ol(2,2),new sa({name:"BackgroundMaterial",uniforms:co(ur.background.uniforms),vertexShader:ur.background.vertexShader,fragmentShader:ur.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=nt.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(mc,A_(r)),t.buffers.color.setClear(mc.r,mc.g,mc.b,M,s)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:p,addToRenderList:g,dispose:_}}function Vb(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(N,D,V,L,z){let X=!1;const k=f(N,L,V,D);s!==k&&(s=k,c(s.object)),X=d(N,L,V,z),X&&p(N,L,V,z),z!==null&&e.update(z,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(N,D,V,L),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return r.createVertexArray()}function c(N){return r.bindVertexArray(N)}function u(N){return r.deleteVertexArray(N)}function f(N,D,V,L){const z=L.wireframe===!0;let X=n[D.id];X===void 0&&(X={},n[D.id]=X);const k=N.isInstancedMesh===!0?N.id:0;let ne=X[k];ne===void 0&&(ne={},X[k]=ne);let q=ne[V.id];q===void 0&&(q={},ne[V.id]=q);let P=q[z];return P===void 0&&(P=h(l()),q[z]=P),P}function h(N){const D=[],V=[],L=[];for(let z=0;z<t;z++)D[z]=0,V[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:L,object:N,attributes:{},index:null}}function d(N,D,V,L){const z=s.attributes,X=D.attributes;let k=0;const ne=V.getAttributes();for(const q in ne)if(ne[q].location>=0){const ie=z[q];let Se=X[q];if(Se===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor)),ie===void 0||ie.attribute!==Se||Se&&ie.data!==Se.data)return!0;k++}return s.attributesNum!==k||s.index!==L}function p(N,D,V,L){const z={},X=D.attributes;let k=0;const ne=V.getAttributes();for(const q in ne)if(ne[q].location>=0){let ie=X[q];ie===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor));const Se={};Se.attribute=ie,ie&&ie.data&&(Se.data=ie.data),z[q]=Se,k++}s.attributes=z,s.attributesNum=k,s.index=L}function g(){const N=s.newAttributes;for(let D=0,V=N.length;D<V;D++)N[D]=0}function m(N){_(N,0)}function _(N,D){const V=s.newAttributes,L=s.enabledAttributes,z=s.attributeDivisors;V[N]=1,L[N]===0&&(r.enableVertexAttribArray(N),L[N]=1),z[N]!==D&&(r.vertexAttribDivisor(N,D),z[N]=D)}function v(){const N=s.newAttributes,D=s.enabledAttributes;for(let V=0,L=D.length;V<L;V++)D[V]!==N[V]&&(r.disableVertexAttribArray(V),D[V]=0)}function M(N,D,V,L,z,X,k){k===!0?r.vertexAttribIPointer(N,D,V,z,X):r.vertexAttribPointer(N,D,V,L,z,X)}function y(N,D,V,L){g();const z=L.attributes,X=V.getAttributes(),k=D.defaultAttributeValues;for(const ne in X){const q=X[ne];if(q.location>=0){let P=z[ne];if(P===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(P=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(P=N.instanceColor)),P!==void 0){const ie=P.normalized,Se=P.itemSize,ze=e.get(P);if(ze===void 0)continue;const Z=ze.buffer,he=ze.type,Me=ze.bytesPerElement,Te=he===r.INT||he===r.UNSIGNED_INT||P.gpuType===gf;if(P.isInterleavedBufferAttribute){const ge=P.data,Ue=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,vt=P.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let Re=0;Re<q.locationSize;Re++)_(q.location+Re,ge.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Re=0;Re<q.locationSize;Re++)m(q.location+Re);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let Re=0;Re<q.locationSize;Re++)M(q.location+Re,Se/q.locationSize,he,ie,Ue*Me,(vt+Se/q.locationSize*Re)*Me,Te)}else{if(P.isInstancedBufferAttribute){for(let ge=0;ge<q.locationSize;ge++)_(q.location+ge,P.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let ge=0;ge<q.locationSize;ge++)m(q.location+ge);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let ge=0;ge<q.locationSize;ge++)M(q.location+ge,Se/q.locationSize,he,ie,Se*Me,Se/q.locationSize*ge*Me,Te)}}else if(k!==void 0){const ie=k[ne];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(q.location,ie);break;case 3:r.vertexAttrib3fv(q.location,ie);break;case 4:r.vertexAttrib4fv(q.location,ie);break;default:r.vertexAttrib1fv(q.location,ie)}}}}v()}function b(){C();for(const N in n){const D=n[N];for(const V in D){const L=D[V];for(const z in L){const X=L[z];for(const k in X)u(X[k].object),delete X[k];delete L[z]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;const D=n[N.id];for(const V in D){const L=D[V];for(const z in L){const X=L[z];for(const k in X)u(X[k].object),delete X[k];delete L[z]}}delete n[N.id]}function x(N){for(const D in n){const V=n[D];for(const L in V){const z=V[L];if(z[N.id]===void 0)continue;const X=z[N.id];for(const k in X)u(X[k].object),delete X[k];delete z[N.id]}}}function S(N){for(const D in n){const V=n[D],L=N.isInstancedMesh===!0?N.id:0,z=V[L];if(z!==void 0){for(const X in z){const k=z[X];for(const ne in k)u(k[ne].object),delete k[ne];delete z[X]}delete V[L],Object.keys(V).length===0&&delete n[D]}}}function C(){A(),a=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function Wb(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Xb(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==ji&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const S=x===Mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Si&&x!==Fi&&!S&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Fe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Fe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:b,samples:E}}function qb(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new is,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const p=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,_=r.get(f);if(!i||p===null||p.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,M=v*4;let y=_.clippingState||null;l.value=y,y=u(p,h,M,d);for(let b=0;b!==M;++b)y[b]=t[b];_.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,p){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,p!==!0||m===null){const _=d+g*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<_)&&(m=new Float32Array(_));for(let M=0,y=d;M!==g;++M,y+=4)a.copy(f[M]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}class Hf extends xr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new b_(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new yo(5,5,5),s=new sa({name:"CubemapFromEquirect",uniforms:co(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:qa});s.uniforms.tEquirect.value=t;const a=new Dt(i,s),o=t.minFilter;return t.minFilter===pr&&(t.minFilter=En),new Id(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const vm=256,Yb=3,$b=20,N_=256,U_=16,Kb=3,Zb=new O,Jb=new ke;class Tl{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Id(1,10,null),this._boxMesh=new Dt(new yo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Zb}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,h=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,g=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(e.background=l.getClearColor(Jb));const m=new Id(n,i,u);return m.position.copy(o),m.update(l,e),l.autoClear=f,l.autoClearColor=h,l.autoClearDepth=d,l.autoClearStencil=p,e.background=g,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(vm,d_(e))}_fromTexture(e,t){e.mapping===ro||e.mapping===ml?this._setSize(e.image.length===0?vm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=ym(e,!1,!1),n=Math.log2(e)-Yb;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ym(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ro||e.mapping===ml?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Mm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Qb(),this._integrationMaterial=jb());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/U_);for(let a=0;a<=n;a++){const o=Tl.lodToRoughness(a,n);if(a>n-Kb)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(N_*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=eT());const n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}}function ym(r,e,t){return new Hf(r,{minFilter:pr,generateMipmaps:e,type:Mr,colorSpace:hi,depthBuffer:t})}function Fl(r,e,t){return new sa({name:r,uniforms:e,vertexShader:Je.cube_vert,fragmentShader:t,side:Jn,blending:qa,depthTest:!1,depthWrite:!1})}function Qb(){return Fl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${N_}u

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
	`)}function jb(){return Fl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:U_}},`

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
	`)}function eT(){return Fl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$b}
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
	`)}function Mm(){return Fl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Sm(){return Fl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function tT(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Hu||d===Gu)if(e.has(h)){const p=e.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const g=new Hf(p.height);return g.fromEquirectangularTexture(r,h),e.set(h,g),h.addEventListener("dispose",c),o(g.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const d=h.mapping,p=d===Hu||d===Gu,g=d===ro||d===ml;if(p||g){let m=t.get(h);const _=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new Tl(r)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const v=h.image;return p&&v&&v.height>0||g&&v&&l(v)?(n===null&&(n=new Tl(r)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===Hu?h.mapping=ro:d===Gu&&(h.mapping=ml),h}function l(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function nT(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ya("WebGLRenderer: "+n+" extension not supported."),i}}}function iT(r,e,t,n){const i={},s=new WeakMap,a=new FinalizationRegistry(p=>delete i[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(const m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete i[p.id],a.unregister(p);const g=s.get(p);g&&(e.remove(g),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,g){return i[g.id]!==void 0||(g.addEventListener("dispose",o),i[g.id]=new WeakRef(g),a.register(g,g.id,g),t.memory.geometries++),g}function u(p){const g=p.attributes;for(const m in g)e.update(g[m],r.ARRAY_BUFFER)}function f(p){const g=p.index,m=p.attributes.position;let _=0;if(m===void 0)return;const v=g!==null?g.array.length:m.array.length/3-1,M=m.count>=65535?x_:__,y=new M(Math.ceil(v/3)*6,1),b=y.array;if(g!==null){const x=g.array;_=g.version;for(let S=0,C=0;S<v;S+=3){const A=x[S+0],N=x[S+1],D=x[S+2];b[C++]=A,b[C++]=N,b[C++]=N,b[C++]=D,b[C++]=D,b[C++]=A}}else{_=m.version;for(let x=0,S=0;x<v;x+=3){const C=x+0,A=x+1,N=x+2;b[S++]=C,b[S++]=A,b[S++]=A,b[S++]=N,b[S++]=N,b[S++]=C}}y.version=_;const E=s.get(p);E&&e.remove(E),s.set(p,y)}function h(p){const g=s.get(p);if(g){const m=p.index;m!==null&&g.version<m.version&&f(p)}else f(p);return s.get(p)}function d(){for(const p in i){const g=i[p].deref();g!==void 0&&l(g)}}return{get:c,update:u,getWireframeAttribute:h,dispose:d}}function rT(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){r.drawElements(n,h,s,f*a),t.update(h,n,1)}function c(f,h,d){d!==0&&(r.drawElementsInstanced(n,h,s,f*a,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,d);let g=0;for(let m=0;m<d;m++)g+=h[m];t.update(g,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function sT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function aT(r,e,t){const n=new WeakMap,i=new Ut;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let C=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",C)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let M=0;d===!0&&(M=1),p===!0&&(M=2),g===!0&&(M=3);let y=o.attributes.position.count*M,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*b*4*f),x=new f_(E,y,b,f);x.type=Fi,x.needsUpdate=!0;const S=M*4;for(let A=0;A<f;A++){const N=m[A],D=_[A],V=v[A],L=y*b*4*A;for(let z=0;z<N.count;z++){const X=z*S;d===!0&&(i.fromBufferAttribute(N,z),E[L+X+0]=i.x,E[L+X+1]=i.y,E[L+X+2]=i.z,E[L+X+3]=0),p===!0&&(i.fromBufferAttribute(D,z),E[L+X+4]=i.x,E[L+X+5]=i.y,E[L+X+6]=i.z,E[L+X+7]=0),g===!0&&(i.fromBufferAttribute(V,z),E[L+X+8]=i.x,E[L+X+9]=i.y,E[L+X+10]=i.z,E[L+X+11]=V.itemSize===4?i.w:1)}}h={count:f,texture:x,size:new Xe(y,b)},n.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function oT(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const lT={[qg]:"LINEAR_TONE_MAPPING",[Yg]:"REINHARD_TONE_MAPPING",[$g]:"CINEON_TONE_MAPPING",[Kg]:"ACES_FILMIC_TONE_MAPPING",[Jg]:"AGX_TONE_MAPPING",[mf]:"NEUTRAL_TONE_MAPPING",[Zg]:"CUSTOM_TONE_MAPPING"};function cT(r,e,t,n,i,s){const a=new xr(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new kn;u.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new qt([0,2,0,0,2,0],2));const f=new Sy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Dt(u,f),d=new Ff(-1,1,1,-1,0,1);let p=null,g=null,m=!1,_,v=null,M=[],y=!1;this.setSize=function(b,E){a.setSize(b,E),o!==null&&o.setSize(b,E),l!==null&&l.setSize(b,E);for(let x=0;x<M.length;x++){const S=M[x];S.setSize&&S.setSize(b,E)}},this.setEffects=function(b){M=b,y=M.length>0&&M[0].isRenderPass===!0;const E=a.width,x=a.height;M.length>0&&o===null&&(o=new xr(E,x,{type:Mr,depthBuffer:!1,stencilBuffer:!1}),l=new xr(E,x,{type:Mr,depthBuffer:!1,stencilBuffer:!1}));const S=i===!0&&M.some(C=>C.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new oo(E,x),s===!0&&(c.format=os,c.type=so)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let C=0;C<M.length;C++){const A=M[C];A.setSize&&A.setSize(E,x),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(b,E){if(m||b.toneMapping===Hr&&M.length===0)return!1;if(v=E,E!==null){const x=E.width,S=E.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return y===!1&&b.setRenderTarget(a),_=b.toneMapping,b.toneMapping=Hr,!0},this.hasRenderPass=function(){return y},this.end=function(b,E){b.toneMapping=_,m=!0;let x=a,S=o;for(let C=0;C<M.length;C++){const A=M[C];A.enabled!==!1&&(A.render(b,S,x,E),A.needsSwap!==!1&&(x=S,S=S===o?l:o))}if(p!==b.outputColorSpace||g!==b.toneMapping){p=b.outputColorSpace,g=b.toneMapping,f.defines={},nt.getTransfer(p)===bt&&(f.defines.SRGB_TRANSFER="");const C=lT[g];C&&(f.defines[C]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(v),b.render(h,d),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}const O_=new gn,F_=new oo(1,1),B_=new T_(1),k_=new f_,z_=new qv,H_=new b_,bm=[],Tm=[],Em=new Float32Array(16),wm=new Float32Array(9),Am=new Float32Array(4);function To(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=bm[i];if(s===void 0&&(s=new Float32Array(i),bm[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function _n(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function xn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Pu(r,e){let t=Tm[e];t===void 0&&(t=new Int32Array(e),Tm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function uT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function hT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2fv(this.addr,e),xn(t,e)}}function dT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;r.uniform3fv(this.addr,e),xn(t,e)}}function fT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4fv(this.addr,e),xn(t,e)}}function pT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(_n(t,n))return;Am.set(n),r.uniformMatrix2fv(this.addr,!1,Am),xn(t,n)}}function mT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(_n(t,n))return;wm.set(n),r.uniformMatrix3fv(this.addr,!1,wm),xn(t,n)}}function gT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(_n(t,n))return;Em.set(n),r.uniformMatrix4fv(this.addr,!1,Em),xn(t,n)}}function _T(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function xT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2iv(this.addr,e),xn(t,e)}}function vT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;r.uniform3iv(this.addr,e),xn(t,e)}}function yT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4iv(this.addr,e),xn(t,e)}}function MT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ST(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2uiv(this.addr,e),xn(t,e)}}function bT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;r.uniform3uiv(this.addr,e),xn(t,e)}}function TT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4uiv(this.addr,e),xn(t,e)}}function Lu(r){return r.version===0&&(r.compareFunction=c_,r.needsUpdate=!0),r}function ET(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=Lu(F_):s=O_,t.setTexture2D(e||s,i)}function wT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||z_,i)}function AT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Lu(B_):s=H_,t.setTextureCube(e||s,i)}function RT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||k_,i)}function CT(r){switch(r){case 5126:return uT;case 35664:return hT;case 35665:return dT;case 35666:return fT;case 35674:return pT;case 35675:return mT;case 35676:return gT;case 5124:case 35670:return _T;case 35667:case 35671:return xT;case 35668:case 35672:return vT;case 35669:case 35673:return yT;case 5125:return MT;case 36294:return ST;case 36295:return bT;case 36296:return TT;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return AT;case 36289:case 36303:case 36311:case 36292:return RT}}function PT(r,e){r.uniform1fv(this.addr,e)}function LT(r,e){const t=To(e,this.size,2);r.uniform2fv(this.addr,t)}function IT(r,e){const t=To(e,this.size,3);r.uniform3fv(this.addr,t)}function DT(r,e){const t=To(e,this.size,4);r.uniform4fv(this.addr,t)}function NT(r,e){const t=To(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function UT(r,e){const t=To(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function OT(r,e){const t=To(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function FT(r,e){r.uniform1iv(this.addr,e)}function BT(r,e){r.uniform2iv(this.addr,e)}function kT(r,e){r.uniform3iv(this.addr,e)}function zT(r,e){r.uniform4iv(this.addr,e)}function HT(r,e){r.uniform1uiv(this.addr,e)}function GT(r,e){r.uniform2uiv(this.addr,e)}function VT(r,e){r.uniform3uiv(this.addr,e)}function WT(r,e){r.uniform4uiv(this.addr,e)}function XT(r,e,t){const n=this.cache,i=e.length,s=Pu(t,i);_n(n,s)||(r.uniform1iv(this.addr,s),xn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Lu(F_):a=O_;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function qT(r,e,t){const n=this.cache,i=e.length,s=Pu(t,i);_n(n,s)||(r.uniform1iv(this.addr,s),xn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||z_,s[a])}function YT(r,e,t){const n=this.cache,i=e.length,s=Pu(t,i);_n(n,s)||(r.uniform1iv(this.addr,s),xn(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=Lu(B_):a=H_;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,s[o])}function $T(r,e,t){const n=this.cache,i=e.length,s=Pu(t,i);_n(n,s)||(r.uniform1iv(this.addr,s),xn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||k_,s[a])}function KT(r){switch(r){case 5126:return PT;case 35664:return LT;case 35665:return IT;case 35666:return DT;case 35674:return NT;case 35675:return UT;case 35676:return OT;case 5124:case 35670:return FT;case 35667:case 35671:return BT;case 35668:case 35672:return kT;case 35669:case 35673:return zT;case 5125:return HT;case 36294:return GT;case 36295:return VT;case 36296:return WT;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return qT;case 35680:case 36300:case 36308:case 36293:return YT;case 36289:case 36303:case 36311:case 36292:return $T}}class ZT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=CT(t.type)}}class JT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KT(t.type)}}class QT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const vh=/(\w+)(\])?(\[|\.)?/g;function Rm(r,e){r.seq.push(e),r.map[e.id]=e}function jT(r,e,t){const n=r.name,i=n.length;for(vh.lastIndex=0;;){const s=vh.exec(n),a=vh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Rm(t,c===void 0?new ZT(o,r,e):new JT(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new QT(o),Rm(t,f)),t=f}}}class Hc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);jT(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Cm(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const eE=37297;let tE=0;function nE(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Pm=new Ke;function iE(r){nt._getMatrix(Pm,nt.workingColorSpace,r);const e=`mat3( ${Pm.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(r)){case su:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Lm(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+nE(r.getShaderSource(e),o)}else return s}function rE(r,e){const t=iE(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const sE={[qg]:"Linear",[Yg]:"Reinhard",[$g]:"Cineon",[Kg]:"ACESFilmic",[Jg]:"AgX",[mf]:"Neutral",[Zg]:"Custom"};function aE(r,e){const t=sE[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gc=new O;function oE(){nt.getLuminanceCoefficients(gc);const r=gc.x.toFixed(4),e=gc.y.toFixed(4),t=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function cE(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uE(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Vo(r){return r!==""}function Im(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Dm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(r){return r.replace(hE,dE)}function dE(r,e){const t=Je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Dd(t)}const fE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(r){return r.replace(fE,pE)}function pE(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Um(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const mE={[Uc]:"SHADOWMAP_TYPE_PCF",[zo]:"SHADOWMAP_TYPE_VSM"};function gE(r){return mE[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _E={[ml]:"ENVMAP_MODE_REFRACTION"};function xE(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":_E[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vE={[pf]:"ENVMAP_BLENDING_MULTIPLY",[ov]:"ENVMAP_BLENDING_MIX",[lv]:"ENVMAP_BLENDING_ADD"};function yE(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":vE[r.combine]||"ENVMAP_BLENDING_NONE"}function ME(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=gE(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=xE(t),f=yE(t),h=lE(t),d=cE(s),p=i.createProgram();let g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Vo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Vo).join(`
`),m.length>0&&(m+=`
`)):(g=[Um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),m=[Um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hr?"#define TONE_MAPPING":"",t.toneMapping!==Hr?Je.tonemapping_pars_fragment:"",t.toneMapping!==Hr?aE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,rE("linearToOutputTexel",t.outputColorSpace),oE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vo).join(`
`)),a=Dd(a),a=Im(a,t),a=Dm(a,t),o=Dd(o),o=Im(o,t),o=Dm(o,t),a=Nm(a),o=Nm(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Cp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=_+g+a,M=_+m+o,y=Cm(i,i.VERTEX_SHADER,v),b=Cm(i,i.FRAGMENT_SHADER,M);i.attachShader(p,y),i.attachShader(p,b),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function E(A){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(p)||"",D=i.getShaderInfoLog(y)||"",V=i.getShaderInfoLog(b)||"",L=N.trim(),z=D.trim(),X=V.trim();let k=!0,ne=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,y,b);else{const q=Lm(i,y,"vertex"),P=Lm(i,b,"fragment");Ve("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+q+`
`+P)}else L!==""?Fe("WebGLProgram: Program Info Log:",L):(z===""||X==="")&&(ne=!1);ne&&(A.diagnostics={runnable:k,programLog:L,vertexShader:{log:z,prefix:g},fragmentShader:{log:X,prefix:m}})}i.deleteShader(y),i.deleteShader(b),x=new Hc(i,p),S=uE(i,p)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(p,eE)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tE++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=b,this}let SE=0;class bE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new TE(e),t.set(e,n)),n}}class TE{constructor(e){this.id=SE++,this.code=e,this.usedTimes=0}}function EE(r){return r===ra||r===nu||r===iu}function wE(r,e,t,n,i,s){const a=new p_,o=new bE,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,S,C,A,N,D){const V=A.fog,L=N.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=e.get(x.envMap||z,X),ne=h[x.type];let q=n.precision;x.precision!==null&&(q=n.getMaxPrecision(x.precision),q!==x.precision&&Fe("WebGLProgram.getParameters:",x.precision,"not supported, using",q,"instead."));const P=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ie=P!==void 0?P.length:0;let Se=0;L.morphAttributes.position!==void 0&&(Se=1),L.morphAttributes.normal!==void 0&&(Se=2),L.morphAttributes.color!==void 0&&(Se=3);let ze,Z,he,Me;if(ne){const te=ur[ne];ze=te.vertexShader,Z=te.fragmentShader}else{ze=x.vertexShader,Z=x.fragmentShader;const te=o.getVertexShaderStage(x),Ee=o.getFragmentShaderStage(x);o.update(x,te,Ee),he=te.id,Me=Ee.id}const Te=r.getRenderTarget(),ge=r.state.buffers.depth.getReversed(),Ue=N.isInstancedMesh===!0,vt=N.isBatchedMesh===!0,Re=!!x.map,We=!!x.matcap,De=!!k,Be=De&&k.isPMREMTexture===!0,ft=!!x.aoMap,ut=!!x.lightMap,K=!!x.bumpMap&&x.wireframe===!1,it=!!x.normalMap,tn=!!x.displacementMap,Rt=!!x.emissiveMap,lt=!!x.metalnessMap,$t=!!x.roughnessMap,Qt=x.anisotropy>0,B=x.clearcoat>0,mt=x.diffuseRoughness>0,ht=x.dispersion>0,Ge=x.retroreflectivity>0,de=x.iridescence>0,pt=x.sheen>0,Ne=x.transmission>0,He=Qt&&!!x.anisotropyMap,R=B&&!!x.clearcoatMap,T=B&&!!x.clearcoatNormalMap,G=B&&!!x.clearcoatRoughnessMap,ae=mt&&!!x.diffuseRoughnessMap,re=de&&!!x.iridescenceMap,ue=de&&!!x.iridescenceThicknessMap,_e=pt&&!!x.sheenColorMap,W=pt&&!!x.sheenRoughnessMap,j=!!x.specularMap,ce=!!x.specularColorMap,I=!!x.specularIntensityMap,Q=Ne&&!!x.transmissionMap,J=Ne&&!!x.thicknessMap,fe=!!x.gradientMap,le=!!x.alphaMap,pe=x.alphaTest>0,oe=!!x.alphaHash,me=!!x.extensions;let se=Hr;x.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(se=r.toneMapping);const ee=Be?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,xe={shaderID:ne,shaderType:x.type,shaderName:x.name,vertexShader:ze,fragmentShader:Z,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:q,batching:vt,batchingColor:vt&&N._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,instancingMorph:Ue&&N.morphTexture!==null,outputColorSpace:Te===null?r.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Re,matcap:We,envMap:De,envMapMode:De&&k.mapping,envMapPMREM:Be,envMapMaxLod:Be?ee.length-1:null,envMapSize:Be?ee[0].width:null,aoMap:ft,lightMap:ut,bumpMap:K,normalMap:it,displacementMap:tn,emissiveMap:Rt,normalMapObjectSpace:it&&x.normalMapType===fv,normalMapTangentSpace:it&&x.normalMapType===ru,packedNormalMap:it&&x.normalMapType===ru&&EE(x.normalMap.format),metalnessMap:lt,roughnessMap:$t,anisotropy:Qt,anisotropyMap:He,clearcoat:B,clearcoatMap:R,clearcoatNormalMap:T,clearcoatRoughnessMap:G,diffuseRoughness:mt,diffuseRoughnessMap:ae,dispersion:ht,retroreflection:Ge,iridescence:de,iridescenceMap:re,iridescenceThicknessMap:ue,sheen:pt,sheenColorMap:_e,sheenRoughnessMap:W,specularMap:j,specularColorMap:ce,specularIntensityMap:I,transmission:Ne,transmissionMap:Q,thicknessMap:J,gradientMap:fe,opaque:x.transparent===!1&&x.blending===Qo&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:pe,alphaHash:oe,combine:x.combine,mapUv:Re&&d(x.map.channel),aoMapUv:ft&&d(x.aoMap.channel),lightMapUv:ut&&d(x.lightMap.channel),bumpMapUv:K&&d(x.bumpMap.channel),normalMapUv:it&&d(x.normalMap.channel),displacementMapUv:tn&&d(x.displacementMap.channel),emissiveMapUv:Rt&&d(x.emissiveMap.channel),metalnessMapUv:lt&&d(x.metalnessMap.channel),roughnessMapUv:$t&&d(x.roughnessMap.channel),anisotropyMapUv:He&&d(x.anisotropyMap.channel),clearcoatMapUv:R&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:re&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:W&&d(x.sheenRoughnessMap.channel),specularMapUv:j&&d(x.specularMap.channel),specularColorMapUv:ce&&d(x.specularColorMap.channel),specularIntensityMapUv:I&&d(x.specularIntensityMap.channel),transmissionMapUv:Q&&d(x.transmissionMap.channel),thicknessMapUv:J&&d(x.thicknessMap.channel),alphaMapUv:le&&d(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(it||Qt),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(Re||le),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&it===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ge,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Se,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(te=>te.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:Re&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===bt,decodeVideoTextureEmissive:Rt&&x.emissiveMap.isVideoTexture===!0&&nt.getTransfer(x.emissiveMap.colorSpace)===bt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ji,flipSided:x.side===Jn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:me&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&x.extensions.multiDraw===!0||vt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return xe.vertexUv1s=l.has(1),xe.vertexUv2s=l.has(2),xe.vertexUv3s=l.has(3),l.clear(),xe}function g(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)S.push(C),S.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(m(S,x),_(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function m(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function _(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){const S=h[x.type];let C;if(S){const A=ur[S];C=vy.clone(A.uniforms)}else C=x.uniforms;return C}function M(x,S){let C=u.get(S);return C!==void 0?++C.usedTimes:(C=new ME(r,S,x,i),c.push(C),u.set(S,C)),C}function y(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function E(){o.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:v,acquireProgram:M,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:E}}function AE(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function RE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Om(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Fm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,p,g,m,_){let v=r[e];return v===void 0?(v={id:h.id,object:h,geometry:d,material:p,materialVariant:a(h),groupOrder:g,renderOrder:h.renderOrder,z:m,group:_},r[e]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=p,v.materialVariant=a(h),v.groupOrder=g,v.renderOrder=h.renderOrder,v.z=m,v.group=_),e++,v}function l(h,d,p,g,m,_,v){v.reversedDepth===!0&&(m=-m);const M=o(h,d,p,g,m,_);p.transmission>0?n.push(M):p.transparent===!0?i.push(M):t.push(M)}function c(h,d,p,g,m,_){const v=o(h,d,p,g,m,_);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function u(h,d){t.length>1&&t.sort(h||RE),n.length>1&&n.sort(d||Om),i.length>1&&i.sort(d||Om)}function f(){for(let h=e,d=r.length;h<d;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:u}}function CE(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Fm,r.set(n,[a])):i>=s.length?(a=new Fm,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function PE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new ke};break;case"SpotLight":t={position:new O,direction:new O,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function LE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let IE=0;function DE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function NE(r){const e=new PE,t=LE(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const i=new O,s=new qe,a=new qe;function o(c){let u=0,f=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,p=0,g=0,m=0,_=0,v=0,M=0,y=0,b=0,E=0,x=0,S=0,C=0,A=0;c.sort(DE);for(let D=0,V=c.length;D<V;D++){const L=c[D],z=L.color,X=L.intensity,k=L.distance;let ne=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ra?ne=L.shadow.map.texture:ne=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=z.r*X,f+=z.g*X,h+=z.b*X;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],X);A++}else if(L.isSunLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const P=L.shadow,ie=t.get(L);ie.shadowIntensity=P.intensity,ie.shadowBias=P.bias,ie.shadowNormalBias=P.normalBias,ie.shadowRadius=P.radius,ie.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),n.sunShadow[p]=ie,n.sunShadowMap[p]=ne;const Se=P.getViewportCount();for(let ze=0;ze<Se;ze++)n.sunShadowMatrix[g+ze]=P.getMatrix(ze),n.sunShadowCascade[g+ze]=P._cascadeData[ze];g+=Se,p++}n.sun[d]=q,d++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const P=L.shadow,ie=t.get(L);ie.shadowIntensity=P.intensity,ie.shadowBias=P.bias,ie.shadowNormalBias=P.normalBias,ie.shadowRadius=P.radius,ie.shadowMapSize=P.mapSize,n.directionalShadow[m]=ie,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=q,m++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(z).multiplyScalar(X),q.distance=k,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[v]=q;const P=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,P.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[v]=P.matrix,L.castShadow){const ie=t.get(L);ie.shadowIntensity=P.intensity,ie.shadowBias=P.bias,ie.shadowNormalBias=P.normalBias,ie.shadowRadius=P.radius,ie.shadowMapSize=P.mapSize,n.spotShadow[v]=ie,n.spotShadowMap[v]=ne,x++}v++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(z).multiplyScalar(X),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[M]=q,M++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const P=L.shadow,ie=t.get(L);ie.shadowIntensity=P.intensity,ie.shadowBias=P.bias,ie.shadowNormalBias=P.normalBias,ie.shadowRadius=P.radius,ie.shadowMapSize=P.mapSize,ie.shadowCameraNear=P.camera.near,ie.shadowCameraFar=P.camera.far,n.pointShadow[_]=ie,n.pointShadowMap[_]=ne,n.pointShadowMatrix[_]=L.shadow.matrix,E++}n.point[_]=q,_++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(X),q.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[y]=q,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const N=n.hash;(N.sunLength!==d||N.directionalLength!==m||N.pointLength!==_||N.spotLength!==v||N.rectAreaLength!==M||N.hemiLength!==y||N.numSunShadows!==p||N.numDirectionalShadows!==b||N.numPointShadows!==E||N.numSpotShadows!==x||N.numSpotMaps!==S||N.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=M,n.point.length=_,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-C,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,N.sunLength=d,N.directionalLength=m,N.pointLength=_,N.spotLength=v,N.rectAreaLength=M,N.hemiLength=y,N.numSunShadows=p,N.numDirectionalShadows=b,N.numPointShadows=E,N.numSpotShadows=x,N.numSpotMaps=S,N.numLightProbes=A,n.version=IE++)}function l(c,u){let f=0,h=0,d=0,p=0,g=0,m=0;const _=u.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){const y=c[v];if(y.isSunLight){const b=n.sun[f];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(_),f++}else if(y.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(_),h++}else if(y.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(_),p++}else if(y.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),a.identity(),s.copy(y.matrixWorld),s.premultiply(_),a.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),d++}else if(y.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(_),m++}}}return{setup:o,setupView:l,state:n}}function Bm(r){const e=new NE(r),t=[],n=[],i=[];function s(f){u.camera=f,t.length=0,n.length=0,i.length=0}function a(f){f.isLightProbeGrid?i.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),i.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function c(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function UE(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Bm(r),e.set(i,[o])):s>=a.length?(o=new Bm(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const OE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FE=`uniform sampler2D shadow_pass;
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
}`,BE=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],kE=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],km=new qe,No=new O,yh=new O;function zE(r,e,t){let n=new Ml;const i=new Xe,s=new Xe,a=new Ut,o=new Ty,l=new Ey,c={},u=t.maxTextureSize,f={[Ms]:Jn,[Jn]:Ms,[Ji]:Ji},h=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:OE,fragmentShader:FE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const p=new kn;p.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Dt(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let _=this.type;this.render=function(E,x,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Vg&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Uc);const C=r.getRenderTarget(),A=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),D=r.state;D.setBlending(qa),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const V=_!==this.type;V&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=E.length;L<z;L++){const X=E[L],k=X.shadow;if(k===void 0){Fe("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const ne=k.getFrameExtents();i.multiply(ne),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ne.x),i.x=s.x*ne.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ne.y),i.y=s.y*ne.y,k.mapSize.y=s.y));const q=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=q,k.map===null||V===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===zo){if(X.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new xr(i.x,i.y,{format:ra,type:Mr,minFilter:En,magFilter:En,generateMipmaps:!1}),k.map.texture.name=X.name+".shadowMap",k.map.depthTexture=new oo(i.x,i.y,Fi),k.map.depthTexture.name=X.name+".shadowMapDepth",k.map.depthTexture.format=Ss,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=mn,k.map.depthTexture.magFilter=mn}else X.isPointLight?(k.map=new Hf(i.x),k.map.depthTexture=new T_(i.x,yr)):(k.map=new xr(i.x,i.y),k.map.depthTexture=new oo(i.x,i.y,yr)),k.map.depthTexture.name=X.name+".shadowMap",k.map.depthTexture.format=Ss,this.type===Uc?(k.map.depthTexture.compareFunction=q?l_:o_,k.map.depthTexture.minFilter=En,k.map.depthTexture.magFilter=En):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=mn,k.map.depthTexture.magFilter=mn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);const P=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();X.isPointLight!==!0&&k.updateMatrices(X,S);const ie=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:S.layers;for(let Se=0;Se<P;Se++){const ze=k.getCamera(Se);if(X.isPointLight){const Z=k.camera,he=k.matrix,Me=X.distance||Z.far;Me!==Z.far&&(Z.far=Me,Z.updateProjectionMatrix()),No.setFromMatrixPosition(X.matrixWorld),Z.position.copy(No),yh.copy(Z.position),yh.add(BE[Se]),Z.up.copy(kE[Se]),Z.lookAt(yh),Z.updateMatrixWorld(),he.makeTranslation(-No.x,-No.y,-No.z),km.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),k._frustum.setFromProjectionMatrix(km,Z.coordinateSystem,Z.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,Se),r.clear();else{Se===0&&(r.setRenderTarget(k.map),r.clear());const Z=k.getViewport(Se);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),D.viewport(a)}n=k.getFrustum(Se),y(x,S,ze,X,ie,this.type)}k.isPointLightShadow!==!0&&this.type===zo&&v(k,S),k.needsUpdate=!1}_=this.type,m.needsUpdate=!1,r.setRenderTarget(C,A,N)};function v(E,x){const S=e.update(g);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new xr(i.x,i.y,{format:ra,type:Mr}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(x,null,S,h,g,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(x,null,S,d,g,null)}function M(E,x,S,C){let A=null;const N=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)A=N;else if(A=S.isPointLight===!0?l:o,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const D=A.uuid,V=x.uuid;let L=c[D];L===void 0&&(L={},c[D]=L);let z=L[V];z===void 0&&(z=A.clone(),L[V]=z,x.addEventListener("dispose",b)),A=z}if(A.visible=x.visible,A.wireframe=x.wireframe,C===zo?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:f[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const D=r.properties.get(A);D.light=S}return A}function y(E,x,S,C,A,N){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===zo)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const L=e.update(E),z=E.material;if(Array.isArray(z)){const X=L.groups;for(let k=0,ne=X.length;k<ne;k++){const q=X[k],P=z[q.materialIndex];if(P&&P.visible){const ie=M(E,P,C,N);E.onBeforeShadow(r,E,x,S,L,ie,q),r.renderBufferDirect(S,null,L,ie,E,q),E.onAfterShadow(r,E,x,S,L,ie,q)}}}else if(z.visible){const X=M(E,z,C,N);E.onBeforeShadow(r,E,x,S,L,X,null),r.renderBufferDirect(S,null,L,X,E,null),E.onAfterShadow(r,E,x,S,L,X,null)}}const V=E.children;for(let L=0,z=V.length;L<z;L++)y(V[L],x,S,C,A,N)}function b(E){E.target.removeEventListener("dispose",b);for(const S in c){const C=c[S],A=E.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function HE(r,e){function t(){let I=!1;const Q=new Ut;let J=null;const fe=new Ut(0,0,0,0);return{setMask:function(le){J!==le&&!I&&(r.colorMask(le,le,le,le),J=le)},setLocked:function(le){I=le},setClear:function(le,pe,oe,me,se){se===!0&&(le*=me,pe*=me,oe*=me),Q.set(le,pe,oe,me),fe.equals(Q)===!1&&(r.clearColor(le,pe,oe,me),fe.copy(Q))},reset:function(){I=!1,J=null,fe.set(-1,0,0,0)}}}function n(){let I=!1,Q=!1,J=null,fe=null,le=null;return{setReversed:function(pe){if(Q!==pe){const oe=e.get("EXT_clip_control");pe?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),Q=pe;const me=le;le=null,this.setClear(me)}},getReversed:function(){return Q},setTest:function(pe){pe?ge(r.DEPTH_TEST):Ue(r.DEPTH_TEST)},setMask:function(pe){J!==pe&&!I&&(r.depthMask(pe),J=pe)},setFunc:function(pe){if(Q&&(pe=Ev[pe]),fe!==pe){switch(pe){case Yh:r.depthFunc(r.NEVER);break;case $h:r.depthFunc(r.ALWAYS);break;case Kh:r.depthFunc(r.LESS);break;case pl:r.depthFunc(r.LEQUAL);break;case Zh:r.depthFunc(r.EQUAL);break;case Jh:r.depthFunc(r.GEQUAL);break;case Qh:r.depthFunc(r.GREATER);break;case jh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}fe=pe}},setLocked:function(pe){I=pe},setClear:function(pe){le!==pe&&(le=pe,Q&&(pe=1-pe),r.clearDepth(pe))},reset:function(){I=!1,J=null,fe=null,le=null,Q=!1}}}function i(){let I=!1,Q=null,J=null,fe=null,le=null,pe=null,oe=null,me=null,se=null;return{setTest:function(ee){I||(ee?ge(r.STENCIL_TEST):Ue(r.STENCIL_TEST))},setMask:function(ee){Q!==ee&&!I&&(r.stencilMask(ee),Q=ee)},setFunc:function(ee,xe,te){(J!==ee||fe!==xe||le!==te)&&(r.stencilFunc(ee,xe,te),J=ee,fe=xe,le=te)},setOp:function(ee,xe,te){(pe!==ee||oe!==xe||me!==te)&&(r.stencilOp(ee,xe,te),pe=ee,oe=xe,me=te)},setLocked:function(ee){I=ee},setClear:function(ee){se!==ee&&(r.clearStencil(ee),se=ee)},reset:function(){I=!1,Q=null,J=null,fe=null,le=null,pe=null,oe=null,me=null,se=null}}}const s=new t,a=new n,o=new i;let l={};const c=new WeakMap;let u={},f={},h={},d=new WeakMap,p=[],g=null,m=!1,_=null,v=null,M=null,y=null,b=null,E=null,x=null,S=new ke(0,0,0),C=0,A=!1,N=null,D=null,V=null,L=null,z=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ne=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=ne>=2);let P=null,ie={};const Se=r.getParameter(r.SCISSOR_BOX),ze=r.getParameter(r.VIEWPORT),Z=new Ut().fromArray(Se),he=new Ut().fromArray(ze);function Me(I,Q,J,fe){const le=new Uint8Array(4),pe=r.createTexture();r.bindTexture(I,pe),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let oe=0;oe<J;oe++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(Q,0,r.RGBA,1,1,fe,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(Q+oe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return pe}const Te={};Te[r.TEXTURE_2D]=Me(r.TEXTURE_2D,r.TEXTURE_2D,1),Te[r.TEXTURE_CUBE_MAP]=Me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[r.TEXTURE_2D_ARRAY]=Me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Te[r.TEXTURE_3D]=Me(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ge(r.DEPTH_TEST),a.setFunc(pl),K(!1),it(yp),ge(r.CULL_FACE),ft(qa);function ge(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function Ue(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function vt(I,Q){return h[I]!==Q?(r.bindFramebuffer(I,Q),h[I]=Q,I===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Q),I===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Q),!0):!1}function Re(I,Q){let J=p,fe=!1;if(I){J=d.get(Q),J===void 0&&(J=[],d.set(Q,J));const le=I.textures;if(J.length!==le.length||J[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,oe=le.length;pe<oe;pe++)J[pe]=r.COLOR_ATTACHMENT0+pe;J.length=le.length,fe=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,fe=!0);fe&&r.drawBuffers(J)}function We(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const De={[Fa]:r.FUNC_ADD,[Wx]:r.FUNC_SUBTRACT,[Xx]:r.FUNC_REVERSE_SUBTRACT};De[qx]=r.MIN,De[Yx]=r.MAX;const Be={[$x]:r.ZERO,[Kx]:r.ONE,[Zx]:r.SRC_COLOR,[Wg]:r.SRC_ALPHA,[nv]:r.SRC_ALPHA_SATURATE,[ev]:r.DST_COLOR,[Qx]:r.DST_ALPHA,[Jx]:r.ONE_MINUS_SRC_COLOR,[Xg]:r.ONE_MINUS_SRC_ALPHA,[tv]:r.ONE_MINUS_DST_COLOR,[jx]:r.ONE_MINUS_DST_ALPHA,[iv]:r.CONSTANT_COLOR,[rv]:r.ONE_MINUS_CONSTANT_COLOR,[sv]:r.CONSTANT_ALPHA,[av]:r.ONE_MINUS_CONSTANT_ALPHA};function ft(I,Q,J,fe,le,pe,oe,me,se,ee){if(I===qa){m===!0&&(Ue(r.BLEND),m=!1);return}if(m===!1&&(ge(r.BLEND),m=!0),I!==Vx){if(I!==_||ee!==A){if((v!==Fa||b!==Fa)&&(r.blendEquation(r.FUNC_ADD),v=Fa,b=Fa),ee)switch(I){case Qo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mp:r.blendFunc(r.ONE,r.ONE);break;case Sp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case bp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ve("WebGLState: Invalid blending: ",I);break}else switch(I){case Qo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mp:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Sp:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bp:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",I);break}M=null,y=null,E=null,x=null,S.set(0,0,0),C=0,_=I,A=ee}return}le=le||Q,pe=pe||J,oe=oe||fe,(Q!==v||le!==b)&&(r.blendEquationSeparate(De[Q],De[le]),v=Q,b=le),(J!==M||fe!==y||pe!==E||oe!==x)&&(r.blendFuncSeparate(Be[J],Be[fe],Be[pe],Be[oe]),M=J,y=fe,E=pe,x=oe),(me.equals(S)===!1||se!==C)&&(r.blendColor(me.r,me.g,me.b,se),S.copy(me),C=se),_=I,A=!1}function ut(I,Q){I.side===Ji?Ue(r.CULL_FACE):ge(r.CULL_FACE);let J=I.side===Jn;Q&&(J=!J),K(J),I.blending===Qo&&I.transparent===!1?ft(qa):ft(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const fe=I.stencilWrite;o.setTest(fe),fe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ge(r.SAMPLE_ALPHA_TO_COVERAGE):Ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function K(I){N!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),N=I)}function it(I){I!==Hx?(ge(r.CULL_FACE),I!==D&&(I===yp?r.cullFace(r.BACK):I===Gx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ue(r.CULL_FACE),D=I}function tn(I){I!==V&&(k&&r.lineWidth(I),V=I)}function Rt(I,Q,J){I?(ge(r.POLYGON_OFFSET_FILL),(L!==Q||z!==J)&&(L=Q,z=J,a.getReversed()&&(Q=-Q,J=-J),r.polygonOffset(Q,J))):Ue(r.POLYGON_OFFSET_FILL)}function lt(I){I?ge(r.SCISSOR_TEST):Ue(r.SCISSOR_TEST)}function $t(I){I===void 0&&(I=r.TEXTURE0+X-1),P!==I&&(r.activeTexture(I),P=I)}function Qt(I,Q,J){J===void 0&&(P===null?J=r.TEXTURE0+X-1:J=P);let fe=ie[J];fe===void 0&&(fe={type:void 0,texture:void 0},ie[J]=fe),(fe.type!==I||fe.texture!==Q)&&(P!==J&&(r.activeTexture(J),P=J),r.bindTexture(I,Q||Te[I]),fe.type=I,fe.texture=Q)}function B(){const I=ie[P];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function mt(){try{r.compressedTexImage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function ht(){try{r.compressedTexImage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function Ge(){try{r.texSubImage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function de(){try{r.texSubImage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function pt(){try{r.compressedTexSubImage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function Ne(){try{r.compressedTexSubImage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function He(){try{r.texStorage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function R(){try{r.texStorage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function T(){try{r.texImage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function G(){try{r.texImage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function ae(I){return f[I]!==void 0?f[I]:r.getParameter(I)}function re(I,Q){f[I]!==Q&&(r.pixelStorei(I,Q),f[I]=Q)}function ue(I){Z.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Z.copy(I))}function _e(I){he.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),he.copy(I))}function W(I,Q){let J=c.get(Q);J===void 0&&(J=new WeakMap,c.set(Q,J));let fe=J.get(I);fe===void 0&&(fe=r.getUniformBlockIndex(Q,I.name),r.uniformBlockBinding(Q,fe,fe),J.set(I,fe))}function j(I,Q,J){const le=c.get(Q).get(I);l[le]!==J&&(r.bindBufferBase(r.UNIFORM_BUFFER,le,J),l[le]=J)}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},f={},P=null,ie={},h={},l={},d=new WeakMap,p=[],g=null,m=!1,_=null,v=null,M=null,y=null,b=null,E=null,x=null,S=new ke(0,0,0),C=0,A=!1,N=null,D=null,V=null,L=null,z=null,Z.set(0,0,r.canvas.width,r.canvas.height),he.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ge,disable:Ue,bindFramebuffer:vt,drawBuffers:Re,useProgram:We,setBlending:ft,setMaterial:ut,setFlipSided:K,setCullFace:it,setLineWidth:tn,setPolygonOffset:Rt,setScissorTest:lt,activeTexture:$t,bindTexture:Qt,unbindTexture:B,compressedTexImage2D:mt,compressedTexImage3D:ht,texImage2D:T,texImage3D:G,pixelStorei:re,getParameter:ae,updateUBOMapping:W,uniformBlockBinding:j,texStorage2D:He,texStorage3D:R,texSubImage2D:Ge,texSubImage3D:de,compressedTexSubImage2D:pt,compressedTexSubImage3D:Ne,scissor:ue,viewport:_e,reset:ce}}function GE(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap,f=new Set;let h;const d=new WeakMap,p=new Set,g=new FinalizationRegistry(R=>p.delete(R));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,T){return m?new OffscreenCanvas(R,T):yl("canvas")}function v(R,T,G){let ae=1;const re=He(R);if((re.width>G||re.height>G)&&(ae=G/Math.max(re.width,re.height)),ae<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ue=Math.floor(ae*re.width),_e=Math.floor(ae*re.height);h===void 0&&(h=_(ue,_e));const W=T?_(ue,_e):h;return W.width=ue,W.height=_e,W.getContext("2d").drawImage(R,0,0,ue,_e),Fe("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ue+"x"+_e+")."),W}else return"data"in R&&Fe("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function M(R){return R.generateMipmaps}function y(R){r.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(R,T,G,ae,re,ue=!1){if(R!==null){if(r[R]!==void 0)return r[R];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let _e;ae&&(_e=e.get("EXT_texture_norm16"),_e||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=T;if(T===r.RED&&(G===r.FLOAT&&(W=r.R32F),G===r.HALF_FLOAT&&(W=r.R16F),G===r.UNSIGNED_BYTE&&(W=r.R8),G===r.UNSIGNED_SHORT&&_e&&(W=_e.R16_EXT),G===r.SHORT&&_e&&(W=_e.R16_SNORM_EXT)),T===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(W=r.R8UI),G===r.UNSIGNED_SHORT&&(W=r.R16UI),G===r.UNSIGNED_INT&&(W=r.R32UI),G===r.BYTE&&(W=r.R8I),G===r.SHORT&&(W=r.R16I),G===r.INT&&(W=r.R32I)),T===r.RG&&(G===r.FLOAT&&(W=r.RG32F),G===r.HALF_FLOAT&&(W=r.RG16F),G===r.UNSIGNED_BYTE&&(W=r.RG8),G===r.UNSIGNED_SHORT&&_e&&(W=_e.RG16_EXT),G===r.SHORT&&_e&&(W=_e.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(W=r.RG8UI),G===r.UNSIGNED_SHORT&&(W=r.RG16UI),G===r.UNSIGNED_INT&&(W=r.RG32UI),G===r.BYTE&&(W=r.RG8I),G===r.SHORT&&(W=r.RG16I),G===r.INT&&(W=r.RG32I)),T===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(W=r.RGB8UI),G===r.UNSIGNED_SHORT&&(W=r.RGB16UI),G===r.UNSIGNED_INT&&(W=r.RGB32UI),G===r.BYTE&&(W=r.RGB8I),G===r.SHORT&&(W=r.RGB16I),G===r.INT&&(W=r.RGB32I)),T===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(W=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(W=r.RGBA16UI),G===r.UNSIGNED_INT&&(W=r.RGBA32UI),G===r.BYTE&&(W=r.RGBA8I),G===r.SHORT&&(W=r.RGBA16I),G===r.INT&&(W=r.RGBA32I)),T===r.RGB&&(G===r.UNSIGNED_SHORT&&_e&&(W=_e.RGB16_EXT),G===r.SHORT&&_e&&(W=_e.RGB16_SNORM_EXT),G===r.UNSIGNED_INT_5_9_9_9_REV&&(W=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(W=r.R11F_G11F_B10F)),T===r.RGBA){const j=ue?su:nt.getTransfer(re);G===r.FLOAT&&(W=r.RGBA32F),G===r.HALF_FLOAT&&(W=r.RGBA16F),G===r.UNSIGNED_BYTE&&(W=j===bt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT&&_e&&(W=_e.RGBA16_EXT),G===r.SHORT&&_e&&(W=_e.RGBA16_SNORM_EXT),G===r.UNSIGNED_SHORT_4_4_4_4&&(W=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(W=r.RGB5_A1)}return(W===r.R16F||W===r.R32F||W===r.RG16F||W===r.RG32F||W===r.RGBA16F||W===r.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function x(R,T){let G;return R?T===null||T===yr||T===so?G=r.DEPTH24_STENCIL8:T===Fi?G=r.DEPTH32F_STENCIL8:T===gl&&(G=r.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===yr||T===so?G=r.DEPTH_COMPONENT24:T===Fi?G=r.DEPTH_COMPONENT32F:T===gl&&(G=r.DEPTH_COMPONENT16),G}function S(R,T){return M(R)===!0||R.isFramebufferTexture&&R.minFilter!==mn&&R.minFilter!==En?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function C(R){const T=new WeakRef(R);n.get(R).__ref=T,p.add(T),g.register(R,T,T)}function A(R){const T=n.get(R).__ref;T!==void 0&&(p.delete(T),g.unregister(T))}function N(R){V(R.target)}function D(R){L(R.target)}function V(R){R.removeEventListener("dispose",N),A(R),X(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&f.delete(R)}function L(R){R.removeEventListener("dispose",D),A(R),ne(R)}function z(){for(const R of p){const T=R.deref();T!==void 0&&(T.isRenderTarget===!0?L(T):V(T))}p.clear(),f.clear()}function X(R){const T=n.get(R);if(T.__webglInit===void 0)return;const G=R.source,ae=d.get(G);if(ae){const re=ae[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&k(R),Object.keys(ae).length===0&&d.delete(G)}n.remove(R)}function k(R){const T=n.get(R);r.deleteTexture(T.__webglTexture);const G=R.source,ae=d.get(G);delete ae[T.__cacheKey],a.memory.textures--}function ne(R){const T=n.get(R);T.__depthDisposeCallback&&T.__depthDisposeCallback();const G=R.depthTexture;if(G&&G.renderTarget===R&&V(G),R.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(T.__webglFramebuffer[re]))for(let ue=0;ue<T.__webglFramebuffer[re].length;ue++)r.deleteFramebuffer(T.__webglFramebuffer[re][ue]);else r.deleteFramebuffer(T.__webglFramebuffer[re]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[re])}else{if(Array.isArray(T.__webglFramebuffer))for(let re=0;re<T.__webglFramebuffer.length;re++)r.deleteFramebuffer(T.__webglFramebuffer[re]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let re=0;re<T.__webglColorRenderbuffer.length;re++)T.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[re]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ae=R.textures;for(let re=0,ue=ae.length;re<ue;re++){const _e=n.get(ae[re]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(ae[re])}n.remove(R)}let q=0;function P(){q=0}function ie(){return q}function Se(R){q=R}function ze(){const R=q;return R>=i.maxTextures&&Fe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),q+=1,R}function Z(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.mipmapsAutoUpdate),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function he(R,T){const G=n.get(R);if(R.isVideoTexture&&pt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){const ae=R.image;if(ae===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(G,R,T);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+T)}function Me(R,T){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ut(G,R,T);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+T)}function Te(R,T){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ut(G,R,T);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+T)}function ge(R,T){const G=n.get(R);if(R.version>0&&G.__version!==R.version){K(G,R,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+T)}const Ue={[Gr]:r.REPEAT,[fr]:r.CLAMP_TO_EDGE,[tu]:r.MIRRORED_REPEAT},vt={[mn]:r.NEAREST,[jg]:r.NEAREST_MIPMAP_NEAREST,[Ho]:r.NEAREST_MIPMAP_LINEAR,[En]:r.LINEAR,[Oc]:r.LINEAR_MIPMAP_NEAREST,[pr]:r.LINEAR_MIPMAP_LINEAR},Re={[mv]:r.NEVER,[c_]:r.ALWAYS,[gv]:r.LESS,[o_]:r.LEQUAL,[_v]:r.EQUAL,[l_]:r.GEQUAL,[xv]:r.GREATER,[vv]:r.NOTEQUAL};function We(R,T){if(T.type===Fi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===En||T.magFilter===Oc||T.magFilter===Ho||T.magFilter===pr||T.minFilter===En||T.minFilter===Oc||T.minFilter===Ho||T.minFilter===pr)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,Ue[T.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,Ue[T.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,Ue[T.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,vt[T.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,vt[T.minFilter]),T.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Re[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===mn||T.minFilter!==Ho&&T.minFilter!==pr||T.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function De(R,T){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",N),C(T));const ae=T.source;let re=d.get(ae);re===void 0&&(re={},d.set(ae,re));const ue=Z(T);if(ue!==R.__cacheKey){re[ue]===void 0&&(re[ue]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),re[ue].usedTimes++;const _e=re[R.__cacheKey];_e!==void 0&&(re[R.__cacheKey].usedTimes--,_e.usedTimes===0&&k(T)),R.__cacheKey=ue,R.__webglTexture=re[ue].texture}return G}function Be(R,T,G){return Math.floor(Math.floor(R/G)/T)}function ft(R,T,G,ae){const ue=R.updateRanges;if(ue.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,G,ae,T.data);else{ue.sort((I,Q)=>I.start-Q.start);let _e=0;for(let I=1;I<ue.length;I++){const Q=ue[_e],J=ue[I],fe=Q.start+Q.count,le=Be(J.start,T.width,4),pe=Be(Q.start,T.width,4);J.start<=fe+1&&le===pe&&Be(J.start+J.count-1,T.width,4)===le?Q.count=Math.max(Q.count,J.start+J.count-Q.start):(++_e,ue[_e]=J)}ue.length=_e+1;const W=t.getParameter(r.UNPACK_ROW_LENGTH),j=t.getParameter(r.UNPACK_SKIP_PIXELS),ce=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let I=0,Q=ue.length;I<Q;I++){const J=ue[I],fe=Math.floor(J.start/4),le=Math.ceil(J.count/4),pe=fe%T.width,oe=Math.floor(fe/T.width),me=le,se=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(r.UNPACK_SKIP_ROWS,oe),t.texSubImage2D(r.TEXTURE_2D,0,pe,oe,me,se,G,ae,T.data)}R.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,W),t.pixelStorei(r.UNPACK_SKIP_PIXELS,j),t.pixelStorei(r.UNPACK_SKIP_ROWS,ce)}}function ut(R,T,G){let ae=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ae=r.TEXTURE_3D);const re=De(R,T),ue=T.source;t.bindTexture(ae,R.__webglTexture,r.TEXTURE0+G);const _e=n.get(ue);if(ue.version!==_e.__version||re===!0){if(t.activeTexture(r.TEXTURE0+G),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const se=nt.getPrimaries(nt.workingColorSpace),ee=T.colorSpace===ss?null:nt.getPrimaries(T.colorSpace),xe=T.colorSpace===ss||se===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let j=v(T.image,!1,i.maxTextureSize);j=Ne(T,j);const ce=s.convert(T.format,T.colorSpace),I=s.convert(T.type);let Q=E(T.internalFormat,ce,I,T.normalized,T.colorSpace,T.isVideoTexture);We(ae,T);let J;const fe=T.mipmaps,le=T.isVideoTexture!==!0,pe=_e.__version===void 0||re===!0,oe=ue.dataReady,me=S(T,j);if(T.isDepthTexture)Q=x(T.format===os,T.type),pe&&(le?t.texStorage2D(r.TEXTURE_2D,1,Q,j.width,j.height):t.texImage2D(r.TEXTURE_2D,0,Q,j.width,j.height,0,ce,I,null));else if(T.isDataTexture)if(fe.length>0){le&&pe&&t.texStorage2D(r.TEXTURE_2D,me,Q,fe[0].width,fe[0].height);for(let se=0,ee=fe.length;se<ee;se++)J=fe[se],le?oe&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,J.width,J.height,ce,I,J.data):t.texImage2D(r.TEXTURE_2D,se,Q,J.width,J.height,0,ce,I,J.data);T.generateMipmaps=!1}else le?(pe&&t.texStorage2D(r.TEXTURE_2D,me,Q,j.width,j.height),oe&&ft(T,j,ce,I)):t.texImage2D(r.TEXTURE_2D,0,Q,j.width,j.height,0,ce,I,j.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){le&&pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Q,fe[0].width,fe[0].height,j.depth);for(let se=0,ee=fe.length;se<ee;se++)if(J=fe[se],T.format!==ji)if(ce!==null)if(le){if(oe)if(T.layerUpdates.size>0){const xe=xm(J.width,J.height,T.format,T.type);for(const te of T.layerUpdates){const Ee=J.data.subarray(te*xe/J.data.BYTES_PER_ELEMENT,(te+1)*xe/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,te,J.width,J.height,1,ce,Ee)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,J.width,J.height,j.depth,ce,J.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,Q,J.width,J.height,j.depth,0,J.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?oe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,J.width,J.height,j.depth,ce,I,J.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,Q,J.width,J.height,j.depth,0,ce,I,J.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{le&&pe&&t.texStorage2D(r.TEXTURE_2D,me,Q,fe[0].width,fe[0].height);for(let se=0,ee=fe.length;se<ee;se++)J=fe[se],T.format!==ji?ce!==null?le?oe&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,J.width,J.height,ce,J.data):t.compressedTexImage2D(r.TEXTURE_2D,se,Q,J.width,J.height,0,J.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?oe&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,J.width,J.height,ce,I,J.data):t.texImage2D(r.TEXTURE_2D,se,Q,J.width,J.height,0,ce,I,J.data)}else if(T.isDataArrayTexture)if(le){if(pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Q,j.width,j.height,j.depth),oe)if(T.layerUpdates.size>0){const se=xm(j.width,j.height,T.format,T.type);for(const ee of T.layerUpdates){const xe=j.data.subarray(ee*se/j.data.BYTES_PER_ELEMENT,(ee+1)*se/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ee,j.width,j.height,1,ce,I,xe)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ce,I,j.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,ce,I,j.data);else if(T.isData3DTexture)le?(pe&&t.texStorage3D(r.TEXTURE_3D,me,Q,j.width,j.height,j.depth),oe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ce,I,j.data)):t.texImage3D(r.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,ce,I,j.data);else if(T.isFramebufferTexture){if(pe)if(le)t.texStorage2D(r.TEXTURE_2D,me,Q,j.width,j.height);else{let se=j.width,ee=j.height;for(let xe=0;xe<me;xe++)t.texImage2D(r.TEXTURE_2D,xe,Q,se,ee,0,ce,I,null),se>>=1,ee>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){const se=r.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),j.parentNode!==se){se.appendChild(j),f.add(T),se.onpaint=ee=>{const xe=ee.changedElements;for(const te of f)xe.includes(te.image)&&(te.needsUpdate=!0)},se.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,j);else{const xe=r.RGBA,te=r.RGBA,Ee=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,xe,te,Ee,j)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(fe.length>0){if(le&&pe){const se=He(fe[0]);t.texStorage2D(r.TEXTURE_2D,me,Q,se.width,se.height)}for(let se=0,ee=fe.length;se<ee;se++)J=fe[se],le?oe&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,ce,I,J):t.texImage2D(r.TEXTURE_2D,se,Q,ce,I,J);T.generateMipmaps=!1}else if(le){if(pe){const se=He(j);t.texStorage2D(r.TEXTURE_2D,me,Q,se.width,se.height)}oe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ce,I,j)}else t.texImage2D(r.TEXTURE_2D,0,Q,ce,I,j);M(T)&&T.mipmapsAutoUpdate===!0&&y(ae),_e.__version=ue.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function K(R,T,G){if(T.image.length!==6)return;const ae=De(R,T),re=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+G);const ue=n.get(re);if(re.version!==ue.__version||ae===!0){t.activeTexture(r.TEXTURE0+G);const _e=nt.getPrimaries(nt.workingColorSpace),W=T.colorSpace===ss?null:nt.getPrimaries(T.colorSpace),j=T.colorSpace===ss||_e===W?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const ce=T.isCompressedTexture||T.image[0].isCompressedTexture,I=T.image[0]&&T.image[0].isDataTexture,Q=[];for(let te=0;te<6;te++)!ce&&!I?Q[te]=v(T.image[te],!0,i.maxCubemapSize):Q[te]=I?T.image[te].image:T.image[te],Q[te]=Ne(T,Q[te]);const J=Q[0],fe=s.convert(T.format,T.colorSpace),le=s.convert(T.type);let pe=E(T.internalFormat,fe,le,T.normalized,T.colorSpace);const oe=T.isVideoTexture!==!0,me=ue.__version===void 0||ae===!0,se=re.dataReady;let ee=S(T,J);We(r.TEXTURE_CUBE_MAP,T);let xe;if(T.isDepthTexture){if(pe=x(T.format===os,T.type),me)if(oe)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,pe,J.width,J.height);else for(let te=0;te<6;te++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,pe,J.width,J.height,0,fe,le,null)}else if(ce){oe&&me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ee,pe,J.width,J.height);for(let te=0;te<6;te++){xe=Q[te].mipmaps;for(let Ee=0;Ee<xe.length;Ee++){const rt=xe[Ee];T.format!==ji?fe!==null?oe?se&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,rt.width,rt.height,fe,rt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,pe,rt.width,rt.height,0,rt.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,rt.width,rt.height,fe,le,rt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,pe,rt.width,rt.height,0,fe,le,rt.data)}}}else{if(xe=T.mipmaps,oe&&me){xe.length>0&&ee++;const te=He(Q[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ee,pe,te.width,te.height)}for(let te=0;te<6;te++)if(I){oe?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Q[te].width,Q[te].height,fe,le,Q[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,pe,Q[te].width,Q[te].height,0,fe,le,Q[te].data);for(let Ee=0;Ee<xe.length;Ee++){const Ye=xe[Ee].image[te].image;oe?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,Ye.width,Ye.height,fe,le,Ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,pe,Ye.width,Ye.height,0,fe,le,Ye.data)}}else{oe?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,fe,le,Q[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,pe,fe,le,Q[te]);for(let Ee=0;Ee<xe.length;Ee++){const rt=xe[Ee];oe?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,fe,le,rt.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,pe,fe,le,rt.image[te])}}}M(T)&&T.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),ue.__version=re.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function it(R,T,G,ae,re,ue){const _e=s.convert(G.format,G.colorSpace),W=s.convert(G.type),j=E(G.internalFormat,_e,W,G.normalized,G.colorSpace),ce=n.get(T),I=n.get(G);if(I.__renderTarget=T,!ce.__hasExternalTextures){const Q=Math.max(1,T.width>>ue),J=Math.max(1,T.height>>ue);re===r.TEXTURE_3D||re===r.TEXTURE_2D_ARRAY?t.texImage3D(re,ue,j,Q,J,T.depth,0,_e,W,null):t.texImage2D(re,ue,j,Q,J,0,_e,W,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),de(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,re,I.__webglTexture,0,Ge(T)):(re===r.TEXTURE_2D||re>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,re,I.__webglTexture,ue),t.bindFramebuffer(r.FRAMEBUFFER,null)}function tn(R,T,G){if(r.bindRenderbuffer(r.RENDERBUFFER,R),T.depthBuffer){const ae=T.depthTexture,re=ae&&ae.isDepthTexture?ae.type:null,ue=x(T.stencilBuffer,re),_e=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;de(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ge(T),ue,T.width,T.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge(T),ue,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ue,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,R)}else{const ae=T.textures;for(let re=0;re<ae.length;re++){const ue=ae[re],_e=s.convert(ue.format,ue.colorSpace),W=s.convert(ue.type),j=E(ue.internalFormat,_e,W,ue.normalized,ue.colorSpace);de(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ge(T),j,T.width,T.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge(T),j,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,j,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Rt(R,T,G){const ae=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const re=n.get(T.depthTexture);re.__renderTarget=T;const ue=ae?T.depthTexture.image[0]:T.depthTexture.image;(!re.__webglTexture||ue.width!==T.width||ue.height!==T.height)&&(ue.width=T.width,ue.height=T.height,T.depthTexture.needsUpdate=!0),ae?ge(T.depthTexture,0):he(T.depthTexture,0);const _e=re.__webglTexture,W=Ge(T),j=ae?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,ce=T.depthTexture.format===os?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ss)de(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ce,j,_e,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,ce,j,_e,0);else if(T.depthTexture.format===os)de(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ce,j,_e,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,ce,j,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(R){const T=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const ae=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ae){const re=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ae.removeEventListener("dispose",re)};ae.addEventListener("dispose",re),T.__depthDisposeCallback=re}T.__boundDepthTexture=ae}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(G)for(let ae=0;ae<6;ae++)Rt(T.__webglFramebuffer[ae],R,ae);else R.texture.mipmaps.length>0?Rt(T.__webglFramebuffer[0],R,0):Rt(T.__webglFramebuffer,R,0);else if(G){T.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ae]),T.__webglDepthbuffer[ae]===void 0)T.__webglDepthbuffer[ae]=r.createRenderbuffer(),tn(T.__webglDepthbuffer[ae],R,!1);else{const re=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,re,r.RENDERBUFFER,ue)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),tn(T.__webglDepthbuffer,R,!1);else{const re=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,re,r.RENDERBUFFER,ue)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function $t(R,T,G){const ae=n.get(R);T!==void 0&&it(ae.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&lt(R)}function Qt(R){const T=R.texture,G=n.get(R),ae=n.get(T);R.addEventListener("dispose",D),C(R);const re=R.textures,ue=R.isWebGLCubeRenderTarget===!0,_e=re.length>1;if(_e||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=T.version,a.memory.textures++),ue){G.__webglFramebuffer=[];for(let W=0;W<6;W++)if(T.mipmaps.length>0){G.__webglFramebuffer[W]=[];for(let j=0;j<T.mipmaps.length;j++)G.__webglFramebuffer[W][j]=r.createFramebuffer()}else G.__webglFramebuffer[W]=r.createFramebuffer()}else{if(T.mipmaps.length>0){G.__webglFramebuffer=[];for(let W=0;W<T.mipmaps.length;W++)G.__webglFramebuffer[W]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(_e)for(let W=0,j=re.length;W<j;W++){const ce=n.get(re[W]);ce.__webglTexture===void 0&&(ce.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&de(R)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let W=0;W<re.length;W++){const j=re[W];G.__webglColorRenderbuffer[W]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[W]);const ce=s.convert(j.format,j.colorSpace),I=s.convert(j.type),Q=E(j.internalFormat,ce,I,j.normalized,j.colorSpace,R.isXRRenderTarget===!0),J=Ge(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,J,Q,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+W,r.RENDERBUFFER,G.__webglColorRenderbuffer[W])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),tn(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),We(r.TEXTURE_CUBE_MAP,T);for(let W=0;W<6;W++)if(T.mipmaps.length>0)for(let j=0;j<T.mipmaps.length;j++)it(G.__webglFramebuffer[W][j],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+W,j);else it(G.__webglFramebuffer[W],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);M(T)?y(r.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let W=0,j=re.length;W<j;W++){const ce=re[W],I=n.get(ce);let Q=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Q,I.__webglTexture),We(Q,ce),it(G.__webglFramebuffer,R,ce,r.COLOR_ATTACHMENT0+W,Q,0),M(ce)&&y(Q)}t.unbindTexture()}else{let W=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(W=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(W,ae.__webglTexture),We(W,T),T.mipmaps.length>0)for(let j=0;j<T.mipmaps.length;j++)it(G.__webglFramebuffer[j],R,T,r.COLOR_ATTACHMENT0,W,j);else it(G.__webglFramebuffer,R,T,r.COLOR_ATTACHMENT0,W,0);M(T)?y(W):T.mipmaps.length>0&&r.texParameteri(W,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&lt(R)}function B(R){const T=R.textures;for(let G=0,ae=T.length;G<ae;G++){const re=T[G];if(M(re)&&re.mipmapsAutoUpdate===!0){const ue=b(R),_e=n.get(re).__webglTexture;t.bindTexture(ue,_e),y(ue),t.unbindTexture()}}}const mt=[];function ht(R){if(R.samples>0){if(de(R)===!1){const T=R.textures,G=R.width,ae=R.height;let re=r.COLOR_BUFFER_BIT;const ue=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=n.get(R),W=T.length>1;if(W)for(let ce=0;ce<T.length;ce++)t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ce=0;ce<T.length;ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=r.STENCIL_BUFFER_BIT)),W){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_e.__webglColorRenderbuffer[ce]);const I=n.get(T[ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,I,0)}r.blitFramebuffer(0,0,G,ae,0,0,G,ae,re,r.NEAREST),l===!0&&(mt.length=0,mt.push(r.COLOR_ATTACHMENT0+ce),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&mt.push(ue),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),W)for(let ce=0;ce<T.length;ce++){t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,_e.__webglColorRenderbuffer[ce]);const I=n.get(T[ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,I,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const T=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Ge(R){return Math.min(i.maxSamples,R.samples)}function de(R){const T=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function pt(R){const T=a.render.frame;u.get(R)!==T&&(u.set(R,T),R.update())}function Ne(R,T){const G=R.colorSpace,ae=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==hi&&G!==ss&&(nt.getTransfer(G)===bt?(ae!==ji||re!==Si)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",G)),T}function He(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=ze,this.resetTextureUnits=P,this.getTextureUnits=ie,this.setTextureUnits=Se,this.setTexture2D=he,this.setTexture2DArray=Me,this.setTexture3D=Te,this.setTextureCube=ge,this.rebindTextures=$t,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=de,this.dispose=z}function VE(r,e){function t(n,i=ss){let s;const a=nt.getTransfer(i);if(n===Si)return r.UNSIGNED_BYTE;if(n===_f)return r.UNSIGNED_SHORT_4_4_4_4;if(n===xf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===n_)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===i_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===e_)return r.BYTE;if(n===t_)return r.SHORT;if(n===gl)return r.UNSIGNED_SHORT;if(n===gf)return r.INT;if(n===yr)return r.UNSIGNED_INT;if(n===Fi)return r.FLOAT;if(n===Mr)return r.HALF_FLOAT;if(n===r_)return r.ALPHA;if(n===s_)return r.RGB;if(n===ji)return r.RGBA;if(n===Ss)return r.DEPTH_COMPONENT;if(n===os)return r.DEPTH_STENCIL;if(n===vf)return r.RED;if(n===yf)return r.RED_INTEGER;if(n===ra)return r.RG;if(n===Mf)return r.RG_INTEGER;if(n===Sf)return r.RGBA_INTEGER;if(n===Fc||n===Bc||n===kc||n===zc)if(a===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ed||n===td||n===nd||n===id)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ed)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===td)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===id)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rd||n===sd||n===ad||n===od||n===ld||n===nu||n===cd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===rd||n===sd)return a===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ad)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===od)return s.COMPRESSED_R11_EAC;if(n===ld)return s.COMPRESSED_SIGNED_R11_EAC;if(n===nu)return s.COMPRESSED_RG11_EAC;if(n===cd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ud||n===hd||n===dd||n===fd||n===pd||n===md||n===gd||n===_d||n===xd||n===vd||n===yd||n===Md||n===Sd||n===bd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ud)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hd)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dd)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fd)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pd)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===md)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gd)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_d)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xd)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vd)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yd)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Md)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sd)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bd)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Td||n===Ed||n===wd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Td)return a===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ed)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ad||n===Rd||n===iu||n===Cd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ad)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Rd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===iu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===so?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const WE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XE=`
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

}`;class qE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new E_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new sa({vertexShader:WE,fragmentShader:XE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new Ol(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YE extends ha{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null;const g=typeof XRWebGLBinding<"u",m=new qE,_={},v=t.getContextAttributes();let M=null,y=null;const b=[],E=[],x=new Xe;let S=null,C=null;const A=new $n;A.viewport=new Ut;const N=new $n;N.viewport=new Ut;const D=[A,N],V=new $y;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=b[Z];return he===void 0&&(he=new Zu,b[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=b[Z];return he===void 0&&(he=new Zu,b[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=b[Z];return he===void 0&&(he=new Zu,b[Z]=he),he.getHandSpace()};function X(Z){const he=E.indexOf(Z.inputSource);if(he===-1)return;const Me=b[he];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,c||a),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",ne);for(let Z=0;Z<b.length;Z++){const he=E[Z];he!==null&&(E[Z]=null,b[Z].disconnect(he))}L=null,z=null,m.reset();for(const Z in _)delete _[Z];if(e.setRenderTarget(M),d=null,h=null,f=null,i=null,y=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),C!==null){const Z=C.camera;Z.fov=C.fov,Z.zoom=C.zoom,Z.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",k),i.addEventListener("inputsourceschange",ne),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Te=null,ge=null;v.depth&&(ge=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=v.stencil?os:Ss,Te=v.stencil?so:yr);const Ue={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ue),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new xr(h.textureWidth,h.textureHeight,{format:ji,type:Si,depthTexture:new oo(h.textureWidth,h.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new xr(d.framebufferWidth,d.framebufferHeight,{format:ji,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ze.setContext(i),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(Z){for(let he=0;he<Z.removed.length;he++){const Me=Z.removed[he],Te=E.indexOf(Me);Te>=0&&(E[Te]=null,b[Te].disconnect(Me))}for(let he=0;he<Z.added.length;he++){const Me=Z.added[he];let Te=E.indexOf(Me);if(Te===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=E.length){E.push(Me),Te=Ue;break}else if(E[Ue]===null){E[Ue]=Me,Te=Ue;break}if(Te===-1)break}const ge=b[Te];ge&&ge.connect(Me)}}function q(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let he=Z.near,Me=Z.far;m.texture!==null&&(m.depthNear>0&&(he=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),V.near=N.near=A.near=he,V.far=N.far=A.far=Me,(L!==V.near||z!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),L=V.near,z=V.far),V.layers.mask=Z.layers.mask|6,A.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;const Te=Z.parent,ge=V.cameras;q(V,Te);for(let Ue=0;Ue<ge.length;Ue++)q(ge[Ue],Te);V.projectionMatrix.copy(A.projectionMatrix),V.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&Z.isPerspectiveCamera&&(C={camera:Z,fov:Z.fov,zoom:Z.zoom}),P(Z,V,Te)};function P(Z,he,Me){Me===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ao*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(Z){return _[Z]};let ie=null;function Se(Z,he){if(u=he.getViewerPose(c||a),p=he,u!==null){const Me=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Te=!1;Me.length!==V.cameras.length&&(V.cameras.length=0,Te=!0);for(let Re=0;Re<Me.length;Re++){const We=Me[Re];let De=null;if(d!==null)De=d.getViewport(We);else{const ft=f.getViewSubImage(h,We);De=ft.viewport,Re===0&&(e.setRenderTargetTextures(y,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(y))}let Be=D[Re];Be===void 0&&(Be=new $n,Be.layers.enable(Re),Be.viewport=new Ut,D[Re]=Be),Be.matrix.fromArray(We.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(We.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(De.x,De.y,De.width,De.height),Re===0&&(V.matrix.copy(Be.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Te===!0&&V.cameras.push(Be)}const ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){f=n.getBinding();const Re=f.getDepthInformation(Me[0]);Re&&Re.isValid&&Re.texture&&m.init(Re,i.renderState)}if(ge&&ge.includes("camera-access")&&g){e.state.unbindTexture(),f=n.getBinding();for(let Re=0;Re<Me.length;Re++){const We=Me[Re].camera;if(We){let De=_[We];De||(De=new E_,_[We]=De);const Be=f.getCameraImage(We);De.sourceTexture=Be}}}}for(let Me=0;Me<b.length;Me++){const Te=E[Me],ge=b[Me];Te!==null&&ge!==void 0&&ge.update(Te,he,c||a)}ie&&ie(Z,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),p=null}const ze=new I_;ze.setAnimationLoop(Se),this.setAnimationLoop=function(Z){ie=Z},this.dispose=function(){}}}const $E=new qe,G_=new Ke;G_.set(-1,0,0,0,1,0,0,0,1);function KE(r,e){function t(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,A_(r)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function i(m,_,v,M,y){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(m,_):_.isMeshLambertMaterial?(s(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(m,_),f(m,_)):_.isMeshPhongMaterial?(s(m,_),u(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(m,_),h(m,_),_.isMeshPhysicalMaterial&&d(m,_,y)):_.isMeshMatcapMaterial?(s(m,_),p(m,_)):_.isMeshDepthMaterial?s(m,_):_.isMeshDistanceMaterial?(s(m,_),g(m,_)):_.isMeshNormalMaterial?s(m,_):_.isLineBasicMaterial?(a(m,_),_.isLineDashedMaterial&&o(m,_)):_.isPointsMaterial?l(m,_,v,M):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,t(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===Jn&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,t(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===Jn&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,t(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,t(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);const v=e.get(_),M=v.envMap,y=v.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4($E.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(G_),m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,m.aoMapTransform))}function a(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform))}function o(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function l(m,_,v,M){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*v,m.scale.value=M*.5,_.map&&(m.map.value=_.map,t(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function u(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function f(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function h(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function d(m,_,v){m.ior.value=_.ior,_.diffuseRoughness>0&&(m.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Jn&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.retroreflectivity>0&&(m.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,_){_.matcap&&(m.matcap.value=_.matcap)}function g(m,_){const v=e.get(_).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ZE(r,e,t,n){let i={},s={};function a(v,M){const y=M.program;n.uniformBlockBinding(v,y,i[v.id])}function o(v,M){let y=i[v.id];y===void 0&&(p(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",m));const b=M.program;n.updateUBOMapping(v,b);const E=e.render.frame;s[v.id]!==E&&(c(v),s[v.id]=E)}function l(v){const M=r.createBuffer(),y=v.__size,b=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,y,b),r.bindBuffer(r.UNIFORM_BUFFER,null),M}function c(v){const M=i[v.id],y=v.uniforms,b=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let E=0,x=y.length;E<x;E++){const S=y[E];if(Array.isArray(S))for(let C=0,A=S.length;C<A;C++)u(S[C],E,C,b);else u(S,E,0,b)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(v,M,y,b){if(h(v,M,y,b)===!0){const E=v.__offset,x=v.value;if(Array.isArray(x)){let S=0;for(let C=0;C<x.length;C++){const A=x[C],N=g(A,!0);f(A,v.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,v.__data)}}function f(v,M,y){typeof v=="number"||typeof v=="boolean"?M[y]=v:v.isMatrix3?(M[y]=v.elements[0],M[y+1]=v.elements[1],M[y+2]=v.elements[2],M[y+3]=0,M[y+4]=v.elements[3],M[y+5]=v.elements[4],M[y+6]=v.elements[5],M[y+7]=0,M[y+8]=v.elements[6],M[y+9]=v.elements[7],M[y+10]=v.elements[8],M[y+11]=0):ArrayBuffer.isView(v)?M.set(v.subarray(0,M.length-y),y):v.toArray(M,y)}function h(v,M,y,b){const E=v.value,x=M+"_"+y;if(Array.isArray(E)){b[x]===void 0&&(b[x]=[]);const S=b[x];let C=!1;for(let A=0;A<E.length;A++)d(E[A],S,A)===!0&&(C=!0);return C}return d(E,b,x)}function d(v,M,y){if(M[y]===void 0)return typeof v=="number"||typeof v=="boolean"?M[y]=v:ArrayBuffer.isView(v)?M[y]=v.slice():M[y]=v.clone(),!0;{const b=M[y];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return M[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function p(v){const M=v.uniforms;let y=0;const b=16;for(let x=0,S=M.length;x<S;x++){const C=Array.isArray(M[x])?M[x]:[M[x]];for(let A=0,N=C.length;A<N;A++){const D=C[A],V=Array.isArray(D.value)?D.value:[D.value],L=Array.isArray(M[x])||Array.isArray(D.value);let z=y;for(let k=0,ne=V.length;k<ne;k++){const q=V[k],P=g(q,L),ie=y%b,Se=ie%P.boundary,ze=ie+Se;y+=Se,ze!==0&&b-ze<P.storage&&(y+=b-ze),k===0&&(z=y),y+=P.storage}const X=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new X((y-z)/Float32Array.BYTES_PER_ELEMENT),D.__offset=z}}const E=y%b;return E>0&&(y+=b-E),v.__size=y,v.__cache={},this}function g(v,M){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",v),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){const M=v.target;M.removeEventListener("dispose",m),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function _(){for(const v in i)r.deleteBuffer(i[v]);i={},s={}}return{bind:a,update:o,dispose:_}}const JE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ar=null;function QE(){return ar===null&&(ar=new Af(JE,16,16,ra,Mr),ar.name="DFG_LUT",ar.minFilter=En,ar.magFilter=En,ar.wrapS=fr,ar.wrapT=fr,ar.generateMipmaps=!1,ar.needsUpdate=!0),ar}class jE{constructor(e={}){const{canvas:t=bv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Si}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=d,m=new Set([Sf,Mf,yf]),_=new Set([Si,yr,gl,so,_f,xf]),v=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let b=null,E=null;const x=[],S=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1,D=null,V=null,L=null,z=null;this._outputColorSpace=Wt;let X=0,k=0,ne=null,q=-1,P=null;const ie=new Ut,Se=new Ut;let ze=null;const Z=new ke(0);let he=0,Me=t.width,Te=t.height,ge=1,Ue=null,vt=null;const Re=new Ut(0,0,Me,Te),We=new Ut(0,0,Me,Te);let De=!1;const Be=new Ml,ft=new Pf;let ut=!1,K=!1;const it=new qe,tn=new O,Rt=new Ut,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function Qt(){return ne===null?ge:1}let B=n;function mt(w,U){return t.getContext(w,U)}let ht,Ge,de,pt,Ne,He,R,T,G,ae,re,ue,_e,W,j,ce,I,Q,J,fe,le,pe,oe;try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ff}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",te,!1),B===null){const U="webgl2";if(B=mt(U,w),B===null)throw mt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}me()}catch(w){throw t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",te,!1),Ve("WebGLRenderer: "+w.message),w}function me(){ht=new nT(B),ht.init(),le=new VE(B,ht),Ge=new Xb(B,ht,e,le),de=new HE(B,ht),Ge.reversedDepthBuffer&&h&&de.buffers.depth.setReversed(!0),V=B.createFramebuffer(),L=B.createFramebuffer(),z=B.createFramebuffer(),pt=new sT(B),Ne=new AE,He=new GE(B,ht,de,Ne,Ge,le,pt),R=new tT(A),T=new oM(B),pe=new Vb(B,T),G=new iT(B,T,pt,pe),ae=new oT(B,G,T,pe,pt),Q=new aT(B,Ge,He),j=new qb(Ne),re=new wE(A,R,ht,Ge,pe,j),ue=new KE(A,Ne),_e=new CE,W=new UE(ht),I=new Gb(A,R,de,ae,p,l),ce=new zE(A,ae,Ge),oe=new ZE(B,pt,Ge,de),J=new Wb(B,ht,pt),fe=new rT(B,ht,pt),pt.programs=re.programs,A.capabilities=Ge,A.extensions=ht,A.properties=Ne,A.renderLists=_e,A.shadowMap=ce,A.state=de,A.info=pt}g!==Si&&(C=new cT(g,t.width,t.height,o,i,s));const se=new YE(A,B);this.xr=se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(w){w!==void 0&&(ge=w,this.setSize(Me,Te,!1))},this.getSize=function(w){return w.set(Me,Te)},this.setSize=function(w,U,$=!0){if(se.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=w,Te=U,t.width=Math.floor(w*ge),t.height=Math.floor(U*ge),$===!0&&(t.style.width=w+"px",t.style.height=U+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(Me*ge,Te*ge).floor()},this.setDrawingBufferSize=function(w,U,$){Me=w,Te=U,ge=$,t.width=Math.floor(w*$),t.height=Math.floor(U*$),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(g===Si){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ie)},this.getViewport=function(w){return w.copy(Re)},this.setViewport=function(w,U,$,H){w.isVector4?Re.set(w.x,w.y,w.z,w.w):Re.set(w,U,$,H),de.viewport(ie.copy(Re).multiplyScalar(Qt()).round())},this.getScissor=function(w){return w.copy(We)},this.setScissor=function(w,U,$,H){w.isVector4?We.set(w.x,w.y,w.z,w.w):We.set(w,U,$,H),de.scissor(Se.copy(We).multiplyScalar(Qt()).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(w){de.setScissorTest(De=w)},this.setOpaqueSort=function(w){Ue=w},this.setTransparentSort=function(w){vt=w},this.getClearColor=function(w){return w.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,$=!0){let H=0;if(w){let Y=!1;if(ne!==null){const ye=ne.texture.format;Y=m.has(ye)}if(Y){const ye=ne.texture.type,Pe=_.has(ye),ve=I.getClearColor(),we=I.getClearAlpha(),Oe=ve.r,$e=ve.g,at=ve.b;Pe?(v[0]=Oe,v[1]=$e,v[2]=at,v[3]=we,B.clearBufferuiv(B.COLOR,0,v)):(M[0]=Oe,M[1]=$e,M[2]=at,M[3]=we,B.clearBufferiv(B.COLOR,0,M))}else H|=B.COLOR_BUFFER_BIT}U&&(H|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(H|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",te,!1),I.dispose(),_e.dispose(),W.dispose(),He.dispose(),Ne.dispose(),R.dispose(),ae.dispose(),G.dispose(),pe.dispose(),oe.dispose(),re.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ct),se.removeEventListener("sessionend",_t),un.stop()};function ee(w){w.preventDefault(),au("WebGLRenderer: Context Lost."),N=!0}function xe(){au("WebGLRenderer: Context Restored."),N=!1;const w=pt.autoReset,U=ce.enabled,$=ce.autoUpdate,H=ce.needsUpdate,Y=ce.type;me(),pt.autoReset=w,ce.enabled=U,ce.autoUpdate=$,ce.needsUpdate=H,ce.type=Y}function te(w){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ee(w){const U=w.target;U.removeEventListener("dispose",Ee),rt(U)}function rt(w){Ye(w),Ne.remove(w)}function Ye(w){const U=Ne.get(w).programs;U!==void 0&&(U.forEach(function($){re.releaseProgram($)}),w.isShaderMaterial&&re.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,$,H,Y,ye){U===null&&(U=lt);const Pe=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,ve=Pi(w,U,$,H,Y);de.setMaterial(H,Pe);let we=$.index,Oe=1;if(H.wireframe===!0){if(we=G.getWireframeAttribute($),we===void 0)return;Oe=2}const $e=$.drawRange,at=$.attributes.position;let Le=$e.start*Oe,ot=($e.start+$e.count)*Oe;ye!==null&&(Le=Math.max(Le,ye.start*Oe),ot=Math.min(ot,(ye.start+ye.count)*Oe)),we!==null?(Le=Math.max(Le,0),ot=Math.min(ot,we.count)):at!=null&&(Le=Math.max(Le,0),ot=Math.min(ot,at.count));const sn=ot-Le;if(sn<0||sn===1/0)return;pe.setup(Y,H,ve,$,we);let Nt,Lt=J;if(we!==null&&(Nt=T.get(we),Lt=fe,Lt.setIndex(Nt)),Y.isMesh)H.wireframe===!0?(de.setLineWidth(H.wireframeLinewidth*Qt()),Lt.setMode(B.LINES)):Lt.setMode(B.TRIANGLES);else if(Y.isLine){let Cn=H.linewidth;Cn===void 0&&(Cn=1),de.setLineWidth(Cn*Qt()),Y.isLineSegments?Lt.setMode(B.LINES):Y.isLineLoop?Lt.setMode(B.LINE_LOOP):Lt.setMode(B.LINE_STRIP)}else Y.isPoints?Lt.setMode(B.POINTS):Y.isSprite&&Lt.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Lt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Cn=Y._multiDrawStarts,Ie=Y._multiDrawCounts,zn=Y._multiDrawCount,gt=we?T.get(we).bytesPerElement:1,Rs=Ne.get(H).currentProgram.getUniforms();for(let Pn=0;Pn<zn;Pn++)Rs.setValue(B,"_gl_DrawID",Pn),Lt.render(Cn[Pn]/gt,Ie[Pn])}else if(Y.isInstancedMesh)Lt.renderInstances(Le,sn,Y.count);else if($.isInstancedBufferGeometry){const Cn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ie=Math.min($.instanceCount,Cn);Lt.renderInstances(Le,sn,Ie)}else Lt.render(Le,sn)};function Ot(w,U,$,H){D!==null&&w.isNodeMaterial&&D.setObject(H,w),ut===!0&&j.setState(w,$,!1),w.transparent===!0&&w.side===Ji&&w.forceSinglePass===!1?(w.side=Jn,w.needsUpdate=!0,pi(w,U,H),w.side=Ms,w.needsUpdate=!0,pi(w,U,H),w.side=Ji):pi(w,U,H)}this.compile=function(w,U,$=null){$===null&&($=w),D!==null&&D.renderStart(w,U,$),E=W.get($),E.init(U),S.push(E),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),w!==$&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),K=this.localClippingEnabled,ut=j.init(this.clippingPlanes,K),ut===!0&&j.setGlobalState(this.clippingPlanes,U),D!==null&&ce.render(E.state.shadowsArray,$,U);const H=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ye=Y.material;if(ye)if(Array.isArray(ye))for(let Pe=0;Pe<ye.length;Pe++){const ve=ye[Pe];Ot(ve,$,U,Y),H.add(ve)}else Ot(ye,$,U,Y),H.add(ye)}),E=S.pop(),D!==null&&D.renderEnd(),H},this.compileAsync=function(w,U,$=null){const H=this.compile(w,U,$);return new Promise(Y=>{function ye(){if(H.forEach(function(Pe){const we=Ne.get(Pe).currentProgram;(we===void 0||we.isReady())&&H.delete(Pe)}),H.size===0){Y(w);return}setTimeout(ye,10)}ht.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let nn=null;function Ft(w){nn&&nn(w)}function Ct(){un.stop()}function _t(){un.start()}const un=new I_;un.setAnimationLoop(Ft),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(w){nn=w,se.setAnimationLoop(w),w===null?un.stop():un.start()},se.addEventListener("sessionstart",Ct),se.addEventListener("sessionend",_t),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(w,U);const $=se.enabled===!0&&se.isPresenting===!0,H=C!==null&&(ne===null||$)&&C.begin(A,ne);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(U),U=se.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,U,ne),E=W.get(w,S.length),E.init(U),E.state.textureUnits=He.getTextureUnits(),S.push(E),it.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ft.setFromArrayCamera(U):Be.setFromProjectionMatrix(it,er,U.reversedDepth),K=this.localClippingEnabled,ut=j.init(this.clippingPlanes,K),b=_e.get(w,x.length),b.init(),x.push(b),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){const Pe=A.xr.getDepthSensingMesh();Pe!==null&&Pt(Pe,U,-1/0,A.sortObjects)}Pt(w,U,0,A.sortObjects),b.finish(),D!==null&&D.updateLights(E.state.lightsArray),A.sortObjects===!0&&b.sort(Ue,vt),$t=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,$t&&I.addToRenderList(b,w),this.info.autoReset===!0&&this.info.reset(),ut===!0&&j.beginShadows();const Y=E.state.shadowsArray;if(ce.render(Y,w,U),ut===!0&&j.endShadows(),(H&&C.hasRenderPass())===!1){const Pe=b.opaque,ve=b.transmissive;if(E.setupLights(),U.isArrayCamera){const we=U.cameras;if(ve.length>0)for(let Oe=0,$e=we.length;Oe<$e;Oe++){const at=we[Oe];fi(Pe,ve,w,at)}$t&&I.render(w);for(let Oe=0,$e=we.length;Oe<$e;Oe++){const at=we[Oe];Rn(b,w,at,at.viewport)}}else ve.length>0&&fi(Pe,ve,w,U),$t&&I.render(w),Rn(b,w,U)}ne!==null&&k===0&&(He.updateMultisampleRenderTarget(ne),He.updateRenderTargetMipmap(ne)),H&&C.end(A),w.isScene===!0&&w.onAfterRender(A,w,U),pe.resetDefaultState(),q=-1,P=null,S.pop(),S.length>0?(E=S[S.length-1],He.setTextureUnits(E.state.textureUnits),ut===!0&&j.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?b=x[x.length-1]:b=null,D!==null&&D.renderEnd()};function Pt(w,U,$,H){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){const Pe=U.isArrayCamera?ft:Be;if(!w.frustumCulled||w.intersectsFrustum(Pe)){H&&Rt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(it);const ve=ae.update(w),we=w.material;we.visible&&b.push(w,ve,we,$,Rt.z,null,U)}}else if(w.isMesh||w.isLine||w.isPoints){const Pe=U.isArrayCamera?ft:Be;if(!w.frustumCulled||w.intersectsFrustum(Pe)){const ve=ae.update(w),we=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Rt.copy(w.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Rt.copy(ve.boundingSphere.center)),Rt.applyMatrix4(w.matrixWorld).applyMatrix4(it)),Array.isArray(we)){const Oe=ve.groups;for(let $e=0,at=Oe.length;$e<at;$e++){const Le=Oe[$e],ot=we[Le.materialIndex];ot&&ot.visible&&b.push(w,ve,ot,$,Rt.z,Le,U)}}else we.visible&&b.push(w,ve,we,$,Rt.z,null,U)}}}const ye=w.children;for(let Pe=0,ve=ye.length;Pe<ve;Pe++)Pt(ye[Pe],U,$,H)}function Rn(w,U,$,H){const{opaque:Y,transmissive:ye,transparent:Pe}=w;E.setupLightsView($),ut===!0&&j.setGlobalState(A.clippingPlanes,$),H&&de.viewport(ie.copy(H)),Y.length>0&&Kt(Y,U,$),ye.length>0&&Kt(ye,U,$),Pe.length>0&&Kt(Pe,U,$),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function fi(w,U,$,H){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){const Le=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new xr(1,1,{generateMipmaps:!0,type:Le?Mr:Si,minFilter:pr,samples:Math.max(4,Ge.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const ye=E.state.transmissionRenderTarget[H.id],Pe=H.viewport||ie;ye.setSize(Pe.z*A.transmissionResolutionScale,Pe.w*A.transmissionResolutionScale);const ve=A.getRenderTarget(),we=A.getActiveCubeFace(),Oe=A.getActiveMipmapLevel();A.setRenderTarget(ye),A.getClearColor(Z),he=A.getClearAlpha(),he<1&&A.setClearColor(16777215,.5),A.clear(),$t&&I.render($);const $e=A.toneMapping;A.toneMapping=Hr;const at=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),ut===!0&&j.setGlobalState(A.clippingPlanes,H),Kt(w,$,H),He.updateMultisampleRenderTarget(ye),He.updateRenderTargetMipmap(ye),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let ot=0,sn=U.length;ot<sn;ot++){const Nt=U[ot],{object:Lt,geometry:Cn,material:Ie,group:zn}=Nt;if(Ie.side===Ji&&Lt.layers.test(H.layers)){const gt=Ie.side;Ie.side=Jn,Ie.needsUpdate=!0,rn(Lt,$,H,Cn,Ie,zn),Ie.side=gt,Ie.needsUpdate=!0,Le=!0}}Le===!0&&(He.updateMultisampleRenderTarget(ye),He.updateRenderTargetMipmap(ye))}A.setRenderTarget(ve,we,Oe),A.setClearColor(Z,he),at!==void 0&&(H.viewport=at),A.toneMapping=$e}function Kt(w,U,$){const H=U.isScene===!0?U.overrideMaterial:null;for(let Y=0,ye=w.length;Y<ye;Y++){const Pe=w[Y],{object:ve,geometry:we,group:Oe}=Pe;let $e=Pe.material;$e.allowOverride===!0&&H!==null&&($e=H),ve.layers.test($.layers)&&rn(ve,U,$,we,$e,Oe)}}function rn(w,U,$,H,Y,ye){D!==null&&Y.isNodeMaterial&&D.setObject(w,Y),w.onBeforeRender(A,U,$,H,Y,ye),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(A,U,$,H,w,ye),Y.transparent===!0&&Y.side===Ji&&Y.forceSinglePass===!1?(Y.side=Jn,Y.needsUpdate=!0,A.renderBufferDirect($,U,H,Y,w,ye),Y.side=Ms,Y.needsUpdate=!0,A.renderBufferDirect($,U,H,Y,w,ye),Y.side=Ji):A.renderBufferDirect($,U,H,Y,w,ye),w.onAfterRender(A,U,$,H,Y,ye)}function hn(w){let U=0;for(const $ of w)$.texture!==null&&U++;return U}function pi(w,U,$){U.isScene!==!0&&(U=lt);const H=Ne.get(w),Y=E.state.lights,ye=E.state.shadowsArray,Pe=Y.state.version,ve=re.getParameters(w,Y.state,ye,U,$,E.state.lightProbeGridArray),we=re.getProgramCacheKey(ve);let Oe=H.programs;H.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;const $e=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;H.envMap=R.get(w.envMap||H.environment,$e),H.envMapRotation=H.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",Ee),Oe=new Map,H.programs=Oe,H.programVariants=new Map);let at=Oe.get(we);if(at!==void 0){if(H.currentProgram===at&&H.lightsStateVersion===Pe)return Zt(w,ve),at}else ve.uniforms=re.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,$,ve),w.onBeforeCompile(ve,A),at=re.acquireProgram(ve,we),Oe.set(we,at),H.uniforms=ve.uniforms;const Le=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=j.uniform),Zt(w,ve),H.needsLights=Gl(w),H.lightsStateVersion=Pe,H.needsLights&&(Le.ambientLightColor.value=Y.state.ambient,Le.lightProbe.value=Y.state.probe,Le.sunLights.value=Y.state.sun,Le.sunLightShadows.value=Y.state.sunShadow,Le.directionalLights.value=Y.state.directional,Le.directionalLightShadows.value=Y.state.directionalShadow,Le.spotLights.value=Y.state.spot,Le.spotLightShadows.value=Y.state.spotShadow,Le.rectAreaLights.value=Y.state.rectArea,Le.ltc_1.value=Y.state.rectAreaLTC1,Le.ltc_2.value=Y.state.rectAreaLTC2,Le.pointLights.value=Y.state.point,Le.pointLightShadows.value=Y.state.pointShadow,Le.hemisphereLights.value=Y.state.hemi,Le.sunShadowMatrix.value=Y.state.sunShadowMatrix,Le.sunShadowCascade.value=Y.state.sunShadowCascade,Le.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Le.spotLightMatrix.value=Y.state.spotLightMatrix,Le.spotLightMap.value=Y.state.spotLightMap,Le.pointShadowMatrix.value=Y.state.pointShadowMatrix),H.numLightProbeGrids=hn(E.state.lightProbeGridArray),H.currentProgram=at,H.uniformsList=null,at}function pa(w,U,$,H,Y){const ye=Ne.get(w),Pe=ye.currentProgram.id+","+H+","+Y;let ve=ye.programVariants.get(Pe);return ve===void 0?(ve=pi(w,U,$),ye.programVariants.set(Pe,ve)):(ye.currentProgram=ve,ye.uniformsList=null,ye.outputColorSpace=H,ye.toneMapping=Y),ve}function dn(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Hc.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Zt(w,U){const $=Ne.get(w);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function Pi(w,U,$,H,Y){U.isScene!==!0&&(U=lt),He.resetTextureUnits();const ye=U.fog,Pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,ve=ne===null?A.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:nt.workingColorSpace,we=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Oe=R.get(H.envMap||Pe,we),$e=H.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,at=!!$.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Le=!!$.morphAttributes.position,ot=!!$.morphAttributes.normal,sn=!!$.morphAttributes.color;let Nt=Hr;H.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Nt=A.toneMapping);const Lt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Cn=Lt!==void 0?Lt.length:0,Ie=Ne.get(H),zn=E.state.lights;if(ut===!0&&(K===!0||w!==P)){const zt=w===P&&H.id===q;j.setState(H,w,zt)}let gt=!1,Rs=!1;H.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==zn.state.version||Y.isBatchedMesh&&Ie.batching===!1||!Y.isBatchedMesh&&Ie.batching===!0||Y.isBatchedMesh&&Ie.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ie.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ie.instancing===!1||!Y.isInstancedMesh&&Ie.instancing===!0||Y.isSkinnedMesh&&Ie.skinning===!1||!Y.isSkinnedMesh&&Ie.skinning===!0||Y.isInstancedMesh&&Ie.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ie.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ie.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ie.instancingMorph===!1&&Y.morphTexture!==null||Ie.envMap!==Oe||H.fog===!0&&Ie.fog!==ye||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==j.numPlanes||Ie.numIntersection!==j.numIntersection)||Ie.vertexAlphas!==$e||Ie.vertexTangents!==at||Ie.morphTargets!==Le||Ie.morphNormals!==ot||Ie.morphColors!==sn||Ie.morphTargetsCount!==Cn||Ie.numLightProbeGrids!==hn(E.state.lightProbeGridArray)?gt=!0:(Ie.outputColorSpace!==ve||Ie.toneMapping!==Nt)&&(Rs=!0):(gt=!0,Ie.__version=H.version);let Pn=Ie.currentProgram;(gt===!0||Rs===!0)&&(Pn=Rs===!0?pa(H,U,Y,ve,Nt):pi(H,U,Y),D&&H.isNodeMaterial&&D.onUpdateProgram(H,Pn,Ie));let Vl=!1,$r=!1,Cs=!1;const dt=Pn.getUniforms(),Tn=Ie.uniforms;if(de.useProgram(Pn.program)&&(Vl=!0,$r=!0,Cs=!0),H.id!==q&&(q=H.id,$r=!0),Vl||P!==w){de.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),dt.setValue(B,"projectionMatrix",w.projectionMatrix),dt.setValue(B,"viewMatrix",w.matrixWorldInverse);const vn=dt.map.cameraPosition;vn!==void 0&&vn.setValue(B,tn.setFromMatrixPosition(w.matrixWorld)),Ge.logarithmicDepthBuffer&&dt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&dt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),P!==w&&(P=w,$r=!0,Cs=!0)}if(Ie.needsLights&&(zn.state.sunShadowMap.length>0&&dt.setValue(B,"sunShadowMap",zn.state.sunShadowMap,He),zn.state.directionalShadowMap.length>0&&dt.setValue(B,"directionalShadowMap",zn.state.directionalShadowMap,He),zn.state.spotShadowMap.length>0&&dt.setValue(B,"spotShadowMap",zn.state.spotShadowMap,He),zn.state.pointShadowMap.length>0&&dt.setValue(B,"pointShadowMap",zn.state.pointShadowMap,He)),Y.isSkinnedMesh){dt.setOptional(B,Y,"bindMatrix"),dt.setOptional(B,Y,"bindMatrixInverse");const zt=Y.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),dt.setValue(B,"boneTexture",zt.boneTexture,He))}Y.isBatchedMesh&&(dt.setOptional(B,Y,"batchingTexture"),dt.setValue(B,"batchingTexture",Y._matricesTexture,He),dt.setOptional(B,Y,"batchingIdTexture"),dt.setValue(B,"batchingIdTexture",Y._indirectTexture,He),dt.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&dt.setValue(B,"batchingColorTexture",Y._colorsTexture,He));const Wi=$.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&Q.update(Y,$,Pn),($r||Ie.receiveShadow!==Y.receiveShadow)&&(Ie.receiveShadow=Y.receiveShadow,dt.setValue(B,"receiveShadow",Y.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(Tn.envMapIntensity.value=U.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=QE()),$r){if(dt.setValue(B,"toneMappingExposure",A.toneMappingExposure),Ie.needsLights&&Eo(Tn,Cs),ye&&H.fog===!0&&ue.refreshFogUniforms(Tn,ye),ue.refreshMaterialUniforms(Tn,H,ge,Te,E.state.transmissionRenderTarget[w.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){const zt=y;let vn=0;for(const Ar of E.state.lightProbeGridArray)Ar.texture!==null&&(zt.textures[vn]=Ar.texture,zt.min[vn]=Ar.boundingBox.min,zt.max[vn]=Ar.boundingBox.max,zt.resolution[vn]=Ar.resolution,vn++);for(const Ar in zt)zt[Ar].length=vn;Tn.probesSH.value=zt.textures,Tn.probesMin.value=zt.min,Tn.probesMax.value=zt.max,Tn.probesResolution.value=zt.resolution}Hc.upload(B,dn(Ie),Tn,He)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Hc.upload(B,dn(Ie),Tn,He),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&dt.setValue(B,"center",Y.center),dt.setValue(B,"modelViewMatrix",Y.modelViewMatrix),dt.setValue(B,"normalMatrix",Y.normalMatrix),dt.setValue(B,"modelMatrix",Y.matrixWorld),H.uniformsGroups!==void 0){const zt=H.uniformsGroups;for(let vn=0,Ar=zt.length;vn<Ar;vn++){const vp=zt[vn];oe.update(vp,Pn),oe.bind(vp,Pn)}}return Pn}function Eo(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Gl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(w,U,$){const H=Ne.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Ne.get(w.texture).__webglTexture=U,Ne.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:$,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){const $=Ne.get(w);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,$=0){ne=w,X=U,k=$;let H=null,Y=!1,ye=!1;if(w){const ve=Ne.get(w);if(ve.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(B.FRAMEBUFFER,ve.__webglFramebuffer),ie.copy(w.viewport),Se.copy(w.scissor),ze=w.scissorTest,de.viewport(ie),de.scissor(Se),de.setScissorTest(ze),q=-1;return}else if(ve.__webglFramebuffer===void 0)He.setupRenderTarget(w);else if(ve.__hasExternalTextures)He.rebindTextures(w,Ne.get(w.texture).__webglTexture,Ne.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const $e=w.depthTexture;if(ve.__boundDepthTexture!==$e){if($e!==null&&Ne.has($e)&&(w.width!==$e.image.width||w.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(w)}}const we=w.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ye=!0);const Oe=Ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?H=Oe[U][$]:H=Oe[U],Y=!0):w.samples>0&&He.useMultisampledRTT(w)===!1?H=Ne.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?H=Oe[$]:H=Oe,ie.copy(w.viewport),Se.copy(w.scissor),ze=w.scissorTest}else ie.copy(Re).multiplyScalar(ge).floor(),Se.copy(We).multiplyScalar(ge).floor(),ze=De;if($!==0&&(H=V),de.bindFramebuffer(B.FRAMEBUFFER,H)&&de.drawBuffers(w,H),de.viewport(ie),de.scissor(Se),de.setScissorTest(ze),Y){const ve=Ne.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,$)}else if(ye){const ve=U;for(let we=0;we<w.textures.length;we++){const Oe=Ne.get(w.textures[we]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+we,Oe.__webglTexture,$,ve)}}else if(w!==null&&$!==0){const ve=Ne.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ve.__webglTexture,$)}q=-1};function Yr(w){const U=Ne.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=Ge.textureFormatReadable(w.format),U.__typeReadable=Ge.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,$,H,Y,ye,Pe,ve=0){if(!(w&&w.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(we=we[Pe],Array.isArray(we)&&(we=we[0])),we){de.bindFramebuffer(B.FRAMEBUFFER,we);try{const Oe=w.textures[ve],$e=Oe.format,at=Oe.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ve);const Le=Yr(Oe);if(Le.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-H&&$>=0&&$<=w.height-Y&&B.readPixels(U,$,H,Y,le.convert($e),le.convert(at),ye)}finally{const Oe=ne!==null?Ne.get(ne).__webglFramebuffer:null;de.bindFramebuffer(B.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(w,U,$,H,Y,ye,Pe,ve=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(we=we[Pe],Array.isArray(we)&&(we=we[0])),we)if(U>=0&&U<=w.width-H&&$>=0&&$<=w.height-Y){de.bindFramebuffer(B.FRAMEBUFFER,we);const Oe=w.textures[ve],$e=Oe.format,at=Oe.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ve);const Le=Yr(Oe);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ot),B.bufferData(B.PIXEL_PACK_BUFFER,ye.byteLength,B.STREAM_READ),B.readPixels(U,$,H,Y,le.convert($e),le.convert(at),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const sn=ne!==null?Ne.get(ne).__webglFramebuffer:null;de.bindFramebuffer(B.FRAMEBUFFER,sn);const Nt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Tv(B,Nt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ot),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ye),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ot),B.deleteSync(Nt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,$=0){const H=Math.pow(2,-$),Y=Math.floor(w.image.width*H),ye=Math.floor(w.image.height*H),Pe=U!==null?U.x:0,ve=U!==null?U.y:0;He.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,Pe,ve,Y,ye),de.unbindTexture()},this.copyTextureToTexture=function(w,U,$=null,H=null,Y=0,ye=0){let Pe,ve,we,Oe,$e,at,Le,ot,sn;const Nt=w.isCompressedTexture?w.mipmaps[ye]:w.image;if($!==null)Pe=$.max.x-$.min.x,ve=$.max.y-$.min.y,we=$.isBox3?$.max.z-$.min.z:1,Oe=$.min.x,$e=$.min.y,at=$.isBox3?$.min.z:0;else{const dt=Math.pow(2,-Y);Pe=Math.floor(Nt.width*dt),ve=Math.floor(Nt.height*dt),w.isDataArrayTexture?we=Nt.depth:w.isData3DTexture?we=Math.floor(Nt.depth*dt):we=1,Oe=0,$e=0,at=0}H!==null?(Le=H.x,ot=H.y,sn=H.z):(Le=0,ot=0,sn=0);const Lt=le.convert(U.format),Cn=le.convert(U.type);let Ie;U.isData3DTexture?(He.setTexture3D(U,0),Ie=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(He.setTexture2DArray(U,0),Ie=B.TEXTURE_2D_ARRAY):(He.setTexture2D(U,0),Ie=B.TEXTURE_2D),de.activeTexture(B.TEXTURE0),de.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),de.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),de.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);const zn=de.getParameter(B.UNPACK_ROW_LENGTH),gt=de.getParameter(B.UNPACK_IMAGE_HEIGHT),Rs=de.getParameter(B.UNPACK_SKIP_PIXELS),Pn=de.getParameter(B.UNPACK_SKIP_ROWS),Vl=de.getParameter(B.UNPACK_SKIP_IMAGES);de.pixelStorei(B.UNPACK_ROW_LENGTH,Nt.width),de.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt.height),de.pixelStorei(B.UNPACK_SKIP_PIXELS,Oe),de.pixelStorei(B.UNPACK_SKIP_ROWS,$e),de.pixelStorei(B.UNPACK_SKIP_IMAGES,at);const $r=w.isDataArrayTexture||w.isData3DTexture,Cs=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const dt=Ne.get(w),Tn=Ne.get(U),Wi=Ne.get(dt.__renderTarget),zt=Ne.get(Tn.__renderTarget);de.bindFramebuffer(B.READ_FRAMEBUFFER,Wi.__webglFramebuffer),de.bindFramebuffer(B.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let vn=0;vn<we;vn++)$r&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ne.get(w).__webglTexture,Y,at+vn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ne.get(U).__webglTexture,ye,sn+vn)),B.blitFramebuffer(Oe,$e,Oe+Pe,$e+ve,Le,ot,Le+Pe,ot+ve,B.DEPTH_BUFFER_BIT,B.NEAREST);de.bindFramebuffer(B.READ_FRAMEBUFFER,null),de.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||Ne.has(w)){const dt=Ne.get(w),Tn=Ne.get(U);de.bindFramebuffer(B.READ_FRAMEBUFFER,L),de.bindFramebuffer(B.DRAW_FRAMEBUFFER,z);for(let Wi=0;Wi<we;Wi++)$r?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,dt.__webglTexture,Y,at+Wi):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,dt.__webglTexture,Y),Cs?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Tn.__webglTexture,ye,sn+Wi):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Tn.__webglTexture,ye),Y!==0?B.blitFramebuffer(Oe,$e,Oe+Pe,$e+ve,Le,ot,Le+Pe,ot+ve,B.COLOR_BUFFER_BIT,B.NEAREST):Cs?B.copyTexSubImage3D(Ie,ye,Le,ot,sn+Wi,Oe,$e,Pe,ve):B.copyTexSubImage2D(Ie,ye,Le,ot,Oe,$e,Pe,ve);de.bindFramebuffer(B.READ_FRAMEBUFFER,null),de.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Cs?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(Ie,ye,Le,ot,sn,Pe,ve,we,Lt,Cn,Nt.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(Ie,ye,Le,ot,sn,Pe,ve,we,Lt,Nt.data):B.texSubImage3D(Ie,ye,Le,ot,sn,Pe,ve,we,Lt,Cn,Nt):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ye,Le,ot,Pe,ve,Lt,Cn,Nt.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ye,Le,ot,Nt.width,Nt.height,Lt,Nt.data):B.texSubImage2D(B.TEXTURE_2D,ye,Le,ot,Pe,ve,Lt,Cn,Nt);de.pixelStorei(B.UNPACK_ROW_LENGTH,zn),de.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gt),de.pixelStorei(B.UNPACK_SKIP_PIXELS,Rs),de.pixelStorei(B.UNPACK_SKIP_ROWS,Pn),de.pixelStorei(B.UNPACK_SKIP_IMAGES,Vl),ye===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&B.generateMipmap(Ie),de.unbindTexture()},this.initRenderTarget=function(w){Ne.get(w).__webglFramebuffer===void 0&&He.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?He.setTextureCube(w,0):w.isData3DTexture?He.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?He.setTexture2DArray(w,0):He.setTexture2D(w,0),de.unbindTexture()},this.resetState=function(){X=0,k=0,ne=null,de.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class ew extends g_{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new yo;e.deleteAttribute("uv");const t=new uo({side:Jn}),n=new uo,i=new L_(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new Dt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Cf(e,n,6),o=new At;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new Dt(e,Ca(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Dt(e,Ca(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new Dt(e,Ca(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const f=new Dt(e,Ca(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const h=new Dt(e,Ca(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const d=new Dt(e,Ca(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ca(r){return new by({color:0,emissive:16777215,emissiveIntensity:r})}function zm(r,e){if(e===hv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Pd||e===a_){let t=r.getIndex();if(t===null){const s=[],a=r.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Pd)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function tw(r){const e=new Map,t=new Map,n=r.clone();return V_(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function V_(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)V_(r.children[n],e.children[n],t)}class nw extends da{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ow(t)}),this.register(function(t){return new lw(t)}),this.register(function(t){return new cw(t)}),this.register(function(t){return new xw(t)}),this.register(function(t){return new vw(t)}),this.register(function(t){return new yw(t)}),this.register(function(t){return new hw(t)}),this.register(function(t){return new dw(t)}),this.register(function(t){return new fw(t)}),this.register(function(t){return new pw(t)}),this.register(function(t){return new aw(t)}),this.register(function(t){return new mw(t)}),this.register(function(t){return new uw(t)}),this.register(function(t){return new _w(t)}),this.register(function(t){return new gw(t)}),this.register(function(t){return new rw(t)}),this.register(function(t){return new Hm(t,tt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Hm(t,tt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Mw(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=ps.extractUrlBase(e);a=ps.resolveURL(c,this.path)}else a=ps.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new hu(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===W_){try{a[tt.KHR_BINARY_GLTF]=new Sw(e)}catch(f){i&&i(f);return}s=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Uw(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case tt.KHR_MATERIALS_UNLIT:a[f]=new sw;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[f]=new bw(s,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[f]=new Tw;break;case tt.KHR_MESH_QUANTIZATION:a[f]=new Ew;break;default:h.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function iw(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Yt(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class rw{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new ke(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],hi);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Bf(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new L_(u),c.distance=f;break;case"spot":c=new Wy(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),or(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class sw{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return mr}extendParams(e,t,n){const i=[];e.color=new ke(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],hi),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Wt))}return Promise.all(i)}}class aw{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class ow{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(s,s)}return Promise.all(i)}}class lw{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class cw{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class uw{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class hw{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],hi)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Wt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class dw{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class fw{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(s[0],s[1],s[2],hi),Promise.all(i)}}class pw{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class mw{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(s[0],s[1],s[2],hi),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Wt)),Promise.all(i)}}class gw{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class _w{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class xw{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class vw{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class yw{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Hm{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,f=i.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,f,h,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*f);return a.decodeGltfBuffer(new Uint8Array(d),u,f,h,i.mode,i.filter),d})})}else return null}}class Mw{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Di.TRIANGLES&&c.mode!==Di.TRIANGLE_STRIP&&c.mode!==Di.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const p of f){const g=new qe,m=new O,_=new ir,v=new O(1,1,1),M=new Cf(p.geometry,p.material,h);for(let b=0;b<h;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,b),l.SCALE&&v.fromBufferAttribute(l.SCALE,b),M.setMatrixAt(b,g.compose(m,_,v));let y=null;for(const b in l)if(b==="_COLOR_0"){const E=l[b];M.instanceColor=new ou(E.array,E.itemSize,E.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(y===null){const x=M.geometry;y=new kn,y.name=x.name;for(const S in x.attributes)y.setAttribute(S,x.attributes[S]);for(const S in x.morphAttributes)y.morphAttributes[S]=x.morphAttributes[S];x.index!==null&&y.setIndex(x.index),y.morphTargetsRelative=x.morphTargetsRelative;for(const S of x.groups)y.addGroup(S.start,S.count,S.materialIndex);x.boundingBox!==null&&(y.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(y.boundingSphere=x.boundingSphere.clone()),y.drawRange.start=x.drawRange.start,y.drawRange.count=x.drawRange.count,y.userData=Object.assign({},x.userData),M.geometry=y}const E=l[b];y.setAttribute(b,new ou(E.array,E.itemSize,E.normalized))}At.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const W_="glTF",Uo=12,Gm={JSON:1313821514,BIN:5130562};class Sw{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Uo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==W_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Uo,s=new DataView(e,Uo);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Gm.JSON){const c=new Uint8Array(e,Uo+a,o);this.content=n.decode(c)}else if(l===Gm.BIN){const c=Uo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class bw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const f=Nd[u]||u.toLowerCase();o[f]=a[u]}for(const u in e.attributes){const f=Nd[u]||u.toLowerCase();if(a[u]!==void 0){const h=n.accessors[e.attributes[u]],d=Ka[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,h){i.decodeDracoFile(u,function(d){for(const p in d.attributes){const g=d.attributes[p],m=l[p];m!==void 0&&(g.normalized=m)}f(d)},o,c,hi,h)})})}}class Tw{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class Ew{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class X_ extends Mo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,f=(n-t)/u,h=f*f,d=h*f,p=e*c,g=p-c,m=-2*d+3*h,_=d-h,v=1-m,M=_-h+f;for(let y=0;y!==o;y++){const b=a[g+y+o],E=a[g+y+l]*u,x=a[p+y+o],S=a[p+y]*u;s[y]=v*b+M*E+m*x+_*S}return s}}const ww=new ir;class Aw extends X_{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return ww.fromArray(s).normalize().toArray(s),s}}const Di={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ka={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vm={9728:mn,9729:En,9984:jg,9985:Oc,9986:Ho,9987:pr},Wm={33071:fr,33648:tu,10497:Gr},Mh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Rw={CUBICSPLINE:void 0,LINEAR:xl,STEP:_l},Sh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Cw(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new uo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ms})),r.DefaultMaterial}function Ns(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function or(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Pw(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;a.push(h)}if(i){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;o.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=h),r.morphTargetsRelative=!0,r})}function Lw(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Iw(r){let e;const t=r.extensions&&r.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bh(t.attributes):e=r.indices+":"+bh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+bh(r.targets[n]);return e}function bh(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ud(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Dw(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Nw=new qe;class Uw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new iw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?(this.textureLoader=new Ha(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Yy(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hu(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ns(s,o,i),or(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(ps.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Mh[i.type],o=Ka[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new si(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Mh[i.type],c=Ka[i.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let g,m;if(d&&d!==f){const _=Math.floor(h/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let M=t.cache.get(v);M||(g=new c(o,_*d,i.count*d/u),M=new v_(g,d/u),t.cache.add(v,M)),m=new wu(M,l,h%d/u,p)}else o===null?g=new c(i.count*l):g=new c(o,h,i.count*l),m=new si(g,l,p);if(i.sparse!==void 0){const _=Mh.SCALAR,v=Ka[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,b=new v(a[1],M,i.sparse.count*_),E=new c(a[2],y,i.sparse.count*l);o!==null&&(m=new si(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,S=b.length;x<S;x++){const C=b[x];if(m.setX(C,E[x*l]),l>=2&&m.setY(C,E[x*l+1]),l>=3&&m.setZ(C,E[x*l+2]),l>=4&&m.setW(C,E[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(s.samplers||{})[a.sampler]||{};return u.magFilter=Vm[h.magFilter]||En,u.minFilter=Vm[h.minFilter]||pr,u.wrapS=Wm[h.wrapS]||Gr,u.wrapT=Wm[h.wrapT]||Gr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==mn&&u.minFilter!==En,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)u=n.getDependency("bufferView",a.bufferView).then(function(h){return new Promise(function(d,p){t.parse(h,d,p)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(m){const _=new gn(m);_.needsUpdate=!0,d(_)}),t.load(ps.resolveURL(h,s.path),g,void 0,p)})})}const f=u.then(function(h){return c===!0&&o.revokeObjectURL(l),or(h,a),h.userData.mimeType=a.mimeType||Dw(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=f,f}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[tt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new S_,Hi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new M_,Hi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return uo}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){const f=i[tt.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),c.push(f.extendParams(o,s,t))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new ke(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],hi),o.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",f.baseColorTexture,Wt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Ji);const u=s.alphaMode||Sh.OPAQUE;if(u===Sh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Sh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==mr&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Xe(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&a!==mr&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==mr){const f=s.emissiveFactor;o.emissive=new ke().setRGB(f[0],f[1],f[2],hi)}return s.emissiveTexture!==void 0&&a!==mr&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Wt)),Promise.all(c).then(function(){const f=new a(o);return s.name&&(f.name=s.name),or(f,s),t.associations.set(f,{materials:e}),s.extensions&&Ns(i,f,s),f})}createUniqueName(e){const t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Xm(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=Iw(c),f=i[u];if(f)a.push(f.promise);else{let h;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Xm(new kn,c,t),c.mode===Di.TRIANGLE_STRIP?h=h.then(d=>zm(d,a_)):c.mode===Di.TRIANGLE_FAN&&(h=h.then(d=>zm(d,Pd))),i[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?Cw(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,p=u.length;d<p;d++){const g=u[d],m=a[d];let _;const v=c[d];if(m.mode===Di.TRIANGLES||m.mode===Di.TRIANGLE_STRIP||m.mode===Di.TRIANGLE_FAN||m.mode===void 0){const M=s.isSkinnedMesh===!0,y=g.hasAttribute("skinIndex")&&g.hasAttribute("skinWeight");M&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),_=M&&y?new ly(g,v):new Dt(g,v),_.isSkinnedMesh===!0&&_.normalizeSkinWeights()}else if(m.mode===Di.LINES)_=new dy(g,v);else if(m.mode===Di.LINE_STRIP)_=new Lf(g,v);else if(m.mode===Di.LINE_LOOP)_=new fy(g,v);else if(m.mode===Di.POINTS)_=new py(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&Lw(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),or(_,s),m.extensions&&Ns(i,_,m),t.assignFinalMaterial(_),f.push(_)}for(let d=0,p=f.length;d<p;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return s.extensions&&Ns(i,f[0],s),f[0];const h=new Bi;s.extensions&&Ns(i,h,s),t.associations.set(h,{meshes:e});for(let d=0,p=f.length;d<p;d++)h.add(f[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $n(tr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ff(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),or(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const f=a[c];if(f){o.push(f);const h=new qe;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Rf(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let f=0,h=i.channels.length;f<h;f++){const d=i.channels[f],p=i.samplers[d.sampler],g=d.target,m=g.node,_=i.parameters!==void 0?i.parameters[p.input]:p.input,v=i.parameters!==void 0?i.parameters[p.output]:p.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",_)),l.push(this.getDependency("accessor",v)),c.push(p),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],p=f[2],g=f[3],m=f[4],_=[];for(let M=0,y=h.length;M<y;M++){const b=h[M],E=d[M],x=p[M],S=g[M],C=m[M];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const A=n._createAnimationTracks(b,E,x,S,C);if(A)for(let N=0;N<A.length;N++)_.push(A[N])}const v=new Uy(s,void 0,_);return or(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,Nw)});for(let d=0,p=f.length;d<p;d++)u.add(f[d]);if(u.userData.pivot!==void 0&&f.length>0){const d=u.userData.pivot,p=f[0];u.pivot=new O().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new y_:c.length>1?u=new Bi:c.length===1?u=c[0]:u=new At,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=a),or(u,s),s.extensions&&Ns(n,u,s),s.matrix!==void 0){const f=new qe;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const f=i.associations.get(u);i.associations.set(u,{...f})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Bi;n.name&&(s.name=i.createUniqueName(n.name)),or(s,n),n.extensions&&Ns(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,f=l.length;u<f;u++){const h=l[u];h.parent!==null?s.add(tw(h)):s.add(h)}const c=u=>{const f=new Map;for(const[h,d]of i.associations)(h instanceof Hi||h instanceof gn)&&f.set(h,d);return u.traverse(h=>{const d=i.associations.get(h);d!=null&&f.set(h,d)}),f};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}es[s.path]===es.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(es[s.path]){case es.weights:u=Sl;break;case es.rotation:u=bl;break;case es.translation:case es.scale:u=uu;break;default:n.itemSize===1?u=Sl:u=uu;break}const f=i.interpolation!==void 0?Rw[i.interpolation]:xl,h=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const g=new u(l[d]+"."+es[s.path],t.array,h,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ud(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof bl?Aw:X_;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ow(r,e,t){const n=e.attributes,i=new Er;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),o.normalized){const u=Ud(Ka[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new O,l=new O;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,p=h.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),h.normalized){const g=Ud(Ka[h.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new wr;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Xm(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=Nd[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return nt.workingColorSpace!==hi&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),or(r,e),Ow(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Pw(r,e.targets,t):r})}const Th=new WeakMap,Fw=new URL(""+new URL("draco_decoder-C32yEggz.wasm",import.meta.url).href,import.meta.url).toString(),Bw=new URL(""+new URL("draco_wasm_wrapper-DxJM36Ib.js",import.meta.url).href,import.meta.url).toString(),kw=new URL(""+new URL("draco_decoder-fzg4nYZr.js",import.meta.url).href,import.meta.url).toString();new URL(""+new URL("draco_wasm_wrapper-fZCQGLGb.js",import.meta.url).href,import.meta.url).toString(),new URL(""+new URL("draco_decoder-Z1_iN-Ht.wasm",import.meta.url).href,import.meta.url).toString();class zw extends da{constructor(e){super(e),this.decoderPaths={js:Bw,wasm:Fw,dep_js:kw},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){const{decoderPaths:t}=this;return typeof e=="object"?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=ps.resolveURL("draco_wasm_wrapper.js",e),t.wasm=ps.resolveURL("draco_decoder.wasm",e),t.dep_js=ps.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new hu(this.manager);s.setPriority(this.priority),s.setCache(this.cache),s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Wt,n).catch(n)}decodeDracoFile(e,t,n,i,s=hi,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Th.has(e)){const l=Th.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(s,a).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[s]={resolve:c,reject:u},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Th.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new kn;e.index&&t.setIndex(new si(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const{name:i,array:s,itemSize:a,stride:o,vertexColorSpace:l}=e.attributes[n];let c;if(a===o)c=new si(s,a);else{const u=new v_(s,o);c=new wu(u,a,0)}i==="color"&&(this._assignVertexColorSpace(c,l),c.normalized=!(s instanceof Float32Array)),t.setAttribute(i,c)}return t}_assignVertexColorSpace(e,t){if(t!==Wt)return;const n=new ke;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),nt.colorSpaceToWorking(n,Wt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new hu(this.manager);return n.setPriority(this.priority),n.setCache(this.cache),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");t.push(this._loadLibrary(n.dep_js,"text"))}else t.push(this._loadLibrary(n.js,"text")),t.push(this._loadLibrary(n.wasm,"arraybuffer"));return this.decoderPending=Promise.all(t).then(i=>{const s=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const a=Hw.toString(),o=["/* draco decoder */",s,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const a=s.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Hw(){let r,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":r=o.decoderConfig,e=new Promise(function(u){r.onModuleLoaded=function(f){u({draco:f})},DracoDecoderModule(r)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(u=>{const f=u.draco,h=new f.Decoder;try{const d=t(f,h,new Int8Array(l),c),p=d.attributes.map(g=>g.array.buffer);d.index&&p.push(d.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:d},p)}catch(d){console.error(d),self.postMessage({type:"error",id:o.id,error:d.message})}finally{f.destroy(h)}});break}};function t(a,o,l,c){const u=c.attributeIDs,f=c.attributeTypes;let h,d;const p=o.GetEncodedGeometryType(l);if(p===a.TRIANGULAR_MESH)h=new a.Mesh,d=o.DecodeArrayToMesh(l,l.byteLength,h);else if(p===a.POINT_CLOUD)h=new a.PointCloud,d=o.DecodeArrayToPointCloud(l,l.byteLength,h);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||h.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const g={index:null,attributes:[]};for(const m in u){const _=self[f[m]];let v,M;if(c.useUniqueIDs)M=u[m],v=o.GetAttributeByUniqueId(h,M);else{if(M=o.GetAttributeId(h,a[u[m]]),M===-1)continue;v=o.GetAttribute(h,M)}const y=i(a,o,h,m,_,v);m==="color"&&(y.vertexColorSpace=c.vertexColorSpace),g.attributes.push(y)}return p===a.TRIANGULAR_MESH&&(g.index=n(a,o,h)),a.destroy(h),g}function n(a,o,l){const u=l.num_faces()*3,f=u*4,h=a._malloc(f);o.GetTrianglesUInt32Array(l,f,h);const d=new Uint32Array(a.HEAPF32.buffer,h,u).slice();return a._free(h),{array:d,itemSize:1}}function i(a,o,l,c,u,f){const h=l.num_points(),d=f.num_components(),p=s(a,u),g=d*u.BYTES_PER_ELEMENT,m=Math.ceil(g/4)*4,_=m/u.BYTES_PER_ELEMENT,v=h*g,M=h*m,y=a._malloc(v);o.GetAttributeDataArrayForAllPoints(l,f,p,v,y);const b=new u(a.HEAPF32.buffer,y,v/u.BYTES_PER_ELEMENT);let E;if(g===m)E=b.slice();else{E=new u(M/u.BYTES_PER_ELEMENT);let x=0;for(let S=0;S<h;S++){for(let C=0;C<d;C++)E[x+C]=b[S*d+C];x+=_}}return a._free(y),{name:c,count:h,itemSize:d,array:E,stride:_}}function s(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}class qm extends At{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Xe(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}}const Pa=new O,Ym=new qe,$m=new qe,Km=new O,Zm=new O;class Gw{constructor(e={}){const t=this;let n,i,s,a;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:i}},this.render=function(p,g){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),Ym.copy(g.matrixWorldInverse),$m.multiplyMatrices(g.projectionMatrix,Ym),u(p,p,g),this.sortObjects&&d(p)},this.setSize=function(p,g){n=p,i=g,s=n/2,a=i/2,l.style.width=p+"px",l.style.height=g+"px"};function c(p){p.isCSS2DObject&&(p.element.style.display="none");for(let g=0,m=p.children.length;g<m;g++)c(p.children[g])}function u(p,g,m){if(p.visible===!1){c(p);return}if(p.isCSS2DObject){Pa.setFromMatrixPosition(p.matrixWorld),Pa.applyMatrix4($m);const _=Pa.z>=-1&&Pa.z<=1&&p.layers.test(m.layers)===!0,v=p.element;if(v.style.display=_===!0?"":"none",_===!0){p.onBeforeRender(t,g,m);const y=100*p.center.x,b=100*p.center.y;v.style.transformOrigin=`${y}% ${b}%`;const E=-p.rotation2D,x=Pa.x*s+s,S=-Pa.y*a+a;v.style.transform=`translate(${-y}%, ${-b}%) translate(${x}px, ${S}px) rotate(${E}rad)`,v.parentNode!==l&&l.appendChild(v),p.onAfterRender(t,g,m)}const M={distanceToCameraSquared:f(m,p)};o.objects.set(p,M)}for(let _=0,v=p.children.length;_<v;_++)u(p.children[_],g,m)}function f(p,g){return Km.setFromMatrixPosition(p.matrixWorld),Zm.setFromMatrixPosition(g.matrixWorld),Km.distanceToSquared(Zm)}function h(p){const g=[];return p.traverseVisible(function(m){m.isCSS2DObject&&g.push(m)}),g}function d(p){const g=h(p).sort(function(_,v){if(_.renderOrder!==v.renderOrder)return v.renderOrder-_.renderOrder;const M=o.objects.get(_).distanceToCameraSquared,y=o.objects.get(v).distanceToCameraSquared;return M-y}),m=g.length;for(let _=0,v=g.length;_<v;_++)g[_].element.style.zIndex=m-_}}}function Nr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function q_(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},El={duration:.5,overwrite:!1,delay:0},Gf,An,kt,ki=1e8,wt=1/ki,Od=Math.PI*2,Vw=Od/4,Ww=0,Y_=Math.sqrt,Xw=Math.cos,qw=Math.sin,bn=function(e){return typeof e=="string"},Jt=function(e){return typeof e=="function"},Xr=function(e){return typeof e=="number"},Vf=function(e){return typeof e>"u"},br=function(e){return typeof e=="object"},ai=function(e){return e!==!1},Wf=function(){return typeof window<"u"},_c=function(e){return Jt(e)||bn(e)},$_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Bn=Array.isArray,Yw=/random\([^)]+\)/g,$w=/,\s*/g,Jm=/(?:-?\.?\d|\.)+/gi,K_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ga=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Eh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Z_=/[+-]=-?[.\d]+/,Kw=/[^,'"\[\]\s]+/gi,Zw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,lr,Fd,Xf,Ri={},du={},J_,Q_=function(e){return(du=ho(e,Ri))&&di},qf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},wl=function(e,t){return!t&&console.warn(e)},j_=function(e,t){return e&&(Ri[e]=t)&&du&&(du[e]=t)||Ri},Al=function(){return 0},Jw={suppressEvents:!0,isStart:!0,kill:!1},Gc={suppressEvents:!0,kill:!1},Qw={suppressEvents:!0},Yf={},ms=[],Bd={},e0,vi={},wh={},Qm=30,Vc=[],$f="",Kf=function(e){var t=e[0],n,i;if(br(t)||Jt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Vc.length;i--&&!Vc[i].targetTest(t););n=Vc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new S0(e[i],n)))||e.splice(i,1);return e},Ks=function(e){return e._gsap||Kf(zi(e))[0]._gsap},t0=function(e,t,n){return(n=e[t])&&Jt(n)?e[t]():Vf(n)&&e.getAttribute&&e.getAttribute(t)||n},oi=function(e,t){return(e=e.split(",")).forEach(t)||e},jt=function(e){return Math.round(e*1e5)/1e5||0},Gt=function(e){return Math.round(e*1e7)/1e7||0},Za=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},jw=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},fu=function(){var e=ms.length,t=ms.slice(0),n,i;for(Bd={},ms.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Zf=function(e){return!!(e._initted||e._startAt||e.add)},n0=function(e,t,n,i){ms.length&&!An&&fu(),e.render(t,n,!!(An&&t<0&&Zf(e))),ms.length&&!An&&fu()},i0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Kw).length<2?t:bn(e)?e.trim():e},r0=function(e){return e},Ci=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},eA=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ho=function(e,t){for(var n in t)e[n]=t[n];return e},jm=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=br(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},pu=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},tl=function(e){var t=e.parent||Vt,n=e.keyframes?eA(Bn(e.keyframes)):Ci;if(ai(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},tA=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},s0=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Iu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},bs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Zs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},nA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},kd=function(e,t,n,i){return e._startAt&&(An?e._startAt.revert(Gc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},iA=function r(e){return!e||e._ts&&r(e.parent)},eg=function(e){return e._repeat?fo(e._tTime,e=e.duration()+e._rDelay)*e:0},fo=function(e,t){var n=Math.floor(e=Gt(e/t));return e&&n===e?n-1:n},mu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Du=function(e){return e._end=Gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},Nu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Gt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Du(e),n._dirty||Zs(n,e)),e},a0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=mu(e.rawTime(),t),(!t._dur||Bl(0,t.totalDuration(),n)-t._tTime>wt)&&t.render(n,!0)),Zs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-wt}},hr=function(e,t,n,i){return t.parent&&bs(t),t._start=Gt((Xr(n)?n:!n&&gu(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Vt?Ii(e,n,t):e._time)+t._delay),t._end=Gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),s0(e,t,"_first","_last",e._sort?"_start":0),gu(t)||(e._recent=t),i||a0(e,t),e._ts<0&&Nu(e,e._tTime),e},o0=function(e,t){return(Ri.ScrollTrigger||qf("scrollTrigger",t))&&Ri.ScrollTrigger.create(t,e)},l0=function(e,t,n,i,s){if(Qf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!An&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&e0!==bi.frame)return ms.push(e),e._lazy=[s,i],1},rA=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},gu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},sA=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&rA(e)&&!(!e._initted&&gu(e))||(e._ts<0||e._dp._ts<0)&&!gu(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Bl(0,e._tDur,t),u=fo(l,o),e._yoyo&&u&1&&(a=1-a),u!==fo(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||An||i||e._zTime===wt||!t&&e._zTime){if(!e._initted&&l0(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?wt:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&kd(e,t,n,!0),e._onUpdate&&!n&&Ti(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Ti(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&bs(e,1),!n&&!An&&(Ti(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},aA=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},po=function(e,t,n,i){var s=e._repeat,a=Gt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Gt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Nu(e,e._tTime=e._tDur*o),e.parent&&Du(e),n||Zs(e.parent,e),e},tg=function(e){return e instanceof ii?Zs(e):po(e,e._dur)},oA={_start:0,endTime:Al,totalDuration:Al},Ii=function r(e,t,n){var i=e.labels,s=e._recent||oA,a=e.duration()>=ki?s.endTime(!1):e._dur,o,l,c;return bn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Bn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},nl=function(e,t,n){var i=Xr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ai(l.vars.inherit)&&l.parent;a.immediateRender=ai(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new cn(t[0],a,t[s+1])},As=function(e,t){return e||e===0?t(e):t},Bl=function(e,t,n){return n<e?e:n>t?t:n},Un=function(e,t){return!bn(e)||!(t=Zw.exec(e))?"":t[1]},lA=function(e,t,n){return As(n,function(i){return Bl(e,t,i)})},zd=[].slice,c0=function(e,t){return e&&br(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&br(e[0]))&&!e.nodeType&&e!==lr},cA=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return bn(i)&&!t||c0(i,1)?(s=n).push.apply(s,zi(i)):n.push(i)})||n},zi=function(e,t,n){return kt&&!t&&kt.selector?kt.selector(e):bn(e)&&!n&&(Fd||!mo())?zd.call((t||Xf).querySelectorAll(e),0):Bn(e)?cA(e,n):c0(e)?zd.call(e,0):e?[e]:[]},Hd=function(e){return e=zi(e)[0]||wl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return zi(t,n.querySelectorAll?n:n===e?wl("Invalid scope")||Xf.createElement("div"):e)}},u0=function(e){return e.sort(function(){return .5-Math.random()})},h0=function(e){if(Jt(e))return e;var t=br(e)?e:{each:e},n=Js(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return bn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,d,p){var g=(p||t).length,m=a[g],_,v,M,y,b,E,x,S,C;if(!m){if(C=t.grid==="auto"?0:(t.grid||[1,ki])[1],!C){for(x=-ki;x<(x=p[C++].getBoundingClientRect().left)&&C<g;);C<g&&C--}for(m=a[g]=[],_=l?Math.min(C,g)*u-.5:i%C,v=C===ki?0:l?g*f/C-.5:i/C|0,x=0,S=ki,E=0;E<g;E++)M=E%C-_,y=v-(E/C|0),m[E]=b=c?Math.abs(c==="y"?y:M):Y_(M*M+y*y),b>x&&(x=b),b<S&&(S=b);i==="random"&&u0(m),m.max=x-S,m.min=S,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(C>g?g-1:c?c==="y"?g/C:C:Math.max(C,g/C))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Un(t.amount||t.each)||0,n=n&&g<0?SA(n):n}return g=(m[h]-m.min)/m.max||0,Gt(m.b+(n?n(g):g)*m.v)+m.u}},Gd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Gt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Xr(n)?0:Un(n))}},d0=function(e,t){var n=Bn(e),i,s;return!n&&br(e)&&(i=n=e.radius||ki,e.values?(e=zi(e.values),(s=!Xr(e[0]))&&(i*=i)):e=Gd(e.increment)),As(t,n?Jt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ki,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:a,s||u===a||Xr(a)?u:u+Un(a)}:Gd(e))},f0=function(e,t,n,i){return As(Bn(e)?!t:n===!0?!!(n=0):!i,function(){return Bn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},uA=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},hA=function(e,t){return function(n){return e(parseFloat(n))+(t||Un(n))}},dA=function(e,t,n){return m0(e,t,0,1,n)},p0=function(e,t,n){return As(n,function(i){return e[~~t(i)]})},fA=function r(e,t,n){var i=t-e;return Bn(e)?p0(e,r(0,e.length),t):As(n,function(s){return(i+(s-e)%i)%i+e})},pA=function r(e,t,n){var i=t-e,s=i*2;return Bn(e)?p0(e,r(0,e.length-1),t):As(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Rl=function(e){return e.replace(Yw,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split($w);return f0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},m0=function(e,t,n,i,s){var a=t-e,o=i-n;return As(s,function(l){return n+((l-e)/a*o||0)})},mA=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=bn(e),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Bn(e)&&!Bn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(p){p*=f;var g=Math.min(h,~~p);return u[g](p-g)},n=t}else i||(e=ho(Bn(e)?[]:{},e));if(!u){for(l in t)Jf.call(o,e,l,"get",t[l]);s=function(p){return tp(p,o)||(a?e.p:e)}}}return As(n,s)},ng=function(e,t,n){var i=e.labels,s=ki,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Ti=function(e,t,n){var i=e.vars,s=i[t],a=kt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ms.length&&fu(),o&&(kt=o),u=l?s.apply(c,l):s.call(c),kt=a,u},Wo=function(e){return bs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!An),e.progress()<1&&Ti(e,"onInterrupt"),e},Va,g0=[],_0=function(e){if(e)if(e=!e.name&&e.default||e,Wf()||e.headless){var t=e.name,n=Jt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Al,render:tp,add:Jf,kill:IA,modifier:LA,rawVars:0},a={targetTest:0,get:0,getSetter:ep,aliases:{},register:0};if(mo(),e!==i){if(vi[t])return;Ci(i,Ci(pu(e,s),a)),ho(i.prototype,ho(s,pu(e,a))),vi[i.prop=t]=i,e.targetTest&&(Vc.push(i),Yf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}j_(t,i),e.register&&e.register(di,i,li)}else g0.push(e)},It=255,Xo={aqua:[0,It,It],lime:[0,It,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,It],navy:[0,0,128],white:[It,It,It],olive:[128,128,0],yellow:[It,It,0],orange:[It,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[It,0,0],pink:[It,192,203],cyan:[0,It,It],transparent:[It,It,It,0]},Ah=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*It+.5|0},x0=function(e,t,n){var i=e?Xr(e)?[e>>16,e>>8&It,e&It]:0:Xo.black,s,a,o,l,c,u,f,h,d,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Xo[e])i=Xo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&It,i&It,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&It,e&It]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(Jm),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Ah(l+1/3,s,a),i[1]=Ah(l,s,a),i[2]=Ah(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(K_),n&&i.length<4&&(i[3]=1),i}else i=e.match(Jm)||Xo.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/It,a=i[1]/It,o=i[2]/It,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},v0=function(e){var t=[],n=[],i=-1;return e.split(gs).forEach(function(s){var a=s.match(Ga)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},ig=function(e,t,n){var i="",s=(e+i).match(gs),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=x0(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=v0(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(gs,"1").split(Ga),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(gs),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},gs=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Xo)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),gA=/hsl[a]?\(/,y0=function(e){var t=e.join(" "),n;if(gs.lastIndex=0,gs.test(t))return n=gA.test(t),e[1]=ig(e[1],n),e[0]=ig(e[0],n,v0(e[1])),!0},Cl,bi=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,p=function g(m){var _=r()-i,v=m===!0,M,y,b,E;if((_>e||_<0)&&(n+=_-t),i+=_,b=i-n,M=b-a,(M>0||v)&&(E=++f.frame,h=b-f.time*1e3,f.time=b=b/1e3,a+=M+(M>=s?0:s-M),y=1),v||(l=c(g)),y)for(d=0;d<o.length;d++)o[d](b,h,E,m)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){J_&&(!Fd&&Wf()&&(lr=Fd=window,Xf=lr.document||{},Ri.gsap=di,(lr.gsapVersions||(lr.gsapVersions=[])).push(di.version),Q_(du||lr.GreenSockGlobals||!lr.gsap&&lr||{}),g0.forEach(_0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},Cl=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Cl=0,c=Al},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,_,v){var M=_?function(y,b,E,x){m(y,b,E,x),f.remove(M)}:m;return f.remove(m),o[v?"unshift":"push"](M),mo(),M},remove:function(m,_){~(_=o.indexOf(m))&&o.splice(_,1)&&d>=_&&d--},_listeners:o},f})(),mo=function(){return!Cl&&bi.wake()},ct={},_A=/^[\d.\-M][\d.\-,\s]/,xA=/["']/g,vA=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(xA,"").trim():+c,i=l.substr(o+1).trim();return t},yA=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},MA=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[vA(t[1])]:yA(e).split(",").map(i0)):ct._CE&&_A.test(e)?ct._CE("",e):n},SA=function(e){return function(t){return 1-e(1-t)}},Js=function(e,t){return e&&(Jt(e)?e:ct[e]||MA(e))||t},fa=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return oi(e,function(o){ct[o]=Ri[o]=s,ct[a=o.toLowerCase()]=n;for(var l in s)ct[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[o+"."+l]=s[l]}),s},M0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Rh=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Od*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*qw((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:M0(o);return s=Od/s,l.config=function(c,u){return r(e,c,u)},l},Ch=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:M0(n);return i.config=function(s){return r(e,s)},i};oi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;fa(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;fa("Elastic",Rh("in"),Rh("out"),Rh());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};fa("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);fa("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});fa("Circ",function(r){return-(Y_(1-r*r)-1)});fa("Sine",function(r){return r===1?1:-Xw(r*Vw)+1});fa("Back",Ch("in"),Ch("out"),Ch());ct.SteppedEase=ct.steps=Ri.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-wt;return function(o){return((i*Bl(0,a,o)|0)+s)*n}}};El.ease=ct["quad.out"];oi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return $f+=r+","+r+"Params,"});var S0=function(e,t){this.id=Ww++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:t0,this.set=t?t.getSetter:ep},Pl=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,po(this,+t.duration,1,1),this.data=t.data,kt&&(this._ctx=kt,kt.data.push(this)),Cl||bi.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,po(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(mo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Nu(this,n),!s._dp||s.parent||a0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&hr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),n0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+eg(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+eg(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?fo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?mu(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-wt?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(Bl(-Math.abs(this._delay),o,s),i!==!1),Du(this),nA(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{mo(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==wt,a;if(s)for(this._tTime-=wt,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+wt){s=!1;break}a=a._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=Gt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&hr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ai(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?mu(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Qw);var i=An;return An=n,Zf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),An=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,tg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,tg(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ii(this,n),ai(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ai(i)),this._dur||(this._zTime=-wt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-wt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Jt(n)?n:r0,l=function(){var u=i.then;i.then=null,s&&s(),Jt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Wo(this)},r})();Ci(Pl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var ii=(function(r){q_(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ai(n.sortChildren),Vt&&hr(n.parent||Vt,Nr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&o0(Nr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return nl(0,arguments,this),this},t.from=function(i,s,a){return nl(1,arguments,this),this},t.fromTo=function(i,s,a,o){return nl(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,tl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new cn(i,s,Ii(this,a),1),this},t.call=function(i,s,a){return hr(this,cn.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new cn(i,a,Ii(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,tl(a).immediateRender=ai(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,tl(o).immediateRender=ai(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Gt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,p,g,m,_,v,M,y,b,E,x;if(this!==Vt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,y=this._start,M=this._ts,_=!M,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=Gt(u%m),u===l?(g=this._repeat,h=c):(b=Gt(u/m),g=~~b,g&&g===b&&(h=c,g--),h>c&&(h=c)),b=fo(this._tTime,m),!o&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),E&&g&1&&(h=c-h,x=1),g!==b&&!this._lock){var S=E&&b&1,C=S===(E&&g&1);if(g<b&&(S=!S),o=S?0:u%c?c:u,this._lock=1,this.render(o||(x?0:Gt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ti(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,b=g),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,C&&(this._lock=2,o=S?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=aA(this,Gt(o),Gt(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!b&&(Ti(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||h>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!_){v=0,p&&(u+=this._zTime=-wt);break}}d=p}else{d=this._last;for(var A=i<0?i:h;d;){if(p=d._prev,(d._act||A<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(A-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(A-d._start)*d._ts,s,a||An&&Zf(d)),h!==this._time||!this._ts&&!_){v=0,p&&(u+=this._zTime=A?-wt:wt);break}}d=p}}if(v&&!s&&(this.pause(),v.render(h>=o?0:-wt)._zTime=h>=o?1:-1,this._ts))return this._start=y,Du(this),this.render(i,s,a);this._onUpdate&&!s&&Ti(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&bs(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Ti(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Xr(s)||(s=Ii(this,s,i)),!(i instanceof Pl)){if(Bn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(bn(i))return this.addLabel(i,s);if(Jt(i))i=cn.delayedCall(0,i);else return this}return this!==i?hr(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ki);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof cn?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return bn(i)?this.removeLabel(i):Jt(i)?this.killTweensOf(i):(i.parent===this&&Iu(this,i),i===this._recent&&(this._recent=this._last),Zs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gt(bi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Ii(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=cn.delayedCall(0,s||Al,a);return o.data="isPause",this._hasPause=1,hr(this,o,Ii(this,i))},t.removePause=function(i){var s=this._first;for(i=Ii(this,i);s;)s._start===i&&s.data==="isPause"&&bs(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ls!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=zi(i),l=this._first,c=Xr(s),u;l;)l instanceof cn?jw(l._targets,o)&&(c?(!ls||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Ii(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,p=cn.to(a,Ci({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||wt,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==m&&po(p,m,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,f||[])}},s));return h?p.render(0):p},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Ci({startAt:{time:Ii(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ng(this,Ii(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ng(this,Ii(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Gt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Zs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Zs(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=ki,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,hr(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Gt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;po(a,a===Vt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Vt._ts&&(n0(Vt,mu(i,Vt)),e0=bi.frame),bi.frame>=Qm){Qm+=Ai.autoSleep||120;var s=Vt._first;if((!s||!s._ts)&&Ai.autoSleep&&bi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||bi.sleep()}}},e})(Pl);Ci(ii.prototype,{_lock:0,_hasPause:0,_forcing:0});var bA=function(e,t,n,i,s,a,o){var l=new li(this._pt,e,t,0,1,A0,null,s),c=0,u=0,f,h,d,p,g,m,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Rl(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),h=n.match(Eh)||[];f=Eh.exec(i);)p=f[0],g=i.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),p!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:p.charAt(1)==="="?Za(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},c=Eh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Z_.test(i)||_)&&(l.e=0),this._pt=l,l},Jf=function(e,t,n,i,s,a,o,l,c,u){Jt(i)&&(i=i(s||0,e,a));var f=e[t],h=n!=="get"?n:Jt(f)?c?e[t.indexOf("set")||!Jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Jt(f)?c?RA:E0:jf,p;if(bn(i)&&(~i.indexOf("random(")&&(i=Rl(i)),i.charAt(1)==="="&&(p=Za(h,i)+(Un(h)||0),(p||p===0)&&(i=p))),!u||h!==i||Vd)return!isNaN(h*i)&&i!==""?(p=new li(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?PA:w0,0,d),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!f&&!(t in e)&&qf(t,i),bA.call(this,e,t,h,i,d,l||Ai.stringFilter,c))},TA=function(e,t,n,i,s){if(Jt(e)&&(e=il(e,s,t,n,i)),!br(e)||e.style&&e.nodeType||Bn(e)||$_(e))return bn(e)?il(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=il(e[o],s,t,n,i);return a},b0=function(e,t,n,i,s,a){var o,l,c,u;if(vi[e]&&(o=new vi[e]).init(s,o.rawVars?t[e]:TA(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new li(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Va))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ls,Vd,Qf=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,p=e._dur,g=e._startAt,m=e._targets,_=e.parent,v=_&&_.data==="nested"?_.vars.targets:m,M=e._overwrite==="auto"&&!Gf,y=e.timeline,b=i.easeReverse||f,E,x,S,C,A,N,D,V,L,z,X,k,ne;if(y&&(!h||!s)&&(s="none"),e._ease=Js(s,El.ease),e._rEase=b&&(Js(b)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||h&&!i.stagger){if(V=m[0]?Ks(m[0]).harness:0,k=V&&i[V.prop],E=pu(i,Yf),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&p?Gc:Jw),g._lazy=0),a){if(bs(e._startAt=cn.set(m,Ci({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!g&&ai(l),startAt:null,delay:0,onUpdate:c&&function(){return Ti(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An||!o&&!d)&&e._startAt.revert(Gc),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!g){if(t&&(o=!1),S=Ci({overwrite:!1,data:"isFromStart",lazy:o&&!g&&ai(l),immediateRender:o,stagger:0,parent:_},E),k&&(S[V.prop]=k),bs(e._startAt=cn.set(m,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An?e._startAt.revert(Gc):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&ai(l)||l&&!p,x=0;x<m.length;x++){if(A=m[x],D=A._gsap||Kf(m)[x]._gsap,e._ptLookup[x]=z={},Bd[D.id]&&ms.length&&fu(),X=v===m?x:v.indexOf(A),V&&(L=new V).init(A,k||E,e,X,v)!==!1&&(e._pt=C=new li(e._pt,A,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(q){z[q]=C}),L.priority&&(N=1)),!V||k)for(S in E)vi[S]&&(L=b0(S,E,e,X,A,v))?L.priority&&(N=1):z[S]=C=Jf.call(e,A,S,"get",E[S],X,v,0,i.stringFilter);e._op&&e._op[x]&&e.kill(A,e._op[x]),M&&e._pt&&(ls=e,Vt.killTweensOf(A,z,e.globalTime(t)),ne=!e.parent,ls=0),e._pt&&l&&(Bd[D.id]=1)}N&&R0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ne,h&&t<=0&&y.render(ki,!0,!0)},EA=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Vd=1,e.vars[t]="+=0",Qf(e,o),Vd=0,l?wl(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=jt(n)+Un(f.e)),f.b&&(f.b=u.s+Un(f.b))},wA=function(e,t){var n=e[0]?Ks(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=ho({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},AA=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Bn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},il=function(e,t,n,i,s){return Jt(e)?e.call(t,n,i,s):bn(e)&&~e.indexOf("random(")?Rl(e):e},_u=$f+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",T0={};oi(_u+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return T0[r]=1});_u=_u.split(",");var cn=(function(r){q_(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:tl(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,p=l.keyframes,g=l.defaults,m=l.scrollTrigger,_=i.parent||Vt,v=(Bn(n)||$_(n)?Xr(n[0]):"length"in i)?[n]:zi(n),M,y,b,E,x,S,C,A;if(o._targets=v.length?Kf(v):wl("GSAP target "+n+" not found. https://gsap.com",!Ai.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,p||h||_c(c)||_c(u)){i=o.vars;var N=i.easeReverse||i.yoyoEase;if(M=o.timeline=new ii({data:"nested",defaults:g||{},targets:_&&_.data==="nested"?_.vars.targets:v}),M.kill(),M.parent=M._dp=Nr(o),M._start=0,h||_c(c)||_c(u)){if(E=v.length,C=h&&h0(h),br(h))for(x in h)~_u.indexOf(x)&&(A||(A={}),A[x]=h[x]);for(y=0;y<E;y++)b=pu(i,T0),b.stagger=0,N&&(b.easeReverse=N),A&&ho(b,A),S=v[y],b.duration=+il(c,Nr(o),y,S,v),b.delay=(+il(u,Nr(o),y,S,v)||0)-o._delay,!h&&E===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),M.to(S,b,C?C(y,S,v):0),M._ease=ct.none;M.duration()?c=u=0:o.timeline=0}else if(p){tl(Ci(M.vars.defaults,{ease:"none"})),M._ease=Js(p.ease||i.ease||"none");var D=0,V,L,z;if(Bn(p))p.forEach(function(X){return M.to(v,X,">")}),M.duration();else{b={};for(x in p)x==="ease"||x==="easeEach"||AA(x,p[x],b,p.easeEach);for(x in b)for(V=b[x].sort(function(X,k){return X.t-k.t}),D=0,y=0;y<V.length;y++)L=V[y],z={ease:L.e,duration:(L.t-(y?V[y-1].t:0))/100*c},z[x]=L.v,M.to(v,z,D),D+=z.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return d===!0&&!Gf&&(ls=Nr(o),Vt.killTweensOf(v),ls=0),hr(_,Nr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!p&&o._start===Gt(_._time)&&ai(f)&&iA(Nr(o))&&_.data!=="nested")&&(o._tTime=-wt,o.render(Math.max(0,-u)||0)),m&&o0(Nr(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-wt&&!u?l:i<wt?0:i,h,d,p,g,m,_,v,M;if(!c)sA(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(h=Gt(f%g),f===l?(p=this._repeat,h=c):(m=Gt(f/g),p=~~m,p&&p===m?(h=c,p--):h>c&&(h=c)),_=this._yoyo&&p&1,_&&(h=c-h),m=fo(this._tTime,g),h===o&&!a&&this._initted&&p===m)return this._tTime=f,this;p!==m&&this.vars.repeatRefresh&&!_&&!this._lock&&h!==g&&this._initted&&(this._lock=a=1,this.render(Gt(g*p),!0).invalidate()._lock=0)}if(!this._initted){if(l0(this,u?i:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=h<o;if(y!==this._inv){var b=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(y?-1:1)/b:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/c);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!m&&(Ti(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&kd(this,i,s,a),Ti(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&Ti(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&kd(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&bs(this,1),!s&&!(u&&!o)&&(f||o||_)&&(Ti(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Cl||bi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Qf(this,c),u=this._ease(c/this._dur),EA(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Nu(this,0),this.parent||s0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Wo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!An),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ls&&ls.vars.overwrite!==!0)._first||Wo(this),this.parent&&a!==this.timeline.totalDuration()&&po(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?zi(i):o,c=this._ptLookup,u=this._pt,f,h,d,p,g,m,_;if((!s||s==="all")&&tA(o,l))return s==="all"&&(this._pt=0),Wo(this);for(f=this._op=this._op||[],s!=="all"&&(bn(s)&&(g={},oi(s,function(v){return g[v]=1}),s=g),s=wA(o,s)),_=o.length;_--;)if(~l.indexOf(o[_])){h=c[_],s==="all"?(f[_]=s,p=h,d={}):(d=f[_]=f[_]||{},p=s);for(g in p)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Iu(this,m,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Wo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return nl(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return nl(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Vt.killTweensOf(i,s,a)},e})(Pl);Ci(cn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});oi("staggerTo,staggerFrom,staggerFromTo",function(r){cn[r]=function(){var e=new ii,t=zd.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var jf=function(e,t,n){return e[t]=n},E0=function(e,t,n){return e[t](n)},RA=function(e,t,n,i){return e[t](i.fp,n)},CA=function(e,t,n){return e.setAttribute(t,n)},ep=function(e,t){return Jt(e[t])?E0:Vf(e[t])&&e.setAttribute?CA:jf},w0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},PA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},A0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},tp=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},LA=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},IA=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Iu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},DA=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},R0=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},li=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||w0,this.d=l||this,this.set=c||jf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=DA,this.m=n,this.mt=s,this.tween=i},r})();oi($f+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Yf[r]=1});Ri.TweenMax=Ri.TweenLite=cn;Ri.TimelineLite=Ri.TimelineMax=ii;Vt=new ii({sortChildren:!1,defaults:El,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ai.stringFilter=y0;var Qs=[],Wc={},NA=[],rg=0,UA=0,Ph=function(e){return(Wc[e]||NA).map(function(t){return t()})},Ll=function(){var e=Date.now(),t=[];e-rg>2&&(Ph("matchMediaInit"),Qs.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=lr.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Ph("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),rg=e,Ph("matchMedia"))},C0=(function(){function r(t,n){this.selector=n&&Hd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=UA++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Jt(n)&&(s=i,i=n,n=Jt);var a=this,o=function(){var c=kt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Hd(s)),kt=a,f=i.apply(a,arguments),Jt(f)&&a._r.push(f),kt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Jt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=kt;kt=null,n(this),kt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof cn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof ii?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof cn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=Qs.length;a--;)Qs[a].id===this.id&&Qs.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(Ll):o.removeEventListener("change",Ll)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),OA=(function(){function r(t){this.contexts=[],this.scope=t,kt&&kt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){br(n)||(n={matches:n});var a=new C0(0,s||this.scope),o=a.conditions={},l,c,u;kt&&!a.selector&&(a.selector=kt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=lr.matchMedia(n[c]),l&&(Qs.indexOf(a)<0&&Qs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ll):l.addEventListener("change",Ll),(a._mqs||(a._mqs=[])).push(l)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),xu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return _0(i)})},timeline:function(e){return new ii(e)},getTweensOf:function(e,t){return Vt.getTweensOf(e,t)},getProperty:function(e,t,n,i){bn(e)&&(e=zi(e)[0]);var s=Ks(e||{}).get,a=n?r0:i0;return n==="native"&&(n=""),e&&(t?a((vi[t]&&vi[t].get||s)(e,t,n,i)):function(o,l,c){return a((vi[o]&&vi[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=zi(e),e.length>1){var i=e.map(function(u){return di.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=vi[t],o=Ks(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;Va._pt=0,f.init(e,n?u+n:u,Va,0,[e]),f.render(1,f),Va._pt&&tp(1,Va)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=di.to(e,Ci((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Js(e.ease,El.ease)),jm(El,e||{})},config:function(e){return jm(Ai,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!vi[o]&&!Ri[o]&&wl(t+" effect requires "+o+" plugin.")}),wh[t]=function(o,l,c){return n(zi(o),Ci(l||{},s),c)},a&&(ii.prototype[t]=function(o,l,c){return this.add(wh[t](o,br(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=Js(t)},parseEase:function(e,t){return arguments.length?Js(e,t):ct},getById:function(e){return Vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new ii(e),i,s;for(n.smoothChildTiming=ai(e.smoothChildTiming),Vt.remove(n),n._dp=0,n._time=n._tTime=Vt._time,i=Vt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof cn&&i.vars.onComplete===i._targets[0]))&&hr(n,i,i._start-i._delay),i=s;return hr(Vt,n,0),n},context:function(e,t){return e?new C0(e,t):kt},matchMedia:function(e){return new OA(e)},matchMediaRefresh:function(){return Qs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ll()},addEventListener:function(e,t){var n=Wc[e]||(Wc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Wc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:fA,wrapYoyo:pA,distribute:h0,random:f0,snap:d0,normalize:dA,getUnit:Un,clamp:lA,splitColor:x0,toArray:zi,selector:Hd,mapRange:m0,pipe:uA,unitize:hA,interpolate:mA,shuffle:u0},install:Q_,effects:wh,ticker:bi,updateRoot:ii.updateRoot,plugins:vi,globalTimeline:Vt,core:{PropTween:li,globals:j_,Tween:cn,Timeline:ii,Animation:Pl,getCache:Ks,_removeLinkedListItem:Iu,reverting:function(){return An},context:function(e){return e&&kt&&(kt.data.push(e),e._ctx=kt),kt},suppressOverwrites:function(e){return Gf=e}}};oi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return xu[r]=cn[r]});bi.add(ii.updateRoot);Va=xu.to({},{duration:0});var FA=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},BA=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=FA(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Lh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(bn(s)&&(l={},oi(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}BA(o,s)}}}},di=xu.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)An?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Lh("roundProps",Gd),Lh("modifiers"),Lh("snap",d0))||xu;cn.version=ii.version=di.version="3.15.1";J_=1;Wf()&&mo();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;var sg,cs,Ja,np,Xs,ag,ip,kA=function(){return typeof window<"u"},qr={},ks=180/Math.PI,Qa=Math.PI/180,La=Math.atan2,og=1e8,rp=/([A-Z])/g,zA=/(left|right|width|margin|padding|x)/i,HA=/[\s,\(]\S/,gr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},GA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},VA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},WA=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},XA=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},P0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},L0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},qA=function(e,t,n){return e.style[t]=n},YA=function(e,t,n){return e.style.setProperty(t,n)},$A=function(e,t,n){return e._gsap[t]=n},KA=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ZA=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},JA=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Xt="transform",ci=Xt+"Origin",QA=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in qr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=gr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Or(i,o)}):this.tfm[e]=a.x?a[e]:Or(i,e),e===ci&&(this.tfm.zOrigin=a.zOrigin);else return gr.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Xt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ci,t,"")),e=Xt}(s||t)&&this.props.push(e,t,s[e])},I0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},jA=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(rp,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ip(),(!s||!s.isStart)&&!n[Xt]&&(I0(n),i.zOrigin&&n[ci]&&(n[ci]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},D0=function(e,t){var n={target:e,props:[],revert:jA,save:QA};return e._gsap||di.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},N0,Xd=function(e,t){var n=cs.createElementNS?cs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):cs.createElement(e);return n&&n.style?n:cs.createElement(e)},Ei=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(rp,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,go(t)||t,1)||""},lg="O,Moz,ms,Ms,Webkit".split(","),go=function(e,t,n){var i=t||Xs,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(lg[a]+e in s););return a<0?null:(a===3?"ms":a>=0?lg[a]:"")+e},qd=function(){kA()&&window.document&&(sg=window,cs=sg.document,Ja=cs.documentElement,Xs=Xd("div")||{style:{}},Xd("div"),Xt=go(Xt),ci=Xt+"Origin",Xs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",N0=!!go("perspective"),ip=di.core.reverting,np=1)},cg=function(e){var t=e.ownerSVGElement,n=Xd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ja.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ja.removeChild(n),s},ug=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},U0=function(e){var t,n;try{t=e.getBBox()}catch{t=cg(e),n=1}return t&&(t.width||t.height)||n||(t=cg(e)),t&&!t.width&&!t.x&&!t.y?{x:+ug(e,["x","cx","x1"])||0,y:+ug(e,["y","cy","y1"])||0,width:0,height:0}:t},O0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&U0(e))},Ts=function(e,t){if(t){var n=e.style,i;t in qr&&t!==ci&&(t=Xt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(rp,"-$1").toLowerCase())):n.removeAttribute(t)}},us=function(e,t,n,i,s,a){var o=new li(e._pt,t,n,0,1,a?L0:P0);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},hg={deg:1,rad:1,turn:1},e1={grid:1,flex:1},Es=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Xs.style,l=zA.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",p,g,m,_;if(i===a||!s||hg[i]||hg[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),_=e.getCTM&&O0(e),(d||a==="%")&&(qr[t]||~t.indexOf("adius")))return p=_?e.getBBox()[l?"width":"height"]:e[u],jt(d?s/p*f:s/100*p);if(o[l?"width":"height"]=f+(h?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===cs||!g.appendChild)&&(g=cs.body),m=g._gsap,m&&d&&m.width&&l&&m.time===bi.time&&!m.uncache)return jt(s/m.width*f);if(d&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+i,p=e[u],v?e.style[t]=v:Ts(e,t)}else(d||a==="%")&&!e1[Ei(g,"display")]&&(o.position=Ei(e,"position")),g===e&&(o.position="static"),g.appendChild(Xs),p=Xs[u],g.removeChild(Xs),o.position="absolute";return l&&d&&(m=Ks(g),m.time=bi.time,m.width=g[u]),jt(h?p*s/f:p&&s?f/p*s:0)},Or=function(e,t,n,i){var s;return np||qd(),t in gr&&t!=="transform"&&(t=gr[t],~t.indexOf(",")&&(t=t.split(",")[0])),qr[t]&&t!=="transform"?(s=Dl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:yu(Ei(e,ci))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=vu[t]&&vu[t](e,t,n)||Ei(e,t)||t0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Es(e,t,s,n)+n:s},t1=function(e,t,n,i){if(!n||n==="none"){var s=go(t,e,1),a=s&&Ei(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Ei(e,"borderTopColor"))}var o=new li(this._pt,e.style,t,0,1,A0),l=0,c=0,u,f,h,d,p,g,m,_,v,M,y,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ei(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Ei(e,t)||i,g?e.style[t]=g:Ts(e,t)),u=[n,i],y0(u),n=u[0],i=u[1],h=n.match(Ga)||[],b=i.match(Ga)||[],b.length){for(;f=Ga.exec(i);)m=f[0],v=i.substring(l,f.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(g=h[c++]||"")&&(d=parseFloat(g)||0,y=g.substr((d+"").length),m.charAt(1)==="="&&(m=Za(d,m)+y),_=parseFloat(m),M=m.substr((_+"").length),l=Ga.lastIndex-M.length,M||(M=M||Ai.units[t]||y,l===i.length&&(i+=M,o.e+=M)),y!==M&&(d=Es(e,t,g,M)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:d,c:_-d,m:p&&p<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?L0:P0;return Z_.test(i)&&(o.e=0),this._pt=o,o},dg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},n1=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=dg[n]||n,t[1]=dg[i]||i,t.join(" ")},i1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],qr[o]&&(l=1,o=o==="transformOrigin"?ci:Xt),Ts(n,o);l&&(Ts(n,Xt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Dl(n,1),a.uncache=1,I0(i)))}},vu={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new li(e._pt,t,n,0,0,i1);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Il=[1,0,0,1,0,0],F0={},B0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},fg=function(e){var t=Ei(e,Xt);return B0(t)?Il:t.substr(7).match(K_).map(jt)},sp=function(e,t){var n=e._gsap||Ks(e),i=e.style,s=fg(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Il:s):(s===Il&&!e.offsetParent&&e!==Ja&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ja.appendChild(e)),s=fg(e),l?i.display=l:Ts(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ja.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Yd=function(e,t,n,i,s,a){var o=e._gsap,l=s||sp(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],p=l[1],g=l[2],m=l[3],_=l[4],v=l[5],M=t.split(" "),y=parseFloat(M[0])||0,b=parseFloat(M[1])||0,E,x,S,C;n?l!==Il&&(x=d*m-p*g)&&(S=y*(m/x)+b*(-g/x)+(g*v-m*_)/x,C=y*(-p/x)+b*(d/x)-(d*v-p*_)/x,y=S,b=C):(E=U0(e),y=E.x+(~M[0].indexOf("%")?y/100*E.width:y),b=E.y+(~(M[1]||M[0]).indexOf("%")?b/100*E.height:b)),i||i!==!1&&o.smooth?(_=y-c,v=b-u,o.xOffset=f+(_*d+v*g)-_,o.yOffset=h+(_*p+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ci]="0px 0px",a&&(us(a,o,"xOrigin",c,y),us(a,o,"yOrigin",u,b),us(a,o,"xOffset",f,o.xOffset),us(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},Dl=function(e,t){var n=e._gsap||new S0(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Ei(e,ci)||"0",u,f,h,d,p,g,m,_,v,M,y,b,E,x,S,C,A,N,D,V,L,z,X,k,ne,q,P,ie,Se,ze,Z,he;return u=f=h=g=m=_=v=M=y=0,d=p=1,n.svg=!!(e.getCTM&&O0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xt]!=="none"?l[Xt]:"")),i.scale=i.rotate=i.translate="none"),x=sp(e,n.svg),n.svg&&(n.uncache?(ne=e.getBBox(),c=n.xOrigin-ne.x+"px "+(n.yOrigin-ne.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),Yd(e,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,x)),b=n.xOrigin||0,E=n.yOrigin||0,x!==Il&&(N=x[0],D=x[1],V=x[2],L=x[3],u=z=x[4],f=X=x[5],x.length===6?(d=Math.sqrt(N*N+D*D),p=Math.sqrt(L*L+V*V),g=N||D?La(D,N)*ks:0,v=V||L?La(V,L)*ks+g:0,v&&(p*=Math.abs(Math.cos(v*Qa))),n.svg&&(u-=b-(b*N+E*V),f-=E-(b*D+E*L))):(he=x[6],ze=x[7],P=x[8],ie=x[9],Se=x[10],Z=x[11],u=x[12],f=x[13],h=x[14],S=La(he,Se),m=S*ks,S&&(C=Math.cos(-S),A=Math.sin(-S),k=z*C+P*A,ne=X*C+ie*A,q=he*C+Se*A,P=z*-A+P*C,ie=X*-A+ie*C,Se=he*-A+Se*C,Z=ze*-A+Z*C,z=k,X=ne,he=q),S=La(-V,Se),_=S*ks,S&&(C=Math.cos(-S),A=Math.sin(-S),k=N*C-P*A,ne=D*C-ie*A,q=V*C-Se*A,Z=L*A+Z*C,N=k,D=ne,V=q),S=La(D,N),g=S*ks,S&&(C=Math.cos(S),A=Math.sin(S),k=N*C+D*A,ne=z*C+X*A,D=D*C-N*A,X=X*C-z*A,N=k,z=ne),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,_=180-_),d=jt(Math.sqrt(N*N+D*D+V*V)),p=jt(Math.sqrt(X*X+he*he)),S=La(z,X),v=Math.abs(S)>2e-4?S*ks:0,y=Z?1/(Z<0?-Z:Z):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!B0(Ei(e,Xt)),k&&e.setAttribute("transform",k))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=jt(d),n.scaleY=jt(p),n.rotation=jt(g)+o,n.rotationX=jt(m)+o,n.rotationY=jt(_)+o,n.skewX=v+o,n.skewY=M+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[ci]=yu(c)),n.xOffset=n.yOffset=0,n.force3D=Ai.force3D,n.renderTransform=n.svg?s1:N0?k0:r1,n.uncache=0,n},yu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ih=function(e,t,n){var i=Un(t);return jt(parseFloat(t)+parseFloat(Es(e,"x",n+"px",i)))+i},r1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,k0(e,t)},Us="0deg",Oo="0px",Os=") ",k0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,p=n.scaleX,g=n.scaleY,m=n.transformPerspective,_=n.force3D,v=n.target,M=n.zOrigin,y="",b=_==="auto"&&e&&e!==1||_===!0;if(M&&(f!==Us||u!==Us)){var E=parseFloat(u)*Qa,x=Math.sin(E),S=Math.cos(E),C;E=parseFloat(f)*Qa,C=Math.cos(E),a=Ih(v,a,x*C*-M),o=Ih(v,o,-Math.sin(E)*-M),l=Ih(v,l,S*C*-M+M)}m!==Oo&&(y+="perspective("+m+Os),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(b||a!==Oo||o!==Oo||l!==Oo)&&(y+=l!==Oo||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Os),c!==Us&&(y+="rotate("+c+Os),u!==Us&&(y+="rotateY("+u+Os),f!==Us&&(y+="rotateX("+f+Os),(h!==Us||d!==Us)&&(y+="skew("+h+", "+d+Os),(p!==1||g!==1)&&(y+="scale("+p+", "+g+Os),v.style[Xt]=y||"translate(0, 0)"},s1=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,p=n.xOrigin,g=n.yOrigin,m=n.xOffset,_=n.yOffset,v=n.forceCSS,M=parseFloat(a),y=parseFloat(o),b,E,x,S,C;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Qa,c*=Qa,b=Math.cos(l)*f,E=Math.sin(l)*f,x=Math.sin(l-c)*-h,S=Math.cos(l-c)*h,c&&(u*=Qa,C=Math.tan(c-u),C=Math.sqrt(1+C*C),x*=C,S*=C,u&&(C=Math.tan(u),C=Math.sqrt(1+C*C),b*=C,E*=C)),b=jt(b),E=jt(E),x=jt(x),S=jt(S)):(b=f,S=h,E=x=0),(M&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(M=Es(d,"x",a,"px"),y=Es(d,"y",o,"px")),(p||g||m||_)&&(M=jt(M+p-(p*b+g*x)+m),y=jt(y+g-(p*E+g*S)+_)),(i||s)&&(C=d.getBBox(),M=jt(M+i/100*C.width),y=jt(y+s/100*C.height)),C="matrix("+b+","+E+","+x+","+S+","+M+","+y+")",d.setAttribute("transform",C),v&&(d.style[Xt]=C)},a1=function(e,t,n,i,s){var a=360,o=bn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ks:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*og)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*og)%a-~~(c/a)*a)),e._pt=h=new li(e._pt,t,n,i,c,GA),h.e=u,h.u="deg",e._props.push(n),h},pg=function(e,t){for(var n in t)e[n]=t[n];return e},o1=function(e,t,n){var i=pg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Xt]=t,o=Dl(n,1),Ts(n,Xt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Xt],a[Xt]=t,o=Dl(n,1),a[Xt]=c);for(l in qr)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=Un(c),p=Un(u),f=d!==p?Es(n,l,c,p):parseFloat(c),h=parseFloat(u),e._pt=new li(e._pt,o,l,f,h-f,Wd),e._pt.u=p||0,e._props.push(l));pg(o,i)};oi("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});vu[e>1?"border"+r:r]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(p){return Or(o,p,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(p,g){return d[p]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,d,f)}});var z0={name:"css",register:qd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,d,p,g,m,_,v,M,y,b,E,x,S,C;np||qd(),this.styles=this.styles||D0(e),S=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(vi[g]&&b0(g,t,n,i,e,s)))){if(d=typeof u,p=vu[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Rl(u)),p)p(this,e,g,u,n)&&(x=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",gs.lastIndex=0,gs.test(c)||(m=Un(c),_=Un(u),_?m!==_&&(c=Es(e,g,c,_)+_):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),S.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],bn(c)&&~c.indexOf("random(")&&(c=Rl(c)),Un(c+"")||c==="auto"||(c+=Ai.units[g]||Un(Or(e,g))||""),(c+"").charAt(1)==="="&&(c=Or(e,g))):c=Or(e,g),h=parseFloat(c),v=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),g in gr&&(g==="autoAlpha"&&(h===1&&Or(e,"visibility")==="hidden"&&f&&(h=0),S.push("visibility",0,o.visibility),us(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=gr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in qr,M){if(this.styles.save(g),C=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Ei(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=u,u=Ei(e,"perspective"),A?e.style.perspective=A:Ts(e,"perspective")}f=parseFloat(u)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Dl(e,t.parseTransform),E=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new li(this._pt,o,Xt,0,1,b.renderTransform,b,0,-1),y.dep=1),g==="scale")this._pt=new li(this._pt,b,"scaleY",b.scaleY,(v?Za(b.scaleY,v+f):f)-b.scaleY||0,Wd),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){S.push(ci,0,o[ci]),u=n1(u),b.svg?Yd(e,u,0,E,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==b.zOrigin&&us(this,b,"zOrigin",b.zOrigin,_),us(this,o,g,yu(c),yu(u)));continue}else if(g==="svgOrigin"){Yd(e,u,1,E,0,this);continue}else if(g in F0){a1(this,b,g,h,v?Za(h,v+u):u);continue}else if(g==="smoothOrigin"){us(this,b,"smooth",b.smooth,u);continue}else if(g==="force3D"){b[g]=u;continue}else if(g==="transform"){o1(this,u,e);continue}}else g in o||(g=go(g)||g);if(M||(f||f===0)&&(h||h===0)&&!HA.test(u)&&g in o)m=(c+"").substr((h+"").length),f||(f=0),_=Un(u)||(g in Ai.units?Ai.units[g]:m),m!==_&&(h=Es(e,g,c,_)),this._pt=new li(this._pt,M?b:o,g,h,(v?Za(h,v+f):f)-h,!M&&(_==="px"||g==="zIndex")&&t.autoRound!==!1?XA:Wd),this._pt.u=_||0,M&&C!==u?(this._pt.b=c,this._pt.e=C,this._pt.r=WA):m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=VA);else if(g in o)t1.call(this,e,g,c,v?v+u:u);else if(g in e)this.add(e,g,c||e[g],v?v+u:u,i,s);else if(g!=="parseTransform"){qf(g,u);continue}M||(g in o?S.push(g,0,o[g]):typeof e[g]=="function"?S.push(g,2,e[g]()):S.push(g,1,c||e[g])),a.push(g)}}x&&R0(this)},render:function(e,t){if(t.tween._time||!ip())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Or,aliases:gr,getSetter:function(e,t,n){var i=gr[t];return i&&i.indexOf(",")<0&&(t=i),t in qr&&t!==ci&&(e._gsap.x||Or(e,"x"))?n&&ag===n?t==="scale"?KA:$A:(ag=n||{})&&(t==="scale"?ZA:JA):e.style&&!Vf(e.style[t])?qA:~t.indexOf("-")?YA:ep(e,t)},core:{_removeProperty:Ts,_getMatrix:sp}};di.utils.checkPrefix=go;di.core.getStyleSaver=D0;(function(r,e,t,n){var i=oi(r+","+e+","+t,function(s){qr[s]=1});oi(e,function(s){Ai.units[s]="deg",F0[s]=1}),gr[i[13]]=r+","+e,oi(n,function(s){var a=s.split(":");gr[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");oi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ai.units[r]="px"});di.registerPlugin(z0);var nr=di.registerPlugin(z0)||di;nr.core.Tween;function l1(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function c1(r,e,t){return e&&l1(r.prototype,e),r}var wn,Xc,ri,hs,ds,ja,H0,zs,eo,G0,kr,Zi,V0,W0=function(){return wn||typeof window<"u"&&(wn=window.gsap)&&wn.registerPlugin&&wn},X0=1,Wa=[],et=[],vr=[],rl=Date.now,$d=function(e,t){return t},u1=function(){var e=eo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,et),i.push.apply(i,vr),et=n,vr=i,$d=function(a,o){return t[a](o)}},_s=function(e,t){return~vr.indexOf(e)&&vr[vr.indexOf(e)+1][t]},sl=function(e){return!!~G0.indexOf(e)},Vn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Gn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},xc="scrollLeft",vc="scrollTop",Kd=function(){return kr&&kr.isPressed||et.cache++},Mu=function(e,t){var n=function i(s){if(s||s===0){X0&&ri.history.scrollRestoration!=="manual"&&(ri.history.scrollRestoration="manual");var a=kr&&kr.isPressed;s=i.v=Math.round(s)||(kr&&kr.iOS?1:0),e(s),i.cacheID=et.cache,a&&$d("ss",s)}else(t||et.cache!==i.cacheID||$d("ref"))&&(i.cacheID=et.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Kn={s:xc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Mu(function(r){return arguments.length?ri.scrollTo(r,pn.sc()):ri.pageXOffset||hs[xc]||ds[xc]||ja[xc]||0})},pn={s:vc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Kn,sc:Mu(function(r){return arguments.length?ri.scrollTo(Kn.sc(),r):ri.pageYOffset||hs[vc]||ds[vc]||ja[vc]||0})},ei=function(e,t){return(t&&t._ctx&&t._ctx.selector||wn.utils.toArray)(e)[0]||(typeof e=="string"&&wn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},h1=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ws=function(e,t){var n=t.s,i=t.sc;sl(e)&&(e=hs.scrollingElement||ds);var s=et.indexOf(e),a=i===pn.sc?1:2;!~s&&(s=et.push(e)-1),et[s+a]||Vn(e,"scroll",Kd);var o=et[s+a],l=o||(et[s+a]=Mu(_s(e,n),!0)||(sl(e)?i:Mu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=wn.getProperty(e,"scrollBehavior")==="smooth"),l},Zd=function(e,t,n){var i=e,s=e,a=rl(),o=a,l=t||50,c=Math.max(500,l*3),u=function(p,g){var m=rl();g||m-a>l?(s=i,i=p,o=a,a=m):n?i+=p:i=s+(p-s)/(m-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},h=function(p){var g=o,m=s,_=rl();return(p||p===0)&&p!==i&&u(p),a===o||_-o>c?0:(i+(n?m:-m))/((n?_:a)-g)*1e3};return{update:u,reset:f,getVelocity:h}},Fo=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},mg=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},q0=function(){eo=wn.core.globals().ScrollTrigger,eo&&eo.core&&u1()},Y0=function(e){return wn=e||W0(),!Xc&&wn&&typeof document<"u"&&document.body&&(ri=window,hs=document,ds=hs.documentElement,ja=hs.body,G0=[ri,hs,ds,ja],wn.utils.clamp,V0=wn.core.context||function(){},zs="onpointerenter"in ja?"pointer":"mouse",H0=en.isTouch=ri.matchMedia&&ri.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ri||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Zi=en.eventTypes=("ontouchstart"in ds?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ds?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return X0=0},500),Xc=1),eo||q0(),Xc};Kn.op=pn;et.cache=0;var en=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Xc||Y0(wn)||console.warn("Please gsap.registerPlugin(Observer)"),eo||q0();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,g=n.event,m=n.onDragStart,_=n.onDragEnd,v=n.onDrag,M=n.onPress,y=n.onRelease,b=n.onRight,E=n.onLeft,x=n.onUp,S=n.onDown,C=n.onChangeX,A=n.onChangeY,N=n.onChange,D=n.onToggleX,V=n.onToggleY,L=n.onHover,z=n.onHoverEnd,X=n.onMove,k=n.ignoreCheck,ne=n.isNormalizer,q=n.onGestureStart,P=n.onGestureEnd,ie=n.onWheel,Se=n.onEnable,ze=n.onDisable,Z=n.onClick,he=n.scrollSpeed,Me=n.capture,Te=n.allowClicks,ge=n.lockAxis,Ue=n.onLockAxis;this.target=o=ei(o)||ds,this.vars=n,d&&(d=wn.utils.toArray(d)),i=i||1e-9,s=s||0,p=p||1,he=he||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ri.getComputedStyle(ja).lineHeight)||22);var vt,Re,We,De,Be,ft,ut,K=this,it=0,tn=0,Rt=n.passive||!u&&n.passive!==!1,lt=ws(o,Kn),$t=ws(o,pn),Qt=lt(),B=$t(),mt=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Zi[0]==="pointerdown",ht=sl(o),Ge=o.ownerDocument||hs,de=[0,0,0],pt=[0,0,0],Ne=0,He=function(){return Ne=rl()},R=function(me,se){return(K.event=me)&&d&&h1(me.target,d)||se&&mt&&me.pointerType!=="touch"||k&&k(me,se)},T=function(){K._vx.reset(),K._vy.reset(),Re.pause(),f&&f(K)},G=function(){var me=K.deltaX=mg(de),se=K.deltaY=mg(pt),ee=Math.abs(me)>=i,xe=Math.abs(se)>=i;N&&(ee||xe)&&N(K,me,se,de,pt),ee&&(b&&K.deltaX>0&&b(K),E&&K.deltaX<0&&E(K),C&&C(K),D&&K.deltaX<0!=it<0&&D(K),it=K.deltaX,de[0]=de[1]=de[2]=0),xe&&(S&&K.deltaY>0&&S(K),x&&K.deltaY<0&&x(K),A&&A(K),V&&K.deltaY<0!=tn<0&&V(K),tn=K.deltaY,pt[0]=pt[1]=pt[2]=0),(De||We)&&(X&&X(K),We&&(m&&We===1&&m(K),v&&v(K),We=0),De=!1),ft&&!(ft=!1)&&Ue&&Ue(K),Be&&(ie(K),Be=!1),vt=0},ae=function(me,se,ee){de[ee]+=me,pt[ee]+=se,K._vx.update(me),K._vy.update(se),c?vt||(vt=requestAnimationFrame(G)):G()},re=function(me,se){ge&&!ut&&(K.axis=ut=Math.abs(me)>Math.abs(se)?"x":"y",ft=!0),ut!=="y"&&(de[2]+=me,K._vx.update(me,!0)),ut!=="x"&&(pt[2]+=se,K._vy.update(se,!0)),c?vt||(vt=requestAnimationFrame(G)):G()},ue=function(me){if(!R(me,1)){me=Fo(me,u);var se=me.clientX,ee=me.clientY,xe=se-K.x,te=ee-K.y,Ee=K.isDragging;K.x=se,K.y=ee,(Ee||(xe||te)&&(Math.abs(K.startX-se)>=s||Math.abs(K.startY-ee)>=s))&&(We||(We=Ee?2:1),Ee||(K.isDragging=!0),re(xe,te))}},_e=K.onPress=function(oe){R(oe,1)||oe&&oe.button||(K.axis=ut=null,Re.pause(),K.isPressed=!0,oe=Fo(oe),it=tn=0,K.startX=K.x=oe.clientX,K.startY=K.y=oe.clientY,K._vx.reset(),K._vy.reset(),Vn(ne?o:Ge,Zi[1],ue,Rt,!0),K.deltaX=K.deltaY=0,M&&M(K))},W=K.onRelease=function(oe){if(!R(oe,1)){Gn(ne?o:Ge,Zi[1],ue,!0);var me=!isNaN(K.y-K.startY),se=K.isDragging,ee=se&&(Math.abs(K.x-K.startX)>3||Math.abs(K.y-K.startY)>3),xe=Fo(oe);!ee&&me&&(K._vx.reset(),K._vy.reset(),u&&Te&&wn.delayedCall(.08,function(){if(rl()-Ne>300&&!oe.defaultPrevented){if(oe.target.click)oe.target.click();else if(Ge.createEvent){var te=Ge.createEvent("MouseEvents");te.initMouseEvent("click",!0,!0,ri,1,xe.screenX,xe.screenY,xe.clientX,xe.clientY,!1,!1,!1,!1,0,null),oe.target.dispatchEvent(te)}}})),K.isDragging=K.isGesturing=K.isPressed=!1,f&&se&&!ne&&Re.restart(!0),We&&G(),_&&se&&_(K),y&&y(K,ee)}},j=function(me){return me.touches&&me.touches.length>1&&(K.isGesturing=!0)&&q(me,K.isDragging)},ce=function(){return(K.isGesturing=!1)||P(K)},I=function(me){if(!R(me)){var se=lt(),ee=$t();ae((se-Qt)*he,(ee-B)*he,1),Qt=se,B=ee,f&&Re.restart(!0)}},Q=function(me){if(!R(me)){me=Fo(me,u),ie&&(Be=!0);var se=(me.deltaMode===1?l:me.deltaMode===2?ri.innerHeight:1)*p;ae(me.deltaX*se,me.deltaY*se,0),f&&!ne&&Re.restart(!0)}},J=function(me){if(!R(me)){var se=me.clientX,ee=me.clientY,xe=se-K.x,te=ee-K.y;K.x=se,K.y=ee,De=!0,f&&Re.restart(!0),(xe||te)&&re(xe,te)}},fe=function(me){K.event=me,L(K)},le=function(me){K.event=me,z(K)},pe=function(me){return R(me)||Fo(me,u)&&Z(K)};Re=K._dc=wn.delayedCall(h||.25,T).pause(),K.deltaX=K.deltaY=0,K._vx=Zd(0,50,!0),K._vy=Zd(0,50,!0),K.scrollX=lt,K.scrollY=$t,K.isDragging=K.isGesturing=K.isPressed=!1,V0(this),K.enable=function(oe){return K.isEnabled||(Vn(ht?Ge:o,"scroll",Kd),a.indexOf("scroll")>=0&&Vn(ht?Ge:o,"scroll",I,Rt,Me),a.indexOf("wheel")>=0&&Vn(o,"wheel",Q,Rt,Me),(a.indexOf("touch")>=0&&H0||a.indexOf("pointer")>=0)&&(Vn(o,Zi[0],_e,Rt,Me),Vn(Ge,Zi[2],W),Vn(Ge,Zi[3],W),Te&&Vn(o,"click",He,!0,!0),Z&&Vn(o,"click",pe),q&&Vn(Ge,"gesturestart",j),P&&Vn(Ge,"gestureend",ce),L&&Vn(o,zs+"enter",fe),z&&Vn(o,zs+"leave",le),X&&Vn(o,zs+"move",J)),K.isEnabled=!0,K.isDragging=K.isGesturing=K.isPressed=De=We=!1,K._vx.reset(),K._vy.reset(),Qt=lt(),B=$t(),oe&&oe.type&&_e(oe),Se&&Se(K)),K},K.disable=function(){K.isEnabled&&(Wa.filter(function(oe){return oe!==K&&sl(oe.target)}).length||Gn(ht?Ge:o,"scroll",Kd),K.isPressed&&(K._vx.reset(),K._vy.reset(),Gn(ne?o:Ge,Zi[1],ue,!0)),Gn(ht?Ge:o,"scroll",I,Me),Gn(o,"wheel",Q,Me),Gn(o,Zi[0],_e,Me),Gn(Ge,Zi[2],W),Gn(Ge,Zi[3],W),Gn(o,"click",He,!0),Gn(o,"click",pe),Gn(Ge,"gesturestart",j),Gn(Ge,"gestureend",ce),Gn(o,zs+"enter",fe),Gn(o,zs+"leave",le),Gn(o,zs+"move",J),K.isEnabled=K.isPressed=K.isDragging=!1,ze&&ze(K))},K.kill=K.revert=function(){K.disable();var oe=Wa.indexOf(K);oe>=0&&Wa.splice(oe,1),kr===K&&(kr=0)},Wa.push(K),ne&&sl(o)&&(kr=K),K.enable(g)},c1(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();en.version="3.15.1";en.create=function(r){return new en(r)};en.register=Y0;en.getAll=function(){return Wa.slice()};en.getById=function(r){return Wa.filter(function(e){return e.vars.id===r})[0]};W0()&&wn.registerPlugin(en);var Ce,Ba,je,Mt,yi,xt,ap,Su,Nl,al,qo,yc,Dn,Uu,Jd,qn,gg,_g,ka,$0,Dh,K0,Xn,Qd,Z0,J0,ts,jd,op,to,lp,xs,ef,Nh,Mc=1,Nn=Date.now,Uh=Nn(),Gi=0,Yo=0,xg=function(e,t,n){var i=xi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},vg=function(e,t){return t&&(!xi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},d1=function r(){return Yo&&requestAnimationFrame(r)},yg=function(){return Uu=1},Mg=function(){return Uu=0},cr=function(e){return e},$o=function(e){return Math.round(e*1e5)/1e5||0},Q0=function(){return typeof window<"u"},j0=function(){return Ce||Q0()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},aa=function(e){return!!~ap.indexOf(e)},ex=function(e){return(e==="Height"?lp:je["inner"+e])||yi["client"+e]||xt["client"+e]},tx=function(e){return _s(e,"getBoundingClientRect")||(aa(e)?function(){return Zc.width=je.innerWidth,Zc.height=lp,Zc}:function(){return Fr(e)})},f1=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=_s(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?ex(s):e["client"+s])||0}},p1=function(e,t){return!t||~vr.indexOf(e)?tx(e):function(){return Zc}},_r=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=_s(e,n))?a()-tx(e)()[s]:aa(e)?(yi[n]||xt[n])-ex(i):e[n]-e["offset"+i])},Sc=function(e,t){for(var n=0;n<ka.length;n+=3)(!t||~t.indexOf(ka[n+1]))&&e(ka[n],ka[n+1],ka[n+2])},xi=function(e){return typeof e=="string"},On=function(e){return typeof e=="function"},Ko=function(e){return typeof e=="number"},Hs=function(e){return typeof e=="object"},Bo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ia=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Da=Math.abs,nx="left",ix="top",cp="right",up="bottom",js="width",ea="height",ol="Right",ll="Left",cl="Top",ul="Bottom",ln="padding",Ui="margin",_o="Width",hp="Height",fn="px",Oi=function(e){return je.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},m1=function(e){var t=Oi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Sg=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Fr=function(e,t){var n=t&&Oi(e)[Jd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},bu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},rx=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},g1=function(e){return function(t){return Ce.utils.snap(rx(e),t)}},dp=function(e){var t=Ce.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},_1=function(e){return function(t,n){return dp(rx(e))(t,n.direction)}},bc=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Mn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Tc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},bg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ec={toggleActions:"play",anticipatePin:0},Tu={top:0,left:0,center:.5,bottom:1,right:1},qc=function(e,t){if(xi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Tu?Tu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},wc=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,p=Mt.createElement("div"),g=aa(n)||_s(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=g?xt:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,M=v?c:u,y="border-color:"+M+";font-size:"+f+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(y+=(i===pn?cp:up)+":"+(a+parseFloat(h))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(p,_.children[0]):_.appendChild(p),p._offset=p["offset"+i.op.d2],Yc(p,0,i,v),p},Yc=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+_o]=1,s["border"+o+_o]=0,s[n.p]=t+"px",Ce.set(e,s)},Qe=[],tf={},Ul,Tg=function(){return Nn()-Gi>34&&(Ul||(Ul=requestAnimationFrame(Wr)))},Na=function(){(!Xn||!Xn.isPressed||Xn.startX>xt.clientWidth)&&(et.cache++,Xn?Ul||(Ul=requestAnimationFrame(Wr)):Wr(),Gi||la("scrollStart"),Gi=Nn())},Oh=function(){J0=je.innerWidth,Z0=je.innerHeight},Zo=function(e){et.cache++,(e===!0||!Dn&&!K0&&!Mt.fullscreenElement&&!Mt.webkitFullscreenElement&&(!Qd||J0!==je.innerWidth||Math.abs(je.innerHeight-Z0)>je.innerHeight*.25))&&Su.restart(!0)},oa={},x1=[],sx=function r(){return Mn(st,"scrollEnd",r)||qs(!0)},la=function(e){return oa[e]&&oa[e].map(function(t){return t()})||x1},_i=[],ax=function(e){for(var t=0;t<_i.length;t+=5)(!e||_i[t+4]&&_i[t+4].query===e)&&(_i[t].style.cssText=_i[t+1],_i[t].getBBox&&_i[t].setAttribute("transform",_i[t+2]||""),_i[t+3].uncache=1)},ox=function(){et.cache++,et.forEach(function(e){return On(e)&&(e.rec=e())})},fp=function(e,t){var n;for(qn=0;qn<Qe.length;qn++)n=Qe[qn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));xs=!0,t&&ax(t),t||la("revert")},lx=function(e,t){et.cache++,(t||!Yn)&&et.forEach(function(n){return On(n)&&n.cacheID++&&(n.rec=0)}),xi(e)&&(op=e,je.history.scrollRestoration!==e&&(je.history.scrollRestoration=e))},Yn,ta=0,Eg,v1=function(){if(Eg!==ta){var e=Eg=ta;requestAnimationFrame(function(){return e===ta&&qs(!0)})}},cx=function(){xt.appendChild(to),lp=!Xn&&to.offsetHeight||je.innerHeight,xt.removeChild(to)},wg=function(e){return Nl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},qs=function(e,t){if(yi=Mt.documentElement,xt=Mt.body,ap=[je,Mt,yi,xt],Gi&&!e&&!xs){Sn(st,"scrollEnd",sx);return}cx(),Yn=st.isRefreshing=!0,xs||ox();var n=la("refreshInit");$0&&st.sort(),t||fp(),et.forEach(function(i){On(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Qe.slice(0).forEach(function(i){return i.refresh()}),xs=!1,Qe.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),ef=1,wg(!0),Qe.forEach(function(i){var s=_r(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),wg(!1),ef=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),et.forEach(function(i){On(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),lx(op,1),Su.pause(),ta++,Yn=2,Wr(2),Qe.forEach(function(i){return On(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Yn=st.isRefreshing=!1,la("refresh")},nf=0,$c=1,hl,Wr=function(e){if(e===2||!Yn&&!xs){st.isUpdating=!0,hl&&hl.update(0);var t=Qe.length,n=Nn(),i=n-Uh>=50,s=t&&Qe[0].scroll();if($c=nf>s?-1:1,Yn||(nf=s),i&&(Gi&&!Uu&&n-Gi>200&&(Gi=0,la("scrollEnd")),qo=Uh,Uh=n),$c<0){for(qn=t;qn-- >0;)Qe[qn]&&Qe[qn].update(0,i);$c=1}else for(qn=0;qn<t;qn++)Qe[qn]&&Qe[qn].update(0,i);st.isUpdating=!1}Ul=0},rf=[nx,ix,up,cp,Ui+ul,Ui+ol,Ui+cl,Ui+ll,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Kc=rf.concat([js,ea,"boxSizing","max"+_o,"max"+hp,"position",Ui,ln,ln+cl,ln+ol,ln+ul,ln+ll]),y1=function(e,t,n){no(n);var i=e._gsap;if(i.spacerIsNative)no(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Fh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=rf.length,a=t.style,o=e.style,l;s--;)l=rf[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[up]=o[cp]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[js]=bu(e,Kn)+fn,a[ea]=bu(e,pn)+fn,a[ln]=o[Ui]=o[ix]=o[nx]="0",no(i),o[js]=o["max"+_o]=n[js],o[ea]=o["max"+hp]=n[ea],o[ln]=n[ln],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},M1=/([A-Z])/g,no=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(M1,"-$1").toLowerCase())}},Ac=function(e){for(var t=Kc.length,n=e.style,i=[],s=0;s<t;s++)i.push(Kc[s],n[Kc[s]]);return i.t=e,i},S1=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Zc={left:0,top:0},Ag=function(e,t,n,i,s,a,o,l,c,u,f,h,d,p){On(e)&&(e=e(l)),xi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?qc("0"+e.substr(3),n):0));var g=d?d.time():0,m,_,v;if(d&&d.seek(0),isNaN(e)||(e=+e),Ko(e))d&&(e=Ce.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),o&&Yc(o,n,i,!0);else{On(t)&&(t=t(l));var M=(e||"0").split(" "),y,b,E,x;v=ei(t,l)||xt,y=Fr(v)||{},(!y||!y.left&&!y.top)&&Oi(v).display==="none"&&(x=v.style.display,v.style.display="block",y=Fr(v),x?v.style.display=x:v.style.removeProperty("display")),b=qc(M[0],y[i.d]),E=qc(M[1]||"0",n),e=y[i.p]-c[i.p]-u+b+s-E,o&&Yc(o,E,i,n-E<20||o._isStart&&E>20),n-=n-E}if(p&&(l[p]=e||-.001,e<0&&(e=0)),a){var S=e+n,C=a._isStart;m="scroll"+i.d2,Yc(a,S,i,C&&S>20||!C&&(f?Math.max(xt[m],yi[m]):a.parentNode[m])<=S+1),f&&(c=Fr(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+fn))}return d&&v&&(m=Fr(v),d.seek(h),_=Fr(v),d._caScrollDist=m[i.p]-_[i.p],e=e/d._caScrollDist*h),d&&d.seek(g),d?e:Math.round(e)},b1=/(webkit|moz|length|cssText|inset)/i,Rg=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===xt){e._stOrig=s.cssText,o=Oi(e);for(a in o)!+a&&!b1.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}},ux=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Rc=function(e,t,n){var i={};i[t.p]="+="+n,Ce.set(e,i)},Cg=function(e,t){var n=ws(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,p={};c=c||n();var g=ux(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=p,p[i]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){et.cache++,a.tween&&Wr()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=Ce.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Sn(e,"wheel",n.wheelHandler),st.isTouch&&Sn(e,"touchmove",n.wheelHandler),s},st=(function(){function r(t,n){Ba||r.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),jd(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Yo){this.update=this.refresh=this.kill=cr;return}n=Sg(xi(n)||Ko(n)||n.nodeType?{trigger:n}:n,Ec);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,p=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,_=s.onScrubComplete,v=s.onSnapComplete,M=s.once,y=s.snap,b=s.pinReparent,E=s.pinSpacer,x=s.containerAnimation,S=s.fastScrollEnd,C=s.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Kn:pn,N=!f&&f!==0,D=ei(n.scroller||je),V=Ce.core.getCache(D),L=aa(D),z=("pinType"in n?n.pinType:_s(D,"pinType")||L&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=N&&n.toggleActions.split(" "),ne="markers"in n?n.markers:Ec.markers,q=L?0:parseFloat(Oi(D)["border"+A.p2+_o])||0,P=this,ie=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Se=f1(D,L,A),ze=p1(D,L),Z=0,he=0,Me=0,Te=ws(D,A),ge,Ue,vt,Re,We,De,Be,ft,ut,K,it,tn,Rt,lt,$t,Qt,B,mt,ht,Ge,de,pt,Ne,He,R,T,G,ae,re,ue,_e,W,j,ce,I,Q,J,fe,le;if(P._startClamp=P._endClamp=!1,P._dir=A,m*=45,P.scroller=D,P.scroll=x?x.time.bind(x):Te,Re=Te(),xs&&Te.rec==null&&(Te.rec=Re),P.vars=n,i=i||n.animation,"refreshPriority"in n&&($0=1,n.refreshPriority===-9999&&(hl=P)),V.tweenScroll=V.tweenScroll||{top:Cg(D,pn),left:Cg(D,Kn)},P.tweenTo=ge=V.tweenScroll[A.p],P.scrubDuration=function(ee){j=Ko(ee)&&ee,j?W?W.duration(ee):W=Ce.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:j,paused:!0,onComplete:function(){return _&&_(P)}}):(W&&W.progress(1).kill(),W=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),ue=0,l||(l=i.vars.id)),y&&((!Hs(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in xt.style&&Ce.set(L?[xt,yi]:D,{scrollBehavior:"auto"}),et.forEach(function(ee){return On(ee)&&ee.target===(L?Mt.scrollingElement||yi:D)&&(ee.smooth=!1)}),vt=On(y.snapTo)?y.snapTo:y.snapTo==="labels"?g1(i):y.snapTo==="labelsDirectional"?_1(i):y.directional!==!1?function(ee,xe){return dp(y.snapTo)(ee,Nn()-he<500?0:xe.direction)}:Ce.utils.snap(y.snapTo),ce=y.duration||{min:.1,max:2},ce=Hs(ce)?al(ce.min,ce.max):al(ce,ce),I=Ce.delayedCall(y.delay||j/2||.1,function(){var ee=Te(),xe=Nn()-he<500,te=ge.tween;if((xe||Math.abs(P.getVelocity())<10)&&!te&&!Uu&&Z!==ee){var Ee=(ee-De)/lt,rt=i&&!N?i.totalProgress():Ee,Ye=xe?0:(rt-_e)/(Nn()-qo)*1e3||0,Ot=Ce.utils.clamp(-Ee,1-Ee,Da(Ye/2)*Ye/.185),nn=Ee+(y.inertia===!1?0:Ot),Ft,Ct,_t=y,un=_t.onStart,Pt=_t.onInterrupt,Rn=_t.onComplete;if(Ft=vt(nn,P),Ko(Ft)||(Ft=nn),Ct=Math.max(0,Math.round(De+Ft*lt)),ee<=Be&&ee>=De&&Ct!==ee){if(te&&!te._initted&&te.data<=Da(Ct-ee))return;y.inertia===!1&&(Ot=Ft-Ee),ge(Ct,{duration:ce(Da(Math.max(Da(nn-rt),Da(Ft-rt))*.185/Ye/.05||0)),ease:y.ease||"power3",data:Da(Ct-ee),onInterrupt:function(){return I.restart(!0)&&Pt&&Ia(P,Pt)},onComplete:function(){P.update(),Z=Te(),i&&!N&&(W?W.resetTo("totalProgress",Ft,i._tTime/i._tDur):i.progress(Ft)),ue=_e=i&&!N?i.totalProgress():P.progress,v&&v(P),Rn&&Ia(P,Rn)}},ee,Ot*lt,Ct-ee-Ot*lt),un&&Ia(P,un,ge.tween)}}else P.isActive&&Z!==ee&&I.restart(!0)}).pause()),l&&(tf[l]=P),h=P.trigger=ei(h||d!==!0&&d),le=h&&h._gsap&&h._gsap.stRevert,le&&(le=le(P)),d=d===!0?h:ei(d),xi(o)&&(o={targets:h,className:o}),d&&(p===!1||p===Ui||(p=!p&&d.parentNode&&d.parentNode.style&&Oi(d.parentNode).display==="flex"?!1:ln),P.pin=d,Ue=Ce.core.getCache(d),Ue.spacer?$t=Ue.pinState:(E&&(E=ei(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ue.spacerIsNative=!!E,E&&(Ue.spacerState=Ac(E))),Ue.spacer=mt=E||Mt.createElement("div"),mt.classList.add("pin-spacer"),l&&mt.classList.add("pin-spacer-"+l),Ue.pinState=$t=Ac(d)),n.force3D!==!1&&Ce.set(d,{force3D:!0}),P.spacer=mt=Ue.spacer,re=Oi(d),He=re[p+A.os2],Ge=Ce.getProperty(d),de=Ce.quickSetter(d,A.a,fn),Fh(d,mt,re),B=Ac(d)),ne){tn=Hs(ne)?Sg(ne,bg):bg,K=wc("scroller-start",l,D,A,tn,0),it=wc("scroller-end",l,D,A,tn,0,K),ht=K["offset"+A.op.d2];var pe=ei(_s(D,"content")||D);ft=this.markerStart=wc("start",l,pe,A,tn,ht,0,x),ut=this.markerEnd=wc("end",l,pe,A,tn,ht,0,x),x&&(fe=Ce.quickSetter([ft,ut],A.a,fn)),!z&&!(vr.length&&_s(D,"fixedMarkers")===!0)&&(m1(L?xt:D),Ce.set([K,it],{force3D:!0}),T=Ce.quickSetter(K,A.a,fn),ae=Ce.quickSetter(it,A.a,fn))}if(x){var oe=x.vars.onUpdate,me=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){P.update(0,0,1),oe&&oe.apply(x,me||[])})}if(P.previous=function(){return Qe[Qe.indexOf(P)-1]},P.next=function(){return Qe[Qe.indexOf(P)+1]},P.revert=function(ee,xe){if(!xe)return P.kill(!0);var te=ee!==!1||!P.enabled,Ee=Dn;te!==P.isReverted&&(te&&(Q=Math.max(Te(),P.scroll.rec||0),Me=P.progress,J=i&&i.progress()),ft&&[ft,ut,K,it].forEach(function(rt){return rt.style.display=te?"none":"block"}),te&&(Dn=P,P.update(te)),d&&(!b||!P.isActive)&&(te?y1(d,mt,$t):Fh(d,mt,Oi(d),R)),te||P.update(te),Dn=Ee,P.isReverted=te)},P.refresh=function(ee,xe,te,Ee){if(!((Dn||!P.enabled)&&!xe)){if(d&&ee&&Gi){Sn(r,"scrollEnd",sx);return}!Yn&&ie&&ie(P),Dn=P,ge.tween&&!te&&(ge.tween.kill(),ge.tween=0),W&&W.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(H){return H.vars.immediateRender&&H.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var rt=Se(),Ye=ze(),Ot=x?x.duration():_r(D,A),nn=lt<=.01||!lt,Ft=0,Ct=Ee||0,_t=Hs(te)?te.end:n.end,un=n.endTrigger||h,Pt=Hs(te)?te.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),Rn=P.pinnedContainer=n.pinnedContainer&&ei(n.pinnedContainer,P),fi=h&&Math.max(0,Qe.indexOf(P))||0,Kt=fi,rn,hn,pi,pa,dn,Zt,Pi,Eo,Gl,Yr,w,U,$;for(ne&&Hs(te)&&(U=Ce.getProperty(K,A.p),$=Ce.getProperty(it,A.p));Kt-- >0;)Zt=Qe[Kt],Zt.end||Zt.refresh(0,1)||(Dn=P),Pi=Zt.pin,Pi&&(Pi===h||Pi===d||Pi===Rn)&&!Zt.isReverted&&(Yr||(Yr=[]),Yr.unshift(Zt),Zt.revert(!0,!0)),Zt!==Qe[Kt]&&(fi--,Kt--);for(On(Pt)&&(Pt=Pt(P)),Pt=xg(Pt,"start",P),De=Ag(Pt,h,rt,A,Te(),ft,K,P,Ye,q,z,Ot,x,P._startClamp&&"_startClamp")||(d?-.001:0),On(_t)&&(_t=_t(P)),xi(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(xi(Pt)?Pt.split(" ")[0]:"")+_t:(Ft=qc(_t.substr(2),rt),_t=xi(Pt)?Pt:(x?Ce.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,De):De)+Ft,un=h)),_t=xg(_t,"end",P),Be=Math.max(De,Ag(_t||(un?"100% 0":Ot),un,rt,A,Te()+Ft,ut,it,P,Ye,q,z,Ot,x,P._endClamp&&"_endClamp"))||-.001,Ft=0,Kt=fi;Kt--;)Zt=Qe[Kt]||{},Pi=Zt.pin,Pi&&Zt.start-Zt._pinPush<=De&&!x&&Zt.end>0&&(rn=Zt.end-(P._startClamp?Math.max(0,Zt.start):Zt.start),(Pi===h&&Zt.start-Zt._pinPush<De||Pi===Rn)&&isNaN(Pt)&&(Ft+=rn*(1-Zt.progress)),Pi===d&&(Ct+=rn));if(De+=Ft,Be+=Ft,P._startClamp&&(P._startClamp+=Ft),P._endClamp&&!Yn&&(P._endClamp=Be||-.001,Be=Math.min(Be,_r(D,A))),lt=Be-De||(De-=.01)&&.001,nn&&(Me=Ce.utils.clamp(0,1,Ce.utils.normalize(De,Be,Q))),P._pinPush=Ct,ft&&Ft&&(rn={},rn[A.a]="+="+Ft,Rn&&(rn[A.p]="-="+Te()),Ce.set([ft,ut],rn)),d&&!(ef&&P.end>=_r(D,A)))rn=Oi(d),pa=A===pn,pi=Te(),pt=parseFloat(Ge(A.a))+Ct,!Ot&&Be>1&&(w=(L?Mt.scrollingElement||yi:D).style,w={style:w,value:w["overflow"+A.a.toUpperCase()]},L&&Oi(xt)["overflow"+A.a.toUpperCase()]!=="scroll"&&(w.style["overflow"+A.a.toUpperCase()]="scroll")),Fh(d,mt,rn),B=Ac(d),hn=Fr(d,!0),Eo=z&&ws(D,pa?Kn:pn)(),p?(R=[p+A.os2,lt+Ct+fn],R.t=mt,Kt=p===ln?bu(d,A)+lt+Ct:0,Kt&&(R.push(A.d,Kt+fn),mt.style.flexBasis!=="auto"&&(mt.style.flexBasis=Kt+fn)),no(R),Rn&&Qe.forEach(function(H){H.pin===Rn&&H.vars.pinSpacing!==!1&&(H._subPinOffset=!0)}),z&&Te(Q)):(Kt=bu(d,A),Kt&&mt.style.flexBasis!=="auto"&&(mt.style.flexBasis=Kt+fn)),z&&(dn={top:hn.top+(pa?pi-De:Eo)+fn,left:hn.left+(pa?Eo:pi-De)+fn,boxSizing:"border-box",position:"fixed"},dn[js]=dn["max"+_o]=Math.ceil(hn.width)+fn,dn[ea]=dn["max"+hp]=Math.ceil(hn.height)+fn,dn[Ui]=dn[Ui+cl]=dn[Ui+ol]=dn[Ui+ul]=dn[Ui+ll]="0",dn[ln]=rn[ln],dn[ln+cl]=rn[ln+cl],dn[ln+ol]=rn[ln+ol],dn[ln+ul]=rn[ln+ul],dn[ln+ll]=rn[ln+ll],Qt=S1($t,dn,b),Yn&&Te(0)),i?(Gl=i._initted,Dh(1),i.render(i.duration(),!0,!0),Ne=Ge(A.a)-pt+lt+Ct,G=Math.abs(lt-Ne)>1,z&&G&&Qt.splice(Qt.length-2,2),i.render(0,!0,!0),Gl||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Dh(0)):Ne=lt,w&&(w.value?w.style["overflow"+A.a.toUpperCase()]=w.value:w.style.removeProperty("overflow-"+A.a));else if(h&&Te()&&!x)for(hn=h.parentNode;hn&&hn!==xt;)hn._pinOffset&&(De-=hn._pinOffset,Be-=hn._pinOffset),hn=hn.parentNode;Yr&&Yr.forEach(function(H){return H.revert(!1,!0)}),P.start=De,P.end=Be,Re=We=Yn?Q:Te(),!x&&!Yn&&!xs&&(Re<Q&&Te(Q),P.scroll.rec=0),P.revert(!1,!0),he=Nn(),I&&(Z=-1,I.restart(!0)),Dn=0,i&&N&&(i._initted||J)&&i.progress()!==J&&i.progress(J||0,!0).render(i.time(),!0,!0),(nn||Me!==P.progress||x||g||i&&!i._initted)&&(i&&!N&&(i._initted||Me||i.vars.immediateRender!==!1)&&i.totalProgress(x&&De<-.001&&!Me?Ce.utils.normalize(De,Be,0):Me,!0),P.progress=nn||(Re-De)/lt===Me?0:Me),d&&p&&(mt._pinOffset=Math.round(P.progress*Ne)),W&&W.invalidate(),isNaN(U)||(U-=Ce.getProperty(K,A.p),$-=Ce.getProperty(it,A.p),Rc(K,A,U),Rc(ft,A,U-(Ee||0)),Rc(it,A,$),Rc(ut,A,$-(Ee||0))),nn&&!Yn&&P.update(),u&&!Yn&&!Rt&&(Rt=!0,u(P),Rt=!1)}},P.getVelocity=function(){return(Te()-We)/(Nn()-qo)*1e3||0},P.endAnimation=function(){Bo(P.callbackAnimation),i&&(W?W.progress(1):i.paused()?N||Bo(i,P.direction<0,1):Bo(i,i.reversed()))},P.labelToScroll=function(ee){return i&&i.labels&&(De||P.refresh()||De)+i.labels[ee]/i.duration()*lt||0},P.getTrailing=function(ee){var xe=Qe.indexOf(P),te=P.direction>0?Qe.slice(0,xe).reverse():Qe.slice(xe+1);return(xi(ee)?te.filter(function(Ee){return Ee.vars.preventOverlaps===ee}):te).filter(function(Ee){return P.direction>0?Ee.end<=De:Ee.start>=Be})},P.update=function(ee,xe,te){if(!(x&&!te&&!ee)){var Ee=Yn===!0?Q:P.scroll(),rt=ee?0:(Ee-De)/lt,Ye=rt<0?0:rt>1?1:rt||0,Ot=P.progress,nn,Ft,Ct,_t,un,Pt,Rn,fi;if(xe&&(We=Re,Re=x?Te():Ee,y&&(_e=ue,ue=i&&!N?i.totalProgress():Ye)),m&&d&&!Dn&&!Mc&&Gi&&(!Ye&&De<Ee+(Ee-We)/(Nn()-qo)*m?Ye=1e-4:Ye===1&&Be>Ee+(Ee-We)/(Nn()-qo)*m&&(Ye=.9999)),Ye!==Ot&&P.enabled){if(nn=P.isActive=!!Ye&&Ye<1,Ft=!!Ot&&Ot<1,Pt=nn!==Ft,un=Pt||!!Ye!=!!Ot,P.direction=Ye>Ot?1:-1,P.progress=Ye,un&&!Dn&&(Ct=Ye&&!Ot?0:Ye===1?1:Ot===1?2:3,N&&(_t=!Pt&&k[Ct+1]!=="none"&&k[Ct+1]||k[Ct],fi=i&&(_t==="complete"||_t==="reset"||_t in i))),C&&(Pt||fi)&&(fi||f||!i)&&(On(C)?C(P):P.getTrailing(C).forEach(function(pi){return pi.endAnimation()})),N||(W&&!Dn&&!Mc?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",Ye,i._tTime/i._tDur):(W.vars.totalProgress=Ye,W.invalidate().restart())):i&&i.totalProgress(Ye,!!(Dn&&(he||ee)))),d){if(ee&&p&&(mt.style[p+A.os2]=He),!z)de($o(pt+Ne*Ye));else if(un){if(Rn=!ee&&Ye>Ot&&Be+1>Ee&&Ee+1>=_r(D,A),b)if(!ee&&(nn||Rn)){var Kt=Fr(d,!0),rn=Ee-De;Rg(d,xt,Kt.top+(A===pn?rn:0)+fn,Kt.left+(A===pn?0:rn)+fn)}else Rg(d,mt);no(nn||Rn?Qt:B),G&&Ye<1&&nn||de(pt+(Ye===1&&!Rn?Ne:0))}}y&&!ge.tween&&!Dn&&!Mc&&I.restart(!0),o&&(Pt||M&&Ye&&(Ye<1||!Nh))&&Nl(o.targets).forEach(function(pi){return pi.classList[nn||M?"add":"remove"](o.className)}),a&&!N&&!ee&&a(P),un&&!Dn?(N&&(fi&&(_t==="complete"?i.pause().totalProgress(1):_t==="reset"?i.restart(!0).pause():_t==="restart"?i.restart(!0):i[_t]()),a&&a(P)),(Pt||!Nh)&&(c&&Pt&&Ia(P,c),X[Ct]&&Ia(P,X[Ct]),M&&(Ye===1?P.kill(!1,1):X[Ct]=0),Pt||(Ct=Ye===1?1:3,X[Ct]&&Ia(P,X[Ct]))),S&&!nn&&Math.abs(P.getVelocity())>(Ko(S)?S:2500)&&(Bo(P.callbackAnimation),W?W.progress(1):Bo(i,_t==="reverse"?1:!Ye,1))):N&&a&&!Dn&&a(P)}if(ae){var hn=x?Ee/x.duration()*(x._caScrollDist||0):Ee;T(hn+(K._isFlipped?1:0)),ae(hn)}fe&&fe(-Ee/x.duration()*(x._caScrollDist||0))}},P.enable=function(ee,xe){P.enabled||(P.enabled=!0,Sn(D,"resize",Zo),L||Sn(D,"scroll",Na),ie&&Sn(r,"refreshInit",ie),ee!==!1&&(P.progress=Me=0,Re=We=Z=Te()),xe!==!1&&P.refresh())},P.getTween=function(ee){return ee&&ge?ge.tween:W},P.setPositions=function(ee,xe,te,Ee){if(x){var rt=x.scrollTrigger,Ye=x.duration(),Ot=rt.end-rt.start;ee=rt.start+Ot*ee/Ye,xe=rt.start+Ot*xe/Ye}P.refresh(!1,!1,{start:vg(ee,te&&!!P._startClamp),end:vg(xe,te&&!!P._endClamp)},Ee),P.update()},P.adjustPinSpacing=function(ee){if(R&&ee){var xe=R.indexOf(A.d)+1;R[xe]=parseFloat(R[xe])+ee+fn,R[1]=parseFloat(R[1])+ee+fn,no(R)}},P.disable=function(ee,xe){if(ee!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,xe||W&&W.pause(),Q=0,Ue&&(Ue.uncache=1),ie&&Mn(r,"refreshInit",ie),I&&(I.pause(),ge.tween&&ge.tween.kill()&&(ge.tween=0)),!L)){for(var te=Qe.length;te--;)if(Qe[te].scroller===D&&Qe[te]!==P)return;Mn(D,"resize",Zo),L||Mn(D,"scroll",Na)}},P.kill=function(ee,xe){P.disable(ee,xe),W&&!xe&&W.kill(),l&&delete tf[l];var te=Qe.indexOf(P);te>=0&&Qe.splice(te,1),te===qn&&$c>0&&qn--,te=0,Qe.forEach(function(Ee){return Ee.scroller===P.scroller&&(te=1)}),te||Yn||xs||(P.scroll.rec=0),i&&(i.scrollTrigger=null,ee&&i.revert({kill:!1}),xe||i.kill()),ft&&[ft,ut,K,it].forEach(function(Ee){return Ee.parentNode&&Ee.parentNode.removeChild(Ee)}),hl===P&&(hl=0),d&&(Ue&&(Ue.uncache=1),te=0,Qe.forEach(function(Ee){return Ee.pin===d&&te++}),te||(Ue.spacer=0)),n.onKill&&n.onKill(P)},Qe.push(P),P.enable(!1,!1),le&&le(P),i&&i.add&&!lt){var se=P.update;P.update=function(){P.update=se,et.cache++,De||Be||P.refresh()},Ce.delayedCall(.01,P.update),lt=.01,De=Be=0}else P.refresh();d&&v1()},r.register=function(n){return Ba||(Ce=n||j0(),Q0()&&window.document&&r.enable(),Ba=Yo),Ba},r.defaults=function(n){if(n)for(var i in n)Ec[i]=n[i];return Ec},r.disable=function(n,i){Yo=0,Qe.forEach(function(a){return a[i?"kill":"disable"](n)}),Mn(je,"wheel",Na),Mn(Mt,"scroll",Na),clearInterval(yc),Mn(Mt,"touchcancel",cr),Mn(xt,"touchstart",cr),bc(Mn,Mt,"pointerdown,touchstart,mousedown",yg),bc(Mn,Mt,"pointerup,touchend,mouseup",Mg),Su.kill(),Sc(Mn);for(var s=0;s<et.length;s+=3)Tc(Mn,et[s],et[s+1]),Tc(Mn,et[s],et[s+2])},r.enable=function(){if(je=window,Mt=document,yi=Mt.documentElement,xt=Mt.body,Ce){if(Nl=Ce.utils.toArray,al=Ce.utils.clamp,jd=Ce.core.context||cr,Dh=Ce.core.suppressOverwrites||cr,op=je.history.scrollRestoration||"auto",nf=je.pageYOffset||0,Ce.core.globals("ScrollTrigger",r),xt){Yo=1,to=document.createElement("div"),to.style.height="100vh",to.style.position="absolute",cx(),d1(),en.register(Ce),r.isTouch=en.isTouch,ts=en.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Qd=en.isTouch===1,Sn(je,"wheel",Na),ap=[je,Mt,yi,xt],Ce.matchMedia?(r.matchMedia=function(u){var f=Ce.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},Ce.addEventListener("matchMediaInit",function(){ox(),fp()}),Ce.addEventListener("matchMediaRevert",function(){return ax()}),Ce.addEventListener("matchMedia",function(){qs(0,1),la("matchMedia")}),Ce.matchMedia().add("(orientation: portrait)",function(){return Oh(),Oh})):console.warn("Requires GSAP 3.11.0 or later"),Oh(),Sn(Mt,"scroll",Na);var n=xt.hasAttribute("style"),i=xt.style,s=i.borderTopStyle,a=Ce.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Fr(xt),pn.m=Math.round(o.top+pn.sc())||0,Kn.m=Math.round(o.left+Kn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),yc=setInterval(Tg,250),Ce.delayedCall(.5,function(){return Mc=0}),Sn(Mt,"touchcancel",cr),Sn(xt,"touchstart",cr),bc(Sn,Mt,"pointerdown,touchstart,mousedown",yg),bc(Sn,Mt,"pointerup,touchend,mouseup",Mg),Jd=Ce.utils.checkPrefix("transform"),Kc.push(Jd),Ba=Nn(),Su=Ce.delayedCall(.2,qs).pause(),ka=[Mt,"visibilitychange",function(){var u=je.innerWidth,f=je.innerHeight;Mt.hidden?(gg=u,_g=f):(gg!==u||_g!==f)&&Zo()},Mt,"DOMContentLoaded",qs,je,"load",qs,je,"resize",Zo],Sc(Sn),Qe.forEach(function(u){return u.enable(0,1)}),l=0;l<et.length;l+=3)Tc(Mn,et[l],et[l+1]),Tc(Mn,et[l],et[l+2])}else if(Mt){var c=function u(){r.enable(),Mt.removeEventListener("DOMContentLoaded",u)};Mt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Nh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(yc)||(yc=i)&&setInterval(Tg,i),"ignoreMobileResize"in n&&(Qd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Sc(Mn)||Sc(Sn,n.autoRefreshEvents||"none"),K0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=ei(n),a=et.indexOf(s),o=aa(s);~a&&et.splice(a,o?6:2),i&&(o?vr.unshift(je,i,xt,i,yi,i):vr.unshift(s,i))},r.clearMatchMedia=function(n){Qe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(xi(n)?ei(n):n).getBoundingClientRect(),o=a[s?js:ea]*i||0;return s?a.right-o>0&&a.left+o<je.innerWidth:a.bottom-o>0&&a.top+o<je.innerHeight},r.positionInViewport=function(n,i,s){xi(n)&&(n=ei(n));var a=n.getBoundingClientRect(),o=a[s?js:ea],l=i==null?o/2:i in Tu?Tu[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/je.innerWidth:(a.top+l)/je.innerHeight},r.killAll=function(n){if(Qe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=oa.killAll||[];oa={},i.forEach(function(s){return s()})}},r})();st.version="3.15.1";st.saveStyles=function(r){return r?Nl(r).forEach(function(e){if(e&&e.style){var t=_i.indexOf(e);t>=0&&_i.splice(t,5),_i.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ce.core.getCache(e),jd())}}):_i};st.revert=function(r,e){return fp(!r,e)};st.create=function(r,e){return new st(r,e)};st.refresh=function(r){return r?Zo(!0):(Ba||st.register())&&qs(!0)};st.update=function(r){return++et.cache&&Wr(r===!0?2:0)};st.clearScrollMemory=lx;st.maxScroll=function(r,e){return _r(r,e?Kn:pn)};st.getScrollFunc=function(r,e){return ws(ei(r),e?Kn:pn)};st.getById=function(r){return tf[r]};st.getAll=function(){return Qe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};st.isScrolling=function(){return!!Gi};st.snapDirectional=dp;st.addEventListener=function(r,e){var t=oa[r]||(oa[r]=[]);~t.indexOf(e)||t.push(e)};st.removeEventListener=function(r,e){var t=oa[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};st.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],h=[],d=Ce.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(p){f.length||d.restart(!0),f.push(p.trigger),h.push(p),s<=f.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&On(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return On(s)&&(s=s(),Sn(st,"refresh",function(){return s=e.batchMax()})),Nl(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(st.create(c))}),t};var Pg=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Bh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(en.isTouch?" pinch-zoom":""):"none",e===yi&&r(xt,t)},Cc={auto:1,scroll:1},T1=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ce.core.getCache(s),o=Nn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Cc[(l=Oi(s)).overflowY]||Cc[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!aa(s)&&(Cc[(l=Oi(s)).overflowY]||Cc[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},hx=function(e,t,n,i){return en.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&T1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Sn(Mt,en.eventTypes[0],Ig,!1,!0)},onDisable:function(){return Mn(Mt,en.eventTypes[0],Ig,!0)}})},E1=/(input|label|select|textarea)/i,Lg,Ig=function(e){var t=E1.test(e.target.tagName);(t||Lg)&&(e._gsapAllow=!0,Lg=t)},w1=function(e){Hs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=ei(e.target)||yi,u=Ce.core.globals().ScrollSmoother,f=u&&u.get(),h=ts&&(e.content&&ei(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=ws(c,pn),p=ws(c,Kn),g=1,m=(en.isTouch&&je.visualViewport?je.visualViewport.scale*je.visualViewport.width:je.outerWidth)/je.innerWidth,_=0,v=On(i)?function(){return i(o)}:function(){return i||2.8},M,y,b=hx(c,e.type,!0,s),E=function(){return y=!1},x=cr,S=cr,C=function(){l=_r(c,pn),S=al(ts?1:0,l),n&&(x=al(0,_r(c,Kn))),M=ta},A=function(){h._gsap.y=$o(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},N=function(){if(y){requestAnimationFrame(E);var ne=$o(o.deltaY/2),q=S(d.v-ne);if(h&&q!==d.v+d.offset){d.offset=q-d.v;var P=$o((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",d.cacheID=et.cache,Wr()}return!0}d.offset&&A(),y=!0},D,V,L,z,X=function(){C(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return h&&Ce.set(h,{y:"+=0"}),e.ignoreCheck=function(k){return ts&&k.type==="touchmove"&&N()||g>1.05&&k.type!=="touchstart"||o.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){y=!1;var k=g;g=$o((je.visualViewport&&je.visualViewport.scale||1)/m),D.pause(),k!==g&&Bh(c,g>1.01?!0:n?!1:"x"),V=p(),L=d(),C(),M=ta},e.onRelease=e.onGestureStart=function(k,ne){if(d.offset&&A(),!ne)z.restart(!0);else{et.cache++;var q=v(),P,ie;n&&(P=p(),ie=P+q*.05*-k.velocityX/.227,q*=Pg(p,P,ie,_r(c,Kn)),D.vars.scrollX=x(ie)),P=d(),ie=P+q*.05*-k.velocityY/.227,q*=Pg(d,P,ie,_r(c,pn)),D.vars.scrollY=S(ie),D.invalidate().duration(q).play(.01),(ts&&D.vars.scrollY>=l||P>=l-1)&&Ce.to({},{onUpdate:X,duration:q})}a&&a(k)},e.onWheel=function(){D._ts&&D.pause(),Nn()-_>1e3&&(M=0,_=Nn())},e.onChange=function(k,ne,q,P,ie){if(ta!==M&&C(),ne&&n&&p(x(P[2]===ne?V+(k.startX-k.x):p()+ne-P[1])),q){d.offset&&A();var Se=ie[2]===q,ze=Se?L+k.startY-k.y:d()+q-ie[1],Z=S(ze);Se&&ze!==Z&&(L+=Z-ze),d(Z)}(q||ne)&&Wr()},e.onEnable=function(){Bh(c,n?!1:"x"),st.addEventListener("refresh",X),Sn(je,"resize",X),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),b.enable()},e.onDisable=function(){Bh(c,!0),Mn(je,"resize",X),st.removeEventListener("refresh",X),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new en(e),o.iOS=ts,ts&&!d()&&d(1),ts&&Ce.ticker.add(cr),z=o._dc,D=Ce.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ux(d,d(),function(){return D.pause()})},onUpdate:Wr,onComplete:z.vars.onComplete}),o};st.sort=function(r){if(On(r))return Qe.sort(r);var e=je.pageYOffset||0;return st.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+je.innerHeight}),Qe.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};st.observe=function(r){return new en(r)};st.normalizeScroll=function(r){if(typeof r>"u")return Xn;if(r===!0&&Xn)return Xn.enable();if(r===!1){Xn&&Xn.kill(),Xn=r;return}var e=r instanceof en?r:w1(r);return Xn&&Xn.target===e.target&&Xn.kill(),aa(e.target)&&(Xn=e),e};st.core={_getVelocityProp:Zd,_inputObserver:hx,_scrollers:et,_proxies:vr,bridge:{ss:function(){Gi||la("scrollStart"),Gi=Nn()},ref:function(){return Dn}}};j0()&&Ce.registerPlugin(st);const F=(r,e)=>({en:r,ar:e}),dl=["tablets","refined","washed","rock","road"],ca={tablets:{id:"tablets",short:F("Tablets","أقراص"),name:F("Compressed tablets","أقراص مضغوطة"),sack:{texture:null,scale:1,back:1},particle:{kind:"tablet",count:64,size:1,tint:"#f7f5ee",rough:.86},hero:{title:F("Salt, pressed.","ملح، مضغوط."),line:F("Fifty kilos of compressed tablets, sealed in a laminated sack.","خمسون كيلو من الأقراص المضغوطة، محكمة في شيكارة مبطّنة.")},purity:{value:"≥ 99.5 %",label:F("sodium chloride","كلوريد الصوديوم")},pack:{title:F("Fifty kilos","خمسون كيلو"),tags:[F("Vacuum refined","مكرّر بالتفريغ"),F("Food grade","درجة غذائية"),F("UV print","طباعة UV")]},pour:{title:F("One arc","قوس واحد"),line:F("Tip the sack and the tablets leave it one by one.","أمِل الشيكارة، فتخرج الأقراص واحدة واحدة."),countLabel:F("tablets poured","قرص مصبوب")},close:{eyebrow:F("03 · one tablet","03 · قرص واحد"),nav:F("Tablet","قرص"),title:F("25 · 11 · 15","25 · 11 · 15"),line:F("Millimetres across, millimetres deep, grams of salt.","مليمترات عرضًا، ومليمترات عمقًا، وجرامات ملح."),standard:{value:"EN 973",label:"ASTM E534"}},why:{title:F("Slow by design","البطء مقصود"),line:F("Pressed dense, it gives the brine a steady face — weeks, not hours.","مضغوط بكثافة، يمنح المحلول سطحًا ثابتًا — أسابيع، لا ساعات.")},dissolve:{from:25,to:6,unit:F("mm","مم"),label:F("left after six weeks","المتبقي بعد ستة أسابيع")},where:{title:F("Every brine tank","في كل خزان محلول"),places:[F("Water softening","تنعيم المياه"),F("Steam and power","البخار والطاقة"),F("Hotels and hospitals","فنادق ومستشفيات"),F("Industrial resin beds","أسرّة راتنج صناعية")]},range:{badge:F("Food grade","درجة غذائية"),accent:"#12403c",uses:[F("Water softening","تنعيم المياه"),F("Power plants","محطات الطاقة"),F("Hotels and hospitals","فنادق ومستشفيات")]},specs:[{label:F("Form","الشكل"),value:F("Compressed tablet","قرص مضغوط")},{label:F("Diameter","القطر"),value:F("25 mm","25 مم")},{label:F("Thickness","السماكة"),value:F("11 mm","11 مم")},{label:F("Net mass","الوزن الصافي"),value:F("~15 g","~15 جم")},{label:F("NaCl","كلوريد الصوديوم"),value:F("≥ 99.50 %","≥ 99.50 %")},{label:F("Moisture","الرطوبة"),value:F("≤ 0.20 %","≤ 0.20 %")}]},refined:{id:"refined",short:F("Refined","مكرّر"),name:F("Refined fine salt","ملح مكرّر ناعم"),sack:{texture:"sack-refined-50kg.png",scale:1,back:1},particle:{kind:"grain",count:260,size:1,tint:"#fbfaf6",rough:.7,heap:{count:16,scale:1.25}},hero:{title:F("Salt, refined.","ملح، مكرّر."),line:F("Fifty kilos of refined crystals — dry, free-flowing, food grade.","خمسون كيلو من البلورات المكرّرة — جافة، سائبة، بدرجة غذائية.")},purity:{value:"≥ 99.4 %",label:F("sodium chloride","كلوريد الصوديوم")},pack:{title:F("Fifty kilos","خمسون كيلو"),tags:[F("Refined","مكرّر"),F("Free-flowing","سائب"),F("Food grade","درجة غذائية")]},pour:{title:F("A steady stream","سيل ثابت"),line:F("The sack tips and the crystals run free.","تميل الشيكارة فتنساب البلورات بحرّية."),countLabel:F("crystals poured","بلورة مصبوبة")},close:{eyebrow:F("03 · one grain","03 · حبيبة واحدة"),nav:F("Grain","حبيبة"),title:F("0.2 · 0.8","0.2 · 0.8"),line:F("Millimetres across — dry enough to flow, fine enough to dissolve fast.","مليمترات عرضًا — جاف بقدر ما ينساب، وناعم بقدر ما يذوب سريعًا."),standard:{value:"EN 973",label:"CODEX"}},why:{title:F("Dried to the gram","مجفَّف بالجرام"),line:F("Moisture held at 0.10 %, so the crystal never cakes in the silo.","الرطوبة مثبّتة عند 0.10 %، فالبلورة لا تتكتّل في الصومعة.")},dissolve:{from:.1,to:.1,unit:F("%","%"),label:F("moisture at packing","رطوبة عند التعبئة"),fixed:!0},where:{title:F("Where fine salt goes","أين يذهب الملح الناعم"),places:[F("Food and dairy","الأغذية والألبان"),F("Chlor-alkali plants","مصانع الكلور القلوي"),F("Textile dyeing","صباغة المنسوجات"),F("Detergents","المنظفات")]},range:{badge:F("Food grade","درجة غذائية"),accent:"#1f6b5e",uses:[F("Table salt","ملح المائدة"),F("Bakery","مخبوزات"),F("Dairy","ألبان")]},specs:[{label:F("Form","الشكل"),value:F("Refined crystal","بلورة مكرّرة")},{label:F("Grain size","مقاس الحبيبة"),value:F("0.2 – 0.8 mm","0.2 – 0.8 مم")},{label:F("NaCl","كلوريد الصوديوم"),value:F("≥ 99.40 %","≥ 99.40 %")},{label:F("Moisture","الرطوبة"),value:F("≤ 0.10 %","≤ 0.10 %")},{label:F("Insolubles","غير الذائب"),value:F("≤ 0.05 %","≤ 0.05 %")},{label:F("Packing","التعبئة"),value:F("50 kg bag","شيكارة 50 كجم")}]},washed:{id:"washed",short:F("Washed","مغسول"),name:F("Washed salt","ملح مغسول"),sack:{texture:"sack-washed-1t.png",scale:1.22,back:1.16},particle:{kind:"crystal",count:110,size:1,tint:"#f4f1e7",rough:.92,heap:{count:11,scale:1.45}},hero:{title:F("Salt, washed.","ملح، مغسول."),line:F("One tonne of washed crystals in a jumbo bag, ready for the plant.","طن من البلورات المغسولة في شيكارة جامبو، جاهز للمصنع.")},purity:{value:"≥ 98.5 %",label:F("sodium chloride","كلوريد الصوديوم")},pack:{title:F("One tonne","طن واحد"),tags:[F("Washed","مغسول"),F("Jumbo bag","شيكارة جامبو"),F("Lifting loops","حِمالات رفع")]},pour:{title:F("A wide band","شريط عريض"),line:F("Washed crystals pour in an even band.","تنسكب البلورات المغسولة في شريط متساوٍ."),countLabel:F("crystals poured","بلورة مصبوبة")},close:{eyebrow:F("03 · the crystal","03 · البلورة"),nav:F("Crystal","بلورة"),title:F("1 – 4","1 – 4"),line:F("Millimetres of washed crystal, graded for the brine plant.","مليمترات من البلورة المغسولة، مصنّفة لمحطة المحلول."),standard:{value:"ISO 2479",label:"EN 973"}},why:{title:F("Washed clean","مغسول حتى النقاء"),line:F("The wash water lifts clay and gypsum off the crystal before drying.","ماء الغسيل يرفع الطفلة والجبس عن البلورة قبل التجفيف.")},dissolve:{from:98.5,to:98.5,unit:F("%","%"),label:F("NaCl after washing","كلوريد صوديوم بعد الغسيل"),fixed:!0},where:{title:F("Where industrial salt goes","أين يذهب الملح الصناعي"),places:[F("Brine regeneration","تجديد المحاليل"),F("Chemical feed","تغذية كيميائية"),F("Water authorities","هيئات المياه"),F("Export bulk","تصدير سائب")]},range:{badge:F("Industrial","صناعي"),accent:"#2f6f86",uses:[F("Chlor-alkali","الكلور والقلويات"),F("Detergents","منظفات"),F("Textiles","منسوجات")]},specs:[{label:F("Form","الشكل"),value:F("Washed crystal","بلورة مغسولة")},{label:F("Grain size","مقاس الحبيبة"),value:F("1 – 4 mm","1 – 4 مم")},{label:F("NaCl","كلوريد الصوديوم"),value:F("≥ 98.50 %","≥ 98.50 %")},{label:F("Moisture","الرطوبة"),value:F("≤ 2.00 %","≤ 2.00 %")},{label:F("Insolubles","غير الذائب"),value:F("≤ 0.30 %","≤ 0.30 %")},{label:F("Packing","التعبئة"),value:F("1 MT jumbo","جامبو 1 طن")}]},rock:{id:"rock",short:F("Rock","صخري"),name:F("Rock salt","ملح صخري"),sack:{texture:"sack-rock-1t.png",scale:1.22,back:1.16},particle:{kind:"crystal",count:80,size:1.7,tint:"#e6e2d6",rough:.95,heap:{count:8,scale:1.7}},hero:{title:F("Salt, mined.","ملح، مستخرج."),line:F("One tonne of rock salt, screened and graded for industry.","طن من الملح الصخري، منخول ومصنّف للصناعة.")},purity:{value:"≥ 96.0 %",label:F("sodium chloride","كلوريد الصوديوم")},pack:{title:F("One tonne","طن واحد"),tags:[F("Screened","منخول"),F("Industrial","صناعي"),F("Jumbo bag","شيكارة جامبو")]},pour:{title:F("A slow slide","انزلاق بطيء"),line:F("Screened rock salt tumbles out in chunks.","يتدحرج الملح الصخري المنخول كتلًا."),countLabel:F("crystals poured","بلورة مصبوبة")},close:{eyebrow:F("03 · the crystal","03 · البلورة"),nav:F("Crystal","بلورة"),title:F("3 – 10","3 – 10"),line:F("Millimetres of screened rock salt, hard and slow to melt.","مليمترات من الملح الصخري المنخول، صلب وبطيء الذوبان."),standard:{value:"ISO 2479",label:"EN 973"}},why:{title:F("As it comes out","كما يخرج"),line:F("Mined, crushed and screened — no wash, no waiting.","يُستخرج ويُكسّر ويُنخل — بلا غسيل ولا انتظار.")},dissolve:{from:96,to:96,unit:F("%","%"),label:F("NaCl as mined","كلوريد صوديوم كما يُستخرج"),fixed:!0},where:{title:F("Where rock salt goes","أين يذهب الملح الصخري"),places:[F("Chlor-alkali","الكلور القلوي"),F("Leather and dye","الجلود والصباغة"),F("Concrete admixtures","إضافات الخرسانة"),F("Export bulk","تصدير سائب")]},range:{badge:F("Industrial","صناعي"),accent:"#8a5a34",uses:[F("Water treatment","معالجة المياه"),F("Ice control","مكافحة الجليد"),F("Construction","إنشاءات")]},specs:[{label:F("Form","الشكل"),value:F("Rock crystal","بلورة صخرية")},{label:F("Grain size","مقاس الحبيبة"),value:F("3 – 10 mm","3 – 10 مم")},{label:F("NaCl","كلوريد الصوديوم"),value:F("≥ 96.00 %","≥ 96.00 %")},{label:F("Moisture","الرطوبة"),value:F("≤ 3.00 %","≤ 3.00 %")},{label:F("Insolubles","غير الذائب"),value:F("≤ 1.50 %","≤ 1.50 %")},{label:F("Packing","التعبئة"),value:F("1 MT jumbo","جامبو 1 طن")}]},road:{id:"road",short:F("Road","طرق"),name:F("Road salt","ملح طرق"),sack:{texture:"sack-road-1t.png",scale:1.22,back:1.16},particle:{kind:"crystal",count:95,size:1.35,tint:"#e9e6dc",rough:.94,heap:{count:10,scale:1.5}},hero:{title:F("Salt, on the road.","ملح، للطرق."),line:F("One tonne of de-icing crystals for roads and runways.","طن من بلورات إذابة الجليد للطرق والمدارج.")},purity:{value:"≥ 95.0 %",label:F("sodium chloride","كلوريد صوديوم")},pack:{title:F("One tonne","طن واحد"),tags:[F("De-icing","إذابة جليد"),F("Screened","منخول"),F("Jumbo bag","شيكارة جامبو")]},pour:{title:F("A hard fall","سقوط ثقيل"),line:F("Coarse de-icing salt leaves the bag in a heavy fall.","الملح الخشن يخرج من الشيكارة في سقوط ثقيل."),countLabel:F("crystals poured","بلورة مصبوبة")},close:{eyebrow:F("03 · the crystal","03 · البلورة"),nav:F("Crystal","بلورة"),title:F("2 – 8","2 – 8"),line:F("Millimetres of de-icing crystal, spread thin on the ice.","مليمترات من بلورة إذابة الجليد، تُفرش رقيقة على الجليد."),standard:{value:"EN 16811",label:"ISO 2479"}},why:{title:F("Works at once","يعمل فورًا"),line:F("Coarse crystal, spread thin, keeps melting down to −7 °C.","بلورة خشنة، تُفرش رقيقة، تظل تعمل حتى −7 °م.")},dissolve:{from:-7,to:-7,unit:F("°C","°م"),label:F("still working","ما زال يعمل"),fixed:!0},where:{title:F("Where road salt goes","أين يذهب ملح الطرق"),places:[F("Highways","الطرق السريعة"),F("Airport runways","مدارج المطارات"),F("Municipal depots","مخازن البلديات"),F("Industrial yards","أفنية المصانع")]},range:{badge:F("Winter grade","درجة شتوية"),accent:"#3f5a6b",uses:[F("Roads","طرق"),F("Runways","مدارج"),F("Docks","أرصفة")]},specs:[{label:F("Form","الشكل"),value:F("De-icing crystal","بلورة إذابة جليد")},{label:F("Grain size","مقاس الحبيبة"),value:F("2 – 8 mm","2 – 8 مم")},{label:F("NaCl","كلوريد الصوديوم"),value:F("≥ 95.00 %","≥ 95.00 %")},{label:F("Moisture","الرطوبة"),value:F("≤ 3.50 %","≤ 3.50 %")},{label:F("Melting point","حرارة العمل"),value:F("to −7 °C","حتى −7 °م")},{label:F("Packing","التعبئة"),value:F("1 MT jumbo","جامبو 1 طن")}]}},Ae=(r,e)=>({en:r,ar:e}),A1=[{n:"01",nav:Ae("Water","المياه"),eyebrow:Ae("Seawater","مياه البحر"),plate:"plates/01-sea.jpg",title:Ae("It begins as water","بدأت الحكاية ماءً"),lead:Ae("On the north coast of Sinai, salt exists long before you can see it.","على الساحل الشمالي لسيناء، يبدأ الملح قبل أن يظهر منه أي أثر."),body:Ae("Seawater is pumped into wide shallow pans divided by earth bunds. Crystals begin to form in a slow current, and the water turns turquoise before the crust takes its shape.","تُضخّ مياه البحر إلى أحواض واسعة تفصلها جسور ترابية. تبدأ البلورات بالتكوّن في تيار بطيء، ويأخذ الماء لونه الفيروزي قبل أن تأخذ القشرة شكلها."),note:Ae("Salt is not made so much as harvested from the timing of sun and wind.","الملح ليس مادةً تُصنع بقدر ما هي مادةٌ تُستخرج من توقيت الشمس والريح."),stats:[{value:"32°",label:Ae("water at the pumps","حرارة الماء عند الضخ")},{value:"1.025",label:Ae("specific gravity","الكثافة النوعية")}],caption:Ae("Evaporation pans on the north Sinai coast.","أحواض التبخير على الساحل الشمالي لسيناء.")},{n:"02",nav:Ae("Evaporation","التبخّر"),eyebrow:Ae("Evaporation","التبخّر"),plate:"plates/02-evaporation.jpg",title:Ae("The sun makes the first crystal","الشمس تصنع أول بلورة"),lead:Ae("No machine here — warm days and cold nights do the concentrating.","لا آلة هنا؛ حرارة النهار وبرودة الليل تتولّيان تركيز المحلول."),body:Ae("Water leaves layer by layer until the brine passes saturation. Along the pan edge a thin crust appears, then widens day after day.","يتبخّر الماء طبقةً بعد طبقة، وترتفع الملوحة حتى يتجاوز المحلول تشبّعه. عند حواف الحوض تظهر قشرة رقيقة تتوسّع يوماً بعد يوم."),stats:[{value:"40 %",label:Ae("water lost in the pans","فقدان الماء في الأحواض")},{value:"24 h",label:Ae("one crystallising cycle","دورة التبلور")}],caption:Ae("Crystals forming at the edge of a brine pan at first light.","بلورات تتكوّن على حافة حوض مالح مع أولى خيوط الفجر.")},{n:"03",nav:Ae("Harvest","الحصاد"),eyebrow:Ae("Harvest","الحصاد"),plate:"plates/03-harvest.jpg",title:Ae("The crust breaks in a straight line","القشرة تنكسر خطاً مستقيماً"),lead:Ae("The moment the water surface becomes a slab of salt you can lift.","اللحظة التي يتحوّل فيها السطح المائي إلى لوحٍ ملحي قابل للحصاد."),body:Ae("A straight cut is drawn through the set crust, and the slabs separate from the pan floor. They are lifted and left to dry before refining begins.","يُجرى شقّ مستقيم في القشرة المتماسكة، فتنفصل الألواح عن قاع الحوض. تُرفع وتُترك لتجفّ قبل أن تبدأ رحلة التنقية."),note:Ae("The straight line is not decoration: it is the cheapest break in lost grains.","الخط المستقيم ليس جمالياً؛ إنه أقلّ طرق الكسر فقداناً للحبيبات."),stats:[{value:"15 cm",label:Ae("average crust","متوسط سماكة القشرة")},{value:"12",label:Ae("hands in the sort","خطوة للفرز اليدوي")}],caption:Ae("Harvest hands separating the salt crust at first light.","عمّال الحصاد يفصلون القشرة الملحية عند أوائل النهار.")},{n:"04",nav:Ae("Washing","الغسيل"),eyebrow:Ae("Washing","الغسيل"),plate:"plates/04-wash.jpg",title:Ae("Impurities sink, salt stays","الشوائب تسقط، والملح يبقى"),lead:Ae("In a turning current, crystals part company with the clay and minerals.","داخل تيار مائي دوّار، تفترق الحبيبات عمّا علق بها من طين ومعادن."),body:Ae("The salt is washed in saturated brine: light impurities float, heavy ones sink, and white crystals stay behind. The wash repeats until the colour is clean.","يُغسل الملح بمحلول مشبع: الشوائب الخفيفة تطفو، والثقيلة تغرق، وتبقى البلورات البيضاء. تتكرّر العملية حتى يصبح اللون صافياً."),stats:[{value:"3",label:Ae("washes in series","مراحل الغسيل المتتالية")},{value:"0.2 %",label:Ae("moisture after washing","الرطوبة بعد الغسيل")}],caption:Ae("Grains washed in a turning current inside the settling tank.","غسل الحبيبات في تيار مائي دوّار داخل حوض الترسيب.")},{n:"05",nav:Ae("Refining","التكرير"),eyebrow:Ae("Refining","التكرير"),plate:"plates/05-refine.jpg",title:Ae("Purity you can see inside","نقاء يُرى من الداخل"),lead:Ae("One crystal, close up: a hard-edged transparent cube.","بلورة واحدة عن قرب؛ مكعّب شفّاف حاد الحواف."),body:Ae("The salt is recrystallised under controlled conditions, so the cube passes and bends light. At this point the NaCl content reaches 99.5 %.","تُعاد بلورة الملح تحت ظروف مضبوطة، فيصبح مكعّبها قادراً على تمرير الضوء وانكساره. عند هذه النقطة يصل تركيز NaCl إلى 99.5%."),note:Ae("Salt bends light at 1.544 — close to glass, but grown layer by layer from brine.","معامل انكسار الملح 1.544؛ قريب من الزجاج، لكنه ينمو طبقةً طبقة من محلول مالح."),stats:[{value:"99.5 %",label:Ae("NaCl purity","نقاء NaCl")},{value:"1.544",label:Ae("refractive index","معامل الانكسار")}],caption:Ae("A clean cubic crystal under lab light.","بلورة مكعّبة نقية تحت ضوء المختبر.")},{n:"06",nav:Ae("Sieving","الفرز"),eyebrow:Ae("Sieving","الفرز"),plate:"plates/06-sort.jpg",title:Ae("Three screens, three sizes","ثلاث شبكات، ثلاثة أحجام"),lead:Ae("Every grain finds its size, and nothing is thrown away.","كل حبيبة تجد مقاسها، ولا شيء يُهدر."),body:Ae("Grains pass three screens with graded openings: coarse for industry, medium for the table, fine for delicate food work.","تمرّ الحبيبات عبر ثلاثة أغرابلة بفتحات متدرّجة: خشن للصناعة، ومتوسط للمائدة، وناعم للمنتجات الغذائية الدقيقة."),stats:[{value:"3",label:Ae("screened fractions","أحجام فرزية")},{value:"0 / 2",label:Ae("screen gaps","فجوات الغربال")}],caption:Ae("Steel screens separating grains by size.","أغرابلة معدنية تفصل الحبيبات حسب الحجم.")},{n:"07",nav:Ae("Packing","التعبئة"),eyebrow:Ae("Packing","التعبئة"),plate:"plates/07-pack.jpg",title:Ae("Fifty kilos that carry the name","خمسون كيلوغراماً تحمل الاسم"),lead:Ae("From the pan to a printed sack, then into a container ready to travel.","من الحوض إلى شكارة مطبوعة، ثم إلى حاوية جاهزة للسفر."),body:Ae("The sack is weighed and sealed with the batch data, then stacked on pallets inside the container. The salt stays away from moisture until it arrives.","تُوزَّن الشكارة وتُختم ببيانات الدفعة، ثم تُرصّ على منصات داخل الحاوية. يبقى الملح بعيداً عن الرطوبة حتى يصل إلى وجهته."),stats:[{value:"50 kg",label:Ae("per sack","وزن الشيكارة")},{value:"20",label:Ae("sacks to the tonne","شكارة في الطن")}],caption:Ae("Sacks stacked inside the container before it is closed.","شكارات مرصوفة داخل حاوية الشحن قبل الإغلاق.")},{n:"08",nav:Ae("Analysis","التحليل"),eyebrow:Ae("Analysis","التحليل"),plate:"plates/08-analysis.jpg",title:Ae("The spec sheet has the last word","المواصفات تقول الكلمة الأخيرة"),lead:Ae("The container is sealed, and the analysis stays as a witness to the whole journey.","تُغلق الحاوية، ويبقى جدول التحليل شاهداً على الرحلة كلها."),body:Ae("A sample from every batch is tested against the agreed specification. When the numbers match, the salt leaves Sinai for the table.","تُفحص عيّنة من كل دفعة ويُقارن تركيبها بالمواصفات المعتمدة. وحين تطابق الأرقام التوقّعات، يغادر الملح سيناء في طريقه إلى المائدة."),stats:[{value:"99.5 %",label:Ae("certified NaCl","NaCl معتمد")},{value:"SC-08",label:Ae("batch number","رقم الدفعة")}],caption:Ae("A sample tested before the batch is released.","فحص العيّنة قبل اعتماد الدفعة النهائية.")}];nr.registerPlugin(st);nr.ticker.lagSmoothing(0);const Ni="./",Et=document.getElementById("stage"),kh=document.getElementById("status"),Ou=window.matchMedia("(prefers-reduced-motion: reduce)").matches,dx="sinaicore:lang",R1=[...document.querySelectorAll("[data-ar]")].filter(r=>!r.hasAttribute("data-letters")).map(r=>({el:r,en:r.textContent,ar:r.getAttribute("data-ar")})),C1=[...document.querySelectorAll("[data-letters]")].map(r=>({el:r,en:r.textContent.trim().replace(/\s+/g," "),ar:r.getAttribute("data-ar")||r.textContent.trim()})),sf=document.getElementById("lang-toggle");let Fn="en";const P1=(r,e)=>Fn==="ar"?e:r,Ys=(r,e)=>({en:r,ar:e});function fx(r,{store:e=!0}={}){Fn=r==="ar"?"ar":"en";const t=Fn==="ar";if(document.documentElement.lang=Fn,document.documentElement.dir=t?"rtl":"ltr",R1.forEach(({el:n,en:i,ar:s})=>{n.textContent=t?s:i}),C1.forEach(({el:n,en:i,ar:s})=>{if(n.classList.toggle("is-ar",t),t){n.textContent=s;return}n.textContent="";const a=gp(n,i);a.length&&nr.set(a,{yPercent:0,opacity:1})}),sf.textContent=t?"EN":"AR",sf.setAttribute("aria-label",t?"English":"العربية"),document.title=t?"SinaiCore · ملح، مضغوط.":"SinaiCore · Salt, pressed.",xp(),Ux(),nR(),tR(),Sx(),ys&&Ex(ys),e)try{localStorage.setItem(dx,Fn)}catch{}}sf?.addEventListener("click",()=>fx(Fn==="ar"?"en":"ar"));const ui=new jE({antialias:!0,alpha:!0});ui.setPixelRatio(Math.min(window.devicePixelRatio,Et.clientWidth<1080?1.6:2));ui.setSize(Et.clientWidth,Et.clientHeight);ui.toneMapping=mf;ui.toneMappingExposure=.82;ui.shadowMap.enabled=!0;ui.shadowMap.type=Vg;Et.appendChild(ui.domElement);const kl=new Gw;kl.setSize(Et.clientWidth,Et.clientHeight);kl.domElement.className="labels";Et.appendChild(kl.domElement);const jn=new g_;jn.background=null;const wi=new $n(30,Et.clientWidth/Et.clientHeight,.05,100);wi.position.set(.9,1.15,6.7);const L1=new Tl(ui);jn.environment=L1.fromScene(new ew,.04).texture;jn.environmentIntensity=.34;const Vi=new Bf("#fff4e4",2.5);Vi.position.set(-3.4,5.2,3.4);Vi.castShadow=!0;Vi.shadow.mapSize.set(2048,2048);Vi.shadow.camera.near=1;Vi.shadow.camera.far=20;Vi.shadow.camera.left=-4;Vi.shadow.camera.right=4;Vi.shadow.camera.top=5;Vi.shadow.camera.bottom=-3;Vi.shadow.bias=-6e-4;Vi.shadow.radius=3;jn.add(Vi);const px=new Bf("#cfe0e6",.85);px.position.set(-4.4,2.4,-3.2);jn.add(px);jn.add(new Gy("#fffaf0","#b7ae99",.6));const vs=-1.075,Fu=new Dt(new lo(7,64),new _y({color:"#16302d",opacity:.22}));Fu.rotation.x=-Math.PI/2;Fu.position.y=vs;Fu.receiveShadow=!0;jn.add(Fu);const mx=(()=>{const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(24, 43, 41, 0.34)"),n.addColorStop(.45,"rgba(24, 43, 41, 0.17)"),n.addColorStop(1,"rgba(24, 43, 41, 0)"),t.fillStyle=n,t.fillRect(0,0,128,128);const i=new my(e);return i.colorSpace=Wt,i})(),gx=(r,e,t=1)=>{const n=new Dt(new Ol(r,e),new mr({map:mx,transparent:!0,opacity:t,depthWrite:!1,toneMapped:!1}));return n.rotation.x=-Math.PI/2,n.renderOrder=1,n},_x=()=>{const r=Et.clientWidth,e=Et.clientHeight;r<1080?wi.setViewOffset(r,e,0,e*.08,r,e):wi.clearViewOffset()};_x();const St={bag:{spin:0,open:0,tilt:0,side:0},pour:{u:0},cam:{k:0},annot:{v:0},dissolve:{v:0}},zl=[{pos:new O(.9,1.15,6.7),target:new O(0,-.12,.25)},{pos:new O(.5,1.26,5.15),target:new O(0,.1,.15)},{pos:new O(2.2,1.12,8.5),target:new O(.12,-.3,.8)},{pos:new O(.95,-.1,2.25),target:new O(.35,-.95,1.62)},{pos:new O(2.5,2.35,8.7),target:new O(.3,-.5,1.05)}],I1=new w_(zl.map(r=>r.pos),!1,"catmullrom",.4),D1=new w_(zl.map(r=>r.target),!1,"catmullrom",.4),Ur=`v=${Date.now()}`,N1=new zw().setDecoderPath(`${Ni}draco/`),zh=new nw().setDRACOLoader(N1),zr=new Bi;zr.position.set(0,vs,0);jn.add(zr);const Xa=new Bi;zr.add(Xa);const xx=gx(2.5,2.1,.9);xx.position.y=.004;zr.add(xx);let Pc=null,as=null,af=null,Bt=null,io=null,Mi=null,Jo=null,Jc=null,vx=null;const Hh=new Map;let na=new O(.35,vs+.05,1.62);const xo=gx(.66,.66,0);xo.position.set(na.x,vs+.003,na.z);jn.add(xo);const ua=[];zh.loadAsync(`${Ni}models/sack.glb?${Ur}`).then(async r=>{const e=await new Ha().loadAsync(`${Ni}artwork/sack-50kg-texture.png?${Ur}`);e.colorSpace=Wt,e.anisotropy=Math.min(8,ui.capabilities.getMaxAnisotropy());const t=await new Ha().loadAsync(`${Ni}textures/sack-weave.png?${Ur}`);t.wrapS=t.wrapT=Gr,t.repeat.set(4,9),t.anisotropy=Math.min(8,ui.capabilities.getMaxAnisotropy());const n=await new Ha().loadAsync(`${Ni}textures/sack-crumple.png?${Ur}`);n.wrapS=n.wrapT=Gr,n.repeat.set(2,2),n.anisotropy=Math.min(8,ui.capabilities.getMaxAnisotropy()),vx=e;const i=new Qn({map:e,color:"#ffffff",vertexColors:!0,bumpMap:t,bumpScale:.045,normalMap:n,normalScale:new Xe(.5,.5),roughnessMap:t,roughness:1,metalness:0,sheen:.08,sheenRoughness:.95,sheenColor:new ke("#ffffff"),envMapIntensity:.12}),s=new Qn({color:"#ffffff",vertexColors:!0,bumpMap:t,bumpScale:.045,normalMap:n,normalScale:new Xe(.6,.6),roughnessMap:t,roughness:.96,metalness:0,sheen:.22,sheenRoughness:.9,sheenColor:new ke("#ffffff"),envMapIntensity:.26});Jc=i,Pc=r.scene,Pc.traverse(m=>{m.isMesh&&(m.material=m.name==="sack-panel"?i:s,m.castShadow=!0,m.receiveShadow=!1)});const a=new Er().setFromObject(Pc);Xa.add(Pc),a.max.y-a.min.y,Xa.position.y=-a.min.y;const o=a.max.y,l=(a.max.x-a.min.x)/2,c=(a.max.z-a.min.z)/2;as=U1(o,l,c,s),af=as.anchor,Xa.add(as.group);const f=(await zh.loadAsync(`${Ni}models/tablet.glb?${Ur}`)).scene.getObjectByProperty("isMesh",!0),h=await new Ha().loadAsync(`${Ni}textures/salt-detail.png?${Ur}`);h.wrapS=h.wrapT=Gr,h.repeat.set(4,4);const d=new Qn({color:"#f7f5ee",roughness:.86,metalness:0,bumpMap:h,bumpScale:.055,sheen:.4,sheenRoughness:.62,sheenColor:new ke("#fffdf7"),envMapIntensity:.45});Vs.tablet=f.geometry;try{const _=(await zh.loadAsync(`${Ni}models/salt-crystal.glb?${Ur}`)).scene.getObjectByProperty("isMesh",!0);_&&(Vs.crystal=F1(_))}catch(m){console.warn("salt-crystal.glb missing — coarse salts fall back to tablets",m)}O1(f,d),z1(na),Sx();const p=d.clone();p.roughness=.48,p.clearcoat=.6,p.clearcoatRoughness=.35,Mi=new Dt(f.geometry.clone(),p),Mi.castShadow=!0,Mi.receiveShadow=!0,Mi.visible=!1,jn.add(Mi);const g=new Dt(new lo(1,64),new mr({map:mx,color:"#3d5a55",transparent:!0,opacity:0,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.position.set(na.x,vs+.004,na.z),g.visible=!1,jn.add(g),Jo=g,kh.dataset.state="ready",q1(),Ou||(nr.fromTo(zr.position,{y:vs+1.3},{y:vs,duration:1.55,ease:"expo.out",delay:.15}),nr.fromTo(Xa.rotation,{z:.14},{z:0,duration:1.55,ease:"expo.out",delay:.15}),nr.fromTo(xo.material,{opacity:0},{opacity:.85,duration:.9,ease:"power2.out",delay:.9}))}).catch(r=>{console.error(r),kh.dataset.state="error",kh.textContent=P1("Could not load public/models/sack.glb — run npm run models","تعذّر تحميل الشيكارة — شغّل npm run models")});function U1(r,e,t,n){const i=new Bi;i.position.y=r-.015,i.visible=!1;const s=Math.min(e*.78,.52),a=Math.min(t*.62,.19),o=new mr({color:"#232a29",transparent:!0,opacity:0}),l=new Dt(new lo(1,48),o);l.scale.set(s,a,1),l.rotation.x=-Math.PI/2,l.position.y=-.02,i.add(l);const c=new uo({color:"#2a3130",roughness:1,metalness:0,side:Ji,transparent:!0,opacity:0}),u=new Dt(new Ru(1,.9,.3,40,1,!0),c);u.scale.set(s*.97,1,a*.97),u.position.y=-.15,i.add(u);const f=new Qn({color:"#f2efe6",roughness:.92,metalness:0,sheen:.3,sheenRoughness:.8,sheenColor:new ke("#ffffff"),envMapIntensity:.2}),h=new Dt(new Uf(1,.055,8,56),f);h.scale.set(s,a,1),h.rotation.x=Math.PI/2,i.add(h);const d=n.clone();d.color=new ke("#f6f3ec");const p=[];for(const m of[0,1]){const _=new Bi,v=new Dt(new lo(1,32,m*Math.PI,Math.PI),d);v.scale.set(s,a,1),v.rotation.x=-Math.PI/2,v.castShadow=!0,_.add(v),_.userData.flip=m,i.add(_),p.push(_)}const g=new At;return g.position.set(0,.02,0),i.add(g),{group:i,hole:l,dark:o,throat:c,lips:p,anchor:g}}const Qc=260,Lc={tablet:.108,grain:.021,crystal:.042};let Zn=ca.tablets;function O1(r,e){const t=r.geometry.clone();Bt=new Cf(t,e,Qc),Bt.instanceMatrix.setUsage(yv),Bt.frustumCulled=!1,Bt.castShadow=!0,Bt.receiveShadow=!0,jn.add(Bt),yx()}const Gs=new $n(30,1,.05,100);Gs.position.copy(zl[3].pos);Gs.lookAt(zl[3].target);const Gh=new O;function yx(){const{kind:r,count:e,size:t}=Zn.particle,n=Math.min(e,Qc);Bt.count=n,ua.length=0,Gs.aspect=Et.clientWidth/Et.clientHeight,Gs.setViewOffset(Et.clientWidth,Et.clientHeight,-Et.clientWidth*.15,0,Et.clientWidth,Et.clientHeight),Gs.updateProjectionMatrix(),Gs.updateMatrixWorld();const i=h=>{Gh.copy(h).project(Gs);const d=(Gh.x*.5+.5)*Et.clientWidth,p=(-Gh.y*.5+.5)*Et.clientHeight;return d<Et.clientWidth*.68&&p<Et.clientHeight*.92};let s=20261126;const a=()=>(s=(s*1664525+1013904223)%4294967296,s/4294967296),o=r==="tablet"?1:Zn.particle.heap?.count??9,l=r==="tablet"?1:Zn.particle.heap?.scale??1.5;for(let h=0;h<n;h++){const d=h<o;let p=d?na.clone():new O;if(d&&h>0){const m=h/o*Math.PI*2+a()*.5,_=.045+a()*.085;p.x+=Math.sin(m)*_,p.z+=Math.cos(m)*_,p.y+=a()*.045}if(!d){let m=.55+a()*1.35;const _=(a()*2-1)*1.85,v=r==="grain"?.72:1;for(let M=0;M<14&&(p.set(.3+Math.sin(_)*m*1.35*v,vs+.05+(r==="tablet"?0:a()*.09),.5+Math.cos(_)*m*v),p.z=Math.min(p.z,.62),!(p.distanceTo(na)>1.28&&!i(p)));M++)m-=.16,m<.5&&(m=.6+a()*1.7)}const g=d?r==="tablet"?Lc.tablet:Lc[r]*t*l:r==="tablet"?Lc.tablet+a()*.016:Lc[r]*t*(.72+a()*.62);ua[h]={end:p,hero:d,lift:.18+a()*.34,drift:.34+a()*.5,delay:h/n*.32+a()*.05,duration:.42+a()*.2,scale:g,restYaw:a()*Math.PI*2,restPitch:r==="tablet"?0:(a()-.5)*.7,restRoll:r==="tablet"?0:(a()-.5)*.7,squash:r==="tablet"?new O(1,.88,1):new O(.78+a()*.4,.78+a()*.4,.78+a()*.4),spinAxis:new O(a()-.5,a()-.5,a()-.5).normalize(),spinAmount:2.4+a()*4.4,jitter:new O((a()-.5)*.26,-.05-a()*.1,(a()-.5)*.1)}}const c=new ke(Zn.particle.tint),u=new ke;for(let h=0;h<n;h++)u.copy(c).offsetHSL(0,0,(a()-.5)*.08),Bt.setColorAt(h,u);for(let h=n;h<Qc;h++)Bt.setColorAt(h,c);Bt.instanceColor&&(Bt.instanceColor.needsUpdate=!0);const f=new qe;for(let h=0;h<Qc;h++)Bt.setMatrixAt(h,f.makeScale(1e-4,1e-4,1e-4));Bt.instanceMatrix.needsUpdate=!0}const Vs={};function F1(r){const e=r.geometry.clone();e.computeBoundingSphere();const t=e.boundingSphere?.radius||1;return e.scale(1/t,1/t,1/t),e}function Dg(r){if(r==="grain"){if(!Vs.grain){const e=new Nf(1,0);e.computeVertexNormals(),Vs.grain=e}return Vs.grain}return Vs[r]||Vs.tablet}const Ws=new At,Ua=new O,Fs=new O,Ng=new O,Vh=new ir,Ug=new ir;function B1(r,e,t){const n=tr.clamp((e-r.delay)/r.duration,0,1);if(!af)return null;af.getWorldPosition(Ua),Ua.add(r.jitter),Fs.copy(Ua),Fs.y+=r.lift,Fs.x+=r.end.x*.18,Fs.z+=r.drift+r.end.z*.12;const i=n,s=1-i;Ng.set(s*s*Ua.x+2*s*i*Fs.x+i*i*r.end.x,s*s*Ua.y+2*s*i*Fs.y+i*i*r.end.y,s*s*Ua.z+2*s*i*Fs.z+i*i*r.end.z);const a=tr.smoothstep(n,.72,1);Vh.setFromAxisAngle(r.spinAxis,i*r.spinAmount),Ug.setFromEuler(new Sr(r.restPitch??0,r.restYaw,r.restRoll??0)),Vh.slerp(Ug,a),Ws.position.copy(Ng),Ws.quaternion.copy(Vh);const o=Math.min(1,n*6)*r.scale,l=r.squash??{x:1,y:.88,z:1};return Ws.scale.set(o*l.x,o*l.y,o*l.z),Ws.updateMatrix(),Bt.setMatrixAt(t,Ws.matrix),n}const k1=13203778,Bu={dissolve:{kicker:"Dissolution · brine tank",title:"Slow Dissolving",short:"Slow<br />Dissolving",body:"Pressed at high density, the tablet offers a small surface to the brine, so it dissolves over weeks instead of hours. The brine stays at a steady saturation between refills.",arabic:"كبس عالي يقلّل سطح التلامس، فيذوب القرص على مدى أسابيع لا ساعات.",rows:[["Solubility","Slow dissolving"],["Hardness","High (compression)"],["Dosing","Uniform 25 mm"]],kickerAr:"الذوبان · خزان المحلول",titleAr:"ذوبان بطيء",shortAr:"ذوبان<br />بطيء",bodyAr:"كبس عالي الكثافة يقدّم للمحلول مساحة سطح صغيرة، فيذوب على مدى أسابيع لا ساعات، ويبقى التشبّع ثابتًا بين تعبئة وأخرى.",rowsAr:[["الذوبان","بطيء"],["الصلابة","عالية (كبس)"],["الجرعة","25 مم ثابتة"]]},bridging:{kicker:"Handling · salt bed",title:"Prevents Salt Bridging",short:"Prevents<br />Salt bridging",body:"The tablet keeps its own shape instead of fusing into a crust, so no salt bridges form over the tank outlet and the brine keeps flowing without being broken up by hand.",arabic:"القرص لا يلتحم في كتلة واحدة، فلا تتكوّن جسور ملح تسدّ مخرج الخزان.",rows:[["Appearance","Compressed tablets"],["Form","Self-supporting disc"],["Result","No caking"]],kickerAr:"التداول · سرير الملح",titleAr:"يمنع تعليق الملح",shortAr:"يمنع تعليق<br />الملح",bodyAr:"القرص يحافظ على شكله بدل أن يلتحم في قشرة صلبة، فلا تتكوّن جسور ملح فوق مخرج الخزان، ويظل المحلول يجري بلا تدخّل.",rowsAr:[["المظهر","أقراص مضغوطة"],["الشكل","قرص متماسك"],["النتيجة","بلا تكتّل"]]}},Hl=new Map,Mx=[];let $s=null;function z1(r){const e=new Bi;e.position.copy(r),jn.add(e),io=e,e.visible=!1;const t=.115,n=.05,i=n+t*.52,s=t*1.14,a=new mr({color:k1,transparent:!0,opacity:0});e.userData.materials=[null,a];const o=new O(0,1,0),l=new O,c=new O,u=(g,m,_,v,M,y,b=8e-4,E=a)=>{l.set(g,m,_),c.set(v,M,y);const x=l.distanceTo(c);if(!x)return;const S=new Dt(new Ru(b,b,x,6),E);S.position.copy(l).add(c).multiplyScalar(.5),S.quaternion.setFromUnitVectors(o,c.clone().sub(l).normalize()),e.add(S)},f=(g,m,_,v)=>{const M=document.createElement("div");M.className=`dims ${g}`,M.innerHTML=m,M.style.opacity="0",Mx.push(M);const y=new qm(M);return y.position.set(_,v,0),e.add(y),{element:M,object:y}},h=f("dims--x",'<span class="rule"></span><b><strong>Ø 25 mm</strong><span>Diameter</span></b>',0,i),d=f("dims--y",'<span class="rule"></span><b><strong>11 mm</strong><span>Thickness</span></b>',s,0),p=f("dims--mass","<b><strong>~15 g</strong><span>Net mass</span></b>",t*.52,-t*1.5);$s={widthMark:h,thickMark:d,massMark:p,radius:t,half:n,dimY:i,thickAnchorX:s};for(const[g,m,_]of[["dissolve",t*2.15,t*1.5],["bridging",t*2.15,-t*1.5]]){const v=Bu[g],M=document.createElement("button");M.type="button",M.className="hotspot",M.setAttribute("aria-expanded","false"),M.setAttribute("aria-label",`${v.title} — open the specification`),M.innerHTML=`<span class="dot" aria-hidden="true"></span><span class="hs-label">${v.short}</span>`,M.style.opacity="0",M.style.pointerEvents="none",M.addEventListener("click",()=>W1(g));const y=new qm(M);y.position.set(m,_,0),e.add(y),Hl.set(g,M);const b=Math.sign(_);u(t*1,t*.6*b,0,m-t*.4,_-t*.28*b,0)}}const Wh=new O,Bs=(r,e,t)=>(Wh.set(r,e,t).project(wi),{x:(Wh.x*.5+.5)*Et.clientWidth,y:(-Wh.y*.5+.5)*Et.clientHeight}),H1=()=>{if(!$s||!io?.visible)return;const{widthMark:r,thickMark:e,massMark:t,radius:n,half:i,dimY:s,thickAnchorX:a}=$s,o=io.position,l=i*.9,c=Bs(o.x-n,o.y+l,o.z),u=Bs(o.x+n,o.y+l,o.z),f=Bs(o.x+n,o.y+i,o.z),h=Bs(o.x+n,o.y-i,o.z);r.element.style.setProperty("--len",`${Math.max(24,Math.abs(u.x-c.x)).toFixed(1)}px`);const d=Bs(o.x,o.y+s,o.z);r.element.style.setProperty("--drop",`${Math.max(3,d.y-c.y).toFixed(1)}px`);const p=Bs(o.x+a,o.y,o.z);e.element.style.setProperty("--len",`${Math.max(12,Math.abs(h.y-f.y)).toFixed(1)}px`),e.element.style.setProperty("--gap",`${Math.max(3,p.x-u.x).toFixed(1)}px`);const m=(t.element.firstElementChild?.offsetHeight??30)/2,_=Bs(o.x+n*.52,o.y-n*1.5,o.z);t.element.style.setProperty("--rise",`${Math.max(2,_.y-m-h.y).toFixed(1)}px`)},G1=r=>{if(!io)return;const e=Et.clientWidth<1080||Zn.particle.kind!=="tablet"?0:r;io.visible=e>.005;const[t,n]=io.userData.materials??[];t&&(t.opacity=.92*tr.clamp(e*1.3,0,1)),n&&(n.opacity=.5*e);for(const i of Mx)i.style.opacity=String(Math.min(1,e*1.4));for(const i of Hl.values())i.style.opacity=String(Math.min(1,e*1.4)),i.style.pointerEvents=e>.4?"auto":"none"};function Sx(){if(!$s)return;const r=Fn==="ar";$s.widthMark.element.innerHTML=r?'<span class="rule"></span><b><strong>Ø 25 مم</strong><span>القطر</span></b>':'<span class="rule"></span><b><strong>Ø 25 mm</strong><span>Diameter</span></b>',$s.thickMark.element.innerHTML=r?'<span class="rule"></span><b><strong>11 مم</strong><span>السماكة</span></b>':'<span class="rule"></span><b><strong>11 mm</strong><span>Thickness</span></b>',$s.massMark.element.innerHTML=r?"<b><strong>≈ 15 جم</strong><span>الوزن الصافي</span></b>":"<b><strong>~15 g</strong><span>Net mass</span></b>",Hl.forEach((e,t)=>{const n=Bu[t],i=e.querySelector(".hs-label");i&&(i.innerHTML=r?n.shortAr:n.short),e.setAttribute("aria-label",r?`${n.titleAr} — فتح المواصفة`:`${n.title} — open the specification`)})}const vo=document.getElementById("hs-card"),dr={kicker:document.getElementById("hs-kicker"),title:document.getElementById("hs-title"),body:document.getElementById("hs-body"),arabic:document.getElementById("hs-ar"),rows:document.getElementById("hs-rows")},pp=document.getElementById("hs-close");let ys=null;function ku({restoreFocus:r=!0}={}){if(ia==="hotspot"&&ys){const e=Hl.get(ys);e?.classList.remove("is-on"),e?.setAttribute("aria-expanded","false"),r&&e?.focus({preventScroll:!0})}ia==="spec"&&r&&yt.specOpen?.focus({preventScroll:!0}),ys=null,ia=null,vo.hidden=!0}const bx=()=>ku();function Tx(){if(ia!=="spec")return;const r=Fn==="ar";vo.classList.add("is-ar"),dr.kicker.textContent=Ht(Zn.name),dr.title.textContent=r?"المواصفات":"Specification",dr.body.textContent=Ht(Zn.hero.line),dr.arabic.textContent="",dr.rows.innerHTML=Zn.specs.map(e=>`<div><dt>${Ht(e.label)}</dt><dd>${Ht(e.value)}</dd></div>`).join("")}function V1(){ku({restoreFocus:!1}),ia="spec",Tx(),vo.hidden=!1,pp.focus({preventScroll:!0})}function Ex(r){const e=Bu[r];if(!e)return;const t=Fn==="ar";vo.classList.remove("is-ar"),dr.kicker.textContent=t?e.kickerAr:e.kicker,dr.title.textContent=t?e.titleAr:e.title,dr.body.textContent=t?e.bodyAr:e.body,dr.arabic.textContent=e.arabic,dr.rows.innerHTML=(t?e.rowsAr:e.rows).map(([n,i])=>`<div><dt>${n}</dt><dd>${i}</dd></div>`).join("")}function W1(r){const e=ys===r;if(ku({restoreFocus:!1}),e||!Bu[r])return;ia="hotspot",vo.classList.remove("is-ar"),Ex(r),vo.hidden=!1;const t=Hl.get(r);t?.classList.add("is-on"),t?.setAttribute("aria-expanded","true"),ys=r,pp.focus({preventScroll:!0})}pp?.addEventListener("click",()=>ku());document.addEventListener("keydown",r=>{r.key==="Escape"&&bx()});const X1={BS:"<b>British Standards (BS)</b> — the product is checked against British specifications for salt used in water treatment, and compliance is declared on the batch certificate of analysis.",EN:"<b>European Standards (EN)</b> — analysed to <b>EN 973</b>, the European specification for sodium chloride used in water treatment, which keeps the product acceptable across EU markets.",ASTM:"<b>ASTM Standards</b> — <b>ASTM E534</b> is the reference test method behind the chemical analysis table, so results are comparable with international laboratories.",ISO:"<b>ISO Standards</b> — checked against international requirements, which supports smooth customs clearance and global acceptance of every shipment."},Og=[...document.querySelectorAll("#std-badges button")],Fg=document.getElementById("std-note");Og.forEach(r=>{r.addEventListener("click",()=>{const e=r.classList.contains("is-on");if(Og.forEach(t=>{t.classList.remove("is-on"),t.setAttribute("aria-pressed","false")}),e){Fg.textContent="Select a standard to see how it applies to this product.";return}r.classList.add("is-on"),r.setAttribute("aria-pressed","true"),Fg.innerHTML=X1[r.dataset.std]})});const mp=[...document.querySelectorAll(".panel")],wx=[...document.querySelectorAll(".rail button")],Bg=document.getElementById("progress-fill"),kg=document.getElementById("step-now");let zu=0,Ax=-1,ti=0,za=[];const Rx=()=>{const r=window.innerHeight;za=mp.map(e=>{const t=e.getBoundingClientRect();return{anchor:t.top+window.scrollY+t.height/2-r/2,height:t.height}})},Cx=()=>{const r=za.length;if(!r)return 0;const e=window.scrollY;if(e<=za[0].anchor)return 0;if(e>=za[r-1].anchor)return 1;for(let t=0;t<r-1;t++){const n=za[t].anchor,i=za[t+1].anchor;if(e>=n&&e<=i){const s=(e-n)/Math.max(i-n,1);return(t+s)/(r-1)}}return 1},Px=()=>{const r=[ni.section,ns.section].filter(Boolean);if(r.length){const e=Math.min(...r.map(t=>t.getBoundingClientRect().top));document.body.classList.toggle("is-paper",e<window.innerHeight*.45)}zu=Cx()};window.addEventListener("scroll",Px,{passive:!0});let fs=null;function gp(r,e=r.textContent){const t=e.trim().replace(/\s+/g," "),n=[];return r.textContent="",t.split(" ").forEach((i,s,a)=>{const o=document.createElement("span");o.className="word";for(const l of i){const c=document.createElement("span");c.className="letter",c.textContent=l,o.appendChild(c),n.push(c)}r.appendChild(o),s<a.length-1&&r.appendChild(document.createTextNode(" "))}),n}function Lx(){Object.assign(St.bag,{spin:0,open:0,tilt:0,side:0}),St.cam.k=0,St.pour.u=0,St.annot.v=0,St.dissolve.v=0;const r=nr.timeline({paused:!0,defaults:{ease:"none"}});return r.to(St.bag,{spin:1,duration:.14,ease:"power1.inOut"},.02).to(St.cam,{k:1,duration:.1,ease:"power1.inOut"},.02).to(St.bag,{open:1,duration:.08,ease:"power2.out"},.09).to(St.bag,{tilt:1,duration:.07,ease:"power2.inOut"},.15).to(St.cam,{k:2,duration:.08,ease:"power1.inOut"},.16).to(St.pour,{u:1,duration:.19,ease:"none"},.21).to(St.bag,{tilt:.12,duration:.07,ease:"power1.inOut"},.4).to(St.cam,{k:3,duration:.07,ease:"power1.inOut"},.39).to(St.bag,{side:1,duration:.08,ease:"power1.inOut"},.42).to(St.bag,{open:0,duration:.06,ease:"power2.inOut"},.44).to(St.annot,{v:1,duration:.06,ease:"power1.out"},.42).to(St.annot,{v:0,duration:.05,ease:"power1.in"},.56),Zn.dissolve.fixed||r.to(St.dissolve,{v:1,duration:.155,ease:"power1.inOut"},.575),r.to(St.cam,{k:4,duration:.13,ease:"power1.inOut"},.7).set({},{},1),fs&&fs.kill(),fs=r,fs.progress(ti||0),r}function q1(){xp(),Lx(),mp.forEach(r=>{r.querySelectorAll("[data-letters]").forEach(t=>{if(Fn==="ar"){t.classList.add("is-ar");return}const n=gp(t);Ou||nr.from(n,{yPercent:108,opacity:0,duration:.9,ease:"expo.out",stagger:.018,scrollTrigger:{trigger:r,start:"top 72%",toggleActions:"play none none reverse"}})});const e=r.querySelectorAll("[data-reveal]");e.length&&nr.from(e,{y:24,opacity:0,duration:.75,stagger:.07,ease:"power2.out",scrollTrigger:{trigger:r,start:"top 70%",toggleActions:"play none none reverse"}})}),Rx(),Px(),ti=zu,fs.progress(ti),Ix(ti<.2?0:ti<.42?1:ti<.72?2:3)}function Ix(r){Ax=r,wx.forEach((e,t)=>{const n=t===r;e.classList.toggle("is-on",n),n?e.setAttribute("aria-current","true"):e.removeAttribute("aria-current")}),kg&&(kg.textContent=String(r+1).padStart(2,"0"))}const Y1=[0,2,3,6];wx.forEach((r,e)=>{r.addEventListener("click",()=>{mp[Y1[e]]?.scrollIntoView({behavior:Ou?"auto":"smooth",block:"start"})})});let jc=0,eu=0,_p=!1,of=0,lf=0;const $1=r=>r instanceof Element&&!!r.closest("a, button, input, textarea, select, .ov, .story, .rail, .bar, .hs-card");window.addEventListener("pointerdown",r=>{$1(r.target)||(_p=!0,of=r.clientX,lf=r.clientY)});window.addEventListener("pointermove",r=>{_p&&(jc-=(r.clientX-of)*.005,eu-=(r.clientY-lf)*.003,jc=tr.clamp(jc,-.9,.9),eu=tr.clamp(eu,-.45,.45),of=r.clientX,lf=r.clientY)});const Dx=()=>{_p=!1};window.addEventListener("pointerup",Dx);window.addEventListener("pointercancel",Dx);const Xh=document.getElementById("cursor");if(Xh&&window.matchMedia("(hover: hover)").matches){let r=window.innerWidth/2,e=window.innerHeight/2,t=r,n=e;window.addEventListener("pointermove",s=>{t=s.clientX,n=s.clientY;const a=s.target instanceof Element&&!!s.target.closest("a, button, .hotspot");Xh.classList.toggle("is-over",a)},{passive:!0});const i=()=>{r+=(t-r)*.22,e+=(n-e)*.22,Xh.style.transform=`translate(${r}px, ${e}px) translate(-50%, -50%)`,requestAnimationFrame(i)};i()}const cf=new rM,zg=new O,Ic=new O,Dc=new O,ko=new sM;function K1(){const r=tr.clamp(St.cam.k/(zl.length-1),0,1);I1.getPoint(r,zg),D1.getPoint(r,Ic),Dc.copy(zg).sub(Ic),ko.setFromVector3(Dc),ko.theta+=jc,ko.phi=tr.clamp(ko.phi+eu,.35,2.35),Dc.setFromSpherical(ko);const t=(1+((wi.aspect<1?Math.min(1.45,Math.pow(1/wi.aspect,.35)):1)-1)*tr.smoothstep(St.cam.k,1.6,2.6))*Zn.sack.back;wi.position.copy(Ic).addScaledVector(Dc,t),wi.lookAt(Ic)}function Z1(r){const{spin:e,tilt:t,side:n,open:i}=St.bag;zr.rotation.y=e*.92+Math.sin(r*.25)*.012,zr.rotation.z=t*-.42;const s=wi.aspect<1?.5:1;zr.position.x=n*1.1*s,zr.position.z=-n*.7,as&&(as.group.visible=i>.01,as.dark.opacity=.95*i,as.throat.opacity=.9*i,as.lips.forEach(a=>{a.rotation.x=(a.userData.flip?1:-1)*i*1.05}))}function J1(){if(!Mi)return;const r=St.dissolve.v,e=ua[0],t=r>.002;if(Mi.visible=t,xo.scale.setScalar(t?Math.max(.4,1-r*.55):1),Jo&&(Jo.visible=t,Jo.scale.setScalar(.16+r*.62),Jo.material.opacity=t?.5*Math.min(1,r*1.6)*(1-.45*tr.smoothstep(r,.78,1)):0),!t||!e)return;const n=e.scale,i=1-r*.55;Mi.position.copy(e.end),Mi.position.y+=r*.006,Mi.rotation.set(0,e.restYaw+r*.9,0),Mi.scale.set(n*i,n*.88*(1-r*.34),n*i),xo.material.opacity*=.35+.65*i,Bt.setMatrixAt(0,Ws.matrix.makeScale(1e-4,1e-4,1e-4)),Bt.instanceMatrix.needsUpdate=!0}function Q1(){if(!Bt)return;const r=St.pour.u;xo.material.opacity=.85*tr.smoothstep(r,.5,.92);for(let e=0;e<ua.length;e++){const t=B1(ua[e],r,e);t!==null&&t<=0&&Bt.setMatrixAt(e,Ws.matrix.makeScale(1e-4,1e-4,1e-4))}Bt.instanceMatrix.needsUpdate=!0}const on={hero:document.getElementById("ov-hero"),purity:document.getElementById("ov-purity"),pack:document.getElementById("ov-pack"),pour:document.getElementById("ov-pour"),count:document.getElementById("ov-count"),tablet:document.getElementById("ov-tablet"),standard:document.getElementById("ov-standard"),why:document.getElementById("ov-why"),where:document.getElementById("ov-where"),dissolve:document.getElementById("ov-dissolve"),supply:document.getElementById("ov-supply"),countValue:document.getElementById("hud-count"),diameter:document.getElementById("hud-diameter"),places:[...document.querySelectorAll("#places li")]},yt={heroTitle:document.getElementById("hero-title"),heroLine:document.getElementById("hero-line"),purityValue:document.getElementById("purity-value"),purityLabel:document.getElementById("purity-label"),packTitle:document.getElementById("pack-title"),packTags:document.getElementById("pack-tags"),pourTitle:document.getElementById("pour-title"),pourLine:document.getElementById("pour-line"),countLabel:document.getElementById("count-label"),closeEyebrow:document.getElementById("close-eyebrow"),railClose:document.getElementById("rail-close"),closeTitle:document.getElementById("close-title"),closeLine:document.getElementById("close-line"),standardValue:document.getElementById("standard-value"),standardLabel:document.getElementById("standard-label"),whyTitle:document.getElementById("why-title"),whyLine:document.getElementById("why-line"),dissolveUnit:document.getElementById("dissolve-unit"),dissolveLabel:document.getElementById("dissolve-label"),whereTitle:document.getElementById("where-title"),places:document.getElementById("places"),specOpen:document.getElementById("spec-open"),switcher:document.getElementById("product-switch")},Ht=r=>Fn==="ar"?r.ar:r.en;function Oa(r,e){if(!r)return;if(r.textContent="",Fn==="ar"){r.classList.add("is-ar"),r.textContent=e;return}r.classList.remove("is-ar");const t=gp(r,e);t.length&&nr.set(t,{yPercent:0,opacity:1})}function xp(){const r=Zn;Oa(yt.heroTitle,Ht(r.hero.title)),yt.heroLine.textContent=Ht(r.hero.line),yt.purityValue.textContent=r.purity.value,yt.purityLabel.textContent=Ht(r.purity.label),Oa(yt.packTitle,Ht(r.pack.title)),yt.packTags.innerHTML=r.pack.tags.map(e=>`<li>${Ht(e)}</li>`).join(""),Oa(yt.pourTitle,Ht(r.pour.title)),yt.pourLine.textContent=Ht(r.pour.line),yt.countLabel.textContent=Ht(r.pour.countLabel),yt.closeEyebrow.textContent=Ht(r.close.eyebrow),yt.railClose.textContent=`03 ${Ht(r.close.nav)}`,Oa(yt.closeTitle,Ht(r.close.title)),yt.closeLine.textContent=Ht(r.close.line),yt.standardValue.textContent=r.close.standard.value,yt.standardLabel.textContent=r.close.standard.label,Oa(yt.whyTitle,Ht(r.why.title)),yt.whyLine.textContent=Ht(r.why.line),yt.dissolveUnit.textContent=Ht(r.dissolve.unit),yt.dissolveLabel.textContent=Ht(r.dissolve.label),Oa(yt.whereTitle,Ht(r.where.title)),yt.places.innerHTML=r.where.places.map((e,t)=>`<li data-place="${t}"><i>${String(t+1).padStart(2,"0")}</i><span>${Ht(e)}</span></li>`).join(""),on.places=[...yt.places.querySelectorAll("li")],yt.specOpen&&(yt.specOpen.textContent=Fn==="ar"?"المواصفات":"Specification"),ia&&Tx()}const Nx="sinaicore:product";let ia=null;function Ux(){yt.switcher&&(yt.switcher.innerHTML=dl.map(r=>{const e=ca[r],t=e.id===Zn.id;return`<button type="button" data-product="${r}" class="${t?"is-on":""}" aria-pressed="${t}">${Ht(e.short)}</button>`}).join(""))}async function j1(r){if(!r)return vx;if(Hh.has(r))return Hh.get(r);const e=await new Ha().loadAsync(`${Ni}artwork/${r}?${Ur}`);return e.colorSpace=Wt,e.anisotropy=Math.min(8,ui.capabilities.getMaxAnisotropy()),Hh.set(r,e),e}async function Ox(r,{store:e=!0}={}){const t=ca[r];if(!t)return;const n=t.id!==Zn.id;if(Zn=t,Jc){const i=await j1(t.sack.texture);i&&(Jc.map=i,Jc.needsUpdate=!0)}if(Xa.scale.setScalar(t.sack.scale),Bt&&(Bt.geometry=Dg(t.particle.kind),Bt.material.color.set("#ffffff"),Bt.material.roughness=t.particle.rough),Mi&&(Mi.geometry=Dg(t.particle.kind)),Bt&&yx(),t.dissolve.fixed&&(St.dissolve.v=0),xp(),Ux(),fs&&n&&Lx(),e)try{localStorage.setItem(Nx,t.id)}catch{}}yt.switcher?.addEventListener("click",r=>{const e=r.target.closest("[data-product]");e&&Ox(e.dataset.product)});yt.specOpen?.addEventListener("click",V1);const ni={section:document.getElementById("range"),stage:document.getElementById("range-stage"),sacks:document.getElementById("range-sacks"),panels:document.getElementById("range-panels"),eyebrow:document.getElementById("range-eyebrow"),title:document.getElementById("range-title"),lede:document.getElementById("range-lede"),index:document.getElementById("range-index"),total:document.getElementById("range-total")},qh={eyebrow:Ys("The range · Sinai, Egypt","خط الإنتاج · سيناء، مصر"),title:Ys("Five salts, one plant.","خمسة أملاح، مصنع واحد."),lede:Ys("The same pans, five ways out: tablets for brine, refined for the table, washed and rock for industry, road salt for winter.","نفس الأحواض، وخمسة طرق للخروج: أقراص للمحاليل، ومكرّر للمائدة، ومغسول وصخري للصناعة، وملح طرق للشتاء.")},Fx=["right","left","right","left","right"];function eR(r,e){if(r.textContent="",Fn==="ar"){r.textContent=e;return}let t=0;e.split(" ").forEach((n,i,s)=>{const a=document.createElement("span");a.className="rw";for(const o of n){const l=document.createElement("span");l.className="rl",l.style.setProperty("--i",t++),l.textContent=o,a.appendChild(l)}r.appendChild(a),i<s.length-1&&r.appendChild(document.createTextNode(" "))})}function tR(){if(!ni.panels)return;const r=Fn==="ar",e=t=>r?t.ar:t.en;ni.eyebrow.textContent=e(qh.eyebrow),ni.title.textContent=e(qh.title),ni.lede.textContent=e(qh.lede),ni.total.textContent=String(dl.length).padStart(2,"0"),Hg.disconnect(),ni.sacks.innerHTML=dl.map((t,n)=>`<img src="${Ni}artwork/still-${t}.webp" alt="" ${n===0?'class="is-on"':""} loading="lazy" decoding="async" width="765" height="1100" />`).join(""),ni.panels.innerHTML=dl.map((t,n)=>{const i=ca[t];return`
      <article class="rpanel" data-index="${n}" data-product="${t}" data-side="${Fx[n]}" style="--accent:${i.range.accent}">
        <div class="rpanel__inner">
          <span class="rpanel__chip">${e(i.pack.title)}</span>
          <p class="rpanel__eyebrow"><span dir="ltr">NaCl ${i.purity.value}</span></p>
          <h2 class="rpanel__title"></h2>
          <p class="rpanel__spec"><span dir="ltr">${e(i.close.title)} mm</span></p>
          <p class="rpanel__line">${e(i.hero.line)}</p>
          <ul class="rpanel__uses">${i.range.uses.map(s=>`<li>${e(s)}</li>`).join("")}</ul>
        </div>
      </article>`}).join(""),ni.panels.querySelectorAll(".rpanel").forEach(t=>{const n=ca[t.dataset.product];eR(t.querySelector(".rpanel__title"),e(n.name)),Hg.observe(t)}),Bx(0)}function Bx(r){ni.sacks&&(ni.stage.dataset.side=Fx[r]||"right",ni.index.textContent=String(r+1).padStart(2,"0"),ni.sacks.querySelectorAll("img").forEach((e,t)=>{e.classList.toggle("is-on",t===r)}),ni.section.style.setProperty("--clay",ca[dl[r]].range.accent))}const Hg=new IntersectionObserver(r=>{r.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-in"),Bx(Number(e.target.dataset.index)))})},{rootMargin:"-45% 0px -45% 0px",threshold:0}),ns={section:document.getElementById("mag"),eyebrow:document.getElementById("mag-eyebrow"),title:document.getElementById("mag-title"),lede:document.getElementById("mag-lede"),list:document.getElementById("mag-list"),foot:document.getElementById("mag-foot")},Nc={eyebrow:Ys("The salt flats · eight chapters","ملاحات سيناء · ثمانية فصول"),title:Ys("From seawater to sack","من ماء البحر إلى الشيكارة"),lede:Ys("Eight steps between the sea and a fifty-kilo sack — photographed on the pans, with no models at all.","ثماني خطوات بين البحر وشيكارة من خمسين كيلو — مصوّرة على الأحواض، وبلا أي مجسّم ثلاثي الأبعاد."),foot:Ys("El-Arish · North Sinai, Egypt","العريش · شمال سيناء، مصر")},uf=new IntersectionObserver(r=>{r.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-in"),uf.unobserve(e.target))})},{rootMargin:"0px 0px -10% 0px",threshold:.08});function nR(){if(!ns.list)return;const r=Fn==="ar",e=t=>r?t.ar:t.en;ns.eyebrow.textContent=e(Nc.eyebrow),ns.title.textContent=e(Nc.title),ns.lede.textContent=e(Nc.lede),ns.foot.textContent=e(Nc.foot),ns.list.innerHTML=A1.map(t=>`
      <article class="chap">
        <figure class="chap__plate">
          <img src="${Ni}${t.plate}" alt="${e(t.caption)}" loading="lazy" decoding="async" width="1408" height="792" />
          <figcaption>${t.n} · ${e(t.caption)}</figcaption>
        </figure>
        <div class="chap__text">
          <p class="chap__num">${t.n} · ${e(t.eyebrow)}</p>
          <h3 class="chap__title">${e(t.title)}</h3>
          <p class="chap__lead">${e(t.lead)}</p>
          <p class="chap__body">${e(t.body)}</p>
          ${t.note?`<p class="chap__note">${e(t.note)}</p>`:""}
          <dl class="chap__stats">
            ${t.stats.map(n=>`<div><dt>${n.value}</dt><dd>${e(n.label)}</dd></div>`).join("")}
          </dl>
        </div>
      </article>`).join(""),uf.disconnect(),ns.list.querySelectorAll(".chap").forEach(t=>{Ou?t.classList.add("is-in"):uf.observe(t)})}const hf=r=>r<0?0:r>1?1:r,$i=(r,e,t,n,i)=>r<t?hf((r-e)/Math.max(t-e,1e-4)):r>n?1-hf((r-n)/Math.max(i-n,1e-4)):1,Ki=(r,e)=>{if(!r)return;const t=Math.round(e*100)/100;r.dataset.v!==String(t)&&(r.dataset.v=String(t),r.style.opacity=String(t),r.style.transform=`translateY(${(1-t)*14}px)`)};let Gg=-1;const iR=r=>{if(!on.hero)return;if(Ki(on.hero,$i(r,-1,0,.06,.1)),Ki(on.purity,$i(r,.03,.09,.13,.17)),Ki(on.pack,$i(r,.12,.17,.19,.23)),Ki(on.pour,$i(r,.235,.28,.36,.41)),Ki(on.count,$i(r,.25,.3,.38,.43)),Ki(on.tablet,$i(r,.44,.48,.56,.61)),Ki(on.standard,$i(r,.49,.54,.56,.61)),Ki(on.why,$i(r,.58,.62,.76,.8)),Ki(on.dissolve,$i(r,.6,.645,.76,.8)),on.diameter){const{from:t,to:n,fixed:i}=Zn.dissolve,s=i?t:t-St.dissolve.v*(t-n),o=`${Math.abs(s)>=10?Math.round(s):Math.round(s*10)/10}`;on.diameter.dataset.mm!==o&&(on.diameter.dataset.mm=o,on.diameter.textContent=o)}if(Ki(on.where,$i(r,.8,.85,.9,.94)),Ki(on.supply,$i(r,.93,.97,2,3)),on.countValue&&ua.length){const t=St.pour.u;let n=0;for(const i of ua)(t-i.delay)/i.duration>=.96&&n++;n!==Gg&&(Gg=n,on.countValue.textContent=String(n).padStart(2,"0"))}const e=hf((r-.815)/.05);on.places.forEach((t,n)=>{t.classList.toggle("is-on",e>n/4.4)})};function kx(){const r=Math.min(cf.getDelta(),.1),e=cf.elapsedTime;if(fs){ti+=(zu-ti)*(1-Math.exp(-r*6)),fs.progress(ti),Bg&&(Bg.style.transform=`scaleX(${Math.max(.001,ti)})`);const t=ti<.2?0:ti<.42?1:ti<.72?2:3;t!==Ax&&Ix(t)}Z1(e),Q1(),J1(),K1(),G1(St.annot.v),H1(),iR(ti),ys&&St.annot.v<.35&&bx(),ui.render(jn,wi),kl.render(jn,wi),requestAnimationFrame(kx)}kx();const zx=()=>{const r=Et.clientWidth,e=Et.clientHeight;!r||!e||(wi.aspect=r/e,_x(),wi.updateProjectionMatrix(),ui.setSize(r,e),kl.setSize(r,e),Rx(),zu=Cx())};new ResizeObserver(zx).observe(Et);window.addEventListener("resize",zx);fetch(`${Ni}artwork/sack-50kg-texture.png?${Ur}`,{method:"HEAD"}).then(r=>r.headers.get("last-modified")).then(r=>{if(!r)return;const t=new Date(r).toLocaleString("en-GB",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}),n=document.getElementById("artwork-rev");n&&(n.textContent=`ARTWORK ${t.toUpperCase()}`)}).catch(()=>{});document.addEventListener("visibilitychange",()=>{document.hidden||cf.getDelta()});let df=null;try{df=localStorage.getItem(dx)}catch{df=null}fx(df==="ar"?"ar":"en",{store:!1});let fl=null;try{fl=localStorage.getItem(Nx)}catch{fl=null}Ox(fl&&ca[fl]?fl:"tablets",{store:!1});
