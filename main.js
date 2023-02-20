// like button1

let mybtn1=document.getElementById('addtowishlist1');

function toggle1(){
    if(mybtn1.style.color=="red"){
        mybtn1.style.color="black";
    }
    else{
        mybtn1.style.color="red";
    }
}
// like button2

let mybtn2=document.getElementById('addtowishlist2');

function toggle2(){
    if(mybtn2.style.color=="red"){
        mybtn2.style.color="black";
    }
    else{
        mybtn2.style.color="red";
    }
}
// like button3

let mybtn3=document.getElementById('addtowishlist3');

function toggle3(){
    if(mybtn3.style.color=="red"){
        mybtn3.style.color="black";
    }
    else{
        mybtn3.style.color="red";
    }
}

// like button4

let mybtn4=document.getElementById('addtowishlist4');

function toggle(){if(mybtn4.style.color=="red"){
        mybtn4.style.color="black";
    }
    else{
        mybtn4.style.color="red";
    }
}

const shoppingCart = document.getElementById('container');
const items = document.getElementsByClassName('item-container');
const totalPrice = document.getElementById('total-cost');

let total = 0;

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  const minus = item.getElementsByClassName('minus')[0];
  const plus = item.getElementsByClassName("plus")[0];
  const quantityInput = item.getElementsByTagName("input")[0];
  const deleteBtn = item.getElementsByClassName("btn btn-danger delete-btn")[0];

  const price = parseInt(
    item.getElementsByClassName("price")[0].innerText.substring(1));

  minus.addEventListener("click", () => {
    if (quantityInput.value > 1) {
      quantityInput.value--;
      total -= price;
      totalPrice.innerText = Total Price: $${total};
    }
  });

  plus.addEventListener("click", () => {
    quantityInput.value++;
    total += price;
    totalPrice.innerText = Total Price: $${total};
  });

  deleteBtn.addEventListener("click", () => {
    item.remove();
    total -= price * quantityInput.value;
    totalPrice.innerText = Total Price: $${total};
  });

          total += price * quantityInput.value;
          totalPrice.innerText = "Total Price: $${total}";
        }

        $(".heart.fa").click(function() {
          $(this).toggleClass("fa-heart fa-heart-o");
        });
   


   



