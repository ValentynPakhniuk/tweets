import{R as x,u as C,r as n,s as r,P as f,a as p,j as e,L as j,B as A,f as U,C as B,b as I,c as Y,n as w,d as v,W as T,e as q}from"./index-aea12799.js";function S(s=x){const t=s===x?C:()=>n.useContext(s);return function(){const{store:a}=t();return a}}const y=S();function N(s=x){const t=s===x?y:S(s);return function(){return t().dispatch}}const Q=N(),F=r.li`
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
`,D=r.img`
  margin-top: 28px;
  margin-bottom: 18px;
`,O=r.div`
  position: relative;
  & img {
    position: absolute;
    top: 20px;
    right: 85px;
  }
`,W=r.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 62px;
`,V=r.div`
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`,G=r.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  position: absolute;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`,P=r.img`
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
`,M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg==",Z="/tweets/assets/cardBackgroundImage-9f4b25d6.png",z=s=>s.users.users,k=s=>s.users.isLoading,H=s=>s.users.error,E=({user:s,followedUsers:t,handleClick:o})=>{var l;const a=p(k),g=new Intl.NumberFormat("en-US"),c=n.useRef(((l=location.state)==null?void 0:l.from)??"/");return e.jsx(F,{children:e.jsxs("article",{children:[e.jsx(O,{children:e.jsx(j,{to:c.current,children:e.jsx("img",{src:M,alt:"logo go-it",width:"76",height:"22"})})}),e.jsx(D,{src:Z,alt:"abstraction images",width:"308",height:"168"}),e.jsxs(W,{children:[e.jsx(V,{}),e.jsx(G,{}),e.jsx(P,{src:s.avatar,alt:s.user,width:"65",height:"65"})]}),e.jsxs(J,{children:[e.jsxs("p",{children:[s.tweets," tweets"]}),e.jsxs("p",{children:[g.format(s.followers)," followers"]})]}),e.jsx(A,{type:"button",following:t.includes(s.id),onClick:()=>o(s.id),disabled:a,children:t.includes(s.id)?"following":"follow"})]})})};E.propTypes={user:f.object.isRequired,followedUsers:f.array.isRequired,handleClick:f.func.isRequired};const b=localStorage.getItem("followedUsers"),X=b?JSON.parse(b):[],K=()=>{var m;const s=Q(),t=p(z),[o,a]=n.useState(X),g=n.useRef(((m=location.state)==null?void 0:m.from)??"/"),[c,l]=n.useState(1);n.useEffect(()=>{s(U(c))},[s,c]),n.useEffect(()=>{localStorage.setItem("followedUsers",JSON.stringify(o))},[o]);const L=async i=>{const u=o.includes(i),d={...t.find(h=>h.id===i)};d.followers=u?d.followers-1:d.followers+1,u?w.success("successfully deleted."):w.success("successfully added."),a(u?o.filter(h=>h!==i):[...o,i]),s(v(d))},R=()=>{l(c+1)};return e.jsxs(B,{children:[e.jsx(I,{children:t.map(i=>e.jsx(E,{user:i,followedUsers:o,handleClick:L},i.id))}),e.jsxs(Y,{children:[e.jsx(j,{to:g.current,children:e.jsx(A,{children:"Go back"})}),t.length>0&&e.jsx(A,{type:"button",onClick:R,disabled:t.length===12,children:"Load More"})]})]})},ee=()=>{const s=p(k),t=p(H);return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx("title",{children:"Users tweets"})}),s&&!t&&e.jsx(q,{children:"Request in progress..."}),e.jsx(K,{})]})};export{ee as default};
