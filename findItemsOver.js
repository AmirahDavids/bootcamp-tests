function findItemsOver(list, threshold) {
    var foundItems = [];
    for (var i = 0; i < list.length; i++) {
        const item = list[i];
        if (item.qty > threshold) {
            foundItems.push(item)
        }

    }
    console.log(foundItems)
    return foundItems;
}