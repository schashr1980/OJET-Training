/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
define(['../accUtils',"knockout"],
 function(accUtils,ko) {
    function ButtonClickViewModel() {
      var self=this;
      this.message=ko.observable("");
      this.clickHandler=()=>{
        if(this.message()==null || this.message()=="")
        {
          this.message("Button Clicked");
        }
        else{
          this.message("");
        }
      }
    }

    return ButtonClickViewModel;
  }
);
