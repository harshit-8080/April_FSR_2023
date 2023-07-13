$(document).ready(function () {
  let n = window.localStorage.getItem("cartNumber");
  let cartItems = window.localStorage.getItem("cartItems");
  console.log(n);
  if (cartItems != null) {
    // let data = [...JSON.parse(cartItems)];

    let data = JSON.parse(cartItems);

    console.log("====> ", data);

    // console.log(`checkout-data: ${data}`);

    if (n != null) {
      $("#cartCount").html(n);
    } else {
      $("#cartCount").html("0");
    }

    let total_Amt = 0;
    let count = 1;
    for (cost of data) {
      total_Amt = total_Amt + cost.price;
    }
    $("#totalAmount").html(total_Amt);

    for (let i = 0; i < data.length; i++) {
      console.log("hello");

      count = 1;
      if (data[i] == null) {
        continue;
      }
      for (let j = i + 1; j < data.length; j++) {
        if (data[j] == null) {
          continue;
        }
        if (data[i].id == data[j].id) {
          data[j] = null;
          count++;
        }
      }
      console.log(n);
      $("#countItems").html(n);

      let prodCheckoutContainer = $("<div>").addClass("prodCheckoutContainer");
      let imageLeftBlock = $("<div>").addClass("imageLeftBlock");
      let leftProdImg = $("<img>").attr("src", data[i].preview);
      let rightDetails = $("<div>").addClass("rightDetails");
      let rightHeading = $("<h4>").addClass("rightHead").html(data[i].name);
      let rightProdCount = $("<p>")
        .addClass("rightProdCount")
        .html("x" + count);
      let rightProdPrice = $("<p>")
        .addClass("rightProdPrice")
        .html("Amount: Rs " + data[i].price * count);

      $("#cartList").append(prodCheckoutContainer);
      prodCheckoutContainer.append(imageLeftBlock);
      prodCheckoutContainer.append(rightDetails);
      imageLeftBlock.append(leftProdImg);
      rightDetails.append(rightHeading);
      rightDetails.append(rightProdCount);
      rightDetails.append(rightProdPrice);

      // Redirect to Order Confirmation Page
      console.log(typeof data);
      console.log(data);
      console.log(data.length);

      // let counter = n;
      $(".placeOrder").on("click", function () {
        let orderItemsArr = [];
        for (let i = 0; i < data.length; i++) {
          console.log(data[2].id);

          let prodObj = {
            id: data[i].id,
            name: data[i].name,
            brand: data[i].brand,
            price: data[i].price,
            preview: data[i].preview,
            isAccessory: data[i].isAccessory,
          };
          orderItemsArr.push(prodObj);
        }
        // counter++;
        // console.log(orderItemsArr);
        let dataObj = {
          amount: total_Amt,
          products: orderItemsArr,
        };
        $.post(
          "https://5d76bf96515d1a0014085cf9.mockapi.io/order",
          dataObj,
          function () {
            alert("Order Placed Successfully!");
            localStorage.setItem("cartItems", []);
            location.assign("../OrderConfirmationPg/orderPlaced.html");
          }
        );
      });
    }
  } else {
    console.log("No data available");
  }

  // window.onload = function() {
  //     $('.placeOrder').on("click",function() {
  //         $.ajax({
  //             type: 'GET',
  //             url:"https://5d76bf96515d1a0014085cf9.mockapi.io/order",
  //             success:function(data){
  //                 console.log("Clicked");
  //                 // console.log(data);
  //             },
  //             cache: false
  //         });
  //     });
  // }
});
