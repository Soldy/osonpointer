
            var osonpointer = {
            	 p : new Array,
            	 setup : {
            	 	  fingers : 3,
            	     onoff : 1,
            	 },
            }
            function osonpointermakearray(){
            	 for (i = 0;osonpointer.setup.fingers > i ; i++){
                    osonpointer.p[i] = {
           	        posx : 0,
           	        posy : 0,
           	        oposx : 0,
           	        oposy : 0,
           	        deskoposx : 0,
           	        deskoposy : 0,
           	        deskposx : 0,
           	        deskposy : 0,
           	        startposx : 0,
           	        startposy : 0,
           	        startoposx : 0,
           	        startoposy : 0,
           	        startdeskposx : 0,
           	        startdeskposy : 0,
           	        startdeskoposx : 0,
           	        startdeskoposy : 0,
           	        endposx : 0,
           	        endposy : 0,
           	        endoposx : 0,
           	        endoposy : 0,
           	        enddeskposx : 0,
           	        enddeskposy : 0,
           	        enddeskoposx : 0,
           	        enddeskoposy : 0,
           	        clickposx : 0,
           	        clickposy : 0,
           	        clickoposx : 0,
           	        clickoposy : 0,
           	        clickdeskposx : 0,
           	        clickdeskposy : 0,
           	        clickdeskoposx : 0,
           	        clickdeskoposy : 0,
           	        lastclick : 0,
           	        currentclick : 0,
           	        active : 0,
           	        movedata : {
           	            posx : new Array,
           	            posy : new Array,
           	            oposx : new Array,
           	            oposy : new Array,
           	            deskoposx : new Array,
           	            deskoposy : new Array,
           	            deskposx : new Array,
           	            deskposy : new Array,
           	            i : 0
           	       }
                }
            }
         }
         osonpointermakearray();
         function osonpointerdetectstart() {
         }
         function osonpointerdetectmove() {
         }
         function osonpointerdetectend() {
         }
