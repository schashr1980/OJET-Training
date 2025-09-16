define(['../accUtils',"knockout","ojs/ojinputtext","ojs/ojbutton","ojs/ojformlayout"],
 function(accUtils,ko) {
    function ValidateButtonViewModel() {
      this.name=ko.observable("");
      this.email=ko.observable("");
      this.submitHandler=()=>{
        if(this.name()==null || this.name()=="" || this.email()==null || this.email()=="")
        {
          alert("Fill the fields");
        }
        else{
          alert("Hello "+this.name()+", Email : "+this.email());
          this.name("");
          this.email("");
        }
      }
      self.evaluateDisabled=ko.pureComputed(()=>{
        return (this.name()==null || this.name()=="" || this.email()==null || this.email()=="");
      });
    }
    return ValidateButtonViewModel;
  }
);
