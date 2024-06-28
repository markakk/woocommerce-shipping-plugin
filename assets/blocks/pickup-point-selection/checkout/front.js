(()=>{"use strict";const e=window.wc.blocksCheckout,t=window.React,a=window.wp.element,i=window.wp.data,o=window.wp.components,p=window.wp.i18n,n=wcSettings["posti-blocks_data"].txt,s=((0,p.__)("Block options","woo-pakettikauppa"),(0,p.__)("Pickup point","woo-pakettikauppa"),(0,p.__)("Select a pickup point","woo-pakettikauppa"),(0,p.__)("Other","woo-pakettikauppa"),(0,p.__)("Please choose a pickup point","woo-pakettikauppa"),(0,p.__)("No pickup points were found. Check the address.","woo-pakettikauppa"),(0,p.__)("You can choose the pickup point on the Checkout page","woo-pakettikauppa"),(0,p.__)("Choose one of pickup points close to the address you entered","woo-pakettikauppa"),(0,p.__)("Custom pickup address","woo-pakettikauppa"),(0,p.__)("If none of your preferred pickup points are listed, fill in a custom address above and select another pickup point","woo-pakettikauppa"),(0,p.__)("After entering, please wait for a while for the results to be received","woo-pakettikauppa"),(0,p.__)("The value is too short","woo-pakettikauppa"),(0,p.__)("Invalid character entered","woo-pakettikauppa"),(0,p.__)("The selection of pickup points has been changed based on the address %s","woo-pakettikauppa"),(e,t=!0)=>{if(!e.length)return null;let a=[];for(let t=0;t<e.length;t++)e[t].destination&&a.push(e[t].destination);return a.length?t?a[0]:a:null}),c=()=>wcSettings&&wcSettings["posti-blocks_data"]?wcSettings["posti-blocks_data"]:[],l=e=>!/[`!@#$%^*_+=\[\]{};:|<>\/?~]/.test(e),u=JSON.parse('{"apiVersion":2,"name":"pakettikauppa/pickup-point-selection-checkout","version":"1.0.0","title":"Pakettikauppa pickup point selection","category":"woocommerce","description":"Allow to add components for Pakettikauppa shipping method on Checkout page","parent":["woocommerce/checkout-shipping-methods-block"],"supports":{"html":false,"align":false,"multiple":false,"reusable":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}},"text":{"type":"string","default":""}},"textdomain":"woo-pakettikauppa"}');(0,e.registerCheckoutBlock)({metadata:u,component:({checkoutExtensionData:e,extension:p})=>{const{setExtensionData:u}=e,[r,k]=(0,a.useState)([]),[d,_]=(0,a.useState)({rate:{}}),[h,m]=(0,a.useState)({main:!1,custom:!1}),[f,g]=(0,a.useState)([]),w="pakettikauppa_pickup_point",[E,b]=(0,a.useState)(""),v=((e,t)=>{const[i,o]=(0,a.useState)(e);return(0,a.useEffect)((()=>{const t=setTimeout((()=>{o(e)}),2e3);return()=>{clearTimeout(t)}}),[e,2e3]),i})(E),[S,y]=(0,a.useState)(""),[C,x]=(0,a.useState)(""),{setValidationErrors:N,clearValidationError:P}=(0,i.useDispatch)("wc/store/validation"),j=(0,i.useSelect)((e=>e("wc/store/validation").getValidationError(w))),F=(0,i.useSelect)((e=>e("wc/store/cart").getCartData().shippingRates));function O(){m({main:!1,custom:!1})}return(0,a.useEffect)((()=>{F.length&&k((e=>{if(!e.length)return[];let t=[];for(let a=0;a<e.length;a++)if(e[a].shipping_rates)for(let i=0;i<e[a].shipping_rates.length;i++)e[a].shipping_rates[i].rate_id&&t.push(e[a].shipping_rates[i]);return t})(F))}),[F]),(0,a.useEffect)((()=>{if(r.length)for(let e=0;e<r.length;e++)if(r[e].selected){_({...d,rate:{id:r[e].rate_id,method:r[e].method_id,instance:r[e].instance_id},destination:s(F)}),m({...h,main:!0});break}}),[r]),(0,a.useEffect)((()=>{let e=!1,t=(e=>{let t=c();if("methods"in t)for(let a=0;a<t.methods.length;a++)if(t.methods[a].instance_id==e)return t.methods[a];return null})(d.rate.instance);JSON.stringify(t)!==JSON.stringify(d.method)&&(""!==d.rate.id&&null!==t&&d.rate.instance&&t.have_pickups&&(e=!0),_({...d,method:t,show_block:e}),m({...h,main:!0}))}),[d.rate]),(0,a.useEffect)((()=>{h.main&&null!==d.method&&(null!==d.destination&&d.method?.service?(b(""),((e,t,a=null)=>{let i=c();return"ajax_url"in i?fetch(`${i.ajax_url}?action=pakettikauppa_get_pickup_points`,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({service:e,destination:t})}).then((e=>e.json())).catch((e=>(console.error("Error fetching pickup points:",e),[]))):(console.error("Failed to get ajax URL"),[])})(d.method.service,d.destination).then((e=>{let t=[];e.success?e.data?t=e.data:console.warn("[Pakettikauppa]","Failed to get pickup points:","Data parameter not received"):console.warn("[Pakettikauppa]","Failed to get pickup points:",e.data),JSON.stringify(t)!==JSON.stringify(d.pickup_points_list)&&_({...d,pickup_points_list:t,pickup_point:"",custom_address:"",show_custom:c().allow_custom_address})})),O()):console.warn("[Pakettikauppa]","Failed to update pickup points:","Method data or destination is empty"))}),[h]),(0,a.useEffect)((()=>{h.custom&&(null!==d.method?(((e,t,a=null)=>{let i=c();return"ajax_url"in i?fetch(`${i.ajax_url}?action=pakettikauppa_get_custom_pickup_points`,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({service:e,address:t})}).then((e=>e.json())).catch((e=>(console.error("Error fetching pickup points:",e),[]))):(console.error("Failed to get ajax URL"),[])})(d.method.service,E).then((e=>{let t=[];e.success?e.data?t=e.data:console.warn("[Pakettikauppa]","Failed to get pickup points:","Data parameter not received"):console.warn("[Pakettikauppa]","Failed to get pickup points:",e.data),_({...d,pickup_points_list:t,pickup_point:"",custom_address:E})})),O()):console.warn("[Pakettikauppa]","Failed to update pickup points by custom address:","Method data is empty"))}),[h]),(0,a.useEffect)((()=>{null!==d.method&&(E.length?E.length<3||!l(E)||m({...h,custom:!0}):m({...h,main:!0}))}),[v]),(0,a.useEffect)((()=>{E.length>0&&E.length<3?y(n.custom_pickup_error_too_short):l(E)?y(""):y(n.custom_pickup_error_bad_char)}),[E]),(0,a.useEffect)((()=>{let e=[{label:"- "+n.pickup_select_field_default+" -",value:""}];if(d.pickup_points_list?.length)for(let t=0;t<d.pickup_points_list.length;t++)e.push({label:d.pickup_points_list[t].name+" ("+d.pickup_points_list[t].street_address+")",value:d.pickup_points_list[t].provider+": "+d.pickup_points_list[t].name+" (#"+d.pickup_points_list[t].pickup_point_id+")"});d.show_custom&&e.push({label:n.pickup_select_other,value:"other"}),g(e)}),[d.pickup_points_list]),(0,a.useEffect)((()=>{j&&(P(w),x("")),d.rate?.instance&&(e=>{let t=c();if("methods"in t)for(let a=0;a<t.methods.length;a++)if(t.methods[a].instance_id==e&&t.methods[a].have_pickups)return!0;return!1})(d.rate.instance)&&(u("wc-pakettikauppa","pakettikauppa_pickup_point",d.pickup_point),""===d.pickup_point&&(N({[w]:{message:n.pickup_error,hidden:!1}}),x("error")))}),[u,d.rate?.id,d.pickup_point]),(0,a.useEffect)((()=>{}),[d]),d.show_block?(0,t.createElement)("div",{className:`pakettikauppa-block pakettikauppa-shipping-pickup-point ${C}`},d.pickup_points_list?.length?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.SelectControl,{id:"pakettikauppa_pickup_point",label:n.pickup_block_title,help:n.checkout_pickup_info,value:d.pickup_point,options:f,onChange:e=>_({...d,pickup_point:e})}),j?.hidden||""!==d.pickup_point?null:(0,t.createElement)("div",{className:"wc-block-components-validation-error"},(0,t.createElement)("span",null,j?.message))):(0,t.createElement)(o.BaseControl,{label:n.pickup_block_title},(0,t.createElement)("p",null,n.pickup_not_found)),d.custom_address?(0,t.createElement)("p",{className:"pakettikauppa-custom-text"},n.custom_pickup_address.replaceAll("%s",'"'+d.custom_address+'"')):null,!d.show_custom||"other"!==d.pickup_point&&d.pickup_points_list?.length?null:(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.TextareaControl,{label:n.custom_pickup_title,help:n.custom_pickup_description+". "+n.custom_pickup_help+".",value:E,onChange:e=>b(e)}),""===S?null:(0,t.createElement)("div",{className:"wc-block-components-validation-error"},(0,t.createElement)("span",null,S)))):(0,t.createElement)(t.Fragment,null)}})})();
