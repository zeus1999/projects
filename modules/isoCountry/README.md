# isoCountry




	iso.getAlpha2(str) => gets alpha2 code
	iso.getAlpha3(str) => gets alpha3 code
	iso.getEnglischName(str) => gets english name
	iso.getGermanName(str) => gets german name

	str could be a partly name (min 4. chars) or a code (2,3 chars)




//ALPHA2

	var t1 = iso.getAlpha2("germany");
	// => DE

	var t2 = iso.getAlpha2("germa");
	// => DE

	var t3 = iso.getAlpha2("deutschland");
	// => DE

	var t4 = iso.getAlpha2("deutsc");
	// => DE

	var t5 = iso.getAlpha2("DEU");
	// => DE

	var t6 = iso.getAlpha2("de");
	// => DE


//ALPHA3

	var s1 = iso.getAlpha3("germany");
	// => DEU

	var s2 = iso.getAlpha3("germa");
	// => DEU

	var s3 = iso.getAlpha3("deutschland");
	// => DEU

	var s4 = iso.getAlpha3("deutsc");
	// => DEU

	var s5 = iso.getAlpha3("DEU");
	// => DEU

	var s6 = iso.getAlpha3("de");
	// => DEU


//ENGLISH

	var r1 = iso.getEnglishName("germany");
	// => Germany

	var r2 = iso.getEnglishName("germa");
	// => Germany

	var r3 = iso.getEnglishName("deutschland");
	// => Germany

	var r4 = iso.getEnglishName("deutsc");
	// => Germany

	var r5 = iso.getEnglishName("DEU");
	// => Germany

	var r6 = iso.getEnglishName("de");
	// => Germany


//GERMAN

	var q1 = iso.getGermanName("germany");
	// => Deutschland

	var q2 = iso.getGermanName("germa");
	// => Deutschland

	var q3 = iso.getGermanName("deutschland");
	// => Deutschland

	var q4 = iso.getGermanName("deutsc");
	// => Deutschland

	var q5 = iso.getGermanName("DEU");
	// => Deutschland

	var q6 = iso.getGermanName("de");
	// => Deutschland


