let upArrows = document.getElementsByClassName("up");
let downArrows = document.getElementsByClassName("down");
let costList = document.getElementsByClassName("cost");
let countList = document.getElementsByClassName("count");
let totalBox = document.getElementById("total");
let cancelOrderBtn = document.getElementById("cancelOrder");
let viewOrderBtn = document.getElementById("viewOrder");
let makeChangesBtn = document.getElementById("makeChanges");
let placeOrderBtn = document.getElementById("placeOrder");
let myModal = document.getElementById("myModal");

let itemList = document.getElementsByClassName("itemFinal");

cancelOrderBtn.addEventListener("click", restart);
viewOrderBtn.addEventListener("click", reviewOrder);
placeOrderBtn.addEventListener("click", submitOrder);
makeChangesBtn.addEventListener("click", goBack);

for (const up of upArrows) 
{
    up.addEventListener("click", increaseCount);
}
for (const down of downArrows) 
{
    down.addEventListener("click", decreaseCount);
}
function increaseCount(e)
{
    let parent = e.target.parentElement
    let countElement = parent.getElementsByClassName("count")[0];
    let newAmount = parseInt(countElement.innerHTML)+1;
    countElement.innerHTML = newAmount;
    updatePrice();
}
function decreaseCount(e)
{
    let parent = e.target.parentElement
    let countElement = parent.getElementsByClassName("count")[0];
    let newAmount = parseInt(countElement.innerHTML)-1;
    countElement.innerHTML = Math.max(0, newAmount);
    updatePrice();
}
function updatePrice()
{
    let price = 0;
    for (let i = 0; i < costList.length; i++)
    {
        console.log(costList[i].innerHTML + " * " + countList[i].innerHTML);
        price += parseFloat(costList[i].innerHTML) * parseInt(countList[i].innerHTML);
    }
    totalBox.innerHTML = price.toFixed(2);
}
function restart(e)
{
    if (confirm("Are you sure you want to cancel this order?"))
        location.reload();
}
function reviewOrder(e)
{
    for(const item of itemList)
    {
        
    }
    myModal.style.display = "flex";
}
function submitOrder(e)
{
    
}
function goBack(e)
{
    myModal.style.display = "none";
}










