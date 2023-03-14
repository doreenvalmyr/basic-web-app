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
    let nums = query.replace("Which of the following numbers is the largest: ", "").split("," 3);
    let largest = 0;
    for (let i = 0; i < 3; i++) {
      if (parseInt(nums[i], 10) > largest) {
        largest = parseInt(nums[i]);
      }
      return largest.toString();
    }
  }

  else if (query.toLowerCase().includes("plus")) {
    return "";
  }  
  return "";
}
