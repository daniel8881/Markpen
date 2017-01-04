import { Mongo } from 'meteor/mongo';

// Inside any meteor method, we can refs this.userId, it's built-in
// why use function instead fat arrow function, because we have to keep this.userId

Meteor.methods({
  'pens.insert': function() {
    return Pens.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId,
      title: 'Document Name'
    });
  },

  'pens.remove': function(pen) {
    return Pens.remove(pen);
  },

  'pens.updateTitle': function(pen, newTitle) {
    return Pens.update(pen._id, { $set: { title: newTitle }});
  },

  'pens.update': function(pen, newContent) {
    return Pens.update(pen._id, { $set: { content: newContent }});
  },

  'pens.share': function(pen, email) {
    return Pens.update(pen._id, { $push: { sharedWith: email }})
  },
});

export const Pens = new Mongo.Collection('pens');