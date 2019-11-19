export class Yesform {
    textarea_poll:string;
    checkboxHTML:boolean;
    checkboxJS:boolean;
    checkboxCSS:boolean;
    checkboxANGULAR:boolean;
    checkboxSDS:boolean;
    
    constructor(textarea_poll:string,
        checkboxHTML:boolean,
        checkboxJS:boolean,
        checkboxCSS:boolean,
        checkboxANGULAR:boolean,
        checkboxSDS:boolean){

        this.textarea_poll=textarea_poll
        this.checkboxHTML=checkboxHTML
        this.checkboxJS=checkboxJS
        this.checkboxCSS=checkboxCSS
        this.checkboxANGULAR=checkboxANGULAR
        this.checkboxSDS=checkboxSDS
    }

}