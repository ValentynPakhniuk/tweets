import{R as x,u as C,r as i,s as r,P as f,a as p,j as t,L as j,f as U,n as b,b as B,W as I}from"./index-f1cc2767.js";import{C as v,a as Y,B as T,P as q}from"./UsersList.styled-72c7f644.js";function S(e=x){const s=e===x?C:()=>i.useContext(e);return function(){const{store:a}=s();return a}}const y=S();function N(e=x){const s=e===x?y:S(e);return function(){return s().dispatch}}const Q=N(),m=r.button`
  color: #373737;
  background: #ebd8ff;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  width: 196px;
  text-align: center;
  align-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  padding-top: 14px;
  padding-bottom: 14px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background: #5cd3a8;
  }

  ${({following:e})=>e&&`
    background: #5cd3a8;
  `}
`,F=r.li`
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
`,P=r.div`
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
`,z=r.div`
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
`,J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg==",M="/tweets/assets/cardBackgroundImage-9f4b25d6.png",Z=e=>e.users.users,k=e=>e.users.isLoading,H=e=>e.users.error,E=({user:e,followedUsers:s,handleClick:o})=>{var l;const a=p(k),g=new Intl.NumberFormat("en-US"),c=i.useRef(((l=location.state)==null?void 0:l.from)??"/");return t.jsx(F,{children:t.jsxs("article",{children:[t.jsx(O,{children:t.jsx(j,{to:c.current,children:t.jsx("img",{src:J,alt:"logo go-it",width:"76",height:"22"})})}),t.jsx(D,{src:M,alt:"abstraction images",width:"308",height:"168"}),t.jsxs(W,{children:[t.jsx(V,{}),t.jsx(P,{}),t.jsx(G,{src:e.avatar,alt:e.user,width:"65",height:"65"})]}),t.jsxs(z,{children:[t.jsxs("p",{children:[e.tweets," tweets"]}),t.jsxs("p",{children:[g.format(e.followers)," followers"]})]}),t.jsx(m,{type:"button",following:s.includes(e.id),onClick:()=>o(e.id),disabled:a,children:s.includes(e.id)?"following":"follow"})]})})};E.propTypes={user:f.object.isRequired,followedUsers:f.array.isRequired,handleClick:f.func.isRequired};const w=localStorage.getItem("followedUsers"),X=w?JSON.parse(w):[],K=()=>{var A;const e=Q(),s=p(Z),[o,a]=i.useState(X),g=i.useRef(((A=location.state)==null?void 0:A.from)??"/"),[c,l]=i.useState(1);i.useEffect(()=>{e(U(c))},[e,c]),i.useEffect(()=>{localStorage.setItem("followedUsers",JSON.stringify(o))},[o]);const L=async n=>{const u=o.includes(n),d={...s.find(h=>h.id===n)};d.followers=u?d.followers-1:d.followers+1,u?b.success("successfully deleted."):b.success("successfully added."),a(u?o.filter(h=>h!==n):[...o,n]),e(B(d))},R=()=>{l(c+1)};return t.jsxs(v,{children:[t.jsx(Y,{children:s.map(n=>t.jsx(E,{user:n,followedUsers:o,handleClick:L},n.id))}),t.jsxs(T,{children:[t.jsx(j,{to:g.current,children:t.jsx(m,{children:"Go back"})}),s.length>0&&t.jsx(m,{type:"button",onClick:R,disabled:s.length===12,children:"Load More"})]})]})},te=()=>{const e=p(k),s=p(H);return t.jsxs(t.Fragment,{children:[t.jsx(I,{children:t.jsx("title",{children:"Users tweets"})}),e&&!s&&t.jsx(q,{children:"Request in progress..."}),t.jsx(K,{})]})};export{te as default};
