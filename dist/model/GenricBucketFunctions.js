// class GenericBucket{

//   static createBucket(doc) {
//     var bucket = new BlogBucket(doc);
//     bucket.save((err, doc) => {
//     })
//   }
//   static addItem(storeId, item) {
//     super.findOne({ parentStore: storeId }, (err, doc) => {
//       doc.items.push(item);
//     })
//   }

//   static updateItem(storeId, itemId, newDoc) {
//     super.findOne({ parentStore: storeId }, (err, doc) => {
//       for (let counter = 0; counter < doc.items.lenght; this.counter++) {
//         if (doc.items[counter]._id == itemId) {
//           newDoc._id = productId
//           doc.items[counter] = newDoc
//         }
//       }
//       doc.save((err, doc) => { console.log(doc) })
//     })
//   }

//   static updateBucket(storeId, newDoc){
//       super.updateOne({parentStore: storeId}, newDoc)
//   }
//   static deleteBucket(id) {
//     return super.deleteOne({parentStore: id})
//   }
//   static deleteItem(storeId, id){
//     return super.findOne({parentStore:storeId}, (err, doc)=>{
//       doc.items.id(id).pull()
//     })
//   }
// }
"use strict";