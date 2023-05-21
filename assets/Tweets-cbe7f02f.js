import{R as g,u as C,r as a,s as r,g as L,a as h,j as t,L as S,B as A,f as U,C as I,b as B,c as O}from"./index-47325a70.js";function y(e=g){const s=e===g?C:()=>a.useContext(e);return function(){const{store:n}=s();return n}}const Y=y();function N(e=g){const s=e===g?Y:y(e);return function(){return s().dispatch}}const F=N(),q=r.li`
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  & article {
    flex-basis: 100%;
    width: 100%;
    max-width: 380px;
    height: 460px;
    flex-basis: calc((100% - 60px) / 3);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,P=r.img`
  margin-top: 28px;
  margin-bottom: 18px;
`,D=r.div`
  position: relative;
  & img {
    position: absolute;
    top: 20px;
    right: 85px;
  }
`,Q=r.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 62px;
`,W=r.div`
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`,V=r.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  position: absolute;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`,G=r.img`
  width: 65px;
  height: 65px;
  position: absolute;
  border-radius: 50px;
  line-height: 0;
`,J=r.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  text-align: center;
  margin-bottom: 26px;
  & p {
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #ebd8ff;
  }
`,M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg==",Z="/tweets/assets/cardBackgroundImage-9f4b25d6.png",z=e=>e.users.users,R=e=>e.users.isLoading,H=e=>e.users.error;var T={exports:{}},X="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",K=X,_=K;function E(){}function k(){}k.resetWarningCache=E;var $=function(){function e(n,d,c,p,b,u){if(u!==_){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function s(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:s,element:e,elementType:e,instanceOf:s,node:e,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:k,resetWarningCache:E};return o.PropTypes=o,o};T.exports=$();var ee=T.exports;const m=L(ee),v=({user:e,followedUsers:s,handleClick:o})=>{var p;const n=h(R),d=new Intl.NumberFormat("en-US"),c=a.useRef(((p=location.state)==null?void 0:p.from)??"/");return t.jsx(q,{children:t.jsxs("article",{children:[t.jsx(D,{children:t.jsx(S,{to:c.current,children:t.jsx("img",{src:M,alt:"logo go-it",width:"76",height:"22"})})}),t.jsx(P,{src:Z,alt:"abstraction images",width:"308",height:"168"}),t.jsxs(Q,{children:[t.jsx(W,{}),t.jsx(V,{}),t.jsx(G,{src:e.avatar,alt:e.user,width:"65",height:"65"})]}),t.jsxs(J,{children:[t.jsxs("p",{children:[e.tweets," tweets"]}),t.jsxs("p",{children:[d.format(e.followers)," followers"]})]}),t.jsx(A,{type:"button",following:s.includes(e.id),onClick:()=>o(e.id),disabled:n,children:s.includes(e.id)?"following":"follow"})]})})};v.propTypes={user:m.object.isRequired,followedUsers:m.array.isRequired,handleClick:m.func.isRequired};const j=localStorage.getItem("followedUsers"),te=j?JSON.parse(j):[],se=()=>{var l;const e=F(),s=h(z),[o,n]=a.useState(te),d=a.useRef(((l=location.state)==null?void 0:l.from)??"/"),[c,p]=a.useState(1);a.useEffect(()=>{e(U(c))},[e,c]),a.useEffect(()=>{localStorage.setItem("followedUsers",JSON.stringify(o))},[o]);const b=async i=>{const w=o.includes(i),x={...s.find(f=>f.id===i)};x.followers=w?x.followers-1:x.followers+1,n(w?o.filter(f=>f!==i):[...o,i]),e(O(x))},u=()=>{p(c+1)};return t.jsxs(I,{children:[t.jsx(S,{to:d.current,children:t.jsx(A,{children:"Go back"})}),t.jsx(B,{children:s.map(i=>t.jsx(v,{user:i,followedUsers:o,handleClick:b},i.id))}),t.jsx("div",{children:t.jsx(A,{type:"button",onClick:u,disabled:s.length===12,children:"Load More"})})]})},ne=()=>{const e=h(R),s=h(H);return t.jsxs(t.Fragment,{children:[e&&!s&&t.jsx("b",{children:"Request in progress..."}),t.jsx(se,{})]})};export{ne as default};
