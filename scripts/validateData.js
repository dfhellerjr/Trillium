
// Trim textboxes & text area
function TrimInputs()
{   
    var intIndex = 0
	var currentElement = null;	
    var length = document.getElementsByTagName('input').length;
    var msg = document.getElementById('msg');
 
	for( intIndex = 0; intIndex < length; intIndex += 1 ) 
	{
		currentElement = document.getElementsByTagName('input').item(intIndex);
		if (currentElement.type == 'text') 
		{
            currentElement.value = currentElement.value.replace(/ +(?= )/g,''); 
            currentElement.value = currentElement.value.trim();
        }
        else if (currentElement.type == 'email')
        {
            currentElement.value = currentElement.value.trim();
        }
    }
    msg.value = msg.value.replace(/ +(?= )/g,''); 
    msg.value = msg.value.trim();   
}

// IsEmpty
function IsEmpty(elem)
{
    let isValid = true;
	if(elem.value.length !== 0)
	{					
        isValid = false;
    }
    return isValid;
}

// Validate length 
function IsValidLength(elem, min, max)
{
	let input = elem.value;
	let isValid = true;
	if(input.length < min || input.length > max)
	{
		isValid = false;
	}
	return isValid;
}

// Validate name
function IsValidName(elem)
{
    let result = /^['a-zA-Z][0-9a-zA-Z .,'-]*$/.test(elem.value);
    return result;
}

// Validate company name
function IsValidCompanyName(elem)
{
    let result = /^['0-9a-zA-Z][0-9a-zA-Z .,'-]*$/.test(elem.value);
    return result;
}

// Validate email address format
function IsValidEmailAddress(elem)
{
    let result = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/.test(elem.value);	
	return result;	
}

// Validate text area
function IsValidMessage(elem)
{
    let result = /^['0-9a-zA-Z][0-9a-zA-Z .,'-:;/?/!/(/)]*$/.test(elem.value);
    return result;
}
