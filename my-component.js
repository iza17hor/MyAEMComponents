class MyComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = '<p>Hello from My Component!</p>';
    }
  }
  
  customElements.define('my-component', MyComponent);