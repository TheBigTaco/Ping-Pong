 // ********************************************************************
//   This class is part of the Sizmek DCO HTML5 TEMPLATE (AUTO_300X250) 
//   ALL RIGHTS RESERVED TO � 2014 Sizmek, Inc.
// *********************************************************************
// *********************************************************************

	sizmek_Html5Template_300x50 = function() {             
			// Establish Method Name
            this.name = 'Mazda HTM5 DCO';			
            // Establish Script Details
            this.script = { name: 'sizmek_DCOHtml5_Template_300x50.js', version: '1.0.0' };
            // Track and Check Block Version - Version, Id, Title
			//this.blocks_init(1, '6175', 'HTML5 DCO Template Block');
            //Initializing button text variable
            var buttonText = '';
			
            // Call Init Method
			//var dataURL;
				//window.dataURL2;
            adkit.onReady(this.init.bind(this));
        };


        sizmek_Html5Template_300x50.prototype = {
            // Function That Creates Element Var
            d: function(id) { return document.getElementById(id); },
            
            // Handle Blocks Version Check and Tracking
		    blocks_init: function (ver, id, title) { 
		    	// Define Blocks API link and Block id
			    //var url = 'http://platform.mediamind.com/Eyeblaster.ACM.Web/Creative/Workshop/Blocks/VersionCheck.aspx?ID=' + id;
				// Create img tag
				//var img = document.createElement('img');
				// Set img src to Block API link
				//img.src = url; 	
		    },

            // Initialize DCO HTML5 template
     
		 init: function() {
				
                // initializing all variables 
				// First check the values from the config.js file and then check the default values
				//Initializing Heading Style Css
				this.frame1_txt = adkit.getSVData("frame1_txt");
				this.frame2_txt = adkit.getSVData("frame2_txt");
				this.frame3_txt = adkit.getSVData("frame3_txt");
				this.date_text = adkit.getSVData("date_text");
				this.cta_txt = adkit.getSVData("cta_txt");
				this.URL = adkit.getSVData("URL");
				
				var Standalone = adkit.getSVData("Standalone");
			 
		
				if (Standalone == "false") {  
					
                    //if false then set variables and start animation
                    this.SetVariables();
                  //  this.bannerAnimation();
                 // this.setData();
				    // Establish 	erence to this
                    var me = this;
					// Handle Ad Setup			
                    $("#mainContainer").click(function(event) {
                     //  me.setUpAd();
					 //window.open(this.clickUrl);
					// event.stopPropagation();
					 //EB.clickthrough("Click_Banner");
                    });

                }

                //If standalone is true then hide everything and display a Static Image
                if (Standalone == "true") {
                   // $('#wrapper').prepend('<img id="theImg" src="ref.jpg" />')
                }
            },

             // Function that Sets Elements  
            SetVariables: function() {

 
				//alert("hi");
			url = this.URL ;
			frame1_txt = this.frame1_txt;
			frame2_txt = this.frame2_txt;
			frame3_txt = this.frame3_txt;
			cta_txt = this.cta_txt;
		//	$("#content").css('background-image', "url("+this.bgImage+")");//.attr("name",this.defaultURL);	
			/*if(this.ctaText != "" && this.ctaText.trim() && this.ctaColor!= "")
			{
				$("#cta").html(this.ctaText);
				//alert("hi if");
				colorCode1 = this.ctaColor[0];
				colorCode2 = this.ctaColor[1];
				//UniversLTStd-Cn
				$("#cta").css('font-family','UniversLTStd-Cn');
				$("#cta").css('visibility','visible');
			}
			else{
				//alert("hi else");
				$("#cta").css('visibility','hidden');
			}*/
			
			
                //Remove Borders if 'border=false'
				initCanvas();
                if (this.border == "false") {
                   // $("#wrapper").css("border", "none");
                }

            
				
			}
			

 
        };