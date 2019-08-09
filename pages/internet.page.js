class Internet {
	get pageHeader(){return $('h1.heading');}
	get pageSubHeading(){return $('h2');}
    get pageFooter(){return $('#page-footer');}
    get parent(){return $('ul');}
    get childElements(){return this.parent.$$('li');}

    getLiText(){
        this.childElements.filter((element) =>{
            console.log(element.getText());
        });
    }

}
export default new Internet();