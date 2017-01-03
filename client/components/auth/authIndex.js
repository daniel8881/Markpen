

export const isLoggedIn = (nextState, replace) => {
  if (Meteor.user() !== null) {
    replace({
      pathname: '/u/pens'
    });
  }
}

export const notLoggedIn = (nextState, replace) => {
  if (Meteor.user() === null) {
    replace({
      pathname: '/'
    });
  }
}

