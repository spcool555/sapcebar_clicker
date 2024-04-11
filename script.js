
				$('body').keyup(function(event){
					if( event.keyCode === 32 ){
						
						if(!completed){
							if( timer > 0){
								
								if( started === false ){
									started = true;
									
									interval = setInterval(function(){
										timer--;
										$("#count").text( timer);
										if(timer === 0){
											completed = true;
											clearInterval(interval);
											
											$("#duration").attr("disabled", false);
											$("#setTime").attr("disabled", false);
										}
									}, 1000);
									
									$("#duration").attr("disabled", true);
									$("#setTime").attr("disabled", true);
								}
								hits++;
								$(".counter").text(hits);
							}else{
								hits++;
								$(".counter").text(hits);
							}
						}
					}
				});
				
				$('#setTime').click(function(){
					if( $("#duration").val() && $("#duration").val()>0 ){
						completed =  false;
						started = false;
						timer = $("#duration").val();
						$("#count").text(timer);
						
						hits = 0;
						$(".counter").text(hits);
					}else{
						$("#duration").val("");
					}
				});
				
				$('#restart').click(function(){
					$(".counter").text("0");
					$("#count").text("0");
					$("#duration").attr("disabled", false);
					$("#setTime").attr("disabled", false);
					$("#duration").val("");
					
					timer = 0;
					hits = 0;
					interval = null;
					started = false;
					completed = false;

			});
