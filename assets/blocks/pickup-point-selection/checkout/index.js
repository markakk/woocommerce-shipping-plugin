(()=>{"use strict";const e=window.wp.blocks,t=window.React,o=window.wp.components,a=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,t.createElement)("path",{fill:"currentColor",d:"M20.49 7.52a.19.19 0 0 1 0-.08a.17.17 0 0 1 0-.07v-.09l-.06-.15a.48.48 0 0 0-.09-.11l-.09-.08h-.05l-3.94-2.49l-3.72-2.3a.85.85 0 0 0-.29-.15h-.08a.82.82 0 0 0-.27 0h-.1a1.13 1.13 0 0 0-.33.13L4 6.78l-.09.07l-.09.08l-.1.07l-.05.06l-.06.15v.15a.69.69 0 0 0 0 .2v8.73a1 1 0 0 0 .47.85l7.5 4.64l.15.06h.08a.86.86 0 0 0 .52 0h.08l.15-.06L20 17.21a1 1 0 0 0 .47-.85V7.63s.02-.07.02-.11M12 4.17l1.78 1.1l-5.59 3.46l-1.79-1.1Zm-1 15l-5.5-3.36V9.42l5.5 3.4Zm1-8.11l-1.91-1.15l5.59-3.47l1.92 1.19Zm6.5 4.72L13 19.2v-6.38l5.5-3.4Z"})),p=JSON.parse('{"apiVersion":2,"name":"pakettikauppa/pickup-point-selection-checkout","version":"1.0.0","title":"Pakettikauppa pickup point selection","category":"woocommerce","description":"Allow to add components for Pakettikauppa shipping method on Checkout page","parent":["woocommerce/checkout-shipping-methods-block"],"supports":{"html":false,"align":false,"multiple":false,"reusable":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}},"text":{"type":"string","default":""}},"textdomain":"woo-pakettikauppa"}'),i=window.wp.blockEditor,l=(window.wc.wcSettings,window.wp.i18n),n=wcSettings["posti-blocks_data"].txt;(0,l.__)("Block options","woo-pakettikauppa"),(0,l.__)("Pickup point","woo-pakettikauppa"),(0,l.__)("Select a pickup point","woo-pakettikauppa"),(0,l.__)("Other","woo-pakettikauppa"),(0,l.__)("Please choose a pickup point","woo-pakettikauppa"),(0,l.__)("No pickup points were found. Check the address.","woo-pakettikauppa"),(0,l.__)("You can choose the pickup point on the Checkout page","woo-pakettikauppa"),(0,l.__)("Choose one of pickup points close to the address you entered","woo-pakettikauppa"),(0,l.__)("Custom pickup address","woo-pakettikauppa"),(0,l.__)("If none of your preferred pickup points are listed, fill in a custom address above and select another pickup point","woo-pakettikauppa"),(0,l.__)("After entering, please wait for a while for the results to be received","woo-pakettikauppa"),(0,l.__)("The value is too short","woo-pakettikauppa"),(0,l.__)("Invalid character entered","woo-pakettikauppa"),(0,l.__)("The selection of pickup points has been changed based on the address %s","woo-pakettikauppa"),(0,e.registerBlockType)(p,{icon:a,edit:({attributes:e,setAttributes:a})=>{const{text:p}=e,l=(0,i.useBlockProps)(),s=[{label:n.pickup_select_field_default,value:""}];return(0,t.createElement)("div",{...l,style:{display:"block"}},(0,t.createElement)(i.InspectorControls,null,(0,t.createElement)(o.PanelBody,{title:n.block_options},"Options for the block go here.")),(0,t.createElement)("div",null,(0,t.createElement)(i.RichText,{value:p||n.pickup_block_title,onChange:e=>a({text:e})})),(0,t.createElement)("div",null,(0,t.createElement)(o.Disabled,null,(0,t.createElement)(o.SelectControl,{options:s}))))},attributes:{}})})();