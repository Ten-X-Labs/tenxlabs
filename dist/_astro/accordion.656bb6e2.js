const a=[...document.querySelectorAll(".accordion__item")],s=e=>e.querySelector(".panel__inner").getBoundingClientRect().height,u=e=>{const t=e.querySelector(".accordion__header"),c=e.querySelector(".header__toggle-indicator");e.querySelector(".accordion__panel").style.height=`${s(e)}px`,e.classList.add("is-active"),t.setAttribute("aria-expanded",!0),c.innerHTML='<svg class="header__toggle-indicator" aria-hidden="true" data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>'},d=e=>{const t=e.querySelector(".accordion__header"),c=e.querySelector(".header__toggle-indicator"),r=e.querySelector(".accordion__panel");e.classList.remove("is-active"),r.style.height=0,t.focus(),t.setAttribute("aria-expanded",!1),c.innerHTML='<svg class="header__toggle-indicator" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>'},l=e=>e.classList.contains("is-active");function _(){const e=event.target.closest(".accordion__item");!e||event.target.closest(".accordion__panel")||(l(e)?d(e):u(e))}function h(){a.filter((e=>e.classList.contains("is-active"))).forEach((e=>{e.querySelector(".accordion__panel").style.height=`${s(e)}px`}))}a.forEach(((e,t)=>{const c=e.querySelector(".accordion__header"),r=e.querySelector(".accordion__panel");c.setAttribute("id",`accordion-item${t+1}`),r.setAttribute("id",`item${t+1}`),c.setAttribute("aria-controls",`item${t+1}`),r.setAttribute("aria-labelledby",`accordion-item${t+1}`)})),document.addEventListener("keydown",(e=>{const t=e.target.closest(".accordion__item");"Escape"===e.key&&t&&l(t)&&d(t)})),document.addEventListener("keydown",(e=>{if(!e.target.closest(".accordion__header"))return;const t=e.target.closest(".accordion__wrapper"),c=e.target.closest(".accordion__item"),r=[...t.querySelectorAll(".accordion__item")],o=r.findIndex((e=>e===c)),{key:i}=e;let a;"ArrowDown"===i&&(a=r[o+1]),"ArrowUp"===i&&(a=r[o-1]),a&&(e.preventDefault(),a.querySelector(".accordion__header").focus())})),window.toggleAccordionItem=_,window.onresize=h;