const checkForSpam = function (message) {
       
        var words = message.split(" ");
        
       
        for (var i = 0; i < words.length; i++) {
        
          if (words[i] === "spam" || words[i] === "sale") {
            return true;
          }
        }
        
        return false;
      };
      
  
  
  console.log(checkForSpam('Latest technology news')); 
  
  console.log(checkForSpam('JavaScript weekly newsletter')); 
  
  console.log(checkForSpam('Get best sale offers now!')); 
  
  console.log(checkForSpam('How to sale all clothes?')); 