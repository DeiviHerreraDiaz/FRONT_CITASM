import { LitElement, html } from 'lit-element';
import styleScc from '../../css/login/loginStyle'

export class Content extends LitElement {

    static get styles() {
        return [styleScc]
    }
    
    render() {
        return html`

        
        
        `;

    }
}

customElements.define('my-content', Content);