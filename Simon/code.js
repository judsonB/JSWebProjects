const _0x234b26=_0x224d;(function(_0x4ce4d2,_0x4e6ff4){const _0x1a735d=_0x224d,_0x583852=_0x4ce4d2();while(!![]){try{const _0x372ccd=-parseInt(_0x1a735d(0x158))/0x1*(-parseInt(_0x1a735d(0x169))/0x2)+parseInt(_0x1a735d(0x148))/0x3*(-parseInt(_0x1a735d(0x153))/0x4)+parseInt(_0x1a735d(0x15a))/0x5+-parseInt(_0x1a735d(0x157))/0x6+parseInt(_0x1a735d(0x155))/0x7*(-parseInt(_0x1a735d(0x15f))/0x8)+parseInt(_0x1a735d(0x146))/0x9*(-parseInt(_0x1a735d(0x16b))/0xa)+parseInt(_0x1a735d(0x176))/0xb;if(_0x372ccd===_0x4e6ff4)break;else _0x583852['push'](_0x583852['shift']());}catch(_0x3d7eb2){_0x583852['push'](_0x583852['shift']());}}}(_0x1d00,0xeacb7));let buttons=document[_0x234b26(0x15e)]('.button'),startButton=document[_0x234b26(0x15d)](_0x234b26(0x16e)),roundNumBox=document[_0x234b26(0x15d)](_0x234b26(0x151)),respBox=document[_0x234b26(0x15d)](_0x234b26(0x162)),responses=[_0x234b26(0x16f),_0x234b26(0x177),_0x234b26(0x17f),_0x234b26(0x15b),_0x234b26(0x156),_0x234b26(0x14d),_0x234b26(0x166),_0x234b26(0x142),_0x234b26(0x171),_0x234b26(0x167),_0x234b26(0x179),'Remarkable!',_0x234b26(0x172),_0x234b26(0x16c),_0x234b26(0x164),_0x234b26(0x14e),_0x234b26(0x152),'Splendid!',_0x234b26(0x13c),_0x234b26(0x159),'Flawless!',_0x234b26(0x180),_0x234b26(0x13b),'Masterful!',_0x234b26(0x13e),'Stupendous!','Majestic!',_0x234b26(0x13d),_0x234b26(0x154),_0x234b26(0x17e),_0x234b26(0x13f),_0x234b26(0x141),_0x234b26(0x160),_0x234b26(0x163),_0x234b26(0x14f),_0x234b26(0x170),'Perfection!',_0x234b26(0x147),_0x234b26(0x17a),'Transcendent!',_0x234b26(0x145),_0x234b26(0x168),_0x234b26(0x16d),_0x234b26(0x14c),_0x234b26(0x165),_0x234b26(0x16a),'All-time\x20great!',_0x234b26(0x14a),_0x234b26(0x150),_0x234b26(0x173),_0x234b26(0x17c)],gameSequence=[],playerSequence=[],level=0x1,sequenceIndex=0x0,intervalId=null;startButton[_0x234b26(0x161)]('click',startGame);function selectColor(_0x384071){const _0x59f675=_0x234b26;let _0x269ccd=_0x384071[_0x59f675(0x144)],_0x4f48c2=_0x269ccd['id'];playerSequence[_0x59f675(0x17d)](_0x4f48c2),checkSequence();}function _0x1d00(){const _0x12258a=['Celestial!','random','forEach','35035165CVbkER','You\x20can\x20do\x20it!','active','Incredible!','Grandmaster!','Restart','Simon\x27s\x20finest!','push','Astounding!','Well\x20done!','Unbelievable!','Extraordinary!','Terrific!','Breathtaking!','Magnificent!','Unstoppable!','innerHTML','Legendary!','Superb!','Game\x20Over!\x20Try\x20Again.','target','World-class!','2763PUIlXh','Virtuoso!','215172jbyAcu','length','Monumental!','remove','Godlike!','You\x27re\x20doing\x20fantastic!','Phenomenal!','Champion!','Iconic!','roundNum','Marvelous!','100POxpbV','Mind-blowing!','4249224fejMNT','Good\x20work!','5048712lIDsOb','5501RVlYvG','Exceptional!','6371435DMhTgt','Awesome!','floor','getElementById','querySelectorAll','8vJqpTR','Supreme!','addEventListener','response','Epic!','Spectacular!','Invincible!','Excellent!','Amazing!','Beyond\x20compare!','46QyvQGR','Unbeatable!','12460CPGQvd','Bravo!','Peerless!','start-btn','Let\x27s\x20Go!','Genius\x20level!','Outstanding!','Impressive!'];_0x1d00=function(){return _0x12258a;};return _0x1d00();}function startGame(_0x31ba2d){const _0x1e699d=_0x234b26;buttons[_0x1e699d(0x175)](_0x576479=>{const _0x115c8d=_0x1e699d;_0x576479[_0x115c8d(0x161)]('click',selectColor);}),_0x31ba2d[_0x1e699d(0x144)][_0x1e699d(0x140)]=_0x1e699d(0x17b),gameSequence[_0x1e699d(0x149)]=0x0,playerSequence[_0x1e699d(0x149)]=0x0,sequenceIndex=0x0,level=0x1,generateSequence();}function generateSequence(){const _0x2f14de=_0x234b26;let _0x1b20c6=parseInt(roundNumBox[_0x2f14de(0x140)])+0x1;roundNumBox[_0x2f14de(0x140)]=_0x1b20c6,respBox[_0x2f14de(0x140)]=responses[_0x1b20c6];let _0x599564=Math[_0x2f14de(0x15c)](Math[_0x2f14de(0x174)]()*buttons[_0x2f14de(0x149)]);gameSequence[_0x2f14de(0x17d)](buttons[_0x599564]['id']),playSequence();}function playSequence(){sequenceIndex=0x0,clearInterval(intervalId),intervalId=setInterval(lightNextBtn,0x3e8);}function _0x224d(_0x431a47,_0x1b35b0){const _0x1d00ae=_0x1d00();return _0x224d=function(_0x224d60,_0x59a25c){_0x224d60=_0x224d60-0x13b;let _0x5ee7bb=_0x1d00ae[_0x224d60];return _0x5ee7bb;},_0x224d(_0x431a47,_0x1b35b0);}function lightNextBtn(){const _0x4a4a5d=_0x234b26;if(sequenceIndex<gameSequence['length']){const _0x3f6e0d=document[_0x4a4a5d(0x15d)](gameSequence[sequenceIndex]);_0x3f6e0d['classList']['add'](_0x4a4a5d(0x178)),setTimeout(unLightBtn,0x1f4,_0x3f6e0d),sequenceIndex++;}else sequenceIndex=0x0,clearInterval(intervalId);}function unLightBtn(_0x24a7e5){const _0x2f23f7=_0x234b26;_0x24a7e5['classList'][_0x2f23f7(0x14b)](_0x2f23f7(0x178));}function checkSequence(){const _0x567648=_0x234b26;if(playerSequence[playerSequence[_0x567648(0x149)]-0x1]!==gameSequence[playerSequence['length']-0x1]){alert(_0x567648(0x143)),playerSequence[_0x567648(0x149)]=0x0,playSequence();return;}playerSequence['length']===gameSequence[_0x567648(0x149)]&&setTimeout(nextLevel,0x3e8);}function nextLevel(){level++,sequenceIndex=0x0,playerSequence['length']=0x0,generateSequence();}