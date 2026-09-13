function test(dadad, callMeWhenDone){
  console.log("Hi start the TestCase");
  callMeWhenDone();
}

test("Verify the login page is working", async (page) => {

});

function garimaStory(item, callMeWhenStoreIsEmpty){
  console.log("Store is busy!");
  //.................
  console.log("Store is empty");
  callMeWhenStoreIsEmpty();
}

function garimaFnBuy(){
  console.log("lets start shopping");
}

garimaStory("starting shopping", () => {
  console.log("lets start shopping");
})