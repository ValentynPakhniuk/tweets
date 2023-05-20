import{R as x,u as R,r as a,s as r,P as u,a as d,j as e,L as m,B as w,C as k,b as L,c as U,f as B,W as C}from"./index-dcb63553.js";function b(s=x){const o=s===x?R:()=>a.useContext(s);return function(){const{store:n}=o();return n}}const I=b();function Y(s=x){const o=s===x?I:b(s);return function(){return o().dispatch}}const j=Y(),v=r.li`
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
`,T=r.img`
  margin-top: 28px;
  margin-bottom: 18px;
`,q=r.div`
  position: relative;
  & img {
    position: absolute;
    top: 20px;
    right: 85px;
  }
`,N=r.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 62px;
`,Q=r.div`
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`,F=r.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  position: absolute;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`,y=r.img`
  width: 65px;
  height: 65px;
  position: absolute;
  border-radius: 50px;
  line-height: 0;
`,D=r.div`
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
`,O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg==",W="/tweets/assets/cardBackgroundImage-9f4b25d6.png",V=s=>s.users.users,S=s=>s.users.isLoading,G=s=>s.users.error,E=({user:s,followedUsers:o,handleClick:t})=>{var c;const n=d(S),p=new Intl.NumberFormat("en-US"),g=a.useRef(((c=location.state)==null?void 0:c.from)??"/");return e.jsx(v,{children:e.jsxs("article",{children:[e.jsx(q,{children:e.jsx(m,{to:g.current,children:e.jsx("img",{src:O,alt:"logo go-it",width:"76",height:"22"})})}),e.jsx(T,{src:W,alt:"abstraction images",width:"308",height:"168"}),e.jsxs(N,{children:[e.jsx(Q,{}),e.jsx(F,{}),e.jsx(y,{src:s.avatar,alt:s.user,width:"65",height:"65"})]}),e.jsxs(D,{children:[e.jsxs("p",{children:[s.tweets," tweets"]}),e.jsxs("p",{children:[p.format(s.followers)," followers"]})]}),e.jsx(w,{type:"button",following:o.includes(s.id),onClick:()=>t(s.id),disabled:n,children:o.includes(s.id)?"following":"follow"})]})})};E.propTypes={user:u.object.isRequired,followedUsers:u.array.isRequired,handleClick:u.func.isRequired};const A=localStorage.getItem("followedUsers"),J=A?JSON.parse(A):[],Z=()=>{var c;const s=j(),o=d(V),[t,n]=a.useState(J),p=a.useRef(((c=location.state)==null?void 0:c.from)??"/");a.useEffect(()=>{localStorage.setItem("followedUsers",JSON.stringify(t))},[t]);const g=async i=>{const f=t.includes(i),l={...o.find(h=>h.id===i)};l.followers=f?l.followers-1:l.followers+1,n(f?t.filter(h=>h!==i):[...t,i]),s(U(l))};return e.jsxs(k,{children:[e.jsx(m,{to:p.current,children:e.jsx(w,{children:"Go back"})}),e.jsx(L,{children:o.map(i=>e.jsx(E,{user:i,followedUsers:t,handleClick:g},i.id))})]})},M=()=>{const s=j(),o=d(S),t=d(G);return a.useEffect(()=>{s(B())},[s]),e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsx("title",{children:"Users tweets"})}),o&&!t&&e.jsx("b",{children:"Request in progress..."}),e.jsx(Z,{})]})};export{M as default};
