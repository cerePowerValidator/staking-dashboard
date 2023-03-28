(function(){"use strict";var Ne=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,oe=Math.ceil,Y=Math.floor,F="[BigNumber Error] ",we=F+"Number primitive has more than 15 significant digits: ",V=1e14,N=14,le=9007199254740991,ce=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],j=1e7,P=1e9;function Ee(d){var w,x,v,p=h.prototype={constructor:h,toString:null,valueOf:null},B=new h(1),A=20,_=4,R=-7,k=21,W=-1e7,L=1e7,G=!1,y=1,q=0,b={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},Z="0123456789abcdefghijklmnopqrstuvwxyz",ue=!0;function h(e,r){var n,l,t,s,u,i,f,c,o=this;if(!(o instanceof h))return new h(e,r);if(r==null){if(e&&e._isBigNumber===!0){o.s=e.s,!e.c||e.e>L?o.c=o.e=null:e.e<W?o.c=[o.e=0]:(o.e=e.e,o.c=e.c.slice());return}if((i=typeof e=="number")&&e*0==0){if(o.s=1/e<0?(e=-e,-1):1,e===~~e){for(s=0,u=e;u>=10;u/=10,s++);s>L?o.c=o.e=null:(o.e=s,o.c=[e]);return}c=String(e)}else{if(!Ne.test(c=String(e)))return v(o,c,i);o.s=c.charCodeAt(0)==45?(c=c.slice(1),-1):1}(s=c.indexOf("."))>-1&&(c=c.replace(".","")),(u=c.search(/e/i))>0?(s<0&&(s=u),s+=+c.slice(u+1),c=c.substring(0,u)):s<0&&(s=c.length)}else{if(I(r,2,Z.length,"Base"),r==10&&ue)return o=new h(e),H(o,A+o.e+1,_);if(c=String(e),i=typeof e=="number"){if(e*0!=0)return v(o,c,i,r);if(o.s=1/e<0?(c=c.slice(1),-1):1,h.DEBUG&&c.replace(/^0\.0*|\./,"").length>15)throw Error(we+e)}else o.s=c.charCodeAt(0)===45?(c=c.slice(1),-1):1;for(n=Z.slice(0,r),s=u=0,f=c.length;u<f;u++)if(n.indexOf(l=c.charAt(u))<0){if(l=="."){if(u>s){s=f;continue}}else if(!t&&(c==c.toUpperCase()&&(c=c.toLowerCase())||c==c.toLowerCase()&&(c=c.toUpperCase()))){t=!0,u=-1,s=0;continue}return v(o,String(e),i,r)}i=!1,c=x(c,r,10,o.s),(s=c.indexOf("."))>-1?c=c.replace(".",""):s=c.length}for(u=0;c.charCodeAt(u)===48;u++);for(f=c.length;c.charCodeAt(--f)===48;);if(c=c.slice(u,++f)){if(f-=u,i&&h.DEBUG&&f>15&&(e>le||e!==Y(e)))throw Error(we+o.s*e);if((s=s-u-1)>L)o.c=o.e=null;else if(s<W)o.c=[o.e=0];else{if(o.e=s,o.c=[],u=(s+1)%N,s<0&&(u+=N),u<f){for(u&&o.c.push(+c.slice(0,u)),f-=N;u<f;)o.c.push(+c.slice(u,u+=N));u=N-(c=c.slice(u)).length}else u-=f;for(;u--;c+="0");o.c.push(+c)}}else o.c=[o.e=0]}h.clone=Ee,h.ROUND_UP=0,h.ROUND_DOWN=1,h.ROUND_CEIL=2,h.ROUND_FLOOR=3,h.ROUND_HALF_UP=4,h.ROUND_HALF_DOWN=5,h.ROUND_HALF_EVEN=6,h.ROUND_HALF_CEIL=7,h.ROUND_HALF_FLOOR=8,h.EUCLID=9,h.config=h.set=function(e){var r,n;if(e!=null)if(typeof e=="object"){if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(n=e[r],I(n,0,P,r),A=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(n=e[r],I(n,0,8,r),_=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&(n=e[r],n&&n.pop?(I(n[0],-P,0,r),I(n[1],0,P,r),R=n[0],k=n[1]):(I(n,-P,P,r),R=-(k=n<0?-n:n))),e.hasOwnProperty(r="RANGE"))if(n=e[r],n&&n.pop)I(n[0],-P,-1,r),I(n[1],1,P,r),W=n[0],L=n[1];else if(I(n,-P,P,r),n)W=-(L=n<0?-n:n);else throw Error(F+r+" cannot be zero: "+n);if(e.hasOwnProperty(r="CRYPTO"))if(n=e[r],n===!!n)if(n)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))G=n;else throw G=!n,Error(F+"crypto unavailable");else G=n;else throw Error(F+r+" not true or false: "+n);if(e.hasOwnProperty(r="MODULO_MODE")&&(n=e[r],I(n,0,9,r),y=n),e.hasOwnProperty(r="POW_PRECISION")&&(n=e[r],I(n,0,P,r),q=n),e.hasOwnProperty(r="FORMAT"))if(n=e[r],typeof n=="object")b=n;else throw Error(F+r+" not an object: "+n);if(e.hasOwnProperty(r="ALPHABET"))if(n=e[r],typeof n=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(n))ue=n.slice(0,10)=="0123456789",Z=n;else throw Error(F+r+" invalid: "+n)}else throw Error(F+"Object expected: "+e);return{DECIMAL_PLACES:A,ROUNDING_MODE:_,EXPONENTIAL_AT:[R,k],RANGE:[W,L],CRYPTO:G,MODULO_MODE:y,POW_PRECISION:q,FORMAT:b,ALPHABET:Z}},h.isBigNumber=function(e){if(!e||e._isBigNumber!==!0)return!1;if(!h.DEBUG)return!0;var r,n,l=e.c,t=e.e,s=e.s;e:if({}.toString.call(l)=="[object Array]"){if((s===1||s===-1)&&t>=-P&&t<=P&&t===Y(t)){if(l[0]===0){if(t===0&&l.length===1)return!0;break e}if(r=(t+1)%N,r<1&&(r+=N),String(l[0]).length==r){for(r=0;r<l.length;r++)if(n=l[r],n<0||n>=V||n!==Y(n))break e;if(n!==0)return!0}}}else if(l===null&&t===null&&(s===null||s===1||s===-1))return!0;throw Error(F+"Invalid BigNumber: "+e)},h.maximum=h.max=function(){return de(arguments,p.lt)},h.minimum=h.min=function(){return de(arguments,p.gt)},h.random=function(){var e=9007199254740992,r=Math.random()*e&2097151?function(){return Y(Math.random()*e)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(n){var l,t,s,u,i,f=0,c=[],o=new h(B);if(n==null?n=A:I(n,0,P),u=oe(n/N),G)if(crypto.getRandomValues){for(l=crypto.getRandomValues(new Uint32Array(u*=2));f<u;)i=l[f]*131072+(l[f+1]>>>11),i>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),l[f]=t[0],l[f+1]=t[1]):(c.push(i%1e14),f+=2);f=u/2}else if(crypto.randomBytes){for(l=crypto.randomBytes(u*=7);f<u;)i=(l[f]&31)*281474976710656+l[f+1]*1099511627776+l[f+2]*4294967296+l[f+3]*16777216+(l[f+4]<<16)+(l[f+5]<<8)+l[f+6],i>=9e15?crypto.randomBytes(7).copy(l,f):(c.push(i%1e14),f+=7);f=u/7}else throw G=!1,Error(F+"crypto unavailable");if(!G)for(;f<u;)i=r(),i<9e15&&(c[f++]=i%1e14);for(u=c[--f],n%=N,u&&n&&(i=ce[N-n],c[f]=Y(u/i)*i);c[f]===0;c.pop(),f--);if(f<0)c=[s=0];else{for(s=-1;c[0]===0;c.splice(0,1),s-=N);for(f=1,i=c[0];i>=10;i/=10,f++);f<N&&(s-=N-f)}return o.e=s,o.c=c,o}}(),h.sum=function(){for(var e=1,r=arguments,n=new h(r[0]);e<r.length;)n=n.plus(r[e++]);return n},x=function(){var e="0123456789";function r(n,l,t,s){for(var u,i=[0],f,c=0,o=n.length;c<o;){for(f=i.length;f--;i[f]*=l);for(i[0]+=s.indexOf(n.charAt(c++)),u=0;u<i.length;u++)i[u]>t-1&&(i[u+1]==null&&(i[u+1]=0),i[u+1]+=i[u]/t|0,i[u]%=t)}return i.reverse()}return function(n,l,t,s,u){var i,f,c,o,a,g,E,m,T=n.indexOf("."),D=A,O=_;for(T>=0&&(o=q,q=0,n=n.replace(".",""),m=new h(l),g=m.pow(n.length-T),q=o,m.c=r(Q(z(g.c),g.e,"0"),10,t,e),m.e=m.c.length),E=r(n,l,t,u?(i=Z,e):(i=e,Z)),c=o=E.length;E[--o]==0;E.pop());if(!E[0])return i.charAt(0);if(T<0?--c:(g.c=E,g.e=c,g.s=s,g=w(g,m,D,O,t),E=g.c,a=g.r,c=g.e),f=c+D+1,T=E[f],o=t/2,a=a||f<0||E[f+1]!=null,a=O<4?(T!=null||a)&&(O==0||O==(g.s<0?3:2)):T>o||T==o&&(O==4||a||O==6&&E[f-1]&1||O==(g.s<0?8:7)),f<1||!E[0])n=a?Q(i.charAt(1),-D,i.charAt(0)):i.charAt(0);else{if(E.length=f,a)for(--t;++E[--f]>t;)E[f]=0,f||(++c,E=[1].concat(E));for(o=E.length;!E[--o];);for(T=0,n="";T<=o;n+=i.charAt(E[T++]));n=Q(n,c,i.charAt(0))}return n}}(),w=function(){function e(l,t,s){var u,i,f,c,o=0,a=l.length,g=t%j,E=t/j|0;for(l=l.slice();a--;)f=l[a]%j,c=l[a]/j|0,u=E*f+c*g,i=g*f+u%j*j+o,o=(i/s|0)+(u/j|0)+E*c,l[a]=i%s;return o&&(l=[o].concat(l)),l}function r(l,t,s,u){var i,f;if(s!=u)f=s>u?1:-1;else for(i=f=0;i<s;i++)if(l[i]!=t[i]){f=l[i]>t[i]?1:-1;break}return f}function n(l,t,s,u){for(var i=0;s--;)l[s]-=i,i=l[s]<t[s]?1:0,l[s]=i*u+l[s]-t[s];for(;!l[0]&&l.length>1;l.splice(0,1));}return function(l,t,s,u,i){var f,c,o,a,g,E,m,T,D,O,S,C,se,pe,ge,J,ne,X=l.s==t.s?1:-1,U=l.c,M=t.c;if(!U||!U[0]||!M||!M[0])return new h(!l.s||!t.s||(U?M&&U[0]==M[0]:!M)?NaN:U&&U[0]==0||!M?X*0:X/0);for(T=new h(X),D=T.c=[],c=l.e-t.e,X=s+c+1,i||(i=V,c=$(l.e/N)-$(t.e/N),X=X/N|0),o=0;M[o]==(U[o]||0);o++);if(M[o]>(U[o]||0)&&c--,X<0)D.push(1),a=!0;else{for(pe=U.length,J=M.length,o=0,X+=2,g=Y(i/(M[0]+1)),g>1&&(M=e(M,g,i),U=e(U,g,i),J=M.length,pe=U.length),se=J,O=U.slice(0,J),S=O.length;S<J;O[S++]=0);ne=M.slice(),ne=[0].concat(ne),ge=M[0],M[1]>=i/2&&ge++;do{if(g=0,f=r(M,O,J,S),f<0){if(C=O[0],J!=S&&(C=C*i+(O[1]||0)),g=Y(C/ge),g>1)for(g>=i&&(g=i-1),E=e(M,g,i),m=E.length,S=O.length;r(E,O,m,S)==1;)g--,n(E,J<m?ne:M,m,i),m=E.length,f=1;else g==0&&(f=g=1),E=M.slice(),m=E.length;if(m<S&&(E=[0].concat(E)),n(O,E,S,i),S=O.length,f==-1)for(;r(M,O,J,S)<1;)g++,n(O,J<S?ne:M,S,i),S=O.length}else f===0&&(g++,O=[0]);D[o++]=g,O[0]?O[S++]=U[se]||0:(O=[U[se]],S=1)}while((se++<pe||O[0]!=null)&&X--);a=O[0]!=null,D[0]||D.splice(0,1)}if(i==V){for(o=1,X=D[0];X>=10;X/=10,o++);H(T,s+(T.e=o+c*N-1)+1,u,a)}else T.e=c,T.r=+a;return T}}();function ae(e,r,n,l){var t,s,u,i,f;if(n==null?n=_:I(n,0,8),!e.c)return e.toString();if(t=e.c[0],u=e.e,r==null)f=z(e.c),f=l==1||l==2&&(u<=R||u>=k)?te(f,u):Q(f,u,"0");else if(e=H(new h(e),r,n),s=e.e,f=z(e.c),i=f.length,l==1||l==2&&(r<=s||s<=R)){for(;i<r;f+="0",i++);f=te(f,s)}else if(r-=u,f=Q(f,s,"0"),s+1>i){if(--r>0)for(f+=".";r--;f+="0");}else if(r+=s-i,r>0)for(s+1==i&&(f+=".");r--;f+="0");return e.s<0&&t?"-"+f:f}function de(e,r){for(var n,l=1,t=new h(e[0]);l<e.length;l++)if(n=new h(e[l]),n.s)r.call(t,n)&&(t=n);else{t=n;break}return t}function he(e,r,n){for(var l=1,t=r.length;!r[--t];r.pop());for(t=r[0];t>=10;t/=10,l++);return(n=l+n*N-1)>L?e.c=e.e=null:n<W?e.c=[e.e=0]:(e.e=n,e.c=r),e}v=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,n=/^\.([^.]+)$/,l=/^-?(Infinity|NaN)$/,t=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(s,u,i,f){var c,o=i?u:u.replace(t,"");if(l.test(o))s.s=isNaN(o)?null:o<0?-1:1;else{if(!i&&(o=o.replace(e,function(a,g,E){return c=(E=E.toLowerCase())=="x"?16:E=="b"?2:8,!f||f==c?g:a}),f&&(c=f,o=o.replace(r,"$1").replace(n,"0.$1")),u!=o))return new h(o,c);if(h.DEBUG)throw Error(F+"Not a"+(f?" base "+f:"")+" number: "+u);s.s=null}s.c=s.e=null}}();function H(e,r,n,l){var t,s,u,i,f,c,o,a=e.c,g=ce;if(a){e:{for(t=1,i=a[0];i>=10;i/=10,t++);if(s=r-t,s<0)s+=N,u=r,f=a[c=0],o=f/g[t-u-1]%10|0;else if(c=oe((s+1)/N),c>=a.length)if(l){for(;a.length<=c;a.push(0));f=o=0,t=1,s%=N,u=s-N+1}else break e;else{for(f=i=a[c],t=1;i>=10;i/=10,t++);s%=N,u=s-N+t,o=u<0?0:f/g[t-u-1]%10|0}if(l=l||r<0||a[c+1]!=null||(u<0?f:f%g[t-u-1]),l=n<4?(o||l)&&(n==0||n==(e.s<0?3:2)):o>5||o==5&&(n==4||l||n==6&&(s>0?u>0?f/g[t-u]:0:a[c-1])%10&1||n==(e.s<0?8:7)),r<1||!a[0])return a.length=0,l?(r-=e.e+1,a[0]=g[(N-r%N)%N],e.e=-r||0):a[0]=e.e=0,e;if(s==0?(a.length=c,i=1,c--):(a.length=c+1,i=g[N-s],a[c]=u>0?Y(f/g[t-u]%g[u])*i:0),l)for(;;)if(c==0){for(s=1,u=a[0];u>=10;u/=10,s++);for(u=a[0]+=i,i=1;u>=10;u/=10,i++);s!=i&&(e.e++,a[0]==V&&(a[0]=1));break}else{if(a[c]+=i,a[c]!=V)break;a[c--]=0,i=1}for(s=a.length;a[--s]===0;a.pop());}e.e>L?e.c=e.e=null:e.e<W&&(e.c=[e.e=0])}return e}function K(e){var r,n=e.e;return n===null?e.toString():(r=z(e.c),r=n<=R||n>=k?te(r,n):Q(r,n,"0"),e.s<0?"-"+r:r)}return p.absoluteValue=p.abs=function(){var e=new h(this);return e.s<0&&(e.s=1),e},p.comparedTo=function(e,r){return re(this,new h(e,r))},p.decimalPlaces=p.dp=function(e,r){var n,l,t,s=this;if(e!=null)return I(e,0,P),r==null?r=_:I(r,0,8),H(new h(s),e+s.e+1,r);if(!(n=s.c))return null;if(l=((t=n.length-1)-$(this.e/N))*N,t=n[t])for(;t%10==0;t/=10,l--);return l<0&&(l=0),l},p.dividedBy=p.div=function(e,r){return w(this,new h(e,r),A,_)},p.dividedToIntegerBy=p.idiv=function(e,r){return w(this,new h(e,r),0,1)},p.exponentiatedBy=p.pow=function(e,r){var n,l,t,s,u,i,f,c,o,a=this;if(e=new h(e),e.c&&!e.isInteger())throw Error(F+"Exponent not an integer: "+K(e));if(r!=null&&(r=new h(r)),i=e.e>14,!a.c||!a.c[0]||a.c[0]==1&&!a.e&&a.c.length==1||!e.c||!e.c[0])return o=new h(Math.pow(+K(a),i?e.s*(2-ie(e)):+K(e))),r?o.mod(r):o;if(f=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new h(NaN);l=!f&&a.isInteger()&&r.isInteger(),l&&(a=a.mod(r))}else{if(e.e>9&&(a.e>0||a.e<-1||(a.e==0?a.c[0]>1||i&&a.c[1]>=24e7:a.c[0]<8e13||i&&a.c[0]<=9999975e7)))return s=a.s<0&&ie(e)?-0:0,a.e>-1&&(s=1/s),new h(f?1/s:s);q&&(s=oe(q/N+2))}for(i?(n=new h(.5),f&&(e.s=1),c=ie(e)):(t=Math.abs(+K(e)),c=t%2),o=new h(B);;){if(c){if(o=o.times(a),!o.c)break;s?o.c.length>s&&(o.c.length=s):l&&(o=o.mod(r))}if(t){if(t=Y(t/2),t===0)break;c=t%2}else if(e=e.times(n),H(e,e.e+1,1),e.e>14)c=ie(e);else{if(t=+K(e),t===0)break;c=t%2}a=a.times(a),s?a.c&&a.c.length>s&&(a.c.length=s):l&&(a=a.mod(r))}return l?o:(f&&(o=B.div(o)),r?o.mod(r):s?H(o,q,_,u):o)},p.integerValue=function(e){var r=new h(this);return e==null?e=_:I(e,0,8),H(r,r.e+1,e)},p.isEqualTo=p.eq=function(e,r){return re(this,new h(e,r))===0},p.isFinite=function(){return!!this.c},p.isGreaterThan=p.gt=function(e,r){return re(this,new h(e,r))>0},p.isGreaterThanOrEqualTo=p.gte=function(e,r){return(r=re(this,new h(e,r)))===1||r===0},p.isInteger=function(){return!!this.c&&$(this.e/N)>this.c.length-2},p.isLessThan=p.lt=function(e,r){return re(this,new h(e,r))<0},p.isLessThanOrEqualTo=p.lte=function(e,r){return(r=re(this,new h(e,r)))===-1||r===0},p.isNaN=function(){return!this.s},p.isNegative=function(){return this.s<0},p.isPositive=function(){return this.s>0},p.isZero=function(){return!!this.c&&this.c[0]==0},p.minus=function(e,r){var n,l,t,s,u=this,i=u.s;if(e=new h(e,r),r=e.s,!i||!r)return new h(NaN);if(i!=r)return e.s=-r,u.plus(e);var f=u.e/N,c=e.e/N,o=u.c,a=e.c;if(!f||!c){if(!o||!a)return o?(e.s=-r,e):new h(a?u:NaN);if(!o[0]||!a[0])return a[0]?(e.s=-r,e):new h(o[0]?u:_==3?-0:0)}if(f=$(f),c=$(c),o=o.slice(),i=f-c){for((s=i<0)?(i=-i,t=o):(c=f,t=a),t.reverse(),r=i;r--;t.push(0));t.reverse()}else for(l=(s=(i=o.length)<(r=a.length))?i:r,i=r=0;r<l;r++)if(o[r]!=a[r]){s=o[r]<a[r];break}if(s&&(t=o,o=a,a=t,e.s=-e.s),r=(l=a.length)-(n=o.length),r>0)for(;r--;o[n++]=0);for(r=V-1;l>i;){if(o[--l]<a[l]){for(n=l;n&&!o[--n];o[n]=r);--o[n],o[l]+=V}o[l]-=a[l]}for(;o[0]==0;o.splice(0,1),--c);return o[0]?he(e,o,c):(e.s=_==3?-1:1,e.c=[e.e=0],e)},p.modulo=p.mod=function(e,r){var n,l,t=this;return e=new h(e,r),!t.c||!e.s||e.c&&!e.c[0]?new h(NaN):!e.c||t.c&&!t.c[0]?new h(t):(y==9?(l=e.s,e.s=1,n=w(t,e,0,3),e.s=l,n.s*=l):n=w(t,e,0,y),e=t.minus(n.times(e)),!e.c[0]&&y==1&&(e.s=t.s),e)},p.multipliedBy=p.times=function(e,r){var n,l,t,s,u,i,f,c,o,a,g,E,m,T,D,O=this,S=O.c,C=(e=new h(e,r)).c;if(!S||!C||!S[0]||!C[0])return!O.s||!e.s||S&&!S[0]&&!C||C&&!C[0]&&!S?e.c=e.e=e.s=null:(e.s*=O.s,!S||!C?e.c=e.e=null:(e.c=[0],e.e=0)),e;for(l=$(O.e/N)+$(e.e/N),e.s*=O.s,f=S.length,a=C.length,f<a&&(m=S,S=C,C=m,t=f,f=a,a=t),t=f+a,m=[];t--;m.push(0));for(T=V,D=j,t=a;--t>=0;){for(n=0,g=C[t]%D,E=C[t]/D|0,u=f,s=t+u;s>t;)c=S[--u]%D,o=S[u]/D|0,i=E*c+o*g,c=g*c+i%D*D+m[s]+n,n=(c/T|0)+(i/D|0)+E*o,m[s--]=c%T;m[s]=n}return n?++l:m.splice(0,1),he(e,m,l)},p.negated=function(){var e=new h(this);return e.s=-e.s||null,e},p.plus=function(e,r){var n,l=this,t=l.s;if(e=new h(e,r),r=e.s,!t||!r)return new h(NaN);if(t!=r)return e.s=-r,l.minus(e);var s=l.e/N,u=e.e/N,i=l.c,f=e.c;if(!s||!u){if(!i||!f)return new h(t/0);if(!i[0]||!f[0])return f[0]?e:new h(i[0]?l:t*0)}if(s=$(s),u=$(u),i=i.slice(),t=s-u){for(t>0?(u=s,n=f):(t=-t,n=i),n.reverse();t--;n.push(0));n.reverse()}for(t=i.length,r=f.length,t-r<0&&(n=f,f=i,i=n,r=t),t=0;r;)t=(i[--r]=i[r]+f[r]+t)/V|0,i[r]=V===i[r]?0:i[r]%V;return t&&(i=[t].concat(i),++u),he(e,i,u)},p.precision=p.sd=function(e,r){var n,l,t,s=this;if(e!=null&&e!==!!e)return I(e,1,P),r==null?r=_:I(r,0,8),H(new h(s),e,r);if(!(n=s.c))return null;if(t=n.length-1,l=t*N+1,t=n[t]){for(;t%10==0;t/=10,l--);for(t=n[0];t>=10;t/=10,l++);}return e&&s.e+1>l&&(l=s.e+1),l},p.shiftedBy=function(e){return I(e,-le,le),this.times("1e"+e)},p.squareRoot=p.sqrt=function(){var e,r,n,l,t,s=this,u=s.c,i=s.s,f=s.e,c=A+4,o=new h("0.5");if(i!==1||!u||!u[0])return new h(!i||i<0&&(!u||u[0])?NaN:u?s:1/0);if(i=Math.sqrt(+K(s)),i==0||i==1/0?(r=z(u),(r.length+f)%2==0&&(r+="0"),i=Math.sqrt(+r),f=$((f+1)/2)-(f<0||f%2),i==1/0?r="5e"+f:(r=i.toExponential(),r=r.slice(0,r.indexOf("e")+1)+f),n=new h(r)):n=new h(i+""),n.c[0]){for(f=n.e,i=f+c,i<3&&(i=0);;)if(t=n,n=o.times(t.plus(w(s,t,c,1))),z(t.c).slice(0,i)===(r=z(n.c)).slice(0,i))if(n.e<f&&--i,r=r.slice(i-3,i+1),r=="9999"||!l&&r=="4999"){if(!l&&(H(t,t.e+A+2,0),t.times(t).eq(s))){n=t;break}c+=4,i+=4,l=1}else{(!+r||!+r.slice(1)&&r.charAt(0)=="5")&&(H(n,n.e+A+2,1),e=!n.times(n).eq(s));break}}return H(n,n.e+A+1,_,e)},p.toExponential=function(e,r){return e!=null&&(I(e,0,P),e++),ae(this,e,r,1)},p.toFixed=function(e,r){return e!=null&&(I(e,0,P),e=e+this.e+1),ae(this,e,r)},p.toFormat=function(e,r,n){var l,t=this;if(n==null)e!=null&&r&&typeof r=="object"?(n=r,r=null):e&&typeof e=="object"?(n=e,e=r=null):n=b;else if(typeof n!="object")throw Error(F+"Argument not an object: "+n);if(l=t.toFixed(e,r),t.c){var s,u=l.split("."),i=+n.groupSize,f=+n.secondaryGroupSize,c=n.groupSeparator||"",o=u[0],a=u[1],g=t.s<0,E=g?o.slice(1):o,m=E.length;if(f&&(s=i,i=f,f=s,m-=s),i>0&&m>0){for(s=m%i||i,o=E.substr(0,s);s<m;s+=i)o+=c+E.substr(s,i);f>0&&(o+=c+E.slice(s)),g&&(o="-"+o)}l=a?o+(n.decimalSeparator||"")+((f=+n.fractionGroupSize)?a.replace(new RegExp("\\d{"+f+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):a):o}return(n.prefix||"")+l+(n.suffix||"")},p.toFraction=function(e){var r,n,l,t,s,u,i,f,c,o,a,g,E=this,m=E.c;if(e!=null&&(i=new h(e),!i.isInteger()&&(i.c||i.s!==1)||i.lt(B)))throw Error(F+"Argument "+(i.isInteger()?"out of range: ":"not an integer: ")+K(i));if(!m)return new h(E);for(r=new h(B),c=n=new h(B),l=f=new h(B),g=z(m),s=r.e=g.length-E.e-1,r.c[0]=ce[(u=s%N)<0?N+u:u],e=!e||i.comparedTo(r)>0?s>0?r:c:i,u=L,L=1/0,i=new h(g),f.c[0]=0;o=w(i,r,0,1),t=n.plus(o.times(l)),t.comparedTo(e)!=1;)n=l,l=t,c=f.plus(o.times(t=c)),f=t,r=i.minus(o.times(t=r)),i=t;return t=w(e.minus(n),l,0,1),f=f.plus(t.times(c)),n=n.plus(t.times(l)),f.s=c.s=E.s,s=s*2,a=w(c,l,s,_).minus(E).abs().comparedTo(w(f,n,s,_).minus(E).abs())<1?[c,l]:[f,n],L=u,a},p.toNumber=function(){return+K(this)},p.toPrecision=function(e,r){return e!=null&&I(e,1,P),ae(this,e,r,2)},p.toString=function(e){var r,n=this,l=n.s,t=n.e;return t===null?l?(r="Infinity",l<0&&(r="-"+r)):r="NaN":(e==null?r=t<=R||t>=k?te(z(n.c),t):Q(z(n.c),t,"0"):e===10&&ue?(n=H(new h(n),A+t+1,_),r=Q(z(n.c),n.e,"0")):(I(e,2,Z.length,"Base"),r=x(Q(z(n.c),t,"0"),10,e,l,!0)),l<0&&n.c[0]&&(r="-"+r)),r},p.valueOf=p.toJSON=function(){return K(this)},p._isBigNumber=!0,p[Symbol.toStringTag]="BigNumber",p[Symbol.for("nodejs.util.inspect.custom")]=p.valueOf,d!=null&&h.set(d),h}function $(d){var w=d|0;return d>0||d===w?w:w-1}function z(d){for(var w,x,v=1,p=d.length,B=d[0]+"";v<p;){for(w=d[v++]+"",x=N-w.length;x--;w="0"+w);B+=w}for(p=B.length;B.charCodeAt(--p)===48;);return B.slice(0,p+1||1)}function re(d,w){var x,v,p=d.c,B=w.c,A=d.s,_=w.s,R=d.e,k=w.e;if(!A||!_)return null;if(x=p&&!p[0],v=B&&!B[0],x||v)return x?v?0:-_:A;if(A!=_)return A;if(x=A<0,v=R==k,!p||!B)return v?0:!p^x?1:-1;if(!v)return R>k^x?1:-1;for(_=(R=p.length)<(k=B.length)?R:k,A=0;A<_;A++)if(p[A]!=B[A])return p[A]>B[A]^x?1:-1;return R==k?0:R>k^x?1:-1}function I(d,w,x,v){if(d<w||d>x||d!==Y(d))throw Error(F+(v||"Argument")+(typeof d=="number"?d<w||d>x?" out of range: ":" not an integer: ":" not a primitive number: ")+String(d))}function ie(d){var w=d.c.length-1;return $(d.e/N)==w&&d.c[w]%2!=0}function te(d,w){return(d.length>1?d.charAt(0)+"."+d.slice(1):d)+(w<0?"e":"e+")+w}function Q(d,w,x){var v,p;if(w<0){for(p=x+".";++w;p+=x);d=p+d}else if(v=d.length,++w>v){for(p=x,w-=v;--w;p+=x);d+=p}else w<v&&(d=d.slice(0,w)+"."+d.slice(w));return d}var ee=Ee();self.addEventListener("message",d=>{const{data:w}=d,{task:x}=w;let v={};switch(x){case"initialise_exposures":v=me(w);break;case"process_fast_unstake_era":v=Oe(w);break}postMessage({task:x,...v})});const Oe=d=>{const{currentEra:w,exposures:x,task:v,where:p,who:B}=d;let A=!1;return x.every(({keys:_,val:R})=>_[1]===B||((R==null?void 0:R.others)??[]).find(G=>G.who===B)?(A=!0,!1):!0),{currentEra:w,exposed:A,task:v,where:p,who:B}},me=d=>{const{units:w,exposures:x,activeAccount:v}=d,p=[];let B=0;const A=[],_=[];return x.forEach(({keys:R,val:k})=>{const W=R[1];B++,p.push({address:W,...k});let L=(k==null?void 0:k.others)??[];if(L=L.sort((G,y)=>{const q=new ee(fe(G.value));return new ee(fe(y.value)).minus(q)}),L.length){for(const y of L){const q=new ee(fe(y.value)),b=_.findIndex(Z=>Z.who===y.who);b===-1?_.push({who:y.who,value:q}):_[b].value=new ee(_[b].value).plus(q).toString()}const G=L.find(y=>y.who===v);G!==void 0&&A.push({address:W,value:Ae(new ee(fe(G.value)),w).toString()})}}),{stakers:p,totalActiveNominators:_.length,activeAccountOwnStake:A,activeValidators:B,who:v}},Ae=(d,w)=>new ee(d.dividedBy(new ee(10).exponentiatedBy(w)).toFixed(w)),fe=d=>d.replace(/,/g,"")})();