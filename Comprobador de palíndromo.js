function palindrome(str) {
    let fraseUno  = str.split("").reverse().join("").toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    
    if (fraseUno == str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') ) {
    return true;
    }
    else{
    return false;
    } 
    
    }
    palindrome("eye");