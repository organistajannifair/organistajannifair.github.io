let search = document.querySelector('.search-box');
 
    document.querySelector('.#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');

}


let navbar = document.querySelector('.navbar');
 
    document.querySelector('.#menu-icon').onclick = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');

}



let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.c=scrollY > 0);
});

 // Function to calculate total cost
 function calculateTotal() {
    let items = document.getElementById("Textbox1").value.split(" ");

    const itemPrices = {
        "Americano Coffee": 50,
        "Capuccino": 50,
        "Latte": 50,
        "Mocha": 50,
        "Black Coffee": 50,
        "Espresso": 50,
        // Add more clothing items and their prices as needed
    };

    let totalCost = 0;
    items.forEach(item => {
        if (item in itemPrices) {
            totalCost += itemPrices[item];
        }
    });

    return totalCost;
}

// Function to generate receipt
function generateReceipt() {
    let items = document.getElementById("Textbox1").value;
    let totalCost = calculateTotal();

    let receiptText = "Receipt:\n\n";
    receiptText += "Items Purchased:\n";
    receiptText += items + "\n";
    receiptText += "Total Cost: Php" + totalCost.toFixed(2);

    document.getElementById("Textbox2").value = receiptText;
}

function buttonClick(value) {
    document.getElementById("Textbox1").value += value;
}

function clearTextBox1() {
    document.getElementById("Textbox1").value = "";
}

function clearTextBox2() {
    document.getElementById("Textbox2").value = "";


<body>
<center>
<div class="container1" ></div>
    <table>
        <tr>
            <td>
                <textarea id="Textbox1" rows="4" cols="50"></textarea>
            </td>
        </tr>

       
        <tr>
            <td>
                <input type="button" value="Americano" class="itemBtn" onclick="buttonClick(' Americano Coffee Php 50 ')" />
                <input type="button" value="Capuccino" class="itemBtn" onclick="buttonClick(' Cappucino Php 50 ')" />
                <input type="button" value="Mocha" class="itemBtn" onclick="buttonClick(' Mocha Php 50 ')"/>
              
            </td>
        </tr>
        <tr>
            <td>
            <input type="button" value="Latte" class="itemBtn" onclick="buttonClick(' Latte Php 50 ')" />
            <input type="button" value="Black Coffee"  class="itemBtn" onclick="buttonClick('Black Coffee Php 50')"/>
            <input type="button" value="Espresso"  class="itemBtn" onclick="buttonClick('Espresso Php 50')"/>
           /* Add more buttons for additional items here */
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" value="Space" class="spacebtn" onclick="buttonClick(' ')" />
                <input type="button" value="⏎" class="spacebtn" onclick="buttonClick('\n')" />
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" value="<<<" class="spacebtn" onclick="clearTextBox1()" />
                <input type="button" value="Purchase" class="spacebtn" onclick="generateReceipt()" />
            </td>
        </tr>
        <tr>
            <td>
                <textarea id="Textbox2" rows="4" cols="50"></textarea>
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" value="Save" class="spacebtn" onclick="saveFunction()" />
                <input type="button" value="Clear" class="spacebtn" onclick="clearTextBox2()" />
            </td>
        </tr>
    </table>
    </center>
    </body>
}
