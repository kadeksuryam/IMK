/*!
 * Copyright 2013 Justinmind. All rights reserved.
 */

(function(window, undefined) {
	
	
	var iphone_kb = {
		letters : [
			[ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p" ],
			[ "a", "s", "d", "f", "g", "h", "j", "k", "l" ],
			[ "shift", "z", "x", "c", "v", "b", "n", "m", "backspace" ], 
			[ "numbers", "space", "return" ] 
		],
		email: [
			[ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p" ],
			[ "a", "s", "d", "f", "g", "h", "j", "k", "l" ],
			[ "shift", "z", "x", "c", "v", "b", "n", "m", "backspace" ], 
			[ "numbers", "space", "&#64;", "&#46;", "return" ] 
		],
		url: [
			[ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p" ],
			[ "a", "s", "d", "f", "g", "h", "j", "k", "l" ],
			[ "shift", "z", "x", "c", "v", "b", "n", "m", "backspace" ], 
			[ "numbers", "&#46;", "&#47;", ".com", "return" ] 
		],
		numbers : [
			[ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ],
			[ "&#150;", "&#47;", "&#58;", "&#59;", "&#40;", "&#41;", "&#36;", "&#38;", "&#64;", "&#34;" ],
			[ "signs", "&#46;", "&#44;", "&#63;", "&#33;", "&#39;", "backspace" ],
			[ "letters", "space", "return" ]
		],
		signs: [
			[ "&#91;", "&#93;", "&#123;", "&#125;", "&#35;", "&#37;", "&#136;", "&#42;", "&#43;", "&#61;" ],
			[ "&#95;", "&#92;", "&#124;", "&#126;", "&#60;", "&#62;", "&#128;", "&#163;", "&#165;", "&#149;" ],
			[ "numbers", "&#46;", "&#44;", "&#63;", "&#33;", "&#39;", "backspace" ],
			[ "letters", "space", "return" ]
		]
	},
	months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
	daysCompressed = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ],
	monthsCompressed = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
	periods = [ "AM", "PM" ],
	input,
	initialInputValue,
	pressedTarget, 
	ddSize, currentMonth, currentWeekday, currentDay, currentYear,
	lastKeyboard = "#letters",
	dragStart=false;
	
	
	/*********************** START KEYBOARD METHODS ************************/
	
	function createKeyboard() {
		var key="";
		var html = '<div id='+controller.keyboardKey.substring(1) +' onselectstart="return false;">';
		$.each(iphone_kb, function(key, value) {
			if(jQuery("body.iphone5").length===0 || (jQuery("body.iphone5").length>0 && key != "url" && key != "email")) {
				html += ('<div id="' + key + '">');
				var kbname = key;
				$.each(this, function(key, value) {
					html += '<ul>';
					$.each(this, function(key, value) {
						if((kbname === "numbers" || kbname === "signs") && (value==="." || value==="," || value==="?" || value==="!" || value==="'"))
							html += ('<li class="' + value + ' .bubble"></li>');
						else if(kbname === "email" && (value==="&#64;" || value==="&#46;"))
							html += ('<li class="' + value + ' bubble"></li>');
						else if(kbname === "url" && (value==="&#46;" || value==="&#47;" || value===".com")) {
							if (value==="&#46;" || value==="&#47;")
								html += ('<li class="' + value + ' bubble"></li>');
							else if(value===".com")
								html += ('<li id="com" class="' + value + ' bubble"></li>');
						}
						else html += ('<li class="' + value + '"></li>');
					});
					html += '</ul>';
				});
				html += '</div>';
			}
		});
		html += '</div>';
		
		jQuery("#jim-container").append(html);
	}
	
	function bindKeyboard() {
		jQuery(controller.keyboardKey).on("mouseup", function(event, data) {
			var realTarget = event.target || event.srcElement;
			if (realTarget.tagName === "SPAN") {
				realTarget = jQuery(realTarget.parentElement.parentElement).context;
			}
			if (realTarget.tagName === "LI" && realTarget===pressedTarget) {
				var key = realTarget.className;
				if(key) {
					switch(key){
						case "letters":
							jQuery("#letters").css('display', 'none');
							jQuery("#numbers").css('display', 'none');
							jQuery("#signs").css('display', 'none');
							jQuery("#email").css('display', 'none');
							jQuery("#url").css('display', 'none');
							jQuery(lastKeyboard).css('display', 'block');
							deactivateSpecialKeys();
							break;
						case "numbers":
							jQuery("#numbers").css('display', 'block');
							jQuery("#signs").css('display', 'none');
							jQuery("#letters").css('display', 'none');
							jQuery("#email").css('display', 'none');
							jQuery("#url").css('display', 'none');
							deactivateSpecialKeys();
							break;
						case "signs":
							jQuery("#signs").css('display', 'block');							
							jQuery("#letters").css('display', 'none');
							jQuery("#email").css('display', 'none');
							jQuery("#url").css('display', 'none');						
							jQuery("#numbers").css('display', 'none');						
							deactivateSpecialKeys();
							break;
						default:
							changeValueByKeyboard(input, key);
							break;
					}
				}
			}
			jQuery(".divBubble").remove();
			jQuery(".divBubbleBig").remove();
		    jQuery(".divBubbleEmail").remove();
		    jQuery(".divBubbleUrl").remove();
		});
		
		jQuery(controller.keyboardKey).on("mousedown", function(event, data) {
			var realTarget = event.target || event.srcElement;
			pressedTarget = realTarget;
			if (realTarget.tagName === "LI") {
				var key = realTarget.className;
				if(key.indexOf(" ")>0)
					key=key.substring(0, key.indexOf(" "));
				switch(key) {
					case "space":
						jQuery(".space").removeClass("pressed").addClass("pressed");
						break;
					case "backspace":
						jQuery(".backspace").removeClass("pressed").addClass("pressed");
						break;
					case "return":
						jQuery(".return").removeClass("pressed").addClass("pressed");
						break;
					default:
						if(key.length===1 || key===".com") {
							var keyBubble = "",
							zoom = jimDevice.getZoom();
							if(jQuery("#email").css("display") === "block" && (key==="." || key==="@")) {
								var topPos = (jQuery(pressedTarget).position().top*zoom);
								var leftPos = (jQuery(pressedTarget).position().left*zoom);
								if(jimDevice.orientation()==="portrait") {
									if(jQuery("body.iphone6").length>0) {
										topPos -=73;
										leftPos-=26;
									}
									else if(jQuery("body.iphone6plus").length>0) {
										topPos -=83;
										leftPos-=30;
									}
									else if(jQuery("body.iphone5").length>0) {
										topPos -=65;
										leftPos-=23;
									}
								}
								else if(jimDevice.orientation()==="landscape") {
									if(jQuery("body.iphone6").length>0) {
										topPos -=72;
										leftPos-=15;
									}
									else if(jQuery("body.iphone6plus").length>0) {
										topPos -=70;
										leftPos-=16;
									}
									else if(jQuery("body.iphone5").length>0) {
										topPos -=71;
										leftPos-=19;
									}
								}
								var marginLeft = parseInt(jQuery(pressedTarget).css('margin-left'));
								keyBubble = "<div class='divBubbleEmail' ";
							}
							else if(jQuery("#url").css("display") === "block" && (key==="." || key==="/" || key===".com")) {
								var topPos = (jQuery(pressedTarget).position().top*zoom);
								var leftPos = (jQuery(pressedTarget).position().left*zoom);
								if(jimDevice.orientation()==="portrait") {
									if(jQuery("body.iphone6").length>0) {
										topPos -=72;
										leftPos-=18;
									}
									else if(jQuery("body.iphone6plus").length>0) {
										topPos -=83;
										leftPos-=23;
									}
									else if(jQuery("body.iphone5").length>0) {
										topPos -=65;
										leftPos-=23;
									}
								}
								else if(jimDevice.orientation()==="landscape") {
									if(jQuery("body.iphone6").length>0) {
										topPos -=74;
										leftPos-=28;
									}
									else if(jQuery("body.iphone6plus").length>0) {
										topPos -=74;
										leftPos-=27;
									}
									else if(jQuery("body.iphone5").length>0) {
										topPos -=71;
										leftPos-=19;
									}
								}
								var marginLeft = parseInt(jQuery(pressedTarget).css('margin-left'));
								keyBubble = "<div class='divBubbleUrl' ";
							}
							else if(key==="." || key==="," || key==="?" || key==="!" || key==="'") {
								var topPos = (jQuery(pressedTarget).position().top*zoom);
								var leftPos = (jQuery(pressedTarget).position().left*zoom);
								if(jimDevice.orientation()==="portrait") {
									if(jQuery("body.iphone6").length>0) {
										topPos -=71;
										leftPos-=22;
									}
									else if(jQuery("body.iphone6plus").length>0) {
										topPos -=83;
										leftPos-=26;
									}
									else if(jQuery("body.iphone5").length>0) {
										topPos -=65;
										leftPos-=23;
									}
								}
								else if(jimDevice.orientation()==="landscape") {
									if(jQuery("body.iphone6").length>0) {
										topPos -=70;
										leftPos-=16;
									}
									else if(jQuery("body.iphone6plus").length>0) {
										topPos -=70;
										leftPos-=16;
									}
									else if(jQuery("body.iphone5").length>0) {
										topPos -=71;
										leftPos-=19;
									}
								}
								var marginLeft = parseInt(jQuery(pressedTarget).css('margin-left'));
								keyBubble = "<div class='divBubbleBig' ";
							}
							else {
								var topPos = (jQuery(pressedTarget).position().top*zoom);
								var leftPos = (jQuery(pressedTarget).position().left*zoom);
								if(jimDevice.orientation()==="portrait") {
									if(jQuery("body.iphone6").length>0) {
										topPos -=72;
										leftPos-=23;
										if(key==="q" || key==="1" || key==="–" || key==="[" || key==="_")
											leftPos+=11;
										else if(key==="p" || key==="0" || key==="\"" || key==="=" || key==="•")
											leftPos-=20;
									}
									else if(jQuery("body.iphone6plus").length>0) {
										topPos -=83;
										leftPos-=25;
										if(key==="q" || key==="1" || key==="–" || key==="[" || key==="_")
											leftPos+=16;
										else if(key==="p" || key==="0" || key==="\"" || key==="=" || key==="•")
											leftPos-=17;
									}
									else if(jQuery("body.iphone5").length>0) {
										topPos -=66;
										leftPos-=20;
										if(key==="q" || key==="1" || key==="–" || key==="[" || key==="_")
											leftPos+=13;
										else if(key==="p" || key==="0" || key==="\"" || key==="=" || key==="•")
											leftPos-=13;
									}
								}
								else if(jimDevice.orientation()==="landscape") {
									if(jQuery("body.iphone6").length>0) {
										topPos -=70;
										leftPos-=14;
									}
									else if(jQuery("body.iphone6plus").length>0) {
										topPos -=70;
										leftPos-=14;
									}
									else if(jQuery("body.iphone5").length>0) {
										topPos -=71;
										leftPos-=20;
										if(key==="q" || key==="1" || key==="–" || key==="[" || key==="_")
											leftPos+=13;
										else if(key==="p" || key==="0" || key==="\"" || key==="=" || key==="•")
											leftPos-=15;
									}
								}
								var marginLeft = parseInt(jQuery(pressedTarget).css('margin-left'));
								keyBubble = "<div class='divBubble' ";
							}
							if(key != ".com") key = key.toUpperCase();
							keyBubble += " style='top: " + topPos + "px; left: " + leftPos + "px; margin-left:" + marginLeft +"px; position: absolute;'><span class='keyBubble'>" + key + "</span></div>";
							jQuery(pressedTarget).append(keyBubble);
						}
						break;
				}
				event.preventDefault();
			}
		});
		
		jQuery(controller.keyboardKey).on("dblclick", function(event, data) {
			if (event.target.tagName === "LI") {
				var key = event.target.className;
				if(key.indexOf(" ")>0)
					key=key.substring(0, key.indexOf(" "));
				if(key === "shift") {
					var hasCaps = jQuery(".shift.caps");
					var hasCapsLock = jQuery(".shift.capsLock");
					if(hasCaps.length>0)
						jQuery(".shift").removeClass("caps").addClass("capsLock");
					else if(hasCapsLock.length>0)
						jQuery(".shift").removeClass("capsLock");
					else 
						jQuery(".shift").addClass("capsLock");
				}
			}
		});
		
		jQuery(controller.keyboardKey).on("mouseleave", function(event, data) {
		  if(pressedTarget) {
			jQuery(".divBubble").remove();
		    jQuery(".divBubbleBig").remove();
		    jQuery(".divBubbleEmail").remove();
		    jQuery(".divBubbleUrl").remove();
		    pressedTarget=null;
		  }
		});
	}

	function deactivateSpecialKeys() {
		jQuery(".shift").removeClass("caps").removeClass("capsLock");
		jQuery(".space").removeClass("pressed");
		jQuery(".backspace").removeClass("pressed");
		jQuery(".return").removeClass("pressed");
	}

	function changeValueByKeyboard($target, newKey) {
		var action, type, oldValue = "", startPos=0;
	    type = $target.jimGetType();
		switch(type) {
		  case itemType.text:
		  case itemType.password:
			oldValue = $target.find("input").val();
			startPos = $target.find("input").caret().start;
			action = applyNewValue(oldValue, newKey, $target.find("input"));
			if(action.key==="return")
				$target.find("input").val(jimUtil.fromHTML(action.newValue));
			else $target.find("input").val(jimUtil.fromHTML(action.newValue)).caret({start: startPos+action.caretDespl, end:startPos+action.caretDespl});
			break;
		  case itemType.textarea:
			oldValue = $target.find("textarea").val();
			startPos = $target.find("textarea").caret().start;
			action = applyNewValue(oldValue, newKey, $target.find("textarea"));
			if(action.key==="return") 
				$target.find("textarea").val(jimUtil.fromHTML(action.newValue));
			else $target.find("textarea").val(jimUtil.fromHTML(action.newValue)).caret({start: startPos+action.caretDespl, end:startPos+action.caretDespl});
			break;
		}
		input.closest(".firer").trigger("keyup.jim", [{"preventTrigger": true, "altKey":false, "ctrlKey":false, "shiftKey":false, "which": (newKey.startsWith("return")) ? 13 : newKey.toLowerCase().charCodeAt(0)-32 }]);
	}

	function applyNewValue(oldValue, newKey, $target) {
		var newValue, hasCaps, beforeCaret, afterCaret, caretDespl;
		newValue=oldValue;
		hasCaps = jQuery(".shift.caps, .shift.capsLock");
		if(newKey.indexOf(" ")>0)
			newKey=newKey.substring(0, newKey.indexOf(" "));
		if(hasCaps.length>0 && newKey.length===1)
			newKey = newKey.toUpperCase();
			
		//calculate value before and after caret	
		beforeCaret = oldValue.substring(0, $target.caret().start);
		afterCaret = oldValue.substring($target.caret().end);
			
		switch(newKey) {
			case "space":
				newValue = beforeCaret + " " + afterCaret;
				jQuery(".space").removeClass("pressed");
				caretDespl = 1;
				break;
			case "backspace":
				newValue = (beforeCaret.length>0) ? beforeCaret.substring(0, beforeCaret.length-1) : "";
				newValue += afterCaret; 
				jQuery(".backspace").removeClass("pressed");
				caretDespl = -1;
				break;
			case "shift":
				if(hasCaps.length>0)
					jQuery(".shift").removeClass("caps").removeClass("capsLock");
				else jQuery(".shift").addClass("caps");
				caretDespl = 0;
				break;
			case "return":
				jQuery(controller.keyboardKey).hide("slide", { direction: "down" }, 300);
				deactivateSpecialKeys();
				if(initialInputValue!==newValue) {
					input.closest(".firer").trigger("change");
				}
				input.find("input:focus").blur();
				caretDespl = 0;
				break;
			case ".com":
				newValue = beforeCaret + newKey.toLowerCase() + afterCaret;
				jQuery(".shift").removeClass("caps");
				caretDespl = 4;
				break;
			default:
				newValue = beforeCaret + newKey + afterCaret;
				jQuery(".shift").removeClass("caps");
				caretDespl = 1;
				break;
		}
		
		return {newValue: newValue, caretDespl: caretDespl, key: newKey};
	}

	function setStartCaretPosition($target) {
		var endPos=0;
		type = $target.jimGetType();
		switch(type) {
		  case itemType.text:
		  case itemType.password:
			endPos = $target.find("input").val().length;
			$target.find("input").caret({start: endPos, end: endPos});
			break;
		  case itemType.textarea:
			endPos = $target.find("textarea").val().length;
			$target.find("textarea").caret({start: endPos, end: endPos});
			break;
		}
	}
	
	/*********************** END KEYBOARD METHODS ************************/
	
	/*********************** START DROPDOWN METHODS ************************/
	
	function createDropDown() {
		var html = "";
		if($.browser.msie)
			html = '<div id='+controller.dropdownKey.substring(1) +' onselectstart="return false;"><div id="jim-iphone-dd_controls"><div class="dd_controls-done">Done</div></div><div><div id="jim-iphone-dd_mask"></div><div id="jim-iphone-dd_options"><div class="dd_options"></div></div><div id="jim-iphone-dd_options_big"><div class="dd_options"></div></div></div></div>';
		else html = '<div id='+controller.dropdownKey.substring(1) +' onselectstart="return false;"><div id="jim-iphone-dd_controls"><div class="dd_controls-done">Done</div></div><div><div id="jim-iphone-dd_options"><div class="dd_options"></div></div><div id="jim-iphone-dd_options_big"><div class="dd_options"></div></div><div id="jim-iphone-dd_mask"></div></div></div>';
		jQuery("#jim-container").append(html);
		jQuery(controller.dropdownKey+' .dd_options').draggable({ axis: "y" });
	}
	
	function bindDropDown() {
		jQuery(controller.dropdownKey).on("mouseup", function(event, data) {
			var realTarget = event.target || event.srcElement,
			zoom = jimDevice.getZoom();
			if(dragStart) {
				dragStart = false;
				var topPos = 88,
				comPos = topPos,
				childHeight = parseInt(jQuery(".options").height()) + parseInt(jQuery(".options").css('padding-top')),
				i=0;
				
				if(parseInt(jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options").css('top'))*zoom>88) 
					topPos = 88;
				else {
					var calc = parseInt(jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options").css('top'))*zoom;
					for(i=0; i<jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options").children().length; i++) {
						var child = jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options").children()[i];
						if(calc<comPos+14 && calc+childHeight>comPos+14) {
							topPos -= (childHeight*i); 
							break;
						}
						calc += childHeight;
					}
					
					if(calc<comPos && topPos==comPos && i>0)
						topPos = comPos-(childHeight*(i-1));
				}
				
				jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options").animate({ "top" : topPos + "px", queue : false });
				jQuery(controller.dropdownKey+" #jim-iphone-dd_options_big .dd_options").animate({ "top" : topPos-comPos-1 + "px", queue : false });
				jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options .options").removeClass("pressed select");
				jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options :nth-child(" + parseInt(parseInt(i)+parseInt(1)) + ")").addClass("select");
			}
			else if (realTarget.tagName === "DIV" && !dragStart) {
				var key = realTarget.className;
				if(key) {
					if(key.indexOf(" ")>0)
						key=key.substring(0, key.indexOf(" "));
					switch(key) {
						case "dd_options":
							//case for IE on option without value
							if(jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options .pressed").position()===undefined)
								break;
						case "options":
							jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options .select").removeClass("select");
							var $target = jQuery("#jim-iphone-dd_options .dd_options .pressed");
							$target.removeClass("pressed").addClass("select");
							jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options").animate({ "top" : 88-($target.position().top*zoom) + "px", queue : false });
							jQuery(controller.dropdownKey+" #jim-iphone-dd_options_big .dd_options").animate({ "top" : 0-($target.position().top*zoom) + "px", queue : false });
							break;
						case "dd_controls-done":
							var currentPos = parseInt(jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options").css('top')),
							topPos = 88,
							childHeight = parseInt(jQuery(".options").height()) + parseInt(jQuery(".options").css('padding-top')),
							$target;
							for(var i=0; i<jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options").children().length; i++) {
								if(currentPos==topPos-(i*childHeight)) {
									$target = jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options .options:nth-child(" + parseInt(parseInt(i) + parseInt(1))  + ")");
									break;
								}
							}
							if($target) {
								jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options .select").removeClass("select");
								$target.removeClass("select").addClass("select");
								setDropDrownValue(input);
								var value = $target.text();
								if(initialInputValue!==value) {
									input.closest(".firer").trigger("change");
									initialInputValue = value;
								}
							}
							jQuery(".dd_controls-done").removeClass("pressed");
							jQuery(controller.dropdownKey).hide("slide", { direction: "down" }, 300);
							break;
						default:
							break;
					}
				}
			}
		});
		
		jQuery(controller.dropdownKey).on("mousedown", function(event, data) {
			var realTarget = event.target || event.srcElement;
			if (realTarget.tagName === "DIV" && !dragStart) {
				var key = event.target.className;
				if(key.indexOf(" ")>0)
					key=key.substring(0, key.indexOf(" "));
				switch(key) {
					case "options":
						var $target = jQuery(event.target).closest(".options"),
						$currentPressed = jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options .select");
						if($target[0]===$currentPressed[0]) {
							jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options .pressed").removeClass("pressed");
							$target.removeClass("pressed").addClass("pressed");
						}
						else {
							jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options .pressed").removeClass("pressed");
							$target.removeClass("pressed").addClass("pressed");			
						}
						break;					
					case "dd_controls-done":
						jQuery(".dd_controls-done").removeClass("pressed").addClass("pressed");
						jQuery(".nativedropdown").removeClass("pressed");
						break;
					default:
						break;
				}
				event.preventDefault();
			}
		});
		
		jQuery(controller.dropdownKey).on("dragstart", function(event, data) {
			if(jQuery(event.target).closest("#jim-iphone-dd_options").length>0 || jQuery(event.target).closest("#jim-iphone-dd_options_big").length>0) {
				dragStart = true;
			}
		});
		
		jQuery(controller.dropdownKey).on("drag", function(event, data) {
			if(dragStart) {
				var offset = jQuery(event.target).parent().parent().offset(),
				dd_width = parseInt(jQuery(event.target).parent().parent().css('width')),
				dd_height = parseInt(jQuery(event.target).parent().parent().css('height')),
				zoom = jimDevice.getZoom(),
				posX = event.pageX,
				posY = event.pageY;
				
				if(posY<offset.top) {
					event.preventDefault();
					var childHeight = parseInt(jQuery(".options").height()) + parseInt(jQuery(".options").css('padding-top'));
					jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options").animate({ "top" : -(childHeight*(ddSize-4))-16 +"px", queue:false });
					jQuery(controller.dropdownKey+" #jim-iphone-dd_options_big .dd_options").animate({ "top" : -(childHeight*(ddSize-4))-16-82 +"px", queue:false });
					dragStart=false;
				}
				else if(posY>offset.top+(dd_height/zoom)) {
					event.preventDefault();
					jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options").animate({ "top" : 88 + "px", queue:false });
					jQuery(controller.dropdownKey+" #jim-iphone-dd_options_big .dd_options").animate({ "top" : 0 + "px", queue:false });
					dragStart=false;
				}
				else {
					if(jQuery(controller.dropdownKey+" #jim-iphone-dd_options").attr('id') === jQuery(event.target).parent().attr('id'))
						jQuery(controller.dropdownKey+" #jim-iphone-dd_options_big .dd_options").css("top", parseInt(jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options").css('top'))-88 +"px");
					else jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options").css("top", parseInt(jQuery(controller.dropdownKey+" #jim-iphone-dd_options_big .dd_options").css('top'))+88 +"px");				
				}
			}
			
		});
		
	}
	
	function fillDropDownOptions($target) {
		var type = $target.jimGetType();
		jQuery(controller.dropdownKey+" .dd_options >").remove();
		switch(type) {
			case itemType.dropdown:
			case itemType.nativedropdown:
				var html = "";
				$holder = jQuery("#"+$target.attr("id"));
	            $options = $holder.find(".option");
	            ddSize = $options.length;
	            defaultValue = $target.find(".valign").children(".value").text();
	            var newOption, selectedPos=0;
	            for(i=0, iLen=ddSize; i<iLen; i++) {
	            	newOption = "<div class='options";
	            	if(defaultValue === jQuery($options[i]).text()) {
	            		selectedPos = i;
	            		newOption += " select'>" + jQuery($options[i]).text() + "</div>";		
	            	}
	            	else {
	            		newOption += "'>" + jQuery($options[i]).text() + "</div>";
	            	}
	            	html += newOption;
	            }
				jQuery(controller.dropdownKey+" .dd_options").append(html);
				
				var childHeight = parseInt(jQuery(".options").height()) + parseInt(jQuery(".options").css('padding-top'));
				jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options").animate({ "top" : -(selectedPos*childHeight) + 88 + "px", queue:false });
				jQuery(controller.dropdownKey+" #jim-iphone-dd_options_big .dd_options").animate({ "top" : -(selectedPos*childHeight) + 0 + "px", queue:false });
				
				break;
		}
	}
	
	function setDropDrownValue($target) {
		var type = $target.jimGetType();
		switch(type) {
			case itemType.dropdown:
			case itemType.nativedropdown:
				$options = $target.children(".dropdown-options").children(".option").removeClass("select").removeAttr("select");
				var value = jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options .options.select").text();
				for(o=0, oLen=$options.length; o<oLen; o+=1) {
				  option = $options[o];
				  if(option.textContent === value || option.innerText === value) {
				    jQuery(option).addClass("select");
				    jQuery(option).attr("selected","selected");
				    $target.find(".value").html(jimUtil.toHTML(value));
				    return false;
				  }
				}
				break;
		}
	}
	
	/*********************** END DROPDOWN METHODS ************************/
	
	/*********************** START DATE METHODS ************************/
	
	function createDate() {
		var html = "";
		if($.browser.msie)
			html = '<div id='+controller.dateKey.substring(1)+'><div id="jim-iphone-da_controls"><div class="da_controls-clear">Clear</div><div class="da_controls-done">Done</div></div><div><div class="jim-iphone-da_mask"></div><div id="jim-iphone-da_options"><div class="da_months"></div><div class="da_days"></div><div class="da_years"></div></div><div id="jim-iphone-da_options_big"><div class="da_months"></div><div class="da_days"></div><div class="da_years"></div></div></div></div>';
		else html = '<div id='+controller.dateKey.substring(1)+'><div id="jim-iphone-da_controls"><div class="da_controls-clear">Clear</div><div class="da_controls-done">Done</div></div><div><div id="jim-iphone-da_options"><div class="da_months"></div><div class="da_days"></div><div class="da_years"></div></div><div id="jim-iphone-da_options_big"><div class="da_months"></div><div class="da_days"></div><div class="da_years"></div></div><div class="jim-iphone-da_mask"></div></div></div>';
		jQuery("#jim-container").append(html);
		
		jQuery(controller.dateKey+' .da_months').draggable({ 
			axis: "y",
			drag: function(evt, ui) { correctDragDateWithZoom(evt, ui) }
		});
		jQuery(controller.dateKey+' .da_days').draggable({ 
			axis: "y",
			drag: function(evt, ui) { correctDragDateWithZoom(evt, ui) }
		});
		jQuery(controller.dateKey+' .da_years').draggable({ 
			axis: "y",
			drag: function(evt, ui) { correctDragDateWithZoom(evt, ui) }
		});
	}
	
	function bindDate() {
		bindDays();
		bindMonths();
		bindYears();
	}
	
	/** CONTROLS **/
	function bindDateControls() {
		jQuery(controller.dateKey).on("mouseup", function(event, data) {
			var realTarget = event.target || event.srcElement;
			if (realTarget.tagName === "DIV" && !dragStart) {
				var key = realTarget.className;
				if(key) {
					if(key.indexOf(" ")>0)
						key=key.substring(0, key.indexOf(" "));
					switch(key) {
						case "da_controls-clear":
							jQuery("#jim-iphone-da_controls .da_controls-clear").removeClass("pressed");
							input.find("input").val("");
							if(initialInputValue!=="") {
								input.closest(".firer").trigger("change");
								initialInputValue = "";
							}
							break;
						case "da_controls-done":
							jQuery("#jim-iphone-da_controls .da_controls-done").removeClass("pressed");
							jQuery(controller.dateKey).hide("slide", { direction: "down" }, 300);
							input.find("input").blur();
							break;
						default:
							break;
					}
				}
			}
		});
		
		jQuery(controller.dateKey).on("mousedown", function(event, data) {
			var realTarget = event.target || event.srcElement;
			if (realTarget.tagName === "DIV" && !dragStart) {
				var key = realTarget.className;
				if(key.indexOf(" ")>0)
					key=key.substring(0, key.indexOf(" "));
				switch(key) {
					case "da_controls-clear":
					case "da_controls-done":
						jQuery(event.target).removeClass("pressed").addClass("pressed");
						break;
					default:
						break;
				}
				event.preventDefault();
			}
		});
	}
	
	/** DAYS **/
	function bindDays() {
		jQuery(controller.dateKey+" .da_days").on("mouseup", function(event, data) {
			if(dragStart) {
				dragStart = false;
				var topPos = 210, topPosBig = 302;				
				var ddTop = parseInt(jQuery("#jim-iphone-da_options .da_days").css('top'));
				if((ddTop+topPos)>14) {
					var offset = -topPos-ddTop-14;
					var despl = parseInt(offset/29);
					jQuery("#jim-iphone-da_options_big .da_days").animate({'top' : -topPosBig-(despl*29) + 'px', queue : false });
					jQuery("#jim-iphone-da_options .da_days").animate({'top' : -topPos-(despl*29) + 'px', queue : false }, function() {
						restoreDefaultDADays(despl);
						jQuery("#jim-iphone-da_options .da_days").css('top', -topPos + 'px');
						jQuery("#jim-iphone-da_options_big .da_days").css('top', -topPosBig + 'px');
						autoCorrectDate();
					});
				}
				else if((ddTop+topPos)<-14) {
					var offset = -topPos-ddTop+14;
					var despl = parseInt(offset/29);
					jQuery("#jim-iphone-da_options_big .da_days").animate({'top' : -topPosBig-(despl*29) + 'px', queue : false });
					jQuery("#jim-iphone-da_options .da_days").animate({'top' : -topPos-(despl*29) + 'px', queue : false }, function() {
						restoreDefaultDADays(despl);
						jQuery("#jim-iphone-da_options .da_days").css('top', -topPos + 'px');
						jQuery("#jim-iphone-da_options_big .da_days").css('top', -topPosBig + 'px');
						autoCorrectDate();
					});
				}
				else {
					jQuery("#jim-iphone-da_options_big .da_days").animate({'top' : -topPosBig + 'px', queue : false });
					jQuery("#jim-iphone-da_options .da_days").animate({'top': -topPos + 'px', queue : false }, function() {
						setDateValue();
					});
				}
			}
		});
		
		jQuery(controller.dateKey+' .da_days').on('dragstart', function(event, data) {
			topP = data.position.top;
			originalTop = data.originalPosition.top;
			dragStart = true;		
		});
		
		jQuery(controller.dateKey+' .da_days').on('drag', function(event, data) {
			if(dragStart) {
				topP = data.position.top;

				var offset = jQuery(event.target).parent().parent().offset(),
				dd_height = parseInt(jQuery(event.target).parent().parent().css('height')),
				zoom = jimDevice.getZoom(),
				posX = event.pageX,
				posY = event.pageY;
				
				if(posY<offset.top) {
					event.preventDefault();
					jQuery("#jim-iphone-da_options .da_days").trigger('mouseup');
				}
				else if(posY>offset.top+(dd_height/zoom)) {
					event.preventDefault();
					jQuery("#jim-iphone-da_options .da_days").trigger('mouseup');
				}
				else {
					if(jQuery("#jim-iphone-da_options").attr('id') === jQuery(event.target).parent().attr('id'))
						jQuery("#jim-iphone-da_options_big .da_days").css("top", parseInt(jQuery("#jim-iphone-da_options .da_days").css('top'))-92 +"px");
					else jQuery("#jim-iphone-da_options .da_days").css("top", parseInt(jQuery("#jim-iphone-da_options_big .da_days").css('top'))+92 +"px");				
				}
				
			}
			else event.preventDefault();
			
		});
	}

	function autoCorrectDate() {
		var disabled = jQuery("#jim-iphone-da_options .da_days :nth-child(11)").hasClass("disabled");
		
		if(disabled) {
			moveDigits(jQuery("#jim-iphone-da_options .da_days :nth-child(11)"));
		}
		else setDateValue();
	}

	function moveDigits(disabledSelected) {
		var day = parseInt(disabledSelected.text());
		var disabledDays = 1;
		for(var i=11;i<=12;i++) {
			if(jQuery("#jim-iphone-da_options .da_days :nth-child(" + (jQuery("#jim-iphone-da_options .da_days").children().length-i) +")").hasClass("disabled"))
				disabledDays++;
		}
		
		var topPos = 210, topPosBig = 302;
		jQuery("#jim-iphone-da_options_big .da_days").animate({'top' : -topPosBig+(29*disabledDays)+'px', queue : false });
		jQuery("#jim-iphone-da_options .da_days").animate({'top' : -topPos+(29*disabledDays)+'px', queue : false }, function() {
			restoreDefaultDADays(-disabledDays);
			setDateValue();
		});
	}

	function restoreDefaultDADays(offset) {
		var firstDay = parseInt(jQuery("#jim-iphone-da_options .da_days :first-child").text(), 10),
		newStartDay = firstDay+offset;
		
		resetDADays(jQuery("#jim-iphone-da_options .da_days").children(), firstDay, newStartDay);
		resetDADays(jQuery("#jim-iphone-da_options_big .da_days").children(), firstDay, newStartDay);

		checkDate();
		var topPos = 210, topPosBig = 302;		
		jQuery("#jim-iphone-da_options .da_days").css('top', -topPos + 'px');
		jQuery("#jim-iphone-da_options_big .da_days").css('top', -topPosBig + 'px');

	}
	
	function resetDADays(currentDayList, firstDay, newStartDay) {
		for(var i=0; i<currentDayList.length; i++) {
			var item = jQuery(currentDayList[i]);
			var value = (newStartDay + i);
			value = (value+31)%31;
			if(value==0) value=31;
			var oldValue = (firstDay + i)
			oldValue = (oldValue+31)%31;
			if(oldValue==0) oldValue=31;
			
			
			item.removeClass("day" + oldValue);
			item.removeClass("disabled");
			item.addClass("day" + value);
			item.text(value);
		}
	}

	function checkDate() {
		var month = jQuery("#jim-iphone-da_options .da_months :nth-child(11)").text();
		var day = parseInt(jQuery("#jim-iphone-da_options .da_days :nth-child(11)").text(), 10);
		var year = parseInt(jQuery("#jim-iphone-da_options .da_years :nth-child(11)").text());
		jQuery("#jim-iphone-da_options .days").removeClass("disabled");
		
		monthPos = jQuery.inArray(month, months);
		if(monthPos<7 && monthPos%2===1) {
			jQuery("#jim-iphone-da_options .day31").addClass("disabled");
		}
		else if(monthPos>=7 && monthPos%2===0) {
			jQuery("#jim-iphone-da_options .day31").addClass("disabled");
		}
		
		if(month==="February") {
			jQuery("#jim-iphone-da_options .day30").addClass("disabled");
		}
		
		if(year%4!==0 && month==="February") {
			jQuery("#jim-iphone-da_options .day29").addClass("disabled");
		}
	}

	/** MONTHS **/
	function bindMonths() {
		jQuery(controller.dateKey+" .da_months").on("mouseup", function(event, data) {
			if(dragStart) {
				dragStart = false;
				var topPos = 210, topPosBig = 302;				
				var ddTop = parseInt(jQuery("#jim-iphone-da_options .da_months").css('top'));
				if((ddTop+topPos)>14) {
					var offset = -topPos-ddTop-14;
					var despl = parseInt(offset/29);
					jQuery("#jim-iphone-da_options_big .da_months").animate({'top' : -topPosBig-(despl*29) + 'px', queue : false });
					jQuery("#jim-iphone-da_options .da_months").animate({'top' : -topPos-(despl*29) + 'px', queue : false }, function() {
						restoreDefaultDAMonths(despl);
						jQuery("#jim-iphone-da_options .da_months").css('top', -topPos + 'px');
						jQuery("#jim-iphone-da_options_big .da_months").css('top', -topPosBig + 'px');
						autoCorrectDate();
					});
				}
				else if((ddTop+topPos)<-14) {
					var offset = -topPos-ddTop+14;
					var despl = parseInt(offset/29);
					jQuery("#jim-iphone-da_options_big .da_months").animate({'top' : -topPosBig-(despl*29) + 'px', queue : false });
					jQuery("#jim-iphone-da_options .da_months").animate({'top' : -topPos-(despl*29) + 'px', queue : false }, function() {
						restoreDefaultDAMonths(despl);
						jQuery("#jim-iphone-da_options .da_months").css('top', -topPos + 'px');
						jQuery("#jim-iphone-da_options_big .da_months").css('top', -topPosBig + 'px');
						autoCorrectDate();
					});
				}
				else {
					jQuery("#jim-iphone-da_options_big .da_months").animate({'top' : -topPosBig + 'px', queue : false });
					jQuery("#jim-iphone-da_options .da_months").animate({'top': -topPos + 'px', queue : false }, function() {
						setDateValue();
					});
				}
			}
		});

		jQuery(controller.dateKey+' .da_months').on('dragstart', function(event, data) {
			topP = data.position.top;
			originalTop = data.originalPosition.top;
			dragStart = true;		
		});
		
		jQuery(controller.dateKey+' .da_months').on('drag', function(event, data) {
			if(dragStart) {
				topP = data.position.top;
				
				var offset = jQuery(event.target).parent().parent().offset(),
				dd_height = parseInt(jQuery(event.target).parent().parent().css('height')),
				zoom = jimDevice.getZoom(),
				posX = event.pageX,
				posY = event.pageY;
				
				if(posY<offset.top) {
					event.preventDefault();
					jQuery("#jim-iphone-da_options .da_months").trigger('mouseup');
				}
				else if(posY>offset.top+(dd_height/zoom)) {
					event.preventDefault();
					jQuery("#jim-iphone-da_options .da_months").trigger('mouseup');
				}
				else {
					if(jQuery("#jim-iphone-da_options").attr('id') === jQuery(event.target).parent().attr('id'))
						jQuery("#jim-iphone-da_options_big .da_months").css("top", parseInt(jQuery("#jim-iphone-da_options .da_months").css('top'))-92 +"px");
					else jQuery("#jim-iphone-da_options .da_months").css("top", parseInt(jQuery("#jim-iphone-da_options_big .da_months").css('top'))+92 +"px");
				}
				
			}
			else event.preventDefault();
			
		});
	}

	function restoreDefaultDAMonths(offset) {
		var firstMonth = jQuery("#jim-iphone-da_options .da_months :first-child").text(),
		newStartMonth = jQuery.inArray(firstMonth, months)+offset,
		oldStartMonth = jQuery.inArray(firstMonth, months);
		
		resetDAMonths(jQuery("#jim-iphone-da_options .da_months").children(), newStartMonth, oldStartMonth);
		resetDAMonths(jQuery("#jim-iphone-da_options_big .da_months").children(), newStartMonth, oldStartMonth);

		checkDate();
		var topPos = 210, topPosBig = 302;		
		jQuery("#jim-iphone-da_options .da_months").css('top', -topPos + 'px');
		jQuery("#jim-iphone-da_options_big .da_months").css('top', -topPosBig + 'px');
	}
	
	function resetDAMonths(currentMonthList, newStartMonth, oldStartMonth) {
		for(var i=0; i<currentMonthList.length; i++) {
			var item = jQuery(currentMonthList[i]);
			var value = (newStartMonth + i);
			value = (value+12)%12;
			if(value==12) value=0;
			var oldValue = (oldStartMonth + i)
			oldValue = (oldValue+12)%12;
			if(oldValue==12) oldValue=0;
			
			item.removeClass("month" + oldValue);
			item.addClass("month" + value);
			item.text(months[value]);
		}
	}

	/** YEARS **/
	function bindYears() {
		jQuery(controller.dateKey+" .da_years").on("mouseup", function(event, data) {
			if(dragStart) {
				dragStart = false;
				var topPos = 210, topPosBig = 302;				
				var ddTop = parseInt(jQuery("#jim-iphone-da_options .da_years").css('top'));
				if((ddTop+topPos)>14) {
					var offset = -topPos-ddTop-14;
					var despl = parseInt(offset/29);
					jQuery("#jim-iphone-da_options_big .da_years").animate({'top' : -topPosBig-(despl*29) + 'px', queue : false });
					jQuery("#jim-iphone-da_options .da_years").animate({'top' : -topPos-(despl*29) + 'px', queue : false }, function() {
						restoreDefaultDAYears(despl);
						jQuery("#jim-iphone-da_options .da_years").css('top', -topPos + 'px');
						jQuery("#jim-iphone-da_options_big .da_years").css('top', -topPosBig + 'px');
						autoCorrectDate();
					});
				}
				else if((ddTop+topPos)<-14) {
					var offset = -topPos-ddTop+14;
					var despl = parseInt(offset/29);
					jQuery("#jim-iphone-da_options_big .da_years").animate({'top' : -topPosBig-(despl*29) + 'px', queue : false });
					jQuery("#jim-iphone-da_options .da_years").animate({'top' : -topPos-(despl*29) + 'px', queue : false }, function() {
						restoreDefaultDAYears(despl);
						jQuery("#jim-iphone-da_options .da_years").css('top', -topPos + 'px');
						jQuery("#jim-iphone-da_options_big .da_years").css('top', -topPosBig + 'px');
						autoCorrectDate();
					});
				}
				else {
					jQuery("#jim-iphone-da_options_big .da_years").animate({'top' : -topPosBig + 'px', queue : false });
					jQuery("#jim-iphone-da_options .da_years").animate({'top': -topPos + 'px', queue : false }, function() {
						setDateValue();
					});
				}
			}
		});
		
		jQuery(controller.dateKey+' .da_years').on('dragstart', function(event, data) {
			topP = data.position.top;
			originalTop = data.originalPosition.top;
			dragStart = true;		
		});
		
		jQuery(controller.dateKey+' .da_years').on('drag', function(event, data) {
			if(dragStart) {
				topP = data.position.top;
				
				var offset = jQuery(event.target).parent().parent().offset(),
				dd_height = parseInt(jQuery(event.target).parent().parent().css('height')),
				zoom = jimDevice.getZoom(),
				posX = event.pageX,
				posY = event.pageY;
				
				if(posY<offset.top) {
					event.preventDefault();
					jQuery("#jim-iphone-da_options .da_years").trigger('mouseup');
				}
				else if(posY>offset.top+(dd_height/zoom)) {
					event.preventDefault();
					jQuery("#jim-iphone-da_options .da_years").trigger('mouseup');
				}
				else {
					if(jQuery("#jim-iphone-da_options").attr('id') === jQuery(event.target).parent().attr('id'))
						jQuery("#jim-iphone-da_options_big .da_years").css("top", parseInt(jQuery("#jim-iphone-da_options .da_years").css('top'))-92 +"px");
					else jQuery("#jim-iphone-da_options .da_years").css("top", parseInt(jQuery("#jim-iphone-da_options_big .da_years").css('top'))+92 +"px");
				}
				
			}
			else event.preventDefault();
			
		});
	}

	function restoreDefaultDAYears(offset) {
		var firstYear = parseInt(jQuery("#jim-iphone-da_options .da_years :first-child").text()),
		newStartYear = firstYear+offset;
		
		resetDAYears(jQuery("#jim-iphone-da_options .da_years").children(), firstYear, newStartYear);
		resetDAYears(jQuery("#jim-iphone-da_options_big .da_years").children(), firstYear, newStartYear);

		checkDate();
		var topPos = 210, topPosBig = 302;
		jQuery("#jim-iphone-da_options .da_years").css('top', -topPos + 'px');
		jQuery("#jim-iphone-da_options_big .da_years").css('top', -topPosBig + 'px');
	}
	
	function resetDAYears(currentYearList, firstYear, newStartYear) {
		for(var i=0; i<currentYearList.length; i++) {
			var item = jQuery(currentYearList[i]);
			var value = (newStartYear + i);
			var oldValue = (firstYear + i)
			
			item.removeClass("year" + oldValue);
			item.addClass("year" + value);
			item.text(value);
		}
	}

	function fillDate() {
		var currentMonth, currentDay, currentYear, html = "";
		var currentValue = input.find("input").val();
		var inputDateFormat = input.attr("format");
		if(currentValue==="") {
			var currentDate = new Date();
			currentMonth = currentDate.getMonth();
			currentDay = currentDate.getDate();
			currentYear = currentDate.getFullYear();
		}
		else {
			var parsedDate = parse(currentValue, inputDateFormat, new Date());
			currentMonth = parsedDate.getMonth();
			currentDay = parsedDate.getDate();
			currentYear = parsedDate.getFullYear();
		}
		
		//months
		for(var i=currentMonth-10;i<=currentMonth+10;i++) {
			var val = i;
			val = (val+12)%12;
			if(val===12) val=0;
			html += "<div class='months month" + val + "'>" + months[val] + "</div>";
		}
		jQuery(controller.dateKey+" .da_months").html(html);
		
		//days
		html = "";
		for(var i=currentDay-10;i<=currentDay+10;i++) {
			var val = i;
			val = (val+31)%31;
			if(val===0) val=31;
			html += "<div class='days day" + val + "'>" + val + "</div>"; 
		}
		jQuery(controller.dateKey+" .da_days").html(html);
		
		//years
		html = "";
		for(var i=currentYear-10;i<=currentYear+10;i++) {
			var val = i;
			html += "<div class='years year" + val + "'>" + val + "</div>"; 
		}
		jQuery(".da_years").html(html);
		
		checkDate();
		setDateValue();
	}
	
	function setDateValue() {
		var month = jQuery("#jim-iphone-da_options .da_months :nth-child(11)").text(),
		day = parseInt(jQuery("#jim-iphone-da_options .da_days :nth-child(11)").text()),
		year = parseInt(jQuery("#jim-iphone-da_options .da_years :nth-child(11)").text());

		var date = new Date(Date.parse(month +" "+day+", "+year));
		var inputDateFormat = "MM/dd/yyyy";
		
		try {
			input.find("input").val(jimUtil.fromHTML(format(date, inputDateFormat)));
			input.trigger("parsedate");
		} catch (error) {}
	}
	
	/*********************** END DATE METHODS ************************/
	
	/*********************** START TIME METHODS ************************/
	
	function createTime() {
		var html = "";
		if($.browser.msie)
			html = '<div id='+controller.timeKey.substring(1)+'><div id="jim-iphone-ti_controls"><div class="ti_controls-clear">Clear</div><div class="ti_controls-done">Done</div></div><div><div class="jim-iphone-ti_mask"></div><div id="jim-iphone-ti_options"><div class="ti_hours"></div><div class="ti_minutes"></div><div class="ti_periods"></div></div><div id="jim-iphone-ti_options_big"><div class="ti_hours"></div><div class="ti_minutes"></div><div class="ti_periods"></div></div></div></div>';
		else html = '<div id='+controller.timeKey.substring(1)+'><div id="jim-iphone-ti_controls"><div class="ti_controls-clear">Clear</div><div class="ti_controls-done">Done</div></div><div><div id="jim-iphone-ti_options"><div class="ti_hours"></div><div class="ti_minutes"></div><div class="ti_periods"></div></div><div id="jim-iphone-ti_options_big"><div class="ti_hours"></div><div class="ti_minutes"></div><div class="ti_periods"></div></div><div class="jim-iphone-ti_mask"></div></div></div>';
		jQuery("#jim-container").append(html);
		
		jQuery(controller.timeKey+' .ti_hours').draggable({ 
			axis: "y",
			drag: function(evt, ui) { correctDragDateWithZoom(evt, ui) }
		});
		jQuery(controller.timeKey+' .ti_minutes').draggable({ 
			axis: "y",
			drag: function(evt, ui) { correctDragDateWithZoom(evt, ui) }
		});
		jQuery(controller.timeKey+' .ti_periods').draggable({ axis: "y" });
	}
	
	function bindTime() {
		bindTimeHours();
		bindTimeMinutes();
		bindTimePeriods();
	}
	
	/** CONTROLS **/
	function bindTimeControls() {
		jQuery(controller.timeKey).on("mouseup", function(event, data) {
			var realTarget = event.target || event.srcElement;
			if (realTarget.tagName === "DIV" && !dragStart) {
				var key = realTarget.className;
				if(key) {
					if(key.indexOf(" ")>0)
						key=key.substring(0, key.indexOf(" "));
					switch(key) {
						case "ti_controls-clear":
							jQuery("#jim-iphone-ti_controls .ti_controls-clear").removeClass("pressed");
							clearTimeValue(input);
							break;
						case "ti_controls-done":
							jQuery("#jim-iphone-ti_controls .ti_controls-done").removeClass("pressed");
							jQuery(controller.timeKey).hide("slide", { direction: "down" }, 300);
							input.find("input").blur();
							break;
						default:
							break;
					}
				}
			}
		});
		
		jQuery(controller.timeKey).on("mousedown", function(event, data) {
			var realTarget = event.target || event.srcElement;
			if (realTarget.tagName === "DIV" && !dragStart) {
				var key = realTarget.className;
				if(key.indexOf(" ")>0)
					key=key.substring(0, key.indexOf(" "));
				switch(key) {
					case "ti_controls-clear":
					case "ti_controls-done":
						jQuery(event.target).removeClass("pressed").addClass("pressed");
						break;
					default:
						break;
				}
				event.preventDefault();
			}
		});
	}
	
	/** HOURS **/
	function bindTimeHours() {
		jQuery(controller.timeKey+" .ti_hours").on("mouseup", function(event, data) {
			if(dragStart) {
				dragStart = false;
				var topPos = 210, topPosBig = 302;				
				var ddTop = parseInt(jQuery("#jim-iphone-ti_options .ti_hours").css('top'));
				if((ddTop+topPos)>14) {
					var offset = -topPos-ddTop-14;
					var despl = parseInt(offset/29);
					jQuery("#jim-iphone-ti_options_big .ti_hours").animate({'top' : -topPosBig-(despl*29) + 'px', queue : false });
					jQuery("#jim-iphone-ti_options .ti_hours").animate({'top' : -topPos-(despl*29) + 'px', queue : false }, function() {
						restoreDefaultTIHours(despl);
						jQuery("#jim-iphone-ti_options .ti_hours").css('top', -topPos + 'px');
						jQuery("#jim-iphone-ti_options_big .ti_hours").css('top', -topPosBig + 'px');
						setTimeValue(input);
					});
				}
				else if((ddTop+topPos)<-14) {
					var offset = -topPos-ddTop+14;
					var despl = parseInt(offset/29);
					jQuery("#jim-iphone-ti_options_big .ti_hours").animate({'top' : -topPosBig-(despl*29) + 'px', queue : false });
					jQuery("#jim-iphone-ti_options .ti_hours").animate({'top' : -topPos-(despl*29) + 'px', queue : false }, function() {
						restoreDefaultTIHours(despl);
						jQuery("#jim-iphone-ti_options .ti_hours").css('top', -topPos + 'px');
						jQuery("#jim-iphone-ti_options_big .ti_hours").css('top', -topPosBig + 'px');
						setTimeValue(input);
					});
				}
				else {
					jQuery("#jim-iphone-ti_options_big .ti_hours").animate({'top' : -topPosBig + 'px', queue : false });
					jQuery("#jim-iphone-ti_options .ti_hours").animate({'top': -topPos + 'px', queue : false }, function() {
						setTimeValue(input);
					});
				}
			}
		});

		jQuery(controller.timeKey+' .ti_hours').on('dragstart', function(event, data) {
			topP = data.position.top;
			originalTop = data.originalPosition.top;
			dragStart = true;		
		});
		
		jQuery(controller.timeKey+' .ti_hours').on('drag', function(event, data) {
			if(dragStart) {
				topP = data.position.top;
				
				var offset = jQuery(event.target).parent().parent().offset(),
				dd_height = parseInt(jQuery(event.target).parent().parent().css('height')),
				zoom = jimDevice.getZoom(),
				posX = event.pageX,
				posY = event.pageY;
				
				if(posY<offset.top) {
					event.preventDefault();
					jQuery("#jim-iphone-ti_options .ti_hours").trigger('mouseup');
				}
				else if(posY>offset.top+(dd_height/zoom)) {
					event.preventDefault();
					jQuery("#jim-iphone-ti_options .ti_hours").trigger('mouseup');
				}
				else {
					if(jQuery("#jim-iphone-ti_options").attr('id') === jQuery(event.target).parent().attr('id'))
						jQuery("#jim-iphone-ti_options_big .ti_hours").css("top", parseInt(jQuery("#jim-iphone-ti_options .ti_hours").css('top'))-92 +"px");
					else jQuery("#jim-iphone-ti_options .ti_hours").css("top", parseInt(jQuery("#jim-iphone-ti_options_big .ti_hours").css('top'))+92 +"px");
				}
				
			}
			else event.preventDefault();
			
		});
	}
	
	function restoreDefaultTIHours(offset) {
		var firstHour = parseInt(jQuery("#jim-iphone-ti_options .ti_hours :first-child").text(), 10),
		newStartHour = firstHour+offset;
		
		resetTIHours(jQuery("#jim-iphone-ti_options .ti_hours").children(), firstHour, newStartHour);
		resetTIHours(jQuery("#jim-iphone-ti_options_big .ti_hours").children(), firstHour, newStartHour);
		
		var topPos = 210, topPosBig = 302;
		jQuery("#jim-iphone-ti_options .ti_hours").css('top', -topPos + 'px');
		jQuery("#jim-iphone-ti_options_big .ti_hours").css('top', -topPosBig + 'px');
	}
	
	function resetTIHours(currentHourList, firstHour, newStartHour) {
		for(var i=0; i<currentHourList.length; i++) {
			var item = jQuery(currentHourList[i]);
			var value = (newStartHour + i + 12)%12;
			if(value===0) value=12;
			var oldValue = (firstHour + i + 12)%12;
			if(oldValue===0) oldValue=12;
			
			item.removeClass("hour" + oldValue);
			item.addClass("hour" + value);
			item.text(value);
		}
	}
	
	/** MINUTES **/
	function bindTimeMinutes() {
		jQuery(controller.timeKey+" .ti_minutes").on("mouseup", function(event, data) {
			if(dragStart) {
				dragStart = false;
				var topPos = 210, topPosBig = 302;				
				var ddTop = parseInt(jQuery("#jim-iphone-ti_options .ti_minutes").css('top'));
				if((ddTop+topPos)>14) {
					var offset = -topPos-ddTop-14;
					var despl = parseInt(offset/29);
					jQuery("#jim-iphone-ti_options_big .ti_minutes").animate({'top' : -topPosBig-(despl*29) + 'px', queue : false });
					jQuery("#jim-iphone-ti_options .ti_minutes").animate({'top' : -topPos-(despl*29) + 'px', queue : false }, function() {
						restoreDefaultTIMinutes(despl);
						jQuery("#jim-iphone-ti_options .ti_minutes").css('top', -topPos + 'px');
						jQuery("#jim-iphone-ti_options_big .ti_minutes").css('top', -topPosBig + 'px');
						setTimeValue(input);
					});
				}
				else if((ddTop+topPos)<-14) {
					var offset = -topPos-ddTop+14;
					var despl = parseInt(offset/29);
					jQuery("#jim-iphone-ti_options_big .ti_minutes").animate({'top' : -topPosBig-(despl*29) + 'px', queue : false });
					jQuery("#jim-iphone-ti_options .ti_minutes").animate({'top' : -topPos-(despl*29) + 'px', queue : false }, function() {
						restoreDefaultTIMinutes(despl);
						jQuery("#jim-iphone-ti_options .ti_minutes").css('top', -topPos + 'px');
						jQuery("#jim-iphone-ti_options_big .ti_minutes").css('top', -topPosBig + 'px');
						setTimeValue(input);
					});
				}
				else {
					jQuery("#jim-iphone-ti_options_big .ti_minutes").animate({'top' : -topPosBig + 'px', queue : false });
					jQuery("#jim-iphone-ti_options .ti_minutes").animate({'top': -topPos + 'px', queue : false }, function() {
						setTimeValue(input);
					});
				}
			}
		});

		jQuery(controller.timeKey+" .ti_minutes").on('dragstart', function(event, data) {
			topP = data.position.top;
			originalTop = data.originalPosition.top;
			dragStart = true;		
		});
		
		jQuery(controller.timeKey+" .ti_minutes").on('drag', function(event, data) {
			if(dragStart) {
				topP = data.position.top;
				
				var offset = jQuery(event.target).parent().parent().offset(),
				dd_height = parseInt(jQuery(event.target).parent().parent().css('height')),
				zoom = jimDevice.getZoom(),
				posX = event.pageX,
				posY = event.pageY;
				
				if(posY<offset.top) {
					event.preventDefault();
					jQuery("#jim-iphone-ti_options .ti_minutes").trigger('mouseup');
				}
				else if(posY>offset.top+(dd_height/zoom)) {
					event.preventDefault();
					jQuery("#jim-iphone-ti_options .ti_minutes").trigger('mouseup');
				}
				else {
					if(jQuery("#jim-iphone-ti_options").attr('id') === jQuery(event.target).parent().attr('id'))
						jQuery("#jim-iphone-ti_options_big .ti_minutes").css("top", parseInt(jQuery("#jim-iphone-ti_options .ti_minutes").css('top'))-92 +"px");
					else jQuery("#jim-iphone-ti_options .ti_minutes").css("top", parseInt(jQuery("#jim-iphone-ti_options_big .ti_minutes").css('top'))+92 +"px");
				}
				
			}
			else event.preventDefault();
			
		});
	}

	function restoreDefaultTIMinutes(offset) {
		var firstMinute = parseInt(jQuery("#jim-iphone-ti_options .ti_minutes :first-child").text(), 10),
		newStartMinute = firstMinute+offset;
		
		resetTIMinutes(jQuery("#jim-iphone-ti_options .ti_minutes").children(), firstMinute, newStartMinute);
		resetTIMinutes(jQuery("#jim-iphone-ti_options_big .ti_minutes").children(), firstMinute, newStartMinute);

		var topPos = 210, topPosBig = 302;
		jQuery("#jim-iphone-ti_options .ti_minutes").css('top', -topPos + 'px');
		jQuery("#jim-iphone-ti_options_big .ti_minutes").css('top', -topPosBig + 'px');
	}
	
	function resetTIMinutes(currentMinuteList, firstMinute, newStartMinute) {
		for(var i=0; i<currentMinuteList.length; i++) {
			var item = jQuery(currentMinuteList[i]);
			var value = (newStartMinute + i + 60)%60;
			if(value.toString().length===1) value = "0"+value;
			var oldValue = (firstMinute + i + 60)%60;
			if(oldValue.toString().length===1) oldValue = "0"+oldValue;
			
			item.removeClass("minute" + oldValue);
			item.addClass("minute" + value);
			item.text(value);
		}
	}
	
	/** PERIODS **/
	function bindTimePeriods() {
		jQuery(controller.timeKey+" .ti_periods").on("mouseup", function(event, data) {
			if(dragStart) {
				dragStart = false;
				var topPos = 90, topPosBig = -2;				
				var ddTop = parseInt(jQuery("#jim-iphone-ti_options .ti_periods").css('top'));
				if((topPos-ddTop)>14) {
					jQuery("#jim-iphone-ti_options_big .ti_periods").animate({'top' : topPosBig-30 + 'px', queue : false });
					jQuery("#jim-iphone-ti_options .ti_periods").animate({'top' : topPos-30 + 'px', queue : false }, function() {
						setTimeValue(input);
						jQuery(".ti_periods").removeClass("am pm").addClass("pm");
					});
				}
				else if((topPos-ddTop)<-14) {
					jQuery("#jim-iphone-ti_options_big .ti_periods").animate({'top' : topPosBig + 'px', queue : false });
					jQuery("#jim-iphone-ti_options .ti_periods").animate({'top' : topPos + 'px', queue : false}, function() {
						setTimeValue(input);
						jQuery(".ti_periods").removeClass("am pm").addClass("am");
					});
				}
				else {
					jQuery("#jim-iphone-ti_options_big .ti_periods").animate({'top' : topPosBig + 'px', queue : false });
					jQuery("#jim-iphone-ti_options .ti_periods").animate({'top': topPos + 'px', queue : false}, function() {
						setTimeValue(input);
						jQuery(".ti_periods").removeClass("am pm").addClass("am");
					});
				}
			}
		});

		jQuery(controller.timeKey+" .ti_periods").on('dragstart', function(event, data) {
			topP = data.position.top;
			originalTop = data.originalPosition.top;
			dragStart = true;		
		});
		
		jQuery(controller.timeKey+" .ti_periods").on('drag', function(event, data) {
			if(dragStart) {
				topP = data.position.top;
				
				var offset = jQuery(event.target).parent().parent().offset(),
				dd_height = parseInt(jQuery(event.target).parent().parent().css('height')),
				zoom = jimDevice.getZoom(),
				posX = event.pageX,
				posY = event.pageY;
				
				if(posY<offset.top) {
					event.preventDefault();
					jQuery("#jim-iphone-ti_options .ti_periods").trigger('mouseup');
				}
				else if(posY>offset.top+(dd_height/zoom)) {
					event.preventDefault();
					jQuery("#jim-iphone-ti_options .ti_periods").trigger('mouseup');
				}
				else {
					if(jQuery("#jim-iphone-ti_options").attr('id') === jQuery(event.target).parent().attr('id'))
						jQuery("#jim-iphone-ti_options_big .ti_periods").css("top", parseInt(jQuery("#jim-iphone-ti_options .ti_periods").css('top'))-92 +"px");
					else jQuery("#jim-iphone-ti_options .ti_periods").css("top", parseInt(jQuery("#jim-iphone-ti_options_big .ti_periods").css('top'))+92 +"px");
				}
			}
			else event.preventDefault();
			
		});
	}
	
	function fillTime() {
		var currentHour, currentMinute, currentPeriod, html = "";
		var currentValue = input.find("input").val();
		var inputDateFormat = input.attr("format");
		if(currentValue==="") {
			var currentDate = new Date();
			currentHour = currentDate.getHours();
			currentMinutes = currentDate.getMinutes();
			currentPeriod = (currentHour<12) ? periods[0] : periods[1];
		}
		else {
			var parsedDate = parse(currentValue, inputDateFormat, new Date());
			currentHour = parsedDate.getHours();
			currentMinutes = parsedDate.getMinutes();
			currentPeriod = (currentHour<12) ? periods[0] : periods[1];
		}

		//hours
		var html = "";
		for(var i=currentHour-10;i<=currentHour+10;i++) {
			var val = i;
			val = (val+12)%12;
			if(val===0) val=12;
			html += "<div class='hours hour" + val + "'>" + val + "</div>"; 
		}
		jQuery(".ti_hours").html(html);
		
		//minutes
		html = "";
		for(var i=currentMinutes-10;i<=currentMinutes+10;i++) {
			var val = i;
			val = (val+60)%60;
			if(val===0) val=0;
			if(val.toString().length===1) val = "0"+val;
			html += "<div class='minutes minute" + val + "'>" + val + "</div>";
		}
		jQuery(".ti_minutes").html(html);
		
		//period
		html = "";
		$.each(periods, function(key, index) {
			html += "<div class='periods'>" + this + "</div>";
		});
		jQuery(".ti_periods").html(html);
		
		setTimeout(function() {
			if(currentPeriod===periods[1]) {
				var topPos = 60, topPosBig = -32;	
				jQuery("#jim-iphone-ti_options .ti_periods").css("top", topPos + "px");
				jQuery("#jim-iphone-ti_options_big .ti_periods").css("top", topPosBig + "px");
				jQuery(".ti_periods").removeClass("am pm").addClass("pm");
			}
			else jQuery(".ti_periods").removeClass("am pm").addClass("am");
			setTimeValue();
		}, 100);
	}
	
	function setTimeValue() {
		var hour = parseInt(jQuery("#jim-iphone-ti_options .ti_hours :nth-child(11)").text(), 10),
		minute = parseInt(jQuery("#jim-iphone-ti_options .ti_minutes :nth-child(11)").text(), 10),
		period = (parseInt(jQuery("#jim-iphone-ti_options .ti_periods").css("top"))>=62) ? periods[0] : periods[1];
		hour = (period===periods[0] && hour===12) ? 0 : hour;
		hour = (period===periods[1] && hour<12) ? hour+12 : hour;
		if(minute.toString().length===1) minute = "0" + minute;
				
		var date = new Date();
		date.setHours(hour);
		date.setMinutes(minute);
		var inputDateFormat = "HH:mm";
		
		try {
			input.find("input").val(jimUtil.fromHTML(format(date, inputDateFormat)));
			input.trigger("parsedate");
		} catch (error) {}
	}
	
	function clearTimeValue() {
		input.find("input").val(jimUtil.fromHTML(""));
		if(initialInputValue!=="") {
			input.closest(".firer").trigger("change");
			initialInputValue = "";
		}
	}
	
	/*********************** END TIME METHODS ************************/

	/*********************** START DATETIME METHODS ************************/
	
	function createDateTime() {
		var html = "";
		if($.browser.msie)
			html = '<div id='+controller.datetimeKey.substring(1)+'><div id="jim-iphone-dt_controls"><div class="dt_controls-clear">Clear</div><div class="dt_controls-done">Done</div></div><div><div class="jim-iphone-dt_mask"></div><div id="jim-iphone-dt_options"><div class="dt_date"><div class="dt_weekday"></div><div class="dt_day"></div><div class="dt_year"></div></div><div class="dt_hours"></div><div class="dt_minutes"></div><div class="dt_periods"></div></div><div id="jim-iphone-dt_options_big"><div class="dt_date"><div class="dt_weekday"></div><div class="dt_day"></div><div class="dt_year"></div></div><div class="dt_hours"></div><div class="dt_minutes"></div><div class="dt_periods"></div></div></div></div>';
		else html = '<div id='+controller.datetimeKey.substring(1)+'><div id="jim-iphone-dt_controls"><div class="dt_controls-clear">Clear</div><div class="dt_controls-done">Done</div></div><div><div id="jim-iphone-dt_options"><div class="dt_date"><div class="dt_weekday"></div><div class="dt_day"></div><div class="dt_year"></div></div><div class="dt_hours"></div><div class="dt_minutes"></div><div class="dt_periods"></div></div><div id="jim-iphone-dt_options_big"><div class="dt_date"><div class="dt_weekday"></div><div class="dt_day"></div><div class="dt_year"></div></div><div class="dt_hours"></div><div class="dt_minutes"></div><div class="dt_periods"></div></div><div class="jim-iphone-dt_mask"></div></div></div>';
		jQuery("#jim-container").append(html);
		
		jQuery(controller.datetimeKey+' .dt_date').draggable({ 
			axis: "y",
			drag: function(evt, ui) { correctDragDateWithZoom(evt, ui) }
		});
		jQuery(controller.datetimeKey+' .dt_hours').draggable({ 
			axis: "y",
			drag: function(evt, ui) { correctDragDateWithZoom(evt, ui) }
		});
		jQuery(controller.datetimeKey+' .dt_minutes').draggable({ 
			axis: "y",
			drag: function(evt, ui) { correctDragDateWithZoom(evt, ui) }
		});
		jQuery(controller.datetimeKey+' .dt_periods').draggable({ axis: "y" });
	}
	
	function bindDateTime() {
		bindDateTimeDate();
		bindDateTimeHours();
		bindDateTimeMinutes();
		bindDateTimePeriods();
	}
	
	/** CONTROLS **/
	function bindDateTimeControls() {
		jQuery(controller.datetimeKey).on("mouseup", function(event, data) {
			var realTarget = event.target || event.srcElement;
			if (realTarget.tagName === "DIV" && !dragStart) {
				var key = realTarget.className;
				if(key) {
					if(key.indexOf(" ")>0)
						key=key.substring(0, key.indexOf(" "));
					switch(key) {
						case "dt_controls-clear":
							jQuery("#jim-iphone-dt_controls .dt_controls-clear").removeClass("pressed");
							clearDateTimeValue(input);
							break;
						case "dt_controls-done":
							jQuery("#jim-iphone-dt_controls .dt_controls-done").removeClass("pressed");
							jQuery(controller.datetimeKey).hide("slide", { direction: "down" }, 300);
							input.find("input").blur();
							break;
						default:
							break;
					}
				}
			}
		});
		
		jQuery(controller.datetimeKey).on("mousedown", function(event, data) {
			var realTarget = event.target || event.srcElement;
			if (realTarget.tagName === "DIV" && !dragStart) {
				var key = realTarget.className;
				if(key.indexOf(" ")>0)
					key=key.substring(0, key.indexOf(" "));
				switch(key) {
					case "dt_controls-clear":
					case "dt_controls-done":
						jQuery(event.target).removeClass("pressed").addClass("pressed");
						break;
					default:
						break;
				}
				event.preventDefault();
			}
		});
	}
	
	/** DATE **/
	function bindDateTimeDate() {
		jQuery(controller.datetimeKey+" .dt_date").on("mouseup", function(event, data) {
			if(dragStart) {
				dragStart = false;
				var topPos = 210, topPosBig = 302;				
				var ddTop = parseInt(jQuery("#jim-iphone-dt_options .dt_date").css('top'));
				if((ddTop+topPos)>14) {
					var offset = -topPos-ddTop-14;
					var despl = parseInt(offset/29);
					jQuery("#jim-iphone-dt_options_big .dt_date").animate({'top' : -topPosBig-(despl*29) + 'px', queue : false });
					jQuery("#jim-iphone-dt_options .dt_date").animate({'top' : -topPos-(despl*29) + 'px', queue : false }, function() {
						restoreDefaultDTDate(despl);
						jQuery("#jim-iphone-dt_options .dt_date").css('top', -topPos + 'px');
						jQuery("#jim-iphone-dt_options_big .dt_date").css('top', -topPosBig + 'px');
						setDateTimeValue(input);
					});
				}
				else if((ddTop+topPos)<-14) {
					var offset = -topPos-ddTop+14;
					var despl = parseInt(offset/29);
					jQuery("#jim-iphone-dt_options_big .dt_date").animate({'top' : -topPosBig-(despl*29) + 'px', queue : false });
					jQuery("#jim-iphone-dt_options .dt_date").animate({'top' : -topPos-(despl*29) + 'px', queue : false }, function() {
						restoreDefaultDTDate(despl);
						jQuery("#jim-iphone-dt_options .dt_date").css('top', -topPos + 'px');
						jQuery("#jim-iphone-dt_options_big .dt_date").css('top', -topPosBig + 'px');
						setDateTimeValue(input);
					});
				}
				else {
					jQuery("#jim-iphone-dt_options_big .dt_date").animate({'top' : -topPosBig + 'px', queue : false });
					jQuery("#jim-iphone-dt_options .dt_date").animate({'top': -topPos + 'px', queue : false }, function() {
						setDateTimeValue(input);
					});
				}
			}
		});
		
		jQuery(controller.datetimeKey+" .dt_date").on('dragstart', function(event, data) {
			topP = data.position.top;
			originalTop = data.originalPosition.top;
			dragStart = true;		
		});
		
		jQuery(controller.datetimeKey+" .dt_date").on('drag', function(event, data) {
			if(dragStart) {
				topP = data.position.top;
				
				var offset = jQuery(event.target).parent().parent().offset(),
				dd_height = parseInt(jQuery(event.target).parent().parent().css('height')),
				zoom = jimDevice.getZoom(),
				posX = event.pageX,
				posY = event.pageY;
				
				if(posY<offset.top) {
					event.preventDefault();
					jQuery("#jim-iphone-dt_options .dt_date").trigger('mouseup');
				}
				else if(posY>offset.top+(dd_height/zoom)) {
					event.preventDefault();
					jQuery("#jim-iphone-dt_options .dt_date").trigger('mouseup');
				}
				else {
					if(jQuery("#jim-iphone-dt_options").attr('id') === jQuery(event.target).parent().attr('id'))
						jQuery("#jim-iphone-dt_options_big .dt_date").css("top", parseInt(jQuery("#jim-iphone-dt_options .dt_date").css('top'))-92 +"px");
					else jQuery("#jim-iphone-dt_options .dt_date").css("top", parseInt(jQuery("#jim-iphone-dt_options_big .dt_date").css('top'))+92 +"px");
				}
			}
			else event.preventDefault();
			
		});
	}

	function restoreDefaultDTDate(offset) {
		var firstDay = parseInt(jQuery("#jim-iphone-dt_options .dt_date .date.day:first-child").text().substring(4), 10),
		newStartDay = firstDay+offset,
		dayArray = getFullDayOffsetArray(offset),
		currentDate = new Date();
		
		resetDTDate(jQuery("#jim-iphone-dt_options .dt_date .dt_weekday").children(), jQuery("#jim-iphone-dt_options .dt_date .dt_day").children(), jQuery("#jim-iphone-dt_options .dt_date .dt_year").children(), firstDay, newStartDay, dayArray, currentDate);
		resetDTDate(jQuery("#jim-iphone-dt_options_big .dt_date .dt_weekday").children(), jQuery("#jim-iphone-dt_options_big .dt_date .dt_day").children(), jQuery("#jim-iphone-dt_options_big .dt_date .dt_year").children(), firstDay, newStartDay, dayArray, currentDate);
		
		var topPos = 210, topPosBig = 302;
		jQuery("#jim-iphone-dt_options .dt_days").css('top', -topPos + 'px');
		jQuery("#jim-iphone-dt_options_big .dt_days").css('top', -topPosBig + 'px');
	}
	
	function resetDTDate(currentWeekdayList, currentDayList, currentYearList, firstDay, newStartDay, dayArray, currentDate) {
		//weekday
		for(var i=0; i<currentWeekdayList.length; i++) {
			var item = jQuery(currentWeekdayList[i]);
			var value = dayArray[i];
			if(value.weekday===currentDate.getDay() && value.month===currentDate.getMonth() && value.day===currentDate.getDate() && value.year===currentDate.getFullYear()) {
				item.removeClass("weekday").text("");
			}
			else {
				item.removeClass("weekday").addClass("weekday").text(daysCompressed[value.weekday-1]);
			}
		}
		
		//day
		for(var i=0; i<currentDayList.length; i++) {
			var item = jQuery(currentDayList[i]);
			var value = dayArray[i];
			if(value.weekday===currentDate.getDay() && value.month===currentDate.getMonth() && value.day===currentDate.getDate() && value.year===currentDate.getFullYear()) {
				item.removeClass("weekday, day").addClass("today").text("Today");
			}
			else {
				item.removeClass("day, today").addClass("day").text(monthsCompressed[value.month] + " " + value.day);
			}
		}
		
		//year
		for(var i=0; i<currentYearList.length; i++) {
			var item = jQuery(currentYearList[i]);
			var value = dayArray[i];
			item.text(value.year);
		}
	}
	
	/** HOURS **/
	function bindDateTimeHours() {
		jQuery(controller.datetimeKey+" .dt_hours").on("mouseup", function(event, data) {
			if(dragStart) {
				dragStart = false;
				var topPos = 210, topPosBig = 302;				
				var ddTop = parseInt(jQuery("#jim-iphone-dt_options .dt_hours").css('top'));
				if((ddTop+topPos)>14) {
					var offset = -topPos-ddTop-14;
					var despl = parseInt(offset/29);
					jQuery("#jim-iphone-dt_options_big .dt_hours").animate({'top' : -topPosBig-(despl*29) + 'px', queue : false });
					jQuery("#jim-iphone-dt_options .dt_hours").animate({'top' : -topPos-(despl*29) + 'px', queue : false }, function() {
						restoreDefaultDTHours(despl);
						jQuery("#jim-iphone-dt_options .dt_hours").css('top', -topPos + 'px');
						jQuery("#jim-iphone-dt_options_big .dt_hours").css('top', -topPosBig + 'px');
						setDateTimeValue(input);
					});
				}
				else if((ddTop+topPos)<-14) {
					var offset = -topPos-ddTop+14;
					var despl = parseInt(offset/29);
					jQuery("#jim-iphone-dt_options_big .dt_hours").animate({'top' : -topPosBig-(despl*29) + 'px', queue : false });
					jQuery("#jim-iphone-dt_options .dt_hours").animate({'top' : -topPos-(despl*29) + 'px', queue : false }, function() {
						restoreDefaultDTHours(despl);
						jQuery("#jim-iphone-dt_options .dt_hours").css('top', -topPos + 'px');
						jQuery("#jim-iphone-dt_options_big .dt_hours").css('top', -topPosBig + 'px');
						setDateTimeValue(input);
					});
				}
				else {
					jQuery("#jim-iphone-dt_options_big .dt_hours").animate({'top' : -topPosBig + 'px', queue : false });
					jQuery("#jim-iphone-dt_options .dt_hours").animate({'top': -topPos + 'px', queue : false }, function() {
						setDateTimeValue(input);
					});
				}
			}
		});

		jQuery(controller.datetimeKey+" .dt_hours").on('dragstart', function(event, data) {
			topP = data.position.top;
			originalTop = data.originalPosition.top;
			dragStart = true;		
		});
		
		jQuery(controller.datetimeKey+" .dt_hours").on('drag', function(event, data) {
			if(dragStart) {
				topP = data.position.top;
				
				var offset = jQuery(event.target).parent().parent().offset(),
				dd_height = parseInt(jQuery(event.target).parent().parent().css('height')),
				zoom = jimDevice.getZoom(),
				posX = event.pageX,
				posY = event.pageY;
				
				if(posY<offset.top) {
					event.preventDefault();
					jQuery("#jim-iphone-dt_options .dt_hours").trigger('mouseup');
				}
				else if(posY>offset.top+(dd_height/zoom)) {
					event.preventDefault();
					jQuery("#jim-iphone-dt_options .dt_hours").trigger('mouseup');
				}
				else {
					if(jQuery("#jim-iphone-dt_options").attr('id') === jQuery(event.target).parent().attr('id'))
						jQuery("#jim-iphone-dt_options_big .dt_hours").css("top", parseInt(jQuery("#jim-iphone-dt_options .dt_hours").css('top'))-92 +"px");
					else jQuery("#jim-iphone-dt_options .dt_hours").css("top", parseInt(jQuery("#jim-iphone-dt_options_big .dt_hours").css('top'))+92 +"px");
				}
			}
			else event.preventDefault();
			
		});
	}
	
	function restoreDefaultDTHours(offset) {
		var firstHour = parseInt(jQuery("#jim-iphone-dt_options .dt_hours :first-child").text(), 10),
		newStartHour = firstHour+offset;
		
		resetDTHours(jQuery("#jim-iphone-dt_options .dt_hours").children(), firstHour, newStartHour);
		resetDTHours(jQuery("#jim-iphone-dt_options_big .dt_hours").children(), firstHour, newStartHour);
		
		var topPos = 210, topPosBig = 302;
		jQuery("#jim-iphone-dt_options .dt_hours").css('top', -topPos + 'px');
		jQuery("#jim-iphone-dt_options_big .dt_hours").css('top', -topPosBig + 'px');
	}
	
	function resetDTHours(currentHourList, firstHour, newStartHour) {
		for(var i=0; i<currentHourList.length; i++) {
			var item = jQuery(currentHourList[i]);
			var value = (newStartHour + i + 12)%12;
			if(value===0) value=12;
			var oldValue = (firstHour + i + 12)%12;
			if(oldValue===0) oldValue=12;
			
			item.removeClass("hour" + oldValue);
			item.addClass("hour" + value);
			item.text(value);
		}
	} 
	
	/** MINUTES **/
	function bindDateTimeMinutes() {
		jQuery(controller.datetimeKey+" .dt_minutes").on("mouseup", function(event, data) {
			if(dragStart) {
				dragStart = false;
				var topPos = 210, topPosBig = 302;				
				var ddTop = parseInt(jQuery("#jim-iphone-dt_options .dt_minutes").css('top'));
				if((ddTop+topPos)>14) {
					var offset = -topPos-ddTop-14;
					var despl = parseInt(offset/29);
					jQuery("#jim-iphone-dt_options_big .dt_minutes").animate({'top' : -topPosBig-(despl*29) + 'px', queue : false });
					jQuery("#jim-iphone-dt_options .dt_minutes").animate({'top' : -topPos-(despl*29) + 'px', queue : false }, function() {
						restoreDefaultDTMinutes(despl);
						jQuery("#jim-iphone-dt_options .dt_minutes").css('top', -topPos + 'px');
						jQuery("#jim-iphone-dt_options_big .dt_minutes").css('top', -topPosBig + 'px');
						setDateTimeValue(input);
					});
				}
				else if((ddTop+topPos)<-14) {
					var offset = -topPos-ddTop+14;
					var despl = parseInt(offset/29);
					jQuery("#jim-iphone-dt_options_big .dt_minutes").animate({'top' : -topPosBig-(despl*29) + 'px', queue : false });
					jQuery("#jim-iphone-dt_options .dt_minutes").animate({'top' : -topPos-(despl*29) + 'px', queue : false }, function() {
						restoreDefaultDTMinutes(despl);
						jQuery("#jim-iphone-dt_options .dt_minutes").css('top', -topPos + 'px');
						jQuery("#jim-iphone-dt_options_big .dt_minutes").css('top', -topPosBig + 'px');
						setDateTimeValue(input);
					});
				}
				else {
					jQuery("#jim-iphone-dt_options_big .dt_minutes").animate({'top': -topPosBig + 'px', queue : false });
					jQuery("#jim-iphone-dt_options .dt_minutes").animate({'top': -topPos + 'px', queue : false }, function() {
						setDateTimeValue(input);
					});
				}
			}
		});

		jQuery(controller.datetimeKey+" .dt_minutes").on('dragstart', function(event, data) {
			topP = data.position.top;
			originalTop = data.originalPosition.top;
			dragStart = true;		
		});
		
		jQuery(controller.datetimeKey+" .dt_minutes").on('drag', function(event, data) {
			if(dragStart) {
				topP = data.position.top;
				
				var offset = jQuery(event.target).parent().parent().offset(),
				dd_height = parseInt(jQuery(event.target).parent().parent().css('height')),
				zoom = jimDevice.getZoom(),
				posX = event.pageX,
				posY = event.pageY;
				
				if(posY<offset.top) {
					event.preventDefault();
					jQuery("#jim-iphone-dt_options .dt_minutes").trigger('mouseup');
				}
				else if(posY>offset.top+(dd_height/zoom)) {
					event.preventDefault();
					jQuery("#jim-iphone-dt_options .dt_minutes").trigger('mouseup');
				}
				else {
					if(jQuery("#jim-iphone-dt_options").attr('id') === jQuery(event.target).parent().attr('id'))
						jQuery("#jim-iphone-dt_options_big .dt_minutes").css("top", parseInt(jQuery("#jim-iphone-dt_options .dt_minutes").css('top'))-92 +"px");
					else jQuery("#jim-iphone-dt_options .dt_minutes").css("top", parseInt(jQuery("#jim-iphone-dt_options_big .dt_minutes").css('top'))+92 +"px");
				}
			}
			else event.preventDefault();
			
		});
	}

	function restoreDefaultDTMinutes(offset) {
		var firstMinute = parseInt(jQuery("#jim-iphone-dt_options .dt_minutes :first-child").text(), 10),
		newStartMinute = firstMinute+offset;

		resetDTMinutes(jQuery("#jim-iphone-dt_options .dt_minutes").children(), firstMinute, newStartMinute);
		resetDTMinutes(jQuery("#jim-iphone-dt_options_big .dt_minutes").children(), firstMinute, newStartMinute);

		var topPos = 210, topPosBig = 302;
		jQuery("#jim-iphone-dt_options .dt_minutes").css('top', -topPos + 'px');
		jQuery("#jim-iphone-dt_options_big .dt_minutes").css('top', -topPosBig + 'px');
	}
	
	function resetDTMinutes(currentMinuteList, firstMinute, newStartMinute) {
		for(var i=0; i<currentMinuteList.length; i++) {
			var item = jQuery(currentMinuteList[i]);
			var value = (newStartMinute + i + 60)%60;
			if(value.toString().length===1) value = "0"+value;
			var oldValue = (firstMinute + i + 60)%60;
			if(oldValue.toString().length===1) oldValue = "0"+oldValue;
			
			item.removeClass("minute" + oldValue);
			item.addClass("minute" + value);
			item.text(value);
		}
	}
	
	
	/** PERIODS **/
	function bindDateTimePeriods() {
		jQuery(controller.datetimeKey+" .dt_periods").on("mouseup", function(event, data) {
			if(dragStart) {
				dragStart = false;
				var topPos = 90, topPosBig = -2;				
				var ddTop = parseInt(jQuery("#jim-iphone-dt_options .dt_periods").css('top'));
				if((topPos-ddTop)>14) {
					jQuery("#jim-iphone-dt_options_big .dt_periods").animate({'top' : topPosBig-30 + 'px', queue: false });
					jQuery("#jim-iphone-dt_options .dt_periods").animate({'top' : topPos-30 + 'px', queue: false }, function() {
						setDateTimeValue(input);
						jQuery(".dt_periods").removeClass("am pm").addClass("pm");
					});
				}
				else if((topPos-ddTop)<-14) {
					jQuery("#jim-iphone-dt_options_big .dt_periods").animate({'top' : topPosBig + 'px', queue: false });
					jQuery("#jim-iphone-dt_options .dt_periods").animate({'top' : topPos + 'px', queue: false }, function() {
						setDateTimeValue(input);
						jQuery(".dt_periods").removeClass("am pm").addClass("am");
					});
				}
				else {
					jQuery("#jim-iphone-dt_options_big .dt_periods").animate({'top' : topPosBig + 'px', queue: false });
					jQuery("#jim-iphone-dt_options .dt_periods").animate({'top': topPos + 'px', queue: false }, function() {
						setDateTimeValue(input);
						jQuery(".dt_periods").removeClass("am pm").addClass("am");				
					});
				}
			}
		});

		jQuery(controller.datetimeKey+" .dt_periods").on('dragstart', function(event, data) {
			topP = data.position.top;
			originalTop = data.originalPosition.top;
			dragStart = true;		
		});
		
		jQuery(controller.datetimeKey+" .dt_periods").on('drag', function(event, data) {
			if(dragStart) {
				topP = data.position.top;
				
				var offset = jQuery(event.target).parent().parent().offset(),
				dd_height = parseInt(jQuery(event.target).parent().parent().css('height')),
				zoom = jimDevice.getZoom(),
				posX = event.pageX,
				posY = event.pageY;
				
				if(posY<offset.top) {
					event.preventDefault();
					jQuery("#jim-iphone-dt_options .dt_periods").trigger('mouseup');
				}
				else if(posY>offset.top+(dd_height/zoom)) {
					event.preventDefault();
					jQuery("#jim-iphone-dt_options .dt_periods").trigger('mouseup');
				}
				else {
					if(jQuery("#jim-iphone-dt_options").attr('id') === jQuery(event.target).parent().attr('id'))
						jQuery("#jim-iphone-dt_options_big .dt_periods").css("top", parseInt(jQuery("#jim-iphone-dt_options .dt_periods").css('top'))-92 +"px");
					else jQuery("#jim-iphone-dt_options .dt_periods").css("top", parseInt(jQuery("#jim-iphone-dt_options_big .dt_periods").css('top'))+92 +"px");
				}
			}
			else event.preventDefault();
			
		});
	}
	
	function fillDateTime() {
		var htmlWeek = "", htmlDay = "", htmlYear = "", html = "",
		currentHour, currentMinute, currentPeriod,
		currentValue = input.find("input").val();
		var inputDateFormat = input.attr("format");
		
		var currentDate = new Date();
		if(currentValue==="") {
			currentMonth = currentDate.getMonth();
			currentWeekday = currentDate.getDay();
			currentDay = currentDate.getDate();
			currentYear = currentDate.getFullYear()
			currentHour = currentDate.getHours();
			currentMinutes = currentDate.getMinutes();
			currentPeriod = (currentHour<12) ? periods[0] : periods[1];
		}
		else {
			var parsedDate = parse(currentValue, inputDateFormat, new Date());
			currentMonth = parsedDate.getMonth();
			currentWeekday = parsedDate.getDay();
			currentDay = parsedDate.getDate();
			currentYear = parsedDate.getFullYear()
			currentHour = parsedDate.getHours();
			currentMinutes = parsedDate.getMinutes();
			currentPeriod = (currentHour<12) ? periods[0] : periods[1];
		}
		
		//date
		var dayArray = getFullDayArray(currentDay, currentMonth, currentWeekday, currentYear);
		for(var i=0;i<dayArray.length;i++) {
			var value = dayArray[i];
			if(value.weekday===currentDate.getDay() && value.month===currentDate.getMonth() && value.day===currentDate.getDate() && value.year===currentDate.getFullYear()) {
				htmlWeek += "<div class='date'></div>";
				htmlDay += "<div class='date today'>Today</div>";
				htmlYear += "<div class='date year'>" + value.year + "</div>";
			}
			else {
				htmlWeek += "<div class='date weekday'>" + daysCompressed[value.weekday-1] + "</div>";
				htmlDay += ("<div class='date day'>" + monthsCompressed[value.month] + " " + value.day + "</div>");
				htmlYear += "<div class='date year'>" + value.year + "</div>";
			}
		}
		jQuery(".dt_weekday").html(htmlWeek);
		jQuery(".dt_day").html(htmlDay);
		jQuery(".dt_year").html(htmlYear);
		
		//hours
		var html = "";
		for(var i=currentHour-10;i<=currentHour+10;i++) {
			var val = i;
			val = (val+12)%12;
			if(val===0) val=12;
			html += "<div class='hours hour" + val + "'>" + val + "</div>"; 
		}
		jQuery(".dt_hours").html(html);
		
		//minutes
		html = "";
		for(var i=currentMinutes-10;i<=currentMinutes+10;i++) {
			var val = i;
			val = (val+60)%60;
			if(val===0) val=0;
			if(val.toString().length===1) val = "0"+val;
			html += "<div class='minutes minute" + val + "'>" + val + "</div>";
		}
		jQuery(".dt_minutes").html(html);
		
		//period
		html = "";
		$.each(periods, function(key, index) {
			html += "<div class='periods'>" + this + "</div>";
		});
		
		jQuery(".dt_periods").html(html);
		setTimeout(function() {
			if(currentPeriod===periods[1]) {
				var topPos = 60, topPosBig = -32;
				jQuery("#jim-iphone-dt_options .dt_periods").css("top", topPos + "px");
				jQuery("#jim-iphone-dt_options_big .dt_periods").css("top", topPosBig + "px");
				jQuery(".dt_periods").removeClass("am pm").addClass("pm");
			}
			else jQuery(".dt_periods").removeClass("am pm").addClass("am");
			setDateTimeValue(input);
		}, 100);
	}
	
	function getFullDayArray(currentDay, currentMonth, currentWeekday, currentYear) {
		var calculatedDay = parseInt(currentDay, 10),
		calculatedMonth = parseInt(currentMonth, 10),
		calculatedWeekday = parseInt(currentWeekday, 10),
		calculatedYear = parseInt(currentYear, 10),
		fullDayArray = new Array(21); 
		
		//Before
		for(var i=0;i>=-9;i--) {
			calculatedDay = (calculatedDay-(1)+31)%31;
			if(calculatedDay===0) calculatedDay=31;
			
			//month before!
			if(calculatedDay<=31 && currentDay>=1 && currentDay<calculatedDay) {
				calculatedMonth = (currentMonth-(1)+12)%12;
				if(calculatedMonth===11 && currentMonth===0)
					calculatedYear = currentYear-1;
			}
			if(calculatedDay===31 && ((calculatedMonth<6 && calculatedMonth%2===1) || (calculatedMonth>=6 && calculatedMonth%2===0))) {
				calculatedDay=30;
			}
			if(calculatedDay >=30 && calculatedMonth===1) {
				calculatedDay=29;
			}
			if(calculatedDay >=29 && calculatedYear%4!==0 && calculatedMonth===1) {
				calculatedDay=28;
			}
			
			calculatedWeekday = (calculatedWeekday-(1)+7)%7;
			if(calculatedWeekday===0) calculatedWeekday=7;
			
			fullDayArray[i+9] = { "weekday": calculatedWeekday, "day": calculatedDay, "month": calculatedMonth, "year": calculatedYear };
		}
		
		//Today
		if(currentWeekday===0) currentWeekday=7;
		fullDayArray[10] = { "weekday": currentWeekday, "day": currentDay, "month": currentMonth, "year": currentYear };
		
		calculatedDay = currentDay;
		calculatedMonth = currentMonth;
		calculatedWeekday = currentWeekday;
		calculatedYear = currentYear;
		
		//After
		for(var i=1;i<11;i++) {
			calculatedDay = (calculatedDay+(1)+31)%31;
			if(calculatedDay===0) calculatedDay=31;
			
			if(calculatedDay===31 && ((calculatedMonth<6 && calculatedMonth%2===1) || (calculatedMonth>=6 && calculatedMonth%2===0))) {
				calculatedDay=1;
			}
			if(calculatedDay >=30 && calculatedMonth===1) {
				calculatedDay=1;
			}
			if(calculatedDay >=29 && calculatedYear%4!==0 && calculatedMonth===1) {
				calculatedDay=1;
			}
			
			//month after!
			if(calculatedDay>=1 && currentDay<=31 && currentDay>calculatedDay) {
				calculatedMonth = (currentMonth+(1)+12)%12;
				if(calculatedMonth===0)
					calculatedYear = currentYear+1;
			}
			
			calculatedWeekday = (calculatedWeekday+(1))%7;
			if(calculatedWeekday===0) calculatedWeekday=7;
			
			fullDayArray[i+10] = { "weekday": calculatedWeekday, "day": calculatedDay, "month": calculatedMonth, "year": calculatedYear };
		}

		return fullDayArray;
	}

	function getFullDayOffsetArray(offset) {
		var dayTxt = jQuery("#jim-iphone-dt_options .dt_date .date.day:nth-child(" + (11+offset) + ")").text();
		var weekdayTxt = jQuery("#jim-iphone-dt_options .dt_date .date.weekday:nth-child(" + (11+offset) + ")").text();
		var yearTxt = jQuery("#jim-iphone-dt_options .dt_date .date.year:nth-child(" + (11+offset) + ")").text();

		var month="";
		var day="";
		var year="";
		if(weekdayTxt==="") {
			month = monthsCompressed[currentMonth];
			day = currentDay;
			weekdayTxt = daysCompressed[currentWeekday-1];
			year=currentYear;
		}
		else {
			month = dayTxt.substring(0,3);
			day = dayTxt.substring(4);
			year=parseInt(yearTxt);
		}
		
		var calculatedDay = parseInt(day, 10);
		var calculatedMonth = jQuery.inArray(month, monthsCompressed);
		var calculatedWeekday = jQuery.inArray(weekdayTxt, daysCompressed)+1;
		var calculatedYear = year;

		return getFullDayArray(calculatedDay, calculatedMonth, calculatedWeekday, calculatedYear);
	}
	
	function setDateTimeValue() {
		var month, day,
		year = parseInt(jQuery("#jim-iphone-dt_options .dt_year :nth-child(11)").text()),
		hour = parseInt(jQuery("#jim-iphone-dt_options .dt_hours :nth-child(11)").text(), 10),
		minute = parseInt(jQuery("#jim-iphone-dt_options .dt_minutes :nth-child(11)").text(), 10),
		period = (parseInt(jQuery("#jim-iphone-dt_options .dt_periods").css("top"))>=62) ? periods[0] : periods[1],
		hour = (period===periods[0] && hour===12) ? 0 : hour;
		hour = (period===periods[1] && hour<12) ? hour+12 : hour;
		if(minute.toString().length===1) minute = "0" + minute;
				
		var date = jQuery("#jim-iphone-dt_options .dt_day :nth-child(11)").text();
		if(date==="Today") {
			month = currentMonth+1;
			day = currentDay;
		}
		else {
			month = jQuery.inArray(date.substring(0, 3), monthsCompressed)+1;
			day = parseInt(date.substring(4));
		}
		if(month.toString().length===1) month = "0" + month;
		if(day.toString().length===1) day = "0" + day;
		
		var dateValue = new Date(Date.parse(month +" "+day+", "+year+" "+hour+":"+minute+":00"));
		var inputDateFormat = "MM/dd/yyyy HH:mm";
		
		try {
			input.find("input").val(jimUtil.fromHTML(format(dateValue, inputDateFormat)));
			input.trigger("parsedate");
		} catch (error) {}
	}
	
	function clearDateTimeValue() {
		input.find("input").val(jimUtil.fromHTML(""));
		if(initialInputValue!=="") {
			input.closest(".firer").trigger("change");
			initialInputValue = "";
		}
	}
	
	
	/*********************** END DATETIME METHODS ************************/
	
	
	/*********************** START OTHER METHODS ************************/
	
	function checkExternalClick(event, data) {
		var $target = $(event.target || event.srcElement);
		if(input && ( (($target.closest(".text")[0]!==input[0]) && ($target.closest(".text").length===0 && $target.closest(".password").length===0 && $target.closest(".textarea").length===0)) || 
				(($target.closest(".password")[0]!==input[0]) && ($target.closest(".text").length===0 && $target.closest(".password").length===0 && $target.closest(".textarea").length===0)) || 
				(($target.closest(".textarea")[0]!==input[0]) && ($target.closest(".text").length===0 && $target.closest(".password").length===0 && $target.closest(".textarea").length===0)) )
				&& $target[0].id != $(controller.keyboardKey) && !$target.closest(controller.keyboardKey).length && $(controller.keyboardKey).css("display")!=="none" && !$(controller.keyboardKey+":animated").length) {
			jQuery(controller.keyboardKey).hide("slide", { direction: "down" }, 300);
			deactivateSpecialKeys();
			
			var value = "";
			if(input.find("input").length>0)
				value = input.find("input").val();
			else if(input.find("textarea").length>0)
				value = input.find("textarea").val();
			if(initialInputValue!==value) {
				input.closest(".firer").trigger("change");
			}
			input.find("input:focus").blur();
			input.find("textarea:focus").blur();
		}
		if(input && ($target.closest(".dropdown, .nativedropdown")[0]!==input[0]) && !$target.is(".dropdown, .nativedropdown") && $target[0].id != $(controller.dropdownKey) && !$target.closest(controller.dropdownKey).length && $(controller.dropdownKey).css("display")!=="none" && !$(controller.dropdownKey+":animated").length) {
			jQuery(controller.dropdownKey).hide("slide", { direction: "down" }, 300);
			jQuery(".dropdown, .nativedropdown").removeClass("pressed");
			var value = input.children(".valign").children(".value").text();
			if(initialInputValue!==value) {
				input.closest(".firer").trigger("change");
			}
		}
		if(input && ($target.closest(".date")[0]!==input[0]) && $target.closest(".date").length===0 && $target[0].id != $(controller.dateKey) && !$target.closest(controller.dateKey).length && $(controller.dateKey).css("display")!=="none" && !$(controller.dateKey+":animated").length) {
			jQuery(controller.dateKey).hide("slide", { direction: "down" }, 300);
			var value = input.find("input").val();
			if(initialInputValue!==value) {
				input.closest(".firer").trigger("change");
			}
			input.find("input:focus").blur();
		}
		if(input && ($target.closest(".time")[0]!==input[0]) && $target.closest(".time").length===0 && $target[0].id != $(controller.timeKey) && !$target.closest(controller.timeKey).length && $(controller.timeKey).css("display")!=="none" && !$(controller.timeKey+":animated").length) {
			jQuery(controller.timeKey).hide("slide", { direction: "down" }, 300);
			var value = input.find("input").val();
			if(initialInputValue!==value) {
				input.closest(".firer").trigger("change");
			}
			input.find("input:focus").blur();
		}
		if(input && ($target.closest(".datetime")[0]!==input[0]) && $target.closest(".datetime").length===0 && $target[0].id != $(controller.datetimeKey) && !$target.closest(controller.datetimeKey).length && $(controller.datetimeKey).css("display")!=="none" && !$(controller.datetimeKey+":animated").length) {
			jQuery(controller.datetimeKey).hide("slide", { direction: "down" }, 300);
			var value = input.find("input").val();
			if(initialInputValue!==value) {
				input.closest(".firer").trigger("change");
			}
			input.find("input:focus").blur();
		}
		
		dragStart=false;
	}
	
	function checkExternalTap(event, data) {
		var $target = $(event.target || event.srcElement);
		if($target.closest(".dropdown, .nativedropdown")[0]===undefined || !$target.is(".dropdown, .nativedropdown")) {
		  jQuery(".dropdown, .nativedropdown").removeClass("pressed");
		  event.stopPropagation();
		}
		
		dragStart=false;
	}
	
	function correctDragDateWithZoom(evt, ui) {
        // zoom fix
    	var zoom = jimDevice.getZoom();
    	ui.position.top = -210 + (ui.position.top+210) * zoom;
    }
	
	function isComponentAssociatedinDataGrid(newInput) {
		hasDatagridParent = newInput.parents(".datagrid"),
		isOAAssociated = newInput.find("input[name]"),
		OAName = isOAAssociated ? (isOAAssociated.attr("name")!="") ? isOAAssociated.attr("name") : undefined : undefined;
		if(hasDatagridParent && OAName)
			return true;
		else return false;
	}
	
	/*********************** END OTHER METHODS ************************/
	
	
	/*********************** START STATIC ACCESS METHODS ************************/
	
	function bindClickEvents(){
		$("#jim-container").on("mousedown",checkExternalClick);
		if(window.jimDevice.isMobile() && window.jimUtil.isMobileDevice()) {
			$("#simulation").on("mousedown",checkExternalTap);
		}
	}
	
	function unbindClickEvents(){
		$("#jim-container").off("mousedown",checkExternalClick);
		if(window.jimDevice.isMobile() && window.jimUtil.isMobileDevice()) {
			$("#simulation").off("mousedown",checkExternalTap);
		}
	}
	
	var controller = {
		"keyboardKey":"#jim-ios8-phone-kb",
		"dropdownKey":"#jim-ios8-phone-dd",
		"dateKey":"#jim-ios8-phone-da",
		"timeKey":"#jim-ios8-phone-ti",
		"datetimeKey":"#jim-ios8-phone-dt",
		"loadSimulator": function() {
			this.loadKeyboard();
			this.loadDropDown();
			this.loadDate();
			this.loadTime();
			this.loadDateTime();
			bindClickEvents();
		},
		"bindContainer" : function () {
			if (!window.jimUtil.isMobileDevice()) 
			  $("#jim-container").mousedown(checkExternalClick);
		},
		"unloadSimulator": function() {
			this.unloadKeyboard();
			this.unloadDropDown();
			this.unloadDate();
			this.unloadTime();
			this.unloadDateTime();
			unbindClickEvents();
		},
		"loadKeyboard": function() {
			createKeyboard();
			bindKeyboard();
			var controller = this;

			jQuery("#simulation").delegate(".text:not(.number, .email, .inputurl) input:not([readonly]), .password input:not([readonly]), textarea:not([readonly])", "click, focusin", function(event, data) {
				if(!jQuery(controller.keyboardKey).css("display") || jQuery(controller.keyboardKey).css("display") === "none") {
					jQuery(controller.keyboardKey).show("slide", { direction: "down" }, 300);
				}
				lastKeyboard = "#letters";
				var newInput = jQuery(this).closest(".text");
				initialInputValue = newInput.find("input").val();
				if(newInput.length===0) {
					newInput = jQuery(this).closest(".password");
					initialInputValue = newInput.find("input").val(); 
				}
				if(newInput.length===0) {
					newInput = jQuery(this).closest(".textarea");
					initialInputValue = newInput.val();
				}
				if(!input || (newInput.length>0 && input[0]!==newInput[0])) {
					input = newInput;
					controller.resetWidgets();
					setStartCaretPosition(input);
					//input.closest(".firer").trigger("focusin");
				}
			});
			
			jQuery("#simulation").delegate(".number input:not([readonly])", "click, focusin", function(event, data) {
				if(!jQuery(controller.keyboardKey).css("display") || jQuery(controller.keyboardKey).css("display") === "none") {
					jQuery(controller.keyboardKey).show("slide", { direction: "down" }, 300);
				}
				lastKeyboard = "#letters";
				var newInput = jQuery(this).closest(".number");
				initialInputValue = newInput.find("input").val();
				if(!input || (newInput.length>0 && input[0]!==newInput[0])) {
					input = newInput;
					controller.resetWidgets();
					setStartCaretPosition(input);
					//input.closest(".firer").trigger("focusin");
				}
			});
			
			jQuery("#simulation").delegate(".email input:not([readonly])", "click, focusin", function(event, data) {
				if(!jQuery(controller.keyboardKey).css("display") || jQuery(controller.keyboardKey).css("display") === "none") {
					jQuery(controller.keyboardKey).show("slide", { direction: "down" }, 300);
				}
				if(jQuery("body.iphone5").length>0)
					lastKeyboard = "#letters";
				else
					lastKeyboard = "#email";
				var newInput = jQuery(this).closest(".email");
				initialInputValue = newInput.find("input").val();
				if(!input || (newInput.length>0 && input[0]!==newInput[0])) {
					input = newInput;
					controller.resetWidgets();
					setStartCaretPosition(input);
					//input.closest(".firer").trigger("focusin");
				}
			});
			
			jQuery("#simulation").delegate(".inputurl input:not([readonly])", "click, focusin", function(event, data) {
				if(!jQuery(controller.keyboardKey).css("display") || jQuery(controller.keyboardKey).css("display") === "none") {
					jQuery(controller.keyboardKey).show("slide", { direction: "down" }, 300);
				}
				if(jQuery("body.iphone5").length>0)
					lastKeyboard = "#letters";
				else
					lastKeyboard = "#url";
				var newInput = jQuery(this).closest(".inputurl");
				initialInputValue = newInput.find("input").val();
				if(!input || (newInput.length>0 && input[0]!==newInput[0])) {
					input = newInput;
					controller.resetWidgets();
					setStartCaretPosition(input);
					//input.closest(".firer").trigger("focusin");
				}
			});
		},
		"unloadKeyboard": function() {
			var controller = this;
			if(jQuery(controller.keyboardKey).length>0) {
				jQuery(controller.keyboardKey).off();
				jQuery("#simulation").undelegate(".text input:not([readonly]), .password input:not([readonly]), textarea:not([readonly])", "click");
				jQuery("#simulation").undelegate(".text input:not([readonly]), .password input:not([readonly]), textarea:not([readonly])", "focusin");
				if(jQuery(controller.keyboardKey).css("display") !== "none") {
					jQuery(controller.keyboardKey).hide();
					//jQuery(controller.keyboardKey).hide("slide", { direction: "down" }, 300);
				}
				jQuery(controller.keyboardKey).remove();
			}
		},
		"loadDropDown": function() {
			createDropDown();
			bindDropDown();
			var controller=this;
			jQuery("#simulation").delegate(".dropdown:not([readonly]), .nativedropdown:not([readonly])", "click", function(event, data) {
				controller.resetWidgets();
				fillDropDownOptions($(event.target).closest(".dropdown, .nativedropdown"));
				if(!jQuery(controller.dropdownKey).css("display") || jQuery(controller.dropdownKey).css("display") === "none") {
					jQuery(controller.dropdownKey).show("slide", { direction: "down" }, 300);
				}
				var newInput = jQuery(this);
				if(!input || (newInput.length>0 && input[0]!==newInput[0])) {
					if(input) {
						jQuery(".dropdown, .nativedropdown").removeClass("pressed");
					}
					input = newInput;
				}
				initialInputValue = input.children(".valign").children(".value").text();
				//input.closest(".firer").trigger("focusin");
			});
		},
		"unloadDropDown": function() {
			var controller=this;
			if(jQuery(controller.dropdownKey).length>0) {
				jQuery(controller.dropdownKey).off();
				jQuery("#simulation").undelegate(".dropdown:not([readonly]), .nativedropdown:not([readonly])", "click");
				if(jQuery(controller.dropdownKey).css("display") !== "none")
					jQuery(controller.keyboardKey).hide();
					//jQuery(controller.dropdownKey).hide("slide", { direction: "down" }, 300);
				jQuery(controller.dropdownKey).remove();
			}
		},
		"loadDate": function() {
			createDate();
			bindDate();
			bindDateControls();
			var controller=this;

			jQuery("#simulation").delegate(".date input:not([readonly])", "click, focusin", function(event, data) {
				var newInput = jQuery(this).closest(".date");
				if(isComponentAssociatedinDataGrid(newInput))
					return;
				
				controller.resetWidgets();
				if(!input || (newInput.length>0 && input[0]!==newInput[0])) {
					input = newInput;
					//input.closest(".firer").trigger("focusin");
				}
				fillDate();
				initialInputValue = newInput.find("input").val();
				if(!jQuery(controller.dateKey).css("display") || jQuery(controller.dateKey).css("display") === "none") {
					jQuery(controller.dateKey).show("slide", { direction: "down" }, 300);
				}
			});
		},
		"unloadDate": function() {
			var controller=this;
			if(jQuery(controller.dateKey).length>0) {
				jQuery(controller.dateKey).off();
				jQuery(controller.dateKey+" .da_days").off();
				jQuery(controller.dateKey+" .da_months").off();
				jQuery(controller.dateKey+" .da_years").off();
				jQuery("#simulation").undelegate(".date input:not([readonly])","click");
				jQuery("#simulation").undelegate(".date input:not([readonly])","focusin");
				if(jQuery(controller.dateKey).css("display") !== "none")
					jQuery(controller.dateKey).hide();
					//jQuery(controller.dateKey).hide("slide", { direction: "down" }, 300);
				jQuery(controller.dateKey).remove();
			}
		},
		"loadTime": function() {
			createTime();
			bindTime();
			bindTimeControls();
			var controller=this;

			jQuery("#simulation").delegate(".time input:not([readonly])", "click, focusin", function(event, data) {
				var newInput = jQuery(this).closest(".time");
				if(isComponentAssociatedinDataGrid(newInput))
					return;
				
				controller.resetWidgets();
				if(!input || (newInput.length>0 && input[0]!==newInput[0])) {
					input = newInput;
					//input.closest(".firer").trigger("focusin");
				}
				fillTime();
				initialInputValue = newInput.find("input").val();
				if(!jQuery(controller.timeKey).css("display") || jQuery(controller.timeKey).css("display") === "none") {
					jQuery(controller.timeKey).show("slide", { direction: "down" }, 300);
				}
			});
		},
		"unloadTime": function() {
			var controller=this;
			if(jQuery(controller.timeKey).length>0) {
				jQuery(controller.timeKey).off();
				jQuery(controller.timeKey+" .ti_hours").off();
				jQuery(controller.timeKey+" .ti_minutes").off();
				jQuery(controller.timeKey+" .ti_periods").off();
				jQuery("#simulation").undelegate(".time input:not([readonly])", "click");
				jQuery("#simulation").undelegate(".time input:not([readonly])", "focusin");
				if(jQuery(controller.timeKey).css("display") !== "none")
					jQuery(controller.timeKey).hide();
					//jQuery(controller.timeKey).hide("slide", { direction: "down" }, 300);
				jQuery(controller.timeKey).remove();
			}
		},	
		"loadDateTime": function() {
			createDateTime();
			bindDateTime();
			bindDateTimeControls();
			var controller=this;

			jQuery("#simulation").delegate(".datetime input:not([readonly])", "click, focusin", function(event, data) {
				var newInput = jQuery(this).closest(".datetime");
				if(isComponentAssociatedinDataGrid(newInput))
					return;
				
				controller.resetWidgets();
				if(!input || (newInput.length>0 && input[0]!==newInput[0])) {
					input = newInput;
					//input.closest(".firer").trigger("focusin");
				}
				fillDateTime();
				initialInputValue = newInput.find("input").val();
				if(!jQuery(controller.datetimeKey).css("display") || jQuery(controller.datetimeKey).css("display") === "none") {
					jQuery(controller.datetimeKey).show("slide", { direction: "down" }, 300);
				}
			});
		},
		"unloadDateTime": function() {
			var controller=this;
			if(jQuery(controller.datetimeKey).length>0) {
				jQuery(controller.datetimeKey).off();
				jQuery(controller.datetimeKey+" .dt_date").off();
				jQuery(controller.datetimeKey+" .dt_hours").off();
				jQuery(controller.datetimeKey+" .dt_minutes").off();
				jQuery(controller.datetimeKey+" .dt_periods").off();
				jQuery("#simulation").undelegate(".datetime input:not([readonly])", "click");
				jQuery("#simulation").undelegate(".datetime input:not([readonly])", "focusin");
				if(jQuery(controller.datetimeKey).css("display") !== "none")
					jQuery(controller.datetimeKey).hide();
					//jQuery(controller.datetimeKey).hide("slide", { direction: "down" }, 300);
				jQuery(controller.datetimeKey).remove();
			}
		},
		"resetWidgets": function() {
			var controller=this;
			//keyboard
			if(jQuery(input).closest(".number").find("input").length > 0) {
				jQuery(controller.keyboardKey +" #letters").css('display', 'none');
				jQuery(controller.keyboardKey +" #numbers").css('display', 'block');
				jQuery(controller.keyboardKey +" #signs").css('display', 'none');
				jQuery(controller.keyboardKey +" #email").css('display', 'none');
				jQuery(controller.keyboardKey +" #url").css('display', 'none');
			}
			else if(jQuery(input).closest(".inputurl").find("input").length > 0) {
				jQuery(controller.keyboardKey +" #letters").css('display', 'none');
				jQuery(controller.keyboardKey +" #numbers").css('display', 'none');
				jQuery(controller.keyboardKey +" #signs").css('display', 'none');
				jQuery(controller.keyboardKey +" #email").css('display', 'none');
				jQuery(controller.keyboardKey +" #url").css('display', 'block');
			}
			else if(jQuery(input).closest(".email").find("input").length > 0) {
				jQuery(controller.keyboardKey +" #letters").css('display', 'none');
				jQuery(controller.keyboardKey +" #numbers").css('display', 'none');
				jQuery(controller.keyboardKey +" #signs").css('display', 'none');
				jQuery(controller.keyboardKey +" #email").css('display', 'block');
				jQuery(controller.keyboardKey +" #url").css('display', 'none');
			}
			else  {
				jQuery(controller.keyboardKey +" #letters").css('display', 'block');
				jQuery(controller.keyboardKey +" #numbers").css('display', 'none');
				jQuery(controller.keyboardKey +" #signs").css('display', 'none');
				jQuery(controller.keyboardKey +" #email").css('display', 'none');
				jQuery(controller.keyboardKey +" #url").css('display', 'none');
			}
			deactivateSpecialKeys();
			//dropdown
			var selected = jQuery(controller.dropdownKey +" #jim-iphone-dd_options .selected"),
			childHeight = parseInt(jQuery(controller.dropdownKey +" #jim-iphone-dd_options .options").height()) + parseInt(jQuery(controller.dropdownKey +" #jim-iphone-dd_options .options").css('padding-top')),
			i=0;
			
			for(i=0; i<jQuery(controller.dropdownKey +" #jim-iphone-dd_options .dd_options").children().length; i++) {
				var option = jQuery(controller.dropdownKey +" #jim-iphone-dd_options .dd_options :nth-child(" + parseInt(parseInt(i)+parseInt(1)) + ")");
				if(option.hasClass("select")) {
					break;
				}
			}
			jQuery(controller.dropdownKey +" #jim-iphone-dd_options .dd_options").css("top", 88-(i*childHeight) + "px");
			jQuery(controller.dropdownKey +" #jim-iphone-dd_options_big .dd_options").css("top", -(i*childHeight) + "px");

			//date
			jQuery(controller.dateKey +" #jim-iphone-da_options .da_months").css("top", "");
			jQuery(controller.dateKey +" #jim-iphone-da_options_big .da_months").css("top", "-302px");
			jQuery(controller.dateKey +" #jim-iphone-da_options .da_days").css("top", "");
			jQuery(controller.dateKey +" #jim-iphone-da_options_big .da_days").css("top", "-302px");
			jQuery(controller.dateKey +" #jim-iphone-da_options .da_years").css("top", "");
			jQuery(controller.dateKey +" #jim-iphone-da_options_big .da_years").css("top", "-302px");
			//time
			jQuery(controller.timeKey +" #jim-iphone-ti_options .ti_hours").css("top", "");
			jQuery(controller.timeKey +" #jim-iphone-ti_options_big .ti_hours").css("top", "-302px");
			jQuery(controller.timeKey +" #jim-iphone-ti_options .ti_minutes").css("top", "");
			jQuery(controller.timeKey +" #jim-iphone-ti_options_big .ti_minutes").css("top", "-302px");
			//datetime
			jQuery(controller.datetimeKey +" #jim-iphone-dt_options .dt_date").css("top", "");
			jQuery(controller.datetimeKey +" #jim-iphone-dt_options_big .dt_date").css("top", "-302px");
			jQuery(controller.datetimeKey +" #jim-iphone-dt_options .dt_hours").css("top", "");
			jQuery(controller.datetimeKey +" #jim-iphone-dt_options_big .dt_hours").css("top", "-302px");
			jQuery(controller.datetimeKey +" #jim-iphone-dt_options .dt_minutes").css("top", "");
			jQuery(controller.datetimeKey +" #jim-iphone-dt_options_big .dt_minutes").css("top", "-302px");
		},
		"hideWidgets": function() {
			var controller = this;
			//keyboard
			jQuery(controller.keyboardKey).css('display', 'none');
			//dropdown
			jQuery(controller.dropdownKey).css('display', 'none');
			//date
			jQuery(controller.dateKey).css('display', 'none');
			//time
			jQuery(controller.timeKey).css('display', 'none');
			//datetime
			jQuery(controller.datetimeKey).css('display', 'none');
		}
	};
	window.jimDevice.controllers["iphoneIOS8"] = controller;
	
	/*********************** END STATIC ACCESS METHODS ************************/
	
}) (window);