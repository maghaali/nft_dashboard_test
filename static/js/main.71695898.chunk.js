(this["webpackJsonpnft-market-demo"]=this["webpackJsonpnft-market-demo"]||[]).push([[0],{208:function(e,t,c){},210:function(e,t,c){},211:function(e,t,c){},213:function(e,t,c){},238:function(e,t,c){},261:function(e,t,c){},263:function(e,t,c){},264:function(e,t,c){},265:function(e,t,c){},266:function(e,t,c){},389:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(12),o=c.n(i),s=(c(208),c(10)),l=c(7),r=c.n(l),d=c(25),u=c(3),j=(c(210),c(26)),b=c(5),m=(c(211),c(0)),h=function(e){var t=e.options,c=e.onChange,a=e.id;return Object(m.jsx)("select",{className:"select",onChange:c,children:t.map((function(e,t){return Object(m.jsx)("option",{selected:a==e.value?"selected":"",value:e.value,children:e.name},t)}))})},v=c(8),_=(c(213),c(393)),O={TEMPLATE:{collection_address:"0x5cc5b05a8a13e3fbdb0bb9fccd98d38e50f90c38",block_chain_id:"1",title:"Dashboard test",timeseries_chart:!0,banner_picture:"https://www.superflexfitness.com/wp-content/uploads/2017/03/3D-banner-background.jpg"},FILTER_OPTIONS:[{name:"Ethereum",value:1},{name:"Polygon",value:137},{name:"Avalanche",value:43114},{name:"Fantom",value:250},{name:"Moonbeam",value:1284},{name:"Moonriver",value:1285},{name:"Arbitrum",value:42161},{name:"Shiden",value:336}],GRAPH_OPTIONS:[{name:"7 Days",value:7},{name:"1 Month",value:30},{name:"3 Month",value:90},{name:"1 Year",value:365},{name:"All time",value:0}]},p=function(e){var t=e.data,c=e.onClick,n=e.color,i=(e.load,Object(a.useState)({key:"",direction:""})),o=Object(u.a)(i,2),s=o[0],l=o[1],r=Object(a.useState)(null),d=Object(u.a)(r,2),j=d[0],b=d[1],h=Object(a.useRef)();Object(a.useEffect)((function(){void 0!==h.current&&h.current.scrollIntoView({behavior:"smooth"})})),Object(a.useEffect)((function(){b(p())}),[s]);var p=function(){var e=Object(v.a)(t);return e.sort((function(e,t){return e[s.key]<t[s.key]?"ascending"===s.direction?-1:1:e[s.key]>t[s.key]?"ascending"===s.direction?1:-1:0})),e},f=function(e){var t="ascending";s.key===e&&"ascending"===s.direction&&(t="descending"),l({key:e,direction:t})},x=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return Object(m.jsxs)("table",{className:"table",children:[Object(m.jsxs)("tr",{className:"title-row",children:[Object(m.jsx)("th",{className:"collection-name",children:Object(m.jsxs)("div",{className:"tableHeader-collection",children:["Picture",Object(m.jsx)(_.a,{icon:"collection_name"===s.key&&"descending"===s.direction?"chevron-down":"collection_name"===s.key&&"ascending"===s.direction?"chevron-up":"expand-all",size:16,intent:"primary",color:"#FF4C8B",className:"icon",onClick:function(){f("collection_name")}})]})}),Object(m.jsx)("th",{className:"collection-name",children:Object(m.jsxs)("div",{className:"tableHeader-collection",children:["Collection",Object(m.jsx)(_.a,{icon:"collection_name"===s.key&&"descending"===s.direction?"chevron-down":"collection_name"===s.key&&"ascending"===s.direction?"chevron-up":"expand-all",size:16,intent:"primary",color:"#FF4C8B",className:"icon",onClick:function(){f("collection_name")}})]})}),Object(m.jsx)("th",{className:"align-right",children:Object(m.jsxs)("div",{className:"tableHeader",children:["Market Cap",Object(m.jsx)(_.a,{icon:"market_cap_quote"===s.key&&"descending"===s.direction?"chevron-down":"market_cap_quote"===s.key&&"ascending"===s.direction?"chevron-up":"expand-all",size:16,intent:"primary",color:"#FF4C8B",className:"icon",onClick:function(){f("market_cap_quote")}})]})}),Object(m.jsx)("th",{className:"align-right",children:Object(m.jsxs)("div",{className:"tableHeader",children:["24hr Volume",Object(m.jsx)(_.a,{icon:"volume_quote_24h"===s.key&&"descending"===s.direction?"chevron-down":"volume_quote_24h"===s.key&&"ascending"===s.direction?"chevron-up":"expand-all",size:16,intent:"primary",color:"#FF4C8B",className:"icon",onClick:function(){f("volume_quote_24h")}})]})}),Object(m.jsx)("th",{className:"align-right",children:Object(m.jsxs)("div",{className:"tableHeader",children:["24hr Avg Price",Object(m.jsx)(_.a,{icon:"avg_volume_quote_24h"===s.key&&"descending"===s.direction?"chevron-down":"avg_volume_quote_24h"===s.key&&"ascending"===s.direction?"chevron-up":"expand-all",size:16,intent:"primary",color:"#FF4C8B",className:"icon",onClick:function(){f("avg_volume_quote_24h")}})]})}),Object(m.jsx)("th",{className:"align-right",children:Object(m.jsxs)("div",{className:"tableHeader",children:["# Transaction",Object(m.jsx)(_.a,{icon:"transaction_count_alltime"===s.key&&"descending"===s.direction?"chevron-down":"transaction_count_alltime"===s.key&&"ascending"===s.direction?"chevron-up":"expand-all",size:16,intent:"primary",color:"#FF4C8B",className:"icon",onClick:function(){f("transaction_count_alltime")}})]})}),Object(m.jsx)("th",{className:"align-right",children:Object(m.jsxs)("div",{className:"tableHeader",children:["# Wallets",Object(m.jsx)(_.a,{icon:"unique_wallet_purchase_count_alltime"===s.key&&"descending"===s.direction?"chevron-down":"unique_wallet_purchase_count_alltime"===s.key&&"ascending"===s.direction?"chevron-up":"expand-all",size:16,intent:"primary",color:"#FF4C8B",className:"icon",onClick:function(){f("unique_wallet_purchase_count_alltime")}})]})})]}),j&&j.map((function(e,t){return""==e.collection_name&&console.log(),Object(m.jsx)(m.Fragment,{children:e.collection_address===O.TEMPLATE.collection_address?Object(m.jsxs)("tr",{ref:h,className:"active",style:{backgroundColor:n},onClick:function(){c(e.collection_address)},children:[Object(m.jsxs)("td",{className:"thumbnail-image",children:[" ",Object(m.jsx)("img",{src:e.first_nft_image_256?e.first_nft_image_256:"https://media-exp1.licdn.com/dms/image/C560BAQHZftuIJc5OMQ/company-logo_200_200/0/1616601285421?e=2147483647&v=beta&t=j6DJiJFHvVEFGFKU6rki6dFXYO4m3c43X0jKwe6H7_A",style:{height:50,width:50},alt:"No preview available"})]}),Object(m.jsx)("td",{className:"collection-name",style:{fontWeight:"600"},children:""!==e.collection_name?e.collection_name:e.collection_address}),Object(m.jsx)("td",{className:"table-data-active",children:e.market_cap_quote?x.format(e.market_cap_quote).split(".")[0]:0}),Object(m.jsx)("td",{className:"table-data-active",children:e.volume_quote_24h?x.format(e.volume_quote_24h).split(".")[0]:0}),Object(m.jsx)("td",{className:"table-data-active",children:e.avg_volume_quote_24h?x.format(e.avg_volume_quote_24h).split(".")[0]:0}),Object(m.jsx)("td",{className:"table-data-active",children:e.transaction_count_alltime?e.transaction_count_alltime.toLocaleString():0}),Object(m.jsx)("td",{className:"table-data-active",children:e.unique_wallet_purchase_count_alltime?e.unique_wallet_purchase_count_alltime.toLocaleString():0})]},t):Object(m.jsxs)("tr",{className:"data-row",onClick:function(){c(e.collection_address)},children:[Object(m.jsxs)("td",{className:"thumbnail-image",children:[" ",Object(m.jsx)("img",{src:e.first_nft_image_256?e.first_nft_image_256:"https://media-exp1.licdn.com/dms/image/C560BAQHZftuIJc5OMQ/company-logo_200_200/0/1616601285421?e=2147483647&v=beta&t=j6DJiJFHvVEFGFKU6rki6dFXYO4m3c43X0jKwe6H7_A",style:{height:50,width:50},alt:"No preview available"})]}),Object(m.jsx)("td",{className:"collection-name",style:{fontWeight:"600"},children:""!==e.collection_name?e.collection_name:e.collection_address}),Object(m.jsx)("td",{className:"table-data",children:e.market_cap_quote?x.format(e.market_cap_quote).split(".")[0]:0}),Object(m.jsx)("td",{className:"table-data",children:e.volume_quote_24h?x.format(e.volume_quote_24h).split(".")[0]:0}),Object(m.jsx)("td",{className:"table-data",children:e.avg_volume_quote_24h?x.format(e.avg_volume_quote_24h).split(".")[0]:0}),Object(m.jsx)("td",{className:"table-data",children:e.transaction_count_alltime?e.transaction_count_alltime.toLocaleString():0}),Object(m.jsx)("td",{className:"table-data",children:e.unique_wallet_purchase_count_alltime?e.unique_wallet_purchase_count_alltime.toLocaleString():0})]},t)})}))]})},f=(c(238),c.p+"static/media/Covalent-Background_5.cc7bc02b.jpg"),x=function(e){var t=e.head,c=e.subhead,a=e.img,n=e.color,i=Object(b.f)();return Object(m.jsx)("div",{className:"banner",style:{backgroundImage:"url(".concat(a||f,")")},children:Object(m.jsxs)("div",{className:"banner-section",onClick:function(){i.push("/")},children:[Object(m.jsx)("div",{className:"banner-logo"}),Object(m.jsxs)("div",{className:"banner-header",children:[Object(m.jsx)("h3",{style:{color:n?"white":"#FF4C8B"},children:c}),Object(m.jsxs)("div",{className:"banner-title",children:[Object(m.jsx)("h1",{children:t}),Object(m.jsx)("div",{className:"tag",style:{backgroundColor:n},children:"Beta"})]})]})]})})};x.defaultProps={head:"Head",subhead:"SubHead",img:f};var g=x,k=(c.p,c.p+"static/media/covalent-logo-loop_dark_v2.d4efb9c1.gif"),N=c(24),y=c.n(N),C=c(38);c(261);function E(e){var t=e.light,c=(e.dark,e.vibrant),n=Object(b.f)(),i=Object(a.useState)(O.TEMPLATE.block_chain_id),o=Object(u.a)(i,2),s=o[0],l=o[1],j=Object(a.useState)([]),v=Object(u.a)(j,2),f=v[0],x=v[1],N=Object(a.useState)(!0),E=Object(u.a)(N,2),T=E[0],w=E[1];Object({NODE_ENV:"production",PUBLIC_URL:"/nft_dashboard_test",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_COVALENT_API;Object(C.a)(y.a,{retries:3,retryDelay:function(e){return console.log("retry attempt: ".concat(e)),2e3*e},retryCondition:function(e){return 503===e.response.status}}),Object(a.useEffect)((function(){F(s)}),[s]);var F=function(){var e=Object(d.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,y.a.get("https://api.covalenthq.com/v1/".concat(t,"/nft_market/"),{auth:{username:"ckey_docs"}});case 4:c=e.sent,console.log(c.data.data.items),x(c.data.data.items),w(!1),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{img:""!==O.TEMPLATE.banner_picture?O.TEMPLATE.banner_picture:null,head:O.TEMPLATE.title,subhead:"Code Template",color:c}),Object(m.jsxs)("div",{className:"main",children:[Object(m.jsxs)("div",{className:"back",style:{color:t||"#FF4C8B"},onClick:function(){n.goBack()},children:[Object(m.jsx)(_.a,{icon:"chevron-left",size:24,intent:"primary",color:t||"#FF4C8B",className:"icon"}),"Back"]}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("div",{className:"select-chain",children:Object(m.jsx)(h,{options:O.FILTER_OPTIONS,onChange:function(e){l(e.target.value)},id:O.TEMPLATE.block_chain_id})}),T?Object(m.jsx)("div",{className:"load",children:Object(m.jsx)("img",{src:k})}):Object(m.jsx)(p,{onClick:function(e){e!==O.TEMPLATE.collection_address?n.push("/collection/".concat(e,"/").concat(s)):n.goBack()},data:f,load:T,color:c})]})]})]})}c.p,c(262);var T=c(140),w=(c(263),function(e){var t={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:"white",font:{size:14},margin:"20px"}}},scales:{A:{title:"USD",type:"linear",position:"left",ticks:{color:"#FF4C8B",callback:function(e,t,c){return parseInt(e)>=1e3?"$"+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):"$"+e}}},B:{type:"linear",position:"right",ticks:{color:"#00D8D5",max:1,min:0}},x:{ticks:{color:"white"}}}},c={datasets:[{label:"Floor Price Last 7 Days (USD) ",yAxisID:"A",data:e.quote,borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Floor Price Last 7 Days (Gas Token Price)",yAxisID:"B",data:e.wei,borderColor:"rgb(\t0\t,216,\t213)",backgroundColor:"rgba(\t0,\t216\t,213, 0.5)"}]};return Object(m.jsx)(T.a,{options:t,data:c})}),F=(c(264),c(87)),S=c.n(F);function A(e){var t,c,n,i,o,s,l,j,p,f,x,N,E=e.light,T=e.vibrant,F=(e.dark,Object(a.useState)([])),A=Object(u.a)(F,2),P=(A[0],A[1],Object(a.useState)([])),q=Object(u.a)(P,2),L=q[0],M=q[1],B=Object(a.useState)([]),D=Object(u.a)(B,2),H=D[0],I=D[1],z=Object(a.useState)(!0),R=Object(u.a)(z,2),U=R[0],V=R[1],Y=Object(a.useState)(!0),J=Object(u.a)(Y,2),K=J[0],G=J[1],W=Object(a.useState)([]),Q=Object(u.a)(W,2),X=Q[0],Z=Q[1],$=Object(a.useState)(!1),ee=Object(u.a)($,2),te=ee[0],ce=ee[1],ae=Object(b.f)(),ne=S()().format("YYYY-MM-DD"),ie=Object(b.g)(),oe=ie.address,se=ie.id,le=se||O.TEMPLATE.block_chain_id,re=oe||O.TEMPLATE.collection_address;Object(C.a)(y.a,{retries:3,retryDelay:function(e){return console.log("retry attempt: ".concat(e)),2e3*e},retryCondition:function(e){return 503===e.response.status}});var de=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});Object(a.useEffect)((function(){je()}),[]);var ue=function(){var e=Object(d.a)(r.a.mark((function e(t){var c,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(!0),ce(!1),M([]),I([]),c=S()().subtract(t,"days").format("YYYY-MM-DD"),a=t>0?"https://api.covalenthq.com/v1/".concat(le,"/nft_market/collection/").concat(re,"/?from=").concat(c,"&to=").concat(ne):"https://api.covalenthq.com/v1/".concat(le,"/nft_market/collection/").concat(re,"/?to=").concat(ne),e.prev=6,e.next=9,y.a.get(a,{auth:{username:"ckey_docs"}});case 9:n=e.sent,M(n.data.data.items.map((function(e){return{x:e.opening_date,y:e.floor_price_quote_7d}})).reverse()),I(n.data.data.items.map((function(e){return{x:e.opening_date,y:e.floor_price_wei_7d/Math.pow(10,18)}})).reverse()),ce(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(6),ce(!0);case 18:G(!1);case 19:case"end":return e.stop()}}),e,null,[[6,15]])})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=Object(d.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return[],e.prev=1,e.next=4,y.a.get("https://api.covalenthq.com/v1/".concat(le,"/nft_market/collection/").concat(re,"/"),{auth:{username:"ckey_docs"}});case 4:t=e.sent,Z(Object(v.a)(t.data.data.items)),""===O.TEMPLATE.title||oe||(O.TEMPLATE.title="".concat(""!==t.data.data.items[0].collection_name?t.data.data.items[0].collection_name:O.TEMPLATE.title," Dashboard")),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:O.TEMPLATE.timeseries_chart&&ue(7),V(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{img:""!==O.TEMPLATE.banner_picture?O.TEMPLATE.banner_picture:null,head:O.TEMPLATE.title,subhead:"Code Template",color:T}),Object(m.jsxs)("div",{className:"main",children:[oe?Object(m.jsxs)("div",{className:"back",style:{color:E||"#FF4C8B"},onClick:function(){ae.goBack()},children:[Object(m.jsx)(_.a,{icon:"chevron-left",size:24,intent:"primary",color:E||"#FF4C8B",className:"icon"}),"Back"]}):Object(m.jsxs)("div",{className:"global",style:{color:E||"#FF4C8B"},onClick:function(){ae.push("/global")},children:["Global View",Object(m.jsx)(_.a,{icon:"chevron-right",size:24,intent:"primary",color:E||"#FF4C8B",className:"icon"})]}),Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)("div",{className:"info",children:[Object(m.jsx)("div",{className:"image",children:U?Object(m.jsx)("img",{src:k}):Object(m.jsx)("img",{className:"collection-img",onError:function(e){e.target.classList.add("error-image"),e.target.classList.remove("collection-img")},src:null===(t=X[0])||void 0===t?void 0:t.first_nft_image_256,alt:"No preview available"})}),Object(m.jsx)("div",{className:"details",children:Object(m.jsxs)("div",{className:"title-cont",children:[Object(m.jsx)("h1",{style:{color:E},children:"Collection Address "}),Object(m.jsxs)("h3",{onClick:function(){1==le?window.open("https://etherscan.io/address/".concat(re),"_blank"):137==le?window.open("https://polygonscan.com/address/".concat(re),"_blank"):window.open("https://snowtrace.io/address/".concat(re),"_blank")},children:[re," ",Object(m.jsx)(_.a,{icon:"share",size:15,intent:"primary",color:E||"#FF4C8B",className:"share"})]}),Object(m.jsxs)("table",{className:"collection-table",children:[Object(m.jsxs)("tr",{className:"title-row",style:{color:E},children:[Object(m.jsx)("td",{children:"Ticker Symbol"}),Object(m.jsx)("td",{children:"24hr Volume"}),Object(m.jsx)("td",{children:"24hr Sold Count"})]}),Object(m.jsxs)("tr",{className:"data-row",children:[Object(m.jsx)("td",{children:(null===(c=X[0])||void 0===c?void 0:c.collection_ticker_symbol)?null===(n=X[0])||void 0===n?void 0:n.collection_ticker_symbol:0}),Object(m.jsxs)("td",{children:[" ",(null===(i=X[0])||void 0===i?void 0:i.volume_quote_day)?de.format(null===(o=X[0])||void 0===o?void 0:o.volume_quote_day).split(".")[0]:0]}),Object(m.jsx)("td",{children:(null===(s=X[0])||void 0===s?void 0:s.unique_token_ids_sold_count_day)?null===(l=X[0])||void 0===l?void 0:l.unique_token_ids_sold_count_day:0})]})]})]})})]})}),O.TEMPLATE.timeseries_chart&&Object(m.jsxs)("div",{className:"graph-cont",children:[K&&Object(m.jsx)("div",{className:"graph-loader",children:Object(m.jsx)("img",{src:k})}),te&&Object(m.jsx)("div",{className:"graph-err",children:"No data available between these dates"}),Object(m.jsxs)("div",{className:"graph-header",children:[Object(m.jsx)("h2",{children:"Floor Price "}),Object(m.jsx)(h,{options:O.GRAPH_OPTIONS,onChange:function(e){ue(e.target.value)}})]}),Object(m.jsx)("div",{className:"graph",children:Object(m.jsx)(w,{quote:L,wei:H})})]}),Object(m.jsxs)("div",{className:"bottom-section",children:[Object(m.jsx)("h1",{children:"NFT Preview (First 5)"}),U?Object(m.jsx)("div",{className:"collection-load",children:Object(m.jsx)("img",{src:k,alt:"No preview available"})}):Object(m.jsxs)("div",{className:"collection-display",children:[Object(m.jsx)("div",{className:"nft",onClick:function(){var e,t;ae.push("/nft/".concat(null===(e=X[0])||void 0===e?void 0:e.collection_address,"/").concat(null===(t=X[0])||void 0===t?void 0:t.first_nft_image_token_id,"/").concat(X[0].chain_id))},children:Object(m.jsx)("img",{src:null===(j=X[0])||void 0===j?void 0:j.first_nft_image_256,alt:"No preview available"})}),Object(m.jsx)("div",{className:"nft",onClick:function(){var e,t;ae.push("/nft/".concat(null===(e=X[0])||void 0===e?void 0:e.collection_address,"/").concat(null===(t=X[0])||void 0===t?void 0:t.second_nft_image_token_id,"/").concat(X[0].chain_id))},children:Object(m.jsx)("img",{src:null===(p=X[0])||void 0===p?void 0:p.second_nft_image_256,alt:"No preview available"})}),Object(m.jsx)("div",{className:"nft",onClick:function(){var e,t;ae.push("/nft/".concat(null===(e=X[0])||void 0===e?void 0:e.collection_address,"/").concat(null===(t=X[0])||void 0===t?void 0:t.third_nft_image_token_id,"/").concat(X[0].chain_id))},children:Object(m.jsx)("img",{src:null===(f=X[0])||void 0===f?void 0:f.third_nft_image_256,alt:"No preview available"})}),Object(m.jsx)("div",{className:"nft",onClick:function(){var e,t;ae.push("/nft/".concat(null===(e=X[0])||void 0===e?void 0:e.collection_address,"/").concat(null===(t=X[0])||void 0===t?void 0:t.fourth_nft_image_token_id,"/").concat(X[0].chain_id))},children:Object(m.jsx)("img",{src:null===(x=X[0])||void 0===x?void 0:x.fourth_nft_image_256,alt:"No preview available"})}),Object(m.jsx)("div",{className:"nft",onClick:function(){var e,t;ae.push("/nft/".concat(null===(e=X[0])||void 0===e?void 0:e.collection_address,"/").concat(null===(t=X[0])||void 0===t?void 0:t.fifth_nft_image_token_id,"/").concat(X[0].chain_id))},children:Object(m.jsx)("img",{src:null===(N=X[0])||void 0===N?void 0:N.fifth_nft_image_256,alt:"No preview available"})})]})]})]})]})})}c(265);var P=function(e){var t,c,a,n,i=e.data,o=e.color;return Object(m.jsxs)("div",{className:"nft-cont",children:[Object(m.jsx)("div",{className:"img-container",children:Object(m.jsx)("img",{onError:function(e){e.target.classList.add("error-image"),e.target.classList.remove("nft-img")},className:"nft-img",src:null===i||void 0===i||null===(t=i.external_data)||void 0===t?void 0:t.image})}),Object(m.jsxs)("div",{className:"nft-details",style:{backgroundColor:o},children:[Object(m.jsx)("h1",{children:null===i||void 0===i||null===(c=i.external_data)||void 0===c?void 0:c.name}),Object(m.jsxs)("h2",{children:["Token ID : ",null===i||void 0===i?void 0:i.token_id]}),Object(m.jsx)("p",{children:null===i||void 0===i||null===(a=i.external_data)||void 0===a?void 0:a.description}),Object(m.jsx)("table",{className:"nft-table",children:(null===i||void 0===i||null===(n=i.external_data)||void 0===n?void 0:n.attributes)?Object(m.jsx)(m.Fragment,{children:i.external_data.attributes.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsxs)("td",{children:[" ",e.trait_type," "]}),Object(m.jsxs)("td",{children:[" ",e.value," "]})]},t)}))}):null})]})]})};c(266);function q(e){var t=e.light,c=e.dark,n=e.vibrant,i=Object(b.g)(),o=i.address,s=i.id,l=i.chainId,j=Object(a.useState)({}),h=Object(u.a)(j,2),v=h[0],p=h[1],f=Object(a.useState)(!0),x=Object(u.a)(f,2),N=x[0],E=x[1],T=Object(b.f)();Object(C.a)(y.a,{retries:3,retryDelay:function(e){return console.log("retry attempt: ".concat(e)),2e3*e},retryCondition:function(e){return 503===e.response.status}}),Object(a.useEffect)((function(){w()}),[]);var w=function(){var e=Object(d.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://api.covalenthq.com/v1/".concat(l,"/tokens/").concat(o,"/nft_metadata/").concat(s,"/?quote-currency=USD&format=JSON"),{auth:{username:"ckey_docs"}});case 2:t=e.sent,p(null!==t.data.data.items[0].nft_data?t.data.data.items[0].nft_data[0]:{external_data:{image:""}}),E(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:N?Object(m.jsx)("div",{className:"load",children:Object(m.jsx)("img",{src:k})}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{img:""!==O.TEMPLATE.banner_picture?O.TEMPLATE.banner_picture:null,head:O.TEMPLATE.title,subhead:"Code Template",color:n}),Object(m.jsxs)("div",{className:"main",children:[Object(m.jsxs)("div",{className:"back",style:{color:t||"#FF4C8B"},onClick:function(){T.goBack()},children:[Object(m.jsx)(_.a,{icon:"chevron-left",size:24,intent:"primary",color:t||"#FF4C8B",className:"icon"}),"Back"]}),Object(m.jsx)(P,{data:v,color:c})]})]})})}var L=c.p+"static/media/logo.00ecc9d5.svg",M=c(139);c.p;var B=function(){Object(a.useEffect)((function(){""!==O.TEMPLATE.banner_picture&&y()}),[]);var e=Object(a.useState)(""),t=Object(u.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),o=Object(u.a)(i,2),l=o[0],h=o[1],v=Object(a.useState)(""),_=Object(u.a)(v,2),p=_[0],f=_[1],x=Object(a.useState)(""),g=Object(u.a)(x,2),k=g[0],N=g[1],y=function(){var e=Object(d.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.from(O.TEMPLATE.banner_picture).getPalette();case 2:return t=e.sent,console.log(t),n(t.DarkMuted.getHex()),f(t.LightVibrant.getHex()),h(t.Vibrant.getHex()),N(t.DarkVibrant.getHex()),e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"App",style:{backgroundColor:"".concat(c)},children:[Object(m.jsx)(j.a,{children:Object(m.jsx)(j.b,{basename:"/",children:Object(m.jsxs)(b.c,{children:[Object(m.jsx)(b.a,{path:"/nft/:address/:id/:chainId",render:function(e){return Object(m.jsx)(q,Object(s.a)(Object(s.a)({},e),{},{light:p,vibrant:l,dark:c}))}}),Object(m.jsx)(b.a,{path:"/collection/:address/:id",render:function(e){return Object(m.jsx)(A,Object(s.a)(Object(s.a)({},e),{},{light:p,vibrant:l,dark:k}))}}),Object(m.jsx)(b.a,{path:"/global",render:function(e){return Object(m.jsx)(E,Object(s.a)(Object(s.a)({},e),{},{light:p,vibrant:l,dark:k}))}}),Object(m.jsx)(b.a,{path:"/",render:function(e){return Object(m.jsx)(A,Object(s.a)(Object(s.a)({},e),{},{light:p,vibrant:l,dark:k}))}})]})})}),Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)("img",{src:L})})]})};o.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root"))}},[[389,1,2]]]);
//# sourceMappingURL=main.71695898.chunk.js.map