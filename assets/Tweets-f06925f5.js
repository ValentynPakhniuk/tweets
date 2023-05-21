import{R as x,u as R,r as n,s as r,P as u,a as p,j as e,L as w,B as f,f as C,C as U,b as B,c as I,W as Y}from"./index-4a250ee4.js";function j(s=x){const t=s===x?R:()=>n.useContext(s);return function(){const{store:a}=t();return a}}const v=j();function T(s=x){const t=s===x?v:j(s);return function(){return t().dispatch}}const q=T(),N=r.li`
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
`,Q=r.img`
  margin-top: 28px;
  margin-bottom: 18px;
`,y=r.div`
  position: relative;
  & img {
    position: absolute;
    top: 20px;
    right: 85px;
  }
`,F=r.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 62px;
`,D=r.div`
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`,O=r.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  position: absolute;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`,W=r.img`
  width: 65px;
  height: 65px;
  position: absolute;
  border-radius: 50px;
  line-height: 0;
`,V=r.div`
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
`,G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg==",J="/tweets/assets/cardBackgroundImage-9f4b25d6.png",M=s=>s.users.users,S=s=>s.users.isLoading,P=s=>s.users.error,k=({user:s,followedUsers:t,handleClick:o})=>{var l;const a=p(S),g=new Intl.NumberFormat("en-US"),c=n.useRef(((l=location.state)==null?void 0:l.from)??"/");return e.jsx(N,{children:e.jsxs("article",{children:[e.jsx(y,{children:e.jsx(w,{to:c.current,children:e.jsx("img",{src:G,alt:"logo go-it",width:"76",height:"22"})})}),e.jsx(Q,{src:J,alt:"abstraction images",width:"308",height:"168"}),e.jsxs(F,{children:[e.jsx(D,{}),e.jsx(O,{}),e.jsx(W,{src:s.avatar,alt:s.user,width:"65",height:"65"})]}),e.jsxs(V,{children:[e.jsxs("p",{children:[s.tweets," tweets"]}),e.jsxs("p",{children:[g.format(s.followers)," followers"]})]}),e.jsx(f,{type:"button",following:t.includes(s.id),onClick:()=>o(s.id),disabled:a,children:t.includes(s.id)?"following":"follow"})]})})};k.propTypes={user:u.object.isRequired,followedUsers:u.array.isRequired,handleClick:u.func.isRequired};const b=localStorage.getItem("followedUsers"),Z=b?JSON.parse(b):[],z=()=>{var A;const s=q(),t=p(M),[o,a]=n.useState(Z),g=n.useRef(((A=location.state)==null?void 0:A.from)??"/"),[c,l]=n.useState(1);n.useEffect(()=>{s(C(c))},[s,c]),n.useEffect(()=>{localStorage.setItem("followedUsers",JSON.stringify(o))},[o]);const E=async i=>{const m=o.includes(i),d={...t.find(h=>h.id===i)};d.followers=m?d.followers-1:d.followers+1,a(m?o.filter(h=>h!==i):[...o,i]),s(I(d))},L=()=>{l(c+1)};return e.jsxs(U,{children:[e.jsx(w,{to:g.current,children:e.jsx(f,{children:"Go back"})}),e.jsx(B,{children:t.map(i=>e.jsx(k,{user:i,followedUsers:o,handleClick:E},i.id))}),e.jsx("div",{children:e.jsx(f,{type:"button",onClick:L,disabled:t.length===12,children:"Load More"})})]})},K=()=>{const s=p(S),t=p(P);return e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:e.jsx("title",{children:"Users tweets"})}),s&&!t&&e.jsx("b",{children:"Request in progress..."}),e.jsx(z,{})]})};export{K as default};
