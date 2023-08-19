	wins = new Audio('ass/win.mp3');
	draws = new Audio('ass/draw.mp3');
	loses = new Audio('ass/lose.mp3');
	var sh1=document.getElementById('show1');
	var play=document.getElementById('play');
	var compu=document.getElementById('compu');
	var pl=document.getElementById('ply')
	var com=document.getElementById('com')
	var player=prompt("enter player name");
	do
	{
		right=1;
	if(player=="" || player==" " || player==null || !(isNaN(player)))
	{
		right=0;
			player=prompt("enter player name");
   	}
   }while(right!=1)
player=player.toUpperCase();
	var li="html";
	var lis=document.getElementById("winel");
	var wi=0;
	var c=0;
	var p=0;
	var ch=5;
	k=0;
	function src1(x) {
		if(ch==0 || k==1)
		{
			return;
		}
		ch--;
		 k=1;
		 setTimeout(()=>{

		 	k=0;
		 },3000);
	let Num = Math.trunc(Math.random() * 3) + 1;
	var comp;
	var comp =( Num==1 ? "Rock" : Num==2 ? "Paper" : "Scissor" );
	checkwinner();
	document.getElementById("show2").classList.remove("invisible");
	com.setAttribute("src","ass/"+comp+".png")
	pl.setAttribute("src","ass/"+x+".png")
	compu.innerHTML=" Computer Choice";
	play.innerHTML=player+" Choice";
	if(checkwinner()=='tie')
	{
		draws.play();
		c+=1;
		p+=1;
		sh1.innerHTML="<div class='col-2 offset-4'><img src='ass/draw.png'id='draw' class='img-fluid '/></div><h2 class='col-4'>Game is Tie</h2>";
	}
	else if(checkwinner()=='computer')
	{
		c+=2;
		loses.play();
		sh1.innerHTML="<br/><h2 class=' col-2 offset-4'><i class='fa-solid fa-robot fa-fade'></i></h2> <h2 class='col-4'> Computer Win</h2>";
	}
	else if(checkwinner()=='Player')
	{
		p+=2;
		wins.play();
		sh1.innerHTML="<br/><h2 class=' col-2 offset-4'><i class='fa-solid fa-user fa-fade'></i></h2> <h2 class='col-4'> "+player+" Win</h2>";
	}
	document.getElementById("playw").innerHTML=player+" " +p
	document.getElementById("compw").innerHTML="Computer "+c
	document.getElementById("chan").innerHTML="<h3>Chance "+ch+"</h3>"
	if(ch==0)
	{ 
	var para = document.createElement("h3");
	var lawi =( p>c ? "player" : p<c ? "computer" : "tie" );
			if(lawi=="player")
			{
		wi++;
			wins.play();
	var node = document.createTextNode(wi+". "+player);
	para.appendChild(node);

			document.getElementById("playw").innerHTML="<b>"+player+" "+p+"</b>"
		sh1.innerHTML="<br/><h2 class=' col-2 offset-4'><i class='fa-solid fa-user fa-fade'></i></h2> <h2 class='col-4'> Player Win</h2>";
	}
	else if(lawi=="computer")
	{
		wi++;
		loses.play();
		var node = document.createTextNode(wi+". computer");
		para.appendChild(node);
		document.getElementById("compw").innerHTML="<b>Computer "+c+"</b>"
		sh1.innerHTML="<br/><h2 class=' col-2 offset-4'><i class='fa-solid fa-robot fa-fade'></i></h2> <h2 class='col-4'> Computer Win</h2>";	
	}
	else if(lawi=="tie")
	{	
		ch++;
		document.getElementById("chan").innerHTML="<h3>Chance "+ch+"</h3>"
	}
	var element = document.getElementById("winer");
	element.classList.remove("invisible");
	element.appendChild(para);
	if(lawi=="computer" || lawi=="player")
{	setTimeout(() =>
				{
					ch=5;
					p=0;
					c=0;
					sh1.innerHTML=" ";

					document.getElementById("show2").classList.add("invisible");
					document.getElementById("playw").innerHTML=player+" " +p
					document.getElementById("compw").innerHTML="Computer "+c
					document.getElementById("chan").innerHTML="<h3>Chance "+ch+"</h3>"
					com.setAttribute("src", " " )
					pl.setAttribute("src"," ")
			 	   	compu.innerHTML="";
					play.innerHTML=" ";
			 	   	player=prompt("enter player name");
			 	   	do
					{
					right=1;
					if(player=="" || player==" " || player==null || !(isNaN(player)))
			 	   	{
			 	   			right=0;
							player=prompt("enter player name");
				   	}
				   }while(right!=1)
					player=player.toUpperCase();
		       	}, 4000);
}
	}
	function checkwinner() {
			if(x==comp)
			{
				return 'tie';
			}
			else if(x=='Rock')
			{
				if(comp=="Paper")
				{
					return 'computer';
				}
				else if(comp=="Scissor")
				{
					return 'Player';
				}
			}
			else if(x=="Paper")
			{
				if(comp=="Scissor")
				{
					return 'computer';
				}
				else if(comp=="Rock")
				{
					return 'Player';
				}
			  
			}
			else if(x=="Scissor")
			{
				if(comp=="Rock")
				{
					return 'computer';
				}
				else if(comp=="Paper")
				{
					return 'Player';
				}
			  
			}
		}
	}
