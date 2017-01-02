import { Meteor } from 'meteor/meteor';
import { Pens } from '../imports/collections/pens';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('pens', function() {
    return Pens.find({ ownerId: this.userId });
  });
  
  // Meteor.users: all user list
  Meteor.publish('sharedPens', function() {
    const user = Meteor.users.findOne(this.userId);
    if(!user) { return; }
    const email = user.emails[0].address;
    return Pens.find({
      sharedWith: { $elemMatch: { $eq: email }}
    })

  })
});