//#region Item List
/*
const itemList = [
    {
        itemId: "root",
        itemName:"Classic Root Beer Delight", 
        itemImg: "Files/Rootbeer.webp",
        itemDescription:"The Classic Root Beer Delight is a nostalgic treat that harks back to the heyday of American soda fountains. This indulgent float combines the creamy richness of vanilla ice cream with the distinctively sharp and sweet effervescence of root beer, resulting in a delightful concoction that's both refreshing and comforting.", 
        itemSoda:"Root Beer",
        itemIceCream: "Vanilla Bean",
        itemToppings: "Whipping Cream",
        itemGarnish: "",
        itemCost: 2.00
    },
    {
        itemId: "butter",
        itemName:"Butterbeer Delight", 
        itemImg: "Files/Butterbeer.webp",
        itemDescription:"Butterbeer Delight is a whimsical and enchanting beverage that captures the imagination with its sweet, creamy, and slightly effervescent qualities. Inspired by the magical world of wizards and fantastical tales, this soda float is a beloved treat for fans and newcomers alike, offering a unique and delightful taste experience. Butterbeer Delight is not just a drink; it's an experience that transports you to a world of fantasy and magic.", 
        itemSoda:"Butterbeer",
        itemIceCream: "Butterscotch",
        itemToppings: "Whipping Cream",
        itemGarnish: "Gold Sugar Crystals",
        itemCost: 2.20
    },
    {
        itemId: "cherry",
        itemName:"Cherry Vanilla Twirl", 
        itemImg: "Files/CherryVanilla.webp",
        itemDescription:"Cherry Vanilla Twirl is a vibrant and cheerful soda float that marries the bold, fruity tang of cherry with the smooth sweetness of vanilla. This soda float is a colorful treat that delights the senses and provides a refreshing burst of flavor, perfect for any occasion, especially festive gatherings or a sunny day treat. The Cherry Vanilla Twirl is a fun, playful drink that's perfect for those who enjoy a classic flavor combination with a twist.", 
        itemSoda:"Cherry",
        itemIceCream: "Vanilla Bean",
        itemToppings: "Whipping Cream, Maraschino Cherry",
        itemGarnish: "",
        itemCost: 2.20
    },
    {
        itemId: "carmApp",
        itemName:"Caramel Apple Fizz", 
        itemImg: "Files/CaramelApple.webp",
        itemDescription:"Caramel Apple Fizz is a soda float that brilliantly captures the essence of autumn in a glass, blending the warm, comforting flavors of caramel and apple with a playful fizzy twist. This float is a delightful treat that combines seasonal flavors with the nostalgic joy of a soda float, making it a perfect choice for crisp fall days or anytime you crave a taste of the harvest season. It is a festive and flavorful treat that perfectly embodies the spirit of fall, offering a comforting warmth and a festive flair. It's especially popular during the autumn months but can be enjoyed year-round by those who love the timeless combination of apple and caramel.", 
        itemSoda:"Caramel Cream",
        itemIceCream: "Apple Cinnamon",
        itemToppings: "Whipping Cream, Caramel Sauce",
        itemGarnish: "Gold Sugar Crystals",
        itemCost: 2.20
    },
    {
        itemId: "peach",
        itemName:"Peach Ginger Snap", 
        itemImg: "Files/PeachGinger.webp",
        itemDescription:"Peach Ginger Snap is a refreshing and zesty soda float that combines the sweet juiciness of peaches with the spicy warmth of ginger. This float is perfect for those who appreciate a bright, invigorating drink that pairs the mellow sweetness of fruit with a sharp, aromatic kick, making it a delightful choice for warm weather refreshments or a unique dessert option. The Peach Ginger Snap is an enticing blend of flavors that are both comforting and exhilarating. It’s a favorite among those who enjoy a twist on traditional soda floats, offering a palate-pleasing combination of sweet, spicy, and fizzy sensations.", 
        itemSoda:"Gingerbeer",
        itemIceCream: "Peach",
        itemToppings: "Whipping Cream, Crushed Ginger Snaps",
        itemGarnish: "",
        itemCost: 2.20
    },
    {
        itemId: "blue",
        itemName:"Blueberry Cream Soda", 
        itemImg: "Files/Blueberry.webp",
        itemDescription:"Blueberry Cream Soda is a visually stunning and deliciously refreshing soda float that combines the sweet tartness of blueberries with the creamy richness of ice cream. This float is perfect for blueberry lovers and anyone seeking a fruity, indulgent treat that's both flavorful and visually appealing, making it a great choice for summer gatherings or a delightful dessert. The Blueberry Cream Soda is a delightful treat that offers a refreshing break from more traditional soda float flavors. Its combination of fresh, fruity flavors with creamy sweetness makes it a favorite among those who appreciate a well-crafted beverage that's as enjoyable to look at as it is to drink.", 
        itemSoda:"Blueberry",
        itemIceCream: "Vanilla Bean",
        itemToppings: "Whipping Cream, Blueberries",
        itemGarnish: "",
        itemCost: 2.20
    },
    {
        itemId: "lemon",
        itemName:"Lemon Berry Bash", 
        itemImg: "Files/LemonBerry.webp",
        itemDescription:"Lemon Berry Bash is a vibrant and refreshing soda float that combines the zesty brightness of lemon with the sweet, lush flavors of mixed berries. This float is an excellent choice for those who enjoy a tangy yet sweet beverage, making it a perfect refreshment for hot days or a festive addition to any celebration. The Lemon Berry Bash is a festive and flavorful treat that perfectly blends the tartness of lemon with the sweetness of berries. It's favored by those who appreciate a drink that offers a refreshing palette cleanser or a light dessert option. The combination of flavors and the colorful presentation make it a standout choice at any gathering.", 
        itemSoda:"Mixed Berry",
        itemIceCream: "Lemon Sorbet",
        itemToppings: "Whipping Cream, Mixed Berries",
        itemGarnish: "Lemon Wedge",
        itemCost: 2.20
    },
    {
        itemId: "coconut",
        itemName:"Toasted Coconut Dream", 
        itemImg: "Files/Coconut.webp",
        itemDescription:"Toasted Coconut Dream is a tropical-inspired soda float that brings a taste of the islands to your glass, combining the exotic flavor of coconut with the creamy smoothness of ice cream. This float is perfect for those who love coconut and are looking for a rich, indulgent treat that feels like a mini-vacation in every sip. The Toasted Coconut Dream is a dreamy concoction that appeals to those who enjoy the flavors of the tropics. It’s a popular choice for warm weather days, but it's equally comforting during colder months when you're in need of a sweet, tropical escape. The combination of creamy coconut ice cream and bubbly soda makes it a luxurious treat that's hard to resist.", 
        itemSoda:"Coconut",
        itemIceCream: "Coconut",
        itemToppings: "Whipping Cream",
        itemGarnish: "Coconut Flakes",
        itemCost: 2.20
    },
    {
        itemId: "salted",
        itemName:"Salted Caramel", 
        itemImg: "Files/SaltedCaramel.webp",
        itemDescription:"Salted Caramel Float is a decadently smooth soda float that combines the rich, buttery flavors of caramel with a hint of sea salt. This float is a luxurious treat for anyone who loves the perfect balance of sweet and savory, making it a popular choice for an indulgent dessert or a special occasion treat. The Salted Caramel Float is a sophisticated and delightful choice for those who appreciate the nuanced flavors of caramel and the intriguing contrast of sweet and salty. It's a true indulgence that satisfies both a craving for sweetness and a desire for something a little different.", 
        itemSoda:"Caramel Cream",
        itemIceCream: "Salted Caramel",
        itemToppings: "Whipping Cream, Caramel Sauce",
        itemGarnish: "Sea Salt",
        itemCost: 2.20
    },
    {
        itemId: "mint",
        itemName:"Mint Chocolate Chip Fizz", 
        itemImg: "Files/MintChocolate.webp",
        itemDescription:"Mint Chocolate Chip Fizz is a refreshingly cool soda float that combines the vibrant flavor of mint with the indulgent richness of chocolate. This unique and delicious treat is perfect for mint chocolate lovers, offering a delightful twist on traditional floats with its lively combination of flavors and textures. The Mint Chocolate Chip Fizz is a playful and tasty choice that is both eye-catching and palate-pleasing. It's particularly popular among those who enjoy the classic combination of mint and chocolate, providing a refreshing twist on a beloved flavor pairing. This float is a fantastic option for cooling down on a hot day or as a festive treat at a gathering.", 
        itemSoda:"Chocolate",
        itemIceCream: "Mint Chocolate Chip",
        itemToppings: "Whipping Cream",
        itemGarnish: "Crushed Chocolate Chips",
        itemCost: 2.20
    },
    {
        itemId: "smore",
        itemName:"S'more, Not Less", 
        itemImg: "Files/Smore.webp",
        itemDescription:"S'more, Not Less is a decadent and playful soda float that captures the essence of the classic campfire treat in a glass. This float is perfect for anyone who loves the gooey, chocolatey, and toasted flavors of a s'more, offering a nostalgic taste experience that's both comforting and indulgent. The S'more, Not Less float is a fun and flavorful concoction that's perfect for those who enjoy a bit of whimsy and nostalgia in their treats. It's particularly popular as a special dessert on a cool evening or at a themed party, offering a creative twist on a beloved traditional dessert.", 
        itemSoda:"Marshmallow",
        itemIceCream: "Chocolate",
        itemToppings: "Toasted Marshmallows",
        itemGarnish: "Crushed Graham Crackers",
        itemCost: 2.20
    },
];
*/
//#endregion
//buildItems();
//#region HTML Elements
/*  
    let detailsModal = document.getElementById("details");
    let modifyModal = document.getElementById("modify");
    let itemName = document.getElementById("itemName");
    let itemImg = document.getElementById("itemImg");
    let itemDescription = document.getElementById("itemDescription");
    let itemSoda = document.getElementById("itemSoda");
    let itemIceCream = document.getElementById("itemIceCream");
    let itemToppings = document.getElementById("itemToppings");
    let itemCost = document.getElementById("itemCost");
    let itemGarnish = document.getElementById("itemGarnish");
    let itemCount = document.getElementById("itemCount");
    let sodaOptions = document.getElementById("sodaOptions");
    let iceOptions = document.getElementById("iceOptions");
    let topOptions = document.getElementById("topOptions");
    let garnishOptions = document.getElementById("garnishOptions");
    const allBoxes = document.getElementsByTagName("Input");
    const sodaBoxes = sodaOptions.getElementsByTagName("Input");
    const iceBoxes = iceOptions.getElementsByTagName("Input");
    const topBoxes = topOptions.getElementsByTagName("Input");
    const garnishBoxes = garnishOptions.getElementsByTagName("Input");

    let items = document.getElementsByClassName("item");

    let cancelItem = document.getElementById("cancelItem");
    let modifyItem = document.getElementById("modifyItem");
    let addItem = document.getElementById("addItem");

    let cancelModify = document.getElementById("cancelModify");
    let addModify = document.getElementById("addModify");

    let cancelOrder = document.getElementById("cancelOrder");
    let viewOrder = document.getElementById("viewOrder");

//#endregion

//#region Add Event Listeners
    // When the user clicks on the button, open the modal
    for(let i = 0; i < items.length; i++)
    {
        items[i].addEventListener("click", selectItem);
    }
    itemCount.addEventListener("change", updateCost);
    //Buttons
    // When the user clicks on <span> (x), close the modal
    cancelOrder.addEventListener("click", restart);
    //viewOrder.addEventListener("click", closeDetails);

    //addItem.addEventListener("click", closeDetails);
    cancelItem.addEventListener("click", closeDetails);
    modifyItem.addEventListener("click", modify);
    
    addModify.addEventListener("click", makeChange);
    cancelModify.addEventListener("click", closeModify);
//#endregion
function buildItems()
{
    let main = document.getElementsByTagName("main")[0];
    for (const item of itemList) 
    {
        //Create item container
        const container = document.createElement("div");
        container.classList.add("item");
        container.id=item.itemId;
        //Create Image & put in container
        const img = document.createElement("img");
        img.src = item.itemImg;
        img.alt = item.itemName;
        container.appendChild(img);
        //Create Heading & put in container
        const h2 = document.createElement("h2");
        h2.innerHTML = item.itemName;
        container.appendChild(h2);
        //Create subcontainer
        const sub = document.createElement("div");
        //Put container in main
        main.appendChild(container);
    }
}
function closeDetails(e)
{
    clearSelected();
    detailsModal.style.display = "none";
}
function restart(e)
{
    if (confirm("Are you sure you want to cancel this order?"))
        location.reload();
}
function checkList(boxes, list)
{
    for(let i = 0; i < list.length; i++)
    {
        let txt = list[i]
        if(txt !== "")
        {
            for(let j = 0; j < boxes.length; j++)
            {
                let item = boxes[j];
                if(item.value === txt)
                {
                    item.checked = true;
                    break;
                }
            }
        }
    }
}
function updateCheckBoxes()
{
    clearSelected()
    let list = itemSoda.innerHTML.split(", ");
    checkList(sodaBoxes, list);
    list = itemIceCream.innerHTML.split(", ");
    checkList(iceBoxes, list);
    list = itemToppings.innerHTML.split(", ");
    checkList(topBoxes, list);
    list = itemGarnish.innerHTML.split(", ");
    checkList(garnishBoxes, list);
}
function clearSelected()
{
    for(let j = 0; j < allBoxes.length; j++)
    {
        let item = allBoxes[j];
        item.checked = false;
    }

}
function modify(e)
{
    updateCheckBoxes();
    modifyModal.style.display = "flex";
}

function selectItem(e)
{
    //Clear all checkboxes
    clearSelected();
    //Update Item Content
    let content = itemList.find((item) => item.itemId === e.currentTarget.id);
    itemName.innerHTML = content.itemName;
    itemImg.src = content.itemImg;
    itemDescription.innerHTML = content.itemDescription;
    itemSoda.innerHTML = content.itemSoda;
    itemIceCream.innerHTML = content.itemIceCream;
    itemToppings.innerHTML = content.itemToppings;
    itemGarnish.innerHTML = content.itemGarnish;

    //Check Boxes
    updateCheckBoxes();

    //Update Cost
    let cost = calculateCost();
    itemCost.innerHTML = cost.toFixed(2);
    //itemCost.innerHTML = content.itemCost.toFixed(2);


    //Show Info
    detailsModal.style.display = "flex";
}
function countChecks(boxes)
{
    let count = 0;
    for(let j = 0; j < boxes.length; j++)
    {
        let item = boxes[j];
        if(item.checked == true)
        {
            count++;
        }
    }
    return count;
}
function updateCost(e)
{
    let cost = calculateCost();
    itemCost.innerHTML = cost.toFixed(2);
}
function calculateCost()
{
    const priceOfSoda = 2;
    const priceOfIceCream = 2;
    const priceOfTopping = .5;
    const priceOfGarnish = .1;
    
    let numToppings = countChecks(topBoxes);
    let numGarnish = countChecks(garnishBoxes);
    
    return (priceOfSoda + priceOfIceCream + priceOfTopping * numToppings + priceOfGarnish * numGarnish) * parseInt(itemCount.value);
}


//#region Modify Order Buttons
function makeChange()
{
    console.log("Making Changes...")
    itemSoda.innerHTML = pullChanges(sodaBoxes);
    itemIceCream.innerHTML = pullChanges(iceBoxes);
    itemToppings.innerHTML = pullChanges(topBoxes);
    itemGarnish.innerHTML = pullChanges(garnishBoxes);
    updateCost();
    cancelModify.click();
}
function pullChanges(boxes)
{
    let txt = "";
    for(let j = 0; j < boxes.length; j++)
    {
        let item = boxes[j];
        if(item.checked == true)
        {
            if(txt != "")
                txt += ", "
            txt += item.value;
        }
    }
    return txt;
}
function closeModify(e)
{
    clearSelected();
    modifyModal.style.display = "none";
}
//#endregion
*/