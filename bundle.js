(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>A});var o=t(537),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"/* @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); */\n* {\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    color: white;\n    user-select: none;   /* Disables text highlighting. Individually removed later for to-do items */\n}\nbody,html {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 280px 1fr;\n}\n\n\n#lhs-container {\n    display: grid;\n    grid-template-rows: 70px 35px 1fr 50px;\n\n    height: calc(100vh - 3px);          /* Add this to make footer appear at bottom of page */\n\n    background-color: rgb(34,34,34);\n}\n    #user-profile, #search-container,\n    #search-button, #project-template-container, \n    #new-container, #add-task-container,\n    .cards {\n        align-self: center;\n        border-radius: 7px;\n    }\n    #user-profile, #search-container {\n        margin: 10px 16px 10px 16px;\n    }\n    #user-profile {\n        display: grid;\n        grid-template-columns: 70px 1fr;\n        grid-template-rows: 1fr 1fr;\n    }\n        #profile-img {\n            grid-row: 1/3;\n\n            align-self: center;\n            justify-self: center;\n\n            border-radius: 50%;\n            height: 50px;\n        }\n        #user-name {\n            align-self: end;\n\n            font-weight: bold;\n            font-size: 0.9em;\n        }\n        #user-email {\n            align-self: start;\n\n            font-weight: 100;\n            font-size: 0.75em;\n        }\n    #search-container {\n        display: grid;\n        grid-template-columns: 1fr 30px;\n        \n        background-color: rgb(35,35,35);\n        border: 1px solid rgb(51,51,51);\n        border-bottom: 1px solid rgb(155,155,155);\n\n        padding: 7px;\n    }\n    #search-container:hover {\n        border-bottom: 2px solid rgb(118,185,237);\n    }\n        #search-bar {\n            background-color: rgb(35,35,35);    /* Remove default input styling */\n            color: rgb(205,205,205);            /* Search bar font color */\n            font-size: 14px;\n        }\n        input {\n            border: none;\n            outline: none;\n        }\n        #search-button {\n            justify-self: center;\n\n            padding-left: 7px;\n            padding-right: 7px;\n        }\n        #search-button:hover {\n            background-color: rgb(47,47,47);\n            color: rgb(184,184,184);\n        }\n        #search-button:hover:active {\n            color: rgb(139,139,139);\n        }\n\n        .material-symbols-outlined {\n        font-variation-settings:\n        'FILL' 0,\n        'wght' 150,\n        'GRAD' 50,\n        'opsz' 20\n        }\n\n    #project-list-container {\n        display: grid;\n        grid-template-rows: auto;\n        gap: 5px;\n\n        margin-top: 10px;\n        align-content: start;           /* Append new list items from the top of the page */\n    }\n        #project-template-container {\n            display: grid;\n            grid-template-columns: 60px 1fr;\n        }\n            #project-template-container > .material-symbols-outlined {\n                grid-column: 1/2;\n                justify-self: center;\n                align-self: center;\n            }\n            .project-template {\n                grid-column: 2/3;\n                \n                margin: 10px 0 10px 0;\n                padding: 10px 20px 10px 0;\n                align-self: start;\n\n                background-color: rgb(35,35,35);    /* Remove default input styling */\n            }\n            .project-template:focus {\n                border: 1px solid rgb(51,51,51);\n                border-bottom: 2px solid rgb(118,185,237);\n                border-radius: 6px;\n                margin-right: 10px;\n            }\n            #project-template-container:hover,\n            #project-template-container:hover .project-template {           /* Changes colour of both input and parent container */\n                background-color: rgb(55,55,55);\n            }\n            #project-template-container:hover:active,\n            #project-template-container:hover:active .project-template {\n                background-color: rgb(68,68,68);\n            }\n\n            /* List Dropdown */\n            .list-dropdown-container {\n                width: 250px;\n                position: absolute;\n                /* left: 14px;\n                top: 36px; */\n            \n                background-color: rgb(34,34,34);\n                border: 1px solid rgb(51,51,51);\n                border-radius: 5px;\n            \n                display: grid;\n                grid-template-rows: 1fr 1fr;\n            }\n            .rename-list, .delete-list {\n                padding: 10px;\n                font-size: 0.55em;\n            }\n            .rename-list:hover, .delete-list:hover {\n                background-color: rgb(55,55,55);\n            }\n            .rename-list:hover:active, .delete-list:hover:active {\n                background-color: rgb(68,68,68);\n            }\n    #new-container {\n        display: grid;\n        grid-template-columns: 40px 1fr;\n        align-items: center;\n    }\n    #new-container:hover {\n        background-color: rgb(55,55,55);\n    }\n    #new-container:hover:active {\n        background-color: rgb(68,68,68);\n    }\n        #plus-button {\n            justify-self: center;\n\n            font-size: 2em;\n        }\n        #new-list {\n            font-size: 0.9em;\n        }\n\n\n/*--------------- THE CONTENT STYLING ---------------*/\n#content-container {\n    display: grid;\n    grid-template-rows: 70px 1fr 1fr 35px;\n    gap: 12px;\n\n    background-color: rgb(28,28,28);\n\n    padding: 40px 50px 60px 50px;\n}\n    #project-container {\n        display: grid;\n        grid-template-columns: 1fr 40px;\n\n        align-content: center;\n    }\n        #project {\n            grid-column: 1/2;\n            justify-self: start;\n\n            font-size: 2em;\n        }\n        #three-dots {\n            grid-column: 2/3;\n            justify-self: center;\n            align-self: center;\n            \n            border-radius: 10px;\n            padding: 5px;\n\n            background-color: rgb(42,42,42);\n        }\n        #three-dots:hover {\n            background-color: rgb(55,55,55);\n        }\n        #three-dots:hover:active {\n            background-color: rgb(68,68,68);\n        }\n    #todo, #completed {\n        display: grid;\n        grid-template-rows: 25px auto;\n        gap: 10px;\n\n        align-content: start;\n    }\n    .to-complete {\n        background-color: rgb(42,42,42);\n        border-radius: 6px;\n        padding: 6px;\n        padding-right: 10px;\n\n        justify-self: start;\n        align-self: center;\n\n        display: grid;\n        grid-template-columns: 30px 1fr;\n    }\n    .to-complete:hover {\n        background-color: rgb(55,55,55);\n    }\n    .to-complete:hover:active {\n        background-color: rgb(68,68,68);\n    }\n    #todo-id-logo, #completed-id-logo {\n        align-self: center;\n        justify-self: center;\n    }\n        .cards {\n            display: grid;\n            grid-template-columns: 50px 1fr;\n            grid-template-rows: 25px 25px;\n\n            background-color: rgb(42,42,42);\n            font-size: 1em;\n        }\n        .cards:hover {\n            background-color: rgb(55,55,55);\n        }\n        .cards:active:hover:not(.checkbox) {        /* Only reducing font size of card, not checkbox tick */\n            /* padding: 5px;\n            font-size: 90%; */\n        }\n            .checkbox {\n                grid-column: 1/2;\n                grid-row: 1/3;\n\n                align-self: center;\n                justify-self: center;\n                text-align: center;\n\n                border: 2px solid white;\n                border-radius: 50%;\n                width: 25px;\n                height: 25px;\n\n                font-weight: bold;\n                font-size: 1.2em;\n            }\n            .checkbox:hover::after {            /* Changes hover effects for checkbox */\n                content: '✓';\n            }\n            .checkbox:active:hover:after {      /* Makes it so that the highlight is only made whilst hovering */\n                content: '✓';\n                border-color: rgb(28,28,28);\n                color: rgb(28,28,28);\n            }\n            .checkbox:active:hover {            /* Changes the background colour only. Fixes issue where only text would have highlight applied */\n                background-color: white;\n            }\n            .card-title, .card-subcontainer {\n                grid-column: 2/3;\n            }\n            .card-title {\n                grid-row: 1/2;\n\n                align-self: center;\n            }\n            .card-subcontainer {\n                grid-row: 2/3;\n\n                align-self: center;\n\n                display: grid;\n                grid-template-columns: 70px 1fr;\n            }\n\n    #add-task-container {\n        display: grid;\n        grid-template-columns: 40px 1fr;\n        align-items: center;\n\n        padding: 7px 10px 7px 10px;\n\n        background-color: rgb(42,42,42);\n    }\n\n    #add-task-container:hover,\n    #add-task-container:hover #add-task {           /* Changes colour of both input and parent container */\n        background-color: rgb(60,60,60);\n    }\n    #add-task-container>#plus-button:after {        /* Setting the default symbol */\n        content: 'add';\n    }\n    #add-task-container:hover #plus-button:after {\n        content: 'circle';\n    }\n        #add-task {\n            background-color: rgb(42,42,42);\n        }\n\n/* Setting mobile behaviour */\n@media only screen and (max-width: 600px) {\n    body {\n        grid-template-columns: 100%;\n    }\n    #lhs-container {\n        grid-template-rows: 210px 100px 1fr 150px;\n    }\n    #new-container {\n        grid-template-columns: 80px 1fr;\n    }\n    #search-bar {\n        font-size: 28px;\n    }\n    * {\n        font-size: 1.2em;\n    }\n}\n/* Setting behaviour for desktop */\n@media only screen and (min-width: 600px) {\n    body {\n        grid-template-columns: 280px 1fr;\n    }\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:["/* @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); */\n* {\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    color: white;\n    user-select: none;   /* Disables text highlighting. Individually removed later for to-do items */\n}\nbody,html {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 280px 1fr;\n}\n\n\n#lhs-container {\n    display: grid;\n    grid-template-rows: 70px 35px 1fr 50px;\n\n    height: calc(100vh - 3px);          /* Add this to make footer appear at bottom of page */\n\n    background-color: rgb(34,34,34);\n}\n    #user-profile, #search-container,\n    #search-button, #project-template-container, \n    #new-container, #add-task-container,\n    .cards {\n        align-self: center;\n        border-radius: 7px;\n    }\n    #user-profile, #search-container {\n        margin: 10px 16px 10px 16px;\n    }\n    #user-profile {\n        display: grid;\n        grid-template-columns: 70px 1fr;\n        grid-template-rows: 1fr 1fr;\n    }\n        #profile-img {\n            grid-row: 1/3;\n\n            align-self: center;\n            justify-self: center;\n\n            border-radius: 50%;\n            height: 50px;\n        }\n        #user-name {\n            align-self: end;\n\n            font-weight: bold;\n            font-size: 0.9em;\n        }\n        #user-email {\n            align-self: start;\n\n            font-weight: 100;\n            font-size: 0.75em;\n        }\n    #search-container {\n        display: grid;\n        grid-template-columns: 1fr 30px;\n        \n        background-color: rgb(35,35,35);\n        border: 1px solid rgb(51,51,51);\n        border-bottom: 1px solid rgb(155,155,155);\n\n        padding: 7px;\n    }\n    #search-container:hover {\n        border-bottom: 2px solid rgb(118,185,237);\n    }\n        #search-bar {\n            background-color: rgb(35,35,35);    /* Remove default input styling */\n            color: rgb(205,205,205);            /* Search bar font color */\n            font-size: 14px;\n        }\n        input {\n            border: none;\n            outline: none;\n        }\n        #search-button {\n            justify-self: center;\n\n            padding-left: 7px;\n            padding-right: 7px;\n        }\n        #search-button:hover {\n            background-color: rgb(47,47,47);\n            color: rgb(184,184,184);\n        }\n        #search-button:hover:active {\n            color: rgb(139,139,139);\n        }\n\n        .material-symbols-outlined {\n        font-variation-settings:\n        'FILL' 0,\n        'wght' 150,\n        'GRAD' 50,\n        'opsz' 20\n        }\n\n    #project-list-container {\n        display: grid;\n        grid-template-rows: auto;\n        gap: 5px;\n\n        margin-top: 10px;\n        align-content: start;           /* Append new list items from the top of the page */\n    }\n        #project-template-container {\n            display: grid;\n            grid-template-columns: 60px 1fr;\n        }\n            #project-template-container > .material-symbols-outlined {\n                grid-column: 1/2;\n                justify-self: center;\n                align-self: center;\n            }\n            .project-template {\n                grid-column: 2/3;\n                \n                margin: 10px 0 10px 0;\n                padding: 10px 20px 10px 0;\n                align-self: start;\n\n                background-color: rgb(35,35,35);    /* Remove default input styling */\n            }\n            .project-template:focus {\n                border: 1px solid rgb(51,51,51);\n                border-bottom: 2px solid rgb(118,185,237);\n                border-radius: 6px;\n                margin-right: 10px;\n            }\n            #project-template-container:hover,\n            #project-template-container:hover .project-template {           /* Changes colour of both input and parent container */\n                background-color: rgb(55,55,55);\n            }\n            #project-template-container:hover:active,\n            #project-template-container:hover:active .project-template {\n                background-color: rgb(68,68,68);\n            }\n\n            /* List Dropdown */\n            .list-dropdown-container {\n                width: 250px;\n                position: absolute;\n                /* left: 14px;\n                top: 36px; */\n            \n                background-color: rgb(34,34,34);\n                border: 1px solid rgb(51,51,51);\n                border-radius: 5px;\n            \n                display: grid;\n                grid-template-rows: 1fr 1fr;\n            }\n            .rename-list, .delete-list {\n                padding: 10px;\n                font-size: 0.55em;\n            }\n            .rename-list:hover, .delete-list:hover {\n                background-color: rgb(55,55,55);\n            }\n            .rename-list:hover:active, .delete-list:hover:active {\n                background-color: rgb(68,68,68);\n            }\n    #new-container {\n        display: grid;\n        grid-template-columns: 40px 1fr;\n        align-items: center;\n    }\n    #new-container:hover {\n        background-color: rgb(55,55,55);\n    }\n    #new-container:hover:active {\n        background-color: rgb(68,68,68);\n    }\n        #plus-button {\n            justify-self: center;\n\n            font-size: 2em;\n        }\n        #new-list {\n            font-size: 0.9em;\n        }\n\n\n/*--------------- THE CONTENT STYLING ---------------*/\n#content-container {\n    display: grid;\n    grid-template-rows: 70px 1fr 1fr 35px;\n    gap: 12px;\n\n    background-color: rgb(28,28,28);\n\n    padding: 40px 50px 60px 50px;\n}\n    #project-container {\n        display: grid;\n        grid-template-columns: 1fr 40px;\n\n        align-content: center;\n    }\n        #project {\n            grid-column: 1/2;\n            justify-self: start;\n\n            font-size: 2em;\n        }\n        #three-dots {\n            grid-column: 2/3;\n            justify-self: center;\n            align-self: center;\n            \n            border-radius: 10px;\n            padding: 5px;\n\n            background-color: rgb(42,42,42);\n        }\n        #three-dots:hover {\n            background-color: rgb(55,55,55);\n        }\n        #three-dots:hover:active {\n            background-color: rgb(68,68,68);\n        }\n    #todo, #completed {\n        display: grid;\n        grid-template-rows: 25px auto;\n        gap: 10px;\n\n        align-content: start;\n    }\n    .to-complete {\n        background-color: rgb(42,42,42);\n        border-radius: 6px;\n        padding: 6px;\n        padding-right: 10px;\n\n        justify-self: start;\n        align-self: center;\n\n        display: grid;\n        grid-template-columns: 30px 1fr;\n    }\n    .to-complete:hover {\n        background-color: rgb(55,55,55);\n    }\n    .to-complete:hover:active {\n        background-color: rgb(68,68,68);\n    }\n    #todo-id-logo, #completed-id-logo {\n        align-self: center;\n        justify-self: center;\n    }\n        .cards {\n            display: grid;\n            grid-template-columns: 50px 1fr;\n            grid-template-rows: 25px 25px;\n\n            background-color: rgb(42,42,42);\n            font-size: 1em;\n        }\n        .cards:hover {\n            background-color: rgb(55,55,55);\n        }\n        .cards:active:hover:not(.checkbox) {        /* Only reducing font size of card, not checkbox tick */\n            /* padding: 5px;\n            font-size: 90%; */\n        }\n            .checkbox {\n                grid-column: 1/2;\n                grid-row: 1/3;\n\n                align-self: center;\n                justify-self: center;\n                text-align: center;\n\n                border: 2px solid white;\n                border-radius: 50%;\n                width: 25px;\n                height: 25px;\n\n                font-weight: bold;\n                font-size: 1.2em;\n            }\n            .checkbox:hover::after {            /* Changes hover effects for checkbox */\n                content: '✓';\n            }\n            .checkbox:active:hover:after {      /* Makes it so that the highlight is only made whilst hovering */\n                content: '✓';\n                border-color: rgb(28,28,28);\n                color: rgb(28,28,28);\n            }\n            .checkbox:active:hover {            /* Changes the background colour only. Fixes issue where only text would have highlight applied */\n                background-color: white;\n            }\n            .card-title, .card-subcontainer {\n                grid-column: 2/3;\n            }\n            .card-title {\n                grid-row: 1/2;\n\n                align-self: center;\n            }\n            .card-subcontainer {\n                grid-row: 2/3;\n\n                align-self: center;\n\n                display: grid;\n                grid-template-columns: 70px 1fr;\n            }\n\n    #add-task-container {\n        display: grid;\n        grid-template-columns: 40px 1fr;\n        align-items: center;\n\n        padding: 7px 10px 7px 10px;\n\n        background-color: rgb(42,42,42);\n    }\n\n    #add-task-container:hover,\n    #add-task-container:hover #add-task {           /* Changes colour of both input and parent container */\n        background-color: rgb(60,60,60);\n    }\n    #add-task-container>#plus-button:after {        /* Setting the default symbol */\n        content: 'add';\n    }\n    #add-task-container:hover #plus-button:after {\n        content: 'circle';\n    }\n        #add-task {\n            background-color: rgb(42,42,42);\n        }\n\n/* Setting mobile behaviour */\n@media only screen and (max-width: 600px) {\n    body {\n        grid-template-columns: 100%;\n    }\n    #lhs-container {\n        grid-template-rows: 210px 100px 1fr 150px;\n    }\n    #new-container {\n        grid-template-columns: 80px 1fr;\n    }\n    #search-bar {\n        font-size: 28px;\n    }\n    * {\n        font-size: 1.2em;\n    }\n}\n/* Setting behaviour for desktop */\n@media only screen and (min-width: 600px) {\n    body {\n        grid-template-columns: 280px 1fr;\n    }\n}"],sourceRoot:""}]);const A=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */"),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],A=0;A<n.length;A++){var c=n[A],l=o.base?c[0]+o.base:c[0],d=a[l]||0,s="".concat(l," ").concat(d);a[l]=d+1;var p=t(s),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(g);else{var u=r(g,o);o.byIndex=A,e.splice(A,0,{identifier:s,updater:u,references:1})}i.push(s)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=t(a[i]);e[A].references--}for(var c=o(n,r),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),A=t(565),c=t.n(A),l=t(216),d=t.n(l),s=t(589),p=t.n(s),g=t(426),u={};u.styleTagTransform=p(),u.setAttributes=c(),u.insert=i().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=d(),e()(g.Z,u),g.Z&&g.Z.locals&&g.Z.locals;const B=t.p+"b96828340a093f42b7dcedbd22d42e51.mp3";console.clear();let m=1;const C=new Audio(B);C.preload="auto";const b=[];document.getElementById("new-container").addEventListener("click",(()=>{const n={projectName:"placeholder",colour:"orange",todo:[],index:m};!function(n,e,t){const o=document.createElement("div");o.id="project-template-container";const r=document.createElement("span");r.className="material-symbols-outlined",r.innerHTML="menu",r.style.color=e,r.id="stack-logo"+t;const a=document.createElement("input");a.id="item"+t,a.className="project-template",a.type="text",a.name=n,a.value=n+t,document.getElementById("project-list-container").appendChild(o),o.appendChild(r),o.appendChild(a),a.focus(),a.select(),document.getElementById("project").innerHTML=n+t,document.getElementById("project").style.color=e,document.getElementById("project").value=t,a.addEventListener("input",h.bind(this,a,t)),o.addEventListener("click",x.bind(this,t,a)),function(n){const e=document.createElement("div");e.className="list-dropdown-container",n.appendChild(e);const t=document.createElement("div");t.className="rename-list",t.innerHTML="Rename List",e.appendChild(t);const o=document.createElement("div");o.className="delete-list",o.innerHTML="Delete List",e.appendChild(o),e.style.visibility="hidden",n.addEventListener("click",function(n,e,r){e.style.visibility="",r.target.className===t.className&&(e.style.visibility="hidden",e.parentNode.parentNode.lastChild.select()),r.target.className===o.className&&(e.style.visibility="hidden",e.parentNode.parentNode.innerHTML=""),r.target.className!==t.className&&r.target.className!==o.className&&r.target.className!==n.className&&(e.style.visibility="hidden")}.bind(this,n,e))}(r)}("placeholder","orange",m),b.push(n),m+=1}));let f=1;function h(n,e){b[e-1].projectName=n.value,document.getElementById("project").innerHTML=b[e-1].projectName}function x(n,e){const t=b[n-1];try{t.projectName=e.value}catch(o){console.log("Already updated project name.")}for(document.getElementById("project").innerHTML=t.projectName,document.getElementById("project").style.color=t.colour,document.getElementById("project").value=n,document.querySelectorAll(".cards").forEach((n=>n.remove())),f=0;f<t.todo.length;f++){const r=document.createElement("div");r.className="cards";const a=document.createElement("div");a.className="checkbox";const i=document.createElement("div");i.className="card-title",i.innerHTML=t.todo[f].itemName;const A=document.createElement("div");A.className="card-subcontainer";const c=document.createElement("div");c.className="subitems",c.innerHTML=t.todo[f].subItems;const l=document.createElement("div");function d(n,e,t){n.todo[e].status=!0,document.getElementById("completed").appendChild(t),C.currentTime=.08,C.play()}l.className="due-date",l.innerHTML=t.todo[f].dueDate,!1===t.todo[f].status&&document.getElementById("todo").appendChild(r),!0===t.todo[f].status&&document.getElementById("completed").appendChild(r),r.appendChild(a),r.appendChild(i),r.appendChild(A),A.appendChild(c),A.appendChild(l),a.addEventListener("click",d.bind(this,t,f,r))}}const v=document.getElementById("add-task");v.addEventListener("keyup",(n=>{const e=document.getElementById("project").value-1;if("Enter"===n.key){const n=("1 of 1",{itemName:v.value,subItems:"1 of 1",dueDate:function(){const n=new Date;let e=new Date;return e.setDate(n.getDate()+1),e=e.toLocaleString("en-US"),e}(),status:!1});b[e].todo.push(n),v.value="",x(e+1)}}));let y=!1;document.getElementById("to-complete-id").addEventListener("click",(()=>function(){if(!1===y){for(let n of document.querySelectorAll("#todo .cards"))n.style.visibility="hidden";document.getElementById("todo-id-logo").innerHTML="navigate_next",y=!0}if(!0===y){for(let n of document.querySelectorAll("#todo .cards"))n.style.visibility="";document.getElementById("todo-id-logo").innerHTML="expand_more",y=!1}}()));let I=!1;document.getElementById("completed-id").addEventListener("click",(()=>function(){if(!1===I){for(let n of document.querySelectorAll("#completed .cards"))n.style.visibility="hidden";return document.getElementById("completed-id-logo").innerHTML="navigate_next",void(I=!0)}if(!0===I){for(let n of document.querySelectorAll("#completed .cards"))n.style.visibility="";document.getElementById("completed-id-logo").innerHTML="expand_more",I=!1}}()))})()})();
//# sourceMappingURL=bundle.js.map