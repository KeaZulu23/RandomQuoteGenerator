let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quote = 
    [
    " 'My heart is in a better place, my mind is in a different state.' \n- A-Reece ('Re$idual $elf Image')",
    " 'Young Neo in action, rappers are my favourite actors.' \n- A-Reece ('Couldn’t Have Said It Better, Pt. 2')",
    " 'I tell the cash get over here, it's like I'm scorpion on Mortal Kombat, If it ain't bout the cash then I won't call back, Counting all this cash got me fronting like I know math, Still fearing no man, these verses gotta murder then a bloodbath.' \n- A-Reece ('To The Top Please')",
    " 'Cup full of dirty I look like a cop.' \n- A-Reece ('Dirty Cop')",
    " 'Rubberband gang, made a hundred and fifty I'm cashin' it out.' \n- A-Reece ('Al Pacino')",
    " 'I keep praying... Got the fire of God around me, I'm blazing! \n- A-Reece ('$afe Haven')",
    " 'San Martino beach clubs, Smoking on LA confidential.' \n- A-Reece ('Sloppy')",
    " 'I'm 'bout to break the bank.' \n- A-Reece ('The 5-Year Plan')",
    " 'Make you meet your maker 'fore you see the doctor, pay a dirty cop to burn the dockets, they're down to grease the whole police department.' \n- A-Reece ('John Doe')",
    " 'Dark daze, long nights, we was wishing on a rainbow.' \n- A-Reece ('Dark Daze')",
    " 'I ain’t dropping you at home, you ain’t leaving me alone, watch me get in my zone, watch me get me get off my phone.' \n- A-Reece ('XXX')",
    ];

btn.addEventListener('click', function(){
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
});

