function Xr(Cr,sr,G){return G={path:sr,exports:{},require:function(ar,R){return re(ar,R??G.path)}},Cr(G,G.exports),G.exports}function re(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var br=Xr(function(Cr,sr){var G=function(ar){var R="b",O="w",N=-1,q="p",vr="n",X="b",mr="r",Tr="q",H="k",Ur="pnbrqkPNBRQK",cr="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",Qr=["1-0","0-1","1/2-1/2","*"],pr={b:[16,32,17,15],w:[-16,-32,-17,-15]},wr={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},Br=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],$r=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],Fr={p:0,n:1,b:2,r:3,q:4,k:5},Ir={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"},i={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},Mr=7,Wr=6,jr=1,Gr=0,p={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},$={w:[{square:p.a1,flag:i.QSIDE_CASTLE},{square:p.h1,flag:i.KSIDE_CASTLE}],b:[{square:p.a8,flag:i.QSIDE_CASTLE},{square:p.h8,flag:i.KSIDE_CASTLE}]},u=new Array(128),C={w:N,b:N},b=O,E={w:0,b:0},k=N,D=0,F=1,Q=[],P={},T={};typeof ar=="undefined"?rr(cr):rr(ar);function Rr(r){typeof r=="undefined"&&(r=!1),u=new Array(128),C={w:N,b:N},b=O,E={w:0,b:0},k=N,D=0,F=1,Q=[],r||(P={}),T={},fr(w())}function Pr(){for(var r=[],e={},n=function(t){t in T&&(e[t]=T[t])};Q.length>0;)r.push(M());for(n(w());r.length>0;)U(r.pop()),n(w());T=e}function Lr(){rr(cr)}function rr(r,e){typeof e=="undefined"&&(e=!1);var n=r.split(/\s+/),t=n[0],a=0;if(!Or(r).valid)return!1;Rr(e);for(var f=0;f<t.length;f++){var l=t.charAt(f);if(l==="/")a+=8;else if(Vr(l))a+=parseInt(l,10);else{var o=l<"a"?O:R;qr({type:l.toLowerCase(),color:o},L(a)),a++}}return b=n[1],n[2].indexOf("K")>-1&&(E.w|=i.KSIDE_CASTLE),n[2].indexOf("Q")>-1&&(E.w|=i.QSIDE_CASTLE),n[2].indexOf("k")>-1&&(E.b|=i.KSIDE_CASTLE),n[2].indexOf("q")>-1&&(E.b|=i.QSIDE_CASTLE),k=n[3]==="-"?N:p[n[3]],D=parseInt(n[4],10),F=parseInt(n[5],10),fr(w()),!0}function Or(r){var e={0:"No errors.",1:"FEN string must contain six space-delimited fields.",2:"6th field (move number) must be a positive integer.",3:"5th field (half move counter) must be a non-negative integer.",4:"4th field (en-passant square) is invalid.",5:"3rd field (castling availability) is invalid.",6:"2nd field (side to move) is invalid.",7:"1st field (piece positions) does not contain 8 '/'-delimited rows.",8:"1st field (piece positions) is invalid [consecutive numbers].",9:"1st field (piece positions) is invalid [invalid piece].",10:"1st field (piece positions) is invalid [row too large].",11:"Illegal en-passant square"},n=r.split(/\s+/);if(n.length!==6)return{valid:!1,error_number:1,error:e[1]};if(isNaN(n[5])||parseInt(n[5],10)<=0)return{valid:!1,error_number:2,error:e[2]};if(isNaN(n[4])||parseInt(n[4],10)<0)return{valid:!1,error_number:3,error:e[3]};if(!/^(-|[abcdefgh][36])$/.test(n[3]))return{valid:!1,error_number:4,error:e[4]};if(!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(n[2]))return{valid:!1,error_number:5,error:e[5]};if(!/^(w|b)$/.test(n[1]))return{valid:!1,error_number:6,error:e[6]};var t=n[0].split("/");if(t.length!==8)return{valid:!1,error_number:7,error:e[7]};for(var a=0;a<t.length;a++){for(var f=0,l=!1,o=0;o<t[a].length;o++)if(isNaN(t[a][o])){if(!/^[prnbqkPRNBQK]$/.test(t[a][o]))return{valid:!1,error_number:9,error:e[9]};f+=1,l=!1}else{if(l)return{valid:!1,error_number:8,error:e[8]};f+=parseInt(t[a][o],10),l=!0}if(f!==8)return{valid:!1,error_number:10,error:e[10]}}return n[3][1]=="3"&&n[1]=="w"||n[3][1]=="6"&&n[1]=="b"?{valid:!1,error_number:11,error:e[11]}:{valid:!0,error_number:0,error:e[0]}}function w(){for(var r=0,e="",n=p.a8;n<=p.h1;n++){if(u[n]==null)r++;else{r>0&&(e+=r,r=0);var t=u[n].color,a=u[n].type;e+=t===O?a.toUpperCase():a.toLowerCase()}n+1&136&&(r>0&&(e+=r),n!==p.h1&&(e+="/"),r=0,n+=8)}var f="";E[O]&i.KSIDE_CASTLE&&(f+="K"),E[O]&i.QSIDE_CASTLE&&(f+="Q"),E[R]&i.KSIDE_CASTLE&&(f+="k"),E[R]&i.QSIDE_CASTLE&&(f+="q"),f=f||"-";var l=k===N?"-":L(k);return[e,b,f,l,D,F].join(" ")}function hr(r){for(var e=0;e<r.length;e+=2)typeof r[e]=="string"&&typeof r[e+1]=="string"&&(P[r[e]]=r[e+1]);return P}function fr(r){if(Q.length>0)return;r!==cr?(P.SetUp="1",P.FEN=r):(delete P.SetUp,delete P.FEN)}function Nr(r){var e=u[p[r]];return e?{type:e.type,color:e.color}:null}function qr(r,e){if(!("type"in r&&"color"in r))return!1;if(Ur.indexOf(r.type.toLowerCase())===-1)return!1;if(!(e in p))return!1;var n=p[e];return r.type==H&&!(C[r.color]==N||C[r.color]==n)?!1:(u[n]={type:r.type,color:r.color},r.type===H&&(C[r.color]=n),fr(w()),!0)}function Hr(r){var e=Nr(r);return u[p[r]]=null,e&&e.type===H&&(C[e.color]=N),fr(w()),e}function kr(r,e,n,t,a){var f={color:b,from:e,to:n,flags:t,piece:r[e].type};return a&&(f.flags|=i.PROMOTION,f.promotion=a),r[n]?f.captured=r[n].type:t&i.EP_CAPTURE&&(f.captured=q),f}function x(r){function e(B,_,I,j,tr){if(B[I].type===q&&(W(j)===Gr||W(j)===Mr))for(var V=[Tr,mr,X,vr],z=0,ir=V.length;z<ir;z++)_.push(kr(B,I,j,tr,V[z]));else _.push(kr(B,I,j,tr))}var n=[],t=b,a=nr(t),f={b:jr,w:Wr},l=p.a8,o=p.h1,h=!1,s=typeof r!="undefined"&&"legal"in r?r.legal:!0,y=typeof r!="undefined"&&"piece"in r&&typeof r.piece=="string"?r.piece.toLowerCase():!0;if(typeof r!="undefined"&&"square"in r)if(r.square in p)l=o=p[r.square],h=!0;else return[];for(var v=l;v<=o;v++){if(v&136){v+=7;continue}var g=u[v];if(g==null||g.color!==t)continue;if(g.type===q&&(y===!0||y===q)){var c=v+pr[t][0];if(u[c]==null){e(u,n,v,c,i.NORMAL);var c=v+pr[t][1];f[t]===W(v)&&u[c]==null&&e(u,n,v,c,i.BIG_PAWN)}for(d=2;d<4;d++){var c=v+pr[t][d];if(c&136)continue;u[c]!=null&&u[c].color===a?e(u,n,v,c,i.CAPTURE):c===k&&e(u,n,v,k,i.EP_CAPTURE)}}else if(y===!0||y===g.type)for(var d=0,A=wr[g.type].length;d<A;d++)for(var K=wr[g.type][d],c=v;!(c+=K,c&136);){if(u[c]==null)e(u,n,v,c,i.NORMAL);else{if(u[c].color===t)break;e(u,n,v,c,i.CAPTURE);break}if(g.type==="n"||g.type==="k")break}}if((y===!0||y===H)&&(!h||o===C[t])){if(E[t]&i.KSIDE_CASTLE){var S=C[t],m=S+2;u[S+1]==null&&u[m]==null&&!Y(a,C[t])&&!Y(a,S+1)&&!Y(a,m)&&e(u,n,C[t],m,i.KSIDE_CASTLE)}if(E[t]&i.QSIDE_CASTLE){var S=C[t],m=S-2;u[S-1]==null&&u[S-2]==null&&u[S-3]==null&&!Y(a,C[t])&&!Y(a,S-1)&&!Y(a,m)&&e(u,n,C[t],m,i.QSIDE_CASTLE)}}if(!s)return n;for(var Z=[],v=0,A=n.length;v<A;v++)U(n[v]),_r(t)||Z.push(n[v]),M();return Z}function J(r,e){var n="";if(r.flags&i.KSIDE_CASTLE)n="O-O";else if(r.flags&i.QSIDE_CASTLE)n="O-O-O";else{if(r.piece!==q){var t=Zr(r,e);n+=r.piece.toUpperCase()+t}r.flags&(i.CAPTURE|i.EP_CAPTURE)&&(r.piece===q&&(n+=L(r.from)[0]),n+="x"),n+=L(r.to),r.flags&i.PROMOTION&&(n+="="+r.promotion.toUpperCase())}return U(r),ur()&&(dr()?n+="#":n+="+"),M(),n}function gr(r){return r.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}function Y(r,e){for(var n=p.a8;n<=p.h1;n++){if(n&136){n+=7;continue}if(u[n]==null||u[n].color!==r)continue;var t=u[n],a=n-e,f=a+119;if(Br[f]&1<<Fr[t.type]){if(t.type===q){if(a>0){if(t.color===O)return!0}else if(t.color===R)return!0;continue}if(t.type==="n"||t.type==="k")return!0;for(var l=$r[f],o=n+l,h=!1;o!==e;){if(u[o]!=null){h=!0;break}o+=l}if(!h)return!0}}return!1}function _r(r){return Y(nr(r),C[r])}function ur(){return _r(b)}function dr(){return ur()&&x().length===0}function Er(){return!ur()&&x().length===0}function yr(){for(var r={},e=[],n=0,t=0,a=p.a8;a<=p.h1;a++){if(t=(t+1)%2,a&136){a+=7;continue}var f=u[a];f&&(r[f.type]=f.type in r?r[f.type]+1:1,f.type===X&&e.push(t),n++)}if(n===2)return!0;if(n===3&&(r[X]===1||r[vr]===1))return!0;if(n===r[X]+2){for(var l=0,o=e.length,a=0;a<o;a++)l+=e[a];if(l===0||l===o)return!0}return!1}function Sr(){for(var r=[],e={},n=!1;;){var t=M();if(!t)break;r.push(t)}for(;;){var a=w().split(" ").slice(0,4).join(" ");if(e[a]=a in e?e[a]+1:1,e[a]>=3&&(n=!0),!r.length)break;U(r.pop())}return n}function Yr(r){Q.push({move:r,kings:{b:C.b,w:C.w},turn:b,castling:{b:E.b,w:E.w},ep_square:k,half_moves:D,move_number:F})}function U(r){var e=b,n=nr(e);if(Yr(r),u[r.to]=u[r.from],u[r.from]=null,r.flags&i.EP_CAPTURE&&(b===R?u[r.to-16]=null:u[r.to+16]=null),r.flags&i.PROMOTION&&(u[r.to]={type:r.promotion,color:e}),u[r.to].type===H){if(C[u[r.to].color]=r.to,r.flags&i.KSIDE_CASTLE){var t=r.to-1,a=r.to+1;u[t]=u[a],u[a]=null}else if(r.flags&i.QSIDE_CASTLE){var t=r.to+1,a=r.to-2;u[t]=u[a],u[a]=null}E[e]=""}if(E[e]){for(var f=0,l=$[e].length;f<l;f++)if(r.from===$[e][f].square&&E[e]&$[e][f].flag){E[e]^=$[e][f].flag;break}}if(E[n]){for(var f=0,l=$[n].length;f<l;f++)if(r.to===$[n][f].square&&E[n]&$[n][f].flag){E[n]^=$[n][f].flag;break}}r.flags&i.BIG_PAWN?b==="b"?k=r.to-16:k=r.to+16:k=N,r.piece===q||r.flags&(i.CAPTURE|i.EP_CAPTURE)?D=0:D++,b===R&&F++,b=nr(b)}function M(){var r=Q.pop();if(r==null)return null;var e=r.move;C=r.kings,b=r.turn,E=r.castling,k=r.ep_square,D=r.half_moves,F=r.move_number;var n=b,t=nr(b);if(u[e.from]=u[e.to],u[e.from].type=e.piece,u[e.to]=null,e.flags&i.CAPTURE)u[e.to]={type:e.captured,color:t};else if(e.flags&i.EP_CAPTURE){var a;n===R?a=e.to-16:a=e.to+16,u[a]={type:q,color:t}}if(e.flags&(i.KSIDE_CASTLE|i.QSIDE_CASTLE)){var f,l;e.flags&i.KSIDE_CASTLE?(f=e.to+1,l=e.to-1):e.flags&i.QSIDE_CASTLE&&(f=e.to-2,l=e.to+1),u[f]=u[l],u[l]=null}return e}function Zr(r,e){for(var n=r.from,t=r.to,a=r.piece,f=0,l=0,o=0,h=0,s=e.length;h<s;h++){var y=e[h].from,v=e[h].to,g=e[h].piece;a===g&&n!==y&&t===v&&(f++,W(n)===W(y)&&l++,er(n)===er(y)&&o++)}return f>0?l>0&&o>0?L(n):o>0?L(n).charAt(1):L(n).charAt(0):""}function zr(r){var e=r.charAt(0);if(e>="a"&&e<="h"){var n=r.match(/[a-h]\d.*[a-h]\d/);return n?void 0:q}return e=e.toLowerCase(),e==="o"?H:e}function Jr(){for(var r=`   +------------------------+
`,e=p.a8;e<=p.h1;e++){if(er(e)===0&&(r+=" "+"87654321"[W(e)]+" |"),u[e]==null)r+=" . ";else{var n=u[e].type,t=u[e].color,a=t===O?n.toUpperCase():n.toLowerCase();r+=" "+a+" "}e+1&136&&(r+=`|
`,e+=8)}return r+=`   +------------------------+
`,r+=`     a  b  c  d  e  f  g  h
`,r}function Ar(r,e){var n=gr(r);if(e){var t=n.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);if(t)var a=t[1],f=t[2],l=t[3],o=t[4]}var h=zr(n),s=null,y=x({legal:!0,piece:a||h});if(s=y,e){var v=x({legal:!1,piece:a||h});s=v}for(var g=0,c=s.length;g<c;g++){if(n===gr(J(s[g],y))||e&&n===gr(J(s[g],v)))return s[g];if(t&&(!a||a.toLowerCase()==s[g].piece)&&p[f]==s[g].from&&p[l]==s[g].to&&(!o||o.toLowerCase()==s[g].promotion))return s[g]}return null}function W(r){return r>>4}function er(r){return r&15}function L(r){var e=er(r),n=W(r);return"abcdefgh".substring(e,e+1)+"87654321".substring(n,n+1)}function nr(r){return r===O?R:O}function Vr(r){return"0123456789".indexOf(r)!==-1}function lr(r){var e=xr(r);e.san=J(e,x({legal:!0})),e.to=L(e.to),e.from=L(e.from);var n="";for(var t in i)i[t]&e.flags&&(n+=Ir[t]);return e.flags=n,e}function xr(r){var e=r instanceof Array?[]:{};for(var n in r)typeof n=="object"?e[n]=xr(r[n]):e[n]=r[n];return e}function Kr(r){return r.replace(/^\s+|\s+$/g,"")}function Dr(r){for(var e=x({legal:!1}),n=0,t=b,a=0,f=e.length;a<f;a++){if(U(e[a]),!_r(t))if(r-1>0){var l=Dr(r-1);n+=l}else n++;M()}return n}return{WHITE:O,BLACK:R,PAWN:q,KNIGHT:vr,BISHOP:X,ROOK:mr,QUEEN:Tr,KING:H,SQUARES:function(){for(var r=[],e=p.a8;e<=p.h1;e++){if(e&136){e+=7;continue}r.push(L(e))}return r}(),FLAGS:Ir,load:function(r){return rr(r)},reset:function(){return Lr()},moves:function(r){for(var e=x(r),n=[],t=0,a=e.length;t<a;t++)typeof r!="undefined"&&"verbose"in r&&r.verbose?n.push(lr(e[t])):n.push(J(e[t],x({legal:!0})));return n},in_check:function(){return ur()},in_checkmate:function(){return dr()},in_stalemate:function(){return Er()},in_draw:function(){return D>=100||Er()||yr()||Sr()},insufficient_material:function(){return yr()},in_threefold_repetition:function(){return Sr()},game_over:function(){return D>=100||dr()||Er()||yr()||Sr()},validate_fen:function(r){return Or(r)},fen:function(){return w()},board:function(){for(var r=[],e=[],n=p.a8;n<=p.h1;n++)u[n]==null?e.push(null):e.push({type:u[n].type,color:u[n].color}),n+1&136&&(r.push(e),e=[],n+=8);return r},pgn:function(r){var e=typeof r=="object"&&typeof r.newline_char=="string"?r.newline_char:`
`,n=typeof r=="object"&&typeof r.max_width=="number"?r.max_width:0,t=[],a=!1;for(var f in P)t.push("["+f+' "'+P[f]+'"]'+e),a=!0;a&&Q.length&&t.push(e);for(var l=function(d){var A=T[w()];if(typeof A!="undefined"){var K=d.length>0?" ":"";d=`${d}${K}{${A}}`}return d},o=[];Q.length>0;)o.push(M());var h=[],s="";for(o.length===0&&h.push(l(""));o.length>0;){s=l(s);var y=o.pop();!Q.length&&y.color==="b"?s=F+". ...":y.color==="w"&&(s.length&&h.push(s),s=F+"."),s=s+" "+J(y,x({legal:!1})),U(y)}if(s.length&&h.push(l(s)),typeof P.Result!="undefined"&&h.push(P.Result),n===0)return t.join("")+h.join(" ");for(var v=function(){return t.length>0&&t[t.length-1]===" "?(t.pop(),!0):!1},g=function(d,A){for(var K of A.split(" ")){if(!K)continue;if(d+K.length>n){for(;v();)d--;t.push(e),d=0}t.push(K),d+=K.length,t.push(" "),d++}return v()&&d--,d},c=0,f=0;f<h.length;f++){if(c+h[f].length>n&&h[f].includes("{")){c=g(c,h[f]);continue}c+h[f].length>n&&f!==0?(t[t.length-1]===" "&&t.pop(),t.push(e),c=0):f!==0&&(t.push(" "),c++),t.push(h[f]),c+=h[f].length}return t.join("")},load_pgn:function(r,e){var n=typeof e!="undefined"&&"sloppy"in e?e.sloppy:!1;function t(_){return _.replace(/\\/g,"\\")}function a(_){for(var I in _)return!0;return!1}function f(_,I){for(var j=typeof I=="object"&&typeof I.newline_char=="string"?I.newline_char:`\r?
`,tr={},V=_.split(new RegExp(t(j))),z="",ir="",or=0;or<V.length;or++)z=V[or].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/,"$1"),ir=V[or].replace(/^\[[A-Za-z]+\s"(.*)"\ *\]$/,"$1"),Kr(z).length>0&&(tr[z]=ir);return tr}var l=typeof e=="object"&&typeof e.newline_char=="string"?e.newline_char:`\r?
`,o=new RegExp("^(\\[((?:"+t(l)+")|.)*\\])(?:"+t(l)+"){2}"),h=o.test(r)?o.exec(r)[1]:"";Lr();var s=f(h,e);for(var y in s)hr([y,s[y]]);if(s.SetUp==="1"&&!("FEN"in s&&rr(s.FEN,!0)))return!1;for(var v=function(_){return Array.from(_).map(function(I){return I.charCodeAt(0)<128?I.charCodeAt(0).toString(16):encodeURIComponent(I).replace(/\%/g,"").toLowerCase()}).join("")},g=function(_){return _.length==0?"":decodeURIComponent("%"+_.match(/.{1,2}/g).join("%"))},c=function(_){return _=_.replace(new RegExp(t(l),"g")," "),`{${v(_.slice(1,_.length-1))}}`},d=function(_){if(_.startsWith("{")&&_.endsWith("}"))return g(_.slice(1,_.length-1))},A=r.replace(h,"").replace(new RegExp(`({[^}]*})+?|;([^${t(l)}]*)`,"g"),function(_,I,j){return I!==void 0?c(I):" "+c(`{${j.slice(1)}}`)}).replace(new RegExp(t(l),"g")," "),K=/(\([^\(\)]+\))+?/g;K.test(A);)A=A.replace(K,"");A=A.replace(/\d+\.(\.\.)?/g,""),A=A.replace(/\.\.\./g,""),A=A.replace(/\$\d+/g,"");var S=Kr(A).split(new RegExp(/\s+/));S=S.join(",").replace(/,,+/g,",").split(",");for(var m="",Z=0;Z<S.length-1;Z++){var B=d(S[Z]);if(B!==void 0){T[w()]=B;continue}if(m=Ar(S[Z],n),m==null)return!1;U(m)}if(B=d(S[S.length-1]),B!==void 0&&(T[w()]=B,S.pop()),m=S[S.length-1],Qr.indexOf(m)>-1)a(P)&&typeof P.Result=="undefined"&&hr(["Result",m]);else{if(m=Ar(m,n),m==null)return!1;U(m)}return!0},header:function(){return hr(arguments)},ascii:function(){return Jr()},turn:function(){return b},move:function(r,e){var n=typeof e!="undefined"&&"sloppy"in e?e.sloppy:!1,t=null;if(typeof r=="string")t=Ar(r,n);else if(typeof r=="object"){for(var a=x(),f=0,l=a.length;f<l;f++)if(r.from===L(a[f].from)&&r.to===L(a[f].to)&&(!("promotion"in a[f])||r.promotion===a[f].promotion)){t=a[f];break}}if(!t)return null;var o=lr(t);return U(t),o},undo:function(){var r=M();return r?lr(r):null},clear:function(){return Rr()},put:function(r,e){return qr(r,e)},get:function(r){return Nr(r)},remove:function(r){return Hr(r)},perft:function(r){return Dr(r)},square_color:function(r){if(r in p){var e=p[r];return(W(e)+er(e))%2===0?"light":"dark"}return null},history:function(r){for(var e=[],n=[],t=typeof r!="undefined"&&("verbose"in r)&&r.verbose;Q.length>0;)e.push(M());for(;e.length>0;){var a=e.pop();t?n.push(lr(a)):n.push(J(a,x({legal:!0}))),U(a)}return n},get_comment:function(){return T[w()]},set_comment:function(r){T[w()]=r.replace("{","[").replace("}","]")},delete_comment:function(){var r=T[w()];return delete T[w()],r},get_comments:function(){return Pr(),Object.keys(T).map(function(r){return{fen:r,comment:T[r]}})},delete_comments:function(){return Pr(),Object.keys(T).map(function(r){var e=T[r];return delete T[r],{fen:r,comment:e}})}}};sr.Chess=G}),ee=br.Chess;export default br;export{ee as Chess,br as __moduleExports};
