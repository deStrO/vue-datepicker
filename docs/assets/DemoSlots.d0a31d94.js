import{V as k}from"./vue3-date-time-picker.esm.37fef68f.js";import{u as D,r as C,o as c,c as d,a as A,D as x,z as n,b as l,F as _,B as u,x as s,n as h,y as v}from"./app.bce967f0.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";var i="/logo.png";const I={components:{Datepicker:k},props:["placeholder","useTriggerSlot","position","useInputIconSlot","useClearIconSlot","useClockIconSlot","useArrowLeftSlot","useArrowRightSlot","useArrowUpSlot","useArrowDownSlot","useCalendarIconSlot","useDaySlot","useActionButtonSlot","useActionPreviewSlot","useHoursSlot","useMinutesSlot","useMonthSlot","useYearSlot","useHoursOverlaySlot","useMinutesOverlaySlot","useMonthOverlaySlot","useYearOverlaySlot","useDpInputSlot","useCalendarHeaderSlot","useNowButtonSlot","showNowButton","is24","useAmPmButtonSlot","useTimePickerOverlay"],data(){return{date:this.showNowButton?null:new Date,dark:!0}},computed:{todayDay(){return new Date().getDate()+1},getDate(){return r=>`Selected ${new Date(r).getDate()}`},hoursArray(){const r=[];for(let o=0;o<24;o++)r.push({text:o<10?`0${o}`:o,value:o});return r},minutesArray(){const r=[];for(let o=0;o<60;o++)r.push({text:o<10?`0${o}`:o,value:o});return r}},mounted(){this.dark=D()},methods:{selectDate(){this.$refs.dpSlotDemo.selectDate()}}},O=l("p",{class:"clickable-text"},"This is some custom clickable text that will open datepicker",-1),M=["value"],b=l("img",{class:"input-slot-image",src:i},null,-1),N=["onClick"],V=l("img",{class:"slot-icon",src:i},null,-1),T=l("img",{class:"slot-icon",src:i},null,-1),H=l("img",{class:"slot-icon",src:i},null,-1),P=l("img",{class:"slot-icon-m",src:i},null,-1),Y=l("img",{class:"slot-icon-m",src:i},null,-1),L=l("img",{class:"slot-icon",src:i},null,-1),U={key:0,class:"slot-icon",src:i},p=["onClick"],z=l("img",{class:"slot-icon",src:i},null,-1),F=[z],R=["onClick"],E={class:"time-picker-overlay"},j=["value","onChange"],q=["value"],G=["value","onChange"],J=["value"];function K(r,o,t,Q,S,m){const g=C("Datepicker");return c(),d("div",{class:h(["demo-wrap",t.useDpInputSlot||t.useTriggerSlot?"demo-wrap-inline":""])},[A(g,{modelValue:S.date,"onUpdate:modelValue":o[1]||(o[1]=e=>S.date=e),placeholder:t.placeholder,dark:S.dark,position:t.position,is24:t.is24,ref:"dpSlotDemo","show-now-button":t.showNowButton},x({_:2},[t.useTriggerSlot?{name:"trigger",fn:n(()=>[O])}:void 0,t.useDpInputSlot?{name:"dp-input",fn:n(({value:e})=>[l("input",{type:"text",value:e},null,8,M)])}:void 0,t.useInputIconSlot?{name:"input-icon",fn:n(()=>[b])}:void 0,t.useClearIconSlot?{name:"clear-icon",fn:n(({clear:e})=>[l("img",{class:"input-slot-image-clear",src:i,onClick:e},null,8,N)])}:void 0,t.useClockIconSlot?{name:"clock-icon",fn:n(()=>[V])}:void 0,t.useArrowLeftSlot?{name:"arrow-left",fn:n(()=>[T])}:void 0,t.useArrowRightSlot?{name:"arrow-right",fn:n(()=>[H])}:void 0,t.useArrowUpSlot?{name:"arrow-up",fn:n(()=>[P])}:void 0,t.useArrowDownSlot?{name:"arrow-down",fn:n(()=>[Y])}:void 0,t.useCalendarIconSlot?{name:"calendar-icon",fn:n(()=>[L])}:void 0,t.useDaySlot?{name:"day",fn:n(({day:e})=>[e===m.todayDay?(c(),d("img",U)):(c(),d(_,{key:1},[u(s(e),1)],64))])}:void 0,t.useActionButtonSlot?{name:"action-select",fn:n(()=>[l("p",{class:"custom-select",onClick:o[0]||(o[0]=(...e)=>m.selectDate&&m.selectDate(...e))},"Select")])}:void 0,t.useActionPreviewSlot?{name:"action-preview",fn:n(({value:e})=>[u(s(m.getDate(e)),1)])}:void 0,t.useHoursSlot?{name:"hours",fn:n(({value:e})=>[u(s(e),1)])}:void 0,t.useMinutesSlot?{name:"minutes",fn:n(({value:e})=>[u(s(e),1)])}:void 0,t.useMonthSlot?{name:"month",fn:n(({value:e})=>[u(s(e),1)])}:void 0,t.useYearSlot?{name:"year",fn:n(({year:e})=>[u(s(e),1)])}:void 0,t.useHoursOverlaySlot?{name:"hours-overlay",fn:n(({value:e})=>[u(s(e),1)])}:void 0,t.useMinutesOverlaySlot?{name:"minutes-overlay",fn:n(({value:e})=>[u(s(e),1)])}:void 0,t.useMonthOverlaySlot?{name:"month-overlay",fn:n(({value:e})=>[u(s(e),1)])}:void 0,t.useYearOverlaySlot?{name:"year-overlay",fn:n(({value:e})=>[u(s(e),1)])}:void 0,t.useCalendarHeaderSlot?{name:"calendar-header",fn:n(({index:e,day:f})=>[l("div",{class:h(e===5||e===6?"red-color":"")},s(f),3)])}:void 0,t.useNowButtonSlot?{name:"now-button",fn:n(({selectCurrentDate:e})=>[l("span",{onClick:f=>e(),title:"Select current date",class:"pointer"},F,8,p)])}:void 0,t.useAmPmButtonSlot?{name:"am-pm-button",fn:n(({toggle:e,value:f})=>[l("button",{onClick:e},s(f),9,R)])}:void 0,t.useTimePickerOverlay?{name:"time-picker-overlay",fn:n(({hours:e,minutes:f,setHours:w,setMinutes:y})=>[l("div",E,[l("select",{class:"select-input",value:e,onChange:a=>w(+a.target.value)},[(c(!0),d(_,null,v(m.hoursArray,a=>(c(),d("option",{key:a.value,value:a.value},s(a.text),9,q))),128))],40,j),l("select",{class:"select-input",value:f,onChange:a=>y(+a.target.value)},[(c(!0),d(_,null,v(m.minutesArray,a=>(c(),d("option",{key:a.value,value:a.value},s(a.text),9,J))),128))],40,G)])])}:void 0]),1032,["modelValue","placeholder","dark","position","is24","show-now-button"])],2)}var $=B(I,[["render",K]]);export{$ as default};