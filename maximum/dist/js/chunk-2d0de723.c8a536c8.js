(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de723"],{"864c":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"test"}},[t._l(t.schedule,(function(e,n){return[e.id===t.activeLesson?s("h2",{key:n},[t._v("Тесты темы: "+t._s(e.title))]):t._e()]})),s("div",{staticClass:"button",on:{click:function(e){return t.goTo("/detail")}}},[s("span",[t._v("Вернуться назад")])])],2)},o=[],c={name:"cTest",components:{},data:function(){return{}},props:{},computed:{selectedCourse:function(){return this.$store.getters.getSelectedCourse},schedule:function(){return this.$store.getters.getSchedule},activeLesson:function(){return this.$store.getters.getActiveLesson}},watch:{},created:function(){"none"===this.selectedCourse&&(this.$store.dispatch("ActiveUrl","/"),this.$router.push("/"))},mounted:function(){},methods:{goTo:function(t){this.$store.dispatch("ActiveUrl",t),this.$router.push(t)}}},r=c,i=s("2877"),u=Object(i["a"])(r,n,o,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0de723.c8a536c8.js.map