// Custom text element
class Introducemyself extends HTMLElement {
  connectedCallback() {
    this.textContent = "Hi, This is Yok BorntoDev!";
  }
}

customElements.define("introduce-me", Introducemyself);

// Custom button element
class SubscribeButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const button = document.createElement("button");
    button.textContent = "Subscribe";

    button.style = `
    background: linear-gradient(90deg, rgba(10,13,56,1) 0%, rgba(29,96,121,1) 46%, rgba(34,180,178,1) 100%);
        color: white;
        padding: 13px 30px;
        border: none;
        border-radius: 30px;
        cursor: pointer;
      `;

    button.addEventListener("click", () => {
      alert("You are now subscribed!");
    });

    this.shadowRoot.appendChild(button);
  }
}

customElements.define("subscribe-button", SubscribeButton);
