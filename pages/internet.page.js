class Internet {
	get pageHeader(){return $('h1.heading');}
	get pageSubHeading(){return $('h2');}
    get pageFooter(){return $('#page-footer');}
    get parent(){return $('ul');}
    get childElements(){return this.parent.$$('li');}
    get firstLink() { return $('ul li:nth-child(1) a'); }
    specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`); }

    getLiText(){
        this.childElements.filter((element) =>{
            console.log(element.getText());
        });
    }
    getSpecificElementText(index){
        console.log(this.specificChildElement(index).getText());
    }

}
module.exports = new Internet();