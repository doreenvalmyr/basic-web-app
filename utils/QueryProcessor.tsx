export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  else if (query.toLowerCase().includes("name")) {
    return "DV";
  }

  else if (query.toLowerCase().includes("largest")) {
    let nums = query.replace("Which of the following numbers is the largest: ", "").split(",", 3);
    let largest = 0;
    for (let i = 0; i < 3; i++) {
      if (parseInt(nums[i], 10) > largest) {
        largest = parseInt(nums[i]);
      }
      return largest.toString();
    }
  }

  else if (query.toLowerCase().includes("plus")) {
    let newString = query.replace("What is ", "");
    let newString2 = newString.replace("plus", "");
    let newString3 = newString2.replace("?", "").concat(" ahh");
    let nums2 = newString3.split(" ", 3);
    let newString4 = newString3.replace(nums2[0], "");
    let newString5 = newString4.replace(" ahh", "");
    let plus = parseInt(nums2[0]) + parseInt(newString5);
    return plus.toString()
  }  

  else if (query.toLowerCase().includes("multiplied")) {
    let newString = query.replace("What is ", "");
    let newString2 = newString.replace("multiplied", "");
    let newString3 = newString2.replace("?", "").concat(" ahh");
    let nums2 = newString3.split(" ", 3);
    let newString4 = newString3.replace(nums2[0], "");
    let newString5 = newString4.replace(" ahh", "");
    let mul = parseInt(nums2[0]) * parseInt(newString5);
    return mul.toString()
  }  

  else if (query.toLowerCase().includes("minus")) {
    let newString = query.replace("What is ", "");
    let newString2 = newString.replace("minus", "");
    let newString3 = newString2.replace("?", "").concat(" ahh");
    let nums2 = newString3.split(" ", 3);
    let newString4 = newString3.replace(nums2[0], "");
    let newString5 = newString4.replace(" ahh", "");
    let minus = parseInt(nums2[0]) - parseInt(newString5);
    return minus.toString()
  }  

  else if (query.toLowerCase().includes("power")) {
    let newString = query.replace("What is ", "");
    let newString2 = newString.replace("to the power of", "");
    let newString3 = newString2.replace("?", "").concat(" ahh");
    let nums2 = newString3.split(" ", 3);
    let newString4 = newString3.replace(nums2[0], "");
    let newString5 = newString4.replace(" ahh", "");
    let power = Math.pow(parseInt(nums2[0]), parseInt(newString5));
    return power.toString()
  } 

  return "";
}
