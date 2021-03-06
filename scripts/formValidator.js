function formValidator()
{    
    // Return variable
	let blnIsValid = true;
    
    // User inputs
	let name    = document.getElementById('name');
    let company = document.getElementById('company');
	let phone   = document.getElementById('phone');
    let email   = document.getElementById('email');
    let msg     = document.getElementById('msg');
      	
	// Trim
    TrimInputs();

    // Vaidate name 
	if(!IsEmpty(name))
	{               
        if(IsValidName(name))
		{                      
            if(!IsValidLength(name, 2, 25))
			{
				ErrorMsg = "Name must be 2-25 characters in length";
				alert(ErrorMsg);
				name.focus();
                blnIsValid = false;
                return blnIsValid;
            }           
        }       
        else 
        {
            ErrorMsg = `Name must start with a letter or ' & may only contain these characters:
            .  ,  -   '`;
            alert(ErrorMsg);           
			name.focus();
            blnIsValid = false;
            return blnIsValid;
        }             
	}
    else
    {	        
        ErrorMsg = "Name can not be blank.";       
        alert(ErrorMsg);
		name.focus();
        blnIsValid = false;
        return blnIsValid;
    }

    // Vaidate company
	if(!IsEmpty(company))
	{               
        if(IsValidCompanyName(company))
		{                      
            if(!IsValidLength(company, 2, 25))
			{
				ErrorMsg = "Company name must be 2-25 characters in length";
				alert(ErrorMsg);
				company.focus();
                blnIsValid = false;
                return blnIsValid;
            }           
        }       
        else 
        {
            ErrorMsg = `Company must start with a letter, number or ' & may contain these characters:     . , - '`;
            alert(ErrorMsg);           
			company.focus();
            blnIsValid = false;
            return blnIsValid;
        }             
	}
    else
    {	
		ErrorMsg = "Company can not be blank.";
        alert(ErrorMsg);     
		company.focus();
        blnIsValid = false;
        return blnIsValid;
    }

    // Validate phone (length only)
    if(!IsEmpty(phone))
    {
        if(!IsValidLength(phone, 5, 17))
        {
            ErrorMsg = "Phone number must be from 5 - 17 characters";
            alert(ErrorMsg);
            phone.focus();
            blnIsValid = false;
            return blnIsValid;
        }        
    }

    // Validate email
	if(!IsEmpty(email))
	{        
        if(IsValidEmailAddress(email))
		{           
            if(!IsValidLength(email, 5, 25))
			{
				ErrorMsg = "Email address can't exceed 25 characters in length";
				alert(ErrorMsg);
			    email.focus();
                blnIsValid = false;
                return blnIsValid;
			}
        }
        else 
        {
            ErrorMsg = "Invalid Email address format";
			alert(ErrorMsg);
			email.focus();
            blnIsValid = false;
            return blnIsValid;
        }                     
	}
    else
    {	
		ErrorMsg = "Email address can not be blank.";
		alert(ErrorMsg);
		email.focus();
		blnIsValid = false;
		return blnIsValid;
    }

    // Validate message
	if(!IsEmpty(msg))
	{        
        if(IsValidMessage(msg))
		{           
            if(!IsValidLength(msg, 5, 200))
			{
				ErrorMsg = "Message must be 5 - 200 characters in length";
				alert(ErrorMsg);
			    msg.focus();
                blnIsValid = false;
                return blnIsValid;
			}
        }
        else 
        {
            ErrorMsg = `Message must be alphanumeric and can include these characters:
            . , - ' : ; ? ! ( )`;
			alert(ErrorMsg);
			msg.focus();
            blnIsValid = false;
            return blnIsValid;
        }                     
	}
    else
    {	
		ErrorMsg = "Message can not be blank.";
		alert(ErrorMsg);
		msg.focus();
		blnIsValid = false;
		return blnIsValid;
    } 

    if (blnIsValid == true)
    {
        confirmationAlert.render(ConfirmationMessage);
    }
}
 






