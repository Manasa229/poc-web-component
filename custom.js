//This file will be the web component
//It only needs to run, not be imported by main.js
const template = document.createElement('template');
template.innerHTML = `
  <div>
    <slot name="list"></slot>
    <h1>Big Bang Theory</h1>
    <slot name="title">Default text if not title slot used in HTML</slot>
  </div>
`;

class CustomElem extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define('custom-elem', CustomElem);
// <big-bang>