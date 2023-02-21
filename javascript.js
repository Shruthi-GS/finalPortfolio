const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})
function validateForm()
{  
var x=document.myForm.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }
  else{
	let x=document.forms["myForm"]["fname"].value;
	if(x=="")
	{
		alert("Name must be filled out");
		return false;
		}
        let y=document.forms["myForm"]["email"].value;
        if(y=="")
		{
		alert("Email must be filled out");
		return false;
		}
        let z=document.forms["myForm"]["phone"].value;
        if(z=="")
		{
		alert("Phone number must be filled out");
		return false;
		}
		else
		{
		alert("Submitted successfully!");
		return true;
		}
	}
	}
