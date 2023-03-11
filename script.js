let advice,id;
async function fetchAdvice() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data1 = await response.json();
      let data = document.getElementById("data");
      data.innerHTML = data1.slip.advice;
      let dataId = document.getElementById("id");
      dataId.innerHTML = data1.slip.id;
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchAdvice();

 function change() {
    fetchAdvice();
 }