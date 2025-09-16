/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your about ViewModel code goes here
 */
define(['../accUtils',"knockout"],
 function(accUtils,ko) {
    function TextBindingViewModel() {
      var self=this;
      self.text=ko.observable(" Hello. This is text binding Example");
    }
    
    return TextBindingViewModel;
  }
);
