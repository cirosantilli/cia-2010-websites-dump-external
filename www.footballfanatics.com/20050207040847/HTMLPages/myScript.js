		// basic colors
		var fgclr = "ffffff";
		var bnrclr = "336699";
		
		// basic color hex rgb 
		var fr = parseInt(fgclr.substr(0,2),16);
		var fg = parseInt(fgclr.substr(2,2),16);
		var fb = parseInt(fgclr.substr(4,2),16);
		
		var cr = parseInt(bnrclr.substr(0,2),16);
		var cg = parseInt(bnrclr.substr(2,2),16);
		var cb = parseInt(bnrclr.substr(4,2),16); 
		// increment values
		var fdiff = parseInt((765 - (fr+fb+fg))/9);
		var cdiff = parseInt((765 - (cr+cb+cg))/9);
		// fg rgb
		var fr3 = fr + fdiff;if (fr3>255){fr3 = 255};
		var fg3 = fg + fdiff;if (fg3>255){fg3 = 255};
		var fb3 = fb + fdiff;if (fb3>255){fb3 = 255};
		var fr2 = fr + 2*(fdiff);if (fr2>255){fr2 = 255};
		var fg2 = fg + 2*(fdiff);if (fg2>255){fg2 = 255};
		var fb2 = fb + 2*(fdiff);if (fb2>255){fb2 = 255};
		var fr1 = fr + 3*(fdiff);if (fr1>255){fr1 = 255};
		var fg1 = fg + 3*(fdiff);if (fg1>255){fg1 = 255};
		var fb1 = fb + 3*(fdiff);if (fb1>255){fb1 = 255};
		
		// bnr rgb	
		var cr3 = cr + cdiff;if (cr3>255){cr3 = 255};
		var cg3 = cg + cdiff;if (cg3>255){cg3 = 255};
		var cb3 = cb + cdiff;if (cb3>255){cb3 = 255};
		var cr2 = cr + 2*(cdiff);if (cr2>255){cr2 = 255};
		var cg2 = cg + 2*(cdiff);if (cg2>255){cg2 = 255};
		var cb2 = cb + 2*(cdiff);if (cb2>255){cb2 = 255};
		var cr1 = cr + 3*(cdiff);if (cr1>255){cr1 = 255};
		var cg1 = cg + 3*(cdiff);if (cg1>255){cg1 = 255};
		var cb1 = cb + 3*(cdiff);if (cb1>255){cb1 = 255}; 
		
		// rgb strings
		var off1 = "#"+fr1.toString(16)+fg1.toString(16)+fb1.toString(16);
		var off2 = "#"+fr2.toString(16)+fg2.toString(16)+fb2.toString(16);
		var off3 = "#"+fr3.toString(16)+fg3.toString(16)+fb3.toString(16);
		var off4 = "#"+fgclr;
		
		var cnv1 = "#"+cr1.toString(16)+cg1.toString(16)+cb1.toString(16);
		var cnv2 = "#"+cr2.toString(16)+cg2.toString(16)+cb2.toString(16);
		var cnv3 = "#"+cr3.toString(16)+cg3.toString(16)+cb3.toString(16);
		var cnv4 = "#"+bnrclr;
	
		// make styles
			document.write("<style>");
			document.write(".w  	{background-color:#ffffff;}"					);
			document.write(".f4  	{background-color:" + off4 + ";color:000000;}	");
			document.write(".f3  	{background-color:" + off3 + ";}");
			document.write(".f2  	{background-color:" + off2 + ";}");
			document.write(".f1  	{background-color:" + off1 + ";}");
			document.write(".c4  	{background-color:" + cnv4 + ";color:000000;}");
			document.write(".c3  	{background-color:" + cnv3 + ";}");
			document.write(".c2  	{background-color:" + cnv2 + ";}");
			document.write(".c1  	{background-color:" + cnv1 + ";}");
			document.write("</style>");
		// the end
