async function h()
{
	alert('hi');
	try 
	{
    		const response = await fetch("https://media.tenor.com/Nv4ctEkehj8AAAAC/whos-the-best-hacker-the-flash.gif");
    		if (!response.ok) 
		{
     			throw new Error("Network response was not OK");
    		}
		const myImage = new Image(100, 200);

    		const myBlob = await response.blob();
   		myImage.src = URL.createObjectURL(myBlob);
		document.body.appendChild(myImage);

  	}
	catch (error) 
	{
    		console.error("Error:", error);
  	}
	
	
	
}
function resp(z)
{
	
}