
			function changeText(){
				var moreText = document.getElementById("remainingText");
				var btn = document.getElementById("btn");
				
				if(moreText.style.display == "none"){
					moreText.style.display = "inline";
					btn.innerHTML = "Show less."
					}
					else{
						moreText.style.display = "none";
						btn.innerHTML = "Show more."
					}
				}
				